using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class GetAntecedentesPoblacionDto
    {
        public int CodFicha { get; set; }
        public int CodEstadoFicha { get; set; }
        public int CodProyecto { get; set; }
        public int Periodo { get; set; }
        public int SubvencionSename  { get; set; }
		public int SexoAtiende  { get; set; }
		public int RangoEtareo  { get; set; }
		public int PoblacionVigente  { get; set; }
		public string TipoVulneracion  { get; set; }
		public int ProgramaApadrinamiento  { get; set; }
		public DateTime FechaActualizacion { get; set; }
		public int IdUsuarioActualizacion  { get; set; }
        public string error { get; set; }
    }

    public class ResultadoOperacionPoblacionDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    /// <summary>
    /// Entidad de la tabla parRangoEtareo
    /// Spring N° 3 - 20191111 - gcastro
    /// </summary>

    public class GetParRangoEtareoDto
    {
        public int IdRangoEtareo { get; set; }
        public string DescripcionRango { get; set; }
        public string TipoRangoEtareo { get; set; }
        public string IndVigencia { get; set; }
        public string error { get; set; }
    }
}
