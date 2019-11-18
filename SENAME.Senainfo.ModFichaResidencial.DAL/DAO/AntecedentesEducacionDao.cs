using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetAntecedentesEducacionDao : Repository
    {
        public DataTable ObtenerAntecedentesEducacion(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETAntecedentesEducacion", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerAntecedentesEducacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ResultadoOperacionEducacionDao : Repository
    {
        public DataTable GrabarAntecedentesEducacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? NNAEducacion,  
            int? NNAEducacionNo,
            int? NNAEducacionNoMotivo,
            int? NNARetrasoEscolar,  
            int? NNAMatriculaCancelada,  
            int? NNAEducaionEspecial,  
            int? NNANivelacion,
            int? NNAMatriculados,
		    int? NNAExamenesLibres,
            int? EspaciosEstudios,  
            int? MaterialBibliografico,  
            int? Computadores,
            int? AccesoInternetControlado,  
            string Observaciones)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateAntecedentesEducacion", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAEducacion", NNAEducacion.HasValue ? (object)NNAEducacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAEducacionNo", NNAEducacionNo.HasValue ? (object)NNAEducacionNo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAEducacionNoMotivo", NNAEducacionNoMotivo.HasValue ? (object)NNAEducacionNoMotivo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNARetrasoEscolar", NNARetrasoEscolar.HasValue ? (object)NNARetrasoEscolar : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAMatriculaCancelada", NNAMatriculaCancelada.HasValue ? (object)NNAMatriculaCancelada : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAEducaionEspecial", NNAEducaionEspecial.HasValue ? (object)NNAEducaionEspecial : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNANivelacion", NNANivelacion.HasValue ? (object)NNANivelacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAMatriculados", NNAMatriculados.HasValue ? (object)NNAMatriculados : DBNull.Value);
                        cmd.Parameters.AddWithValue("@NNAExamenesLibres", NNAExamenesLibres.HasValue ? (object)NNAExamenesLibres : DBNull.Value);
                        cmd.Parameters.AddWithValue("@EspaciosEstudios", EspaciosEstudios.HasValue ? (object)EspaciosEstudios : DBNull.Value);
                        cmd.Parameters.AddWithValue("@MaterialBibliografico", MaterialBibliografico.HasValue ? (object)MaterialBibliografico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@Computadores", Computadores.HasValue ? (object)Computadores : DBNull.Value);
                        cmd.Parameters.AddWithValue("@AccesoInternetControlado", AccesoInternetControlado.HasValue ? (object)AccesoInternetControlado : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesEducacion";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
