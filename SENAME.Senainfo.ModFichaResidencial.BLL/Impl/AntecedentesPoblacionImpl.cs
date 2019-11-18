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
    public class GetAntecedentesPoblacionImpl : IGetAntecedentesPoblacion
    {
        private readonly GetAntecedentesPoblacionDao _getAntecedentesPoblacionDao;
        private readonly GetAntecedentesPoblacionDao _getParRangoAtereoDao;  

        public GetAntecedentesPoblacionImpl()
        {
            _getAntecedentesPoblacionDao = new GetAntecedentesPoblacionDao();
            _getParRangoAtereoDao = new GetAntecedentesPoblacionDao();
        }
       

        public List<GetAntecedentesPoblacionDto> ObtenerAntecedentesPoblacion(int? CodFicha)
        {
            var result = _getAntecedentesPoblacionDao.ObtenerAntecedentesPoblacion(CodFicha);
            return GetAntecedentesPoblacionMapper.ToDto(result);
        }

        /// <summary>
        /// Método  que lista ParRangoEtareo 
        /// Spring N° 3 - 20191112 - gcastro
        /// </summary>
        /// <param name="IdUsuario"></param>
        /// <returns>Lista</returns>
        public List<GetParRangoEtareoDto> ObtenerRangoEtareoAtencion()
        {
            var result = _getParRangoAtereoDao.ObtenerRangoEtareoAtencion();
           
             return GetAntecedentesPoblacionMapper.ToDtoParRangoEtareo(result);
        }

        /// <summary>
        /// Método que lista ParRangoEtareo por su ID
        /// Spring N° 3 - 20191112 - gcastro
        /// </summary>
        /// <param name="idRangoEtareo"></param>
        /// <returns>Lista</returns>
        public List<GetParRangoEtareoDto> ObtenerRangoEtareoAtencionPorID(int idRangoEtareo)
        {
            var result = _getParRangoAtereoDao.ObtenerRangoEtareoAtencionPorID(idRangoEtareo);

            return GetAntecedentesPoblacionMapper.ToDtoParRangoEtareo(result);
        }

     
    }

    public class ResultadoOperacionPoblacionImpl : IResultadoOperacionPoblacion
    {
        private readonly ResultadoOperacionPoblacionDao _resultadoOperacionPoblacionDao;

        public ResultadoOperacionPoblacionImpl()
        {
            _resultadoOperacionPoblacionDao = new ResultadoOperacionPoblacionDao();
        }

        public List<ResultadoOperacionPoblacionDto> GrabarAntecedentesPoblacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? SubvencionSename,
            int? SexoAtiende,
            int? RangoEtareo,
            int? PoblacionVigente,
            string TipoVulneracion,
            int? ProgramaApadrinamiento)
        {
            var result = _resultadoOperacionPoblacionDao.GrabarAntecedentesPoblacion(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            SubvencionSename,
            SexoAtiende,
            RangoEtareo,
            PoblacionVigente,
            TipoVulneracion,
            ProgramaApadrinamiento);
            return ResultadoOperacionPoblacionMapper.ToDto(result);
        }
    }
}
