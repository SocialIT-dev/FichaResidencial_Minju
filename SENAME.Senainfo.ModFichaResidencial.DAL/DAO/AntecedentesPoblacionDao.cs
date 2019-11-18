using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetAntecedentesPoblacionDao : Repository
    {
        public DataTable ObtenerAntecedentesPoblacion(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETAntecedentesPoblacion", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        DataColumn columNew = dt.Columns.Add("error", typeof(String));
                        columNew.DefaultValue = "";

                        return dt;
                    }
                }
            }
            catch (Exception e)
            {

                DataColumn colum = dt.Columns.Add("error", typeof(String));

                DataRow dr = dt.NewRow();
                string glosaError = "";
                ControlExcepcion ce = new ControlExcepcion();
                glosaError = ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesPoblacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }

        /// <summary>
        /// Método que lista Rango Etaáreo de Atención 
        /// Spring N° 3 - 20191112 - gcastro
        /// </summary>
        /// <returns>Rotorna lista</returns>

        public DataTable ObtenerRangoEtareoAtencion()
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Get_RangoEtareoAtencion", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);
                        cmd.CommandType = CommandType.StoredProcedure;
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        DataColumn columNew = dt.Columns.Add("error", typeof(String));
                        columNew.DefaultValue = "";

                        return dt;
                    }
                }
            }
            catch (Exception e)
            {
                DataColumn colum = dt.Columns.Add("error", typeof(String));
                DataRow dr = dt.NewRow();

                string glosaError = "";
                ControlExcepcion ce = new ControlExcepcion();
                glosaError = ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());
                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerRangoEtareoAtencion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }

        /// <summary>
        /// Método que lista Rango Etareo de Atención por ID
        /// Spring N° 3 - 20191112 - gcastro
        /// </summary>
        /// <returns>Rotorna lista</returns>
        public DataTable ObtenerRangoEtareoAtencionPorID(int idRangoEtareo)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Get_RangoEtareoAtencionPorID", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idRangoEtareo", idRangoEtareo);
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        DataColumn columNew = dt.Columns.Add("error", typeof(String));
                        columNew.DefaultValue = "";

                        return dt;
                    }
                }
            }
            catch (Exception e)
            {
                DataColumn colum = dt.Columns.Add("error", typeof(String));
                DataRow dr = dt.NewRow();

                string glosaError = "";
                ControlExcepcion ce = new ControlExcepcion();
                glosaError = ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());
                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerRangoEtareoAtencionPorID";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);
                return dt;
            }
        }
    }

    public class ResultadoOperacionPoblacionDao : Repository
    {
        public DataTable GrabarAntecedentesPoblacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? SubvencionSename,  
            int? SexoAtiende,  
            int? RangoEtareo,  
            int? PoblacionVigente,  
            string TipoVulneracion,  
            int? ProgramaApadrinamiento)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateAntecedentesPoblacion", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SubvencionSename", SubvencionSename.HasValue ? (object)SubvencionSename : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SexoAtiende", SexoAtiende.HasValue ? (object)SexoAtiende : DBNull.Value);
                        cmd.Parameters.AddWithValue("@RangoEtareo", RangoEtareo.HasValue ? (object)RangoEtareo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@PoblacionVigente", PoblacionVigente.HasValue ? (object)PoblacionVigente : DBNull.Value);
                        cmd.Parameters.AddWithValue("@TipoVulneracion", TipoVulneracion);
                        cmd.Parameters.AddWithValue("@ProgramaApadrinamiento", ProgramaApadrinamiento.HasValue ? (object)ProgramaApadrinamiento : DBNull.Value);
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        DataColumn columNew = dt.Columns.Add("error", typeof(String));
                        columNew.DefaultValue = "";

                        return dt;
                    }
                }
            }
            catch (Exception e)
            {

                DataColumn colum = dt.Columns.Add("error", typeof(String));

                DataRow dr = dt.NewRow();
                string glosaError = "";
                ControlExcepcion ce = new ControlExcepcion();
                glosaError = ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesPoblacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
