using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class ListaObservacionesMapper
    {
        public static List<ListaObservacionesDto> ToDto(DataTable dt)
        {
            List<ListaObservacionesDto> list = new List<ListaObservacionesDto>();
            ListaObservacionesDto dto = new ListaObservacionesDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ListaObservacionesDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.IdInforme = (int)dr["IdInforme"];
                    dto.NombreJuez = dr["NombreJuez"].ToString();
                    dto.NombreConsejero = dr["NombreConsejero"].ToString();
                    dto.CorteTribunal = dr["CorteTribunal"].ToString();
                    dto.PersonaResidencia1 = dr["PersonaResidencia1"].ToString();
                    dto.PersonaResidencia2 = dr["PersonaResidencia2"].ToString();
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodFichaPadre = (int)dr["CodFichaPadre"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.NombreProyecto = dr["NombreProyecto"].ToString();
                    dto.NombreInstitucion = dr["NombreInstitucion"].ToString();
                    dto.Estado = dr["Estado"].ToString();
                    dto.DiasEnTramite = (int)dr["DiasEnTramite"];
                    dto.FechaVisitaAnterior = dr["FechaVisitaAnterior"].ToString();
                    dto.FechaVisitaActual = dr["FechaVisitaActual"].ToString();
                    dto.HoraInicioVisita = dr["HoraInicioVisita"].ToString();
                    dto.HoraFinVisita = dr["HoraFinVisita"].ToString();
                    dto.FechaActualizacionPJUD = dr["FechaActualizacionPJUD"].ToString();
                    dto.FechaCeradaResidencia = dr["FechaCeradaResidencia"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ListaObservacionesTotalMapper
    {
        public static List<ListaObservacionesTotalDto> ToDto(DataTable dt)
        {
            List<ListaObservacionesTotalDto> list = new List<ListaObservacionesTotalDto>();
            ListaObservacionesTotalDto dto = new ListaObservacionesTotalDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ListaObservacionesTotalDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.TotalRegistros = (int)dr["total_reg"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesAlimentacionMapper
    {
        public static List<ObservacionesAlimentacionDto> ToDto(DataTable dt)
        {
            List<ObservacionesAlimentacionDto> list = new List<ObservacionesAlimentacionDto>();
            ObservacionesAlimentacionDto dto = new ObservacionesAlimentacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesAlimentacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesEducacionMapper
    {
        public static List<ObservacionesEducacionDto> ToDto(DataTable dt)
        {
            List<ObservacionesEducacionDto> list = new List<ObservacionesEducacionDto>();
            ObservacionesEducacionDto dto = new ObservacionesEducacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesEducacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.EvaluacionEspaciosEstudios = (int)dr["EvaluacionEspaciosEstudios"];
                    dto.EvaluacionMaterialBibliografico = (int)dr["EvaluacionMaterialBibliografico"];
                    dto.EvaluacionComputadores = (int)dr["EvaluacionComputadores"];
                    dto.EvaluacionAccesoInternet = (int)dr["EvaluacionAccesoInternet"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesGeneralesMapper
    {
        public static List<ObservacionesGeneralesDto> ToDto(DataTable dt)
        {
            List<ObservacionesGeneralesDto> list = new List<ObservacionesGeneralesDto>();
            ObservacionesGeneralesDto dto = new ObservacionesGeneralesDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesGeneralesDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesPoblacionMapper
    {
        public static List<ObservacionesPoblacionDto> ToDto(DataTable dt)
        {
            List<ObservacionesPoblacionDto> list = new List<ObservacionesPoblacionDto>();
            ObservacionesPoblacionDto dto = new ObservacionesPoblacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesPoblacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesSaludMapper
    {
        public static List<ObservacionesSaludDto> ToDto(DataTable dt)
        {
            List<ObservacionesSaludDto> list = new List<ObservacionesSaludDto>();
            ObservacionesSaludDto dto = new ObservacionesSaludDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesSaludDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesSeguridadMapper
    {
        public static List<ObservacionesSeguridadDto> ToDto(DataTable dt)
        {
            List<ObservacionesSeguridadDto> list = new List<ObservacionesSeguridadDto>();
            ObservacionesSeguridadDto dto = new ObservacionesSeguridadDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesSeguridadDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesPersonalMapper
    {
        public static List<ObservacionesPersonalDto> ToDto(DataTable dt)
        {
            List<ObservacionesPersonalDto> list = new List<ObservacionesPersonalDto>();
            ObservacionesPersonalDto dto = new ObservacionesPersonalDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesPersonalDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesFichaMapper
    {
        public static List<ObservacionesFichaDto> ToDto(DataTable dt)
        {
            List<ObservacionesFichaDto> list = new List<ObservacionesFichaDto>();
            ObservacionesFichaDto dto = new ObservacionesFichaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesFichaDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.EstadoRespuesta = dr["EstadoRespuesta"].ToString();
                    dto.ObservacionesGeneralesJuez = dr["ObservacionesGeneralesJuez"].ToString();
                    dto.SugerenciasSenameJuez = dr["SugerenciasSenameJuez"].ToString();
                    dto.SugerenciasResidenciaJuez = dr["SugerenciasResidenciaJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesGestionResidenciaMapper
    {
        public static List<ObservacionesGestionResidenciaDto> ToDto(DataTable dt)
        {
            List<ObservacionesGestionResidenciaDto> list = new List<ObservacionesGestionResidenciaDto>();
            ObservacionesGestionResidenciaDto dto = new ObservacionesGestionResidenciaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesGestionResidenciaDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.JuezEntrevistaNNA = (int)dr["JuezEntrevistaNNA"];
                    dto.EntrevistaReservadaNNA = (int)dr["EntrevistaReservadaNNA"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                    dto.ObservacionGestion = dr["ObservacionGestion"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ObservacionesMaterialesMapper
    {
        public static List<ObservacionesMaterialesDto> ToDto(DataTable dt)
        {
            List<ObservacionesMaterialesDto> list = new List<ObservacionesMaterialesDto>();
            ObservacionesMaterialesDto dto = new ObservacionesMaterialesDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ObservacionesMaterialesDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.EvaluacionOficAdm = (int)dr["EvaluacionOficAdm"];
                    dto.EvaluacionSalaReunion = (int)dr["EvaluacionSalaReunion"];
                    dto.EvaluacionSalaRecepcion = (int)dr["EvaluacionSalaRecepcion"];
                    dto.EvaluacionEspaciosVisitas = (int)dr["EvaluacionEspaciosVisitas"];
                    dto.EvaluacionSalaTalleres = (int)dr["EvaluacionSalaTalleres"];
                    dto.EvaluacionSalaLiving = (int)dr["EvaluacionSalaLiving"];
                    dto.EvaluacionEnfermeria = (int)dr["EvaluacionEnfermeria"];
                    dto.EvaluacionRecreacion = (int)dr["EvaluacionRecreacion"];
                    dto.EvaluacionAreasVerdes = (int)dr["EvaluacionAreasVerdes"];
                    dto.EvaluacionCocina = (int)dr["EvaluacionCocina"];
                    dto.EvaluacionComedor = (int)dr["EvaluacionComedor"];
                    dto.EvaluacionLavanderia = (int)dr["EvaluacionLavanderia"];
                    dto.EvaluacionDormitorios = (int)dr["EvaluacionDormitorios"];
                    dto.EvaluacionCamasNNA = (int)dr["EvaluacionCamasNNA"];
                    dto.EvaluacionClosetLockers = (int)dr["EvaluacionClosetLockers"];
                    dto.EvaluacionBañosPublicos = (int)dr["EvaluacionBañosPublicos"];
                    dto.EvaluacionBañosNNA = (int)dr["EvaluacionBañosNNA"];
                    dto.EvaluacionDuchasNNA = (int)dr["EvaluacionDuchasNNA"];
                    dto.EvaluacionAmbienteAcorde = (int)dr["EvaluacionAmbienteAcorde"];
                    dto.EvaluacionVestuarioAdecuado = (int)dr["EvaluacionVestuarioAdecuado"];
                    dto.EvaluacionUtilesAseo = (int)dr["EvaluacionUtilesAseo"];
                    dto.EvaluacionAguaCaliente = (int)dr["EvaluacionAguaCaliente"];
                    dto.EvaluacionCalefonGas = (int)dr["EvaluacionCalefonGas"];
                    dto.EvaluacionSistemaCalefacion = (int)dr["EvaluacionSistemaCalefacion"];
                    dto.EvaluacionVentilacion = (int)dr["EvaluacionVentilacion"];
                    dto.EvaluacionAccesoDiscapacitados = (int)dr["EvaluacionAccesoDiscapacitados"];
                    dto.EvaluacionHabilitaDiscapacitados = (int)dr["EvaluacionHabilitaDiscapacitados"];
                    dto.ObservacionJuez = dr["ObservacionJuez"].ToString();
                    dto.RespuestaSename = dr["RespuestaSename"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class NNAEntrevistadosMapper
    {
        public static List<NNAEntrevistadosDto> ToDto(DataTable dt)
        {
            List<NNAEntrevistadosDto> list = new List<NNAEntrevistadosDto>();
            NNAEntrevistadosDto dto = new NNAEntrevistadosDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new NNAEntrevistadosDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.Rut = dr["Rut"].ToString();
                    dto.Nombres = dr["Nombres"].ToString();
                    dto.ApellidoPaterno = dr["ApellidoPaterno"].ToString();
                    dto.ApellidoMaterno = dr["ApellidoMaterno"].ToString();
                    dto.Rit = dr["Rit"].ToString();
                    dto.CodTribunal = (int)dr["CodTribunal"];
                    dto.NombreTribunal = dr["NombreTribunal"].ToString();
                    dto.CodNino = (int)dr["CodNino"];
                    dto.Sexo = dr["Sexo"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }
}
