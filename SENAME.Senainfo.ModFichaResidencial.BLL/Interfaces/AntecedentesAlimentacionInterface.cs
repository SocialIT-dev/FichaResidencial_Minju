using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGetAntecedentesAlimentacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetAntecedentesAlimentacionDto> ObtenerAntecedentesAlimentacion(int? CodFicha);
        
    }

    public interface IParAlimentacion {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetParAlimentacionDto> ObtenerParAlimentacion();
    }

    public interface IResultadoOperacionAlimentacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionAlimentacionDto> GrabarAntecedentesAlimentacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? RegistroHonorario,
            int? RegistroPlanificacion,
            int? MenusEspeciales,
            int? AsesoriaNutricionista,
            int? CertificadosSanitarios,
            int? ConservacionAlimentos,
            int? AlmacenamientoAlimentos,
            int? EstadoConservacionAlimentos,
            int? CantidadComidas,
            int? CantidadComidasFeriados,
            string Observaciones);
    }
}
