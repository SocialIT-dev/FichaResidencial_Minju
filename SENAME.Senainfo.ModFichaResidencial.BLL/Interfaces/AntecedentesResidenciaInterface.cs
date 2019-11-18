using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGetAntecedentesResidencia
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetAntecedentesResidenciaDto> ObtenerAntecedentesResidencia(int? CodFicha);
    }

    public interface IResultadoOperacionResidencia
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionResidenciaDto> GrabarAntecedentesResidencia(
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
            string Observaciones);
    }
}
