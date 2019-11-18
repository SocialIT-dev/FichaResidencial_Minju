using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class ListaObservacionesDto
    {
        public int IdInforme { get; set; }
		public string NombreJuez { get; set; } 
		public string NombreConsejero { get; set; } 
        public string CorteTribunal { get; set; }  
		public string PersonaResidencia1 { get; set; }  
		public string PersonaResidencia2 { get; set; }  
		public int CodFicha { get; set; }  
		public int CodFichaPadre { get; set; }
        public int CodProyecto { get; set; }  
		public string NombreProyecto { get; set; }  
		public string NombreInstitucion { get; set; }  
		public string Estado { get; set; }  
		public int DiasEnTramite { get; set; }
        public string FechaVisitaAnterior { get; set; }
        public string FechaVisitaActual { get; set; }
        public string HoraInicioVisita { get; set; }
        public string HoraFinVisita { get; set; }
        public string FechaActualizacionPJUD { get; set; }
        public string FechaCeradaResidencia { get; set; }
        public string error { get; set; }
       
    }

    public class ListaObservacionesTotalDto
    {
        public int TotalRegistros { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesAlimentacionDto
    {
        public int CodFicha { get; set; }
		public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesEducacionDto
    {
        public int CodFicha { get; set; }
        public int EvaluacionEspaciosEstudios { get; set; }
		public int EvaluacionMaterialBibliografico { get; set; }
		public int EvaluacionComputadores { get; set; }
        public int EvaluacionAccesoInternet { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesGeneralesDto
    {
        public int CodFicha { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesPoblacionDto
    {
        public int CodFicha { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesSaludDto
    {
        public int CodFicha { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesSeguridadDto
    {
        public int CodFicha { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesPersonalDto
    {
        public int CodFicha { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesFichaDto
    {
        public int CodFicha { get; set; }
        public string EstadoRespuesta { get; set; }
        public string ObservacionesGeneralesJuez { get; set; }
        public string SugerenciasSenameJuez { get; set; }
        public string SugerenciasResidenciaJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesGestionResidenciaDto
    {
        public int CodFicha { get; set; }
        public int JuezEntrevistaNNA { get; set; }
        public int EntrevistaReservadaNNA { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string ObservacionGestion { get; set; }
        public string error { get; set; }
    }

    public class ObservacionesMaterialesDto
    {
        public int CodFicha { get; set; }
        public int EvaluacionOficAdm { get; set; }
		public int EvaluacionSalaReunion { get; set; }
		public int EvaluacionSalaRecepcion { get; set; }
		public int EvaluacionEspaciosVisitas { get; set; }
		public int EvaluacionSalaTalleres { get; set; }
		public int EvaluacionSalaLiving { get; set; }
		public int EvaluacionEnfermeria { get; set; }
		public int EvaluacionRecreacion { get; set; }
		public int EvaluacionAreasVerdes { get; set; }
		public int EvaluacionCocina { get; set; }
		public int EvaluacionComedor { get; set; }
		public int EvaluacionLavanderia { get; set; }
		public int EvaluacionDormitorios { get; set; }
		public int EvaluacionCamasNNA { get; set; }
		public int EvaluacionClosetLockers { get; set; }
		public int EvaluacionBañosPublicos { get; set; }
		public int EvaluacionBañosNNA { get; set; }
		public int EvaluacionDuchasNNA { get; set; }
		public int EvaluacionAmbienteAcorde { get; set; }
		public int EvaluacionVestuarioAdecuado { get; set; }
		public int EvaluacionUtilesAseo { get; set; }
		public int EvaluacionAguaCaliente { get; set; }
		public int EvaluacionCalefonGas { get; set; }
		public int EvaluacionSistemaCalefacion { get; set; }
		public int EvaluacionVentilacion { get; set; }
		public int EvaluacionAccesoDiscapacitados { get; set; }
		public int EvaluacionHabilitaDiscapacitados { get; set; }
        public string ObservacionJuez { get; set; }
        public string RespuestaSename { get; set; }
        public string error { get; set; }
    }

    public class NNAEntrevistadosDto
    {
        public int CodNino { get; set; }
        public int CodFicha { get; set; }
        public string Rut { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Sexo { get; set; }
        public string Rit { get; set; }
        public int CodTribunal { get; set; }
        public string NombreTribunal { get; set; }
        public string error { get; set; }
    }
}
