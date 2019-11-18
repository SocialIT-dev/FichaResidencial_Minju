var tbl_c_antecedentesPoblacion = '<table class="table" id="tbl_c_antecedentesPoblacion">'+
'<tr>'+
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Población</span></td>'+
'<td colspan="3" class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td colspan="3" class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>'+
'<tr>'+
'<td class="etiqCampo2-2">MASCULINO</td>'+
'<td class="etiqCampo2-2">FEMENINO</td>'+
'<td class="etiqCampo2-2">TOTAL</td>'+
'<td class="etiqCampo2-2">MASCULINO</td>'+
'<td class="etiqCampo2-2">FEMENINO</td>'+
'<td class="etiqCampo2-2">TOTAL</td>'+
'</tr><FILAS></table>';
var tbl_c_antecedentesAdopcionNNA = '<table class="table" id="tbl_c_antecedentesAdopcionNNA">' +
'<tr>'+
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Adopción de NNA</span></td>'+
'<td colspan="3" class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td colspan="3" class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>'+
'<tr>'+                 
'<td class="etiqCampo2-2">MASCULINO</td>'+
'<td class="etiqCampo2-2">FEMENINO</td>'+
'<td class="etiqCampo2-2">TOTAL</td>'+
'<td class="etiqCampo2-2">MASCULINO</td>'+
'<td class="etiqCampo2-2">FEMENINO</td>'+
'<td class="etiqCampo2-2">TOTAL</td>' +
'</tr><FILAS></table>';
var tbl_c_antecedentesPoblacionCapacidad = '<table class="table" id="tbl_c_antecedentesPoblacionCapacidad">' +
'<tr>' +
'<td class="etiqCampo2-4-i-t"><span class="titsec2-2">Población y Capacidad</span></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<FILAS></table>';
var tbl_c_antecedentesDotacionPersonal = '<table class="table" id="tbl_c_antecedentesDotacion">' +
'<tr>' +
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Dotación de Personal</span></td>' +
'<td colspan="4" class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td colspan="4" class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<tr>' +
'<td class="etiqCampo2-2-dotacion">EXISTE</td>' +
'<td class="etiqCampo2-2-dotacion">CANTIDAD</td>' +
'<td class="etiqCampo2-2-dotacion">TIPO JORNADA</td>' +
'<td class="etiqCampo2-2-dotacion">HORAS SEMANALES</td>' +
'<td class="etiqCampo2-2-dotacion">EXISTE</td>' +
'<td class="etiqCampo2-2-dotacion">CANTIDAD</td>' +
'<td class="etiqCampo2-2-dotacion">TIPO JORNADA</td>' +
'<td class="etiqCampo2-2-dotacion">HORAS SEMANALES</td>' +
'</tr><FILAS></table>';
var tbl_c_antecedentesInfraestructura = '<table class="table" id="tbl_c_antecedentesInfraestructura">' +
'<tr>' +
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Recursos Materiales, Infraestructura</span></td>' +
'<td colspan="2" class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td colspan="2" class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<tr>' +
'<td class="etiqCampo2-2">EXISTE</td>' +
'<td class="etiqCampo2-2">CANTIDAD</td>' +
'<td class="etiqCampo2-2">EXISTE</td>' +
'<td class="etiqCampo2-2">CANTIDAD</td>' +
'</tr><FILAS></table>';
var tbl_c_antecedentesSeguridad = '<table class="table" id="tbl_c_antecedentesSeguridad">' +
'<tr>' +
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Seguridad</span></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<tr>' +
'<td class="etiqCampo2-2">EXISTE</td>' +
'<td class="etiqCampo2-2">EXISTE</td>' +
'</tr><FILAS></table>';
var tbl_c_antecedentesSalud = '<table class="table" id="tbl_c_antecedentesSalud">' +
'<tr>' +
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Salud</span></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<tr>' +
'<td class="etiqCampo2-2">CANTIDAD o EXISTE</td>' +
'<td class="etiqCampo2-2">CANTIDAD o EXISTE</td>' +
'</tr><FILAS></table>';
var tbl_c_antecedentesEducacion = '<table class="table" id="tbl_c_antecedentesEducacion">' +
'<tr>' +
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Educación</span></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<tr>' +
'<td class="etiqCampo2-2">CANTIDAD o EXISTE</td>' +
'<td class="etiqCampo2-2">CANTIDAD o EXISTE</td>' +
'</tr><FILAS></table>';
var tbl_c_antecedentesAlimentacion = '<table class="table" id="tbl_c_antecedentesAlimentacion">' +
'<tr>' +
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Alimentación</span></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<tr>' +
'<td class="etiqCampo2-2">CANTIDAD o EXISTE</td>' +
'<td class="etiqCampo2-2">CANTIDAD o EXISTE</td>' +
'</tr><FILAS></table>';
var tbl_c_antecedentesGestionResidencia = '<table class="table" id="tbl_c_antecedentesGestionResidencia">' +
'<tr>' +
'<td rowspan="2" class="etiqCampo2-4-i-t"><span class="titsec2-2">Gestión Residencia</span></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">RESIDENCIA <NUMFOLIOFICHAPADRE></td>' +
'<td class="etiqCampo2-2" style="white-space:nowrap;">PJUD <NUMFOLIOFICHAPJUD></td>' +
'</tr>' +
'<tr>' +
'<td class="etiqCampo2-2">EXISTE</td>' +
'<td class="etiqCampo2-2">EXISTE</td>' +
'</tr><FILAS></table>';
var comunFilas =
'<td class="etiqCampo2-4"><input id="<_c1>" type="text" value="<_c1_dato>" class="form-control textCampo3-2"  maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4"><input id="<_c2>" type="text" value="<_c2_dato>" class="form-control textCampo3-2" maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4"><input id="<_c3>" type="text" value="<_c3_dato>" class="form-control textCampo3-2" readonly="true"/></td>' +
'<td class="etiqCampo2-4-pjud"><input id="<_c1_pjud>" value="<_c1_dato_pjud>" type="text" class="form-control textCampo3-2"  maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-pjud"><input id="<_c2_pjud>" value="<_c2_dato_pjud>" type="text" class="form-control textCampo3-2" maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-d-pjud"><input id="<_c3_pjud>" value="<_c3_dato_pjud>" type="text" class="form-control textCampo3-2" readonly="true"/></td>';
var comunFilasListadoNNA =
'<td class="etiqCampo2-4" colspan="3"><textarea id="" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;font-size:10px;overflow: auto;" readonly="true"><_c4_dato></textarea></td>' +
'<td class="etiqCampo2-4-d-pjud" colspan="3"><textarea id="" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;font-size:10px;overflow: auto;" readonly="true"><_c4_dato_pjud></textarea></td>';
var comunFilas2 = 
'<td class="etiqCampo2-4"><input type="text" value="<_c1_dato>" class="form-control textCampo3-2" style="width:200px;" maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-d"><input type="text" value="<_c2_dato>" class="form-control textCampo3-2" style="width:200px;" maxlength="3" readonly="true"/></td>';
var comunFilas3 =
'<td class="etiqCampo2-4"><input type="text" value="<_c1_dato>" class="form-control textCampo3-2-dot"  maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4"><input type="text" value="<_c2_dato>" class="form-control textCampo3-2-dot" maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4"><input type="text" value="<_c3_dato>" class="form-control textCampo3-2-dot-2" readonly="true"/></td>' +
'<td class="etiqCampo2-4"><input type="text" value="<_c4_dato>" class="form-control textCampo3-2-dot"  maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-pjud"><input value="<_c1_dato_pjud>" type="text" class="form-control textCampo3-2-dot" maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-pjud"><input value="<_c2_dato_pjud>" type="text" class="form-control textCampo3-2-dot" readonly="true"/></td>' +
'<td class="etiqCampo2-4-pjud"><input value="<_c3_dato_pjud>" type="text" class="form-control textCampo3-2-dot-2" maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-d-pjud"><input value="<_c4_dato_pjud>" type="text" class="form-control textCampo3-2-dot" readonly="true"/></td>';
var comunFilas4_1 =
'<td class="etiqCampo2-4"><input type="text" value="<_c1_dato>" class="form-control textCampo3-2"  maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4"><input type="text" value="<_c2_dato>" class="form-control textCampo3-2" maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-pjud"><input type="text" value="<_c1_dato_pjud>" class="form-control textCampo3-2" readonly="true"/></td>' +
'<td class="etiqCampo2-4-d-pjud"><input type="text" value="<_c2_dato_pjud>" class="form-control textCampo3-2"  maxlength="3" readonly="true"/></td>';
var comunFilas4_2 =
'<td class="etiqCampo2-4"><input type="text" value="<_c1_dato>" class="form-control textCampo3-2"  maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4"></td>' +
'<td class="etiqCampo2-4-pjud"><input type="text" value="<_c1_dato_pjud>" class="form-control textCampo3-2" readonly="true"/></td>' +
'<td class="etiqCampo2-4-d-pjud"></td>';
var comunFilas5 =
'<td class="etiqCampo2-4"><input type="text" value="<_c1_dato>" class="form-control textCampo3-2"  maxlength="3" readonly="true"/></td>' +
'<td class="etiqCampo2-4-d-pjud"><input type="text" value="<_c1_dato_pjud>" class="form-control textCampo3-2" readonly="true"/></td>';

var fila_TR_datos_generales_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_poblacion_capacidad_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_dotacion_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_infraestrucruta_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_seguridad_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_salud_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_educacion_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_alimentacion_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';
var fila_TR_gestionresidencia_ = '<tr><td class="etiqCampo3-2"><nombre_dato></td><COMUNFILAS></tr>';

