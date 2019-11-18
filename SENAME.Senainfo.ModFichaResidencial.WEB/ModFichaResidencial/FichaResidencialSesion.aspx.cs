using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Web.Services;

using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Text;
using System.Security.Cryptography;
using System.Web.Security;

namespace SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial
{
    public partial class FichaResidencialSesion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string idusuario = "";
            try
            {
                if (Session["IdUsuario"] != null)
                {
                    idusuario = Session["IdUsuario"].ToString();

                    if (idusuario != null)
                    {
                            Response.Write("{\"d\":[{\"__type\":\"SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial.\",\"Estatus\":\"Success\",\"NombreProyecto\":\"\",\"NombreInstitucion\":\"\",\"CodProyecto\":0,\"NombreUsuario\":\"" + idusuario + "\",\"error\":\"\"}]}");
                    }
                    else
                    {
                        Response.Write("{\"d\":[{\"__type\":\"SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial.\",\"Estatus\":\"Success\",\"NombreProyecto\":\"\",\"NombreInstitucion\":\"\",\"CodProyecto\":0,\"NombreUsuario\":\"" + "\",\"error\":\"Se ha finalizado la sesión de conexión al servidor. Para poder operar correctamente reingrese a la plataforma.<br />Intentar guardar los datos ya ingresados en la ficha si el sistema lo permite, pero luego siga la instrucción inicial.\"}]}");
                    }

                }
                else {
                    Response.Write("{\"d\":[{\"__type\":\"SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial.\",\"Estatus\":\"Success\",\"NombreProyecto\":\"\",\"NombreInstitucion\":\"\",\"CodProyecto\":0,\"NombreUsuario\":\"" + "\",\"error\":\"Se ha finalizado la sesión de conexión al servidor. Para poder operar correctamente reingrese a la plataforma.<br />Intentar guardar los datos ya ingresados en la ficha si el sistema lo permite, pero luego siga la instrucción inicial.\"}]}");
                }
            }
            catch (Exception ex)
            {
                Response.Write("{\"d\":[{\"__type\":\"SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial.MantenerSesionDto\",\"Estatus\":\"Success\",\"NombreProyecto\":\"\",\"NombreInstitucion\":\"\",\"CodProyecto\":0,\"NombreUsuario\":\"" + idusuario + "\",\"error\":\"" + ex.Message + "|" + ex.Source + "|" + ex.HResult + "|" + ex.InnerException.ToString() + "\"}]}");
            }
        }
    }
}