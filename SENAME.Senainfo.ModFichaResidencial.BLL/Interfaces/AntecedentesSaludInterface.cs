using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGetAntecedentesSalud
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetAntecedentesSaludDto> ObtenerAntecedentesSalud(int? CodFicha);
    }

    public interface IResultadoOperacionSalud
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionSaludDto> GrabarAntecedentesSalud(
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
            string Observaciones);
    }
}
