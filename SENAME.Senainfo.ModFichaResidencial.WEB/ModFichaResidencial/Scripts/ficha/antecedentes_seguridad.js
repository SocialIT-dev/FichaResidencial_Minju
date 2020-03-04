////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
var ParValores = { 0: "NO", 1: "SI" };
function CargaParSeguridad() {
    $("#gridSeguridad").DataTable().destroy();
    $('#gridSeguridad').dataTable({
        "ajax": {
            "url": "FichaResidencial.aspx/ObtenerParSeguridad",
            "type": "POST",
            "contentType": "application/json; charset=utf-8",
            "dataType": "json",
            "async": false,
            "data": function (d) {
                return JSON.stringify(d);
            },
            "dataSrc": "d",
        },
        "pageLength": 50,
        "columns": [
            { "data": "IdParSeguridad" },
            { "data": "NombreParSeguridad", "sClass": "etiqCampo3" },
            { "data": "VariableCuantitativa" },
            { "data": "IndVigencia" },
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    if (data.IndVigencia == 'V') {
                        var $select = $("<select id='IdParSeguridad_" + data.IdParSeguridad + "' class='form-control dllSiNo' style='width: 100px;'></select>", {});

                        $.each(ParValores, function (k, v) {
                            var $option = $("<option></option>", {
                                "text": v,
                                "value": k
                            });
                            if (data == v) {
                                $option.attr("selected", "selected")
                            }
                            $select.append($option);
                        });
                        return $select.prop("outerHTML");
                    }
                }
            }
        ],
        "columnDefs": [{
            "targets": [0, 2, 3],
            "visible": false,
            "searchable": false
        }
        ],
        "fixedColumns": true,
        "bLengthChange": false,
        "bInfo": false,
        "bPaginate": false
    });
    //document.getElementById("seguridad_011_observaciones").disabled = false;
}

function GrabarAntecedentesSeguridad() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var PlanEmergencia = $("#IdParSeguridad_1").val() == undefined ? -1 : $("#IdParSeguridad_1").val(); 
    var SimulacroEmergencia = $("#IdParSeguridad_2").val() == undefined ? -1 : $("#IdParSeguridad_2").val(); 
    var PlanEmergenciaCalificado = $("#IdParSeguridad_3").val() == undefined ? -1 : $("#IdParSeguridad_3").val(); 
    var Extintores = $("#IdParSeguridad_4").val() == undefined ? -1 : $("#IdParSeguridad_4").val(); 
    var Senaletica = $("#IdParSeguridad_5").val() == undefined ? -1 : $("#IdParSeguridad_5").val(); 
    var ViasEvacuacion = $("#IdParSeguridad_6").val() == undefined ? -1 : $("#IdParSeguridad_6").val(); 
    var CapacitacionPersonalEmergencia = $("#IdParSeguridad_7").val() == undefined ? -1 : $("#IdParSeguridad_7").val(); 
    var Sanitizacion = $("#IdParSeguridad_9").val() == undefined ? -1 : $("#IdParSeguridad_9").val(); 
    var SistemaElectrico = $("#IdParSeguridad_12").val() == undefined ? -1 : $("#IdParSeguridad_12").val(); 
    var ZonasSeguridad = $("#IdParSeguridad_13").val() == undefined ? -1 : $("#IdParSeguridad_13").val(); 
    var Observaciones = replaceAll(EliminaEspacios(document.getElementById("seguridad_011_observaciones").value),"'","");

    var capacitacionPersonalemergencia = $("#IdParSeguridad_7").val() == undefined ? -1 : $("#IdParSeguridad_7").val(); 
    var capacitacionPersonalprimerosAux = $("#IdParSeguridad_8").val() == undefined ? -1 : $("#IdParSeguridad_8").val(); 
    var sanitizacion_ = $("#IdParSeguridad_9").val() == undefined ? -1 : $("#IdParSeguridad_9").val(); 
    var desratizacion = $("#IdParSeguridad_10").val() == undefined ? -1 : $("#IdParSeguridad_10").val(); 
    var fumigacion = $("#IdParSeguridad_11").val() == undefined ? -1 : $("#IdParSeguridad_11").val(); 

    var dataParametros =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +
        "'PlanEmergencia': '" + PlanEmergencia + "'," +
        "'SimulacroEmergencia': '" + SimulacroEmergencia + "'," +
        "'PlanEmergenciaCalificado': '" + PlanEmergenciaCalificado + "'," +
        "'Extintores': '" + Extintores + "'," +
        "'Senaletica': '" + Senaletica + "'," +
        "'ViasEvacuacion': '" + ViasEvacuacion + "'," +
        "'CapacitacionPersonalEmergencia': '" + CapacitacionPersonalEmergencia + "'," +
        "'Sanitizacion': '" + Sanitizacion + "'," +
        "'SistemaElectrico': '" + SistemaElectrico + "'," +
        "'ZonasSeguridad': '" + ZonasSeguridad + "'," +
        "'Observaciones': '" + Observaciones + "'," +

        "'capacitacionEmergencia': '" + capacitacionPersonalemergencia + "'," +
        "'capacitacionPrimerosAux': '" + capacitacionPersonalprimerosAux + "'," +
        "'seg_sanitizacion': '" + sanitizacion_ + "'," +
        "'seg_desratizacion': '" + desratizacion + "'," +
        "'seg_fumigacion': '" + fumigacion + "'" +
        "}";

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesSeguridad",
        data: dataParametros,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                var strError = "";
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Seguridad.");
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;

                    GrabarFechaAplicacionFicha();
                }
                else {
                    if (this.ERROR_MESSAGE_ != null) {
                        strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                        strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");
                        MensajeERROR_App_Critico(strError);
                    }
                    else {
                        strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.error + "</td></tr>" +
                                    "</table>";
                        strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");
                        MensajeERROR_App_Critico2(strError);
                    }
                }
                //


              //  ActivarDesactivarBotonesGrabar(5, false);
            }
        );

    });
}

