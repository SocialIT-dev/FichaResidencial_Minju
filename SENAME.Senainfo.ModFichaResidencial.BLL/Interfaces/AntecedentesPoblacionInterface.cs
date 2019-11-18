using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGetAntecedentesPoblacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetAntecedentesPoblacionDto> ObtenerAntecedentesPoblacion(int? CodFicha);
    }

    public interface IResultadoOperacionPoblacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionPoblacionDto> GrabarAntecedentesPoblacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? SubvencionSename,
            int? SexoAtiende,
            int? RangoEtareo,
            int? PoblacionVigente,
            string TipoVulneracion,
            int? ProgramaApadrinamiento);
    }
}
