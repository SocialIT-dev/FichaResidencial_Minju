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
    public class DatosGeneralesImpl : IDatosGenerales
    {
        private readonly DatosGeneralesDao _datosGeneralesDao;

        public DatosGeneralesImpl()
        {
            _datosGeneralesDao = new DatosGeneralesDao();
        }

        public List<DatosGeneralesDto> ObtenerDatosGenerales(int? CodProyecto)
        {
            var result = _datosGeneralesDao.ObtenerDatosGenerales(CodProyecto);
            return DatosGeneralesMapper.ToDto(result);
        }
    }

    public class NiñosVigentesImpl : INiñosVigentes
    {
        private readonly NiñosVigentesDao _niñosVigentesDao;

        public NiñosVigentesImpl()
        {
            _niñosVigentesDao = new NiñosVigentesDao();
        }

        public List<NiñosVigentesDto> ObtenerNiñosVigentes(int? CodProyecto)
        {
            var result = _niñosVigentesDao.ObtenerNiñosVigentes(CodProyecto);
            return NiñosVigentesMapper.ToDto(result);
        }
    }

    public class ResultadoOperacionImpl : IResultadoOperacion
    {
        private readonly ResultadoOperacionDao _resultadoOperacionDao;

        public ResultadoOperacionImpl()
        {
            _resultadoOperacionDao = new ResultadoOperacionDao();
        }

        public List<ResultadoOperacionDto> GrabarAntecedentesGenerales(
            int? CodProyecto,
            int? CodFicha, 
            int? CodEstadoFicha,
            int? idUsuarioActualizacion, 
            int? PoblacionHombres, 
            int? PoblacionMujeres, 
            int? PlazasSenameHombres,
            int? PlazasSenameMujeres, 
            int? OtrasPlazasHombres, 
            int? OtrasPlazasMujeres, 
            int? TotalNnaHombres, 
            int? TotalNnaMujeres,
            int? TotalAcercamientoHombres, 
            int? TotalAcercamientoMujeres, 
            int? TotalMayoresHombres, 
            int? TotalMayoresMujeres,
            int? FugaHombres, 
            int? FugaMujeres, 
            int? HospitalizadosHombres, 
            int? HosptitalizadosMujeres, 
            int? Art80Hombres,
            int? Art80Mujeres, 
            int? AbandonoHombres, 
            int? AbandonoMujeres, 
            int? SentenciaAdopcionHombres,
            int? SentenciaAdopcionMujeres, 
            int? EnlaceAdopcionHombres, 
            int? EnlaceAdopcionMujeres, 
            int? SinSentenciaHombres,
            int? SinSentenciaMujeres, 
            int? AdolecentesHijosHombres, 
            int? AdolecentesHijosMujeres,
            string DetalleNNAAbandono,
            string DetalleAdolecentesConHijos)
        {
            var result = _resultadoOperacionDao.GrabarAntecedentesGenerales(
                CodProyecto, 
                CodFicha, 
                CodEstadoFicha, 
                idUsuarioActualizacion, 
                PoblacionHombres, 
                PoblacionMujeres, 
                PlazasSenameHombres, 
                PlazasSenameMujeres, 
                OtrasPlazasHombres, 
                OtrasPlazasMujeres, 
                TotalNnaHombres, 
                TotalNnaMujeres,  
                TotalAcercamientoHombres, 
                TotalAcercamientoMujeres, 
                TotalMayoresHombres, 
                TotalMayoresMujeres,
                FugaHombres, 
                FugaMujeres, 
                HospitalizadosHombres, 
                HosptitalizadosMujeres, 
                Art80Hombres,
                Art80Mujeres, 
                AbandonoHombres, 
                AbandonoMujeres, 
                SentenciaAdopcionHombres, 
                SentenciaAdopcionMujeres, 
                EnlaceAdopcionHombres, 
                EnlaceAdopcionMujeres, 
                SinSentenciaHombres,
                SinSentenciaMujeres, 
                AdolecentesHijosHombres, 
                AdolecentesHijosMujeres,
                DetalleNNAAbandono,
                DetalleAdolecentesConHijos);
            return ResultadoOperacionMapper.ToDto(result);
        }
    }

    public class AntecedentesGeneralesImpl : IAntecedentesGenerales
    {
        private readonly AntecedentesGeneralesDao _antecedentesGeneralesDao;

        public AntecedentesGeneralesImpl()
        {
            _antecedentesGeneralesDao = new AntecedentesGeneralesDao();
        }

        public List<AntecedentesGeneralesDto> ObtenerAntecedentesGenerales(int? CodFicha)
        {
            var result = _antecedentesGeneralesDao.ObtenerAntecedentesGenerales(CodFicha);
            return AntecedentesGeneralesMapper.ToDto(result);
        }
    }

    public class NnaAbandonoImpl : INnaAbandono
    {
        private readonly NnaAbandonoDao _nnaAbandonoDao;

        public NnaAbandonoImpl()
        {
            _nnaAbandonoDao = new NnaAbandonoDao();
        }

        public List<NnaAbandonoDto> ObtenerNnaAbandono(int? CodFicha)
        {
            var result = _nnaAbandonoDao.ObtenerNnaAbandono(CodFicha);
            return NnaAbandonoMapper.ToDto(result);
        }
    }

    public class AdolcentesConHijosImpl : IAdolecentesConHijos
    {
        private readonly AdolecentesConHijosDao _adolecentesConHijosDao;

        public AdolcentesConHijosImpl()
        {
            _adolecentesConHijosDao = new AdolecentesConHijosDao();
        }

        public List<AdolecentesConHijosDto> ObtenerAdolecentesConHijos(int? CodFicha)
        {
            var result = _adolecentesConHijosDao.ObtenerAdolecentesConHijos(CodFicha);
            return AdolecentesConHijosMapper.ToDto(result);
        }
    }

    public class ProyectosUsuarioImpl : IProyectosUsuario
    {
        private readonly ProyectosUsuarioDao _proyectosUsuarioDao;

        public ProyectosUsuarioImpl()
        {
            _proyectosUsuarioDao = new ProyectosUsuarioDao();
        }

        public List<ProyectosUsuarioDto> ObtenerProyectosUsuario(int? IdUsuario)
        {
            var result = _proyectosUsuarioDao.ObtenerProyectosUsuario(IdUsuario);
            return ProyectosUsuarioMapper.ToDto(result);
        }

        public List<ProyectosUsuarioDto> ObtenerProyectosXInstitucionYUsuario(int? IdUsuario, int? codigoInstitucion)
        {
            var result = _proyectosUsuarioDao.ProyectosXInstitucionYUsuario(IdUsuario, codigoInstitucion);
            return ProyectosUsuarioMapper.ToDto(result);
        }

    }

    public class InstitucionesUsuarioImpl : IInstitucionesUsuario
    {
        private readonly InstitucionesUsuarioDao _institucionesUsuarioDao;

        public InstitucionesUsuarioImpl()
        {
            _institucionesUsuarioDao = new InstitucionesUsuarioDao();
        }

        public List<InstitucionesUsuarioDto> ObtenerInstitucionesUsuario(int? IdUsuario)
        {
            var result = _institucionesUsuarioDao.ObtenerInstitucionesUsuario(IdUsuario); 
            return InstitucionesUsuarioMapper.ToDto(result);
        }
    }

    public class SETFechaAplicacionImpl : ISETFechaAplicacion
    {
        private readonly SETFechaAplicacionDao _sETFechaAplicacionDao;

        public SETFechaAplicacionImpl()
        {
            _sETFechaAplicacionDao = new SETFechaAplicacionDao();
        }

        public List<SETFechaAplicacionDto> GrabarFechaAplicacionFicha(int? CodFicha, string FechaAplicacion)
        {
            var result = _sETFechaAplicacionDao.GrabarFechaAplicacionFicha(CodFicha, FechaAplicacion);
            return SETFechaAplicacionMapper.ToDto(result);
        }
    }

    public class FechaAplicacionImpl : IFechaAplicacion
    {
        private readonly FechaAplicacionDao _fechaAplicacionDao;

        public FechaAplicacionImpl()
        {
            _fechaAplicacionDao = new FechaAplicacionDao();
        }

        public List<FechaAplicacionDto> ObtenerFechaAplicacion(int? CodFicha)
        {
            var result = _fechaAplicacionDao.ObtenerFechaAplicacion(CodFicha);
            return FechaAplicacionMapper.ToDto(result);
        }
    }
         
}
