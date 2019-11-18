using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetAntecedentesSaludDao : Repository
    {
        public DataTable ObtenerAntecedentesSalud(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETAntecedentesSalud", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesSalud";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ResultadoOperacionSaludDao : Repository
    {
        public DataTable GrabarAntecedentesSalud(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? NNACesfam,  
            int? NNASaludMentalDiagnostico,  
            int? NNASaludMental,  
            int? NNACronicos,  
            int? NNADiscapacitados,  
            int? NNAMedicamento,  
            int? NNATratamiento,
  		    int? NNAEsperaTransplante,
		    int? NNATransplantados,
            int? NNADrogas,
  		    int? NNAConsumoAlcohol,
            int? NNAConsumoAlcoholDrogas,
		    int? EspacioResguardoMedicamentos,
		    int? InventarioMedicamentos,
		    int? ControlNinoSano,
            int? ControlAdolescenteSano,
            int? RegistroMedicamentoNNA,  
            int? ProtocoloAdmMedicamentos,  
            int? ControlGinecologico,  
            int? NegadaControlGinecologico,  
            int? AdolecentesEmbarazadas,  
            int? AdolecentesEmbarazadasControl,  
            string Observaciones)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateAntecedentesSalud", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNACesfam", NNACesfam.HasValue ? (object)NNACesfam : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNASaludMentalDiagnostico", NNASaludMentalDiagnostico.HasValue ? (object)NNASaludMentalDiagnostico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNASaludMental", NNASaludMental.HasValue ? (object)NNASaludMental : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNACronicos", NNACronicos.HasValue ? (object)NNACronicos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNADiscapacitados", NNADiscapacitados.HasValue ? (object)NNADiscapacitados : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAMedicamento", NNAMedicamento.HasValue ? (object)NNAMedicamento : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNATratamiento", NNATratamiento.HasValue ? (object)NNATratamiento : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAEsperaTransplante", NNAEsperaTransplante.HasValue ? (object)NNAEsperaTransplante : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNATransplantados", NNATransplantados.HasValue ? (object)NNATransplantados : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNADrogas", NNADrogas.HasValue ? (object)NNADrogas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAConsumoAlcohol", NNAConsumoAlcohol.HasValue ? (object)NNAConsumoAlcohol : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAConsumoAlcoholDrogas", NNAConsumoAlcoholDrogas.HasValue ? (object)NNAConsumoAlcoholDrogas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@EspacioResguardoMedicamentos", EspacioResguardoMedicamentos.HasValue ? (object)EspacioResguardoMedicamentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@InventarioMedicamentos", InventarioMedicamentos.HasValue ? (object)InventarioMedicamentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ControlNinoSano", ControlNinoSano.HasValue ? (object)ControlNinoSano : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ControlAdolescenteSano", ControlAdolescenteSano.HasValue ? (object)ControlAdolescenteSano : DBNull.Value);
                        cmd.Parameters.AddWithValue("@RegistroMedicamentoNNA", RegistroMedicamentoNNA.HasValue ? (object)RegistroMedicamentoNNA : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ProtocoloAdmMedicamentos", ProtocoloAdmMedicamentos.HasValue ? (object)ProtocoloAdmMedicamentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@ControlGinecologico", ControlGinecologico.HasValue ? (object)ControlGinecologico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NegadaControlGinecologico", NegadaControlGinecologico.HasValue ? (object)NegadaControlGinecologico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AdolecentesEmbarazadas", AdolecentesEmbarazadas.HasValue ? (object)AdolecentesEmbarazadas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AdolecentesEmbarazadasControl", AdolecentesEmbarazadasControl.HasValue ? (object)AdolecentesEmbarazadasControl : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesSalud";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
