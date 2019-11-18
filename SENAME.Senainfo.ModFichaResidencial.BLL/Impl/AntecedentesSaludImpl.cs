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
    public class GetAntecedentesSaludImpl : IGetAntecedentesSalud
    {
        private readonly GetAntecedentesSaludDao _getAntecedentesSaludDao;

        public GetAntecedentesSaludImpl()
        {
            _getAntecedentesSaludDao = new GetAntecedentesSaludDao();
        }

        public List<GetAntecedentesSaludDto> ObtenerAntecedentesSalud(int? CodFicha)
        {
            var result = _getAntecedentesSaludDao.ObtenerAntecedentesSalud(CodFicha);
            return GetAntecedentesSaludMapper.ToDto(result);
        }
    }

    public class ResultadoOperacionSaludImpl : IResultadoOperacionSalud
    {
        private readonly ResultadoOperacionSaludDao _resultadoOperacionSaludDao;

        public ResultadoOperacionSaludImpl()
        {
            _resultadoOperacionSaludDao = new ResultadoOperacionSaludDao();
        }

        public List<ResultadoOperacionSaludDto> GrabarAntecedentesSalud(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? NNACesfam,
            int? NNASaludMentalDiagnostico,
            int? NNASaludMental,
            int? NNACronicos,
            int? NNADiscapacitados,
            int? NNAMedicamento,
            int? NNATratamiento,
            int? NNAEsperaTransplante,
            int? NNATransplantados,
            int? NNADrogas,
            int? NNAConsumoAlcohol,
            int? NNAConsumoAlcoholDrogas,
            int? EspacioResguardoMedicamentos,
            int? InventarioMedicamentos,
            int? ControlNinoSano,
            int? ControlAdolescenteSano,
            int? RegistroMedicamentoNNA,  
            int? ProtocoloAdmMedicamentos,
            int? ControlGinecologico,
            int? NegadaControlGinecologico,
            int? AdolecentesEmbarazadas,
            int? AdolecentesEmbarazadasControl, 
            string Observaciones)
        {
            var result = _resultadoOperacionSaludDao.GrabarAntecedentesSalud(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            NNACesfam,  
            NNASaludMentalDiagnostico,  
            NNASaludMental,  
            NNACronicos,  
            NNADiscapacitados,  
            NNAMedicamento,  
            NNATratamiento,
  		    NNAEsperaTransplante,
		    NNATransplantados,
            NNADrogas,
  		    NNAConsumoAlcohol,
            NNAConsumoAlcoholDrogas,
		    EspacioResguardoMedicamentos,
		    InventarioMedicamentos,
		    ControlNinoSano,
            ControlAdolescenteSano,
            RegistroMedicamentoNNA,   
            ProtocoloAdmMedicamentos,  
            ControlGinecologico,  
            NegadaControlGinecologico,  
            AdolecentesEmbarazadas,  
            AdolecentesEmbarazadasControl, 
            Observaciones);
            return ResultadoOperacionSaludMapper.ToDto(result);
        }
    }
}
