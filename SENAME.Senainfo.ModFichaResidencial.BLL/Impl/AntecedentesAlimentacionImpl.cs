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
    public class GetParAlimentacionImpl : IParAlimentacion
    {
        private readonly GetAntecedentesAlimentacionDao _getParAntecedentesAlimentacion;
        public GetParAlimentacionImpl()
        {
            _getParAntecedentesAlimentacion = new GetAntecedentesAlimentacionDao();
        }

        public List<GetParAlimentacionDto> ObtenerParAlimentacion()
        {
            var result = _getParAntecedentesAlimentacion.ObtenerParAlimentacion();
            return GetAntecedentesAlimentacionMapper.ToDtoParAlimentacion(result);
        }
    }

    public class GetAntecedentesAlimentacionImpl : IGetAntecedentesAlimentacion
    {
        private readonly GetAntecedentesAlimentacionDao _getAntecedentesAlimentacionDao;

        public GetAntecedentesAlimentacionImpl()
        {
            _getAntecedentesAlimentacionDao = new GetAntecedentesAlimentacionDao();
        }

        public List<GetAntecedentesAlimentacionDto> ObtenerAntecedentesAlimentacion(int? CodFicha)
        {
            var result = _getAntecedentesAlimentacionDao.ObtenerAntecedentesAlimentacion(CodFicha);
            return GetAntecedentesAlimentacionMapper.ToDto(result);
        }
    }

    public class ResultadoOperacionAlimentacionImpl : IResultadoOperacionAlimentacion
    {
        private readonly ResultadoOperacionAlimentacionDao _resultadoOperacionAlimentacionDao;

        public ResultadoOperacionAlimentacionImpl()
        {
            _resultadoOperacionAlimentacionDao = new ResultadoOperacionAlimentacionDao();
        }

        public List<ResultadoOperacionAlimentacionDto> GrabarAntecedentesAlimentacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? RegistroHonorario,
            int? RegistroPlanificacion,
            int? MenusEspeciales,
            int? AsesoriaNutricionista,
            int? CertificadosSanitarios,
            int? ConservacionAlimentos,
            int? AlmacenamientoAlimentos,
            int? EstadoConservacionAlimentos,
            int? CantidadComidas,
            int? CantidadComidasFeriados,
            string Observaciones)
        {
            var result = _resultadoOperacionAlimentacionDao.GrabarAntecedentesAlimentacion(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            RegistroHonorario,  
            RegistroPlanificacion,  
            MenusEspeciales,  
            AsesoriaNutricionista,  
            CertificadosSanitarios,  
            ConservacionAlimentos,  
            AlmacenamientoAlimentos,
		    EstadoConservacionAlimentos,
            CantidadComidas,  
            CantidadComidasFeriados,  
            Observaciones);
            return ResultadoOperacionAlimentacionMapper.ToDto(result);
        }
    }
}
