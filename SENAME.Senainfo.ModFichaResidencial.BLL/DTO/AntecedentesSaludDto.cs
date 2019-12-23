using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetAntecedentesSaludDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int NNACesfam { get; set; }  
        public int NNASaludMentalDiagnostico { get; set; }  
        public int NNASaludMental { get; set; }  
        public int NNACronicos { get; set; }  
        public int NNADiscapacitados { get; set; }  
        public int NNAMedicamento { get; set; }  
        public int NNATratamiento { get; set; }
        public int NNAEsperaTransplante { get; set; }
		public int NNATransplantados { get; set; }
        public int NNADrogas { get; set; }
        public int NNAConsumoAlcohol { get; set; }
        public int NNAConsumoAlcoholDrogas { get; set; }
		public int EspacioResguardoMedicamentos { get; set; }
		public int InventarioMedicamentos { get; set; }
		public int ControlNinoSano { get; set; }
        public int ControlAdolescenteSano { get; set; }
        public int RegistroMedicamentoNNA { get; set; }  
        public int ProtocoloAdmMedicamentos { get; set; }  
        public int ControlGinecologico { get; set; }  
        public int NegadaControlGinecologico { get; set; }  
        public int AdolecentesEmbarazadas { get; set; }  
        public int AdolecentesEmbarazadasControl { get; set; }  
        public DateTime FechaActualizacion { get; set; }
        public int IdUsuarioActualizacion { get; set; }
        public string Observaciones { get; set; }
        public string error { get; set; }
    }

    public class ResultadoOperacionSaludDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class GetParSaludDto
    {
        public int IdParSalud { get; set; }
        public string NombreParSalud { get; set; }
        public bool VariableCuantitativa { get; set; }
        public bool? SegundaVarCuantitativa { get; set; }
        public string IndVigencia { get; set; }
        public string error { get; set; }
    }
}
