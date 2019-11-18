using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class ListaReportesDto
    {
        public int CodReporte { get; set; }
        public string Descripcion { get; set; }
        public string RequiereCodProyecto { get; set; }
        public string error { get; set; }
    }

    public class Reporte01FichasPorPeriodoDto
    {
        public int CodProyecto { get; set; }
        public int CodInstitucion { get; set; }
        public string Proyecto { get; set; }
        public string Institucion { get; set; }
        public string TipoProyecto { get; set; }
        public string PoseeFichaCompletaEnPeriodo { get; set; }
        public string PoseeFichaParcialEnPeriodo { get; set; }
        public string FechaUltimaFichaActualizada { get; set; }
        public int TotalFichas { get; set; }

        public string error { get; set; }
    }

}
