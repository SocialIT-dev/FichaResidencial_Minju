using System;
using System.Collections.Generic;
using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class ReportesMapper
    {
        public static List<ListaReportesDto> ToListarReportesDto(DataTable dt)
        {
            var list = new List<ListaReportesDto>();

            foreach (DataRow dr in dt.Rows)
            {
                var dto = new ListaReportesDto { error = dr["error"].ToString() };

                if (dto.error == "")
                {
                    dto.CodReporte = Convert.ToInt32(dr["CodReporte"]);
                    dto.Descripcion = dr["Descripcion"].ToString();
                    dto.RequiereCodProyecto = dr["RequiereCodProyecto"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }

        public static List<Reporte01FichasPorPeriodoDto> ToReporte01Dto(DataTable dt)
        {
            var list = new List<Reporte01FichasPorPeriodoDto>();

            foreach (DataRow dr in dt.Rows)
            {
                var dto = new Reporte01FichasPorPeriodoDto {error = dr["error"].ToString()};

                if (dto.error == "")
                {
                    dto.CodProyecto = Convert.ToInt32(dr["CodProyecto"]);
                    dto.CodInstitucion = Convert.ToInt32(dr["CodInstitucion"]);
                    dto.TipoProyecto = dr["TipoProyecto"].ToString();
                    dto.Institucion = dr["Institucion"].ToString();
                    dto.Proyecto = dr["Proyecto"].ToString();
                    dto.PoseeFichaCompletaEnPeriodo = dr["PoseeFichaCompletaEnPeriodo"].ToString();
                    dto.PoseeFichaParcialEnPeriodo = dr["PoseeFichaParcialEnPeriodo"].ToString();
                    dto.FechaUltimaFichaActualizada = dr["FechaUltimaFichaActualizada"].ToString();
                    dto.TotalFichas = Convert.ToInt32(dr["TotalFichas"]);
                }
                list.Add(dto);
            }
            return list;
        }
    }
}
