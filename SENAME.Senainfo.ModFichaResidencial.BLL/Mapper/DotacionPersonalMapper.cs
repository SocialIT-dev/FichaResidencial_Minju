using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetDotacionPersonalMapper
    {
        public static List<GetDotacionPersonalDto> ToDto(DataTable dt)
        {
            List<GetDotacionPersonalDto> list = new List<GetDotacionPersonalDto>();
            GetDotacionPersonalDto dto = new GetDotacionPersonalDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetDotacionPersonalDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.CantidadDirector = (int)dr["CantidadDirector"];
                    dto.CodJornadaDirector = (int)dr["CodJornadaDirector"];
                    dto.HorasSemDirector = (int)dr["HorasSemDirector"];
                    dto.CantidadAsistenteSocial = (int)dr["CantidadAsistenteSocial"];
                    dto.CodJornadaAsistenteSocial = (int)dr["CodJornadaAsistenteSocial"];
                    dto.HorasSemAsistenteSocial = (int)dr["HorasSemAsistenteSocial"];
                    dto.CantidadPsicologo = (int)dr["CantidadPsicologo"];
                    dto.CodJornadaPsicologo = (int)dr["CodJornadaPsicologo"];
                    dto.HorasSemPsicologo = (int)dr["HorasSemPsicologo"];
                    dto.CantidadEnfermero = (int)dr["CantidadEnfermero"];
                    dto.CodJornadaEnfermero = (int)dr["CodJornadaEnfermero"];
                    dto.HorasSemEnfermero = (int)dr["HorasSemEnfermero"];
                    dto.CantidadAuxiliarEnfermeria = (int)dr["CantidadAuxiliarEnfermeria"];
                    dto.CodJornadaAuxiliarEnfermeria = (int)dr["CodJornadaAuxiliarEnfermeria"];
                    dto.HorasSemAuxiliarEnfermeria = (int)dr["HorasSemAuxiliarEnfermeria"];
                    dto.CantidadMedico = (int)dr["CantidadMedico"];
                    dto.CodJornadaMedico = (int)dr["CodJornadaMedico"];
                    dto.HorasSemMedico = (int)dr["HorasSemMedico"];
                    dto.CantidadPsiquiatra = (int)dr["CantidadPsiquiatra"];
                    dto.CodJornadaPsiquiatra = (int)dr["CodJornadaPsiquiatra"];
                    dto.HorasSemPsiquiatra = (int)dr["HorasSemPsiquiatra"];
                    dto.CantidadTerapeutaOcupacional = (int)dr["CantidadTerapeutaOcupacional"];
                    dto.CodJornadaTerapeutaOcupacional = (int)dr["CodJornadaTerapeutaOcupacional"];
                    dto.HorasSemTerapeutaOcupacional = (int)dr["HorasSemTerapeutaOcupacional"];
                    dto.CantidadKinesiolgo = (int)dr["CantidadKinesiolgo"];
                    dto.CodJornadaKinesiologo = (int)dr["CodJornadaKinesiologo"];
                    dto.HorasSemKinesiologo = (int)dr["HorasSemKinesiologo"];
                    dto.CantidadNutricionista = (int)dr["CantidadNutricionista"];
                    dto.CodJornadaNutricionista = (int)dr["CodJornadaNutricionista"];
                    dto.HorasSemNutricionista = (int)dr["HorasSemNutricionista"];
                    dto.CantidadFonoaudiologo = (int)dr["CantidadFonoaudiologo"];
                    dto.CodJornadaFonoaudiologo = (int)dr["CodJornadaFonoaudiologo"];
                    dto.HorasSemFonoaudiolgo = (int)dr["HorasSemFonoaudiolgo"];
                    dto.CantidadProfEducFisica = (int)dr["CantidadProfEducFisica"];
                    dto.CodJornadaProfEducFisica = (int)dr["CodJornadaProfEducFisica"];
                    dto.HorasSemProfEducFisica = (int)dr["HorasSemProfEducFisica"];
                    dto.CantidadPsicopedagogo = (int)dr["CantidadPsicopedagogo"];
                    dto.CodJornadaPsicopedagogo = (int)dr["CodJornadaPsicopedagogo"];
                    dto.HorasSemPsicopedagogo = (int)dr["HorasSemPsicopedagogo"];
                    dto.CantidadEducadoraParvulos = (int)dr["CantidadEducadoraParvulos"];
                    dto.CodJornadaEducadoraParvulos = (int)dr["CodJornadaEducadoraParvulos"];
                    dto.HorasSemEducadoraParvulos = (int)dr["HorasSemEducadoraParvulos"];
                    dto.CantidadEducadorTratoDirecto = (int)dr["CantidadEducadorTratoDirecto"];
                    dto.CodJornadaEducadorTratoDirecto = (int)dr["CodJornadaEducadorTratoDirecto"];
                    dto.HorasSemEducadorTratoDirecto = (int)dr["HorasSemEducadorTratoDirecto"];
                    dto.CantidadManipuladorAlimentos = (int)dr["CantidadManipuladorAlimentos"];
                    dto.CodJornadaManipuladorAlimentos = (int)dr["CodJornadaManipuladorAlimentos"];
                    dto.HorasSemManipuladorAlimentos = (int)dr["HorasSemManipuladorAlimentos"];
                    dto.CantidadApoyoAdm = (int)dr["CantidadApoyoAdm"];
                    dto.CodJornadaApoyoAdm = (int)dr["CodJornadaApoyoAdm"];
                    dto.HorasSemApoyoAdm = (int)dr["HorasSemApoyoAdm"];
                    dto.CantidadPersonalAseo = (int)dr["CantidadPersonalAseo"];
                    dto.CodJornadaPersonalAseo = (int)dr["CodJornadaPersonalAseo"];
                    dto.HorasSemPersonalAseo = (int)dr["HorasSemPersonalAseo"];
                    dto.CantidadPersonalLavanderia = (int)dr["CantidadPersonalLavanderia"];
                    dto.CodJornadaPersonalLavanderia = (int)dr["CodJornadaPersonalLavanderia"];
                    dto.HorasSemPersonalLavanderia = (int)dr["HorasSemPersonalLavanderia"];
                    dto.CantidadMonitoresTalleristas = (int)dr["CantidadMonitoresTalleristas"];
                    dto.CodJornadaMonitoresTalleristas = (int)dr["CodJornadaMonitoresTalleristas"];
                    dto.HorasSemMonitoresTalleristas = (int)dr["HorasSemMonitoresTalleristas"];
                    dto.CantidadAlumnosPractica = (int)dr["CantidadAlumnosPractica"];
                    dto.CodJornadaAlumnosPractica = (int)dr["CodJornadaAlumnosPractica"];
                    dto.HorasSemAlumnosPractica = (int)dr["HorasSemAlumnosPractica"];
                    dto.CantidadApoyoVoluntario = (int)dr["CantidadApoyoVoluntario"];
                    dto.CodJornadaApoyoVoluntario = (int)dr["CodJornadaApoyoVoluntario"];
                    dto.HorasSemApoyoVoluntario = (int)dr["HorasSemApoyoVoluntario"];
                    dto.CantidadOtros = (int)dr["CantidadOtros"];
                    dto.CodJornadaOtros = (int)dr["CodJornadaOtros"];
                    dto.HorasSemOtros = (int)dr["HorasSemOtros"];
                    dto.CantidadLicencia = (int)dr["CantidadLicencia"];
                    dto.CodJornadaLicencia = (int)dr["CodJornadaLicencia"];
                    dto.HorasSemLicencia = (int)dr["HorasSemLicencia"];
                    dto.CantidadSuplenteLicencia = (int)dr["CantidadSuplenteLicencia"];
                    dto.CodJornadaSuplenteLicencia = (int)dr["CodJornadaSuplenteLicencia"];
                    dto.HorasSemSuplenteLicencia = (int)dr["HorasSemSuplenteLicencia"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                    // Agregado
                    //dto.CodProfesion = (int)dr["CodProfesion"];
                    //dto.Cantidad = (int)dr["Cantidad"];
                    //dto.CodJornada = (int)dr["CodJornada"];
                    //dto.HorasSemanales = (int)dr["HorasSemanales"];
                }
                list.Add(dto);
            }
            return list;
        }
        // Ini Polo
        public static List<GetAntecedentesInfraestructuraDto> ToDtoV2(DataTable dt)
        {
            List<GetAntecedentesInfraestructuraDto> list = new List<GetAntecedentesInfraestructuraDto>();
            GetAntecedentesInfraestructuraDto dto = new GetAntecedentesInfraestructuraDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesInfraestructuraDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.CantidadOficAdm = (int)dr["CantidadOficAdm"];
                    dto.CantidadSalaReunion = (int)dr["CantidadSalaReunion"];
                    dto.CantidadSalaRecepcion = (int)dr["CantidadSalaRecepcion"];
                    dto.CantidadEspaciosVisitas = (int)dr["CantidadEspaciosVisitas"];
                    dto.CantidadSalaTalleres = (int)dr["CantidadSalaTalleres"];
                    dto.CantidadSalaLiving = (int)dr["CantidadSalaLiving"];
                    dto.CantidadEnfermeria = (int)dr["CantidadEnfermeria"];
                    dto.CantidadRecreacion = (int)dr["CantidadRecreacion"];
                    dto.CantidadAreasVerdes = (int)dr["CantidadAreasVerdes"];
                    dto.CantidadCocina = (int)dr["CantidadCocina"];
                    dto.CantidadComedor = (int)dr["CantidadComedor"];
                    dto.CantidadLavanderia = (int)dr["CantidadLavanderia"];
                    dto.CantidadDormitoriosNNA = (int)dr["CantidadDormitoriosNNA"];
                    dto.CantidadCamasNNA = (int)dr["CantidadCamasNNA"];
                    dto.CantidadColsetLockers = (int)dr["CantidadColsetLockers"];
                    dto.CantidadBañosPublicos = (int)dr["CantidadBañosPublicos"];
                    dto.CantidadBañosNNA = (int)dr["CantidadBañosNNA"];
                    dto.CantidadBañosNNANormativa = (int)dr["CantidadBañosNNANormativa"];
                    dto.CantidadBañosNNAHombres = (int)dr["CantidadBañosNNAHombres"];
                    dto.CantidadBañosNNAMujeres = (int)dr["CantidadBañosNNAMujeres"];
                    dto.CantidadBañosNNAFuncionamiento = (int)dr["CantidadBañosNNAFuncionamiento"];
                    dto.CantidadBañosNNAMixtos = (int)dr["CantidadBañosNNAMixtos"];
                    dto.CantidadDuchasNNA = (int)dr["CantidadDuchasNNA"];
                    dto.CantidadDuchasNNANormativa = (int)dr["CantidadDuchasNNANormativa"];
                    dto.CantidadDuchasNNAHombres = (int)dr["CantidadDuchasNNAHombres"];
                    dto.CantidadDuchasNNAMujeres = (int)dr["CantidadDuchasNNAMujeres"];
                    dto.CantidadDuchasNNAFuncionamiento = (int)dr["CantidadDuchasNNAFuncionamiento"];
                    dto.CantidadDuchasNNAMixtas = (int)dr["CantidadDuchasNNAMixtas"];
                    dto.AmbienteAcorde = (int)dr["AmbienteAcorde"];
                    dto.VestuarioAdecuado = (int)dr["VestuarioAdecuado"];
                    dto.VestuarioPersonalizadoNNA = (int)dr["VestuarioPersonalizadoNNA"];
                    dto.UtilesAseo = (int)dr["UtilesAseo"];
                    dto.AguaCaliente = (int)dr["AguaCaliente"];
                    dto.CalefonGas = (int)dr["CalefonGas"];
                    dto.SistemaCalefacion = (int)dr["SistemaCalefacion"];
                    dto.CalefonNormativa = (int)dr["CalefonNormativa"];
                    dto.LlaveGasNormativa = (int)dr["LlaveGasNormativa"];
                    dto.Ventilacion = (int)dr["Ventilacion"];
                    dto.AccesoDiscapacitados = (int)dr["AccesoDiscapacitados"];
                    dto.HabilitaDiscapacitados = (int)dr["HabilitaDiscapacitados"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }

        public static List<GetParValoresHARDto> ToDtoParValoresHAR(DataTable dt)
        {
            List<GetParValoresHARDto> list = new List<GetParValoresHARDto>();
            GetParValoresHARDto dto = new GetParValoresHARDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetParValoresHARDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.D_CodProfesion = (int)dr["D_CodProfesion"];
                    dto.D_Descripcion = dr["D_Descripcion"].ToString();
                    dto.D_Observaciones = dr["D_Observaciones"].ToString();
                   // dto.D_FechaActualizacion = (DateTime)dr["D_FechaActualizacion"];
                    dto.D_IdUsuarioActualizacion = (int)dr["D_IdUsuarioActualizacion"];
                    dto.D_CodFicha = (int)dr["D_CodFicha"];
                    dto.D_Cantidad = (int)dr["D_Cantidad"];
                    dto.D_CodJornada = (int)dr["D_CodJornada"];
                    dto.D_HorasSemanales = (int)dr["D_HorasSemanales"];
                    
                }
                list.Add(dto);
            }
            return list;
        }

        //public static List<GetParInfraestructuraDto> ToDtoParInfraestructura
        public static List<GetParDotacionHARDto> ToDtoParDotacionPersonal(DataTable dt)
        {
            // List<GetParInfraestructuraDto> list = new List<GetParInfraestructuraDto>();
            List<GetParDotacionHARDto> list = new List<GetParDotacionHARDto>();
            GetParDotacionHARDto dto = new GetParDotacionHARDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetParDotacionHARDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodProfesion = (int)dr["CodProfesion"];
                    dto.Descripcion = dr["Descripcion"].ToString();
                   // dto.VariableCuantitativa = (bool)dr["VariableCuantitativa"];
                    //dto.SegundaVarCuantitativa = dr["SegundaVarCuantitativa"] is DBNull ? false : (bool)dr["SegundaVarCuantitativa"];
                    //dto.IndVigencia = dr["IndVigencia"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }

        // Fin Polo


    }

    public class ResultadoOperacionPersonalMapperHAR
    {
        public static List<ResultadoOperacionPersonalDtoHAR> ToDto(DataTable dt)
        {
            List<ResultadoOperacionPersonalDtoHAR> list = new List<ResultadoOperacionPersonalDtoHAR>();
            ResultadoOperacionPersonalDtoHAR dto = new ResultadoOperacionPersonalDtoHAR();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionPersonalDtoHAR();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.REGISTRO_ACTUALIZADO = dr["REGISTRO_ACTUALIZADO"].ToString();
                    dto.ERROR_PROCEDURE_ = dr["ERROR_PROCEDURE_"].ToString();
                    dto.ERROR_NUMBER_ = (int)dr["ERROR_NUMBER_"];
                    dto.ERROR_MESSAGE_ = dr["ERROR_MESSAGE_"].ToString();
                    dto.ERROR_LINE_ = (int)dr["ERROR_LINE_"];
                    dto.ETAPAS_PROCESADAS = dr["ETAPAS_PROCESADAS"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionPersonalMapper
    {
        public static List<ResultadoOperacionPersonalDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionPersonalDto> list = new List<ResultadoOperacionPersonalDto>();
            ResultadoOperacionPersonalDto dto = new ResultadoOperacionPersonalDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionPersonalDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.REGISTRO_ACTUALIZADO = dr["REGISTRO_ACTUALIZADO"].ToString();
                    dto.ERROR_PROCEDURE_ = dr["ERROR_PROCEDURE_"].ToString();
                    dto.ERROR_NUMBER_ = (int)dr["ERROR_NUMBER_"];
                    dto.ERROR_MESSAGE_ = dr["ERROR_MESSAGE_"].ToString();
                    dto.ERROR_LINE_ = (int)dr["ERROR_LINE_"];
                    dto.ETAPAS_PROCESADAS = dr["ETAPAS_PROCESADAS"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

}