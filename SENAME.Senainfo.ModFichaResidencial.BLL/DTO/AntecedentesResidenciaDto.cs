using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetAntecedentesResidenciaDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int CatastroRedes { get; set; }  
        public int RegistroVisitas { get; set; }  
        public int ProtocoloAcogida { get; set; }  
        public int AutocuidadoEquipo { get; set; }  
        public int IntervencionCrisis { get; set; }  
        public int InformacionNormativa { get; set; }  
        public int ProtocoloConvivencia { get; set; }  
        public int ProtocoloReclamos { get; set; }  
        public int ProtocoloEscucha { get; set; }  
        public int VinculacionResidencias { get; set; }  
        public int ProcesosFormacion { get; set; }  
        public int ProtocoloApadrinamiento { get; set; }  
        public int ProtocoloTraslado { get; set; }  
        public int ProtocoloEgreso { get; set; }  
        public int ProtocoloRedSalud { get; set; }  
        public int HabilitacionLaboral { get; set; }
        public int RESProtocoloVisitas { get; set; }
		public int RESRegistroVisitas { get; set; }
		public int RESVidaIndependiente { get; set; }
        public int RESHabilitacionLaboral { get; set; }
        public DateTime FechaActualizacion { get; set; }
        public int IdUsuarioActualizacion { get; set; }
        public string Observaciones { get; set; }
        public string error { get; set; }
    }

    public class ResultadoOperacionResidenciaDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class GetParGestionResidenciaDto
    {
        public int IdParGestionResi { get; set; }
        public string NombreGestion { get; set; }
        public Boolean VariableCuantitativa { get; set; }
        public string IndVigencia { get; set; }
        public string error { get; set; }
    }
}
