using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface ISeguridad
    {
        List<DTO.GetParSeguridadDto> ObtenerParSeguridad();
    }
     
    public interface IGetAntecedentesSeguridad
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetAntecedentesSeguridadDto> ObtenerAntecedentesSeguridad(int? CodFicha);
    }

    public interface IResultadoOperacionSeguridad
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionSeguridadDto> GrabarAntecedentesSeguridad(
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
            string Observaciones);
    }
}
