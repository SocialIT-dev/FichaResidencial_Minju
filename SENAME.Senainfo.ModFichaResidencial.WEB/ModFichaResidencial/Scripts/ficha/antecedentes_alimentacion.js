////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesAlimentacion() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var registroHonorario = $("#IdParAlimentacion_1").val() == undefined ? -1 : $("#IdParAlimentacion_1").val();
    var registroPlanificacion = $("#IdParAlimentacion_2").val() == undefined ? -1 : $("#IdParAlimentacion_2").val();
    var menusEspeciales = $("#IdParAlimentacion_3").val() == undefined ? -1 : $("#IdParAlimentacion_3").val();
    var asesoriaNutricionista = $("#IdParAlimentacion_4").val() == undefined ? -1 : $("#IdParAlimentacion_4").val();
    var certificadosSanitarios = $("#IdParAlimentacion_5").val() == undefined ? -1 : $("#IdParAlimentacion_5").val();
    var conservacionAlimentos = $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val();

    var cantidadComidas = $("#IdParAlimentacion_8").val() == undefined ? -1 : $("#IdParAlimentacion_8").val();
    var cantidadComidasFeriados = $("#IdParAlimentacion_9").val() == undefined ? -1 : $("#IdParAlimentacion_9").val();
    var observaciones = replaceAll(EliminaEspacios(document.getElementById("alimentacion_009_observacion").value), "'", "");

    var sel_AlmacenaAlimento_existe = $("#IdParAlimentacion_6").val() == undefined ? -1 : $("#IdParAlimentacion_6").val();
    var sel_EstadoConserva_existe = $("#IdParAlimentacion_7").val() == undefined ? -1 : $("#IdParAlimentacion_7").val();

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

