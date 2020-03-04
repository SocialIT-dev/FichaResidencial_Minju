using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using SENAME.Senainfo.ModFichaResidencial.DAL.DAO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Mapper;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Impl
{
    public class GetDotacionPersonalImpl : IGetDotacionPersonal
    {
        private readonly GetDotacionPersonalDao _getDotacionPersonalDao;

        public GetDotacionPersonalImpl()
        {
            _getDotacionPersonalDao = new GetDotacionPersonalDao();
        }


        public List<GetDotacionPersonalDto> ObtenerDotacionPersonal(int? CodFicha)
        {
            var result = _getDotacionPersonalDao.ObtenerDotacionPersonal(CodFicha);
            return GetDotacionPersonalMapper.ToDto(result);
        }
    }
    // Ini Polo
    //public class GetParInfraestructuraImpl : IGetParInfraestructura
    public class GetParDotacionPersonalHARImpl : IGetParDotacionHAR
    {
        private readonly GetDotacionPersonalDao _getParDotacionPersonalHAR;
        public GetParDotacionPersonalHARImpl()
        {
            _getParDotacionPersonalHAR = new GetDotacionPersonalDao();
        }

        public List<GetParValoresHARDto> ObtenerParDotacion(int? CodFicha)
        {
            var result = _getParDotacionPersonalHAR.ObtenerParDotacionHAR(CodFicha);
            return GetDotacionPersonalMapper.ToDtoParValoresHAR(result);
        }
    }

    public class ResultadoOperacionPersonalImplHAR :IResultadoOperacionPersonalHAR
    {
        private readonly ResultadoOperacionPersonalDaoHAR _resultadoOperacionPersonalDaoHAR;

        public ResultadoOperacionPersonalImplHAR()
        {
            _resultadoOperacionPersonalDaoHAR = new ResultadoOperacionPersonalDaoHAR();
        }

        public List<ResultadoOperacionPersonalDtoHAR> GrabarAntecedentesPersonalHAR(
            int? CodFicha,
            int? CodProyecto,
            int? CodEstadoFicha,
            int? idUsuarioActualizacion,
                int? CodProfesion,
              int? Cantidad,
               int? CodJornada,
                int? HorasSemanales,  
             string Observaciones)
        {
            var result = _resultadoOperacionPersonalDaoHAR.GrabarAntecedentesPersonalHAR(
                CodFicha,
            CodProyecto,
             CodEstadoFicha,
             idUsuarioActualizacion,
             CodProfesion ,
             Cantidad ,
              CodJornada ,
              HorasSemanales,
              Observaciones);
            return ResultadoOperacionPersonalMapperHAR.ToDto(result);
        }
    }
    // Fin Polo
    public class ResultadoOperacionPersonalImpl : IResultadoOperacionPersonal
    {
        private readonly ResultadoOperacionPersonalDao _resultadoOperacionPersonalDao;

        public ResultadoOperacionPersonalImpl()
        {
            _resultadoOperacionPersonalDao = new ResultadoOperacionPersonalDao();
        }

        public List<ResultadoOperacionPersonalDto> GrabarAntecedentesPersonal(
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
            string Observaciones)
        {
            var result = _resultadoOperacionPersonalDao.GrabarAntecedentesPersonal(
            CodFicha,
            CodProyecto,
            CodEstadoFicha,
            idUsuarioActualizacion,
            CantidadDirector,  
            CodJornadaDirector,  
            HorasSemDirector,  
            CantidadAsistenteSocial,  
            CodJornadaAsistenteSocial,  
            HorasSemAsistenteSocial,  
            CantidadPsicologo,  
            CodJornadaPsicologo,  
            HorasSemPsicologo,  
            CantidadEnfermero,  
            CodJornadaEnfermero,  
            HorasSemEnfermero,  
            CantidadAuxiliarEnfermeria,  
            CodJornadaAuxiliarEnfermeria,  
            HorasSemAuxiliarEnfermeria,  
            CantidadMedico,  
            CodJornadaMedico,  
            HorasSemMedico,  
            CantidadPsiquiatra,  
            CodJornadaPsiquiatra,  
            HorasSemPsiquiatra,  
            CantidadTerapeutaOcupacional,  
            CodJornadaTerapeutaOcupacional,  
            HorasSemTerapeutaOcupacional,  
            CantidadKinesiolgo,  
            CodJornadaKinesiologo,  
            HorasSemKinesiologo,  
            CantidadNutricionista,  
            CodJornadaNutricionista,  
            HorasSemNutricionista,  
            CantidadFonoaudiologo,  
            CodJornadaFonoaudiologo,  
            HorasSemFonoaudiolgo,  
            CantidadProfEducFisica,  
            CodJornadaProfEducFisica,  
            HorasSemProfEducFisica,  
            CantidadPsicopedagogo,  
            CodJornadaPsicopedagogo,  
            HorasSemPsicopedagogo,  
            CantidadEducadoraParvulos,  
            CodJornadaEducadoraParvulos,  
            HorasSemEducadoraParvulos,  
            CantidadEducadorTratoDirecto,  
            CodJornadaEducadorTratoDirecto,  
            HorasSemEducadorTratoDirecto,  
            CantidadManipuladorAlimentos,  
            CodJornadaManipuladorAlimentos,  
            HorasSemManipuladorAlimentos,  
            CantidadApoyoAdm,  
            CodJornadaApoyoAdm,  
            HorasSemApoyoAdm,  
            CantidadPersonalAseo,  
            CodJornadaPersonalAseo,  
            HorasSemPersonalAseo,  
            CantidadPersonalLavanderia,  
            CodJornadaPersonalLavanderia,  
            HorasSemPersonalLavanderia,  
            CantidadMonitoresTalleristas,  
            CodJornadaMonitoresTalleristas,  
            HorasSemMonitoresTalleristas,  
            CantidadAlumnosPractica,  
            CodJornadaAlumnosPractica,  
            HorasSemAlumnosPractica,  
            CantidadApoyoVoluntario,  
            CodJornadaApoyoVoluntario,  
            HorasSemApoyoVoluntario,  
            CantidadOtros,  
            CodJornadaOtros,  
            HorasSemOtros,  
            CantidadLicencia,  
            CodJornadaLicencia,  
            HorasSemLicencia,  
            CantidadSuplenteLicencia,  
            CodJornadaSuplenteLicencia,  
            HorasSemSuplenteLicencia,
            Observaciones);
            return ResultadoOperacionPersonalMapper.ToDto(result);
        }
    }
}