function RenderTBL_AntecedentesPoblacion(val1, val2, val3, val4, val5, val6, val7, val8, opc) {
    var salida = "";

    switch (opc) {
        //CAMPOS ANTECEDENTES GENERALES
        case "poblacionvigente":
            var poblacionvigente = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Población Vigente" });
            salida = poblacionvigente.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "plazasconvenidas":
            var plazasconvenidas = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Plazas Convenidas con SENAME (En caso de tener subvención)" });
            salida = plazasconvenidas.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "otrasplazas":
            var otrasplazas = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Otras Plazas no subvencionadas por Sename" });
            salida = otrasplazas.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;

        case "nnaPresentes":
            var nnaPresentes = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total NNA Presentes" });
            salida = nnaPresentes.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "nnaAcercamiento":
            var nnaAcercamiento = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total NNA en Acercamiento Familar" });
            salida = nnaAcercamiento.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "residentesMayoresEdad":
            var residentesMayoresEdad = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total de Residentes Mayores de Edad" });
            salida = residentesMayoresEdad.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "abandonoSistema":
            var abandonoSistema = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Abandono de Sistema" });
            salida = abandonoSistema.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "hospitalizados":
            var hospitalizados = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Hospitalizados" });
            salida = hospitalizados.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "nnaIngresoArt80":
            var nnaIngresoArt80 = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total NNA ingresados con Artículo 80 Bis" });
            salida = nnaIngresoArt80.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "nnaCompletoAbandono":
            var nnaCompletoAbandono = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total NNA en completo abandono decretado por el o la Juez(a) (especificar)" });
            salida = nnaCompletoAbandono.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;

        case "nnaSusceptibleAdopcion":
            var nnaSusceptibleAdopcion = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total de NNA declarados susceptibles de ser adoptados (con sentencia)" });
            salida = nnaSusceptibleAdopcion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "nnaEnlaceAdopcion":
            var nnaEnlaceAdopcion = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total de NNA con enlace de adopción (considerar sólo población de NNA declarados susceptible de ser adoptados)" });
            salida = nnaEnlaceAdopcion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "nnaCausaIniciadaXAdopcion":
            var nnaCausaIniciadaXAdopcion = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total de NNA con causa iniciada por susceptibilidad de adopción (sin sentencia)" });
            salida = nnaCausaIniciadaXAdopcion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "adolescenteHijosRecienNacido":
            var adolescenteHijosRecienNacido = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilas, "<nombre_dato>": "Total de adolescentes con hijos recién nacidos o lactantes (especificar)" });
            salida = adolescenteHijosRecienNacido.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6 });
            break;
        case "listado_NNAabandono":
            val1 = GeneraListaNNA(val1);
            val2 = GeneraListaNNA(val2);
            var listado_NNAabandono = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilasListadoNNA, "<nombre_dato>": "Detalle de NNA en Completo Abandono" });
            salida = listado_NNAabandono.mapReplace({ "<_c4_dato>": val1, "<_c4_dato_pjud>": val2});
            break;
        case "listado_NNAadolescentehijos":
            val1 = GeneraListaNNA(val1);
            val2 = GeneraListaNNA(val2);
            var listado_NNAlistado_adolescentehijos = fila_TR_datos_generales_.mapReplace({ "<COMUNFILAS>": comunFilasListadoNNA, "<nombre_dato>": "Detalle de NNA Adolescentes con Hijos" });
            salida = listado_NNAlistado_adolescentehijos.mapReplace({ "<_c4_dato>": val1, "<_c4_dato_pjud>": val2 });
            break;
        //POBLACION Y CAPACIDAD
        case "reside_conSubven":
            var residen_conSuvencion = fila_TR_poblacion_capacidad_.mapReplace({ "<COMUNFILAS>": comunFilas2, "<nombre_dato>": "Residencia con Subvención SENAME" });
            salida = residen_conSuvencion.mapReplace({ "<_c1_dato>": val1, "<_c2_dato>": val2 });
            break;
        case "reside_conSubven_poblacion_sexo":
            var sexo_atiende_residencia = fila_TR_poblacion_capacidad_.mapReplace({ "<COMUNFILAS>": comunFilas2, "<nombre_dato>": "Sexo que atiende la Residencia" });
            salida = sexo_atiende_residencia.mapReplace({ "<_c1_dato>": val1, "<_c2_dato>": val2 });
            break;
        case "reside_conSubven_poblacion_rangoetareo":
            var rango_etareo_atencion = fila_TR_poblacion_capacidad_.mapReplace({ "<COMUNFILAS>": comunFilas2, "<nombre_dato>": "Rango etáreo de Atención" });
            salida = rango_etareo_atencion.mapReplace({ "<_c1_dato>": val1, "<_c2_dato>": val2 });
            break;
        case "reside_conSubven_poblacion_rangoetareo_predominante":
            var poblacion_rangoetareo_predominante = fila_TR_poblacion_capacidad_.mapReplace({ "<COMUNFILAS>": comunFilas2, "<nombre_dato>": "Rango etáreo Predominante" });
            salida = poblacion_rangoetareo_predominante.mapReplace({ "<_c1_dato>": val1, "<_c2_dato>": val2 });
            break;
        case "tipo_vulneracion_mas_frecuente":
            var tipo_vulneracion_mas_frecuente = fila_TR_poblacion_capacidad_.mapReplace({ "<COMUNFILAS>": comunFilas2, "<nombre_dato>": "Tipo de Vulneración más Frecuente" });
            salida = tipo_vulneracion_mas_frecuente.mapReplace({ "<_c1_dato>": val1, "<_c2_dato>": val2 });
            break;
        case "programa_apadrinimiento":
            var programa_apadrinamiento = fila_TR_poblacion_capacidad_.mapReplace({ "<COMUNFILAS>": comunFilas2, "<nombre_dato>": "Programa de Apadrinamiento" });
            salida = programa_apadrinamiento.mapReplace({ "<_c1_dato>": val1, "<_c2_dato>": val2 });
            break;
        //DOTACION PERSONAL
        case "dotacion_director":
            var dotacion_director = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Director(a)" });
            salida = dotacion_director.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_asistente":
            var dotacion_asistente = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Asistente Social" });
            salida = dotacion_asistente.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_psicologo":
            var dotacion_psicologo = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Psicólogo" });
            salida = dotacion_psicologo.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_enfermero":
            var dotacion_enfermero = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Enfermero(a)" });
            salida = dotacion_enfermero.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_auxenfermeria":
            var dotacion_auxenfermeria = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Auxiliar de Enfermería" });
            salida = dotacion_auxenfermeria.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_medico":
            var dotacion_medico = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Médico" });
            salida = dotacion_medico.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_psiquiatra":
            var dotacion_psiquiatra = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Psiquiatra" });
            salida = dotacion_psiquiatra.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_terapeutaOcupacional":
            var dotacion_terapeutaOcupacional = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Terapeuta Ocupacional" });
            salida = dotacion_terapeutaOcupacional.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_Kinesiologo":
            var dotacion_Kinesiologo = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Kinesiólogo" });
            salida = dotacion_Kinesiologo.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_Nutricionista":
            var dotacion_Nutricionista = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Nutricionista" });
            salida = dotacion_Nutricionista.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_Fonoaudiologo":
            var dotacion_Fonoaudiologo = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Fonoaudiólogo" });
            salida = dotacion_Fonoaudiologo.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_ProfesorEducacionFisica":
            var dotacion_ProfesorEducacionFisica = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Profesor(a) de Educación Física" });
            salida = dotacion_ProfesorEducacionFisica.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_Psicopedagogo":
            var dotacion_Psicopedagogo = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Psicopedagogo(a)" });
            salida = dotacion_Psicopedagogo.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_EducadoraParvulos":
            var dotacion_EducadoraParvulos = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Educador(a) de Párvulos" });
            salida = dotacion_EducadoraParvulos.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_EducadorTratoDirecto":
            var dotacion_EducadorTratoDirecto = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Educador(a) de trato directo" });
            salida = dotacion_EducadorTratoDirecto.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_ManipuladorAlimentos":
            var dotacion_ManipuladorAlimentos = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Manipulador(a) de Alimentos" });
            salida = dotacion_ManipuladorAlimentos.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_ApoyoAdministrativo":
            var dotacion_ApoyoAdministrativo = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Apoyo Administrativo" });
            salida = dotacion_ApoyoAdministrativo.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_PersonalAseo":
            var dotacion_PersonalAseo = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Personal de Aseo" });
            salida = dotacion_PersonalAseo.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_PersonalLavanderia":
            var dotacion_PersonalLavanderia = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Personal de Lavandería" });
            salida = dotacion_PersonalLavanderia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_MonitoresTalleristas":
            var dotacion_MonitoresTalleristas = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Monitores Talleristas" });
            salida = dotacion_MonitoresTalleristas.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_AlumnosPractica":
            var dotacion_AlumnosPractica = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Alumnos en Práctica" });
            salida = dotacion_AlumnosPractica.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_ApoyoVoluntario":
            var dotacion_ApoyoVoluntario = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Apoyo Voluntario" });
            salida = dotacion_ApoyoVoluntario.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_Otros":
            var dotacion_Otros = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Otros (Especificar en Observaciones)" });
            salida = dotacion_Otros.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_PersonalLicenciaMedica":
            var dotacion_PersonalLicenciaMedica = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "¿Personal con Licencia Médica?" });
            salida = dotacion_PersonalLicenciaMedica.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        case "dotacion_PersonalSuplente":
            var dotacion_PersonalSuplente = fila_TR_dotacion_.mapReplace({ "<COMUNFILAS>": comunFilas3, "<nombre_dato>": "Personal con Licencia ¿Cuenta con Suplente?" });
            salida = dotacion_PersonalSuplente.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4, "<_c3_dato>": val5, "<_c3_dato_pjud>": val6, "<_c4_dato>": val7, "<_c4_dato_pjud>": val8 });
            break;
        //INFRAESTRUCTURA
        case "infra_cantidadoficina":
            var infra_cantidadoficina = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Oficinas Administrativas" });
            salida = infra_cantidadoficina.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadsalareuniones":
            var infra_cantidadosalareuniones = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Sala de Reuniones" });
            salida = infra_cantidadosalareuniones.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadsalaRecepcion":
            var infra_cantidadosalareuniones = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Sala de Recepción" });
            salida = infra_cantidadosalareuniones.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadespacioVisitas":
            var infra_cantidadespacioVisitas = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Espacio de Visitas" });
            salida = infra_cantidadespacioVisitas.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadsalaMultiuso":
            var infra_cantidadsalaMultiuso = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Sala Multiuso para Talleres" });
            salida = infra_cantidadsalaMultiuso.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadsalaEstar":
            var infra_cantidadsalaEstar = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Sala de Estar/Living" });
            salida = infra_cantidadsalaEstar.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadenfermeria":
            var infra_cantidadenfermeria = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Unidad de Salud" });
            salida = infra_cantidadenfermeria.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadespacioRecreacional":
            var infra_cantidadespacioRecreacional = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Espacios Recreacionales" });
            salida = infra_cantidadespacioRecreacional.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadareasVerdes":
            var infra_cantidadareasVerdes = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Áreas Verdes" });
            salida = infra_cantidadareasVerdes.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadcocina":
            var infra_cantidadcocina = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Cocina" });
            salida = infra_cantidadcocina.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadcomedor":
            var infra_cantidadcomedor = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Comedor" });
            salida = infra_cantidadcomedor.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadLavanderia":
            var infra_cantidadLavanderia = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Lavandería" });
            salida = infra_cantidadLavanderia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadDormitorio":
            var infra_cantidadDormitorio = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Dormitorio NNA" });
            salida = infra_cantidadDormitorio.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadCamasNNA":
            var infra_cantidadCamasNNA = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Camas NNA" });
            salida = infra_cantidadCamasNNA.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadclosetLocker":
            var infra_cantidadclosetLocker = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Closet, Lockers" });
            salida = infra_cantidadclosetLocker.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadbanosPublico":
            var infra_cantidadbanosPublico = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Baños para Público" });
            salida = infra_cantidadbanosPublico.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadbanosNNAadecuados":
            var infra_cantidadbanosNNAadecuados = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Baños NNA Adecuados y Suficientes" });
            salida = infra_cantidadbanosNNAadecuados.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_cantidadduchasNNA":
            var infra_cantidadduchasNNA = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_1, "<nombre_dato>": "Duchas para NNA" });
            salida = infra_cantidadduchasNNA.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2, "<_c2_dato>": val3, "<_c2_dato_pjud>": val4 });
            break;
        case "infra_ambientacionAcorde":
            var infra_ambientacionAcorde = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Ambientación Acorde a la Población" });
            salida = infra_ambientacionAcorde.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_vestuarioAdecuado":
            var infra_vestuarioAdecuado = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Vestuario adecuado de acuerdo a estación" });
            salida = infra_vestuarioAdecuado.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_utilesAseoPersonalNNA":
            var infra_utilesAseoPersonalNNA = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Útiles de Aseo Personal para los NNA" });
            salida = infra_utilesAseoPersonalNNA.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_aguaCaliente":
            var infra_aguaCaliente = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Agua Caliente" });
            salida = infra_aguaCaliente.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_estadoCalefonLlavesGas":
            var infra_estadoCalefonLlavesGas = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Estado Calefón y Llaves de Gas" });
            salida = infra_estadoCalefonLlavesGas.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_sistemaCalefaccion":
            var infra_sistemaCalefaccion = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Sistema de calefacción" });
            salida = infra_sistemaCalefaccion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_ventilacionAdecuada":
            var infra_ventilacionAdecuada = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Ventilación Adecuada del inmueble" });
            salida = infra_ventilacionAdecuada.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_AccesoDiscapacitados":
            var infra_AccesoDiscapacitados = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Acceso para personas con situación de Discapacidad" });
            salida = infra_AccesoDiscapacitados.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "infra_InstalacionesHabilitadasDiscapacitados":
            var infra_InstalacionesHabilitadasDiscapacitados = fila_TR_infraestrucruta_.mapReplace({ "<COMUNFILAS>": comunFilas4_2, "<nombre_dato>": "Instalaciones Habilitadas para personas con situación de Discapacidad" });
            salida = infra_InstalacionesHabilitadasDiscapacitados.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
            //SEGURIDAD
        case "seguridad_PlanEmergencia":
            var seguridad_Plan_Emergencia = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Plan de Emergencia" });
            salida = seguridad_Plan_Emergencia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_SimulacroEmergencia":  
            var seguridad_SimulacroEmergencia = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Simulacro Emergencia (Último Cuatrimestre)" });
            salida = seguridad_SimulacroEmergencia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_PlanEmergenciaVisado":
            var seguridad_PlanEmergencia = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Plan de Emergencia ¿Visado por personal calificado?" });
            salida = seguridad_PlanEmergencia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_Extintores":
            var seguridad_Extintores = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Extintores" });
            salida = seguridad_Extintores.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_Senaletica":
            var seguridad_Senaletica = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Señalética" });
            salida = seguridad_Senaletica.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_ViasEvacuacion":
            var seguridad_ViasEvacuacion = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Vías de Evacuación" });
            salida = seguridad_ViasEvacuacion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_CapacitacionPersonalEmergencia":
            var seguridad_CapacitacionPersonalEmergencia = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Capacitación Personal en Emergencia y Primeros Auxilios" });
            salida = seguridad_CapacitacionPersonalEmergencia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_Sanitizacion":
            var seguridad_Sanitizacion = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Sanitización, Desratización y Fumigación" });
            salida = seguridad_Sanitizacion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_SistemaElectrico":
            var seguridad_SistemaElectrico = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Sistema Eléctrico" });
            salida = seguridad_SistemaElectrico.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "seguridad_ZonaSeguridad":
            var seguridad_ZonaSeguridad = fila_TR_seguridad_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Zona de Seguridad Demarcada" });
            salida = seguridad_ZonaSeguridad.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        //SALUD
        case "salud_NNA_InscritosCESFAM":
            var salud_NNA_InscritosCESFAM = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA Inscritos en CESFAM" });
            salida = salud_NNA_InscritosCESFAM.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_problematicaSaludMental":
            var salud_NNA_problematicaSaludMental = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA con Problemática de Salud Mental con Diagnóstico" });
            salida = salud_NNA_problematicaSaludMental.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_inscritosEnferCronica":
            var salud_NNA_inscritosEnferCronica = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA Inscritos con Enfermedad Crónica" });
            salida = salud_NNA_inscritosEnferCronica.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_Discapacidad":
            var salud_NNA_Discapacidad = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA Inscritos con Situación de Discapacidad" });
            salida = salud_NNA_Discapacidad.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_inscritosProblemSaludRecibeMedica":
            var salud_NNA_inscritosProblemSaludRecibeMedica = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA recibiendo tratamiento farmacológico" });
            salida = salud_NNA_inscritosProblemSaludRecibeMedica.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_problematicaSaludenTratamiento":
            var salud_NNA_problematicaSaludenTratamiento = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA con Problemática de Salud en Tratamiento" });
            salida = salud_NNA_problematicaSaludenTratamiento.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_consumoDrogas":
            var salud_NNA_consumoDrogas = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA con Consumo de Drogas" });
            salida = salud_NNA_consumoDrogas.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;

        case "salud_NNA_RegistroMedicamentos":
            var salud_NNA_RegistroMedicamentos = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "¿Cuenta con Registro de Medicamentos Administrados a los NNA?" });
            salida = salud_NNA_RegistroMedicamentos.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA__protocoloAdmin_Medica":
            var salud_NNA__protocoloAdmin_Medica = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "¿Cuenta con Protocolo para la Administración de Medicamentos a los NNA?" });
            salida = salud_NNA__protocoloAdmin_Medica.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_control_ginecologicoAdolescente":
            var salud_NNA_control_ginecologicoAdolescente = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "¿Existe Control Anual Ginecológico en los Adolescentes?" });
            salida = salud_NNA_control_ginecologicoAdolescente.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;     
        case "salud_NNA_adolescenteNiegaControlGineco":
            var salud_NNA_adolescenteNiegaControlGineco = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "¿Existen adolescentes que se hayan negado a Control Ginecológico?" });
            salida = salud_NNA_adolescenteNiegaControlGineco.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;     
        case "salud_NNA_adolescenteEmbarazada":
            var salud_NNA_adolescenteEmbarazada = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "¿Adolescentes Embarazadas?" });
            salida = salud_NNA_adolescenteEmbarazada.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_adolescenteEmbarazadaControlalDia":
            var salud_NNA_adolescenteEmbarazadaControlalDia = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?" });
            salida = salud_NNA_adolescenteEmbarazadaControlalDia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "salud_NNA_adolescenteEmbarazadaControlalDia_cantidad":
            var salud_NNA_adolescenteEmbarazadaControlalDia_cantidad = fila_TR_salud_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Adolescentes Embarazadas con controles médicos al día" });
            salida = salud_NNA_adolescenteEmbarazadaControlalDia_cantidad.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        //EDUCACION
        case "educacion_NNA_SiAsisten":
            var educacion_NNA_SiAsisten = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA que si asisten a Establecimiento Educacional" });
            salida = educacion_NNA_SiAsisten.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_NNA_NoAsisten":
            var educacion_NNA_NoAsisten = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA que no asisten a Establecimiento Educacional" });
            salida = educacion_NNA_NoAsisten.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_NNA_RetrasoEscolar":
            var educacion_NNA_RetrasoEscolar = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA con Retraso Escolar" });
            salida = educacion_NNA_RetrasoEscolar.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_NNA_MatriculaCancelada":
            var educacion_NNA_MatriculaCancelada = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA con Matrícula Cancelada" });
            salida = educacion_NNA_MatriculaCancelada.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_AsisteEducacionEspecial":
            var educacion_AsisteEducacionEspecial = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA que Asiste a Educación Diferencial" });
            salida = educacion_AsisteEducacionEspecial.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_AsisteEducacionNivelacion":
            var educacion_AsisteEducacionNivelacion = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de NNA que Asiste a Educación de Nivelación de Estudios" });
            salida = educacion_AsisteEducacionNivelacion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_EspaciosDestinadosEstudios":
            var educacion_EspaciosDestinadosEstudios = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Espacios Destinados a Estudios y Desarrolo de Tareas" });
            salida = educacion_EspaciosDestinadosEstudios.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break; 
        case "educacion_MaterialBibliografico":
            var educacion_MaterialBibliografico = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Material Bibliográfico" });
            salida = educacion_MaterialBibliografico.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_Computadores":
            var educacion_Computadores = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Computadores" });
            salida = educacion_Computadores.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "educacion_AccesoControladoInternet":
            var educacion_AccesoControladoInternet = fila_TR_educacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Acceso Controlado a Internet" });
            salida = educacion_AccesoControladoInternet.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        //ALIMENTACION
        case "alimentacion_HonorariosEntregaAlimentos":
            var alimentacion_HonorariosEntregaAlimentos = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Cuenta con Registro de Honorarios de Entrega de Alimentos" });
            salida = alimentacion_HonorariosEntregaAlimentos.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "alimentacion_PlanificacionMenusBalanceados":
            var alimentacion_PlanificacionMenusBalanceados = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "“¿Cuenta con minuta alimentaria?" });
            salida = alimentacion_PlanificacionMenusBalanceados.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "alimentacion_MenusEspeciales":
            var alimentacion_MenusEspeciales = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existencia de Menús Especiales" });
            salida = alimentacion_MenusEspeciales.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "alimentacion_AsesoriasNutricionista":
            var alimentacion_AsesoriasNutricionista = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "¿Cuenta con minuta alimentaria aprobada?" });
            salida = alimentacion_AsesoriasNutricionista.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "alimentacion_CertificadosSanitariosManipuladoras":
            var alimentacion_CertificadosSanitariosManipuladoras = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existen Certificados Sanitarios de las Manipuladoras" });
            salida = alimentacion_CertificadosSanitariosManipuladoras.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "alimentacion_AlmacenamientoAlimentos":
            var alimentacion_AlmacenamientoAlimentos = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Almacenamiento de Alimentos y Estado de Conservación" });
            salida = alimentacion_AlmacenamientoAlimentos.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "alimentacion_ComidasEntregadasLUaVI": 
            var alimentacion_ComidasEntregadasLUaVI = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de Comidas Entregadas de Lunes a Viernes" });
            salida = alimentacion_ComidasEntregadasLUaVI.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "alimentacion_ComidasEntregadasFestivos":
            var alimentacion_ComidasEntregadasFestivos = fila_TR_alimentacion_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "N° de Comidas Entregadas Sábado, Domingo y Festivos" });
            salida = alimentacion_ComidasEntregadasFestivos.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        //GESTION RESIDENCIA
        case "gestion_catastroRedes":
            var gestion_catastroRedes = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Cuenta con catastro de redes" });
            salida = gestion_catastroRedes.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_RegistroVisitas":
            var gestion_RegistroVisitas = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo y/o Registro de Visitas" });
            salida = gestion_RegistroVisitas.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ProtocoloAcogidaNNA":
            var gestion_ProtocoloAcogidaNNA = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Cuenta con Protocolo de Acogida del NNA" });
            salida = gestion_ProtocoloAcogidaNNA.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_AutocuidadoEquipo":
            var gestion_AutocuidadoEquipo = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existen Actividades de Autocuidado para el Equipo" });
            salida = gestion_AutocuidadoEquipo.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ActuacionIntervencionCrisis":
            var gestion_ActuacionIntervencionCrisis = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Cuenta con Protocolo de Actuación de Intervención en Crisis" });
            salida = gestion_ActuacionIntervencionCrisis.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_InfoNormativaResidencia":
            var gestion_InfoNormativaResidencia = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo de Información para NNA sobre la Normativa de Residencia" });
            salida = gestion_InfoNormativaResidencia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ProtocoloConvivencia":
            var gestion_ProtocoloConvivencia = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo de Convivencia" });
            salida = gestion_ProtocoloConvivencia.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ProtocoloPresentacionReclamos":
            var gestion_ProtocoloPresentacionReclamos = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo de Presentación de Reclamos y Quejas" });
            salida = gestion_ProtocoloPresentacionReclamos.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ProtocoloEspaciosEscucha":
            var gestion_ProtocoloEspaciosEscucha = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo y Espacios para la escucha de los NNA" });
            salida = gestion_ProtocoloEspaciosEscucha.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_VinculacionResidencias":
            var gestion_VinculacionResidencias = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Vinculación entre Residencias (para hermanos)" });
            salida = gestion_VinculacionResidencias.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_FormacionPermanente":
            var gestion_FormacionPermanente = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Cuenta con Proceso de Formación Permanente para el personal" });
            salida = gestion_FormacionPermanente.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ProtocoloApadrinamiento":
            var gestion_ProtocoloApadrinamiento = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo de Apadrinamiento" });
            salida = gestion_ProtocoloApadrinamiento.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ProtocoloDerivacion":
            var gestion_ProtocoloDerivacion = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo de Derivación o Traslado a Residencia" });
            salida = gestion_ProtocoloDerivacion.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_ProtocoloEgresoNNA":
            var gestion_ProtocoloEgresoNNA = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo de para el Egreso del NNA (Sistema Residencial)" });
            salida = gestion_ProtocoloEgresoNNA.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_DerivacionRedSalud":
            var gestion_DerivacionRedSalud = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Existe Protocolo para Derivación a Red Salud" });
            salida = gestion_DerivacionRedSalud.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
        case "gestion_PreparacionVidaIndependiente":
            var gestion_PreparacionVidaIndependiente = fila_TR_gestionresidencia_.mapReplace({ "<COMUNFILAS>": comunFilas5, "<nombre_dato>": "Actividades de Habilitación Laboral y Preparación para la Vida Independiente" });
            salida = gestion_PreparacionVidaIndependiente.mapReplace({ "<_c1_dato>": val1, "<_c1_dato_pjud>": val2 });
            break;
    }
    return salida;
}
function GeneraListaNNA(lista) {
    var nombresGls = "";
    var nombresGlstmp = "";
    if (lista != "") {
        var arrRegs = lista.split('~');
        for (var k = 0; k <= arrRegs.length - 1; k++) {
            if (arrRegs[k] != "") {
                var arrCampos = arrRegs[k].split('|');
                for (var p = 0; p <= arrCampos.length - 1; p++) {
                    nombresGlstmp = nombresGlstmp + arrCampos[p] + ' ';
                    if (p == (arrCampos.length - 1)) nombresGls = nombresGls + "- " + nombresGlstmp;
                }
                nombresGlstmp = "";
            }
            nombresGls = nombresGls + "\n";
        }
    }
    return nombresGls;
}

