using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGetAntecedentesInfraestructura
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetAntecedentesInfraestructuraDto> ObtenerAntecedentesInfraestructura(int? CodFicha);
    }

    public interface IResultadoOperacionInfraestructura
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionInfraestructuraDto> GrabarAntecedentesInfraestructura(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? CantidadOficAdm,
            int? CantidadSalaReunion,
            int? CantidadSalaRecepcion,
            int? CantidadEspaciosVisitas,
            int? CantidadSalaTalleres,
            int? CantidadSalaLiving,
            int? CantidadEnfermeria,
            int? CantidadRecreacion,
            int? CantidadAreasVerdes,
            int? CantidadCocina,
            int? CantidadComedor,
            int? CantidadLavanderia,
            int? CantidadDormitoriosNNA,
            int? CantidadCamasNNA,
            int? CantidadColsetLockers,
            int? CantidadBañosPublicos,
            int? CantidadBañosNNA,
            int? CantidadBañosNNANormativa,
		    int? CantidadBañosNNAHombres,
		    int? CantidadBañosNNAMujeres,
            int? CantidadBañosNNAFuncionamiento,
            int? CantidadBañosNNAMixtos,
            int? CantidadDuchasNNA,
            int? CantidadDuchasNNANormativa,
            int? CantidadDuchasNNAHombres,
            int? CantidadDuchasNNAMujeres,
            int? CantidadDuchasNNAFuncionamiento, 
            int? CantidadDuchasNNAMixtas,
            int? AmbienteAcorde,
            int? VestuarioAdecuado,
            int? VestuarioPersonalizadoNNA,
            int? UtilesAseo,
            int? AguaCaliente,
            int? CalefonGas,
            int? CalefonNormativa,
            int? LlaveGasNormativa,
            int? SistemaCalefacion, 
            int? Ventilacion,
            int? AccesoDiscapacitados,
            int? HabilitaDiscapacitados,
            string Observaciones);
    }
}