function ObtenerAntecedentesSeguridad(CodFicha) {
    $("#labelCaracteres_ObsSeguridad").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesSeguridad",
        data: "{'CodFicha': '" + CodFicha + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                /* Plan de Emergencia - seguridad_001_planEmergencia_existe */
                if (this.PlanEmergencia != 0 && this.PlanEmergencia != -1) $("#IdParSeguridad_1").val("1");
                else $("#IdParSeguridad_1").val("0");

                /* Simulacro Emergencia (Último Cuatrimestre) - seguridad_002_simulacroEmergencia_existe */
                if (this.SimulacroEmergencia != 0 && this.SimulacroEmergencia != -1) $("#IdParSeguridad_2").val("1");
                else $("#IdParSeguridad_2").val("0");

                /* Plan de Emergencia ¿Visado por personal calificado? - seguridad_003_planEmergenciaVisado_existe  */
                if (this.PlanEmergenciaCalificado != 0 && this.PlanEmergenciaCalificado != -1) $("#IdParSeguridad_3").val("1");
                else $("#IdParSeguridad_3").val("0");

                /* Extintores  -  seguridad_004_extintores_existe */    
                if (this.Extintores != 0 && this.Extintores != -1) $("#IdParSeguridad_4").val("1");
                else $("#IdParSeguridad_4").val("0");

                /* Señalética  -  seguridad_005_senaletica_existe */
                if (this.Señaletica != 0 && this.Señaletica != -1) $("#IdParSeguridad_5").val("1");
                else $("#IdParSeguridad_5").val("0");

                /* Vías de Evacuación  - seguridad_006_viaEvacuacion_existe */
                if (this.ViasEvacuacion != 0 && this.ViasEvacuacion != -1) $("#IdParSeguridad_6").val("1");
                else $("#IdParSeguridad_6").val("0");

                /* Capacitación Personal en Emergencia  -  seguridad_007_capacitacionPersonalemergencia */
                if (this.CapacitacionPersonalEmergencia != 0 && this.CapacitacionPersonalEmergencia != -1) $("#IdParSeguridad_7").val("1");
                else $("#IdParSeguridad_7").val("0");

                /* displey : none -  Capacitación Personal en Emergencia y Primeros Auxilios  - seguridad_007_capacitacionPersonal_existe */
                $("#seguridad_008_sanitizacion_existe").val(this.Sanitizacion);

                /* Sistema Eléctrico  -  seguridad_009_sistemaElectrico_existe */
                if (this.SistemaElectrico != 0 && this.SistemaElectrico != -1) $("#IdParSeguridad_12").val("1");
                else $("#IdParSeguridad_12").val("0");

                /* Zona de Seguridad Demarcada  - seguridad_010_zonaSeguridad_existe */
                if (this.ZonasSeguridad != 0 && this.ZonasSeguridad != -1) $("#IdParSeguridad_13").val("1");
                else $("#IdParSeguridad_13").val("0");

                document.getElementById("seguridad_011_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("seguridad_011_observaciones"), "labelCaracteres_ObsSeguridad");

                /* Displey : none  - */
                $("#seguridad_007_capacitacionPersonalemergencia").val(this.CapacitacionEmergencia);

                /* Capacitación Personal en Primeros Auxilios - seguridad_007_capacitacionPersonalprimerosAux */
                if (this.CapacitacionPrimerosAuxilios != 0 && this.CapacitacionPrimerosAuxilios != -1) $("#IdParSeguridad_8").val("1");
                else $("#IdParSeguridad_8").val("0");

                /* Sanitización  - seguridad_008_sanitizacion_ */
                if (this.SegSanitizacion != 0 && this.SegSanitizacion != -1) $("#IdParSeguridad_9").val("1");
                else $("#IdParSeguridad_9").val("0");

                /* Desratización  - seguridad_008_sanitizacion_desratizacion */
                if (this.SegDesratizacion != 0 && this.SegDesratizacion != -1) $("#IdParSeguridad_10").val("1");
                else $("#IdParSeguridad_10").val("0");

                /* Fumigación  - seguridad_008_sanitizacion_fumigacion */
                if (this.SegFumigacion != 0 && this.SegFumigacion != -1) $("#IdParSeguridad_11").val("1");
                else $("#IdParSeguridad_11").val("0");
            }
        );
        if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesSeguridad = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            seguridad_residencia = true;
            CargaCamposComparativa5();
        }
    });
}

