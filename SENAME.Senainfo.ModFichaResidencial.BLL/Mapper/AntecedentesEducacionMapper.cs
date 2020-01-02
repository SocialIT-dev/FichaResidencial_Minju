using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetAntecedentesEducacionMapper
    {
        public static List<GetEducacionDTO> ToDto(DataTable dt)
        {
            List<GetEducacionDTO> list = new List<GetEducacionDTO>();
            GetEducacionDTO dto = new GetEducacionDTO();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetEducacionDTO();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.numeroAsistencia = (int)dr["numeroAsistencia"];
                    dto.numeroNoAsistencia = (int)dr["numeroNoAsistencia"];
                    dto.numeroMatriculados = (int)dr["numeroMatriculados"];
                    dto.inscritosExamenesLibres = (int)dr["inscritosExamenesLibres"];
                    dto.asisteEducacionDiferencial = (int)dr["asisteEducacionDiferencial"];
                    dto.rezagoEscolar = 0;
                    dto.nivelacionEstudios = 0;
                    dto.matriculaCancelada = 0;
                    dto.observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionEducacionMapper
    {
        public static List<ResultadoOperacionEducacionDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionEducacionDto> list = new List<ResultadoOperacionEducacionDto>();
            ResultadoOperacionEducacionDto dto = new ResultadoOperacionEducacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionEducacionDto();
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