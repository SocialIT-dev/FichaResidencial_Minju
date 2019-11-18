using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GETTiemposProcesoDto
    {
        public decimal TiempoFinalizacion { get; set; }
        public decimal TiempoConsumo { get; set; }
        public decimal TiempoObservacion { get; set; }
        public decimal TiempoInicioTramitacion { get; set; }
        public decimal TiempoFinTramitacion { get; set; }
        public decimal TiempoConsumoRespuesta { get; set; }
        public string FechaInicioFicha { get; set; }
        public string FechaFinFicha { get; set; }
        public string FechaConsumoFicha { get; set; }
        public string FechaCargaObs { get; set; }
        public string FechaIniciaTramite { get; set; }
        public string FechaFinTramite { get; set; }
        public string FechaConsumoResp { get; set; }
        public string error { get; set; }
    }

    public class GETTiemposXEtapaDto
    {
        public int CodProyecto { get; set; }
		public int CodInstitucion { get; set; }
		public string NombreProyecto { get; set; }
		public string NombreInstitucion { get; set; }
		public decimal Tiempo  { get; set; }
        public int CantidadFichas { get; set; }
        public string error { get; set; }
    }

    public class GETTiemposXProyectoDto
    {
       public int  CodFicha { get; set; }
	   public string Corte_Tribunal { get; set; } 
	   public string Juez { get; set; }
	   public decimal t0 { get; set; }
	   public decimal t1 { get; set; }
	   public decimal t2 { get; set; }
	   public decimal t3A { get; set; }
	   public decimal t3B { get; set; }
       public decimal t4 { get; set; }
       public string error { get; set; }
    }

    public class GETCantidadesGeneralesDto
    {
        public int Hombres { get; set; }
        public int Mujeres { get; set; }
        public int Total { get; set; }
        public int Mes { get; set; }
        public string error { get; set; }
    }

    public class GETCantidadesPersonalDto
    {
        public int Cantidad { get; set; }
        public int TotalHorasSem { get; set; }
        public int Mes { get; set; }
        public string error { get; set; }
    }

    public class GETCantidadesInfraestructuraDto
    {

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
		public int CantidadBañosNNAFuncionamiento { get; set; }
		public int CantidadBañosNNANormativa { get; set; }
		public int CantidadBañosNNAHombres { get; set; }
		public int CantidadBañosNNAMujeres { get; set; }
		public int CantidadBañosNNAMixtos { get; set; }
		public int CantidadDuchasNNAFuncionamiento { get; set; }
		public int CantidadDuchasNNANormativa { get; set; }
		public int CantidadDuchasNNAHombres { get; set; }
		public int CantidadDuchasNNAMujeres { get; set; }
        public int CantidadDuchasNNAMixtas { get; set; }
        public int Mes { get; set; }
        public string error { get; set; }
    }

    public class GETCantidadesSaludDto
    {
        public int NNACesfam { get; set; }
		public int NNASaludMentalDiagnostico { get; set; }
		public int NNASaludMental { get; set; }
		public int NNACronicos { get; set; }
		public int NNAEsperaTransplante { get; set; }
		public int NNATransplantados { get; set; }
		public int NNADiscapacitados { get; set; }
		public int NNAMedicamento { get; set; }
		public int NNATratamiento { get; set; }
		public int NNADrogas { get; set; }
        public int NNAConsumoAlcohol { get; set; }
        public int NNAConsumoAlcoholDrogas { get; set; }
        public int AdolecentesEmbarazadas { get; set; }
        public int Mes { get; set; }
        public string error { get; set; }
    }

    public class GETCantidadesEducacionDto
    {
		public int NNAMatriculados { get; set; }
		public int NNAEducacion { get; set; } 
		public int NNAEducacionNo { get; set; }
		public int NNARetrasoEscolar { get; set; }
		public int NNAMatriculaCancelada { get; set; }
		public int NNAEducaionEspecial { get; set; }
		public int NNANivelacion { get; set; }
        public int NNAExamenesLibres { get; set; }
        public int Mes { get; set; }
        public string error { get; set; }
    }

    public class GETCantidadesAlimentacionDto
    {
        public int CantidadComidas { get; set; }
        public int CantidadComidasFeriados { get; set; }
        public int Mes { get; set; }
        public string error { get; set; }
    }

    public class GETProyectosConFichaDto
    {
        public int ProyectosFicha { get; set; }
        public int TotalProyectos { get; set; }
        public int Mes { get; set; }
        public string error { get; set; }
    }

    public class ListaFichasIngresadasDto
    {
        public int CodFicha { get; set; }
        public int CodProyecto { get; set; }
        public string NombreProyecto { get; set; }
        public string NombreInstitucion { get; set; }
        public string FechaActualizacion { get; set; }
        public string Estado { get; set; }
        public string usuarioregistro { get; set; }
        public string error { get; set; }
    }
    public class ListaFichasIngresadasTotalDto
    {
        public int TotalRegistros { get; set; }
        public string error { get; set; }
    }
}