function ObtenerAntecedentesSeguridad_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesSeguridad",
        data: "{'CodFicha': '" + CodFicha + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                $("#seguridad_001_planEmergencia_existe_pjud").val(this.PlanEmergencia);
                $("#seguridad_002_simulacroEmergencia_existe_pjud").val(this.SimulacroEmergencia);
                $("#seguridad_003_planEmergenciaVisado_existe_pjud").val(this.PlanEmergenciaCalificado);
                $("#seguridad_004_extintores_existe_pjud").val(this.Extintores);
                $("#seguridad_005_senaletica_existe_pjud").val(this.Señaletica);
                $("#seguridad_006_viaEvacuacion_existe_pjud").val(this.ViasEvacuacion);
                $("#seguridad_007_capacitacionPersonal_existe_pjud").val(this.CapacitacionPersonalEmergencia);
                $("#seguridad_008_sanitizacion_existe_pjud").val(this.Sanitizacion);
                $("#seguridad_009_sistemaElectrico_existe_pjud").val(this.SistemaElectrico);
                $("#seguridad_010_zonaSeguridad_existe_pjud").val(this.ZonasSeguridad);
                $("#seguridad_011_observaciones_pjud").val(this.Observaciones);
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesSeguridad_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        seguridad_pjud = true; 
        CargaCamposComparativa5();
    });
}

function EvaluaCapacitacionPersonalEmergenciaPrimerAux() {
    if ($("#IdParSeguridad_7").val() == "1" && $("#IdParSeguridad_8").val() == "1")
        $("#seguridad_007_capacitacionPersonal_existe").val(1);
    else
        $("#seguridad_007_capacitacionPersonal_existe").val(0);
}
function EvaluaSanitizacion() {
    if (
        $("#IdParSeguridad_9").val() == "1" &&
        $("#IdParSeguridad_10").val() == "1" &&
        $("#IdParSeguridad_11").val() == "1")
        $("#seguridad_008_sanitizacion_existe").val(1);
    else
        $("#seguridad_008_sanitizacion_existe").val(0);
}

