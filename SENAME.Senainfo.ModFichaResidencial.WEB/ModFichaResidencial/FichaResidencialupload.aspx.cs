using System;
using System.Web;
using System.IO;
using System.Data;
using SenainfoSdk.Net;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Impl;

namespace SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial
{
    public partial class FichaResidencialupload : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string output = "";

            ////<<== DESBLOQUEAR EN PRODUCCION EL SIGUIENTE BLOQUEO LINEAS
            if (Session["tokens"] == null || ((DataSet)Session["tokens"]).Tables[0].Rows.Count == 0)
            {
                output = "{\"upload\":\"ERROR\",\"data\":\"" + "Se ha producido un error al tratar de adjuntar un archivo. El sistema indica que se la sesión asociada al usuario se ha perdido. Por favor, reintentar y si este problema de persiste, contactar al Administrador." + "\"}";
            }
            else
            {
                if (!windowFR.existetoken("61471B04-7513-468F-A9E6-EB545E4C04FE"))
                {
                    output = "{\"upload\":\"ERROR\",\"data\":\"" + "Se ha producido un error al tratar de adjuntar un archivo. El sistema indica que usted no tiene permiso para realizar esta operación. Si usted considera que posee los permisos correspondientes, por favor, contactar al Administrador y señalar esta situación." + "\"}";
                }
                else
                {


                    string pathfile = "";
                    string FileName = "";
                    string sobreescribir = "NO";
                    string msgproc = "";
                    long codarchivo = 0;
                    string linkarchivo = "";

                    string mm_s;
                    string dd_s;
                    string prefijofolder = "";
                    Boolean noexistaFolder = true;
                    string folderRespuestaActual = "";

                    HttpPostedFile MyFile = Request.Files["file[]"];
                    prefijofolder = Request.Form["folderinput"].ToString();
                    pathfile = Request.Form["rutarepositorio"].ToString() + "ficharesidencialadjuntos\\" + DateTime.Now.Year.ToString() + "\\";
                    sobreescribir = Request.Form["sobreescribir"].ToString();


                    //Setting location to upload files
                    try
                    {
                        if (MyFile.ContentLength > 0)
                        {
                            DateTime d = new DateTime();
                            d = DateTime.Now;
                            int yyyy = d.Year; 
                            int mm = d.Month;
                            int dd = d.Day;


                            if (prefijofolder == "")
                            {
                                int correlativo = 1;

                                if (mm < 10) mm_s = "0" + mm; else mm_s = mm.ToString();
                                if (dd < 10) dd_s = "0" + dd; else dd_s = dd.ToString();
                                prefijofolder = yyyy.ToString() + mm_s + dd_s;

                                //SI NO EXISTE EL DIRECTORIO BASE LO CREO
                                if (!Directory.Exists(pathfile))
                                {
                                    Directory.CreateDirectory(pathfile);
                                }

                                while (noexistaFolder)
                                {

                                    if (!Directory.Exists(pathfile + prefijofolder + "_" + correlativo.ToString()))
                                    {
                                        noexistaFolder = false;
                                        prefijofolder = prefijofolder + "_" + correlativo.ToString();
                                        folderRespuestaActual = pathfile + prefijofolder + "\\";
                                        Directory.CreateDirectory(folderRespuestaActual);
                                    }
                                    correlativo++;
                                }
                            }
                            else
                            {
                                folderRespuestaActual = pathfile + prefijofolder + "\\";
                            }

                            //Determining file name. You can format it as you wish.
                            FileName = MyFile.FileName;
                            //Determining file size.
                            int FileSize = MyFile.ContentLength;
                            //Creating a byte array corresponding to file size.
                            byte[] FileByteArray = new byte[FileSize];
                            //Posted file is being pushed into byte array.
                            MyFile.InputStream.Read(FileByteArray, 0, FileSize);
                            //Uploading properly formatted file to server.
                            FileName = FileName.Replace(";", "-");
                            //MyFile.SaveAs(folderRespuestaActual + FileName);
                            string contentType_ = MyFile.ContentLength.ToString();
                            string contentLength_ = MyFile.ContentLength.ToString();

                            ConsultaBaseSDK_archivo consultaSDK = new ConsultaBaseSDK_archivo();
                            codarchivo = consultaSDK.ConsultaArchivo(FileName + "ficharesidencialadjuntos\\" + DateTime.Now.Year.ToString() + "\\" + prefijofolder + "\\");

                            CargaArchivo loadFile = new CargaArchivo();
                            DescargaArchivo downFile = new DescargaArchivo();

                            if (codarchivo == 0)
                            {
                                
                                loadFile.MaxFileNameLength = 100; // Largo de nombre de Archivo
                                loadFile.IdentificadorOrigen = 4032;// Usualmente la ID Del Adjunto
                                loadFile.IdentificadorSistema = 6; // Identicador de Sistema ===> FichaResidencial = 6
                                loadFile.IdUsuario = Convert.ToInt32(Session["IdUsuario"]);
                                loadFile.RutaVirtual = "ficharesidencialadjuntos\\" + DateTime.Now.Year.ToString() + "\\" + prefijofolder + "\\";
                                loadFile.RutRelativa = "ficharesidencialadjuntos\\\\" + DateTime.Now.Year.ToString() + "\\" + prefijofolder + "\\";
                                loadFile.SessionEliminar = Session["IdUsuario"].ToString();

                                loadFile.GuardarArchivos(FileByteArray, FileName, out msgproc);

                                codarchivo = loadFile.CodArchivo;
             
                                linkarchivo = downFile.GetLinkWeb(codarchivo);

                                output = "{\"upload\":\"OK\",\"data\":\"" + FileName + "\",\"ContentLength\":\"" + contentLength_ + "\",\"ContentType\":\"" + contentType_ + "\",\"folderinput\":\"" + prefijofolder + "\",\"codarchivo\":\"" + codarchivo + "\",\"nombre_original\":\"" + FileName + "\",\"linkarchivo\":\"" + linkarchivo + "\"}";    

                            }
                            else {
                                if (sobreescribir == "SI")
                                {
                                    MyFile.SaveAs(pathfile + prefijofolder + "\\" + codarchivo + "_" + Session["IdUsuario"].ToString() + "_"  + FileName);

                                    MyFile = null;

                                    linkarchivo = downFile.GetLinkWeb(codarchivo);

                                    output = "{\"upload\":\"OK\",\"data\":\"" + FileName + "\",\"ContentLength\":\"" + contentLength_ + "\",\"ContentType\":\"" + contentType_ + "\",\"folderinput\":\"" + prefijofolder + "\",\"codarchivo\":\"" + codarchivo + "\",\"nombre_original\":\"" + FileName + "\",\"linkarchivo\":\"" + linkarchivo + "\"}";
                                }
                                else {
                                    output = "{\"upload\":\"OK_OVERWRITE\",\"data\":\"" + Session["IdUsuario"].ToString() + "_" + FileName + "\",\"ContentLength\":\"" + contentLength_ + "\",\"ContentType\":\"" + contentType_ + "\",\"folderinput\":\"" + "" + "\",\"codarchivo\":\"" + "0" + "\"}"; 
                                }
                            }

                        }
                    }
                    catch (Exception BlueScreen)
                    {
                        //Handle errors
                        output = "{\"upload\":\"ERROR\",\"data\":\"" + "Se ha producido un error al tratar de adjuntar un archivo: " + BlueScreen.Message + ". Por favor, reintentar y si el error persiste contactar al Administrador." + "\"}";
                    }


            //LAS SIGUIENTES DOS LLAVES SE COMENTAN EN DESARROLLO
        }
    }


    //PARA PROBAR ERROR AL CARGAR (POSIBLES ERRORES: DE SESSIÓN, DE PERMISO o UNA EXCEPCIÓN)
    //output = "{\"upload\":\"ERROR\",\"data\":\"" + "Se ha producido un error al tratar de adjuntar un archivo: ERROR DE PRUEBA. Por favor, reintentar y si el error persiste contactar al Administrador." + "\"}";

    Response.Write(output);

        }
        public class ConsultaBaseSDK_archivo
        {
            public long ConsultaArchivo(string archivo) {
                long codarchivo = 0;
                GetCodArchivoImpl _getCodArchivoImpl = new GetCodArchivoImpl();

                var dt = _getCodArchivoImpl.ObtenerCodArchivo(archivo);

                codarchivo = Convert.ToInt32 ( dt[0].CodArchivo  );
                return codarchivo;
            }
        
        }
    }
}