function CargaCamposComparativa() {
    var _antecedentesPoblacion = "";
    var _antecedentesAdopcionNNA = "";
    var _listadoNNA_abandono = "";
    var _listadoNNA_adolecentes_conhijos = "";

    if ((generalresidencia && generalpjud) &&
        (generalresidenciaNNAAbandono && generalpjudNNAAbandono) &&
        (generalresidenciaNNAadolescHijo && generalpjudNNAadolescHijo)) {
        //ANTECEDENTES SECCION GENERAL
        if ($("#general_012_pobvig_masculina").val() != $("#general_012_pobvig_masculina_pjud").val() ||
            $("#general_013_pobvig_femenina").val() != $("#general_013_pobvig_femenina_pjud").val() ||
            $("#pobvig_total").val() != $("#pobvig_total_pjud").val()
        ) {
            _antecedentesPoblacion = RenderTBL_AntecedentesPoblacion(
                $("#general_012_pobvig_masculina").val(), $("#general_012_pobvig_masculina_pjud").val(),
                $("#general_013_pobvig_femenina").val(), $("#general_013_pobvig_femenina_pjud").val(),
                $("#pobvig_total").val(), $("#pobvig_total_pjud").val(),"","",
                "poblacionvigente");
        }
        if ($("#general_014_plazaConv_masculina").val() != $("#general_014_plazaConv_masculina_pjud").val() ||
            $("#general_015_plazaConv_femenina").val() != $("#general_015_plazaConv_femenina_pjud").val() ||
            $("#plazaConv_total").val() != $("#plazaConv_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_014_plazaConv_masculina").val(), $("#general_014_plazaConv_masculina_pjud").val(),
                $("#general_015_plazaConv_femenina").val(), $("#general_015_plazaConv_femenina_pjud").val(),
                $("#plazaConv_total").val(), $("#plazaConv_total_pjud").val(), "", "",
                "plazasconvenidas");
        }
        if ($("#general_016_otrasPlazas_masculina").val() != $("#general_016_otrasPlazas_masculina_pjud").val() ||
            $("#general_017_otrasPlazas_femenina").val() != $("#general_017_otrasPlazas_femenina_pjud").val() ||
            $("#otrasPlazas_total").val() != $("#otrasPlazas_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_016_otrasPlazas_masculina").val(), $("#general_016_otrasPlazas_masculina_pjud").val(),
                $("#general_017_otrasPlazas_femenina").val(), $("#general_017_otrasPlazas_femenina_pjud").val(),
                $("#otrasPlazas_total").val(), $("#otrasPlazas_total_pjud").val(),"","",
                "otrasplazas");
        }
        if ($("#general_018_totalNNApresent_masculina").val() != $("#general_018_totalNNApresent_masculina_pjud").val() ||
            $("#general_019_totalNNApresent_femenina").val() != $("#general_019_totalNNApresent_femenina_pjud").val() ||
            $("#totalNNApresent_total").val() != $("#totalNNApresent_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_018_totalNNApresent_masculina").val(), $("#general_018_totalNNApresent_masculina_pjud").val(),
                $("#general_019_totalNNApresent_femenina").val(), $("#general_019_totalNNApresent_femenina_pjud").val(),
                $("#totalNNApresent_total").val(), $("#totalNNApresent_total_pjud").val(), "", "",
                "nnaPresentes");
        }
        if ($("#general_020_totalNNAacercFamilia_masculina").val() != $("#general_020_totalNNAacercFamilia_masculina_pjud").val() ||
            $("#general_021_totalNNAacercFamilia_femenina").val() != $("#general_021_totalNNAacercFamilia_femenina_pjud").val() ||
            $("#totalNNAacercFamilia_total").val() != $("#totalNNAacercFamilia_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_020_totalNNAacercFamilia_masculina").val(), $("#general_020_totalNNAacercFamilia_masculina_pjud").val(),
                $("#general_021_totalNNAacercFamilia_femenina").val(), $("#general_021_totalNNAacercFamilia_femenina_pjud").val(),
                $("#totalNNAacercFamilia_total").val(), $("#totalNNAacercFamilia_total_pjud").val(), "", "",
                "nnaAcercamiento");
        }
        if ($("#general_022_totalResidenMayor_masculina").val() != $("#general_022_totalResidenMayor_masculina_pjud").val() ||
            $("#general_023_totalResidenMayor_femenina").val() != $("#general_023_totalResidenMayor_femenina_pjud").val() ||
            $("#totalResidenMayor_total").val() != $("#totalResidenMayor_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_022_totalResidenMayor_masculina").val(), $("#general_022_totalResidenMayor_masculina_pjud").val(),
                $("#general_023_totalResidenMayor_femenina").val(), $("#general_023_totalResidenMayor_femenina_pjud").val(),
                $("#totalResidenMayor_total").val(), $("#totalResidenMayor_total_pjud").val(), "", "",
                "residentesMayoresEdad");
        }
        if ($("#general_024_abandonoSist_masculina").val() != $("#general_024_abandonoSist_masculina_pjud").val() ||
            $("#general_025_abandonoSist_femenina").val() != $("#general_025_abandonoSist_femenina_pjud").val() ||
            $("#abandonoSist_total").val() != $("#abandonoSist_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_024_abandonoSist_masculina").val(), $("#general_024_abandonoSist_masculina_pjud").val(),
                $("#general_025_abandonoSist_femenina").val(), $("#general_025_abandonoSist_femenina_pjud").val(),
                $("#abandonoSist_total").val(), $("#abandonoSist_total_pjud").val(), "", "",
                "abandonoSistema");
        }
        if ($("#general_026_hospitalizados_masculina").val() != $("#general_026_hospitalizados_masculina_pjud").val() ||
            $("#general_027_hospitalizados_femenina").val() != $("#general_027_hospitalizados_femenina_pjud").val() ||
            $("#hospitalizados_total").val() != $("#hospitalizados_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_026_hospitalizados_masculina").val(), $("#general_026_hospitalizados_masculina_pjud").val(),
                $("#general_027_hospitalizados_femenina").val(), $("#general_027_hospitalizados_femenina_pjud").val(),
                $("#hospitalizados_total").val(), $("#hospitalizados_total_pjud").val(), "", "",
                "hospitalizados");
        }
        if ($("#general_028_totalNNAart80bis_masculina").val() != $("#general_028_totalNNAart80bis_masculina_pjud").val() ||
            $("#general_029_totalNNAart80bis_femenina").val() != $("#general_029_totalNNAart80bis_femenina_pjud").val() ||
            $("#totalNNAart80bis_total").val() != $("#totalNNAart80bis_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_028_totalNNAart80bis_masculina").val(), $("#general_028_totalNNAart80bis_masculina_pjud").val(),
                $("#general_029_totalNNAart80bis_femenina").val(), $("#general_029_totalNNAart80bis_femenina_pjud").val(),
                $("#totalNNAart80bis_total").val(), $("#totalNNAart80bis_total_pjud").val(), "", "",
                "nnaIngresoArt80");
        }
        //ANTECEDENTES NNA ABANDONO
        if ($("#general_030_totalNNAabandono_masculina").val() != $("#general_030_totalNNAabandono_masculina_pjud").val() ||
            $("#general_031_totalNNAabandono_femenina").val() != $("#general_031_totalNNAabandono_femenina_pjud").val() ||
            $("#totalNNAabandono_total").val() != $("#totalNNAabandono_total_pjud").val()
        ) {
            _antecedentesPoblacion = _antecedentesPoblacion + RenderTBL_AntecedentesPoblacion(
                $("#general_030_totalNNAabandono_masculina").val(), $("#general_030_totalNNAabandono_masculina_pjud").val(),
                $("#general_031_totalNNAabandono_femenina").val(), $("#general_031_totalNNAabandono_femenina_pjud").val(),
                $("#totalNNAabandono_total").val(), $("#totalNNAabandono_total_pjud").val(), "", "",
                "nnaCompletoAbandono");
        }
        //ANTECEDENTES ADOPCION
        if ($("#general_032_totalNNA_suscep_adopcion_masculina").val() != $("#general_032_totalNNA_suscep_adopcion_masculina_pjud").val() ||
            $("#general_033_totalNNA_suscep_adopcion_femenina").val() != $("#general_033_totalNNA_suscep_adopcion_femenina_pjud").val() ||
            $("#totalNNA_suscep_adopcion_total").val() != $("#totalNNA_suscep_adopcion_total_pjud").val()
        ) {
            _antecedentesAdopcionNNA = _antecedentesAdopcionNNA + RenderTBL_AntecedentesPoblacion(
                $("#general_032_totalNNA_suscep_adopcion_masculina").val(), $("#general_032_totalNNA_suscep_adopcion_masculina_pjud").val(),
                $("#general_033_totalNNA_suscep_adopcion_femenina").val(), $("#general_033_totalNNA_suscep_adopcion_femenina_pjud").val(),
                $("#totalNNA_suscep_adopcion_total").val(), $("#totalNNA_suscep_adopcion_total_pjud").val(), "", "",
                "nnaSusceptibleAdopcion");
        }
        if ($("#general_034_totalNNA_enlace_adopcion_masculina").val() != $("#general_034_totalNNA_enlace_adopcion_masculina_pjud").val() ||
            $("#general_033_totalNNA_suscep_adopcion_femenina").val() != $("#general_033_totalNNA_suscep_adopcion_femenina_pjud").val() ||
            $("#totalNNA_enlace_adopcion_total").val() != $("#totalNNA_enlace_adopcion_total_pjud").val()
        ) {
            _antecedentesAdopcionNNA = _antecedentesAdopcionNNA + RenderTBL_AntecedentesPoblacion(
                $("#general_034_totalNNA_enlace_adopcion_masculina").val(), $("#general_034_totalNNA_enlace_adopcion_masculina_pjud").val(),
                $("#general_033_totalNNA_suscep_adopcion_femenina").val(), $("#general_033_totalNNA_suscep_adopcion_femenina_pjud").val(),
                $("#totalNNA_enlace_adopcion_total").val(), $("#totalNNA_enlace_adopcion_total_pjud").val(), "", "",
                "nnaEnlaceAdopcion");
        }
        if ($("#general_036_totalNNA_causaini_adopcion_masculina").val() != $("#general_036_totalNNA_causaini_adopcion_masculina_pjud").val() ||
            $("#general_037_totalNNA_causaini_adopcion_femenina").val() != $("#general_037_totalNNA_causaini_adopcion_femenina_pjud").val() ||
            $("#totalNNA_causaini_adopcion_total").val() != $("#totalNNA_causaini_adopcion_total_pjud").val()
        ) {
            _antecedentesAdopcionNNA = _antecedentesAdopcionNNA + RenderTBL_AntecedentesPoblacion(
                $("#general_036_totalNNA_causaini_adopcion_masculina").val(), $("#general_036_totalNNA_causaini_adopcion_masculina_pjud").val(),
                $("#general_037_totalNNA_causaini_adopcion_femenina").val(), $("#general_037_totalNNA_causaini_adopcion_femenina_pjud").val(),
                $("#totalNNA_causaini_adopcion_total").val(), $("#totalNNA_causaini_adopcion_total_pjud").val(), "", "",
                "nnaCausaIniciadaXAdopcion");
        }
        if ($("#general_038_totalNNA_adoslecente_chijo_masculina").val() != $("#general_038_totalNNA_adoslecente_chijo_masculina_pjud").val() ||
            $("#general_039_totalNNA_adoslecente_chijo_femenina").val() != $("#general_039_totalNNA_adoslecente_chijo_femenina_pjud").val() ||
            $("#totalNNA_adoslecente_chijo_total").val() != $("#totalNNA_adoslecente_chijo_total_pjud").val()
        ) {
            _antecedentesAdopcionNNA = _antecedentesAdopcionNNA + RenderTBL_AntecedentesPoblacion(
                $("#general_038_totalNNA_adoslecente_chijo_masculina").val(), $("#general_038_totalNNA_adoslecente_chijo_masculina_pjud").val(),
                $("#general_039_totalNNA_adoslecente_chijo_femenina").val(), $("#general_039_totalNNA_adoslecente_chijo_femenina_pjud").val(),
                $("#totalNNA_adoslecente_chijo_total").val(), $("#totalNNA_adoslecente_chijo_total_pjud").val(), "", "",
                "adolescenteHijosRecienNacido");
        }

        if (nombres_NNA_abandono != nombres_NNA_abandono_pjud) {
            _listadoNNA_abandono = _listadoNNA_abandono + RenderTBL_AntecedentesPoblacion(nombres_NNA_abandono, nombres_NNA_abandono_pjud, "", "", "", "", "", "", "listado_NNAabandono");
        }
        if (nombres_NNA_adolescHijo != nombres_NNA_adolescHijo_pjud) {
            _listadoNNA_adolecentes_conhijos = _listadoNNA_adolecentes_conhijos + RenderTBL_AntecedentesPoblacion(nombres_NNA_adolescHijo, nombres_NNA_adolescHijo_pjud, "", "", "", "", "", "", "listado_NNAadolescentehijos");
        }

        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";

        if (_antecedentesPoblacion != "") {
            _antecedentesPoblacion = tbl_c_antecedentesPoblacion.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesPoblacion + _listadoNNA_abandono });
        }
        if (_antecedentesAdopcionNNA != "") {
            _antecedentesAdopcionNNA = tbl_c_antecedentesAdopcionNNA.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesAdopcionNNA + _listadoNNA_adolecentes_conhijos });
        }
        //SI DATOS DISTINTOS SE DESPLIEGAN LAS TABLAS COMPARATIVAS
        //alert("ANT_GENERALES:\n\n\n"+ _antecedentesPoblacion +"\n\n"+ _antecedentesAdopcionNNA);
        if ((_antecedentesPoblacion + _antecedentesAdopcionNNA) != "") {
            $("#DivFichaComparativo01").html("<br />" + _antecedentesPoblacion + _antecedentesAdopcionNNA);
            $("#div_compara_antecedentes_generales").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_generales").attr({ "style": "display:none;" });
        } 
    }

    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa2() {
    var _antecedentesPoblacion_y_Capacidad = "";

    if ((poblacionCapacidad_pjud && poblacionCapacidad_residencia)) {
        //ANTECEDENTES POBLACION Y CAPACIDAD
        if ($('#poblacion_001_sel_reside_con_subven option:selected').text() != $('#poblacion_001_sel_reside_con_subven_pjud option:selected').text())
        {
            _antecedentesPoblacion_y_Capacidad = RenderTBL_AntecedentesPoblacion(
                $('#poblacion_001_sel_reside_con_subven option:selected').text(), $('#poblacion_001_sel_reside_con_subven_pjud option:selected').text(), "", "", "", "", "", "", "reside_conSubven");
        }
        if ($('#poblacion_002_sel_sexo_atendidos option:selected').text() != $('#poblacion_002_sel_sexo_atendidos_pjud option:selected').text()) {
            _antecedentesPoblacion_y_Capacidad = _antecedentesPoblacion_y_Capacidad + RenderTBL_AntecedentesPoblacion(
                $('#poblacion_002_sel_sexo_atendidos option:selected').text(), $('#poblacion_002_sel_sexo_atendidos_pjud option:selected').text(), "", "", "", "", "", "", "reside_conSubven_poblacion_sexo");
        }
        if ($('#poblacion_003_sel_rango_etareo_predomina option:selected').text() != $('#poblacion_003_sel_rango_etareo_predomina_pjud option:selected').text()) {
            _antecedentesPoblacion_y_Capacidad = _antecedentesPoblacion_y_Capacidad + RenderTBL_AntecedentesPoblacion(
                $('#poblacion_003_sel_rango_etareo_predomina option:selected').text(), $('#poblacion_003_sel_rango_etareo_predomina_pjud option:selected').text(), "", "", "", "", "", "", "reside_conSubven_poblacion_rangoetareo");
        }
        if ($('#poblacion_004_poblacion_vigente option:selected').text() != $('#poblacion_004_poblacion_vigente_pjud option:selected').text()) {
            _antecedentesPoblacion_y_Capacidad = _antecedentesPoblacion_y_Capacidad + RenderTBL_AntecedentesPoblacion(
                $('#poblacion_004_poblacion_vigente option:selected').text(), $('#poblacion_004_poblacion_vigente_pjud option:selected').text(), "", "", "", "", "", "", "reside_conSubven_poblacion_rangoetareo_predominante");
        }
        if ($('#poblacion_005_tipo_vulneracion_mas_frecuente').val() != $('#poblacion_005_tipo_vulneracion_mas_frecuente_pjud').val()) {
            _antecedentesPoblacion_y_Capacidad = _antecedentesPoblacion_y_Capacidad + RenderTBL_AntecedentesPoblacion(
                $('#poblacion_005_tipo_vulneracion_mas_frecuente').val(), $('#poblacion_005_tipo_vulneracion_mas_frecuente_pjud').val(), "", "", "", "", "", "", "tipo_vulneracion_mas_frecuente");
        }
        if ($('#poblacion_006_programa_apadrinimiento option:selected').text() != $('#poblacion_006_programa_apadrinimiento_pjud option:selected').text()) {
            _antecedentesPoblacion_y_Capacidad = _antecedentesPoblacion_y_Capacidad + RenderTBL_AntecedentesPoblacion(
                $('#poblacion_006_programa_apadrinimiento option:selected').text(), $('#poblacion_006_programa_apadrinimiento_pjud option:selected').text(), "", "", "", "", "", "", "programa_apadrinimiento");
        }

        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";

        if (_antecedentesPoblacion_y_Capacidad != "") {
            _antecedentesPoblacion_y_Capacidad = tbl_c_antecedentesPoblacionCapacidad.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesPoblacion_y_Capacidad })
        }
        //SI DATOS DISTINTOS SE DESPLIEGAN LAS TABLAS COMPARATIVAS
        //alert("ANT_GENERALES:\n\n\n" + _antecedentesPoblacion_y_Capacidad);
        if ((_antecedentesPoblacion_y_Capacidad) != "") {
            $("#DivFichaComparativo02").html("<br />" + _antecedentesPoblacion_y_Capacidad);
            $("#div_compara_antecedentes_poblacion_capacidad").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_poblacion_capacidad").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa3() {
    var _antecedentesDotacionPersonal= "";

    if ((dotacionpersonal_residencia && dotacionpersonal_pjud)) {
        //ANTECEDENTES POBLACION Y CAPACIDAD
        if (
            $('#dotacion_002_sel_director_cantidad option:selected').text() != $('#dotacion_002_sel_director_cantidad_pjud option:selected').text() ||
            $('#dotacion_001_sel_director_existe option:selected').text() != $('#dotacion_001_sel_director_existe_pjud option:selected').text() ||
            $('#dotacion_003_sel_director_tipo_jornada option:selected').text() != $('#dotacion_003_sel_director_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_004_sel_director_horas_semanales').val() != $('#dotacion_004_sel_director_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_001_sel_director_existe option:selected').text(), $('#dotacion_001_sel_director_existe_pjud option:selected').text(),
                $('#dotacion_002_sel_director_cantidad option:selected').text(), $('#dotacion_002_sel_director_cantidad_pjud option:selected').text(),
                $('#dotacion_003_sel_director_tipo_jornada option:selected').text(), $('#dotacion_003_sel_director_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_004_sel_director_horas_semanales').val(), $('#dotacion_004_sel_director_horas_semanales_pjud').val(),
                "dotacion_director");
        }
        if (
            $('#dotacion_006_sel_asistente_cantidad option:selected').text() != $('#dotacion_006_sel_asistente_cantidad_pjud option:selected').text() ||
            $('#dotacion_005_sel_asistente_existe option:selected').text() != $('#dotacion_005_sel_asistente_existe_pjud option:selected').text() ||
            $('#dotacion_007_sel_asistente_tipo_jornada option:selected').text() != $('#dotacion_007_sel_asistente_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_008_sel_asistente_horas_semanales').val() != $('#dotacion_008_sel_asistente_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_005_sel_asistente_existe option:selected').text(), $('#dotacion_005_sel_asistente_existe_pjud option:selected').text(),
                $('#dotacion_006_sel_asistente_cantidad option:selected').text(), $('#dotacion_006_sel_asistente_cantidad_pjud option:selected').text(),
                $('#dotacion_007_sel_asistente_tipo_jornada option:selected').text(), $('#dotacion_007_sel_asistente_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_008_sel_asistente_horas_semanales').val(), $('#dotacion_008_sel_asistente_horas_semanales_pjud').val(),
                "dotacion_asistente");
        }
        if (
            $('#dotacion_010_sel_psicologo_cantidad option:selected').text() != $('#dotacion_010_sel_psicologo_cantidad_pjud option:selected').text() ||
            $('#dotacion_009_sel_psicologo_existe option:selected').text() != $('#dotacion_009_sel_psicologo_existe_pjud option:selected').text() ||
            $('#dotacion_011_sel_psicologo_tipo_jornada option:selected').text() != $('#dotacion_011_sel_psicologo_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_012_sel_psicologo_horas_semanales').val() != $('#dotacion_012_sel_psicologo_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_009_sel_psicologo_existe option:selected').text(), $('#dotacion_009_sel_psicologo_existe_pjud option:selected').text(),
                $('#dotacion_010_sel_psicologo_cantidad option:selected').text(), $('#dotacion_010_sel_psicologo_cantidad_pjud option:selected').text(),
                $('#dotacion_011_sel_psicologo_tipo_jornada option:selected').text(), $('#dotacion_011_sel_psicologo_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_012_sel_psicologo_horas_semanales').val(), $('#dotacion_012_sel_psicologo_horas_semanales_pjud').val(),
                "dotacion_psicologo");
        }
        if (
            $('#dotacion_014_sel_enfermero_cantidad option:selected').text() != $('#dotacion_014_sel_enfermero_cantidad_pjud option:selected').text() ||
            $('#dotacion_013_sel_enfermero_existe option:selected').text() != $('#dotacion_013_sel_enfermero_existe_pjud option:selected').text() ||
            $('#dotacion_015_sel_enfermero_tipo_jornada option:selected').text() != $('#dotacion_015_sel_enfermero_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_016_sel_enfermero_horas_semanales').val() != $('#dotacion_016_sel_enfermero_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_013_sel_enfermero_existe option:selected').text(), $('#dotacion_013_sel_enfermero_existe_pjud option:selected').text(),
                $('#dotacion_014_sel_enfermero_cantidad option:selected').text(), $('#dotacion_014_sel_enfermero_cantidad_pjud option:selected').text(),
                $('#dotacion_015_sel_enfermero_tipo_jornada option:selected').text(), $('#dotacion_015_sel_enfermero_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_016_sel_enfermero_horas_semanales').val(), $('#dotacion_016_sel_enfermero_horas_semanales_pjud').val(),
                "dotacion_enfermero");
        }
        if (
            $('#dotacion_018_sel_auxenfermero_cantidad option:selected').text() != $('#dotacion_018_sel_auxenfermero_cantidad_pjud option:selected').text() ||
            $('#dotacion_017_sel_auxenfermero_existe option:selected').text() != $('#dotacion_017_sel_auxenfermero_existe_pjud option:selected').text() ||
            $('#dotacion_019_sel_auxenfermero_tipo_jornada option:selected').text() != $('#dotacion_019_sel_auxenfermero_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_020_sel_auxenfermero_horas_semanales').val() != $('#dotacion_020_sel_auxenfermero_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_017_sel_auxenfermero_existe option:selected').text(), $('#dotacion_017_sel_auxenfermero_existe_pjud option:selected').text(),
                $('#dotacion_018_sel_auxenfermero_cantidad option:selected').text(), $('#dotacion_018_sel_auxenfermero_cantidad_pjud option:selected').text(),
                $('#dotacion_019_sel_auxenfermero_tipo_jornada option:selected').text(), $('#dotacion_019_sel_auxenfermero_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_020_sel_auxenfermero_horas_semanales').val(), $('#dotacion_020_sel_auxenfermero_horas_semanales_pjud').val(),
                "dotacion_auxenfermeria");
        }
        if (
            $('#dotacion_021_sel_medico_existe option:selected').text() != $('#dotacion_021_sel_medico_existe_pjud option:selected').text() ||
            $('#dotacion_022_sel_medico_cantidad option:selected').text() != $('#dotacion_022_sel_medico_cantidad_pjud option:selected').text() ||
            $('#dotacion_023_sel_medico_tipo_jornada option:selected').text() != $('#dotacion_023_sel_medico_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_024_sel_medico_horas_semanales').val() != $('#dotacion_024_sel_medico_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_021_sel_medico_existe option:selected').text(), $('#dotacion_021_sel_medico_existe_pjud option:selected').text(),
                $('#dotacion_022_sel_medico_cantidad option:selected').text(), $('#dotacion_022_sel_medico_cantidad_pjud option:selected').text(),
                $('#dotacion_023_sel_medico_tipo_jornada option:selected').text(), $('#dotacion_023_sel_medico_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_024_sel_medico_horas_semanales').val(), $('#dotacion_024_sel_medico_horas_semanales_pjud').val(),
                "dotacion_medico");
        }
        if (
            $('#dotacion_025_sel_psiquiatra_existe option:selected').text() != $('#dotacion_025_sel_psiquiatra_existe_pjud option:selected').text() ||
            $('#dotacion_026_sel_psiquiatra_cantidad option:selected').text() != $('#dotacion_026_sel_psiquiatra_cantidad_pjud option:selected').text() ||
            $('#dotacion_027_sel_psiquiatra_tipo_jornada option:selected').text() != $('#dotacion_027_sel_psiquiatra_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_028_sel_psiquiatra_horas_semanales').val() != $('#dotacion_028_sel_psiquiatra_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_025_sel_psiquiatra_existe option:selected').text(), $('#dotacion_025_sel_psiquiatra_existe_pjud option:selected').text(),
                $('#dotacion_026_sel_psiquiatra_cantidad option:selected').text(), $('#dotacion_026_sel_psiquiatra_cantidad_pjud option:selected').text(),
                $('#dotacion_027_sel_psiquiatra_tipo_jornada option:selected').text(), $('#dotacion_027_sel_psiquiatra_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_028_sel_psiquiatra_horas_semanales').val(), $('#dotacion_028_sel_psiquiatra_horas_semanales_pjud').val(),
                "dotacion_psiquiatra");
        }
        if (
            $('#dotacion_029_sel_terapeuta_ocup_existe option:selected').text() != $('#dotacion_029_sel_terapeuta_ocup_existe_pjud option:selected').text() ||
            $('#dotacion_030_sel_terapeuta_ocup_cantidad option:selected').text() != $('#dotacion_030_sel_terapeuta_ocup_cantidad_pjud option:selected').text() ||
            $('#dotacion_031_sel_terapeuta_ocup_tipo_jornada option:selected').text() != $('#dotacion_031_sel_terapeuta_ocup_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_032_sel_terapeuta_ocup_horas_semanales').val() != $('#dotacion_032_sel_terapeuta_ocup_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_029_sel_terapeuta_ocup_existe option:selected').text(), $('#dotacion_029_sel_terapeuta_ocup_existe_pjud option:selected').text(),
                $('#dotacion_030_sel_terapeuta_ocup_cantidad option:selected').text(), $('#dotacion_030_sel_terapeuta_ocup_cantidad_pjud option:selected').text(),
                $('#dotacion_031_sel_terapeuta_ocup_tipo_jornada option:selected').text(), $('#dotacion_031_sel_terapeuta_ocup_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_032_sel_terapeuta_ocup_horas_semanales').val(), $('#dotacion_032_sel_terapeuta_ocup_horas_semanales_pjud').val(),
                "dotacion_terapeutaOcupacional");
        }
        if (
            $('#dotacion_033_sel_kinesiologo_existe option:selected').text() != $('#dotacion_033_sel_kinesiologo_existe_pjud option:selected').text() ||
            $('#dotacion_034_sel_kinesiologo_cantidad option:selected').text() != $('#dotacion_034_sel_kinesiologo_cantidad_pjud option:selected').text() ||
            $('#dotacion_035_sel_kinesiologo_tipo_jornada option:selected').text() != $('#dotacion_035_sel_kinesiologo_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_036_sel_kinesiologo_horas_semanales').val() != $('#dotacion_036_sel_kinesiologo_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_033_sel_kinesiologo_existe option:selected').text(), $('#dotacion_033_sel_kinesiologo_existe_pjud option:selected').text(),
                $('#dotacion_034_sel_kinesiologo_cantidad option:selected').text(), $('#dotacion_034_sel_kinesiologo_cantidad_pjud option:selected').text(),
                $('#dotacion_035_sel_kinesiologo_tipo_jornada option:selected').text(), $('#dotacion_035_sel_kinesiologo_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_036_sel_kinesiologo_horas_semanales').val(), $('#dotacion_036_sel_kinesiologo_horas_semanales_pjud').val(),
                "dotacion_Kinesiologo");
        }
        if (
            $('#dotacion_037_sel_nutricionista_existe option:selected').text() != $('#dotacion_037_sel_nutricionista_existe_pjud option:selected').text() ||
            $('#dotacion_038_sel_nutricionista_cantidad option:selected').text() != $('#dotacion_038_sel_nutricionista_cantidad_pjud option:selected').text() ||
            $('#dotacion_039_sel_nutricionista_tipo_jornada option:selected').text() != $('#dotacion_039_sel_nutricionista_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_040_sel_nutricionista_horas_semanales').val() != $('#dotacion_040_sel_nutricionista_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_037_sel_nutricionista_existe option:selected').text(), $('#dotacion_037_sel_nutricionista_existe_pjud option:selected').text(),
                $('#dotacion_038_sel_nutricionista_cantidad option:selected').text(), $('#dotacion_038_sel_nutricionista_cantidad_pjud option:selected').text(),
                $('#dotacion_039_sel_nutricionista_tipo_jornada option:selected').text(), $('#dotacion_039_sel_nutricionista_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_040_sel_nutricionista_horas_semanales').val(), $('#dotacion_040_sel_nutricionista_horas_semanales_pjud').val(),
                "dotacion_Nutricionista");
        }
        if (
            $('#dotacion_041_sel_fonoaudiologo_existe option:selected').text() != $('#dotacion_041_sel_fonoaudiologo_existe_pjud option:selected').text() ||
            $('#dotacion_042_sel_fonoaudiologo_cantidad option:selected').text() != $('#dotacion_042_sel_fonoaudiologo_cantidad_pjud option:selected').text() ||
            $('#dotacion_043_sel_fonoaudiologo_tipo_jornada option:selected').text() != $('#dotacion_043_sel_fonoaudiologo_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_044_sel_fonoaudiologo_horas_semanales').val() != $('#dotacion_044_sel_fonoaudiologo_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_041_sel_fonoaudiologo_existe option:selected').text(), $('#dotacion_041_sel_fonoaudiologo_existe_pjud option:selected').text(),
                $('#dotacion_042_sel_fonoaudiologo_cantidad option:selected').text(), $('#dotacion_042_sel_fonoaudiologo_cantidad_pjud option:selected').text(),
                $('#dotacion_043_sel_fonoaudiologo_tipo_jornada option:selected').text(), $('#dotacion_043_sel_fonoaudiologo_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_044_sel_fonoaudiologo_horas_semanales').val(), $('#dotacion_044_sel_fonoaudiologo_horas_semanales_pjud').val(),
                "dotacion_Fonoaudiologo");
        }
        if (
            $('#dotacion_045_sel_profesorEducaFisica_existe option:selected').text() != $('#dotacion_045_sel_profesorEducaFisica_existe_pjud option:selected').text() ||
            $('#dotacion_046_sel_profesorEducaFisica_cantidad option:selected').text() != $('#dotacion_046_sel_profesorEducaFisica_cantidad_pjud option:selected').text() ||
            $('#dotacion_047_sel_profesorEducaFisica_tipo_jornada option:selected').text() != $('#dotacion_047_sel_profesorEducaFisica_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_048_sel_profesorEducaFisica_horas_semanales').val() != $('#dotacion_048_sel_profesorEducaFisica_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_045_sel_profesorEducaFisica_existe option:selected').text(), $('#dotacion_045_sel_profesorEducaFisica_existe_pjud option:selected').text(),
                $('#dotacion_046_sel_profesorEducaFisica_cantidad option:selected').text(), $('#dotacion_046_sel_profesorEducaFisica_cantidad_pjud option:selected').text(),
                $('#dotacion_047_sel_profesorEducaFisica_tipo_jornada option:selected').text(), $('#dotacion_047_sel_profesorEducaFisica_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_048_sel_profesorEducaFisica_horas_semanales').val(), $('#dotacion_048_sel_profesorEducaFisica_horas_semanales_pjud').val(),
                "dotacion_ProfesorEducacionFisica");
        }
        if (
            $('#dotacion_049_sel_psicopedagogo_existe option:selected').text() != $('#dotacion_049_sel_psicopedagogo_existe_pjud option:selected').text() ||
            $('#dotacion_050_sel_psicopedagogo_cantidad option:selected').text() != $('#dotacion_050_sel_psicopedagogo_cantidad_pjud option:selected').text() ||
            $('#dotacion_051_sel_psicopedagogo_tipo_jornada option:selected').text() != $('#dotacion_051_sel_psicopedagogo_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_052_sel_psicopedagogo_horas_semanales').val() != $('#dotacion_052_sel_psicopedagogo_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_049_sel_psicopedagogo_existe option:selected').text(), $('#dotacion_049_sel_psicopedagogo_existe_pjud option:selected').text(),
                $('#dotacion_050_sel_psicopedagogo_cantidad option:selected').text(), $('#dotacion_050_sel_psicopedagogo_cantidad_pjud option:selected').text(),
                $('#dotacion_051_sel_psicopedagogo_tipo_jornada option:selected').text(), $('#dotacion_051_sel_psicopedagogo_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_052_sel_psicopedagogo_horas_semanales').val(), $('#dotacion_052_sel_psicopedagogo_horas_semanales_pjud').val(),
                "dotacion_Psicopedagogo");
        }
        if (
            $('#dotacion_053_sel_educadoraParvulos_existe option:selected').text() != $('#dotacion_053_sel_educadoraParvulos_existe_pjud option:selected').text() ||
            $('#dotacion_054_sel_educadoraParvulos_cantidad option:selected').text() != $('#dotacion_054_sel_educadoraParvulos_cantidad_pjud option:selected').text() ||
            $('#dotacion_055_sel_educadoraParvulos_tipo_jornada option:selected').text() != $('#dotacion_055_sel_educadoraParvulos_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_056_sel_educadoraParvulos_horas_semanales').val() != $('#dotacion_056_sel_educadoraParvulos_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_053_sel_educadoraParvulos_existe option:selected').text(), $('#dotacion_053_sel_educadoraParvulos_existe_pjud option:selected').text(),
                $('#dotacion_054_sel_educadoraParvulos_cantidad option:selected').text(), $('#dotacion_054_sel_educadoraParvulos_cantidad_pjud option:selected').text(),
                $('#dotacion_055_sel_educadoraParvulos_tipo_jornada option:selected').text(), $('#dotacion_055_sel_educadoraParvulos_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_056_sel_educadoraParvulos_horas_semanales').val(), $('#dotacion_056_sel_educadoraParvulos_horas_semanales_pjud').val(),
                "dotacion_EducadoraParvulos");
        }
        if (
            $('#dotacion_057_sel_educadoraTratoDirecto_existe option:selected').text() != $('#dotacion_057_sel_educadoraTratoDirecto_existe_pjud option:selected').text() ||
            $('#dotacion_058_sel_educadoraTratoDirecto_cantidad option:selected').text() != $('#dotacion_058_sel_educadoraTratoDirecto_cantidad_pjud option:selected').text() ||
            $('#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada option:selected').text() != $('#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_060_sel_educadoraTratoDirecto_horas_semanales').val() != $('#dotacion_060_sel_educadoraTratoDirecto_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_057_sel_educadoraTratoDirecto_existe option:selected').text(), $('#dotacion_057_sel_educadoraTratoDirecto_existe_pjud option:selected').text(),
                $('#dotacion_058_sel_educadoraTratoDirecto_cantidad option:selected').text(), $('#dotacion_058_sel_educadoraTratoDirecto_cantidad_pjud option:selected').text(),
                $('#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada option:selected').text(), $('#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_060_sel_educadoraTratoDirecto_horas_semanales').val(), $('#dotacion_060_sel_educadoraTratoDirecto_horas_semanales_pjud').val(),
                "dotacion_EducadorTratoDirecto");
        }
        if (
            $('#dotacion_061_sel_manipuladorAlimentos_existe option:selected').text() != $('#dotacion_061_sel_manipuladorAlimentos_existe_pjud option:selected').text() ||
            $('#dotacion_062_sel_manipuladorAlimentos_cantidad option:selected').text() != $('#dotacion_062_sel_manipuladorAlimentos_cantidad_pjud option:selected').text() ||
            $('#dotacion_063_sel_manipuladorAlimentos_tipo_jornada option:selected').text() != $('#dotacion_063_sel_manipuladorAlimentos_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_064_sel_manipuladorAlimentos_horas_semanales').val() != $('#dotacion_064_sel_manipuladorAlimentos_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_061_sel_manipuladorAlimentos_existe option:selected').text(), $('#dotacion_061_sel_manipuladorAlimentos_existe_pjud option:selected').text(),
                $('#dotacion_062_sel_manipuladorAlimentos_cantidad option:selected').text(), $('#dotacion_062_sel_manipuladorAlimentos_cantidad_pjud option:selected').text(),
                $('#dotacion_063_sel_manipuladorAlimentos_tipo_jornada option:selected').text(), $('#dotacion_063_sel_manipuladorAlimentos_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_064_sel_manipuladorAlimentos_horas_semanales').val(), $('#dotacion_064_sel_manipuladorAlimentos_horas_semanales_pjud').val(),
                "dotacion_ManipuladorAlimentos");
        }
        if (
            $('#dotacion_065_sel_apoyoAdministrativo_existe option:selected').text() != $('#dotacion_065_sel_apoyoAdministrativo_existe_pjud option:selected').text() ||
            $('#dotacion_066_sel_apoyoAdministrativo_cantidad option:selected').text() != $('#dotacion_066_sel_apoyoAdministrativo_cantidad_pjud option:selected').text() ||
            $('#dotacion_067_sel_apoyoAdministrativo_tipo_jornada option:selected').text() != $('#dotacion_067_sel_apoyoAdministrativo_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_068_sel_apoyoAdministrativo_horas_semanales').val() != $('#dotacion_068_sel_apoyoAdministrativo_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_065_sel_apoyoAdministrativo_existe option:selected').text(), $('#dotacion_065_sel_apoyoAdministrativo_existe_pjud option:selected').text(),
                $('#dotacion_066_sel_apoyoAdministrativo_cantidad option:selected').text(), $('#dotacion_066_sel_apoyoAdministrativo_cantidad_pjud option:selected').text(),
                $('#dotacion_067_sel_apoyoAdministrativo_tipo_jornada option:selected').text(), $('#dotacion_067_sel_apoyoAdministrativo_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_068_sel_apoyoAdministrativo_horas_semanales').val(), $('#dotacion_068_sel_apoyoAdministrativo_horas_semanales_pjud').val(),
                "dotacion_ApoyoAdministrativo");
        }
        if (
            $('#dotacion_069_sel_personalAseo_existe option:selected').text() != $('#dotacion_069_sel_personalAseo_existe_pjud option:selected').text() ||
            $('#dotacion_070_sel_personalAseo_cantidad option:selected').text() != $('#dotacion_070_sel_personalAseo_cantidad_pjud option:selected').text() ||
            $('#dotacion_071_sel_personalAseo_tipo_jornada option:selected').text() != $('#dotacion_071_sel_personalAseo_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_072_sel_personalAseo_horas_semanales').val() != $('#dotacion_072_sel_personalAseo_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_069_sel_personalAseo_existe option:selected').text(), $('#dotacion_069_sel_personalAseo_existe_pjud option:selected').text(),
                $('#dotacion_070_sel_personalAseo_cantidad option:selected').text(), $('#dotacion_070_sel_personalAseo_cantidad_pjud option:selected').text(),
                $('#dotacion_071_sel_personalAseo_tipo_jornada option:selected').text(), $('#dotacion_071_sel_personalAseo_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_072_sel_personalAseo_horas_semanales').val(), $('#dotacion_072_sel_personalAseo_horas_semanales_pjud').val(),
                "dotacion_PersonalAseo");
        }
        if (
            $('#dotacion_073_sel_personalLavanderia_existe option:selected').text() != $('#dotacion_073_sel_personalLavanderia_existe_pjud option:selected').text() ||
            $('#dotacion_074_sel_personalLavandería_cantidad option:selected').text() != $('#dotacion_074_sel_personalLavandería_cantidad_pjud option:selected').text() ||
            $('#dotacion_075_sel_personalLavandería_tipo_joranada option:selected').text() != $('#dotacion_075_sel_personalLavandería_tipo_joranada_pjud option:selected').text() ||
            $('#dotacion_076_sel_personalLavandería_horas_semanales').val() != $('#dotacion_076_sel_personalLavandería_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_073_sel_personalLavanderia_existe option:selected').text(), $('#dotacion_073_sel_personalLavanderia_existe_pjud option:selected').text(),
                $('#dotacion_074_sel_personalLavandería_cantidad option:selected').text(), $('#dotacion_074_sel_personalLavandería_cantidad_pjud option:selected').text(),
                $('#dotacion_075_sel_personalLavandería_tipo_joranada option:selected').text(), $('#dotacion_075_sel_personalLavandería_tipo_joranada_pjud option:selected').text(),
                $('#dotacion_076_sel_personalLavandería_horas_semanales').val(), $('#dotacion_076_sel_personalLavandería_horas_semanales_pjud').val(),
                "dotacion_PersonalLavanderia");
        }
        if (
            $('#dotacion_077_sel_monitoresTalleristas_existe option:selected').text() != $('#dotacion_077_sel_monitoresTalleristas_existe_pjud option:selected').text() ||
            $('#dotacion_078_sel_monitoresTalleristas_cantidad option:selected').text() != $('#dotacion_078_sel_monitoresTalleristas_cantidad_pjud option:selected').text() ||
            $('#dotacion_079_sel_monitoresTalleristas_tipo_jornada option:selected').text() != $('#dotacion_079_sel_monitoresTalleristas_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_080_sel_monitoresTalleristas_horas_semanales').val() != $('#dotacion_080_sel_monitoresTalleristas_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_077_sel_monitoresTalleristas_existe option:selected').text(), $('#dotacion_077_sel_monitoresTalleristas_existe_pjud option:selected').text(),
                $('#dotacion_078_sel_monitoresTalleristas_cantidad option:selected').text(), $('#dotacion_078_sel_monitoresTalleristas_cantidad_pjud option:selected').text(),
                $('#dotacion_079_sel_monitoresTalleristas_tipo_jornada option:selected').text(), $('#dotacion_079_sel_monitoresTalleristas_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_080_sel_monitoresTalleristas_horas_semanales').val(), $('#dotacion_080_sel_monitoresTalleristas_horas_semanales_pjud').val(),
                "dotacion_MonitoresTalleristas");
        }
        if (
            $('#dotacion_081_sel_alumnosPractica_existe option:selected').text() != $('#dotacion_081_sel_alumnosPractica_existe_pjud option:selected').text() ||
            $('#dotacion_082_sel_alumnosPractica_cantidad option:selected').text() != $('#dotacion_082_sel_alumnosPractica_cantidad_pjud option:selected').text() ||
            $('#dotacion_083_sel_alumnosPractica_tipo_jornada option:selected').text() != $('#dotacion_083_sel_alumnosPractica_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_084_sel_alumnosPractica_horas_semanales').val() != $('#dotacion_084_sel_alumnosPractica_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_081_sel_alumnosPractica_existe option:selected').text(), $('#dotacion_081_sel_alumnosPractica_existe_pjud option:selected').text(),
                $('#dotacion_082_sel_alumnosPractica_cantidad option:selected').text(), $('#dotacion_082_sel_alumnosPractica_cantidad_pjud option:selected').text(),
                $('#dotacion_083_sel_alumnosPractica_tipo_jornada option:selected').text(), $('#dotacion_083_sel_alumnosPractica_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_084_sel_alumnosPractica_horas_semanales').val(), $('#dotacion_084_sel_alumnosPractica_horas_semanales_pjud').val(),
                "dotacion_AlumnosPractica");
        }
        if (
            $('#dotacion_085_sel_apoyoVoluntario_existe option:selected').text() != $('#dotacion_085_sel_apoyoVoluntario_existe_pjud option:selected').text() ||
            $('#dotacion_086_sel_apoyoVoluntario_cantidad option:selected').text() != $('#dotacion_086_sel_apoyoVoluntario_cantidad_pjud option:selected').text() ||
            $('#dotacion_087_sel_apoyoVoluntario_tipo_jornada option:selected').text() != $('#dotacion_087_sel_apoyoVoluntario_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_088_sel_apoyoVoluntario_horas_semanales').val() != $('#dotacion_088_sel_apoyoVoluntario_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_085_sel_apoyoVoluntario_existe option:selected').text(), $('#dotacion_085_sel_apoyoVoluntario_existe_pjud option:selected').text(),
                $('#dotacion_086_sel_apoyoVoluntario_cantidad option:selected').text(), $('#dotacion_086_sel_apoyoVoluntario_cantidad_pjud option:selected').text(),
                $('#dotacion_087_sel_apoyoVoluntario_tipo_jornada option:selected').text(), $('#dotacion_087_sel_apoyoVoluntario_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_088_sel_apoyoVoluntario_horas_semanales').val(), $('#dotacion_088_sel_apoyoVoluntario_horas_semanales_pjud').val(),
                "dotacion_ApoyoVoluntario");
        }
        if (
            $('#dotacion_089_sel_Otros_existe option:selected').text() != $('#dotacion_089_sel_Otros_existe_pjud option:selected').text() ||
            $('#dotacion_090_sel_Otros_cantidad option:selected').text() != $('#dotacion_090_sel_Otros_cantidad_pjud option:selected').text() ||
            $('#dotacion_091_sel_Otros_tipo_jornada option:selected').text() != $('#dotacion_091_sel_Otros_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_092_sel_Otros_horas_semanales').val() != $('#dotacion_092_sel_Otros_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_089_sel_Otros_existe option:selected').text(), $('#dotacion_089_sel_Otros_existe_pjud option:selected').text(),
                $('#dotacion_090_sel_Otros_cantidad option:selected').text(), $('#dotacion_090_sel_Otros_cantidad_pjud option:selected').text(),
                $('#dotacion_091_sel_Otros_tipo_jornada option:selected').text(), $('#dotacion_091_sel_Otros_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_092_sel_Otros_horas_semanales').val(), $('#dotacion_092_sel_Otros_horas_semanales_pjud').val(),
                "dotacion_Otros");
        }
        if (
            $('#dotacion_093_sel_PersonalLicenciaMedica_existe option:selected').text() != $('#dotacion_093_sel_PersonalLicenciaMedica_existe_pjud option:selected').text() ||
            $('#dotacion_094_sel_PersonalLicenciaMedica_cantidad option:selected').text() != $('#dotacion_094_sel_PersonalLicenciaMedica_cantidad_pjud option:selected').text() ||
            $('#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada option:selected').text() != $('#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales').val() != $('#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_093_sel_PersonalLicenciaMedica_existe option:selected').text(), $('#dotacion_093_sel_PersonalLicenciaMedica_existe_pjud option:selected').text(),
                $('#dotacion_094_sel_PersonalLicenciaMedica_cantidad option:selected').text(), $('#dotacion_094_sel_PersonalLicenciaMedica_cantidad_pjud option:selected').text(),
                $('#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada option:selected').text(), $('#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales').val(), $('#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_pjud').val(),
                "dotacion_PersonalLicenciaMedica");
        }
        if (
            $('#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe option:selected').text() != $('#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_pjud option:selected').text() ||
            $('#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad option:selected').text() != $('#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_pjud option:selected').text() ||
            $('#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada option:selected').text() != $('#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_pjud option:selected').text() ||
            $('#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales').val() != $('#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_pjud').val()
            ) {
            _antecedentesDotacionPersonal = _antecedentesDotacionPersonal + RenderTBL_AntecedentesPoblacion(
                $('#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe option:selected').text(), $('#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_pjud option:selected').text(),
                $('#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad option:selected').text(), $('#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_pjud option:selected').text(),
                $('#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada option:selected').text(), $('#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_pjud option:selected').text(),
                $('#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales').val(), $('#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_pjud').val(),
                "dotacion_PersonalSuplente");
        }
        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";

        if (_antecedentesDotacionPersonal != "") {
            _antecedentesDotacionPersonal = tbl_c_antecedentesDotacionPersonal.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesDotacionPersonal })
        }
        if ((_antecedentesDotacionPersonal) != "") {
            $("#DivFichaComparativo03").html("<br />" + _antecedentesDotacionPersonal);
            $("#div_compara_antecedentes_dotacion").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_dotacion").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa4() {
    var _antecedentesInfraestructura= "";

    if ((infraestructura_residencia && infraestructura_pjud)) {
        //ANTECEDENTES INFRAESTRUCTURA
        if (
            $('#Infraest_002_ofi_admin_cantidad').val() != $('#Infraest_002_ofi_admin_cantidad_pjud').val() ||
            $('#Infraest_001_ofi_admin_existe option:selected').text() != $('#Infraest_001_ofi_admin_existe_pjud option:selected').text() 
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_001_ofi_admin_existe option:selected').text(), $('#Infraest_001_ofi_admin_existe_pjud option:selected').text(),
                $('#Infraest_002_ofi_admin_cantidad').val(), $('#Infraest_002_ofi_admin_cantidad_pjud option:selected').val(),
                "","","","",
                "infra_cantidadoficina");
        }
        if (
            $('#Infraest_003_salaReuniones_existe option:selected').text() != $('#Infraest_003_salaReuniones_existe_pjud option:selected').text() ||
            $('#Infraest_004_salaReuniones_cantidad').val() != $('#Infraest_004_salaReuniones_cantidad_pjud').val()            
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_003_salaReuniones_existe option:selected').text(), $('#Infraest_003_salaReuniones_existe_pjud option:selected').text(),
                $('#Infraest_004_salaReuniones_cantidad').val(), $('#Infraest_004_salaReuniones_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadsalareuniones");
        }
        if (
            $('#Infraest_005_salaRecepcion_existe option:selected').text() != $('#Infraest_005_salaRecepcion_existe_pjud option:selected').text() ||
            $('#Infraest_006_salaRecepcion_cantidad').val() != $('#Infraest_006_salaRecepcion_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_005_salaRecepcion_existe option:selected').text(), $('#Infraest_005_salaRecepcion_existe_pjud option:selected').text(),
                $('#Infraest_006_salaRecepcion_cantidad').val(), $('#Infraest_006_salaRecepcion_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadsalaRecepcion");
        }
        if (
            $('#Infraest_007_espacioVisitas_existe option:selected').text() != $('#Infraest_007_espacioVisitas_existe_pjud option:selected').text() ||
            $('#Infraest_008_espacioVisitas_cantidad').val() != $('#Infraest_008_espacioVisitas_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_007_espacioVisitas_existe option:selected').text(), $('#Infraest_007_espacioVisitas_existe_pjud option:selected').text(),
                $('#Infraest_008_espacioVisitas_cantidad').val(), $('#Infraest_008_espacioVisitas_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadespacioVisitas");
        }
        if (
            $('#Infraest_009_salaMultiuso_existe option:selected').text() != $('#Infraest_009_salaMultiuso_existe_pjud option:selected').text() ||
            $('#Infraest_010_salaMultiuso_cantidad').val() != $('#Infraest_010_salaMultiuso_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_009_salaMultiuso_existe option:selected').text(), $('#Infraest_009_salaMultiuso_existe_pjud option:selected').text(),
                $('#Infraest_010_salaMultiuso_cantidad').val(), $('#Infraest_010_salaMultiuso_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadsalaMultiuso");
        }
        if (
            $('#Infraest_011_salaEstar_existe option:selected').text() != $('#Infraest_011_salaEstar_existe_pjud option:selected').text() ||
            $('#Infraest_012_salaEstar_cantidad').val() != $('#Infraest_012_salaEstar_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_011_salaEstar_existe option:selected').text(), $('#Infraest_011_salaEstar_existe_pjud option:selected').text(),
                $('#Infraest_012_salaEstar_cantidad').val(), $('#Infraest_012_salaEstar_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadsalaEstar");
        }
        if (
            $('#Infraest_013_enfermeria_existe option:selected').text() != $('#Infraest_013_enfermeria_existe_pjud option:selected').text() ||
            $('#Infraest_014_enfermeria_cantidad').val() != $('#Infraest_014_enfermeria_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_013_enfermeria_existe option:selected').text(), $('#Infraest_013_enfermeria_existe_pjud option:selected').text(),
                $('#Infraest_014_enfermeria_cantidad').val(), $('#Infraest_014_enfermeria_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadenfermeria");
        }
        if (
            $('#Infraest_015_espacioRecreacional_existe option:selected').text() != $('#Infraest_015_espacioRecreacional_existe_pjud option:selected').text() ||
            $('#Infraest_016_espacioRecreacional_cantidad').val() != $('#Infraest_016_espacioRecreacional_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_015_espacioRecreacional_existe option:selected').text(), $('#Infraest_015_espacioRecreacional_existe_pjud option:selected').text(),
                $('#Infraest_016_espacioRecreacional_cantidad').val(), $('#Infraest_016_espacioRecreacional_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadespacioRecreacional");
        }
        if (
            $('#Infraest_019_areasVerdes_existe option:selected').text() != $('#Infraest_019_areasVerdes_existe_pjud option:selected').text() ||
            $('#Infraest_020_areasVerdes_cantidad').val() != $('#Infraest_020_areasVerdes_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_019_areasVerdes_existe option:selected').text(), $('#Infraest_019_areasVerdes_existe_pjud option:selected').text(),
                $('#Infraest_020_areasVerdes_cantidad').val(), $('#Infraest_020_areasVerdes_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadareasVerdes");
        }
        if (
            $('#Infraest_021_cocina_existe option:selected').text() != $('#Infraest_021_cocina_existe_pjud option:selected').text() ||
            $('#Infraest_022_cocina_cantidad').val() != $('#Infraest_022_cocina_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_021_cocina_existe option:selected').text(), $('#Infraest_021_cocina_existe_pjud option:selected').text(),
                $('#Infraest_022_cocina_cantidad').val(), $('#Infraest_022_cocina_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadcocina");
        }
        if (
            $('#Infraest_023_comedor_existe option:selected').text() != $('#Infraest_023_comedor_existe_pjud option:selected').text() ||
            $('#Infraest_024_comedor_cantidad').val() != $('#Infraest_024_comedor_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_023_comedor_existe option:selected').text(), $('#Infraest_023_comedor_existe_pjud option:selected').text(),
                $('#Infraest_024_comedor_cantidad').val(), $('#Infraest_024_comedor_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadcomedor");
        }
        if (
            $('#Infraest_025_Lavanderia_existe option:selected').text() != $('#Infraest_025_Lavanderia_existe_pjud option:selected').text() ||
            $('#Infraest_026_Lavanderia_cantidad').val() != $('#Infraest_026_Lavanderia_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_025_Lavanderia_existe option:selected').text(), $('#Infraest_025_Lavanderia_existe_pjud option:selected').text(),
                $('#Infraest_026_Lavanderia_cantidad').val(), $('#Infraest_026_Lavanderia_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadLavanderia");
        }
        if (
            $('#Infraest_027_Dormitorio_existe option:selected').text() != $('#Infraest_027_Dormitorio_existe_pjud option:selected').text() ||
            $('#Infraest_028_Dormitorio_cantidad').val() != $('#Infraest_028_Dormitorio_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_027_Dormitorio_existe option:selected').text(), $('#Infraest_027_Dormitorio_existe_pjud option:selected').text(),
                $('#Infraest_028_Dormitorio_cantidad').val(), $('#Infraest_028_Dormitorio_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadDormitorio");
        }
        if (
            $('#Infraest_029_CamasNNA_existe option:selected').text() != $('#Infraest_029_CamasNNA_existe_pjud option:selected').text() ||
            $('#Infraest_030_CamasNNA_cantidad').val() != $('#Infraest_030_CamasNNA_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_029_CamasNNA_existe option:selected').text(), $('#Infraest_029_CamasNNA_existe_pjud option:selected').text(),
                $('#Infraest_030_CamasNNA_cantidad').val(), $('#Infraest_030_CamasNNA_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadCamasNNA");
        }
        if (
            $('#Infraest_031_closetLocker_existe option:selected').text() != $('#Infraest_031_closetLocker_existe_pjud option:selected').text() ||
            $('#Infraest_032_closetLocker_cantidad').val() != $('#Infraest_032_closetLocker_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_031_closetLocker_existe option:selected').text(), $('#Infraest_031_closetLocker_existe_pjud option:selected').text(),
                $('#Infraest_032_closetLocker_cantidad').val(), $('#Infraest_032_closetLocker_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadclosetLocker");
        }
        if (
            $('#Infraest_033_banosPublico_existe option:selected').text() != $('#Infraest_033_banosPublico_existe_pjud option:selected').text() ||
            $('#Infraest_034_banosPublico_cantidad').val() != $('#Infraest_034_banosPublico_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_033_banosPublico_existe option:selected').text(), $('#Infraest_033_banosPublico_existe_pjud option:selected').text(),
                $('#Infraest_034_banosPublico_cantidad').val(), $('#Infraest_034_banosPublico_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadbanosPublico");
        }
        if (
            $('#Infraest_035_banosNNAadecuados_existe option:selected').text() != $('#Infraest_035_banosNNAadecuados_existe_pjud option:selected').text() ||
            $('#Infraest_036_banosNNAadecuados_cantidad').val() != $('#Infraest_036_banosNNAadecuados_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_035_banosNNAadecuados_existe option:selected').text(), $('#Infraest_035_banosNNAadecuados_existe_pjud option:selected').text(),
                $('#Infraest_036_banosNNAadecuados_cantidad').val(), $('#Infraest_036_banosNNAadecuados_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadbanosNNAadecuados");
        }
        if (
            $('#Infraest_037_duchasNNA_existe option:selected').text() != $('#Infraest_037_duchasNNA_existe_pjud option:selected').text() ||
            $('#Infraest_038_duchasNNA_cantidad').val() != $('#Infraest_038_duchasNNA_cantidad_pjud').val()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_037_duchasNNA_existe option:selected').text(), $('#Infraest_037_duchasNNA_existe_pjud option:selected').text(),
                $('#Infraest_038_duchasNNA_cantidad').val(), $('#Infraest_038_duchasNNA_cantidad_pjud').val(),
                "", "", "", "",
                "infra_cantidadduchasNNA");
        }

        if (
            $('#Infraest_039_ambientacionAcorde_existe option:selected').text() != $('#Infraest_039_ambientacionAcorde_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_039_ambientacionAcorde_existe option:selected').text(), $('#Infraest_039_ambientacionAcorde_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_ambientacionAcorde");
        }
        if (
            $('#Infraest_040_vestuarioAdecuado_existe option:selected').text() != $('#Infraest_040_vestuarioAdecuado_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_040_vestuarioAdecuado_existe option:selected').text(), $('#Infraest_040_vestuarioAdecuado_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_vestuarioAdecuado");
        }
        if (
            $('#Infraest_041_utilesAseoPersonalNNA_existe option:selected').text() != $('#Infraest_041_utilesAseoPersonalNNA_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_041_utilesAseoPersonalNNA_existe option:selected').text(), $('#Infraest_041_utilesAseoPersonalNNA_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_utilesAseoPersonalNNA");
        }
        if (
            $('#Infraest_042_aguaCaliente_existe option:selected').text() != $('#Infraest_042_aguaCaliente_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_042_aguaCaliente_existe option:selected').text(), $('#Infraest_042_aguaCaliente_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_aguaCaliente");
        }
        if (
            $('#Infraest_043_estadoCalefonLlavesGas_existe option:selected').text() != $('#Infraest_043_estadoCalefonLlavesGas_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_043_estadoCalefonLlavesGas_existe option:selected').text(), $('#Infraest_043_estadoCalefonLlavesGas_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_estadoCalefonLlavesGas");
        }
        if (
            $('#Infraest_044_sistemaCalefaccion_existe option:selected').text() != $('#Infraest_044_sistemaCalefaccion_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_044_sistemaCalefaccion_existe option:selected').text(), $('#Infraest_044_sistemaCalefaccion_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_sistemaCalefaccion");
        }
        if (
            $('#Infraest_045_ventilacionAdecuada_existe option:selected').text() != $('#Infraest_045_ventilacionAdecuada_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_045_ventilacionAdecuada_existe option:selected').text(), $('#Infraest_045_ventilacionAdecuada_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_ventilacionAdecuada");
        }
        if (
            $('#Infraest_046_AccesoDiscapacitados_existe option:selected').text() != $('#Infraest_046_AccesoDiscapacitados_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_046_AccesoDiscapacitados_existe option:selected').text(), $('#Infraest_046_AccesoDiscapacitados_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_AccesoDiscapacitados");
        }
        if (
            $('#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe option:selected').text() != $('#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud option:selected').text()
        ) {
            _antecedentesInfraestructura = _antecedentesInfraestructura + RenderTBL_AntecedentesPoblacion(
                $('#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe option:selected').text(), $('#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "infra_InstalacionesHabilitadasDiscapacitados");
        }
        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";
        if (_antecedentesInfraestructura != "") {
            _antecedentesInfraestructura = tbl_c_antecedentesInfraestructura.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesInfraestructura })
        }
        if ((_antecedentesInfraestructura) != "") {
            $("#DivFichaComparativo04").html("<br />" + _antecedentesInfraestructura);
            $("#div_compara_antecedentes_infraestructura").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_infraestructura").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa5() {
    var _antecedentesSeguridad = "";

    if ((seguridad_residencia && seguridad_pjud)) {
        //ANTECEDENTES SEGURIDAD
        if (
            $('#seguridad_001_planEmergencia_existe option:selected').text() != $('#seguridad_001_planEmergencia_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_001_planEmergencia_existe option:selected').text(), $('#seguridad_001_planEmergencia_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_PlanEmergencia");
        }
        if (
            $('#seguridad_002_simulacroEmergencia_existe option:selected').text() != $('#seguridad_002_simulacroEmergencia_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_002_simulacroEmergencia_existe option:selected').text(), $('#seguridad_002_simulacroEmergencia_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_SimulacroEmergencia");
        }
        if (
            $('#seguridad_003_planEmergenciaVisado_existe option:selected').text() != $('#seguridad_003_planEmergenciaVisado_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_003_planEmergenciaVisado_existe option:selected').text(), $('#seguridad_003_planEmergenciaVisado_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_PlanEmergenciaVisado");
        }
        if (
            $('#seguridad_004_extintores_existe option:selected').text() != $('#seguridad_004_extintores_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_004_extintores_existe option:selected').text(), $('#seguridad_004_extintores_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_Extintores");
        }
        if (
            $('#seguridad_005_senaletica_existe option:selected').text() != $('#seguridad_005_senaletica_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_005_senaletica_existe option:selected').text(), $('#seguridad_005_senaletica_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_Senaletica");
        }
        if (
            $('#seguridad_006_viaEvacuacion_existe option:selected').text() != $('#seguridad_006_viaEvacuacion_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_006_viaEvacuacion_existe option:selected').text(), $('#seguridad_006_viaEvacuacion_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_ViasEvacuacion");
        }
        if (
            $('#seguridad_007_capacitacionPersonal_existe option:selected').text() != $('#seguridad_007_capacitacionPersonal_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_007_capacitacionPersonal_existe option:selected').text(), $('#seguridad_007_capacitacionPersonal_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_CapacitacionPersonalEmergencia");
        }
        if (
            $('#seguridad_008_sanitizacion_existe option:selected').text() != $('#seguridad_008_sanitizacion_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_008_sanitizacion_existe option:selected').text(), $('#seguridad_008_sanitizacion_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_Sanitizacion");
        }
        if (
            $('#seguridad_009_sistemaElectrico_existe option:selected').text() != $('#seguridad_009_sistemaElectrico_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_009_sistemaElectrico_existe option:selected').text(), $('#seguridad_009_sistemaElectrico_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_SistemaElectrico");
        }
        if (
            $('#seguridad_010_zonaSeguridad_existe option:selected').text() != $('#seguridad_010_zonaSeguridad_existe_pjud option:selected').text()
        ) {
            _antecedentesSeguridad = _antecedentesSeguridad + RenderTBL_AntecedentesPoblacion(
                $('#seguridad_010_zonaSeguridad_existe option:selected').text(), $('#seguridad_010_zonaSeguridad_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "seguridad_ZonaSeguridad");
        }

        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";
        if (_antecedentesSeguridad != "") {
            _antecedentesSeguridad = tbl_c_antecedentesSeguridad.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesSeguridad })
        }
        if ((_antecedentesSeguridad) != "") {
            $("#DivFichaComparativo05").html("<br />" + _antecedentesSeguridad);
            $("#div_compara_antecedentes_seguridad").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_seguridad").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa6() {
    var _antecedentesSalud = "";

    if ((salud_residencia && salud_pjud)) {
        //ANTECEDENTES SALUD
        if (
            $('#salud_001_NNA_inscritosCESFAM').val() != $('#salud_001_NNA_inscritosCESFAM_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_001_NNA_inscritosCESFAM').val(), $('#salud_001_NNA_inscritosCESFAM_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_InscritosCESFAM");
        }
        if (
            $('#salud_002_NNA_problematicaSaludMental').val() != $('#salud_002_NNA_problematicaSaludMental_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_002_NNA_problematicaSaludMental').val(), $('#salud_002_NNA_problematicaSaludMental_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_problematicaSaludMental");
        }
        if (
            $('#salud_004_NNA_inscritosEnferCronica').val() != $('#salud_004_NNA_inscritosEnferCronica_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_004_NNA_inscritosEnferCronica').val(), $('#salud_004_NNA_inscritosEnferCronica_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_inscritosEnferCronica");
        }
        if (
            $('#salud_005_NNA_Discapacidad').val() != $('#salud_005_NNA_Discapacidad_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_005_NNA_Discapacidad').val(), $('#salud_005_NNA_Discapacidad_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_Discapacidad");
        }
        if (
            $('#salud_006_NNA_inscritosProblemSaludRecibeMedica').val() != $('#salud_006_NNA_inscritosProblemSaludRecibeMedica_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_006_NNA_inscritosProblemSaludRecibeMedica').val(), $('#salud_006_NNA_inscritosProblemSaludRecibeMedica_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_inscritosProblemSaludRecibeMedica");
        }
        if (
            $('#salud_007_NNA_problematicaSaludenTratamiento').val() != $('#salud_007_NNA_problematicaSaludenTratamiento_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_007_NNA_problematicaSaludenTratamiento').val(), $('#salud_007_NNA_problematicaSaludenTratamiento_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_problematicaSaludenTratamiento");
        }
        if (
            $('#salud_008_NNA_consumoDrogas').val() != $('#salud_008_NNA_consumoDrogas_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_008_NNA_consumoDrogas').val(), $('#salud_008_NNA_consumoDrogas_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_consumoDrogas");
        }


        if (
            $('#salud_009_sel_registroMedicamentoAdmin_a_NNA option:selected').text() != $('#salud_009_sel_registroMedicamentoAdmin_a_NNA_pjud option:selected').text()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_009_sel_registroMedicamentoAdmin_a_NNA option:selected').text(), $('#salud_009_sel_registroMedicamentoAdmin_a_NNA_pjud option:selected').text(),
                "", "", "", "", "", "",
                "salud_NNA_RegistroMedicamentos");
        }
        if (
            $('#salud_010_sel_protocoloAdmin_Medica_a_NNA option:selected').text() != $('#salud_010_sel_protocoloAdmin_Medica_a_NNA_pjud option:selected').text()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_010_sel_protocoloAdmin_Medica_a_NNA option:selected').text(), $('#salud_010_sel_protocoloAdmin_Medica_a_NNA_pjud option:selected').text(),
                "", "", "", "", "", "",
                "salud_NNA__protocoloAdmin_Medica");
        }
        if (
            $('#salud_011_sel_control_ginecologicoAdolescente option:selected').text() != $('#salud_011_sel_control_ginecologicoAdolescente_pjud option:selected').text()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_011_sel_control_ginecologicoAdolescente option:selected').text(), $('#salud_011_sel_control_ginecologicoAdolescente_pjud option:selected').text(),
                "", "", "", "", "", "",
                "salud_NNA_control_ginecologicoAdolescente");
        }
        if (
            $('#salud_011_sel_control_ginecologicoAdolescente option:selected').text() != $('#salud_011_sel_control_ginecologicoAdolescente_pjud option:selected').text()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_011_sel_control_ginecologicoAdolescente option:selected').text(), $('#salud_011_sel_control_ginecologicoAdolescente_pjud option:selected').text(),
                "", "", "", "", "", "",
                "salud_NNA_control_ginecologicoAdolescente");
        }
        if (
            $('#salud_012_sel_adolescenteNiegaControlGineco option:selected').text() != $('#salud_012_sel_adolescenteNiegaControlGineco_pjud option:selected').text()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_012_sel_adolescenteNiegaControlGineco option:selected').text(), $('#salud_012_sel_adolescenteNiegaControlGineco_pjud option:selected').text(),
                "", "", "", "", "", "",
                "salud_NNA_adolescenteNiegaControlGineco");
        }
        if (
            $('#salud_013_sel_adolescenteEmbarazada option:selected').text() != $('#salud_013_sel_adolescenteEmbarazada_pjud option:selected').text()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_013_sel_adolescenteEmbarazada option:selected').text(), $('#salud_013_sel_adolescenteEmbarazada_pjud option:selected').text(),
                "", "", "", "", "", "",
                "salud_NNA_adolescenteEmbarazada");
        }
        if (
            $('#salud_014_sel_adolescenteEmbarazadaControlalDia option:selected').text() != $('#salud_014_sel_adolescenteEmbarazadaControlalDia_pjud option:selected').text()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_014_sel_adolescenteEmbarazadaControlalDia option:selected').text(), $('#salud_014_sel_adolescenteEmbarazadaControlalDia_pjud option:selected').text(),
                "", "", "", "", "", "",
                "salud_NNA_adolescenteEmbarazadaControlalDia");
        }
        if (
            $('#salud_015_adolescenteEmbarazadaControlalDia_cantidad').val() != $('#salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud').val()
        ) {
            _antecedentesSalud = _antecedentesSalud + RenderTBL_AntecedentesPoblacion(
                $('#salud_015_adolescenteEmbarazadaControlalDia_cantidad').val(), $('#salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "salud_NNA_adolescenteEmbarazadaControlalDia_cantidad");
        }
        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";
        if (_antecedentesSalud != "") {
            _antecedentesSalud = tbl_c_antecedentesSalud.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesSalud })
        }
        if ((_antecedentesSalud) != "") {
            $("#DivFichaComparativo06").html("<br />" + _antecedentesSalud);
            $("#div_compara_antecedentes_salud").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_salud").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa7() {
    var _antecedentesEducacion = "";

    if (((educacion_residencia && educacion_pjud))) {
        //ANTECEDENTES EDUCACION
        if (
            $('#educacion_001_NNA_asisten_colegio_cantidad').val() != $('#educacion_001_NNA_asisten_colegio_cantidad_pjud').val()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_001_NNA_asisten_colegio_cantidad').val(), $('#educacion_001_NNA_asisten_colegio_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "educacion_NNA_SiAsisten");
        }
        if (
            $('#educacion_002_NNA_NO_asisten_colegio_cantidad').val() != $('#educacion_002_NNA_NO_asisten_colegio_cantidad_pjud').val()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_002_NNA_NO_asisten_colegio_cantidad').val(), $('#educacion_002_NNA_NO_asisten_colegio_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "educacion_NNA_NoAsisten");
        }
        if (
            $('#educacion_003_NNA_retrasoEscolar_cantidad').val() != $('#educacion_003_NNA_retrasoEscolar_cantidad_pjud').val()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_003_NNA_retrasoEscolar_cantidad').val(), $('#educacion_003_NNA_retrasoEscolar_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "educacion_NNA_RetrasoEscolar");
        }
        if (
            $('#educacion_004_NNA_matriculaCancelada_cantidad').val() != $('#educacion_004_NNA_matriculaCancelada_cantidad_pjud').val()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_004_NNA_matriculaCancelada_cantidad').val(), $('#educacion_004_NNA_matriculaCancelada_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "educacion_NNA_MatriculaCancelada");
        }
        if (
            $('#educacion_005_NNA_asisten_colegioDiferencial_cantidad').val() != $('#educacion_005_NNA_asisten_colegioDiferencial_cantidad_pjud').val()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_005_NNA_asisten_colegioDiferencial_cantidad').val(), $('#educacion_005_NNA_asisten_colegioDiferencial_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "educacion_AsisteEducacionEspecial");
        }
        if (
            $('#educacion_006_NNA_asisten_colegioNivelacion_cantidad').val() != $('#educacion_006_NNA_asisten_colegioNivelacion_cantidad_pjud').val()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_006_NNA_asisten_colegioNivelacion_cantidad').val(), $('#educacion_006_NNA_asisten_colegioNivelacion_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "educacion_AsisteEducacionNivelacion");
        }

        if (
            $('#educacion_007_sel_EspacioEstudio_y_Tareas_existe option:selected').text() != $('#educacion_007_sel_EspacioEstudio_y_Tareas_existe_pjud option:selected').text()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_007_sel_EspacioEstudio_y_Tareas_existe option:selected').text(), $('#educacion_007_sel_EspacioEstudio_y_Tareas_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "educacion_EspaciosDestinadosEstudios");
        }
        if (
            $('#educacion_008_sel_materialBibliiografico_existe option:selected').text() != $('#educacion_008_sel_materialBibliiografico_existe_pjud option:selected').text()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_008_sel_materialBibliiografico_existe option:selected').text(), $('#educacion_008_sel_materialBibliiografico_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "educacion_MaterialBibliografico");
        }
        if (
            $('#educacion_009_sel_computadores_existe option:selected').text() != $('#educacion_009_sel_computadores_existe_pjud option:selected').text()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_009_sel_computadores_existe option:selected').text(), $('#educacion_009_sel_computadores_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "educacion_Computadores");
        }
        if (
            $('#educacion_010_sel_AccesoControladoInternet_existe option:selected').text() != $('#educacion_010_sel_AccesoControladoInternet_existe_pjud option:selected').text()
        ) {
            _antecedentesEducacion = _antecedentesEducacion + RenderTBL_AntecedentesPoblacion(
                $('#educacion_010_sel_AccesoControladoInternet_existe option:selected').text(), $('#educacion_010_sel_AccesoControladoInternet_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "educacion_AccesoControladoInternet");
        }
        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";
        if (_antecedentesEducacion != "") {
            _antecedentesEducacion = tbl_c_antecedentesEducacion.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesEducacion })
        }
        if ((_antecedentesEducacion) != "") {
            $("#DivFichaComparativo07").html("<br />" + _antecedentesEducacion);
            $("#div_compara_antecedentes_educacion").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_educacion").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa8() {
    var _antecedentesAlimentacion = "";

    if ((alimentacion_residencia && alimentacion_pjud)) {
        //ANTECEDENTES ALIMENTACION
        if (
            $('#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe option:selected').text() != $('#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_pjud option:selected').text()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe option:selected').text(), $('#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "alimentacion_HonorariosEntregaAlimentos");
        }
        if (
            $('#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe option:selected').text() != $('#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_pjud option:selected').text()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe option:selected').text(), $('#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "alimentacion_PlanificacionMenusBalanceados");
        }
        if (
            $('#alimentacion_003_sel_menuEspeciales_existe option:selected').text() != $('#alimentacion_003_sel_menuEspeciales_existe_pjud option:selected').text()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_003_sel_menuEspeciales_existe option:selected').text(), $('#alimentacion_003_sel_menuEspeciales_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "alimentacion_MenusEspeciales");
        }
        if (
            $('#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe option:selected').text() != $('#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_pjud option:selected').text()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe option:selected').text(), $('#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "alimentacion_AsesoriasNutricionista");
        }
        if (
            $('#alimentacion_005_sel_certifSanitarioManipuladores_existe option:selected').text() != $('#alimentacion_005_sel_certifSanitarioManipuladores_existe_pjud option:selected').text()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_005_sel_certifSanitarioManipuladores_existe option:selected').text(), $('#alimentacion_005_sel_certifSanitarioManipuladores_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "alimentacion_CertificadosSanitariosManipuladoras");
        }
        if (
            $('#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe option:selected').text() != $('#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_pjud option:selected').text()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe option:selected').text(), $('#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "alimentacion_AlmacenamientoAlimentos");
        }
        if (
            $('#alimentacion_007_comidas_lunes_a_viernes_cantidad').val() != $('#alimentacion_007_comidas_lunes_a_viernes_cantidad_pjud').val()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_007_comidas_lunes_a_viernes_cantidad').val(), $('#alimentacion_007_comidas_lunes_a_viernes_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "alimentacion_ComidasEntregadasLUaVI");
        }
        if (
            $('#alimentacion_008_comidas_sabado_domingo_fest_cantidad').val() != $('#alimentacion_008_comidas_sabado_domingo_fest_cantidad_pjud').val()
        ) {
            _antecedentesAlimentacion = _antecedentesAlimentacion + RenderTBL_AntecedentesPoblacion(
                $('#alimentacion_008_comidas_sabado_domingo_fest_cantidad').val(), $('#alimentacion_008_comidas_sabado_domingo_fest_cantidad_pjud').val(),
                "", "", "", "", "", "",
                "alimentacion_ComidasEntregadasFestivos");
        }
        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";
        if (_antecedentesAlimentacion != "") {
            _antecedentesAlimentacion = tbl_c_antecedentesAlimentacion.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesAlimentacion })
        }
        if ((_antecedentesAlimentacion) != "") {
            $("#DivFichaComparativo08").html("<br />" + _antecedentesAlimentacion);
            $("#div_compara_antecedentes_alimentacion").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_alimentacion").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}
function CargaCamposComparativa9() {
    var _antecedentesGestionResidencia = "";

    if ((gestionResidencia_residencia && gestionResidencia_pjud)) {
        //ANTECEDENTES GESTION RESIDENCIA
        if (
            $('#gestionResid_001_sel_catastroRedes_existe option:selected').text() != $('#gestionResid_001_sel_catastroRedes_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_001_sel_catastroRedes_existe option:selected').text(), $('#gestionResid_001_sel_catastroRedes_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_catastroRedes");
        }
        if (
            $('#gestionResid_002_sel_protocoloVisitas_existe option:selected').text() != $('#gestionResid_002_sel_protocoloVisitas_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_002_sel_protocoloVisitas_existe option:selected').text(), $('#gestionResid_002_sel_protocoloVisitas_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_RegistroVisitas");
        }
        if (
            $('#gestionResid_003_sel_protocoloAcogida_NNA_existe option:selected').text() != $('#gestionResid_003_sel_protocoloAcogida_NNA_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_003_sel_protocoloAcogida_NNA_existe option:selected').text(), $('#gestionResid_003_sel_protocoloAcogida_NNA_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloAcogidaNNA");
        }
        if (
            $('#gestionResid_004_sel_activi_autocuidadoEquipo_existe option:selected').text() != $('#gestionResid_004_sel_activi_autocuidadoEquipo_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_004_sel_activi_autocuidadoEquipo_existe option:selected').text(), $('#gestionResid_004_sel_activi_autocuidadoEquipo_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_AutocuidadoEquipo");
        }
        if (
            $('#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe option:selected').text() != $('#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe option:selected').text(), $('#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ActuacionIntervencionCrisis");
        }
        if (
            $('#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe option:selected').text() != $('#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe option:selected').text(), $('#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_InfoNormativaResidencia");
        }
        if (
            $('#gestionResid_007_sel_protocoloConvivencia_existe option:selected').text() != $('#gestionResid_007_sel_protocoloConvivencia_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_007_sel_protocoloConvivencia_existe option:selected').text(), $('#gestionResid_007_sel_protocoloConvivencia_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloConvivencia");
        }
        if (
            $('#gestionResid_008_sel_protocolo_PresentaReclamo_existe option:selected').text() != $('#gestionResid_008_sel_protocolo_PresentaReclamo_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_008_sel_protocolo_PresentaReclamo_existe option:selected').text(), $('#gestionResid_008_sel_protocolo_PresentaReclamo_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloPresentacionReclamos");
        }
        if (
            $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe option:selected').text() != $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe option:selected').text(), $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloEspaciosEscucha");
        }
        if (
            $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe option:selected').text() != $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe option:selected').text(), $('#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloEspaciosEscucha");
        } 
        if (
            $('#gestionResid_010_sel_vinculacionResidencias_existe option:selected').text() != $('#gestionResid_010_sel_vinculacionResidencias_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_010_sel_vinculacionResidencias_existe option:selected').text(), $('#gestionResid_010_sel_vinculacionResidencias_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_VinculacionResidencias");
        }
        if (
            $('#gestionResid_011_sel_ProcesoFormacion_existe option:selected').text() != $('#gestionResid_011_sel_ProcesoFormacion_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_011_sel_ProcesoFormacion_existe option:selected').text(), $('#gestionResid_011_sel_ProcesoFormacion_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_FormacionPermanente");
        }
        if (
            $('#gestionResid_012_sel_protocoloApadrinamiento_existe option:selected').text() != $('#gestionResid_012_sel_protocoloApadrinamiento_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_012_sel_protocoloApadrinamiento_existe option:selected').text(), $('#gestionResid_012_sel_protocoloApadrinamiento_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloApadrinamiento");
        }
        if (
            $('#gestionResid_013_sel_protocoloTrasladoResid_existe option:selected').text() != $('#gestionResid_013_sel_protocoloTrasladoResid_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_013_sel_protocoloTrasladoResid_existe option:selected').text(), $('#gestionResid_013_sel_protocoloTrasladoResid_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloDerivacion");
        }
        if (
            $('#gestionResid_014_sel_protocoloEgreso_NNA_existe option:selected').text() != $('#gestionResid_014_sel_protocoloEgreso_NNA_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_014_sel_protocoloEgreso_NNA_existe option:selected').text(), $('#gestionResid_014_sel_protocoloEgreso_NNA_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_ProtocoloEgresoNNA");
        }
        if (
            $('#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe option:selected').text() != $('#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe option:selected').text(), $('#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_DerivacionRedSalud");
        }
        if (
            $('#gestionResid_016_sel_activi_habilitacionLaboral_existe option:selected').text() != $('#gestionResid_016_sel_activi_habilitacionLaboral_existe_pjud option:selected').text()
        ) {
            _antecedentesGestionResidencia = _antecedentesGestionResidencia + RenderTBL_AntecedentesPoblacion(
                $('#gestionResid_016_sel_activi_habilitacionLaboral_existe option:selected').text(), $('#gestionResid_016_sel_activi_habilitacionLaboral_existe_pjud option:selected').text(),
                "", "", "", "", "", "",
                "gestion_PreparacionVidaIndependiente");
        }   

        var foliofichapadre = " (FOLIO: " + $("#idcodfichaOBS").val() + ")";
        var foliofichaPJUD = " (FOLIO: " + $("#idcodfichaOBS_pjud").val() + ")";
        if (_antecedentesGestionResidencia != "") {
            _antecedentesGestionResidencia = tbl_c_antecedentesGestionResidencia.mapReplace({ "<NUMFOLIOFICHAPADRE>": foliofichapadre, "<NUMFOLIOFICHAPJUD>": foliofichaPJUD, "<FILAS>": _antecedentesGestionResidencia })
        }
        if ((_antecedentesGestionResidencia) != "") {
            $("#DivFichaComparativo09").html("<br />" + _antecedentesGestionResidencia);
            $("#div_compara_antecedentes_gestionresidencia").attr({ "style": "display:;" });
        }
        else {
            $("#div_compara_antecedentes_gestionresidencia").attr({ "style": "display:none;" });
        }
    }
    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_COMPARATIVA");
}