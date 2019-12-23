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
    
     public class GetParSeguridadImpl : ISeguridad
    {
        private readonly GetAntecedentesSeguridadDao _getAntecedentesSeguridad;
        public GetParSeguridadImpl()
        {
            _getAntecedentesSeguridad = new GetAntecedentesSeguridadDao();
        }

        public List<GetParSeguridadDto> ObtenerParSeguridad()
        {
            var result = _getAntecedentesSeguridad.ObtenerParSeguridad();
            return GetAntecedentesSeguridadMapper.ToDtoParSeguridad(result);
        }
    }
    public class GetAntecedentesSeguridadImpl : IGetAntecedentesSeguridad
    {
        private readonly GetAntecedentesSeguridadDao _getAntecedentesSeguridadDao;

        public GetAntecedentesSeguridadImpl()
        {
            _getAntecedentesSeguridadDao = new GetAntecedentesSeguridadDao();
        }

        public List<GetAntecedentesSeguridadDto> ObtenerAntecedentesSeguridad(int? CodFicha)
        {
            var result = _getAntecedentesSeguridadDao.ObtenerAntecedentesSeguridad(CodFicha);
            return GetAntecedentesSeguridadMapper.ToDto(result);
        }
    }

    public class ResultadoOperacionSeguridadImpl : IResultadoOperacionSeguridad
    {
        private readonly ResultadoOperacionSeguridadDao _resultadoOperacionSeguridadDao;

        public ResultadoOperacionSeguridadImpl()
        {
            _resultadoOperacionSeguridadDao = new ResultadoOperacionSeguridadDao();
        }

        public List<ResultadoOperacionSeguridadDto> GrabarAntecedentesSeguridad(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? PlanEmergencia,
            int? SimulacroEmergencia,
            int? PlanEmergenciaCalificado,
            int? Extintores,
            int? Señaletica,
            int? ViasEvacuacion,
            int? CapacitacionPersonalEmergencia,
            int? CapacitacionEmergencia,
            int? CapacitacionPrimerosAuxilios,
            int? Sanitizacion,
            int? SegDesratizacion,
            int? SegFumigacion,
            int? SegSanitizacion,
            int? SistemaElectrico,
            int? ZonasSeguridad,
            string Observaciones)
        {
            var result = _resultadoOperacionSeguridadDao.GrabarAntecedentesSeguridad(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            PlanEmergencia,
            SimulacroEmergencia,
            PlanEmergenciaCalificado,
            Extintores,
            Señaletica,
            ViasEvacuacion,
            CapacitacionPersonalEmergencia,
           	CapacitacionEmergencia,
		    CapacitacionPrimerosAuxilios,
            Sanitizacion,
            SegDesratizacion,
		    SegFumigacion,
		    SegSanitizacion,
            SistemaElectrico,
            ZonasSeguridad,  
            Observaciones);
            return ResultadoOperacionSeguridadMapper.ToDto(result);
        }
    }
}
