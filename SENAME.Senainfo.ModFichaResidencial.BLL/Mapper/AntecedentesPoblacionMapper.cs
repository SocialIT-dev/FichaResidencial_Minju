using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetAntecedentesPoblacionMapper
    {
        public static List<GetAntecedentesPoblacionDto> ToDto(DataTable dt)
        {
            List<GetAntecedentesPoblacionDto> list = new List<GetAntecedentesPoblacionDto>();
            GetAntecedentesPoblacionDto dto = new GetAntecedentesPoblacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesPoblacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.SubvencionSename = (int)dr["SubvencionSename"]; 
                    dto.SexoAtiende = (int)dr["SexoAtiende"];
                    dto.IdRangoEtareo = (int)dr["IdRangoEtareo"]; /* Sprint 3 - 20191122 -  se cambio RangoEtareo */
                    dto.PoblacionVigente = (int)dr["PoblacionVigente"];
                    dto.TipoVulneracion = dr["TipoVulneracion"].ToString();
                    dto.ProgramaApadrinamiento = (int)dr["ProgramaApadrinamiento"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                }
                list.Add(dto);
            }
            return list;
        }

        /// <summary>
        /// Método que obtiene lista del objeto GetParRangoEtareoDto
        /// Spring N° 3 - 20191112 - gcastro
        /// </summary>
        /// <param name="dt"></param>
        /// <returns>Lista</returns>
        public static List<GetParRangoEtareoDto> ToDtoParRangoEtareo(DataTable dt)
        {
            List<GetParRangoEtareoDto> list = new List<GetParRangoEtareoDto>();
            GetParRangoEtareoDto dto = new GetParRangoEtareoDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetParRangoEtareoDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.IdRangoEtareo = (int)dr["IdRangoEtareo"];
                    dto.DescripcionRango = dr["DescripcionRango"].ToString();
                    dto.TipoRangoEtareo = dr["TipoRangoEtareo"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionPoblacionMapper
    {
        public static List<ResultadoOperacionPoblacionDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionPoblacionDto> list = new List<ResultadoOperacionPoblacionDto>();
            ResultadoOperacionPoblacionDto dto = new ResultadoOperacionPoblacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionPoblacionDto();
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
