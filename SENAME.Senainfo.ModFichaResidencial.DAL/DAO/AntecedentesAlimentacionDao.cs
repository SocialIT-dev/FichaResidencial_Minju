using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetAntecedentesAlimentacionDao : Repository
    {
        public DataTable ObtenerAntecedentesAlimentacion(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETAntecedentesAlimentacion", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesAlimentacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }

        public DataTable ObtenerParAlimentacion()
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Get_ParAlimentacion", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesAlimentacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
    public class ResultadoOperacionAlimentacionDao : Repository
    {
        public DataTable GrabarAntecedentesAlimentacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? RegistroHonorario,  
            int? RegistroPlanificacion,  
            int? MenusEspeciales,  
            int? AsesoriaNutricionista,  
            int? CertificadosSanitarios,  
            int? ConservacionAlimentos, 
            int? AlmacenamientoAlimentos,
		    int? EstadoConservacionAlimentos,
            int? CantidadComidas,  
            int? CantidadComidasFeriados,  
            string Observaciones)

        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateAntecedentesAlimentacion", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@RegistroHonorario", RegistroHonorario.HasValue ? (object)RegistroHonorario : DBNull.Value);
                        cmd.Parameters.AddWithValue("@RegistroPlanificacion", RegistroPlanificacion.HasValue ? (object)RegistroPlanificacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@MenusEspeciales", MenusEspeciales.HasValue ? (object)MenusEspeciales : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AsesoriaNutricionista", AsesoriaNutricionista.HasValue ? (object)AsesoriaNutricionista : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CertificadosSanitarios", CertificadosSanitarios.HasValue ? (object)CertificadosSanitarios : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ConservacionAlimentos", ConservacionAlimentos.HasValue ? (object)ConservacionAlimentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AlmacenamientoAlimentos", AlmacenamientoAlimentos.HasValue ? (object)AlmacenamientoAlimentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@EstadoConservacionAlimentos", EstadoConservacionAlimentos.HasValue ? (object)EstadoConservacionAlimentos : DBNull.Value); 
                        cmd.Parameters.AddWithValue("@CantidadComidas", CantidadComidas.HasValue ? (object)CantidadComidas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadComidasFeriados", CantidadComidasFeriados.HasValue ? (object)CantidadComidasFeriados : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Observaciones", Observaciones);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesAlimentacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

}
