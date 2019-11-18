using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class SetRespuestaObservacionesMapper
    {
        public static List<SetRespuestaObservacionesDto> ToDto(DataTable dt)
        {
            List<SetRespuestaObservacionesDto> list = new List<SetRespuestaObservacionesDto>();
            SetRespuestaObservacionesDto dto = new SetRespuestaObservacionesDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new SetRespuestaObservacionesDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.REGISTRO_ACTUALIZADO = dr["REGISTRO_ACTUALIZADO"].ToString();
                    dto.ID_DETALLE = dr["ID_DETALLE"].ToString();
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

    public class GetRespuestaSenameMapper
    {
        public static List<GetRespuestaSenameDto> ToDto(DataTable dt)
        {
            List<GetRespuestaSenameDto> list = new List<GetRespuestaSenameDto>();
            GetRespuestaSenameDto dto = new GetRespuestaSenameDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetRespuestaSenameDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.IdDetalle = (int)dr["IdDetalle"];
                    dto.IdRespuesta = (int)dr["IdRespuesta"];
                    dto.Respuesta = dr["Respuesta"].ToString();
                    dto.Fecha = dr["Fecha"].ToString();
                    dto.Hora = dr["Hora"].ToString();
                    dto.PersonaCreacion = dr["PersonaCreacion"].ToString();
                    dto.IdTipoRespuesta = (int)dr["IdTipoRespuesta"];
                    dto.EstadoDetalle = dr["EstadoDetalle"].ToString();
                    dto.Estado = dr["Estado"].ToString();
                    dto.NombreArchivo = dr["NombreArchivo"].ToString();
                    dto.Extension = dr["Extension"].ToString();
                    dto.FolderAdjuntos = dr ["FolderAdjuntos"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class SetRespuestaFichaMapper
    {
        public static List<SetRespuestaFichaDto> ToDto(DataTable dt)
        {
            List<SetRespuestaFichaDto> list = new List<SetRespuestaFichaDto>();
            SetRespuestaFichaDto dto = new SetRespuestaFichaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new SetRespuestaFichaDto();
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

    public class SetVisadoFichaMapper
    {
        public static List<SetVisadoFichaDto> ToDto(DataTable dt)
        {
            List<SetVisadoFichaDto> list = new List<SetVisadoFichaDto>();
            SetVisadoFichaDto dto = new SetVisadoFichaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new SetVisadoFichaDto();
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

    public class GetCodArchivoMapper
    {
        public static List<GetCodArchivoDto> ToDto(DataTable dt)
        {
            List<GetCodArchivoDto> list = new List<GetCodArchivoDto>();
            GetCodArchivoDto dto = new GetCodArchivoDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetCodArchivoDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodArchivo = (long)dr["CodArchivo"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class BorrarArchivoMapper
    {
        public static List<BorrarArchivoDto> ToDto(DataTable dt)
        {
            List<BorrarArchivoDto> list = new List<BorrarArchivoDto>();
            BorrarArchivoDto dto = new BorrarArchivoDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new BorrarArchivoDto();
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

    public class SetInicioTramitacionMapper
    {
        public static List<SetInicioTramitacionDto> ToDto(DataTable dt)
        {
            List<SetInicioTramitacionDto> list = new List<SetInicioTramitacionDto>();
            SetInicioTramitacionDto dto = new SetInicioTramitacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new SetInicioTramitacionDto();
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
}
