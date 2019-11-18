using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetAntecedentesResidenciaDao : Repository
    {
        public DataTable ObtenerAntecedentesResidencia(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETGestionResidencia", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesResidencia";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ResultadoOperacionResidenciaDao : Repository
    {
        public DataTable GrabarAntecedentesResidencia(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? CatastroRedes,  
            int? RegistroVisitas,  
            int? ProtocoloAcogida,  
            int? AutocuidadoEquipo,  
            int? IntervencionCrisis,  
            int? InformacionNormativa,  
            int? ProtocoloConvivencia,  
            int? ProtocoloReclamos,  
            int? ProtocoloEscucha,  
            int? VinculacionResidencias,  
            int? ProcesosFormacion,  
            int? ProtocoloApadrinamiento,  
            int? ProtocoloTraslado,  
            int? ProtocoloEgreso,  
            int? ProtocoloRedSalud,  
            int? HabilitacionLaboral,
            int? RESProtocoloVisitas,
		    int? RESRegistroVisitas,
		    int? RESVidaIndependiente,
		    int? RESHabilitacionLaboral,
            string Observaciones)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateGestionResidencia", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CatastroRedes", CatastroRedes.HasValue ? (object)CatastroRedes : DBNull.Value);
                        cmd.Parameters.AddWithValue("@RegistroVisitas", RegistroVisitas.HasValue ? (object)RegistroVisitas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloAcogida", ProtocoloAcogida.HasValue ? (object)ProtocoloAcogida : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AutocuidadoEquipo", AutocuidadoEquipo.HasValue ? (object)AutocuidadoEquipo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@IntervencionCrisis", IntervencionCrisis.HasValue ? (object)IntervencionCrisis : DBNull.Value);
                        cmd.Parameters.AddWithValue("@InformacionNormativa", InformacionNormativa.HasValue ? (object)InformacionNormativa : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloConvivencia", ProtocoloConvivencia.HasValue ? (object)ProtocoloConvivencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloReclamos", ProtocoloReclamos.HasValue ? (object)ProtocoloReclamos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloEscucha", ProtocoloEscucha.HasValue ? (object)ProtocoloEscucha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VinculacionResidencias", VinculacionResidencias.HasValue ? (object)VinculacionResidencias : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProcesosFormacion", ProcesosFormacion.HasValue ? (object)ProcesosFormacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloApadrinamiento", ProtocoloApadrinamiento.HasValue ? (object)ProtocoloApadrinamiento : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloTraslado", ProtocoloTraslado.HasValue ? (object)ProtocoloTraslado : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloEgreso", ProtocoloEgreso.HasValue ? (object)ProtocoloEgreso : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloRedSalud", ProtocoloRedSalud.HasValue ? (object)ProtocoloRedSalud : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HabilitacionLaboral", HabilitacionLaboral.HasValue ? (object)HabilitacionLaboral : DBNull.Value);
                        cmd.Parameters.AddWithValue("@RESProtocoloVisitas", RESProtocoloVisitas.HasValue ? (object)RESProtocoloVisitas : DBNull.Value);
		                cmd.Parameters.AddWithValue("@RESRegistroVisitas", RESRegistroVisitas.HasValue ? (object)RESRegistroVisitas : DBNull.Value);
		                cmd.Parameters.AddWithValue("@RESVidaIndependiente", RESVidaIndependiente.HasValue ? (object)RESVidaIndependiente : DBNull.Value);
                        cmd.Parameters.AddWithValue("@RESHabilitacionLaboral", RESHabilitacionLaboral.HasValue ? (object)RESHabilitacionLaboral : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesResidencia";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
