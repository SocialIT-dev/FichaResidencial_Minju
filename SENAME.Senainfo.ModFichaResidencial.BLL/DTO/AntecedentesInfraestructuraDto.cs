using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetAntecedentesInfraestructuraDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int CantidadOficAdm { get; set; }  
        public int CantidadSalaReunion { get; set; }  
        public int CantidadSalaRecepcion { get; set; }  
        public int CantidadEspaciosVisitas { get; set; }  
        public int CantidadSalaTalleres { get; set; }  
        public int CantidadSalaLiving { get; set; }  
        public int CantidadEnfermeria { get; set; }  
        public int CantidadRecreacion { get; set; }  
        public int CantidadAreasVerdes { get; set; }  
        public int CantidadCocina { get; set; }  
        public int CantidadComedor { get; set; }  
        public int CantidadLavanderia { get; set; }  
        public int CantidadDormitoriosNNA { get; set; }  
        public int CantidadCamasNNA { get; set; }  
        public int CantidadColsetLockers { get; set; }  
        public int CantidadBañosPublicos { get; set; }  
        public int CantidadBañosNNA { get; set; }
        public int CantidadBañosNNANormativa { get; set; }
		public int CantidadBañosNNAHombres { get; set; }
		public int CantidadBañosNNAMujeres { get; set; }
		public int CantidadBañosNNAMixtos { get; set; }
        public int CantidadBañosNNAFuncionamiento { get; set; }
        public int CantidadDuchasNNA { get; set; }
        public int CantidadDuchasNNANormativa { get; set; }
        public int CantidadDuchasNNAHombres { get; set; }
        public int CantidadDuchasNNAMujeres { get; set; }
        public int CantidadDuchasNNAFuncionamiento { get; set; }
        public int CantidadDuchasNNAMixtas { get; set; }
        public int AmbienteAcorde { get; set; }  
        public int VestuarioAdecuado { get; set; }
        public int VestuarioPersonalizadoNNA { get; set; }
        public int UtilesAseo { get; set; }  
        public int AguaCaliente { get; set; }  
        public int CalefonGas { get; set; }
        public int CalefonNormativa { get; set; }
        public int LlaveGasNormativa { get; set; }
        public int SistemaCalefacion { get; set; }  
        public int Ventilacion { get; set; }  
        public int AccesoDiscapacitados { get; set; }  
        public int HabilitaDiscapacitados { get; set; } 
        public DateTime FechaActualizacion { get; set; }
        public int IdUsuarioActualizacion { get; set; }
        public string Observaciones { get; set; }
        public string error { get; set; }
    }

    public class ResultadoOperacionInfraestructuraDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    /// <summary>
    /// Entidad de la tabla parValores
    /// Spring 3 - 20191113 - gcastro
    /// </summary>
    public class GetParValoresDto
    {
        public int IdValor { get; set; }
        public string Descripcion { get; set; }
        public string error { get; set; }
    }
}