var ParValores = { 0: "NO", 1: "SI" };
function CargaParAlimentacion() {
    $("#gridAlimentacion").DataTable().destroy();
    $('#gridAlimentacion').dataTable({
        "ajax": {
            "url": "FichaResidencial.aspx/ObtenerParAlimentacion",
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
            { "data": "IdParAlimentacion" },
            { "data": "NombreParAlimentacion", "sClass": "etiqCampo3" },
            { "data": "VariableCuantitativa" },
            { "data": "IndVigencia"},
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    if (data.IndVigencia == 'V') {
                        if (data.VariableCuantitativa == 0) {
                            var $select = $("<select id='IdParAlimentacion_" + data.IdParAlimentacion + "' class='form-control dllSiNo' style='width: 100px;'></select>", {
                            });

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
                        else {
                            var $input = $("<input type='text' id='IdParAlimentacion_" + data.IdParAlimentacion + "' placeHolder='Especifique' class='form-control' style='width: 100px;' maxlength='4' onkeypress='return ValidaIngresoSoloNumeros(this.value, event);'>", {});
                            return $input.prop("outerHTML");
                        }
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
                /* 1- Cuenta con Registro de Horarios de Entrega de Alimentos */ /*alimentacion_001_sel_registroHonorarioEntregaAlimento_existe*/
                if (this.RegistroHonorario != 0 && this.RegistroHonorario != -1) $("#IdParAlimentacion_1").val("1");
                else $("#IdParAlimentacion_1").val("0");

                /* 2- ¿Cuenta con minuta alimentaria? */ /* alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe */
                if (this.RegistroPlanificacion != 0 && this.RegistroPlanificacion != -1) $("#IdParAlimentacion_2").val("1");
                else $("#IdParAlimentacion_2").val("0");

                /* 3- Existencia de Menús Especiales */ /* alimentacion_003_sel_menuEspeciales_existe */
                if (this.MenusEspeciales != 0 && this.MenusEspeciales != -1) $("#IdParAlimentacion_3").val("1");
                else $("#IdParAlimentacion_3").val("0");

                /* 4- ¿Cuenta con minuta alimentaria aprobada? */ /* alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe */
                if (this.AsesoriaNutricionista != 0 && this.AsesoriaNutricionista != -1) $("#IdParAlimentacion_4").val("1");
                else $("#IdParAlimentacion_4").val("0");

                /* 5- Existen Certificados Sanitarios de las Manipuladoras */ /* alimentacion_005_sel_certifSanitarioManipuladores_existe */
                if (this.CertificadosSanitarios != 0 && this.CertificadosSanitarios != -1) $("#IdParAlimentacion_5").val("1");
                else $("#IdParAlimentacion_5").val("0");
        
                /* 6- Almacenamiento de Alimentos */ /* alimentacion_006_sel_AlmacenaAlimento_existe */
                if (this.AlmacenamientoAlimentos != 0 && this.AlmacenamientoAlimentos != -1) $("#IdParAlimentacion_6").val("1");
                else $("#IdParAlimentacion_6").val("0");

                /* 7- Estado de Conservación */ /* alimentacion_006_sel_EstadoConserva_existe */
                if (this.EstadoConservacionAlimentos != 0 && this.EstadoConservacionAlimentos != -1) $("#IdParAlimentacion_7").val("1");
                else $("#IdParAlimentacion_7").val("0");

                /* 8- N° de Comidas Entregadas de Lunes a Viernes */ /* alimentacion_007_comidas_lunes_a_viernes_cantidad */
                $("#IdParAlimentacion_8").val(this.CantidadComidas);
             
                /* 9- N° de Comidas Entregadas Sábado, Domingo y Festivos */ /* alimentacion_008_comidas_sabado_domingo_fest_cantidad */
                $("#IdParAlimentacion_9").val(this.CantidadComidasFeriados);

                $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val(this.ConservacionAlimentos); // style="display:none;"

                document.getElementById("alimentacion_009_observacion").value = this.Observaciones;
                ContadorCaracter(document.getElementById("alimentacion_009_observacion"), "labelCaracteres_ObsAlimentacion");  
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
                    $("#IdParAlimentacion_1" + sufijo).val(1);
                else
                    $("#IdParAlimentacion_1" + sufijo).val(0);

                if (this.RegistroPlanificacion != "0" && this.RegistroPlanificacion != "-1")
                    $("#IdParAlimentacion_2" + sufijo).val(1);
                else
                    $("#IdParAlimentacion_2" + sufijo).val(0);

                if (this.MenusEspeciales != "0" && this.MenusEspeciales != "-1")
                    $("#IdParAlimentacion_3" + sufijo).val(1);
                else
                    $("#IdParAlimentacion_3" + sufijo).val(0);

                if (this.AsesoriaNutricionista != "0" && this.AsesoriaNutricionista != "-1")
                    $("#IdParAlimentacion_4" + sufijo).val(1);
                else
                    $("#IdParAlimentacion_4" + sufijo).val(0);

                if (this.CertificadosSanitarios != "0" && this.CertificadosSanitarios != "-1")
                    $("#IdParAlimentacion_5" + sufijo).val(1);
                else
                    $("#IdParAlimentacion_5" + sufijo).val(0);

                if (this.ConservacionAlimentos != "0" && this.ConservacionAlimentos != "-1")
                    $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe" + sufijo).val(1);
                else
                    $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe" + sufijo).val(0);

                if (this.AlmacenamientoAlimentos != "0" && this.AlmacenamientoAlimentos != "-1")
                    $("#IdParAlimentacion_6" + sufijo).val(1);
                else
                    $("#IdParAlimentacion_6" + sufijo).val(0);

                if (this.EstadoConservacionAlimentos != "0" && this.EstadoConservacionAlimentos != "-1")
                    $("#IdParAlimentacion_7" + sufijo).val(1);
                else
                    $("#IdParAlimentacion_7" + sufijo).val(0);

                $("#IdParAlimentacion_8" + sufijo).val(this.CantidadComidas);
                $("#IdParAlimentacion_9" + sufijo).val(this.CantidadComidasFeriados);

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
    if ($("#IdParAlimentacion_6").val() == "1" &&
        $("#IdParAlimentacion_7").val() == "1")
        $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val(1);
    else
        $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val(0);
}