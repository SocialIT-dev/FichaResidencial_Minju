using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetAntecedentesEducacionDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int NNAEducacion { get; set; } 
        public int NNAEducacionNo { get; set; }
        public int NNAEducacionNoMotivo { get; set; }
        public int NNARetrasoEscolar { get; set; } 
        public int NNAMatriculaCancelada { get; set; } 
        public int NNAEducaionEspecial { get; set; } 
        public int NNANivelacion { get; set; }
        public int NNAMatriculados { get; set; }
        public int NNAExamenesLibres { get; set; }
        public int EspaciosEstudios { get; set; } 
        public int MaterialBibliografico { get; set; } 
        public int Computadores  { get; set; }
        public int AccesoInternetControlado { get; set; }
        public DateTime FechaActualizacion { get; set; }
        public int IdUsuarioActualizacion { get; set; }
        public string Observaciones { get; set; }
        public string error { get; set; }
    }
    
    public class ResultadoOperacionEducacionDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class GetEducacionDTO
    {
        public int CodFicha { get; set; }
        public int numeroMatriculados { get; set; }
        public int numeroAsistencia { get; set; }
        public int numeroNoAsistencia { get; set; }
        public int asisteEducacionDiferencial { get; set; }
        public int inscritosExamenesLibres { get; set; }
        /* falta 3 campos */
        public int rezagoEscolar { get; set; }
        public int matriculaCancelada { get; set; }
        public int nivelacionEstudios { get; set; }

        public string observaciones { get; set; }
        public string error { get; set; }
    }
}
