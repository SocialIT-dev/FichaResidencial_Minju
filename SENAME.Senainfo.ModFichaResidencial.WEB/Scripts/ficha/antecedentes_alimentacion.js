////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesAlimentacion() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var registroHonorario= $("#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe").val();
    var registroPlanificacion = $("#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe").val();
    var menusEspeciales = $("#alimentacion_003_sel_menuEspeciales_existe").val();
    var asesoriaNutricionista = $("#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe").val();
    var certificadosSanitarios = $("#alimentacion_005_sel_certifSanitarioManipuladores_existe").val();
    var conservacionAlimentos = $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val();

    var cantidadComidas = $("#alimentacion_007_comidas_lunes_a_viernes_cantidad").val();
    var cantidadComidasFeriados = $("#alimentacion_008_comidas_sabado_domingo_fest_cantidad").val();
    var observaciones = replaceAll(EliminaEspacios(document.getElementById("alimentacion_009_observacion").value), "'", "");

    var sel_AlmacenaAlimento_existe = $("#alimentacion_006_sel_AlmacenaAlimento_existe").val();
    var sel_EstadoConserva_existe = $("#alimentacion_006_sel_EstadoConserva_existe").val();

    if (cantidadComidas == "") cantidadComidas = "0";
    if (cantidadComidasFeriados == "") cantidadComidasFeriados = "0";

    var dataParametros =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +
        "'RegistroHonorario': '" + registroHonorario + "'," +
        "'RegistroPlanificacion': '" + registroPlanificacion + "'," +
        "'MenusEspeciales': '" + menusEspeciales + "'," +
        "'AsesoriaNutricionista': '" + asesoriaNutricionista + "'," +
        "'CertificadosSanitarios': '" + certificadosSanitarios + "'," +
        "'ConservacionAlimentos': '" + conservacionAlimentos + "'," +
        "'CantidadComidas': '" + cantidadComidas + "'," +
        "'CantidadComidasFeriados': '" + cantidadComidasFeriados + "'," +
        "'Observaciones': '" + replaceAll(observaciones, "'", "") + "'," +

        "'AlmacenaAlimento_existe': '" + sel_AlmacenaAlimento_existe + "'," +
        "'EstadoConserva_existe': '" + sel_EstadoConserva_existe + "'" +
        "}";
        
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesAlimentacion",
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

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Alimentación.");
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
                ActivarDesactivarBotonesGrabar(8, false);
            }
        );

    });
}
function ObtenerAntecedentesAlimentacion(CodFicha) {
    $("#labelCaracteres_ObsAlimentacion").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesAlimentacion",
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
                $("#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe").val(this.RegistroHonorario);
                $("#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe").val(this.RegistroPlanificacion);
                $("#alimentacion_003_sel_menuEspeciales_existe").val(this.MenusEspeciales);
                $("#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe").val(this.AsesoriaNutricionista);
                $("#alimentacion_005_sel_certifSanitarioManipuladores_existe").val(this.CertificadosSanitarios);
                $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val(this.ConservacionAlimentos);

                $("#alimentacion_007_comidas_lunes_a_viernes_cantidad").val(this.CantidadComidas);
                $("#alimentacion_008_comidas_sabado_domingo_fest_cantidad").val(this.CantidadComidasFeriados);

                document.getElementById("alimentacion_009_observacion").value = this.Observaciones;
                ContadorCaracter(document.getElementById("alimentacion_009_observacion"), "labelCaracteres_ObsAlimentacion");

                $("#alimentacion_006_sel_AlmacenaAlimento_existe").val(this.AlmacenamientoAlimentos);
                $("#alimentacion_006_sel_EstadoConserva_existe").val(this.EstadoConservacionAlimentos);
            }
        );
        if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesAlimentacion = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            alimentacion_residencia = true;
            CargaCamposComparativa8();
        }
    });
}

