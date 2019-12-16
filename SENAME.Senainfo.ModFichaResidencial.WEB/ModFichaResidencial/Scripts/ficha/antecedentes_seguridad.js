////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND

function GrabarAntecedentesSeguridad() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var PlanEmergencia = $("#seguridad_001_planEmergencia_existe").val(); 
    var SimulacroEmergencia = $("#seguridad_002_simulacroEmergencia_existe").val();
    var PlanEmergenciaCalificado = $("#seguridad_003_planEmergenciaVisado_existe").val();
    var Extintores = $("#seguridad_004_extintores_existe").val();
    var Senaletica = $("#seguridad_005_senaletica_existe").val();
    var ViasEvacuacion = $("#seguridad_006_viaEvacuacion_existe").val();
    var CapacitacionPersonalEmergencia = $("#seguridad_007_capacitacionPersonal_existe").val();
    var Sanitizacion = $("#seguridad_008_sanitizacion_existe").val();
    var SistemaElectrico = $("#seguridad_009_sistemaElectrico_existe").val();
    var ZonasSeguridad = $("#seguridad_010_zonaSeguridad_existe").val();
    var Observaciones = replaceAll(EliminaEspacios(document.getElementById("seguridad_011_observaciones").value),"'","");

    var capacitacionPersonalemergencia = $("#seguridad_007_capacitacionPersonalemergencia").val();
    var capacitacionPersonalprimerosAux = $("#seguridad_007_capacitacionPersonalprimerosAux").val();
    var sanitizacion_ = $("#seguridad_008_sanitizacion_").val();
    var desratizacion = $("#seguridad_008_sanitizacion_desratizacion").val();
    var fumigacion = $("#seguridad_008_sanitizacion_fumigacion").val();

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
                ActivarDesactivarBotonesGrabar(5, false);
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
                $("#seguridad_001_planEmergencia_existe").val(this.PlanEmergencia);
                $("#seguridad_002_simulacroEmergencia_existe").val(this.SimulacroEmergencia);
                $("#seguridad_003_planEmergenciaVisado_existe").val(this.PlanEmergenciaCalificado);
                $("#seguridad_004_extintores_existe").val(this.Extintores);
                $("#seguridad_005_senaletica_existe").val(this.Señaletica);
                $("#seguridad_006_viaEvacuacion_existe").val(this.ViasEvacuacion);
                $("#seguridad_007_capacitacionPersonal_existe").val(this.CapacitacionPersonalEmergencia);
                $("#seguridad_008_sanitizacion_existe").val(this.Sanitizacion);
                $("#seguridad_009_sistemaElectrico_existe").val(this.SistemaElectrico);
                $("#seguridad_010_zonaSeguridad_existe").val(this.ZonasSeguridad);
                document.getElementById("seguridad_011_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("seguridad_011_observaciones"), "labelCaracteres_ObsSeguridad");

                $("#seguridad_007_capacitacionPersonalemergencia").val(this.CapacitacionEmergencia);
                $("#seguridad_007_capacitacionPersonalprimerosAux").val(this.CapacitacionPrimerosAuxilios);
                $("#seguridad_008_sanitizacion_").val(this.SegSanitizacion);
                $("#seguridad_008_sanitizacion_desratizacion").val(this.SegDesratizacion);
                $("#seguridad_008_sanitizacion_fumigacion").val(this.SegFumigacion);
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
    if ($("#seguridad_007_capacitacionPersonalemergencia").val() == "1" && $("#seguridad_007_capacitacionPersonalprimerosAux").val() == "1")
        $("#seguridad_007_capacitacionPersonal_existe").val(1);
    else
        $("#seguridad_007_capacitacionPersonal_existe").val(0);
}
function EvaluaSanitizacion() {
    if (
        $("#seguridad_008_sanitizacion_").val() == "1" &&
        $("#seguridad_008_sanitizacion_desratizacion").val() == "1" &&
        $("#seguridad_008_sanitizacion_fumigacion").val() == "1")
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
                    $("#seguridad_001_planEmergencia_existe" + sufijo).val(1);
                else
                    $("#seguridad_001_planEmergencia_existe" + sufijo).val(0);

                if (this.SimulacroEmergencia != "0" && this.SimulacroEmergencia != "-1")
                    $("#seguridad_002_simulacroEmergencia_existe" + sufijo).val(1);
                else
                    $("#seguridad_002_simulacroEmergencia_existe" + sufijo).val(0);

                if (this.PlanEmergenciaCalificado != "0" && this.PlanEmergenciaCalificado != "-1")
                    $("#seguridad_003_planEmergenciaVisado_existe" + sufijo).val(1);
                else
                    $("#seguridad_003_planEmergenciaVisado_existe" + sufijo).val(0);

                if (this.Extintores != "0" && this.Extintores != "-1")
                    $("#seguridad_004_extintores_existe" + sufijo).val(1);
                else
                    $("#seguridad_004_extintores_existe" + sufijo).val(0);

                if (this.Señaletica != "0" && this.Señaletica != "-1")
                    $("#seguridad_005_senaletica_existe" + sufijo).val(1);
                else
                    $("#seguridad_005_senaletica_existe" + sufijo).val(0);

                if (this.ViasEvacuacion != "0" && this.ViasEvacuacion != "-1")
                    $("#seguridad_006_viaEvacuacion_existe" + sufijo).val(1);
                else
                    $("#seguridad_006_viaEvacuacion_existe" + sufijo).val(0);

                if (this.CapacitacionPersonalEmergencia != "0" && this.CapacitacionPersonalEmergencia != "-1")
                    $("#seguridad_007_capacitacionPersonal_existe" + sufijo).val(1);
                else
                    $("#seguridad_007_capacitacionPersonal_existe" + sufijo).val(0);

                if (this.Sanitizacion != "0" && this.Sanitizacion != "-1")
                    $("#seguridad_008_sanitizacion_existe" + sufijo).val(1);
                else
                    $("#seguridad_008_sanitizacion_existe" + sufijo).val(0);

                if (this.SistemaElectrico != "0" && this.SistemaElectrico != "-1")
                    $("#seguridad_009_sistemaElectrico_existe" + sufijo).val(1);
                else
                    $("#seguridad_009_sistemaElectrico_existe" + sufijo).val(0);

                if (this.ZonasSeguridad != "0" && this.ZonasSeguridad != "-1")
                    $("#seguridad_010_zonaSeguridad_existe" + sufijo).val(1);
                else
                    $("#seguridad_010_zonaSeguridad_existe" + sufijo).val(0);


                if (this.CapacitacionEmergencia != "0" && this.CapacitacionEmergencia != "-1")
                    $("#seguridad_007_capacitacionPersonalemergencia" + sufijo).val(1);
                else
                    $("#seguridad_007_capacitacionPersonalemergencia" + sufijo).val(0);

                if (this.CapacitacionPrimerosAuxilios != "0" && this.CapacitacionPrimerosAuxilios != "-1")
                    $("#seguridad_007_capacitacionPersonalprimerosAux" + sufijo).val(1);
                else
                    $("#seguridad_007_capacitacionPersonalprimerosAux" + sufijo).val(0);

                if (this.SegSanitizacion != "0" && this.SegSanitizacion != "-1")
                    $("#seguridad_008_sanitizacion_" + sufijo).val(1);
                else
                    $("#seguridad_008_sanitizacion_" + sufijo).val(0);

                if (this.SegDesratizacion != "0" && this.SegDesratizacion != "-1")
                    $("#seguridad_008_sanitizacion_desratizacion" + sufijo).val(1);
                else
                    $("#seguridad_008_sanitizacion_desratizacion" + sufijo).val(0);

                if (this.SegFumigacion != "0" && this.SegFumigacion != "-1")
                    $("#seguridad_008_sanitizacion_fumigacion" + sufijo).val(1);
                else
                    $("#seguridad_008_sanitizacion_fumigacion" + sufijo).val(0);

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