using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGETTiemposProceso
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETTiemposProcesoDto> ObtenerTiemposProceso(
            int? CodInstitucion,
            int? CodProyecto,
            int? CodFicha);
    }

    public interface IGETTiemposXEtapa
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETTiemposXEtapaDto> ObtenerTiemposXEtapa(
            string CodEtapa);
    }

    public interface IGETTiemposXProyecto
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETTiemposXProyectoDto> ObtenerTiemposXProyecto(
            int CodProyecto);
    }

    public interface IGETCantidadesGenerales
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETCantidadesGeneralesDto> ObtenerCantidadesGenerales(
            int? CodInstitucion,
            int? CodProyecto,
            int? Tipo,
            int? Año);
    }

    public interface IGETCantidadesPersonal
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETCantidadesPersonalDto> ObtenerCantidadesPersonal(
            int? CodInstitucion,
            int? CodProyecto,
            int? Tipo,
            int? Año);
    }

    public interface IGETCantidadesInfraestructura
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETCantidadesInfraestructuraDto> ObtenerCantidadesInfraestructura(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año);
    }

    public interface IGETCantidadesSalud
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETCantidadesSaludDto> ObtenerCantidadesSalud(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año);
    }

    public interface IGETCantidadesEducacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETCantidadesEducacionDto> ObtenerCantidadesEducacion(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año);
    }

    public interface IGETCantidadesAlimentacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETCantidadesAlimentacionDto> ObtenerCantidadesAlimentacion(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año);
    }

    public interface IGETProyectosConFicha
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GETProyectosConFichaDto> ObtenerProyectosConFicha(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año);
    }

    public interface IListaFichasIngresadas
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ListaFichasIngresadasDto> ObtenerListaFichasIngresadas(
            int? CodProyecto,
            int? CantidadPag,
            int? IdUsuarioSenainfo,
            int? CodInstitucion,
            int? numpagina);
    }
    public interface IListaFichasIngresadasTotal
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ListaFichasIngresadasDto> ObtenerListaFichasIngresadasTotal(
            int? CodProyecto,
            int? IdUsuarioSenainfo,
            int? CodInstitucion);
    }
}
