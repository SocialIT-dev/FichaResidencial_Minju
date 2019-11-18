using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetAntecedentesSeguridadDao : Repository
    {
        public DataTable ObtenerAntecedentesSeguridad(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETAntecedentesSeguridad", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesSeguridad";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ResultadoOperacionSeguridadDao : Repository
    {
        public DataTable GrabarAntecedentesSeguridad(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? PlanEmergencia,
            int? SimulacroEmergencia,
            int? PlanEmergenciaCalificado,
            int? Extintores,
            int? Señaletica,
            int? ViasEvacuacion,
            int? CapacitacionPersonalEmergencia,
           	int? CapacitacionEmergencia,
		    int? CapacitacionPrimerosAuxilios,
            int? Sanitizacion,
            int? SegDesratizacion,
		    int? SegFumigacion,
		    int? SegSanitizacion,
            int? SistemaElectrico,
            int? ZonasSeguridad,  
            string Observaciones)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateAntecedentesSeguridad", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@PlanEmergencia", PlanEmergencia.HasValue ? (object)PlanEmergencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SimulacroEmergencia", SimulacroEmergencia.HasValue ? (object)SimulacroEmergencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@PlanEmergenciaCalificado", PlanEmergenciaCalificado.HasValue ? (object)PlanEmergenciaCalificado : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Extintores", Extintores.HasValue ? (object)Extintores : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Señaletica", Señaletica.HasValue ? (object)Señaletica : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ViasEvacuacion", ViasEvacuacion.HasValue ? (object)ViasEvacuacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CapacitacionPersonalEmergencia", CapacitacionPersonalEmergencia.HasValue ? (object)CapacitacionPersonalEmergencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CapacitacionEmergencia", CapacitacionEmergencia.HasValue ? (object)CapacitacionEmergencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CapacitacionPrimerosAuxilios", CapacitacionPrimerosAuxilios.HasValue ? (object)CapacitacionPrimerosAuxilios : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Sanitizacion", Sanitizacion.HasValue ? (object)Sanitizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SegDesratizacion", SegDesratizacion.HasValue ? (object)SegDesratizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SegFumigacion", Sanitizacion.HasValue ? (object)SegFumigacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SegSanitizacion", SegSanitizacion.HasValue ? (object)SegSanitizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SistemaElectrico", SistemaElectrico.HasValue ? (object)SistemaElectrico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ZonasSeguridad", ZonasSeguridad.HasValue ? (object)ZonasSeguridad : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesSeguridad";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
