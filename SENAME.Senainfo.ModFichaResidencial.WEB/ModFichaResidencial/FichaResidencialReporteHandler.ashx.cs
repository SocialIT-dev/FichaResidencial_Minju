using System;
using System.IO;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SENAME.Senainfo.ModFichaResidencial.BLL.Impl;

namespace SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial
{
    /// <summary>
    /// Summary description for FichaResidencialReporteHandler
    /// </summary>
    public class FichaResidencialReporteHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {

            var idusuario = Convert.ToInt32(context.Request["idusuario"]);
            var codreporte = Convert.ToInt32(context.Request["codreporte"]);
            var codproyecto = Convert.ToInt32(context.Request["codproyecto"]);

            var reporteImpl = new ReportesImpl();

            switch (codreporte)
            {
                case 1:
                    var dt = reporteImpl.Reporte01FichasPorPeriodoDt(idusuario);
                    context.Response.Clear();
                    context.Response.Buffer = true;
                    context.Response.ContentType = "application/vnd.ms-excel";

                    context.Response.AddHeader("Content-Disposition", "attachment;filename=Reporte01FichasPorPeriodo_" + DateTime.Now.ToShortDateString() + ".xls");

                    var sw = new StringWriter();
                    var htw = new HtmlTextWriter(sw);

                    var gridReporte = new GridView();

                    gridReporte.DataSource = dt;
                    gridReporte.DataBind();

                    gridReporte.RenderControl(htw);

                    context.Response.Write(sw.ToString());
                    break;

                default:
                    break;
            }
            

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}