using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class GetDotacionPersonalDao : Repository
    {
        public DataTable ObtenerDotacionPersonal(int? CodFicha)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.GETDotacionPersonal", con))
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: ObtenerDotacionPersonal";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }

    public class ResultadoOperacionPersonalDao : Repository
    {
        public DataTable GrabarAntecedentesPersonal(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? CantidadDirector,  
            int? CodJornadaDirector,  
            int? HorasSemDirector,  
            int? CantidadAsistenteSocial,  
            int? CodJornadaAsistenteSocial,  
            int? HorasSemAsistenteSocial,  
            int? CantidadPsicologo,  
            int? CodJornadaPsicologo,  
            int? HorasSemPsicologo,  
            int? CantidadEnfermero,  
            int? CodJornadaEnfermero,  
            int? HorasSemEnfermero,  
            int? CantidadAuxiliarEnfermeria,  
            int? CodJornadaAuxiliarEnfermeria,  
            int? HorasSemAuxiliarEnfermeria,  
            int? CantidadMedico,  
            int? CodJornadaMedico,  
            int? HorasSemMedico,  
            int? CantidadPsiquiatra,  
            int? CodJornadaPsiquiatra,  
            int? HorasSemPsiquiatra,  
            int? CantidadTerapeutaOcupacional,  
            int? CodJornadaTerapeutaOcupacional,  
            int? HorasSemTerapeutaOcupacional,  
            int? CantidadKinesiolgo,  
            int? CodJornadaKinesiologo,  
            int? HorasSemKinesiologo,  
            int? CantidadNutricionista,  
            int? CodJornadaNutricionista,  
            int? HorasSemNutricionista,  
            int? CantidadFonoaudiologo,  
            int? CodJornadaFonoaudiologo,  
            int? HorasSemFonoaudiolgo,  
            int? CantidadProfEducFisica,  
            int? CodJornadaProfEducFisica,  
            int? HorasSemProfEducFisica,  
            int? CantidadPsicopedagogo,  
            int? CodJornadaPsicopedagogo,  
            int? HorasSemPsicopedagogo,  
            int? CantidadEducadoraParvulos,  
            int? CodJornadaEducadoraParvulos,  
            int? HorasSemEducadoraParvulos,  
            int? CantidadEducadorTratoDirecto,  
            int? CodJornadaEducadorTratoDirecto,  
            int? HorasSemEducadorTratoDirecto,  
            int? CantidadManipuladorAlimentos,  
            int? CodJornadaManipuladorAlimentos,  
            int? HorasSemManipuladorAlimentos,  
            int? CantidadApoyoAdm,  
            int? CodJornadaApoyoAdm,  
            int? HorasSemApoyoAdm,  
            int? CantidadPersonalAseo,  
            int? CodJornadaPersonalAseo,  
            int? HorasSemPersonalAseo,  
            int? CantidadPersonalLavanderia,  
            int? CodJornadaPersonalLavanderia,  
            int? HorasSemPersonalLavanderia,  
            int? CantidadMonitoresTalleristas,  
            int? CodJornadaMonitoresTalleristas,  
            int? HorasSemMonitoresTalleristas,  
            int? CantidadAlumnosPractica,  
            int? CodJornadaAlumnosPractica,  
            int? HorasSemAlumnosPractica,  
            int? CantidadApoyoVoluntario,  
            int? CodJornadaApoyoVoluntario,  
            int? HorasSemApoyoVoluntario,  
            int? CantidadOtros,  
            int? CodJornadaOtros,  
            int? HorasSemOtros,  
            int? CantidadLicencia,  
            int? CodJornadaLicencia,  
            int? HorasSemLicencia,  
            int? CantidadSuplenteLicencia,  
            int? CodJornadaSuplenteLicencia,  
            int? HorasSemSuplenteLicencia,  
            string Observaciones)
        {
            DataTable dt = new DataTable();
            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.InsertUpdateDotacionPersonal", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);


                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodFicha", CodFicha.HasValue ? (object)CodFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodEstadoFicha", CodEstadoFicha.HasValue ? (object)CodEstadoFicha : DBNull.Value);
                        cmd.Parameters.AddWithValue("@idUsuarioActualizacion", idUsuarioActualizacion.HasValue ? (object)idUsuarioActualizacion : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadDirector", CantidadDirector.HasValue ? (object)CantidadDirector : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaDirector", CodJornadaDirector.HasValue ? (object)CodJornadaDirector : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemDirector", HorasSemDirector.HasValue ? (object)HorasSemDirector : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadAsistenteSocial", CantidadAsistenteSocial.HasValue ? (object)CantidadAsistenteSocial : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaAsistenteSocial", CodJornadaAsistenteSocial.HasValue ? (object)CodJornadaAsistenteSocial : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemAsistenteSocial", HorasSemAsistenteSocial.HasValue ? (object)HorasSemAsistenteSocial : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadPsicologo", CantidadPsicologo.HasValue ? (object)CantidadPsicologo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaPsicologo", CodJornadaPsicologo.HasValue ? (object)CodJornadaPsicologo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemPsicologo", HorasSemPsicologo.HasValue ? (object)HorasSemPsicologo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadEnfermero", CantidadEnfermero.HasValue ? (object)CantidadEnfermero : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaEnfermero", CodJornadaEnfermero.HasValue ? (object)CodJornadaEnfermero : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemEnfermero", HorasSemEnfermero.HasValue ? (object)HorasSemEnfermero : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadAuxiliarEnfermeria", CantidadAuxiliarEnfermeria.HasValue ? (object)CantidadAuxiliarEnfermeria : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaAuxiliarEnfermeria", CodJornadaAuxiliarEnfermeria.HasValue ? (object)CodJornadaAuxiliarEnfermeria : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemAuxiliarEnfermeria", HorasSemAuxiliarEnfermeria.HasValue ? (object)HorasSemAuxiliarEnfermeria : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadMedico", CantidadMedico.HasValue ? (object)CantidadMedico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaMedico", CodJornadaMedico.HasValue ? (object)CodJornadaMedico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemMedico", HorasSemMedico.HasValue ? (object)HorasSemMedico : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadPsiquiatra", CantidadPsiquiatra.HasValue ? (object)CantidadPsiquiatra : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaPsiquiatra", CodJornadaPsiquiatra.HasValue ? (object)CodJornadaPsiquiatra : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemPsiquiatra", HorasSemPsiquiatra.HasValue ? (object)HorasSemPsiquiatra : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadTerapeutaOcupacional", CantidadTerapeutaOcupacional.HasValue ? (object)CantidadTerapeutaOcupacional : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaTerapeutaOcupacional", CodJornadaTerapeutaOcupacional.HasValue ? (object)CodJornadaTerapeutaOcupacional : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemTerapeutaOcupacional", HorasSemTerapeutaOcupacional.HasValue ? (object)HorasSemTerapeutaOcupacional : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadKinesiolgo", CantidadKinesiolgo.HasValue ? (object)CantidadKinesiolgo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaKinesiologo", CodJornadaKinesiologo.HasValue ? (object)CodJornadaKinesiologo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemKinesiologo", HorasSemKinesiologo.HasValue ? (object)HorasSemKinesiologo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadNutricionista", CantidadNutricionista.HasValue ? (object)CantidadNutricionista : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaNutricionista", CodJornadaNutricionista.HasValue ? (object)CodJornadaNutricionista : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemNutricionista", HorasSemNutricionista.HasValue ? (object)HorasSemNutricionista : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadFonoaudiologo", CantidadFonoaudiologo.HasValue ? (object)CantidadFonoaudiologo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaFonoaudiologo", CodJornadaFonoaudiologo.HasValue ? (object)CodJornadaFonoaudiologo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemFonoaudiolgo", HorasSemFonoaudiolgo.HasValue ? (object)HorasSemFonoaudiolgo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadProfEducFisica", CantidadProfEducFisica.HasValue ? (object)CantidadProfEducFisica : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaProfEducFisica", CodJornadaProfEducFisica.HasValue ? (object)CodJornadaProfEducFisica : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemProfEducFisica", HorasSemProfEducFisica.HasValue ? (object)HorasSemProfEducFisica : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadPsicopedagogo", CantidadPsicopedagogo.HasValue ? (object)CantidadPsicopedagogo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaPsicopedagogo", CodJornadaPsicopedagogo.HasValue ? (object)CodJornadaPsicopedagogo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemPsicopedagogo", HorasSemPsicopedagogo.HasValue ? (object)HorasSemPsicopedagogo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadEducadoraParvulos", CantidadEducadoraParvulos.HasValue ? (object)CantidadEducadoraParvulos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaEducadoraParvulos", CodJornadaEducadoraParvulos.HasValue ? (object)CodJornadaEducadoraParvulos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemEducadoraParvulos", HorasSemEducadoraParvulos.HasValue ? (object)HorasSemEducadoraParvulos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadEducadorTratoDirecto", CantidadEducadorTratoDirecto.HasValue ? (object)CantidadEducadorTratoDirecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaEducadorTratoDirecto", CodJornadaEducadorTratoDirecto.HasValue ? (object)CodJornadaEducadorTratoDirecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemEducadorTratoDirecto", HorasSemEducadorTratoDirecto.HasValue ? (object)HorasSemEducadorTratoDirecto : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadManipuladorAlimentos", CantidadManipuladorAlimentos.HasValue ? (object)CantidadManipuladorAlimentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaManipuladorAlimentos", CodJornadaManipuladorAlimentos.HasValue ? (object)CodJornadaManipuladorAlimentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemManipuladorAlimentos", HorasSemManipuladorAlimentos.HasValue ? (object)HorasSemManipuladorAlimentos : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadApoyoAdm", CantidadApoyoAdm.HasValue ? (object)CantidadApoyoAdm : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaApoyoAdm", CodJornadaApoyoAdm.HasValue ? (object)CodJornadaApoyoAdm : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemApoyoAdm", HorasSemApoyoAdm.HasValue ? (object)HorasSemApoyoAdm : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadPersonalAseo", CantidadPersonalAseo.HasValue ? (object)CantidadPersonalAseo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaPersonalAseo", CodJornadaPersonalAseo.HasValue ? (object)CodJornadaPersonalAseo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemPersonalAseo", HorasSemPersonalAseo.HasValue ? (object)HorasSemPersonalAseo : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadPersonalLavanderia", CantidadPersonalLavanderia.HasValue ? (object)CantidadPersonalLavanderia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaPersonalLavanderia", CodJornadaPersonalLavanderia.HasValue ? (object)CodJornadaPersonalLavanderia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemPersonalLavanderia", HorasSemPersonalLavanderia.HasValue ? (object)HorasSemPersonalLavanderia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadMonitoresTalleristas", CantidadMonitoresTalleristas.HasValue ? (object)CantidadMonitoresTalleristas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaMonitoresTalleristas", CodJornadaMonitoresTalleristas.HasValue ? (object)CodJornadaMonitoresTalleristas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemMonitoresTalleristas", HorasSemMonitoresTalleristas.HasValue ? (object)HorasSemMonitoresTalleristas : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadAlumnosPractica", CantidadAlumnosPractica.HasValue ? (object)CantidadAlumnosPractica : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaAlumnosPractica", CodJornadaAlumnosPractica.HasValue ? (object)CodJornadaAlumnosPractica : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemAlumnosPractica", HorasSemAlumnosPractica.HasValue ? (object)HorasSemAlumnosPractica : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadApoyoVoluntario", CantidadApoyoVoluntario.HasValue ? (object)CantidadApoyoVoluntario : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaApoyoVoluntario", CodJornadaApoyoVoluntario.HasValue ? (object)CodJornadaApoyoVoluntario : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemApoyoVoluntario", HorasSemApoyoVoluntario.HasValue ? (object)HorasSemApoyoVoluntario : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadOtros", CantidadOtros.HasValue ? (object)CantidadOtros : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaOtros", CodJornadaOtros.HasValue ? (object)CodJornadaOtros : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemOtros", HorasSemOtros.HasValue ? (object)HorasSemOtros : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadLicencia", CantidadLicencia.HasValue ? (object)CantidadLicencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaLicencia", CodJornadaLicencia.HasValue ? (object)CodJornadaLicencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemLicencia", HorasSemLicencia.HasValue ? (object)HorasSemLicencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CantidadSuplenteLicencia", CantidadSuplenteLicencia.HasValue ? (object)CantidadSuplenteLicencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@CodJornadaSuplenteLicencia", CodJornadaSuplenteLicencia.HasValue ? (object)CodJornadaSuplenteLicencia : DBNull.Value);
                        cmd.Parameters.AddWithValue("@HorasSemSuplenteLicencia", HorasSemSuplenteLicencia.HasValue ? (object)HorasSemSuplenteLicencia : DBNull.Value);
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

                if (glosaError == "" || glosaError == null) glosaError = "Se ha producido una excepción de sistema no recuperable desde el servidor datos. Informar al adminitrador (se recomienda enviar una impresión de pantalla del error desplegado). Método: GrabarAntecedentesPersonal";

                dr["error"] = glosaError;
                dt.Rows.Add(dr);

                return dt;
            }
        }
    }
}
