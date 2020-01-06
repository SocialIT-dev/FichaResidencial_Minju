using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class DatosGeneralesDto
    {
        public int CodFicha { get; set; }
        public string NombreProyecto { get; set; }
        public string NombreInstitucion { get; set; }
        public string TipoProyecto { get; set; }
        public string NombreModeloIntervencion { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Region { get; set; }
        public string Comuna { get; set; }
        public string Mail { get; set; }
        public string NombreDirector { get; set; }
        public string RutDirector { get; set; }
        public string TipoSubvencion { get; set; }
        public string Sexo { get; set; }
        public int EdadMinima { get; set; }
        public int EdadMaxima { get; set; }
        public int Periodo { get; set; }
        public int CodFicha2 { get; set; }
        public string error { get; set; }
        public int CodEstadoFicha { get; set; }
    }

    public class NiñosVigentesDto
    {
        public string Rut { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Rit { get; set; }
        public int CodTribunal { get; set; }
        public string NombreTribunal { get; set; }
        public int CodNino { get; set; }
        public string Sexo { get; set; }
        public string error { get; set; }
    }
    
    public class ResultadoOperacionDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class AntecedentesGeneralesDto
    {
          public int CodProyecto { get; set; }
          public int Periodo { get; set; }
          public int PoblacionHombres { get; set; } 
          public int PoblacionMujeres { get; set; }  
          public int PlazasSenameHombres { get; set; } 
          public int PlazasSenameMujeres { get; set; } 
          public int OtrasPlazasHombres { get; set; }
          public int OtrasPlazasMujeres { get; set; } 
          public int TotalNnaHombres { get; set; }
          public int TotalNnaMujeres { get; set; } 
          public int TotalAcercamientoHombres { get; set; }  
          public int TotalAcercamientoMujeres { get; set; }   
          public int TotalMayoresHombres { get; set; }
          public int TotalMayoresMujeres { get; set; }  
          public int FugaHombres { get; set; } 
          public int FugaMujeres { get; set; } 
          public int HospitalizadosHombres { get; set; } 
          public int HosptitalizadosMujeres { get; set; } 
          public int Art80Hombres { get; set; } 
          public int Art80Mujeres { get; set; }  
          public int AbandonoHombres { get; set; } 
          public int AbandonoMujeres { get; set; }   
          public int SentenciaAdopcionHombres { get; set; }  
          public int SentenciaAdopcionMujeres { get; set; } 
          public int EnlaceAdopcionHombres { get; set; }   
          public int EnlaceAdopcionMujeres { get; set; }
          public int SinSentenciaHombres { get; set; }  
          public int SinSentenciaMujeres { get; set; }  
          public int AdolecentesHijosHombres { get; set; }
          public int AdolecentesHijosMujeres { get; set; }
          public DateTime FechaActualizacion { get; set; }
          public int IdUsuarioActualizacion { get; set; }
          public string error { get; set; }
    }

    public class NnaAbandonoDto
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

    public class AdolecentesConHijosDto
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

    public class ProyectosUsuarioDto
    {
        public string Estatus { get; set; }
        public string NombreProyecto { get; set; }
        public string NombreInstitucion { get; set; }
        public int CodProyecto { get; set; }
        public string NombreUsuario { get; set; }
        public string error { get; set; }
    }
    public class InstitucionesUsuarioDto
    {
        public string NombreInstitucion { get; set; }
        public int CodInstitucion { get; set; }
        public string NombreUsuario { get; set; }
        public string Ruta { get; set; }
        public string TipoArchivo { get; set; }
        public int TamañoMaximo { get; set; }
        public string error { get; set; }
    }

    public class SETFechaAplicacionDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class FechaAplicacionDto
    {
        public string FechaAplicacion { get; set; }
        public string error { get; set; }
    }

}
