using System.Collections.Generic;
using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces;
using SENAME.Senainfo.ModFichaResidencial.BLL.Mapper;
using SENAME.Senainfo.ModFichaResidencial.DAL.DAO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Impl
{
    public class ReportesImpl : IReportes
    {
        private readonly ReportesDao _reportesDao;

        public ReportesImpl()
        {
            _reportesDao = new ReportesDao();
        }

        public List<ListaReportesDto> ListarReportes()
        {
            var result = _reportesDao.ListarReportes();
            return ReportesMapper.ToListarReportesDto(result);
        }
        
        public List<Reporte01FichasPorPeriodoDto> Reporte01FichasPorPeriodo(int idUsuario)
        {
            var result =  _reportesDao.Reporte01FichasPorPeriodo(idUsuario);
            return ReportesMapper.ToReporte01Dto(result);
        }

        public DataTable Reporte01FichasPorPeriodoDt(int idUsuario)
        {
            return _reportesDao.Reporte01FichasPorPeriodo(idUsuario); 
        }
    }
}
