using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class DatosGeneralesDao : Repository
    {
        public DataTable ObtenerDatosGenerales(int? CodProyecto)
        {
            DataTable dt = new DataTable();
            
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETDatosGenerales", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerDatosGenerales";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ProyectosUsuarioDao : Repository
    {
        public DataTable ObtenerProyectosUsuario(int? IdUsuario)
        {
            DataTable dt = new DataTable();

            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETDatosProyectosUsuario", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuario", IdUsuario.HasValue ? (object)IdUsuario : DBNull.Value);
                        da.SelectCommand = cmd;
                        da.Fill(dt);

                        DataColumn columNew = dt.Columns.Add("error", typeof(String));

                        columNew.DefaultValue = "";

                        return dt;
                    }
                }

            }
            catch (Exception e) {

                DataColumn colum = dt.Columns.Add("error", typeof(String));             
                DataRow dr = dt.NewRow();

                string glosaError = "";
                ControlExcepcion ce = new ControlExcepcion();
                glosaError = ce.ObtieneDetalleExcepcion(e.Message, e.Source, e.StackTrace, e.InnerException.ToString());

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerProyectosUsuario";

                dr["error"] = glosaError;

                dt.Rows.Add(dr);
                
                return dt;
            }
        }
        public DataTable ProyectosXInstitucionYUsuario(int? IdUsuario, int? codigoInstitucion)
        {
            DataTable dt = new DataTable();

            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETDatosProyectosxInstitucionUsuario", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuario", IdUsuario.HasValue ? (object)IdUsuario : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodInstitucion", codigoInstitucion.HasValue ? (object)codigoInstitucion : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ProyectosXInstitucionYUsuario";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class InstitucionesUsuarioDao : Repository
    {
        public DataTable ObtenerInstitucionesUsuario(int? IdUsuario)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETDatosInstitucionesUsuario", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);
                    
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUsuario", IdUsuario.HasValue ? (object)IdUsuario : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerInstitucionesUsuario";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class NiñosVigentesDao : Repository
    {
        public DataTable ObtenerNiñosVigentes(int? CodProyecto)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETVigentesNNA", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerNiñosVigentes";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ResultadoOperacionDao : Repository
    {
        public DataTable GrabarAntecedentesGenerales(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha, 
            int? idUsuarioActualizacion,
            int? PoblacionHombres,
            int? PoblacionMujeres,
            int? PlazasSenameHombres,
            int? PlazasSenameMujeres,
            int? OtrasPlazasHombres,
            int? OtrasPlazasMujeres,
            int? TotalNnaHombres,
            int? TotalNnaMujeres,
            int? TotalAcercamientoHombres,
            int? TotalAcercamientoMujeres,
            int? TotalMayoresHombres,
            int? TotalMayoresMujeres,
            int? FugaHombres,
            int? FugaMujeres,
            int? HospitalizadosHombres,
            int? HosptitalizadosMujeres,
            int? Art80Hombres,
            int? Art80Mujeres,
            int? AbandonoHombres,
            int? AbandonoMujeres,
            int? SentenciaAdopcionHombres,
            int? SentenciaAdopcionMujeres,
            int? EnlaceAdopcionHombres,
            int? EnlaceAdopcionMujeres,
            int? SinSentenciaHombres,
            int? SinSentenciaMujeres,
            int? AdolecentesHijosHombres,
            int? AdolecentesHijosMujeres,
            string DetalleNNAAbandono,
            string DetalleNNAAdolecenteConHijos)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateAntecedentesGenerales", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@PoblacionHombres", PoblacionHombres.HasValue ? (object)PoblacionHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@PoblacionMujeres", PoblacionMujeres.HasValue ? (object)PoblacionMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@PlazasSenameHombres", PlazasSenameHombres.HasValue ? (object)PlazasSenameHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@PlazasSenameMujeres", PlazasSenameMujeres.HasValue ? (object)PlazasSenameMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@OtrasPlazasHombres", OtrasPlazasHombres.HasValue ? (object)OtrasPlazasHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@OtrasPlazasMujeres", OtrasPlazasMujeres.HasValue ? (object)OtrasPlazasMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@TotalNnaHombres", TotalNnaHombres.HasValue ? (object)TotalNnaHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@TotalNnaMujeres", TotalNnaMujeres.HasValue ? (object)TotalNnaMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@TotalAcercamientoHombres", TotalAcercamientoHombres.HasValue ? (object)TotalAcercamientoHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@TotalAcercamientoMujeres", TotalAcercamientoMujeres.HasValue ? (object)TotalAcercamientoMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@TotalMayoresHombres", TotalMayoresHombres.HasValue ? (object)TotalMayoresHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@TotalMayoresMujeres", TotalMayoresMujeres.HasValue ? (object)TotalMayoresMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@FugaHombres", FugaHombres.HasValue ? (object)FugaHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@FugaMujeres", FugaMujeres.HasValue ? (object)FugaMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HospitalizadosHombres", HospitalizadosHombres.HasValue ? (object)HospitalizadosHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HosptitalizadosMujeres", HosptitalizadosMujeres.HasValue ? (object)HosptitalizadosMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Art80Hombres", Art80Hombres.HasValue ? (object)Art80Hombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Art80Mujeres", Art80Mujeres.HasValue ? (object)Art80Mujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AbandonoHombres", AbandonoHombres.HasValue ? (object)AbandonoHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AbandonoMujeres", AbandonoMujeres.HasValue ? (object)AbandonoMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SentenciaAdopcionHombres", SentenciaAdopcionHombres.HasValue ? (object)SentenciaAdopcionHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SentenciaAdopcionMujeres", SentenciaAdopcionMujeres.HasValue ? (object)SentenciaAdopcionMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@EnlaceAdopcionHombres", EnlaceAdopcionHombres.HasValue ? (object)EnlaceAdopcionHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@EnlaceAdopcionMujeres", EnlaceAdopcionMujeres.HasValue ? (object)EnlaceAdopcionMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SinSentenciaHombres", SinSentenciaHombres.HasValue ? (object)SinSentenciaHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SinSentenciaMujeres", SinSentenciaMujeres.HasValue ? (object)SinSentenciaMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AdolecentesHijosHombres", AdolecentesHijosHombres.HasValue ? (object)AdolecentesHijosHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AdolecentesHijosMujeres", AdolecentesHijosMujeres.HasValue ? (object)AdolecentesHijosMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@DetalleNNAAbandono", DetalleNNAAbandono);
                        cmd.Parameters.AddWithValue("@DetalleNNAAdolecenteConHijos", DetalleNNAAdolecenteConHijos);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesGenerales";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class AntecedentesGeneralesDao : Repository
    {
        public DataTable ObtenerAntecedentesGenerales(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETAntecedentesGenerales", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesGenerales";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class NnaAbandonoDao : Repository
    {
        public DataTable ObtenerNnaAbandono(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GetDetalleNnaAbandono", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerNnaAbandono";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class AdolecentesConHijosDao : Repository
    {
        public DataTable ObtenerAdolecentesConHijos(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GetAdolecentesConHijos", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAdolecentesConHijos";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class SETFechaAplicacionDao : Repository
    {
        public DataTable GrabarFechaAplicacionFicha(int? CodFicha, string FechaAplicacion)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateFechaAplicacionFicha", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@FechaAplicacion", FechaAplicacion);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarFechaAplicacionFicha";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class FechaAplicacionDao : Repository
    {
        public DataTable ObtenerFechaAplicacion(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETFechaAplicacionFicha", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerFechaAplicacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ControlExcepcion {
        public string ObtieneDetalleExcepcion(string Message, string Source, string StackTrace, string InnerException)
        {
            string glosaError = "";
            if (Message != "" && Message != null)
                glosaError = glosaError + Message;

            if (Source != "" && Source != null)
                glosaError = glosaError + "|" + Source;

            if (StackTrace != "" && StackTrace != null)
                glosaError = glosaError + "|" + StackTrace;

            if (InnerException != "" && InnerException != null)
                glosaError = glosaError + "|" + InnerException;
            return glosaError;
        }
    }
}
