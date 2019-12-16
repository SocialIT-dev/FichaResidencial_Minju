using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetAntecedentesSeguridadMapper
    {
        public static List<GetAntecedentesSeguridadDto> ToDto(DataTable dt)
        {
            List<GetAntecedentesSeguridadDto> list = new List<GetAntecedentesSeguridadDto>();
            GetAntecedentesSeguridadDto dto = new GetAntecedentesSeguridadDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesSeguridadDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.PlanEmergencia = (int)dr["PlanEmergencia"];
                    dto.SimulacroEmergencia = (int)dr["SimulacroEmergencia"];
                    dto.PlanEmergenciaCalificado = (int)dr["PlanEmergenciaCalificado"];
                    dto.Extintores = (int)dr["Extintores"];
                    dto.Señaletica = (int)dr["Señaletica"];
                    dto.ViasEvacuacion = (int)dr["ViasEvacuacion"];
                    dto.CapacitacionPersonalEmergencia = (int)dr["CapacitacionPersonalEmergencia"];
                    dto.CapacitacionEmergencia = (int)dr["CapacitacionEmergencia"];
                    dto.CapacitacionPrimerosAuxilios = (int)dr["CapacitacionPrimerosAuxilios"];
                    dto.Sanitizacion = (int)dr["Sanitizacion"];
                    dto.SegDesratizacion = (int)dr["SegDesratizacion"];
                    dto.SegFumigacion = (int)dr["SegFumigacion"];
                    dto.SegSanitizacion = (int)dr["SegSanitizacion"];
                    dto.SistemaElectrico = (int)dr["SistemaElectrico"];
                    dto.ZonasSeguridad = (int)dr["ZonasSeguridad"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }

        public static List<GetParSeguridadDto> ToDtoParSeguridad(DataTable dt)
        {
            List<GetParSeguridadDto> list = new List<GetParSeguridadDto>();
            GetParSeguridadDto dto = new GetParSeguridadDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetParSeguridadDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.IdParSeguridad = (int)dr["IdParInfraestructura"];
                    dto.NombreParSeguridad = dr["NombreParInfraestructura"].ToString();
                    dto.VariableCuantitativa = (bool)dr["VariableCuantitativa"];                   
                    dto.IndVigencia = dr["IndVigencia"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionSeguridadMapper
    {
        public static List<ResultadoOperacionSeguridadDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionSeguridadDto> list = new List<ResultadoOperacionSeguridadDto>();
            ResultadoOperacionSeguridadDto dto = new ResultadoOperacionSeguridadDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionSeguridadDto();
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
