using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetAntecedentesResidenciaMapper
    {
        public static List<GetAntecedentesResidenciaDto> ToDto(DataTable dt)
        {
            List<GetAntecedentesResidenciaDto> list = new List<GetAntecedentesResidenciaDto>();
            GetAntecedentesResidenciaDto dto = new GetAntecedentesResidenciaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesResidenciaDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.CatastroRedes = (int)dr["CatastroRedes"];
                    dto.RegistroVisitas = (int)dr["RegistroVisitas"];
                    dto.ProtocoloAcogida = (int)dr["ProtocoloAcogida"];
                    dto.AutocuidadoEquipo = (int)dr["AutocuidadoEquipo"];
                    dto.IntervencionCrisis = (int)dr["IntervencionCrisis"];
                    dto.InformacionNormativa = (int)dr["InformacionNormativa"];
                    dto.ProtocoloConvivencia = (int)dr["ProtocoloConvivencia"];
                    dto.ProtocoloReclamos = (int)dr["ProtocoloReclamos"];
                    dto.ProtocoloEscucha = (int)dr["ProtocoloEscucha"];
                    dto.VinculacionResidencias = (int)dr["VinculacionResidencias"];
                    dto.ProcesosFormacion = (int)dr["ProcesosFormacion"];
                    dto.ProtocoloApadrinamiento = (int)dr["ProtocoloApadrinamiento"];
                    dto.ProtocoloTraslado = (int)dr["ProtocoloTraslado"];
                    dto.ProtocoloEgreso = (int)dr["ProtocoloEgreso"];
                    dto.ProtocoloRedSalud = (int)dr["ProtocoloRedSalud"];
                    dto.HabilitacionLaboral = (int)dr["HabilitacionLaboral"];
                    dto.RESProtocoloVisitas = (int)dr["RESProtocoloVisitas"];
                    dto.RESRegistroVisitas = (int)dr["RESRegistroVisitas"];
                    dto.RESVidaIndependiente = (int)dr["RESVidaIndependiente"];
                    dto.RESHabilitacionLaboral = (int)dr["RESHabilitacionLaboral"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionResidenciaMapper
    {
        public static List<ResultadoOperacionResidenciaDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionResidenciaDto> list = new List<ResultadoOperacionResidenciaDto>();
            ResultadoOperacionResidenciaDto dto = new ResultadoOperacionResidenciaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionResidenciaDto();
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
