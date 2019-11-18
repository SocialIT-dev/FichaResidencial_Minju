using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.DTO
{
    public class SetRespuestaObservacionesDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ID_DETALLE { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class GetRespuestaSenameDto
    {
        public int IdDetalle { get; set; }
        public int IdRespuesta { get; set; }
        public string Respuesta { get; set; }
        public string Fecha { get; set; }
        public string Hora { get; set; }
        public string PersonaCreacion { get; set; }
        public int IdTipoRespuesta { get; set; }
        public string EstadoDetalle { get; set; }
        public string Estado { get; set; }
        public string NombreArchivo { get; set; }
        public string Extension { get; set; }
        public string FolderAdjuntos { get; set; }
        public string error { get; set; }
    }

    public class SetRespuestaFichaDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class SetVisadoFichaDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }

    public class GetCodArchivoDto
    {
        public long CodArchivo { get; set; }
        public string error { get; set; }
    }

    public class BorrarArchivoDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }
    public class SetInicioTramitacionDto
    {
        public string REGISTRO_ACTUALIZADO { get; set; }
        public string ERROR_PROCEDURE_ { get; set; }
        public int ERROR_NUMBER_ { get; set; }
        public string ERROR_MESSAGE_ { get; set; }
        public int ERROR_LINE_ { get; set; }
        public string ETAPAS_PROCESADAS { get; set; }
        public string error { get; set; }
    }
}
