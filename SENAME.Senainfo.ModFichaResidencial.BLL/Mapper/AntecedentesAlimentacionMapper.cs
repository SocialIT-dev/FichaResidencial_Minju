using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetAntecedentesAlimentacionMapper
    {
        public static List<GetAntecedentesAlimentacionDto> ToDto(DataTable dt)
        {
            List<GetAntecedentesAlimentacionDto> list = new List<GetAntecedentesAlimentacionDto>();
            GetAntecedentesAlimentacionDto dto = new GetAntecedentesAlimentacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesAlimentacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.RegistroHonorario = (int)dr["RegistroHonorario"];
                    dto.RegistroPlanificacion = (int)dr["RegistroPlanificacion"];
                    dto.MenusEspeciales = (int)dr["MenusEspeciales"];
                    dto.AsesoriaNutricionista = (int)dr["AsesoriaNutricionista"];
                    dto.CertificadosSanitarios = (int)dr["CertificadosSanitarios"];
                    dto.ConservacionAlimentos = (int)dr["ConservacionAlimentos"];
                    dto.AlmacenamientoAlimentos = (int)dr["AlmacenamientoAlimentos"];
                    dto.EstadoConservacionAlimentos = (int)dr["EstadoConservacionAlimentos"];
                    dto.CantidadComidas = (int)dr["CantidadComidas"];
                    dto.CantidadComidasFeriados = (int)dr["CantidadComidasFeriados"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionAlimentacionMapper
    {
        public static List<ResultadoOperacionAlimentacionDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionAlimentacionDto> list = new List<ResultadoOperacionAlimentacionDto>();
            ResultadoOperacionAlimentacionDto dto = new ResultadoOperacionAlimentacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionAlimentacionDto();
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
