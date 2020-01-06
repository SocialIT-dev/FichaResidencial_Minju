using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGetAntecedentesEducacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetAntecedentesEducacionDto> ObtenerAntecedentesEducacion(string CodProyecto, int CodFicha, int? CodFichaAUX);
        //List<DTO.GetAntecedentesEducacionDto> ObtenerMineducRegistroEducacional(string CodProyecto, int? CodFicha);
    }

    public interface IResultadoOperacionEducacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionEducacionDto> GrabarAntecedentesEducacion(
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
            string Observaciones);
    }
}
