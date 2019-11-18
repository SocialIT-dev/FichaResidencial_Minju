using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetDotacionPersonalDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int CantidadDirector { get; set; }
        public int CodJornadaDirector { get; set; }
        public int HorasSemDirector { get; set; }
        public int CantidadAsistenteSocial { get; set; }
        public int CodJornadaAsistenteSocial { get; set; }
        public int HorasSemAsistenteSocial { get; set; }
        public int CantidadPsicologo { get; set; }
        public int CodJornadaPsicologo { get; set; }
        public int HorasSemPsicologo { get; set; }
        public int CantidadEnfermero { get; set; }
        public int CodJornadaEnfermero { get; set; }
        public int HorasSemEnfermero { get; set; }
        public int CantidadAuxiliarEnfermeria { get; set; }
        public int CodJornadaAuxiliarEnfermeria { get; set; }
        public int HorasSemAuxiliarEnfermeria { get; set; }
        public int CantidadMedico { get; set; }
        public int CodJornadaMedico { get; set; }
        public int HorasSemMedico { get; set; }
        public int CantidadPsiquiatra { get; set; }
        public int CodJornadaPsiquiatra { get; set; }
        public int HorasSemPsiquiatra { get; set; }
        public int CantidadTerapeutaOcupacional { get; set; }
        public int CodJornadaTerapeutaOcupacional { get; set; }
        public int HorasSemTerapeutaOcupacional { get; set; }
        public int CantidadKinesiolgo { get; set; }
        public int CodJornadaKinesiologo { get; set; }
        public int HorasSemKinesiologo { get; set; }
        public int CantidadNutricionista { get; set; }
        public int CodJornadaNutricionista { get; set; }
        public int HorasSemNutricionista { get; set; }
        public int CantidadFonoaudiologo { get; set; }
        public int CodJornadaFonoaudiologo { get; set; }
        public int HorasSemFonoaudiolgo { get; set; }
        public int CantidadProfEducFisica { get; set; }
        public int CodJornadaProfEducFisica { get; set; }
        public int HorasSemProfEducFisica { get; set; }
        public int CantidadPsicopedagogo { get; set; }
        public int CodJornadaPsicopedagogo { get; set; }
        public int HorasSemPsicopedagogo { get; set; }
        public int CantidadEducadoraParvulos { get; set; }
        public int CodJornadaEducadoraParvulos { get; set; }
        public int HorasSemEducadoraParvulos { get; set; }
        public int CantidadEducadorTratoDirecto { get; set; }
        public int CodJornadaEducadorTratoDirecto { get; set; }
        public int HorasSemEducadorTratoDirecto { get; set; }
        public int CantidadManipuladorAlimentos { get; set; }
        public int CodJornadaManipuladorAlimentos { get; set; }
        public int HorasSemManipuladorAlimentos { get; set; }
        public int CantidadApoyoAdm { get; set; }
        public int CodJornadaApoyoAdm { get; set; }
        public int HorasSemApoyoAdm { get; set; }
        public int CantidadPersonalAseo { get; set; }
        public int CodJornadaPersonalAseo { get; set; }
        public int HorasSemPersonalAseo { get; set; }
        public int CantidadPersonalLavanderia { get; set; }
        public int CodJornadaPersonalLavanderia { get; set; }
        public int HorasSemPersonalLavanderia { get; set; }
        public int CantidadMonitoresTalleristas { get; set; }
        public int CodJornadaMonitoresTalleristas { get; set; }
        public int HorasSemMonitoresTalleristas { get; set; }
        public int CantidadAlumnosPractica { get; set; }
        public int CodJornadaAlumnosPractica { get; set; }
        public int HorasSemAlumnosPractica { get; set; }
        public int CantidadApoyoVoluntario { get; set; }
        public int CodJornadaApoyoVoluntario { get; set; }
        public int HorasSemApoyoVoluntario { get; set; }
        public int CantidadOtros { get; set; }
        public int CodJornadaOtros { get; set; }
        public int HorasSemOtros { get; set; }
        public int CantidadLicencia { get; set; }
        public int CodJornadaLicencia { get; set; }
        public int HorasSemLicencia { get; set; }
        public int CantidadSuplenteLicencia { get; set; }
        public int CodJornadaSuplenteLicencia { get; set; }
        public int HorasSemSuplenteLicencia { get; set; }
        public DateTime FechaActualizacion { get; set; }
        public int IdUsuarioActualizacion { get; set; }
        public string Observaciones { get; set; }
        public string error { get; set; }
   
    }

    public class ResultadoOperacionPersonalDto
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
