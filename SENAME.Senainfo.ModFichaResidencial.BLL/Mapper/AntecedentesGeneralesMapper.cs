using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class DatosGeneralesMapper
    {
        public static List<DatosGeneralesDto> ToDto(DataTable dt)
        {
            List<DatosGeneralesDto> list = new List<DatosGeneralesDto>();
            DatosGeneralesDto dto = new DatosGeneralesDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new DatosGeneralesDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.NombreProyecto = dr["NombreProyecto"].ToString();
                    dto.NombreInstitucion = dr["NombreInstitucion"].ToString();
                    dto.TipoProyecto = dr["TipoProyecto"].ToString();
                    dto.NombreModeloIntervencion = dr["NombreModeloIntervencion"].ToString();
                    dto.Direccion = dr["Direccion"].ToString();
                    dto.Telefono = dr["Telefono"].ToString();
                    dto.Region = dr["Region"].ToString();
                    dto.Comuna = dr["Comuna"].ToString();
                    dto.Mail = dr["Mail"].ToString();
                    dto.NombreDirector = dr["NombreDirector"].ToString();
                    dto.RutDirector = dr["RutDirector"].ToString();
                    dto.TipoSubvencion = dr["TipoSubvencion"].ToString();
                    dto.Sexo = dr["Sexo"].ToString();
                    dto.EdadMinima = (int)dr["EdadMinima"];
                    dto.EdadMinima = (int)dr["EdadMaxima"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.CodFicha2 = (int)dr["CodFicha2"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class NiñosVigentesMapper
    {
        public static List<NiñosVigentesDto> ToDto(DataTable dt)
            {
                List<NiñosVigentesDto> list = new List<NiñosVigentesDto>();
                NiñosVigentesDto dto = new NiñosVigentesDto();

                foreach (DataRow dr in dt.Rows)
                {
                    dto = new NiñosVigentesDto();
                    dto.error = dr["error"].ToString();

                    if (dto.error == "")
                    {
                        dto.Rut = dr["Rut"].ToString();
                        dto.Nombres = dr["Nombres"].ToString();
                        dto.ApellidoPaterno = dr["ApellidoPaterno"].ToString();
                        dto.ApellidoMaterno = dr["ApellidoMaterno"].ToString();
                        dto.Rit = dr["Rit"].ToString();
                        dto.CodTribunal = (int)dr["CodTribunal"];
                        dto.NombreTribunal = dr["NombreTribunal"].ToString();
                        dto.CodNino = (int)dr["CodNino"];
                        dto.Sexo = dr["Sexo"].ToString();
                    }
                    list.Add(dto);
                }
                return list;
            }
    }

    public class ResultadoOperacionMapper
    {
        public static List<ResultadoOperacionDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionDto> list = new List<ResultadoOperacionDto>();
            ResultadoOperacionDto dto = new ResultadoOperacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.REGISTRO_ACTUALIZADO = dr["REGISTRO_ACTUALIZADO"].ToString();
                    dto.ERROR_PROCEDURE_ = dr["ERROR_PROCEDURE_"].ToString();
                    dto.ERROR_NUMBER_ = (int)dr["ERROR_NUMBER_"];
                    dto.ERROR_MESSAGE_ = dr["ERROR_MESSAGE_"].ToString();
                    dto.ERROR_LINE_ = (int)dr["ERROR_LINE_"];
                    dto.ETAPAS_PROCESADAS = dr["ETAPAS_PROCESADAS"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class AntecedentesGeneralesMapper
    {
        public static List<AntecedentesGeneralesDto> ToDto(DataTable dt)
        {
            List<AntecedentesGeneralesDto> list = new List<AntecedentesGeneralesDto>();
            AntecedentesGeneralesDto dto = new AntecedentesGeneralesDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new AntecedentesGeneralesDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.PoblacionHombres = (int)dr["PoblacionHombres"];
                    dto.PoblacionMujeres = (int)dr["PoblacionMujeres"];
                    dto.PlazasSenameHombres = (int)dr["PlazasSenameHombres"];
                    dto.PlazasSenameMujeres = (int)dr["PlazasSenameMujeres"];
                    dto.OtrasPlazasHombres = (int)dr["OtrasPlazasHombres"];
                    dto.OtrasPlazasMujeres = (int)dr["OtrasPlazasMujeres"];
                    dto.TotalNnaHombres = (int)dr["TotalNnaHombres"];
                    dto.TotalNnaMujeres = (int)dr["TotalNnaMujeres"];
                    dto.TotalAcercamientoHombres = (int)dr["TotalAcercamientoHombres"];
                    dto.TotalAcercamientoMujeres = (int)dr["TotalAcercamientoMujeres"];
                    dto.TotalMayoresHombres = (int)dr["TotalMayoresHombres"];
                    dto.TotalMayoresMujeres = (int)dr["TotalMayoresMujeres"];
                    dto.FugaHombres = (int)dr["FugaHombres"];
                    dto.FugaMujeres = (int)dr["FugaMujeres"];
                    dto.HospitalizadosHombres = (int)dr["HospitalizadosHombres"];
                    dto.HosptitalizadosMujeres = (int)dr["HosptitalizadosMujeres"];
                    dto.Art80Hombres = (int)dr["Art80Hombres"];
                    dto.Art80Mujeres = (int)dr["Art80Mujeres"];
                    dto.AbandonoHombres = (int)dr["AbandonoHombres"];
                    dto.AbandonoMujeres = (int)dr["AbandonoMujeres"];
                    dto.SentenciaAdopcionHombres = (int)dr["SentenciaAdopcionHombres"];
                    dto.SentenciaAdopcionMujeres = (int)dr["SentenciaAdopcionMujeres"];
                    dto.EnlaceAdopcionHombres = (int)dr["EnlaceAdopcionHombres"];
                    dto.EnlaceAdopcionMujeres = (int)dr["EnlaceAdopcionMujeres"];
                    dto.SinSentenciaHombres = (int)dr["SinSentenciaHombres"];
                    dto.SinSentenciaMujeres = (int)dr["SinSentenciaMujeres"];
                    dto.AdolecentesHijosHombres = (int)dr["AdolecentesHijosHombres"];
                    dto.AdolecentesHijosMujeres = (int)dr["AdolecentesHijosMujeres"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class NnaAbandonoMapper
    {
        public static List<NnaAbandonoDto> ToDto(DataTable dt)
        {
            List<NnaAbandonoDto> list = new List<NnaAbandonoDto>();
            NnaAbandonoDto dto = new NnaAbandonoDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new NnaAbandonoDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodNino = (int)dr["CodNino"];
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.Rut = dr["Rut"].ToString();
                    dto.Nombres = dr["Nombres"].ToString();
                    dto.ApellidoPaterno = dr["ApellidoPaterno"].ToString();
                    dto.ApellidoMaterno = dr["ApellidoMaterno"].ToString();
                    dto.Sexo = dr["Sexo"].ToString();
                    dto.Rit = dr["Rit"].ToString();
                    dto.CodTribunal = (int)dr["CodTribunal"];
                    dto.NombreTribunal = dr["NombreTribunal"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class AdolecentesConHijosMapper
    {
        public static List<AdolecentesConHijosDto> ToDto(DataTable dt)
        {
            List<AdolecentesConHijosDto> list = new List<AdolecentesConHijosDto>();
            AdolecentesConHijosDto dto = new AdolecentesConHijosDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new AdolecentesConHijosDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodNino = (int)dr["CodNino"];
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.Rut = dr["Rut"].ToString();
                    dto.Nombres = dr["Nombres"].ToString();
                    dto.ApellidoPaterno = dr["ApellidoPaterno"].ToString();
                    dto.ApellidoMaterno = dr["ApellidoMaterno"].ToString();
                    dto.Sexo = dr["Sexo"].ToString();
                    dto.Rit = dr["Rit"].ToString();
                    dto.CodTribunal = (int)dr["CodTribunal"];
                    dto.NombreTribunal = dr["NombreTribunal"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ProyectosUsuarioMapper
    {
        public static List<ProyectosUsuarioDto> ToDto(DataTable dt)
        {
            List<ProyectosUsuarioDto> list = new List<ProyectosUsuarioDto>();
            ProyectosUsuarioDto dto = new ProyectosUsuarioDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ProyectosUsuarioDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.Estatus = dr["Estatus"].ToString();
                    dto.NombreProyecto = dr["NombreProyecto"].ToString();
                    dto.NombreInstitucion = dr["NombreInstitucion"].ToString();
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.NombreUsuario = dr["NombreUsuario"].ToString();
                }
                list.Add(dto);

            }
            return list;
        }
    }

    public class InstitucionesUsuarioMapper
    {
        public static List<InstitucionesUsuarioDto> ToDto(DataTable dt)
        {
            List<InstitucionesUsuarioDto> list = new List<InstitucionesUsuarioDto>();
            InstitucionesUsuarioDto dto = new InstitucionesUsuarioDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new InstitucionesUsuarioDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.NombreInstitucion = dr["NombreInstitucion"].ToString();
                    dto.CodInstitucion = (int)dr["CodInstitucion"];
                    dto.NombreUsuario = dr["NombreUsuario"].ToString();
                    dto.Ruta = dr["Ruta"].ToString();
                    dto.TipoArchivo = dr["TipoArchivo"].ToString();
                    dto.TamañoMaximo = (int)dr["TamañoMaximo"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class SETFechaAplicacionMapper
    {
        public static List<SETFechaAplicacionDto> ToDto(DataTable dt)
        {
            List<SETFechaAplicacionDto> list = new List<SETFechaAplicacionDto>();
            SETFechaAplicacionDto dto = new SETFechaAplicacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new SETFechaAplicacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.REGISTRO_ACTUALIZADO = dr["REGISTRO_ACTUALIZADO"].ToString();
                    dto.ERROR_PROCEDURE_ = dr["ERROR_PROCEDURE_"].ToString();
                    dto.ERROR_NUMBER_ = (int)dr["ERROR_NUMBER_"];
                    dto.ERROR_MESSAGE_ = dr["ERROR_MESSAGE_"].ToString();
                    dto.ERROR_LINE_ = (int)dr["ERROR_LINE_"];
                    dto.ETAPAS_PROCESADAS = dr["ETAPAS_PROCESADAS"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class FechaAplicacionMapper
    {
        public static List<FechaAplicacionDto> ToDto(DataTable dt)
        {
            List<FechaAplicacionDto> list = new List<FechaAplicacionDto>();
            FechaAplicacionDto dto = new FechaAplicacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new FechaAplicacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.FechaAplicacion = dr["FechaAplicacion"].ToString(); 
                }
                list.Add(dto);
            }
            return list;
        }
    }
}
