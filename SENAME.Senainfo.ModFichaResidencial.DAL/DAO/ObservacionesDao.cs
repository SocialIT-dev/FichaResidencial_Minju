using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class ListaObservacionesDao : Repository
    {
        public DataTable ObtenerListaObservaciones(int? CodProyecto, 
                                                   int? VPendiente,
                                                   int? VProceso,
                                                   int? VFinalizada,
                                                   int? CantidadPag,
                                                   int? CodFichaFinal,
                                                   int? CodFichaHijo,
                                                   int? IdUsuarioSenainfo,
                                                   int? CodInstitucion,
                                                   int? numpagina)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETListaObservacionesJuez", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VPendiente", VPendiente.HasValue ? (object)VPendiente : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VProceso", VProceso.HasValue ? (object)VProceso : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VFinalizada", VFinalizada.HasValue ? (object)VFinalizada : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadPag", CantidadPag.HasValue ? (object)CantidadPag : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodFichaFinal", CodFichaFinal.HasValue ? (object)CodFichaFinal : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodFichaHijo", CodFichaHijo.HasValue ? (object)CodFichaHijo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IdUsuarioSenainfo", IdUsuarioSenainfo.HasValue ? (object)IdUsuarioSenainfo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodInstitucion", CodInstitucion.HasValue ? (object)CodInstitucion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@numpagina", numpagina.HasValue ? (object)numpagina : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerListaObservaciones";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }

        public DataTable ObtenerListaObservacionesTotal(
                                                   int? CodProyecto,
                                                   int? VPendiente,
                                                   int? VProceso,
                                                   int? VFinalizada,
                                                   int? CantidadPag,
                                                   int? CodFichaFinal,
                                                   int? CodFichaHijo,
                                                   int? IdUsuarioSenainfo,
                                                   int? CodInstitucion)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETListaObservacionesJuezTotalizador", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VPendiente", VPendiente.HasValue ? (object)VPendiente : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VProceso", VProceso.HasValue ? (object)VProceso : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VFinalizada", VFinalizada.HasValue ? (object)VFinalizada : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadPag", CantidadPag.HasValue ? (object)CantidadPag : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodFichaFinal", CodFichaFinal.HasValue ? (object)CodFichaFinal : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodFichaHijo", CodFichaHijo.HasValue ? (object)CodFichaHijo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IdUsuarioSenainfo", IdUsuarioSenainfo.HasValue ? (object)IdUsuarioSenainfo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodInstitucion", CodInstitucion.HasValue ? (object)CodInstitucion : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerListaObservacionesTotal";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }

    }

    public class ObservacionesAlimentacionDao : Repository
    {
        public DataTable ObtenerObservacionesAlimentacion(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesAlimentacion", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesAlimentacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesEducacionDao : Repository
    {
        public DataTable ObtenerObservacionesEducacion(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesEducacion", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesEducacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesGeneralesDao : Repository
    {
        public DataTable ObtenerObservacionesGenerales(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesGenerales", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesGenerales";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesPoblacionDao : Repository
    {
        public DataTable ObtenerObservacionesPoblacion(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesPoblacion", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesPoblacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesSaludDao : Repository
    {
        public DataTable ObtenerObservacionesSalud(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesSalud", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesSalud";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesSeguridadDao : Repository
    {
        public DataTable ObtenerObservacionesSeguridad(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesSeguridad", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesSeguridad";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesPersonalDao : Repository
    {
        public DataTable ObtenerObservacionesPersonal(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesPersonal", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesPersonal";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesFichaDao : Repository
    {
        public DataTable ObtenerObservacionesFicha(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesFicha", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesFicha";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesGestionResidenciaDao : Repository
    {
        public DataTable ObtenerObservacionesGestionResidencia(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesGestionResidencia", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesGestionResidencia";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ObservacionesMaterialesDao : Repository
    {
        public DataTable ObtenerObservacionesMateriales(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETObservacionesMateriales", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerObservacionesMateriales";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class NNAEntrevistadosDao : Repository
    {
        public DataTable ObtenerNNAEntrevistados(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETNNAEntrevistados", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerNNAEntrevistados";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
