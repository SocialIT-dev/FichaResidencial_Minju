using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IListaObservaciones
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ListaObservacionesDto> ObtenerListaObservaciones(
            int? CodProyecto,
            int? VPendiente,
            int? VProceso,
            int? VFinalizada,
            int? CantidadPag,
            int? CodFichaFinal,
            int? CodFichaHijo,
            int? IdUsuarioSenainfo,
            int? CodInstitucion,
            int? numpagina);
    }

    public interface IObservacionesAlimentacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesAlimentacionDto> ObtenerObservacionesAlimentacion(int? CodFicha);

    }

    public interface IObservacionesEducacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesEducacionDto> ObtenerObservacionesEducacion(int? CodFicha);

    }

    public interface IObservacionesGenerales
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesGeneralesDto> ObtenerObservacionesGenerales(int? CodFicha);

    }

    public interface IObservacionesPoblacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesPoblacionDto> ObtenerObservacionesPoblacion(int? CodFicha);

    }

    public interface IObservacionesSalud
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesSaludDto> ObtenerObservacionesSalud(int? CodFicha);

    }

    public interface IObservacionesSeguridad
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesSeguridadDto> ObtenerObservacionesSeguridad(int? CodFicha);

    }

    public interface IObservacionesPersonal
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesPersonalDto> ObtenerObservacionesPersonal(int? CodFicha);

    }

    public interface IObservacionesFicha
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesFichaDto> ObtenerObservacionesFicha(int? CodFicha);

    }

    public interface IObservacionesGestionResidencia
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesGestionResidenciaDto> ObtenerObservacionesGestionResidencia(int? CodFicha);

    }

    public interface IObservacionesMateriales
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ObservacionesMaterialesDto> ObtenerObservacionesMateriales(int? CodFicha);

    }

    public interface INNAEntrevistados
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.NNAEntrevistadosDto> ObtenerNNAEntrevistados(int? CodFicha);

    }

}