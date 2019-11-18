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
    public class GetAntecedentesResidenciaImpl : IGetAntecedentesResidencia
    {
        private readonly GetAntecedentesResidenciaDao _getAntecedentesResidenciaDao;

        public GetAntecedentesResidenciaImpl()
        {
            _getAntecedentesResidenciaDao = new GetAntecedentesResidenciaDao();
        }

        public List<GetAntecedentesResidenciaDto> ObtenerAntecedentesResidencia(int? CodFicha)
        {
            var result = _getAntecedentesResidenciaDao.ObtenerAntecedentesResidencia(CodFicha);
            return GetAntecedentesResidenciaMapper.ToDto(result);
        }
    }

    public class ResultadoOperacionResidenciaImpl : IResultadoOperacionResidencia
    {
        private readonly ResultadoOperacionResidenciaDao _resultadoOperacionResidenciaDao;

        public ResultadoOperacionResidenciaImpl()
        {
            _resultadoOperacionResidenciaDao = new ResultadoOperacionResidenciaDao();
        }

        public List<ResultadoOperacionResidenciaDto> GrabarAntecedentesResidencia(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? CatastroRedes,
            int? RegistroVisitas,
            int? ProtocoloAcogida,
            int? AutocuidadoEquipo,
            int? IntervencionCrisis,
            int? InformacionNormativa,
            int? ProtocoloConvivencia,
            int? ProtocoloReclamos,
            int? ProtocoloEscucha,
            int? VinculacionResidencias,
            int? ProcesosFormacion,
            int? ProtocoloApadrinamiento,
            int? ProtocoloTraslado,
            int? ProtocoloEgreso,
            int? ProtocoloRedSalud,
            int? HabilitacionLaboral,
            int? RESProtocoloVisitas,
            int? RESRegistroVisitas,
            int? RESVidaIndependiente,
            int? RESHabilitacionLaboral,
            string Observaciones)
        {
            var result = _resultadoOperacionResidenciaDao.GrabarAntecedentesResidencia(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            CatastroRedes,  
            RegistroVisitas,  
            ProtocoloAcogida,  
            AutocuidadoEquipo,  
            IntervencionCrisis,  
            InformacionNormativa,  
            ProtocoloConvivencia,  
            ProtocoloReclamos,  
            ProtocoloEscucha,  
            VinculacionResidencias,  
            ProcesosFormacion,  
            ProtocoloApadrinamiento,  
            ProtocoloTraslado,  
            ProtocoloEgreso,  
            ProtocoloRedSalud,  
            HabilitacionLaboral,
            RESProtocoloVisitas,
		    RESRegistroVisitas,
		    RESVidaIndependiente,
		    RESHabilitacionLaboral,
            Observaciones);
            return ResultadoOperacionResidenciaMapper.ToDto(result);
        }
    }
}
