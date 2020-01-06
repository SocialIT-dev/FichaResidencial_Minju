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
        public static List<GetAntecedentesEducacionDto> ToDto(DataTable dt)
        {
            List<GetAntecedentesEducacionDto> list = new List<GetAntecedentesEducacionDto>();
            GetAntecedentesEducacionDto dto = new GetAntecedentesEducacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesEducacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
                    dto.NNAEducacion = (int)dr["NNAEducacion"];
                    dto.NNAEducacionNo = (int)dr["NNAEducacionNo"];
                    dto.NNAEducacionNoMotivo = (int)dr["NNAEducacionNoMotivo"];
                    dto.NNARetrasoEscolar = (int)dr["NNARetrasoEscolar"];
                    dto.NNAMatriculaCancelada = (int)dr["NNAMatriculaCancelada"];
                    dto.NNAEducaionEspecial = (int)dr["NNAEducaionEspecial"];
                    dto.NNANivelacion = (int)dr["NNANivelacion"];
                    dto.NNAMatriculados = (int)dr["NNAMatriculados"];
                    dto.NNAExamenesLibres = (int)dr["NNAExamenesLibres"];
                    dto.EspaciosEstudios = (int)dr["EspaciosEstudios"];
                    dto.MaterialBibliografico = (int)dr["MaterialBibliografico"];
                    dto.Computadores = (int)dr["Computadores"];
                    dto.AccesoInternetControlado = (int)dr["AccesoInternetControlado"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }

        public static List<GetAntecedentesEducacionDto> ToDtoRegistroEducacional(DataTable dt)
        {
            List<GetAntecedentesEducacionDto> list = new List<GetAntecedentesEducacionDto>();
            GetAntecedentesEducacionDto dto = new GetAntecedentesEducacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesEducacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = 0;
                    dto.NNAEducacion = (int)dr["numeroAsistencia"];
                    dto.NNAEducacionNo = (int)dr["numeroNoAsistencia"];
                    dto.NNAEducacionNoMotivo = 0;
                    dto.NNARetrasoEscolar = (int)dr["rezagoEscolar"];
                    dto.NNAMatriculaCancelada = (int)dr["matriculaCancelada"];
                    dto.NNAEducaionEspecial = (int)dr["asisteEducacionDiferencial"];
                    dto.NNANivelacion = (int)dr["nivelacionEstudios"];
                    dto.NNAMatriculados = (int)dr["numeroMatriculados"];
                    dto.NNAExamenesLibres = (int)dr["inscritosExamenesLibres"];
                    dto.EspaciosEstudios = 0;
                    dto.MaterialBibliografico = 0;
                    dto.Computadores = 0;
                    dto.AccesoInternetControlado = 0;
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