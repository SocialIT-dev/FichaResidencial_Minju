using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetAntecedentesInfraestructuraDao : Repository
    {
        public DataTable ObtenerParInfraestructura()
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Get_ParInfraestructura", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerParInfraestructura";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    

    public DataTable ObtenerAntecedentesInfraestructura(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETRecursosMateriales", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesInfraestructura";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }

        /// <summary>
        /// Método que lista ParValores
        /// Spring N° 3
        /// </summary>
        /// <returns>Rotorna lista</returns>
        public DataTable ObtenerParValores()
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.Get_ParValores", con))
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
    }

    public class ResultadoOperacionInfraestructuraDao : Repository
    {
        public DataTable GrabarAntecedentesInfraestructura(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? CantidadOficAdm,  
            int? CantidadSalaReunion,  
            int? CantidadSalaRecepcion,  
            int? CantidadEspaciosVisitas,  
            int? CantidadSalaTalleres,  
            int? CantidadSalaLiving,  
            int? CantidadEnfermeria,  
            int? CantidadRecreacion,  
            int? CantidadAreasVerdes,  
            int? CantidadCocina,  
            int? CantidadComedor,  
            int? CantidadLavanderia,  
            int? CantidadDormitoriosNNA,  
            int? CantidadCamasNNA,  
            int? CantidadColsetLockers,  
            int? CantidadBañosPublicos,  
            int? CantidadBañosNNA,
		    int? CantidadBañosNNANormativa,
		    int? CantidadBañosNNAHombres,
		    int? CantidadBañosNNAMujeres,
		    int? CantidadBañosNNAFuncionamiento,
		    int? CantidadBañosNNAMixtos,  
            int? CantidadDuchasNNA,
  		    int? CantidadDuchasNNANormativa,
		    int? CantidadDuchasNNAHombres,
		    int? CantidadDuchasNNAMujeres,
		    int? CantidadDuchasNNAFuncionamiento,
		    int? CantidadDuchasNNAMixtas,
            int? AmbienteAcorde,  
            int? VestuarioAdecuado,
            int? VestuarioPersonalizadoNNA,
            int? UtilesAseo,  
            int? AguaCaliente,  
            int? CalefonGas,
  		    int? CalefonNormativa,
		    int? LlaveGasNormativa,
            int? SistemaCalefacion,  
            int? Ventilacion,  
            int? AccesoDiscapacitados,  
            int? HabilitaDiscapacitados,  
            string Observaciones)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateRecursosMateriales", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadOficAdm", CantidadOficAdm.HasValue ? (object)CantidadOficAdm : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadSalaReunion", CantidadSalaReunion.HasValue ? (object)CantidadSalaReunion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadSalaRecepcion", CantidadSalaRecepcion.HasValue ? (object)CantidadSalaRecepcion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadEspaciosVisitas", CantidadEspaciosVisitas.HasValue ? (object)CantidadEspaciosVisitas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadSalaTalleres", CantidadSalaTalleres.HasValue ? (object)CantidadSalaTalleres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadSalaLiving", CantidadSalaLiving.HasValue ? (object)CantidadSalaLiving : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadEnfermeria", CantidadEnfermeria.HasValue ? (object)CantidadEnfermeria : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadRecreacion", CantidadRecreacion.HasValue ? (object)CantidadRecreacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadAreasVerdes", CantidadAreasVerdes.HasValue ? (object)CantidadAreasVerdes : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadCocina", CantidadCocina.HasValue ? (object)CantidadCocina : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadComedor", CantidadComedor.HasValue ? (object)CantidadComedor : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadLavanderia", CantidadLavanderia.HasValue ? (object)CantidadLavanderia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDormitoriosNNA", CantidadDormitoriosNNA.HasValue ? (object)CantidadDormitoriosNNA : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadCamasNNA", CantidadCamasNNA.HasValue ? (object)CantidadCamasNNA : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadColsetLockers", CantidadColsetLockers.HasValue ? (object)CantidadColsetLockers : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadBañosPublicos", CantidadBañosPublicos.HasValue ? (object)CantidadBañosPublicos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadBañosNNA", CantidadBañosNNA.HasValue ? (object)CantidadBañosNNA : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadBañosNNANormativa", CantidadBañosNNANormativa.HasValue ? (object)CantidadBañosNNANormativa : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadBañosNNAHombres", CantidadBañosNNAHombres.HasValue ? (object)CantidadBañosNNAHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadBañosNNAMujeres", CantidadBañosNNAMujeres.HasValue ? (object)CantidadBañosNNAMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadBañosNNAFuncionamiento", CantidadBañosNNAFuncionamiento.HasValue ? (object)CantidadBañosNNAFuncionamiento : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadBañosNNAMixtos", CantidadBañosNNAMixtos.HasValue ? (object)CantidadBañosNNAMixtos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDuchasNNA", CantidadDuchasNNA.HasValue ? (object)CantidadDuchasNNA : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDuchasNNANormativa", CantidadDuchasNNANormativa.HasValue ? (object)CantidadDuchasNNANormativa : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDuchasNNAHombres", CantidadDuchasNNAHombres.HasValue ? (object)CantidadDuchasNNAHombres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDuchasNNAMujeres", CantidadDuchasNNAMujeres.HasValue ? (object)CantidadDuchasNNAMujeres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDuchasNNAFuncionamiento", CantidadDuchasNNAFuncionamiento.HasValue ? (object)CantidadDuchasNNAFuncionamiento : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDuchasNNAMixtas", CantidadDuchasNNAMixtas.HasValue ? (object)CantidadDuchasNNAMixtas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AmbienteAcorde", AmbienteAcorde.HasValue ? (object)AmbienteAcorde : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VestuarioAdecuado", VestuarioAdecuado.HasValue ? (object)VestuarioAdecuado : DBNull.Value);
                        cmd.Parameters.AddWithValue("@VestuarioPersonalizadoNNA", VestuarioPersonalizadoNNA.HasValue ? (object)VestuarioPersonalizadoNNA : DBNull.Value); 
                        cmd.Parameters.AddWithValue("@UtilesAseo", UtilesAseo.HasValue ? (object)UtilesAseo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AguaCaliente", AguaCaliente.HasValue ? (object)AguaCaliente : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CalefonGas", CalefonGas.HasValue ? (object)CalefonGas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CalefonNormativa", CalefonNormativa.HasValue ? (object)CalefonNormativa : DBNull.Value);
                        cmd.Parameters.AddWithValue("@LlaveGasNormativa", LlaveGasNormativa.HasValue ? (object)LlaveGasNormativa : DBNull.Value);
                        cmd.Parameters.AddWithValue("@SistemaCalefacion", SistemaCalefacion.HasValue ? (object)SistemaCalefacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Ventilacion", Ventilacion.HasValue ? (object)Ventilacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AccesoDiscapacitados", AccesoDiscapacitados.HasValue ? (object)AccesoDiscapacitados : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HabilitaDiscapacitados", HabilitaDiscapacitados.HasValue ? (object)HabilitaDiscapacitados : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesInfraestructura";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