function ObtenerAntecedentesAlimentacion_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesAlimentacion",
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
                $("#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_pjud").val(this.RegistroHonorario);
                $("#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_pjud").val(this.RegistroPlanificacion);
                $("#alimentacion_003_sel_menuEspeciales_existe_pjud").val(this.MenusEspeciales);
                $("#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_pjud").val(this.AsesoriaNutricionista);
                $("#alimentacion_005_sel_certifSanitarioManipuladores_existe_pjud").val(this.CertificadosSanitarios);
                $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_pjud").val(this.ConservacionAlimentos);

                $("#alimentacion_007_comidas_lunes_a_viernes_cantidad_pjud").val(this.CantidadComidas);
                $("#alimentacion_008_comidas_sabado_domingo_fest_cantidad_pjud").val(this.CantidadComidasFeriados);

                $("#alimentacion_009_observacion_pjud").val(this.Observaciones);
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesAlimentacion_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        alimentacion_pjud = true;
        CargaCamposComparativa8();
    });
}

function ObtenerAntecedentesAlimentacion_Compare(codFichaPadre, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#labelCaracteres_ObsAlimentacion").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesAlimentacion",
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
                if (this.RegistroHonorario != "0" && this.RegistroHonorario != "-1")
                    $("#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe" + sufijo).val(1);
                else
                    $("#alimentacion_001_sel_registroHonorarioEntregaAlimento_existe" + sufijo).val(0);

                if (this.RegistroPlanificacion != "0" && this.RegistroPlanificacion != "-1")
                    $("#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe" + sufijo).val(1);
                else
                    $("#alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe" + sufijo).val(0);

                if (this.MenusEspeciales != "0" && this.MenusEspeciales != "-1")
                    $("#alimentacion_003_sel_menuEspeciales_existe" + sufijo).val(1);
                else
                    $("#alimentacion_003_sel_menuEspeciales_existe" + sufijo).val(0);

                if (this.AsesoriaNutricionista != "0" && this.AsesoriaNutricionista != "-1")
                    $("#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe" + sufijo).val(1);
                else
                    $("#alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe" + sufijo).val(0);

                if (this.CertificadosSanitarios != "0" && this.CertificadosSanitarios != "-1")
                    $("#alimentacion_005_sel_certifSanitarioManipuladores_existe" + sufijo).val(1);
                else
                    $("#alimentacion_005_sel_certifSanitarioManipuladores_existe" + sufijo).val(0);

                if (this.ConservacionAlimentos != "0" && this.ConservacionAlimentos != "-1")
                    $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe" + sufijo).val(1);
                else
                    $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe" + sufijo).val(0);

                if (this.AlmacenamientoAlimentos != "0" && this.AlmacenamientoAlimentos != "-1")
                    $("#alimentacion_006_sel_AlmacenaAlimento_existe" + sufijo).val(1);
                else
                    $("#alimentacion_006_sel_AlmacenaAlimento_existe" + sufijo).val(0);

                if (this.EstadoConservacionAlimentos != "0" && this.EstadoConservacionAlimentos != "-1")
                    $("#alimentacion_006_sel_EstadoConserva_existe" + sufijo).val(1);
                else
                    $("#alimentacion_006_sel_EstadoConserva_existe" + sufijo).val(0);

                $("#alimentacion_007_comidas_lunes_a_viernes_cantidad" + sufijo).val(this.CantidadComidas);
                $("#alimentacion_008_comidas_sabado_domingo_fest_cantidad" + sufijo).val(this.CantidadComidasFeriados);

                document.getElementById("alimentacion_009_observacion" + sufijo).value = this.Observaciones;
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesAlimentacion_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            alimentacion_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesAlimentacion_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            alimentacion_residencia_comp002 = true;
        }
        CargaCamposComparativa8_();
    });
}
////++++++++++++++++++++++
//FUNCIONES FRONTEND
function EvaluaAlmacenaAlimentoEstadoConserva(){
    if ($("#alimentacion_006_sel_AlmacenaAlimento_existe").val() == "1" &&
        $("#alimentacion_006_sel_EstadoConserva_existe").val() == "1")
        $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val(1);
    else
        $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val(0);
}