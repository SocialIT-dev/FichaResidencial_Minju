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
            var codInstitucion = Convert.ToInt32(context.Request["codInstitucion"]);
            var codProyecto = Convert.ToInt32(context.Request["codProyecto"]);
            var codReporte = Convert.ToInt32(context.Request["codReporte"]);
            var periodo = context.Request["periodo"];

            var reporteImpl = new ReportesImpl();

            /* Sprint 4 - 20191121 - gcastro - Se agrega case 2 para la opcion "Ficha Residencial" */
            switch (codReporte)
            {
                case 1:
                    var dtSituacionFichaResidencial = reporteImpl.Reporte01FichasPorPeriodoDt(idusuario, codInstitucion, codProyecto, codReporte, periodo);
                    context.Response.Clear();
                    context.Response.Buffer = true;
                    context.Response.ContentType = "application/vnd.ms-excel";

                    context.Response.AddHeader("Content-Disposition", "attachment;filename=Reporte01FichasPorPeriodo_" + DateTime.Now.ToShortDateString() + ".xls");
                    var swSituacionFichaResidencial = new StringWriter();
                    var htwSituacionFichaResidencial = new HtmlTextWriter(swSituacionFichaResidencial);

                    var gridSituacionFichaResidencial = new GridView();

                    gridSituacionFichaResidencial.DataSource = dtSituacionFichaResidencial;
                    gridSituacionFichaResidencial.DataBind();

                    gridSituacionFichaResidencial.RenderControl(htwSituacionFichaResidencial);
                    context.Response.Write(swSituacionFichaResidencial.ToString());
                    break;
                case 2:
                    var dtFichaResidencial = reporteImpl.Reporte01FichaResidencial(idusuario, codInstitucion, codProyecto, codReporte, periodo);
                    context.Response.Clear();
                    context.Response.Buffer = true;
                    context.Response.ContentType = "application/vnd.ms-excel";

                    context.Response.AddHeader("Content-Disposition", "attachment;filename=Reporte01FichaResidencial_" + DateTime.Now.ToShortDateString() + ".xls");
                    var swFichaResidencial = new StringWriter();
                    var htwFichaResidencial = new HtmlTextWriter(swFichaResidencial);

                    var gridFichaResidencial = new GridView();

                    gridFichaResidencial.DataSource = dtFichaResidencial;
                    gridFichaResidencial.DataBind();

                    gridFichaResidencial.RenderControl(htwFichaResidencial);
                    context.Response.Write(swFichaResidencial.ToString());
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