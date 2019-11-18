using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetAntecedentesSaludMapper
    {
        public static List<GetAntecedentesSaludDto> ToDto(DataTable dt)
        {
            List<GetAntecedentesSaludDto> list = new List<GetAntecedentesSaludDto>();
            GetAntecedentesSaludDto dto = new GetAntecedentesSaludDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesSaludDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.NNACesfam = (int)dr["NNACesfam"];
                    dto.NNASaludMentalDiagnostico = (int)dr["NNASaludMentalDiagnostico"];
                    dto.NNASaludMental = (int)dr["NNASaludMental"];
                    dto.NNACronicos = (int)dr["NNACronicos"];
                    dto.NNADiscapacitados = (int)dr["NNADiscapacitados"];
                    dto.NNAMedicamento = (int)dr["NNAMedicamento"];
                    dto.NNATratamiento = (int)dr["NNATratamiento"];
                    dto.NNAEsperaTransplante = (int)dr["NNAEsperaTransplante"];
                    dto.NNATransplantados = (int)dr["NNATransplantados"];
                    dto.NNADrogas = (int)dr["NNADrogas"];
                    dto.NNAConsumoAlcohol = (int)dr["NNAConsumoAlcohol"];
                    dto.NNAConsumoAlcoholDrogas = (int)dr["NNAConsumoAlcoholDrogas"];
                    dto.EspacioResguardoMedicamentos = (int)dr["EspacioResguardoMedicamentos"];
                    dto.InventarioMedicamentos = (int)dr["InventarioMedicamentos"];
                    dto.ControlNinoSano = (int)dr["ControlNinoSano"];
                    dto.ControlAdolescenteSano = (int)dr["ControlAdolescenteSano"];
                    dto.RegistroMedicamentoNNA = (int)dr["RegistroMedicamentoNNA"];
                    dto.ProtocoloAdmMedicamentos = (int)dr["ProtocoloAdmMedicamentos"];
                    dto.ControlGinecologico = (int)dr["ControlGinecologico"];
                    dto.NegadaControlGinecologico = (int)dr["NegadaControlGinecologico"];
                    dto.AdolecentesEmbarazadas = (int)dr["AdolecentesEmbarazadas"];
                    dto.AdolecentesEmbarazadasControl = (int)dr["AdolecentesEmbarazadasControl"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionSaludMapper
    {
        public static List<ResultadoOperacionSaludDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionSaludDto> list = new List<ResultadoOperacionSaludDto>();
            ResultadoOperacionSaludDto dto = new ResultadoOperacionSaludDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionSaludDto();
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
