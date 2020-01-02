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
    public class GetAntecedentesEducacionImpl : IGetAntecedentesEducacion
    {
        private readonly GetAntecedentesEducacionDao _getAntecedentesEducacionDao;

        public GetAntecedentesEducacionImpl()
        {
            _getAntecedentesEducacionDao = new GetAntecedentesEducacionDao();
        }

        public List<GetEducacionDTO> ObtenerAntecedentesEducacion(string CodProyecto, int? CodFicha)
        {
            var result = _getAntecedentesEducacionDao.ObtenerAntecedentesEducacion(CodProyecto, CodFicha);
            return GetAntecedentesEducacionMapper.ToDto(result);
        }
    }

    public class ResultadoOperacionEducacionImpl : IResultadoOperacionEducacion
    {
        private readonly ResultadoOperacionEducacionDao _resultadoOperacionEducacionDao;

        public ResultadoOperacionEducacionImpl()
        {
            _resultadoOperacionEducacionDao = new ResultadoOperacionEducacionDao();
        }

        public List<ResultadoOperacionEducacionDto> GrabarAntecedentesEducacion(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? NNAEducacion,
            int? NNAEducacionNo,
            int? NNAEducacionNoMotivo,
            int? NNARetrasoEscolar,
            int? NNAMatriculaCancelada,
            int? NNAEducaionEspecial,
            int? NNANivelacion,
            int? NNAMatriculados,
            int? NNAExamenesLibres,
            int? EspaciosEstudios,
            int? MaterialBibliografico,
            int? Computadores,
            int? AccesoInternetControlado,
            string Observaciones)
        {
            var result = _resultadoOperacionEducacionDao.GrabarAntecedentesEducacion(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            NNAEducacion,
            NNAEducacionNo,
            NNAEducacionNoMotivo,
            NNARetrasoEscolar,
            NNAMatriculaCancelada,
            NNAEducaionEspecial,
            NNANivelacion,
            NNAMatriculados,
		    NNAExamenesLibres,
            EspaciosEstudios,
            MaterialBibliografico,
            Computadores,
            AccesoInternetControlado,
            Observaciones);
            return ResultadoOperacionEducacionMapper.ToDto(result);
        }
    }
}
