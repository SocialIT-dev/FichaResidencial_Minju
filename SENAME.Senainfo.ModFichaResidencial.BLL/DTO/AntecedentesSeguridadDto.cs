using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetAntecedentesSeguridadDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int PlanEmergencia { get; set; }  
        public int SimulacroEmergencia { get; set; }  
        public int PlanEmergenciaCalificado { get; set; }  
        public int Extintores { get; set; }  
        public int Señaletica { get; set; }  
        public int ViasEvacuacion { get; set; }  
        public int CapacitacionPersonalEmergencia { get; set; }
        public int CapacitacionEmergencia { get; set; }
        public int CapacitacionPrimerosAuxilios { get; set; }
        public int Sanitizacion { get; set; }
        public int SegDesratizacion { get; set; }
        public int SegFumigacion { get; set; }
        public int SegSanitizacion { get; set; }
        public int SistemaElectrico { get; set; }  
        public int ZonasSeguridad { get; set; }  
        public DateTime FechaActualizacion { get; set; }
        public int IdUsuarioActualizacion { get; set; }
        public string Observaciones { get; set; }
        public string error { get; set; }
    }

    public class ResultadoOperacionSeguridadDto
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
