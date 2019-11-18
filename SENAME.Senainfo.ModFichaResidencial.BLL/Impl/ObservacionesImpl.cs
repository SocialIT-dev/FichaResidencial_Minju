using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using SENAME.Senainfo.ModFichaResidencial.DAL.DAO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Mapper;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Impl
{
    public class ListaObservacionesImpl : IListaObservaciones
    {
        private readonly ListaObservacionesDao _listaObservacionesDao;

        public ListaObservacionesImpl()
        {
            _listaObservacionesDao = new ListaObservacionesDao();
        }

        public List<ListaObservacionesDto> ObtenerListaObservaciones(
            int? CodProyecto,
            int? VPendiente,
            int? VProceso,
            int? VFinalizada,
            int? CantidadPag,
            int? CodFichaFinal,
            int? CodFichaHijo,
            int? IdUsuarioSenainfo,
            int? CodInstitucion,
            int? numpagina)
        {
            var result = _listaObservacionesDao.ObtenerListaObservaciones(
                CodProyecto,
                VPendiente,
                VProceso,
                VFinalizada,
                CantidadPag,
                CodFichaFinal,
                CodFichaHijo,
                IdUsuarioSenainfo,
                CodInstitucion,
                numpagina);
            return ListaObservacionesMapper.ToDto(result);
        }

        public List<ListaObservacionesTotalDto> ObtenerListaObservacionesTotal(
            int? CodProyecto,
            int? VPendiente,
            int? VProceso,
            int? VFinalizada,
            int? CantidadPag,
            int? CodFichaFinal,
            int? CodFichaHijo,
            int? IdUsuarioSenainfo,
            int? CodInstitucion)
        {
            var result = _listaObservacionesDao.ObtenerListaObservacionesTotal(
                CodProyecto,
                VPendiente,
                VProceso,
                VFinalizada,
                CantidadPag,
                CodFichaFinal,
                CodFichaHijo,
                IdUsuarioSenainfo,
                CodInstitucion);
            return ListaObservacionesTotalMapper.ToDto(result);
        }
    }

    public class ObservacionesAlimentacionImpl : IObservacionesAlimentacion
    {
        private readonly ObservacionesAlimentacionDao _observacionesAlimentacionDao;

        public ObservacionesAlimentacionImpl()
        {
            _observacionesAlimentacionDao = new ObservacionesAlimentacionDao();
        }

        public List<ObservacionesAlimentacionDto> ObtenerObservacionesAlimentacion(int? CodFicha)
        {
            var result = _observacionesAlimentacionDao.ObtenerObservacionesAlimentacion(CodFicha);
            return ObservacionesAlimentacionMapper.ToDto(result);
        }
    }

    public class ObservacionesEducacionImpl : IObservacionesEducacion
    {
        private readonly ObservacionesEducacionDao _observacionesEducacionDao;

        public ObservacionesEducacionImpl()
        {
            _observacionesEducacionDao = new ObservacionesEducacionDao();
        }

        public List<ObservacionesEducacionDto> ObtenerObservacionesEducacion(int? CodFicha)
        {
            var result = _observacionesEducacionDao.ObtenerObservacionesEducacion(CodFicha);
            return ObservacionesEducacionMapper.ToDto(result);
        }
    }

    public class ObservacionesGeneralesImpl : IObservacionesGenerales
    {
        private readonly ObservacionesGeneralesDao _observacionesGeneralesDao;

        public ObservacionesGeneralesImpl()
        {
            _observacionesGeneralesDao = new ObservacionesGeneralesDao();
        }

        public List<ObservacionesGeneralesDto> ObtenerObservacionesGenerales(int? CodFicha)
        {
            var result = _observacionesGeneralesDao.ObtenerObservacionesGenerales(CodFicha);
            return ObservacionesGeneralesMapper.ToDto(result);
        }
    }

    public class ObservacionesPoblacionImpl : IObservacionesPoblacion
    {
        private readonly ObservacionesPoblacionDao _observacionesPoblacionDao;

        public ObservacionesPoblacionImpl()
        {
            _observacionesPoblacionDao = new ObservacionesPoblacionDao();
        }

        public List<ObservacionesPoblacionDto> ObtenerObservacionesPoblacion(int? CodFicha)
        {
            var result = _observacionesPoblacionDao.ObtenerObservacionesPoblacion(CodFicha);
            return ObservacionesPoblacionMapper.ToDto(result);
        }
    }

    public class ObservacionesSaludImpl : IObservacionesSalud
    {
        private readonly ObservacionesSaludDao _observacionesSaludDao;

        public ObservacionesSaludImpl()
        {
            _observacionesSaludDao = new ObservacionesSaludDao();
        }

        public List<ObservacionesSaludDto> ObtenerObservacionesSalud(int? CodFicha)
        {
            var result = _observacionesSaludDao.ObtenerObservacionesSalud(CodFicha);
            return ObservacionesSaludMapper.ToDto(result);
        }
    }

    public class ObservacionesSeguridadImpl : IObservacionesSeguridad
    {
        private readonly ObservacionesSeguridadDao _observacionesSeguridadDao;

        public ObservacionesSeguridadImpl()
        {
            _observacionesSeguridadDao = new ObservacionesSeguridadDao();
        }

        public List<ObservacionesSeguridadDto> ObtenerObservacionesSeguridad(int? CodFicha)
        {
            var result = _observacionesSeguridadDao.ObtenerObservacionesSeguridad(CodFicha);
            return ObservacionesSeguridadMapper.ToDto(result);
        }
    }

    public class ObservacionesPersonalImpl : IObservacionesPersonal
    {
        private readonly ObservacionesPersonalDao _observacionesPersonalDao;

        public ObservacionesPersonalImpl()
        {
            _observacionesPersonalDao = new ObservacionesPersonalDao();
        }

        public List<ObservacionesPersonalDto> ObtenerObservacionesPersonal(int? CodFicha)
        {
            var result = _observacionesPersonalDao.ObtenerObservacionesPersonal(CodFicha);
            return ObservacionesPersonalMapper.ToDto(result);
        }
    }

    public class ObservacionesFichaImpl : IObservacionesFicha
    {
        private readonly ObservacionesFichaDao _observacionesFichaDao;

        public ObservacionesFichaImpl()
        {
            _observacionesFichaDao = new ObservacionesFichaDao();
        }

        public List<ObservacionesFichaDto> ObtenerObservacionesFicha(int? CodFicha)
        {
            var result = _observacionesFichaDao.ObtenerObservacionesFicha(CodFicha);
            return ObservacionesFichaMapper.ToDto(result);
        }
    }

    public class ObservacionesGestionResidenciaImpl : IObservacionesGestionResidencia
    {
        private readonly ObservacionesGestionResidenciaDao _observacionesGestionResidenciaDao;

        public ObservacionesGestionResidenciaImpl()
        {
            _observacionesGestionResidenciaDao = new ObservacionesGestionResidenciaDao();
        }

        public List<ObservacionesGestionResidenciaDto> ObtenerObservacionesGestionResidencia(int? CodFicha)
        {
            var result = _observacionesGestionResidenciaDao.ObtenerObservacionesGestionResidencia(CodFicha);
            return ObservacionesGestionResidenciaMapper.ToDto(result);
        }
    }

    public class ObservacionesMaterialesImpl : IObservacionesMateriales
    {
        private readonly ObservacionesMaterialesDao _observacionesMaterialesDao;

        public ObservacionesMaterialesImpl()
        {
            _observacionesMaterialesDao = new ObservacionesMaterialesDao();
        }

        public List<ObservacionesMaterialesDto> ObtenerObservacionesMateriales(int? CodFicha)
        {
            var result = _observacionesMaterialesDao.ObtenerObservacionesMateriales(CodFicha);
            return ObservacionesMaterialesMapper.ToDto(result);
        }
    }

    public class NNAEntrevistadosImpl : INNAEntrevistados
    {
        private readonly NNAEntrevistadosDao _nNAEntrevistadosDao;

        public NNAEntrevistadosImpl()
        {
            _nNAEntrevistadosDao = new NNAEntrevistadosDao();
        }

        public List<NNAEntrevistadosDto> ObtenerNNAEntrevistados(int? CodFicha)
        {
            var result = _nNAEntrevistadosDao.ObtenerNNAEntrevistados(CodFicha);
            return NNAEntrevistadosMapper.ToDto(result);
        }
    }
}
