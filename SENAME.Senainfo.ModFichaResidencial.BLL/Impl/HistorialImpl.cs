using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using SENAME.Senainfo.ModFichaResidencial.DAL.DAO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Mapper;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Impl
{
    public class GETTiemposProcesoImpl : IGETTiemposProceso
    {
        private readonly GETTiemposProcesoDao _gETTiemposProcesoDao;

        public GETTiemposProcesoImpl()
        {
            _gETTiemposProcesoDao = new GETTiemposProcesoDao();
        }

        public List<GETTiemposProcesoDto> ObtenerTiemposProceso(
            int? CodInstitucion,
            int? CodProyecto,
            int? CodFicha)
        {
            var result = _gETTiemposProcesoDao.ObtenerTiemposProceso(
            CodInstitucion,
            CodProyecto,
            CodFicha);
            return GETTiemposProcesoMapper.ToDto(result);
        }
    }

    public class GETTiemposXEtapaImpl : IGETTiemposXEtapa
    {
        private readonly GETTiemposXEtapaDao _gETTiemposXEtapaDao;

        public GETTiemposXEtapaImpl()
        {
            _gETTiemposXEtapaDao = new GETTiemposXEtapaDao();
        }

        public List<GETTiemposXEtapaDto> ObtenerTiemposXEtapa(
            string CodEtapa)
        {
            var result = _gETTiemposXEtapaDao.ObtenerTiemposXEtapa(
            CodEtapa);
            return GETTiemposXEtapaMapper.ToDto(result);
        }
    }

    public class GETTiemposXProyectoImpl : IGETTiemposXProyecto
    {
        private readonly GETTiemposXProyectoDao _gETTiemposXProyectoDao;

        public GETTiemposXProyectoImpl()
        {
            _gETTiemposXProyectoDao = new GETTiemposXProyectoDao();
        }

        public List<GETTiemposXProyectoDto> ObtenerTiemposXProyecto(
            int CodProyecto)
        {
            var result = _gETTiemposXProyectoDao.ObtenerTiemposXProyecto(
            CodProyecto);
            return GETTiemposXProyectoMapper.ToDto(result);
        }
    }

    public class GETCantidadesGeneralesImpl : IGETCantidadesGenerales
    {
        private readonly GETCantidadesGeneralesDao _gETCantidadesGeneralesDao;

        public GETCantidadesGeneralesImpl()
        {
            _gETCantidadesGeneralesDao = new GETCantidadesGeneralesDao();
        }

        public List<GETCantidadesGeneralesDto> ObtenerCantidadesGenerales(
            int? CodInstitucion,
            int? CodProyecto,
            int? Tipo,
            int? Año)
        {
            var result = _gETCantidadesGeneralesDao.ObtenerCantidadesGenerales(
            CodInstitucion,
            CodProyecto,
            Tipo,
	        Año);
            return GETCantidadesGeneralesMapper.ToDto(result);
        }
    }

    public class GETCantidadesPersonalImpl : IGETCantidadesPersonal
    {
        private readonly GETCantidadesPersonalDao _gETCantidadesPersonalDao;

        public GETCantidadesPersonalImpl()
        {
            _gETCantidadesPersonalDao = new GETCantidadesPersonalDao();
        }

        public List<GETCantidadesPersonalDto> ObtenerCantidadesPersonal(
            int? CodInstitucion,
            int? CodProyecto,
            int? Tipo,
            int? Año)
        {
            var result = _gETCantidadesPersonalDao.ObtenerCantidadesPersonal(
            CodInstitucion,
            CodProyecto,
            Tipo,
            Año);
            return GETCantidadesPersonalMapper.ToDto(result);
        }
    }

    public class GETCantidadesInfraestructuraImpl : IGETCantidadesInfraestructura
    {
        private readonly GETCantidadesInfraestructuraDao _gETCantidadesInfraestructuraDao;

        public GETCantidadesInfraestructuraImpl()
        {
            _gETCantidadesInfraestructuraDao = new GETCantidadesInfraestructuraDao();
        }

        public List<GETCantidadesInfraestructuraDto> ObtenerCantidadesInfraestructura(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año)
        {
            var result = _gETCantidadesInfraestructuraDao.ObtenerCantidadesInfraestructura(
            CodInstitucion,
            CodProyecto,
            Año);
            return GETCantidadesInfraestructuraMapper.ToDto(result);
        }
    }

    public class GETCantidadesSaludImpl : IGETCantidadesSalud
    {
        private readonly GETCantidadesSaludDao _gETCantidadesSaludDao;

        public GETCantidadesSaludImpl()
        {
            _gETCantidadesSaludDao = new GETCantidadesSaludDao();
        }

        public List<GETCantidadesSaludDto> ObtenerCantidadesSalud(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año)
        {
            var result = _gETCantidadesSaludDao.ObtenerCantidadesSalud(
            CodInstitucion,
            CodProyecto,
            Año);
            return GETCantidadesSaludMapper.ToDto(result);
        }
    }

    public class GETCantidadesEducacionImpl : IGETCantidadesEducacion
    {
        private readonly GETCantidadesEducacionDao _gETCantidadesEducacionDao;

        public GETCantidadesEducacionImpl()
        {
            _gETCantidadesEducacionDao = new GETCantidadesEducacionDao();
        }

        public List<GETCantidadesEducacionDto> ObtenerCantidadesEducacion(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año)
        {
            var result = _gETCantidadesEducacionDao.ObtenerCantidadesEducacion(
            CodInstitucion,
            CodProyecto,
            Año);
            return GETCantidadesEducacionMapper.ToDto(result);
        }
    }

    public class GETCantidadesAlimentacionImpl : IGETCantidadesAlimentacion
    {
        private readonly GETCantidadesAlimentacionDao _gETCantidadesAlimentacionDao;

        public GETCantidadesAlimentacionImpl()
        {
            _gETCantidadesAlimentacionDao = new GETCantidadesAlimentacionDao();
        }

        public List<GETCantidadesAlimentacionDto> ObtenerCantidadesAlimentacion(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año)
        {
            var result = _gETCantidadesAlimentacionDao.ObtenerCantidadesAlimentacion(
            CodInstitucion,
            CodProyecto,
            Año);
            return GETCantidadesAlimentacionMapper.ToDto(result);
        }
    }

    public class GETProyectosConFichaImpl : IGETProyectosConFicha
    {
        private readonly GETProyectosConFichaDao _gETProyectosConFichaDao;

        public GETProyectosConFichaImpl()
        {
            _gETProyectosConFichaDao = new GETProyectosConFichaDao();
        }

        public List<GETProyectosConFichaDto> ObtenerProyectosConFicha(
            int? CodInstitucion,
            int? CodProyecto,
            int? Año)
        {
            var result = _gETProyectosConFichaDao.ObtenerProyectosConFicha(
            CodInstitucion,
            CodProyecto,
            Año);
            return GETProyectosConFichaMapper.ToDto(result);
        }
    }

    public class ListaFichasIngresadasImpl : IListaFichasIngresadas
    {
        private readonly GETListadoFichasIngresadas _GETListadoFichasIngresadasDao;

        public ListaFichasIngresadasImpl()
        {
            _GETListadoFichasIngresadasDao = new GETListadoFichasIngresadas();
        }

        public List<ListaFichasIngresadasDto> ObtenerListaFichasIngresadas(
            int? CodProyecto,
            int? CantidadPag,
            int? IdUsuarioSenainfo,
            int? CodInstitucion,
            int? numpagina)
        {
            var result = _GETListadoFichasIngresadasDao.ObtenerListaFichasIngresadas(
                CodProyecto,
                CantidadPag,
                IdUsuarioSenainfo,
                CodInstitucion,
                numpagina);
            return ListaFichasIngresadasMapper.ToDto(result);
        }

        public List<ListaFichasIngresadasTotalDto> ObtenerListaFichasIngresadasTotal(
            int? CodProyecto,
            int? IdUsuarioSenainfo,
            int? CodInstitucion)
        {
            var result = _GETListadoFichasIngresadasDao.ObtenerListaFichasIngresadasTotal(
                CodProyecto,
                IdUsuarioSenainfo,
                CodInstitucion);
            return ListaFichasIngresadasTotalMapper.ToDto(result);
        }
    }
}
