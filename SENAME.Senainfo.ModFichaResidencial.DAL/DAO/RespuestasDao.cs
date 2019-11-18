using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class SetRespuestaObservacionesDao : Repository
    {
        public DataTable GrabarRespuestasObservaciones(
            int? CodEstado,
            int? IdUsuarioActualizacion,
            int? CodFicha,
            int? IdTipoRespuesta,
            int? CodEstadoDetalle,
            string Respuesta,
            int? IdRespuesta,
            string NombreArchivos,
            string FolderAdjuntos,
            string CodArchivos)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateRespuestaSename", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodEstado", CodEstado.HasValue ? (object)CodEstado : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IdUsuarioActualizacion", IdUsuarioActualizacion.HasValue ? (object)IdUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IdTipoRespuesta", IdTipoRespuesta.HasValue ? (object)IdTipoRespuesta : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoDetalle", CodEstadoDetalle.HasValue ? (object)CodEstadoDetalle : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Respuesta", Respuesta);
                        cmd.Parameters.AddWithValue("@IdRespuesta", IdRespuesta.HasValue ? (object)IdRespuesta : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NombreArchivos", NombreArchivos);
                        cmd.Parameters.AddWithValue("@FolderAdjuntos", FolderAdjuntos);
                        cmd.Parameters.AddWithValue("@CodArchivos", CodArchivos);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarRespuestasObservaciones";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class GetRespuestaSenameDao : Repository
    {
        public DataTable ObtenerRespuestaSename(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETRespuestaSename", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerRespuestaSename";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class SetRespuestaFichaDao : Repository
    {
        public DataTable GrabarRespuestasFicha(
            int? IdUsuarioActualizacion,
            int? CodFicha,
            string Respuesta)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateRespuestaFicha", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuarioActualizacion", IdUsuarioActualizacion.HasValue ? (object)IdUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Respuesta", Respuesta);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarRespuestasFicha";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class SetVisadoFichaDao : Repository
    {
        public DataTable GrabarVisadoFicha(
            int? IdRespuesta,
            int? IdDetalle,
            int? IdUsuarioActualizacion,
            int? IdTipoRespuesta)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.VisarRespuestaSename", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdRespuesta", IdRespuesta.HasValue ? (object)IdRespuesta : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IdDetalle", IdDetalle.HasValue ? (object)IdDetalle : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IdUsuarioActualizacion", IdUsuarioActualizacion.HasValue ? (object)IdUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IdTipoRespuesta", IdTipoRespuesta.HasValue ? (object)IdTipoRespuesta : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarVisadoFicha";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class GetCodArchivoDao : Repository
    {
        public DataTable ObtenerCodArchivo(string NombreArchivo)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETCodArchivo", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@NombreArchivo", NombreArchivo);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Métdodo: ObtenerCodArchivo";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class BorrarArchivoDao : Repository
    {
        public DataTable BorrarArchivo(long CodArchivo)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.BorrarArchivo", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodArchivo", CodArchivo);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: BorrarArchivo";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class SetInicioTramitacionDao : Repository
    {
        public DataTable GrabarInicioTramitacionFicha(
            int? IdUsuarioActualizacion,
            int? CodFicha,
            string Respuesta)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateInicioTramitacion", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuarioActualizacion", IdUsuarioActualizacion.HasValue ? (object)IdUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Respuesta", Respuesta);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarInicioTramitacionFicha";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
