using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IGetDotacionPersonal
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetDotacionPersonalDto> ObtenerDotacionPersonal(int? CodFicha);
    }

    public interface IResultadoOperacionPersonal
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.ResultadoOperacionPersonalDto> GrabarAntecedentesPersonal(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
            int? CantidadDirector,
            int? CodJornadaDirector,
            int? HorasSemDirector,
            int? CantidadAsistenteSocial,
            int? CodJornadaAsistenteSocial,
            int? HorasSemAsistenteSocial,
            int? CantidadPsicologo,
            int? CodJornadaPsicologo,
            int? HorasSemPsicologo,
            int? CantidadEnfermero,
            int? CodJornadaEnfermero,
            int? HorasSemEnfermero,
            int? CantidadAuxiliarEnfermeria,
            int? CodJornadaAuxiliarEnfermeria,
            int? HorasSemAuxiliarEnfermeria,
            int? CantidadMedico,
            int? CodJornadaMedico,
            int? HorasSemMedico,
            int? CantidadPsiquiatra,
            int? CodJornadaPsiquiatra,
            int? HorasSemPsiquiatra,
            int? CantidadTerapeutaOcupacional,
            int? CodJornadaTerapeutaOcupacional,
            int? HorasSemTerapeutaOcupacional,
            int? CantidadKinesiolgo,
            int? CodJornadaKinesiologo,
            int? HorasSemKinesiologo,
            int? CantidadNutricionista,
            int? CodJornadaNutricionista,
            int? HorasSemNutricionista,
            int? CantidadFonoaudiologo,
            int? CodJornadaFonoaudiologo,
            int? HorasSemFonoaudiolgo,
            int? CantidadProfEducFisica,
            int? CodJornadaProfEducFisica,
            int? HorasSemProfEducFisica,
            int? CantidadPsicopedagogo,
            int? CodJornadaPsicopedagogo,
            int? HorasSemPsicopedagogo,
            int? CantidadEducadoraParvulos,
            int? CodJornadaEducadoraParvulos,
            int? HorasSemEducadoraParvulos,
            int? CantidadEducadorTratoDirecto,
            int? CodJornadaEducadorTratoDirecto,
            int? HorasSemEducadorTratoDirecto,
            int? CantidadManipuladorAlimentos,
            int? CodJornadaManipuladorAlimentos,
            int? HorasSemManipuladorAlimentos,
            int? CantidadApoyoAdm,
            int? CodJornadaApoyoAdm,
            int? HorasSemApoyoAdm,
            int? CantidadPersonalAseo,
            int? CodJornadaPersonalAseo,
            int? HorasSemPersonalAseo,
            int? CantidadPersonalLavanderia,
            int? CodJornadaPersonalLavanderia,
            int? HorasSemPersonalLavanderia,
            int? CantidadMonitoresTalleristas,
            int? CodJornadaMonitoresTalleristas,
            int? HorasSemMonitoresTalleristas,
            int? CantidadAlumnosPractica,
            int? CodJornadaAlumnosPractica,
            int? HorasSemAlumnosPractica,
            int? CantidadApoyoVoluntario,
            int? CodJornadaApoyoVoluntario,
            int? HorasSemApoyoVoluntario,
            int? CantidadOtros,
            int? CodJornadaOtros,
            int? HorasSemOtros,
            int? CantidadLicencia,
            int? CodJornadaLicencia,
            int? HorasSemLicencia,
            int? CantidadSuplenteLicencia,
            int? CodJornadaSuplenteLicencia,
            int? HorasSemSuplenteLicencia,
            string Observaciones);
    }
}