function ObtenerAntecedentesSeguridad_Compare(codFichaPadre, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#labelCaracteres_ObsSeguridad").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesSeguridad",
        data: "{'CodFicha': '" + codFichaPadre + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                if (this.PlanEmergencia != "0" && this.PlanEmergencia != "-1")
                    $("#IdParSeguridad_1" + sufijo).val(1);
                else
                    $("#IdParSeguridad_1" + sufijo).val(0);

                if (this.SimulacroEmergencia != "0" && this.SimulacroEmergencia != "-1")
                    $("#IdParSeguridad_2" + sufijo).val(1);
                else
                    $("#IdParSeguridad_2" + sufijo).val(0);

                if (this.PlanEmergenciaCalificado != "0" && this.PlanEmergenciaCalificado != "-1")
                    $("#IdParSeguridad_3" + sufijo).val(1);
                else
                    $("#IdParSeguridad_3" + sufijo).val(0);

                if (this.Extintores != "0" && this.Extintores != "-1")
                    $("#IdParSeguridad_4" + sufijo).val(1);
                else
                    $("#IdParSeguridad_4" + sufijo).val(0);

                if (this.Señaletica != "0" && this.Señaletica != "-1")
                    $("#IdParSeguridad_5" + sufijo).val(1);
                else
                    $("#IdParSeguridad_5" + sufijo).val(0);

                if (this.ViasEvacuacion != "0" && this.ViasEvacuacion != "-1")
                    $("#IdParSeguridad_6" + sufijo).val(1);
                else
                    $("#IdParSeguridad_6" + sufijo).val(0);

                if (this.CapacitacionPersonalEmergencia != "0" && this.CapacitacionPersonalEmergencia != "-1")
                    $("#seguridad_007_capacitacionPersonal_existe" + sufijo).val(1);
                else
                    $("#seguridad_007_capacitacionPersonal_existe" + sufijo).val(0);

                if (this.Sanitizacion != "0" && this.Sanitizacion != "-1")
                    $("#seguridad_008_sanitizacion_existe" + sufijo).val(1);
                else
                    $("#seguridad_008_sanitizacion_existe" + sufijo).val(0);

                if (this.SistemaElectrico != "0" && this.SistemaElectrico != "-1")
                    $("#IdParSeguridad_12" + sufijo).val(1);
                else
                    $("#IdParSeguridad_12" + sufijo).val(0);

                if (this.ZonasSeguridad != "0" && this.ZonasSeguridad != "-1")
                    $("#IdParSeguridad_13" + sufijo).val(1);
                else
                    $("#IdParSeguridad_13" + sufijo).val(0);


                if (this.CapacitacionEmergencia != "0" && this.CapacitacionEmergencia != "-1")
                    $("#IdParSeguridad_7" + sufijo).val(1);
                else
                    $("#IdParSeguridad_7" + sufijo).val(0);

                if (this.CapacitacionPrimerosAuxilios != "0" && this.CapacitacionPrimerosAuxilios != "-1")
                    $("#IdParSeguridad_8" + sufijo).val(1);
                else
                    $("#IdParSeguridad_8" + sufijo).val(0);

                if (this.SegSanitizacion != "0" && this.SegSanitizacion != "-1")
                    $("#IdParSeguridad_9" + sufijo).val(1);
                else
                    $("#IdParSeguridad_9" + sufijo).val(0);

                if (this.SegDesratizacion != "0" && this.SegDesratizacion != "-1")
                    $("#IdParSeguridad_10" + sufijo).val(1);
                else
                    $("#IdParSeguridad_10" + sufijo).val(0);

                if (this.SegFumigacion != "0" && this.SegFumigacion != "-1")
                    $("#IdParSeguridad_11" + sufijo).val(1);
                else
                    $("#IdParSeguridad_11" + sufijo).val(0);

                $("#seguridad_011_observaciones" + sufijo).val(this.Observaciones);
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesSeguridad_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            seguridad_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesSeguridad_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            seguridad_residencia_comp002 = true;
        }
        CargaCamposComparativa5_();
    });
}