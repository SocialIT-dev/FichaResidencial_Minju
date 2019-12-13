using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
//using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class GetAntecedentesInfraestructuraMapper
    {
        public static List<GetAntecedentesInfraestructuraDto> ToDto(DataTable dt)
        {
            List<GetAntecedentesInfraestructuraDto> list = new List<GetAntecedentesInfraestructuraDto>();
            GetAntecedentesInfraestructuraDto dto = new GetAntecedentesInfraestructuraDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetAntecedentesInfraestructuraDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.CodFicha = (int)dr["CodFicha"];
                    dto.CodEstadoFicha = (int)dr["CodEstadoFicha"];
                    dto.CodProyecto = (int)dr["CodProyecto"];
                    dto.Periodo = (int)dr["Periodo"];
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
                    dto.CantidadBañosNNA = (int)dr["CantidadBañosNNA"];
                    dto.CantidadBañosNNANormativa = (int)dr["CantidadBañosNNANormativa"];
		            dto.CantidadBañosNNAHombres = (int)dr["CantidadBañosNNAHombres"];
		            dto.CantidadBañosNNAMujeres = (int)dr["CantidadBañosNNAMujeres"];
                    dto.CantidadBañosNNAFuncionamiento = (int)dr["CantidadBañosNNAFuncionamiento"];
                    dto.CantidadBañosNNAMixtos = (int)dr["CantidadBañosNNAMixtos"];
                    dto.CantidadDuchasNNA = (int)dr["CantidadDuchasNNA"];
                    dto.CantidadDuchasNNANormativa = (int)dr["CantidadDuchasNNANormativa"];
                    dto.CantidadDuchasNNAHombres = (int)dr["CantidadDuchasNNAHombres"];
                    dto.CantidadDuchasNNAMujeres = (int)dr["CantidadDuchasNNAMujeres"];
                    dto.CantidadDuchasNNAFuncionamiento = (int)dr["CantidadDuchasNNAFuncionamiento"];
                    dto.CantidadDuchasNNAMixtas = (int)dr["CantidadDuchasNNAMixtas"];
                    dto.AmbienteAcorde = (int)dr["AmbienteAcorde"];
                    dto.VestuarioAdecuado = (int)dr["VestuarioAdecuado"];
                    dto.VestuarioPersonalizadoNNA = (int)dr["VestuarioPersonalizadoNNA"];
                    dto.UtilesAseo = (int)dr["UtilesAseo"];
                    dto.AguaCaliente = (int)dr["AguaCaliente"];
                    dto.CalefonGas = (int)dr["CalefonGas"];
                    dto.SistemaCalefacion = (int)dr["SistemaCalefacion"];
                    dto.CalefonNormativa = (int)dr["CalefonNormativa"];
                    dto.LlaveGasNormativa = (int)dr["LlaveGasNormativa"];
                    dto.Ventilacion = (int)dr["Ventilacion"];
                    dto.AccesoDiscapacitados = (int)dr["AccesoDiscapacitados"];
                    dto.HabilitaDiscapacitados = (int)dr["HabilitaDiscapacitados"];
                    dto.FechaActualizacion = (DateTime)dr["FechaActualizacion"];
                    dto.IdUsuarioActualizacion = (int)dr["IdUsuarioActualizacion"];
                    dto.Observaciones = dr["Observaciones"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }

        public static List<GetParValoresDto> ToDtoParValores(DataTable dt)
        {
            List<GetParValoresDto> list = new List<GetParValoresDto>();
            GetParValoresDto dto = new GetParValoresDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetParValoresDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.IdValor = (int)dr["IdValor"];
                    dto.Descripcion = dr["Descripcion"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }

        public static List<GetParInfraestructuraDto> ToDtoParInfraestructura(DataTable dt)
        {
            List<GetParInfraestructuraDto> list = new List<GetParInfraestructuraDto>();
            GetParInfraestructuraDto dto = new GetParInfraestructuraDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new GetParInfraestructuraDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.IdParInfraestructura = (int)dr["IdParInfraestructura"];
                    dto.NombreParInfraestructura = dr["NombreParInfraestructura"].ToString();
                    dto.VariableCuantitativa = (bool)dr["VariableCuantitativa"];
                    dto.SegundaVarCuantitativa = dr["SegundaVarCuantitativa"] is DBNull ? false : (bool)dr["SegundaVarCuantitativa"];
                    dto.IndVigencia = dr["IndVigencia"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }

    public class ResultadoOperacionInfraestructuraMapper
    {
        public static List<ResultadoOperacionInfraestructuraDto> ToDto(DataTable dt)
        {
            List<ResultadoOperacionInfraestructuraDto> list = new List<ResultadoOperacionInfraestructuraDto>();
            ResultadoOperacionInfraestructuraDto dto = new ResultadoOperacionInfraestructuraDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new ResultadoOperacionInfraestructuraDto();
                dto.error = dr["error"].ToString();

                if (dto.error == "")
                {
                    dto.REGISTRO_ACTUALIZADO = dr["REGISTRO_ACTUALIZADO"].ToString();
                    dto.ERROR_PROCEDURE_ = dr["ERROR_PROCEDURE_"].ToString();
                    dto.ERROR_NUMBER_ = (int)dr["ERROR_NUMBER_"];
                    dto.ERROR_MESSAGE_ = dr["ERROR_MESSAGE_"].ToString();
                    dto.ERROR_LINE_ = (int)dr["ERROR_LINE_"];
                    dto.ETAPAS_PROCESADAS = dr["ETAPAS_PROCESADAS"].ToString();
                }
                list.Add(dto);
            }
            return list;
        }
    }
}
