using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetAntecedentesAlimentacionDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }   
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int RegistroHonorario { get; set; }  
        public int RegistroPlanificacion { get; set; }  
        public int MenusEspeciales { get; set; }  
        public int AsesoriaNutricionista { get; set; }  
        public int CertificadosSanitarios { get; set; }  
        public int ConservacionAlimentos { get; set; }
        public int AlmacenamientoAlimentos { get; set; }
        public int EstadoConservacionAlimentos { get; set; }
        public int CantidadComidas { get; set; }  
        public int CantidadComidasFeriados{ get; set; }  
        public DateTime FechaActualizacion { get; set; }
        public int IdUsuarioActualizacion { get; set; }
        public string Observaciones { get; set; }
        public string error { get; set; }
    }

    public class ResultadoOperacionAlimentacionDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }
}
