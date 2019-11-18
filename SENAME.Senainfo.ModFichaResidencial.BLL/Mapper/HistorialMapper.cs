using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GETTiemposProcesoMapper
    {
        public static List<GETTiemposProcesoDto> ToDto(DataTable dt)
        {
            List<GETTiemposProcesoDto> list = new List<GETTiemposProcesoDto>();
            GETTiemposProcesoDto dto = new GETTiemposProcesoDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETTiemposProcesoDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.TiempoFinalizacion = (decimal)dr["TiempoFinalizacion"];
                    dto.TiempoConsumo = (decimal)dr["TiempoConsumo"];
                    dto.TiempoObservacion = (decimal)dr["TiempoObservacion"];
                    dto.TiempoInicioTramitacion = (decimal)dr["TiempoInicioTramitacion"];
                    dto.TiempoFinTramitacion = (decimal)dr["TiempoFinTramitacion"];
                    dto.TiempoConsumoRespuesta = (decimal)dr["TiempoConsumoRespuesta"];
                    dto.FechaInicioFicha = dr["FechaInicioFicha"].ToString();
                    dto.FechaFinFicha = dr["FechaFinFicha"].ToString();
                    dto.FechaConsumoFicha = dr["FechaConsumoFicha"].ToString();
                    dto.FechaCargaObs = dr["FechaCargaObs"].ToString();
                    dto.FechaIniciaTramite = dr["FechaIniciaTramite"].ToString();
                    dto.FechaFinTramite = dr["FechaFinTramite"].ToString();
                    dto.FechaConsumoResp = dr["FechaConsumoResp"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETTiemposXEtapaMapper
    {
        public static List<GETTiemposXEtapaDto> ToDto(DataTable dt)
        {
            List<GETTiemposXEtapaDto> list = new List<GETTiemposXEtapaDto>();
            GETTiemposXEtapaDto dto = new GETTiemposXEtapaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETTiemposXEtapaDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.CodInstitucion = (int)dr["CodInstitucion"];
                    dto.NombreProyecto = dr["NombreProyecto"].ToString();
                    dto.NombreInstitucion = dr["NombreInstitucion"].ToString();
                    dto.Tiempo = Convert.ToDecimal(dr["Tiempo"]);
                    dto.CantidadFichas = (int)dr["CantidadFichas"];
                
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETTiemposXProyectoMapper
    {
        public static List<GETTiemposXProyectoDto> ToDto(DataTable dt)
        {
            List<GETTiemposXProyectoDto> list = new List<GETTiemposXProyectoDto>();
            GETTiemposXProyectoDto dto = new GETTiemposXProyectoDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETTiemposXProyectoDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                   dto.CodFicha = (int)dr["CodFicha"]; 
	               dto.Corte_Tribunal = dr["Corte_Tribunal"].ToString(); 
	               dto.Juez = dr["Juez"].ToString();
                   dto.t0 = Convert.ToDecimal(dr["t0"]);
                   dto.t1 = Convert.ToDecimal(dr["t1"]);
                   dto.t2 = Convert.ToDecimal(dr["t2"]);
                   dto.t3A = Convert.ToDecimal(dr["t3A"]);
                   dto.t3B = Convert.ToDecimal(dr["t3B"]);
                   dto.t4 = Convert.ToDecimal(dr["t4"]);
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETCantidadesGeneralesMapper
    {
        public static List<GETCantidadesGeneralesDto> ToDto(DataTable dt)
        {
            List<GETCantidadesGeneralesDto> list = new List<GETCantidadesGeneralesDto>();
            GETCantidadesGeneralesDto dto = new GETCantidadesGeneralesDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETCantidadesGeneralesDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.Hombres = (int)dr["Hombres"];
                    dto.Mujeres = (int)dr["Mujeres"];
                    dto.Total = (int)dr["Total"];
                    dto.Mes = (int)dr["Mes"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETCantidadesPersonalMapper
    {
        public static List<GETCantidadesPersonalDto> ToDto(DataTable dt)
        {
            List<GETCantidadesPersonalDto> list = new List<GETCantidadesPersonalDto>();
            GETCantidadesPersonalDto dto = new GETCantidadesPersonalDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETCantidadesPersonalDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.Cantidad = (int)dr["Cantidad"];
                    dto.TotalHorasSem = (int)dr["TotalHorasSem"];
                    dto.Mes = (int)dr["Mes"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETCantidadesInfraestructuraMapper
    {
        public static List<GETCantidadesInfraestructuraDto> ToDto(DataTable dt)
        {
            List<GETCantidadesInfraestructuraDto> list = new List<GETCantidadesInfraestructuraDto>();
            GETCantidadesInfraestructuraDto dto = new GETCantidadesInfraestructuraDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETCantidadesInfraestructuraDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CantidadOficAdm = (int)dr["CantidadOficAdm"];
                    dto.CantidadSalaReunion = (int)dr["CantidadSalaReunion"];
                    dto.CantidadSalaRecepcion = (int)dr["CantidadSalaRecepcion"];
                    dto.CantidadEspaciosVisitas = (int)dr["CantidadEspaciosVisitas"];
                    dto.CantidadSalaTalleres = (int)dr["CantidadSalaTalleres"];
                    dto.CantidadSalaLiving = (int)dr["CantidadSalaLiving"];
                    dto.CantidadEnfermeria = (int)dr["CantidadEnfermeria"];
                    dto.CantidadRecreacion = (int)dr["CantidadRecreacion"];
                    dto.CantidadAreasVerdes = (int)dr["CantidadAreasVerdes"];
                    dto.CantidadCocina = (int)dr["CantidadCocina"];
                    dto.CantidadComedor = (int)dr["CantidadComedor"];
                    dto.CantidadLavanderia = (int)dr["CantidadLavanderia"];
                    dto.CantidadDormitoriosNNA = (int)dr["CantidadDormitoriosNNA"];
                    dto.CantidadCamasNNA = (int)dr["CantidadCamasNNA"];
                    dto.CantidadColsetLockers = (int)dr["CantidadColsetLockers"];
                    dto.CantidadBañosPublicos = (int)dr["CantidadBañosPublicos"];
                    dto.CantidadBañosNNAFuncionamiento = (int)dr["CantidadBañosNNAFuncionamiento"];
                    dto.CantidadBañosNNANormativa = (int)dr["CantidadBañosNNANormativa"];
                    dto.CantidadBañosNNAHombres = (int)dr["CantidadBañosNNAHombres"];
                    dto.CantidadBañosNNAMujeres = (int)dr["CantidadBañosNNAMujeres"];
                    dto.CantidadBañosNNAMixtos = (int)dr["CantidadBañosNNAMixtos"];
                    dto.CantidadDuchasNNAFuncionamiento = (int)dr["CantidadDuchasNNAFuncionamiento"];
                    dto.CantidadDuchasNNANormativa = (int)dr["CantidadDuchasNNANormativa"];
                    dto.CantidadDuchasNNAHombres = (int)dr["CantidadDuchasNNAHombres"];
                    dto.CantidadDuchasNNAMujeres = (int)dr["CantidadDuchasNNAMujeres"];
                    dto.CantidadDuchasNNAMixtas = (int)dr["CantidadDuchasNNAMixtas"];
                    dto.Mes = (int)dr["Mes"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETCantidadesSaludMapper
    {
        public static List<GETCantidadesSaludDto> ToDto(DataTable dt)
        {
            List<GETCantidadesSaludDto> list = new List<GETCantidadesSaludDto>();
            GETCantidadesSaludDto dto = new GETCantidadesSaludDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETCantidadesSaludDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.NNACesfam = (int)dr["NNACesfam"];
                    dto.NNASaludMentalDiagnostico = (int)dr["NNASaludMentalDiagnostico"];
                    dto.NNASaludMental = (int)dr["NNASaludMental"];
                    dto.NNACronicos = (int)dr["NNACronicos"];
                    dto.NNAEsperaTransplante = (int)dr["NNAEsperaTransplante"];
                    dto.NNATransplantados = (int)dr["NNATransplantados"];
                    dto.NNADiscapacitados = (int)dr["NNADiscapacitados"];
                    dto.NNAMedicamento = (int)dr["NNAMedicamento"];
                    dto.NNATratamiento = (int)dr["NNATratamiento"];
                    dto.NNADrogas = (int)dr["NNADrogas"];
                    dto.NNAConsumoAlcohol = (int)dr["NNAConsumoAlcohol"];
                    dto.NNAConsumoAlcoholDrogas = (int)dr["NNAConsumoAlcoholDrogas"];
                    dto.AdolecentesEmbarazadas = (int)dr["AdolecentesEmbarazadas"];
                    dto.Mes = (int)dr["Mes"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETCantidadesEducacionMapper
    {
        public static List<GETCantidadesEducacionDto> ToDto(DataTable dt)
        {
            List<GETCantidadesEducacionDto> list = new List<GETCantidadesEducacionDto>();
            GETCantidadesEducacionDto dto = new GETCantidadesEducacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETCantidadesEducacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.NNAMatriculados = (int)dr["NNAMatriculados"];
                    dto.NNAEducacion = (int)dr["NNAEducacion"];
                    dto.NNAEducacionNo = (int)dr["NNAEducacionNo"];
                    dto.NNARetrasoEscolar = (int)dr["NNARetrasoEscolar"];
                    dto.NNAMatriculaCancelada = (int)dr["NNAMatriculaCancelada"];
                    dto.NNAEducaionEspecial = (int)dr["NNAEducaionEspecial"];
                    dto.NNANivelacion = (int)dr["NNANivelacion"];
                    dto.NNAExamenesLibres = (int)dr["NNAExamenesLibres"];
                    dto.Mes = (int)dr["Mes"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETCantidadesAlimentacionMapper
    {
        public static List<GETCantidadesAlimentacionDto> ToDto(DataTable dt)
        {
            List<GETCantidadesAlimentacionDto> list = new List<GETCantidadesAlimentacionDto>();
            GETCantidadesAlimentacionDto dto = new GETCantidadesAlimentacionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETCantidadesAlimentacionDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CantidadComidas = (int)dr["CantidadComidas"];
                    dto.CantidadComidasFeriados = (int)dr["CantidadComidasFeriados"];
                    dto.Mes = (int)dr["Mes"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class GETProyectosConFichaMapper
    {
        public static List<GETProyectosConFichaDto> ToDto(DataTable dt)
        {
            List<GETProyectosConFichaDto> list = new List<GETProyectosConFichaDto>();
            GETProyectosConFichaDto dto = new GETProyectosConFichaDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GETProyectosConFichaDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.ProyectosFicha = (int)dr["ProyectosFicha"];
                    dto.TotalProyectos = (int)dr["TotalProyectos"];
                    dto.Mes = (int)dr["Mes"];
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ListaFichasIngresadasMapper
    {
        public static List<ListaFichasIngresadasDto> ToDto(DataTable dt)
        {
            List<ListaFichasIngresadasDto> list = new List<ListaFichasIngresadasDto>();
            ListaFichasIngresadasDto dto = new ListaFichasIngresadasDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ListaFichasIngresadasDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.NombreProyecto = dr["NombreProyecto"].ToString();
                    dto.NombreInstitucion = dr["NombreInstitucion"].ToString();
                    dto.Estado = dr["Estado"].ToString();
                    dto.usuarioregistro = dr["usuarioregistro"].ToString();
                    dto.FechaActualizacion = dr["FechaActualizacion"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ListaFichasIngresadasTotalMapper
    {
        public static List<ListaFichasIngresadasTotalDto> ToDto(DataTable dt)
        {
            List<ListaFichasIngresadasTotalDto> list = new List<ListaFichasIngresadasTotalDto>();
            ListaFichasIngresadasTotalDto dto = new ListaFichasIngresadasTotalDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ListaFichasIngresadasTotalDto();
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
}
