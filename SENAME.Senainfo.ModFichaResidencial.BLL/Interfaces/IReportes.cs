using System.Collections.Generic;
using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IReportes
    {
        DataTable Reporte01FichasPorPeriodoDt(int idUsuario);
        List<ListaReportesDto> ListarReportes();
        List<Reporte01FichasPorPeriodoDto> Reporte01FichasPorPeriodo(int idUsuario);
    }
}
