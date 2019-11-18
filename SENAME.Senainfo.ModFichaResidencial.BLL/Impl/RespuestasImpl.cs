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
    public class SetRespuestaObservacionesImpl : ISetRespuestaObservaciones
    {
        private readonly SetRespuestaObservacionesDao _setRespuestaObservacionesDao;

        public SetRespuestaObservacionesImpl()
        {
            _setRespuestaObservacionesDao = new SetRespuestaObservacionesDao();
        }

        public List<SetRespuestaObservacionesDto> GrabarRespuestasObservaciones(
            int? CodEstado,
            int? IdUsuarioActualizacion,
            int? CodFicha,
            int? IdTipoRespuesta,
            int? CodEstadoDetalle,
            string Respuesta,
            int? IdRespuesta,
            string NombreArchivos,
            string FolderAdjuntos,
            string CodArchivos)
        {
            var result = _setRespuestaObservacionesDao.GrabarRespuestasObservaciones(
            CodEstado,
            IdUsuarioActualizacion,
            CodFicha,
            IdTipoRespuesta,
            CodEstadoDetalle,
            Respuesta,
            IdRespuesta,
            NombreArchivos,
            FolderAdjuntos,
            CodArchivos);
            return SetRespuestaObservacionesMapper.ToDto(result);
        }
    }

    public class GetRespuestaSenameImpl : IGetRespuestaSename
    {
        private readonly GetRespuestaSenameDao _getRespuestaSenameDao;

        public GetRespuestaSenameImpl()
        {
            _getRespuestaSenameDao = new GetRespuestaSenameDao();
        }

        public List<GetRespuestaSenameDto> ObtenerRespuestaSename(int? CodFicha)
        {
            var result = _getRespuestaSenameDao.ObtenerRespuestaSename(CodFicha);
            return GetRespuestaSenameMapper.ToDto(result);
        }
    }

    public class SetRespuestaFichaImpl : ISetRespuestaFicha
    {
        private readonly SetRespuestaFichaDao _setRespuestaFichaDao;

        public SetRespuestaFichaImpl()
        {
            _setRespuestaFichaDao = new SetRespuestaFichaDao();
        }

        public List<SetRespuestaFichaDto> GrabarRespuestasFicha(
            int? IdUsuarioActualizacion,
            int? CodFicha,
            string Respuesta)
        {
            var result = _setRespuestaFichaDao.GrabarRespuestasFicha(
            IdUsuarioActualizacion,
            CodFicha,
            Respuesta);
            return SetRespuestaFichaMapper.ToDto(result);
        }
    }

    public class SetVisadoFichaImpl : ISetVisadoFicha
    {
        private readonly SetVisadoFichaDao _setVisadoFichaDao;

        public SetVisadoFichaImpl()
        {
            _setVisadoFichaDao = new SetVisadoFichaDao();
        }

        public List<SetVisadoFichaDto> GrabarVisadoFicha(
            int? IdRespuesta,
            int? IdDetalle,
            int? IdUsuarioActualizacion,
            int? IdTipoRespuesta)
        {
            var result = _setVisadoFichaDao.GrabarVisadoFicha(
            IdRespuesta,
            IdDetalle,
            IdUsuarioActualizacion,
            IdTipoRespuesta);
            return SetVisadoFichaMapper.ToDto(result);
        }
    }
    
    public class GetCodArchivoImpl : IGetCodArchivo
    {
        private readonly GetCodArchivoDao _getCodArchivoDao;

        public GetCodArchivoImpl()
        {
            _getCodArchivoDao = new GetCodArchivoDao();
        }

        public List<GetCodArchivoDto> ObtenerCodArchivo(string NombreArchivo)
        {
            var result = _getCodArchivoDao.ObtenerCodArchivo(NombreArchivo);
            return GetCodArchivoMapper.ToDto(result);
        }
    }

    public class BorrarArchivoImpl : IBorrarArchivo
    {
        private readonly BorrarArchivoDao _borrarArchivoDao;

        public BorrarArchivoImpl()
        {
            _borrarArchivoDao = new BorrarArchivoDao();
        }

        public List<BorrarArchivoDto> BorrarArchivo(long CodArchivo)
        {
            var result = _borrarArchivoDao.BorrarArchivo(CodArchivo);
            return BorrarArchivoMapper.ToDto(result);
        }
    }

    public class SetInicioTramitacionImpl : ISetInicioTramitacion
    {
        private readonly SetInicioTramitacionDao _setInicioTramitacionDao;

        public SetInicioTramitacionImpl()
        {
            _setInicioTramitacionDao = new SetInicioTramitacionDao();
        }

        public List<SetInicioTramitacionDto> GrabarInicioTramitacionFicha(
            int? IdUsuarioActualizacion,
            int? CodFicha,
            string Respuesta)
        {
            var result = _setInicioTramitacionDao.GrabarInicioTramitacionFicha(
            IdUsuarioActualizacion,
            CodFicha,
            Respuesta);
            return SetInicioTramitacionMapper.ToDto(result);
        }
    }
}
