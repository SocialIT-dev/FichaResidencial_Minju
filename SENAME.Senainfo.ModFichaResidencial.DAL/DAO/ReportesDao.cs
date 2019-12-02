using System;
using System.Data;
using System.Data.SqlClient;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class ReportesDao : Repository
    {
        public DataTable ListarReportes()
        {
            var dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETListaReportes", con))
                    {
                        var da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        var columNew = dt.Columns.Add("error", typeof(string));
                        columNew.DefaultValue = "";

                        return dt;
                    }
                }
            }
            catch (Exception e)
            {
                dt.Columns.Add("error", typeof(string));

                var dr = dt.NewRow();
                var glosaError = "";
                var ce = new ControlExcepcion();

                if (e.InnerException != null)
                    glosaError =
                        ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());

                if (string.IsNullOrEmpty(glosaError)) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarRespuestasObservaciones";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }

        /// <summary>
        /// Método que lista reporte Opción: Situación de Fichas Residenciales por Periodo
        /// Sprint 4 - 20191121 - gcastro
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="codInstitucion"></param>
        /// <param name="codProyecto"></param>
        /// <param name="codReporte"></param>
        /// <param name="periodo"></param>
        /// <returns>Datable</returns>
        public DataTable Reporte01PorSituacionFichaResidencial(int idUsuario, int codInstitucion, int codProyecto, int codReporte, string periodo)
        {
            var dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Reporte_01_FichasPorPeriodo", con))
                    {
                        var da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuario", idUsuario);
                        cmd.Parameters.AddWithValue("@CodInstitucion", codInstitucion);
                        cmd.Parameters.AddWithValue("@CodProyecto", codProyecto);
                        cmd.Parameters.AddWithValue("@CodReporte", codReporte);
                        cmd.Parameters.AddWithValue("@ParamPeriodo", periodo).ToString();
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        //var columNew = dt.Columns.Add("error", typeof(string));
                        //columNew.DefaultValue = "";

                        return dt;
                    }
                }
            }
            catch (Exception e)
            {
                dt.Columns.Add("error", typeof(string));

                var dr = dt.NewRow();
                var glosaError = "";
                var ce = new ControlExcepcion();

                if (e.InnerException != null)
                    glosaError =
                        ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());

                if (string.IsNullOrEmpty(glosaError)) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarRespuestasObservaciones";

                dr["error"] = glosaError;
                //dt.Rows.Add(dr);

                return dt;
            }
        }


        public DataTable Reporte01PorSituacionFichaResidencial___(int idUsuario)
        {
            var dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Reporte_01_FichasPorPeriodo", con))
                    {
                        var da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuario", idUsuario);
             
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        //var columNew = dt.Columns.Add("error", typeof(string));
                        //columNew.DefaultValue = "";

                        return dt;
                    }
                }
            }
            catch (Exception e)
            {
                dt.Columns.Add("error", typeof(string));

                var dr = dt.NewRow();
                var glosaError = "";
                var ce = new ControlExcepcion();

                if (e.InnerException != null)
                    glosaError =
                        ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());

                if (string.IsNullOrEmpty(glosaError)) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarRespuestasObservaciones";

                dr["error"] = glosaError;
                //dt.Rows.Add(dr);

                return dt;
            }
        }


        /// <summary>
        /// Método que lista reporte Opción: Ficha Residencial
        /// Sprint 4 - 20191121 - gcastro
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="codInstitucion"></param>
        /// <param name="codProyecto"></param>
        /// <param name="codReporte"></param>
        /// <param name="periodo"></param>
        /// <returns></returns>
        public DataTable Reporte01PorFichaResidencial(int idUsuario, int codInstitucion, int codProyecto, int codReporte, string periodo)
        {
            var dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Reporte_01_FichasResidencial_TestGloria", con))
                    {
                        var da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuario", idUsuario);
                        cmd.Parameters.AddWithValue("@CodInstitucion", codInstitucion);
                        cmd.Parameters.AddWithValue("@CodProyecto", codProyecto);
                        cmd.Parameters.AddWithValue("@CodReporte", codReporte);
                        cmd.Parameters.AddWithValue("@ParamPeriodo", periodo).ToString();
                        da.SelectCommand = cmd;
                        da.Fill(dt);
                        return dt;
                    }
                }
            }
            catch (Exception e)
            {
                dt.Columns.Add("error", typeof(string));

                var dr = dt.NewRow();
                var glosaError = "";
                var ce = new ControlExcepcion();

                if (e.InnerException != null)
                    glosaError =
                        ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());

                if (string.IsNullOrEmpty(glosaError)) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarRespuestasObservaciones";

                dr["error"] = glosaError;
                //dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
