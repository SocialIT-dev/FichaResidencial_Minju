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
    public class GetAntecedentesInfraestructuraImpl : IGetAntecedentesInfraestructura
    {
        private readonly GetAntecedentesInfraestructuraDao _getAntecedentesInfraestructuraDao;
        private readonly GetAntecedentesInfraestructuraDao _getParValoresDao;

        public GetAntecedentesInfraestructuraImpl()
        {
            _getAntecedentesInfraestructuraDao = new GetAntecedentesInfraestructuraDao();
            _getParValoresDao = new GetAntecedentesInfraestructuraDao();
        }

        public List<GetAntecedentesInfraestructuraDto> ObtenerAntecedentesInfraestructura(int? CodFicha)
        {
            var result = _getAntecedentesInfraestructuraDao.ObtenerAntecedentesInfraestructura(CodFicha);
            return GetAntecedentesInfraestructuraMapper.ToDto(result);
        }

        /// <summary>
        /// Método que devuelve lista de objeto GetParValoresDto
        /// Spring 3 - 20191113 - gcastro
        /// </summary>
        /// <returns>Lista</returns>
        public List<GetParValoresDto> ObtenerParValores()
        {
            var result = _getParValoresDao.ObtenerParValores();
            return GetAntecedentesInfraestructuraMapper.ToDtoParValores(result);
        }

    }

    public class ResultadoOperacionInfraestructuraImpl : IResultadoOperacionInfraestructura
    {
        private readonly ResultadoOperacionInfraestructuraDao _resultadoOperacionInfraestructuraDao;

        public ResultadoOperacionInfraestructuraImpl()
        {
            _resultadoOperacionInfraestructuraDao = new ResultadoOperacionInfraestructuraDao();
        }

        public List<ResultadoOperacionInfraestructuraDto> GrabarAntecedentesInfraestructura(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? CantidadOficAdm,
            int? CantidadSalaReunion,
            int? CantidadSalaRecepcion,
            int? CantidadEspaciosVisitas,
            int? CantidadSalaTalleres,
            int? CantidadSalaLiving,
            int? CantidadEnfermeria,
            int? CantidadRecreacion,
            int? CantidadAreasVerdes,
            int? CantidadCocina,
            int? CantidadComedor,
            int? CantidadLavanderia,
            int? CantidadDormitoriosNNA,
            int? CantidadCamasNNA,
            int? CantidadColsetLockers,
            int? CantidadBañosPublicos,
            int? CantidadBañosNNA,
            int? CantidadBañosNNANormativa,
            int? CantidadBañosNNAHombres,
            int? CantidadBañosNNAMujeres,
            int? CantidadBañosNNAFuncionamiento,
            int? CantidadBañosNNAMixtos,
            int? CantidadDuchasNNA,
            int? CantidadDuchasNNANormativa,
            int? CantidadDuchasNNAHombres,
            int? CantidadDuchasNNAMujeres,
            int? CantidadDuchasNNAFuncionamiento,
            int? CantidadDuchasNNAMixtas,
            int? AmbienteAcorde,
            int? VestuarioAdecuado,
            int? VestuarioPersonalizadoNNA,
            int? UtilesAseo,
            int? AguaCaliente,
            int? CalefonGas,
            int? CalefonNormativa,
            int? LlaveGasNormativa,
            int? SistemaCalefacion, 
            int? Ventilacion,
            int? AccesoDiscapacitados,
            int? HabilitaDiscapacitados,
            string Observaciones)
        {
            var result = _resultadoOperacionInfraestructuraDao.GrabarAntecedentesInfraestructura(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            CantidadOficAdm,  
            CantidadSalaReunion,  
            CantidadSalaRecepcion,  
            CantidadEspaciosVisitas,  
            CantidadSalaTalleres,  
            CantidadSalaLiving,  
            CantidadEnfermeria,  
            CantidadRecreacion,  
            CantidadAreasVerdes,  
            CantidadCocina,  
            CantidadComedor,  
            CantidadLavanderia,  
            CantidadDormitoriosNNA,  
            CantidadCamasNNA,  
            CantidadColsetLockers,  
            CantidadBañosPublicos,  
            CantidadBañosNNA,
		    CantidadBañosNNANormativa,
		    CantidadBañosNNAHombres,
		    CantidadBañosNNAMujeres,
		    CantidadBañosNNAFuncionamiento,
		    CantidadBañosNNAMixtos,  
            CantidadDuchasNNA,
  		    CantidadDuchasNNANormativa,
		    CantidadDuchasNNAHombres,
		    CantidadDuchasNNAMujeres,
		    CantidadDuchasNNAFuncionamiento,
		    CantidadDuchasNNAMixtas, 
            AmbienteAcorde,  
            VestuarioAdecuado,
            VestuarioPersonalizadoNNA,
            UtilesAseo,  
            AguaCaliente,  
            CalefonGas,
  		    CalefonNormativa,
		    LlaveGasNormativa,
            SistemaCalefacion,  
            Ventilacion,  
            AccesoDiscapacitados,  
            HabilitaDiscapacitados,
            Observaciones);
            return ResultadoOperacionInfraestructuraMapper.ToDto(result);
        }
    }
}