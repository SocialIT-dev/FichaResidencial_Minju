using System.Collections.Generic;
using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IReportes
    {
        DataTable Reporte01FichasPorPeriodoDt(int idUsuario, int codInstitucion, int codProyecto, int codReporte, string periodo);
        DataTable Reporte01FichaResidencial(int idusuario, int codInstitucion, int codProyecto, int codReporte, string periodo);
        List<ListaReportesDto> ListarReportes();
      // List<Reporte01FichasPorPeriodoDto> Reporte01FichasPorPeriodo(int idUsuario);

    }
}
