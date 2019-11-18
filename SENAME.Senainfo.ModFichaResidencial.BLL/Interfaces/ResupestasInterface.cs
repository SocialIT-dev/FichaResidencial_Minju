using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface ISetRespuestaObservaciones
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.SetRespuestaObservacionesDto> GrabarRespuestasObservaciones(
            int? CodEstado,
            int? IdUsuarioActualizacion,
            int? CodFicha,
            int? IdTipoRespuesta,
            int? CodEstadoDetalle,
            string Respuesta,
            int? IdRespuesta,
            string NombreArchivos,
            string FolderAdjuntos,
            string CodArchivos);
    }

    public interface IGetRespuestaSename
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetRespuestaSenameDto> ObtenerRespuestaSename(int? CodFicha);

    }

    public interface ISetRespuestaFicha
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.SetRespuestaFichaDto> GrabarRespuestasFicha(
            int? IdUsuarioActualizacion,
            int? CodFicha,
            string Respuesta);
    }

    public interface ISetVisadoFicha
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.SetVisadoFichaDto> GrabarVisadoFicha(
            int? IdRespuesta,
            int? IdDetalle,
            int? IdUsuarioActualizacion,
            int? IdTipoRespuesta);
    }

    public interface IGetCodArchivo
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.GetCodArchivoDto> ObtenerCodArchivo(string NombreArchivo);

    }

    public interface IBorrarArchivo
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.BorrarArchivoDto> BorrarArchivo(long CodArchivo);

    }

    public interface ISetInicioTramitacion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.SetInicioTramitacionDto> GrabarInicioTramitacionFicha(
            int? IdUsuarioActualizacion,
            int? CodFicha,
            string Respuesta);
    }
}
