using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial
{
    public partial class uploadtest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            

            HttpPostedFile MyFile = Request.Files["file[]"];
            string FileName = "";
            string contentType_ = "";
            string contentLength_ = "";
            string folderSERVER = "C:/micarpetaTest/"; //==>>> Esta carpeta debería tener permiso de lectura y escritura en el servidor.
            string salida = "";

            try
            {
                //EL ARCHIVO SUBIDO
 
                //string otroparametro = "";
                //otroparametro = Request.Form["otroParametro"].ToString();

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

                contentType_ = MyFile.ContentLength.ToString();
                contentLength_ = MyFile.ContentLength.ToString();

                //AQUI INDICO DONDE IR A GRABAR EL ARCHIVO
                MyFile.SaveAs(folderSERVER + FileName);

                salida = "OK_UPLOAD";
            }
            catch(Exception excep){
                salida = "NOOK_UPLOAD|" + excep.Message;
            }
            Response.Headers.Add("Access-Control-Allow-Headers", "*");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Write(salida);
        }
    }
}