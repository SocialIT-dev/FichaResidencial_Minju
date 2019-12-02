using System;
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
        
        /* SE COMENTA PORQUE NO ES LLAMADA  */
        //public List<Reporte01FichasPorPeriodoDto> Reporte01FichasPorPeriodo(int idUsuario)
        //{
        //    var result =  _reportesDao.Reporte01FichasPorPeriodo(idUsuario);
        //    return ReportesMapper.ToReporte01Dto(result);
        //}

        /// <summary>
        /// Método que lista reporte segun tipo de Reporte. Los filtros son opcionales
        /// Sprint 4 - 2019120 - gcastro
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="codInstitucion"></param>
        /// <param name="codProyecto"></param>
        /// <param name="codReporte"></param>
        /// <param name="periodo"></param>
        /// <returns>Lista</returns>
        public DataTable Reporte01FichasPorPeriodoDt(int idUsuario, int codInstitucion, int codProyecto, int codReporte, string periodo)
        {
            string nuevoPeriodo = "01/" + periodo;
              return _reportesDao.Reporte01PorSituacionFichaResidencial(idUsuario, codInstitucion, codProyecto, codReporte, nuevoPeriodo);
            //return _reportesDao.Reporte01PorSituacionFichaResidencial(idUsuario);

        }

        public DataTable Reporte01FichaResidencial(int idusuario, int codInstitucion, int codProyecto, int codReporte, string periodo)
        {
            string nuevoPeriodo = "01/" + periodo;
            return _reportesDao.Reporte01PorFichaResidencial(idusuario, codInstitucion, codProyecto, codReporte, periodo);
        }
    }
}
