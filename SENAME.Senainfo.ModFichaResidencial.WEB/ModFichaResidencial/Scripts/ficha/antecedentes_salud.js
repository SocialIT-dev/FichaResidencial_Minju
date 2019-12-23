////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
var ParValores = { 0: "NO", 1: "SI" };

function CargaParSalud() {
    $("#gridSalud").DataTable().destroy();
    $('#gridSalud').dataTable({
        "ajax": {
            "url": "FichaResidencial.aspx/ObtenerParSalud",
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
            { "data": "IdParSalud" },
            { "data": "NombreParSalud", "sClass": "etiqCampo3" },
            { "data": "VariableCuantitativa" },
            { "data": "SegundaVarCuantitativa" },
            { "data": "IndVigencia" },
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    if (data.IndVigencia == 'V') {
                        if (data.VariableCuantitativa == 1) {
                            var $input = $("<input type='text' id='IdParSaludValor_" + data.IdParSalud + "' placeHolder='Especifique' class='form-control' style='width: 100px;' maxlength='4' onkeypress='return ValidaIngresoSoloNumeros(this.value, event);'>", {});
                            return $input.prop("outerHTML");
                        }
                        else { 
                            if (data.SegundaVarCuantitativa == true && data.IdParSalud == 22) 
                                var $select = $("<select id='IdParSalud_" + data.IdParSalud + "' class='form-control dllSiNo' style='width: 100px;' onchange='EvaluaCuantasAdolescentesControlAldia_select();'></select>", {});
                            else
                               var $select = $("<select id='IdParSalud_" + data.IdParSalud + "' class='form-control dllSiNo' style='width: 100px;'></select>", {});

                            $.each(ParValores, function (k, v) {
                                var $option = $("<option></option>", {
                                    "text": v,
                                    "value": k
                                });
                                if (data == v) {
                                    $option.attr("selected", "selected");
                                }
                                $select.append($option);
                            });
                            return $select.prop("outerHTML");
                        }
                    }
                }
            },
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    var dataRender;
                    if (data.IndVigencia == 'V') {
                        if (data.SegundaVarCuantitativa == true && data.IdParSalud == 22) {
                            var $input = $("<input type='text' id='IdParSaludValor_" + data.IdParSalud + "' placeHolder='Especifique' style='width:100px;' class='form-control' maxlength='4'  onkeyup='EvaluaCuantasAdolescentesControlAldia(this);' onkeypress='return ValidaIngresoSoloNumeros(this.value, event)'>", {});

                            return $input.prop("outerHTML");
                        } else {
                            dataRender = "";
                            return dataRender;
                        }
                    }
                }
            }
        ],
        "columnDefs": [{
            "targets": [0, 2, 3, 4],
            "visible": false,
            "searchable": false
        } 
        ],
        "fixedColumns": true,
        "bLengthChange": false,
        "bInfo": false,
        "bPaginate": false
    });
    document.getElementById("salud_016_observaciones").disabled = false;
   

}

function GrabarAntecedentesSalud() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var NNACesfam = $("#IdParSaludValor_1").val() == undefined ? -1 : $("#IdParSaludValor_1").val();
    var NNASaludMentalDiagnostico = $("#IdParSaludValor_2").val() == undefined ? -1 : $("#IdParSaludValor_2").val();
    var NNASaludMental = $("#IdParSaludValor_3").val() == undefined ? -1 : $("#IdParSaludValor_3").val();
    var NNACronicos = $("#IdParSaludValor_4").val() == undefined ? -1 : $("#IdParSaludValor_4").val();
    var NNADiscapacitados = $("#IdParSaludValor_7").val() == undefined ? -1 : $("#IdParSaludValor_7").val();
    var NNAMedicamento = $("#IdParSaludValor_8").val() == undefined ? -1 : $("#IdParSaludValor_8").val();
    var NNATratamiento = $("#IdParSaludValor_9").val() == undefined ? -1 : $("#IdParSaludValor_9").val();
    

    var RegistroMedicamentoNNA = $("#IdParSalud_15").val() == undefined ? "0" : $("#IdParSalud_15").val();
    var ProtocoloAdmMedicamentos = $("#IdParSalud_16").val() == undefined ? "0" : $("#IdParSalud_16").val();
    var ControlGinecologico = $("#IdParSalud_19").val() == undefined ? "0" : $("#IdParSalud_19").val();
    var NegadaControlGinecologico = $("#IdParSalud_20").val() == undefined ? "0" : $("#IdParSalud_20").val();
    var AdolecentesEmbarazadas = $("#IdParSalud_21").val() == undefined ? "0" : $("#IdParSalud_21").val();
    var AdolecentesEmbarazadasControl = $("#IdParSaludValor_22").val() == undefined ? -1 : $("#IdParSaludValor_22").val();
    var Observaciones= replaceAll(EliminaEspacios(document.getElementById("salud_016_observaciones").value),"'","");

    var NNA_EsperaTransplantes = $("#IdParSaludValor_5").val() == undefined ? -1 : $("#IdParSaludValor_5").val();
    var NNA_Transplantados = $("#IdParSaludValor_6").val() == undefined ? -1 : $("#IdParSaludValor_6").val();

    var NNADrogas = $("#IdParSaludValor_10").val() == undefined ? -1 : $("#IdParSaludValor_10").val();
    var NNA_consumoAlcohol = $("#IdParSaludValor_11").val() == undefined ? -1 : $("#IdParSaludValor_11").val();
    var NNAAlcoholyDroga = $("#IdParSaludValor_12").val() == undefined ? -1 : $("#IdParSaludValor_12").val();

    var sel_resguardoMedicamentos = $("#IdParSalud_13").val() == undefined ? "0" : $("#IdParSalud_13").val();
    var sel_inventarioMedicamentos = $("#IdParSalud_14").val() == undefined ? "0" : $("#IdParSalud_14").val();
    var sel_control_nino_sano = $("#IdParSalud_17").val() == undefined ? "0" : $("#IdParSalud_17").val();
    var sel_control_adolescente_sano = $("#IdParSalud_18").val() == undefined ? "0" : $("#IdParSalud_18").val();
    
    if( NNACesfam == "") NNACesfam= "0";
    if( NNASaludMentalDiagnostico == "") NNASaludMentalDiagnostico= "0"; 
    if( NNASaludMental  == "") NNASaludMental= "0";
    if( NNACronicos  == "") NNACronicos= "0";
    if( NNADiscapacitados  == "")NNADiscapacitados = "0";
    if( NNAMedicamento  == "") NNAMedicamento= "0";
    if( NNATratamiento  == "") NNATratamiento= "0";
    if( NNADrogas == "") NNADrogas = "0";

    if (NNA_EsperaTransplantes == "") NNA_EsperaTransplantes = "0";
    if (NNA_Transplantados == "") NNA_Transplantados = "0";
    if (NNA_consumoAlcohol == "") NNA_consumoAlcohol = "0";
    if (NNAAlcoholyDroga == "") NNAAlcoholyDroga = "0";

    if (AdolecentesEmbarazadasControl == "") AdolecentesEmbarazadasControl = "0";
    
    var dataParametros =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +
        "'NNACesfam': '" + NNACesfam + "'," +
        "'NNASaludMentalDiagnostico': '" + NNASaludMentalDiagnostico + "'," +
        "'NNASaludMental': '" + NNASaludMental + "'," +
        "'NNACronicos': '" + NNACronicos + "'," +
        "'NNADiscapacitados': '" + NNADiscapacitados + "',"+
        "'NNAMedicamento': '" + NNAMedicamento + "',"+
        "'NNATratamiento': '" + NNATratamiento + "',"+
        "'NNADrogas': '" + NNADrogas + "',"+
        "'RegistroMedicamentoNNA': '" + RegistroMedicamentoNNA + "',"+
        "'ProtocoloAdmMedicamentos': '" + ProtocoloAdmMedicamentos + "',"+
        "'ControlGinecologico': '" + ControlGinecologico + "',"+
        "'NegadaControlGinecologico': '" + NegadaControlGinecologico + "',"+
        "'AdolecentesEmbarazadas': '" + AdolecentesEmbarazadas + "',"+
        "'AdolecentesEmbarazadasControl': '" + AdolecentesEmbarazadasControl + "',"+
        "'Observaciones': '" + Observaciones + "'," +

        "'NNA_EsperaTransplantes': '" + NNA_EsperaTransplantes + "'," +
        "'NNA_Transplantados': '" + NNA_Transplantados + "'," +
        "'NNA_consumoAlcohol': '" + NNA_consumoAlcohol + "'," +
        "'sel_resguardoMedicamentos': '" + sel_resguardoMedicamentos + "'," +
        "'sel_inventarioMedicamentos': '" + sel_inventarioMedicamentos + "'," +
        "'sel_control_nino_sano': '" + sel_control_nino_sano + "'," +
        "'sel_control_adolescente_sano': '" + sel_control_adolescente_sano + "'," +
        "'NNAAlcoholyDroga': '" + NNAAlcoholyDroga + "'" +
        "}";

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesSalud",
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

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Salud.");
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
                ActivarDesactivarBotonesGrabar(6, false);
            }
        );
    });
}
function ObtenerAntecedentesSalud(CodFicha) {
    $("#labelCaracteres_ObsSalud").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesSalud",
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
                /* N° de NNA Inscritos en CESFAM  -  salud_001_NNA_inscritosCESFAM */
                if (this.NNACesfam == -1) $("#IdParSaludValor_1").val("");
                else $("#IdParSaludValor_1").val(this.NNACesfam);

                /* N° de NNA con Problemática de Salud Mental con Diagnóstico  -  salud_002_NNA_problematicaSaludMental */
                if (this.NNASaludMentalDiagnostico == -1) $("#IdParSaludValor_2").val("");
                else $("#IdParSaludValor_2").val(this.NNASaludMentalDiagnostico);

                /* N° de NNA con Problemática de Salud Mental sin Diagnóstico  -  salud_003_NNA_problematicaSaludMentalsinDiag */
                if (this.NNASaludMental == -1) $("#IdParSaludValor_3").val("");
                else $("#IdParSaludValor_3").val(this.NNASaludMental);

                /* N° de NNA Inscritos con Enfermedad Crónica  -  salud_004_NNA_inscritosEnferCronica */
                if (this.NNACronicos == -1) $("#IdParSaludValor_4").val("");
                else $("#IdParSaludValor_4").val(this.NNACronicos);

                /* N° de NNA Inscritos con Situación de Discapacidad -  salud_005_NNA_Discapacidad */
                if (this.NNADiscapacitados == -1) $("#IdParSaludValor_7").val("");
                else $("#IdParSaludValor_7").val(this.NNADiscapacitados);

                /* N° de NNA recibiendo tratamiento farmacológico -  salud_006_NNA_inscritosProblemSaludRecibeMedica */
                if (this.NNAMedicamento == -1) $("#IdParSaludValor_8").val("");
                else $("#IdParSaludValor_8").val(this.NNAMedicamento);

                /* N° de NNA con Problemática de Salud en Tratamiento  -  salud_007_NNA_problematicaSaludenTratamiento */
                if (this.NNATratamiento == -1) $("#IdParSaludValor_9").val("");
                else $("#IdParSaludValor_9").val(this.NNATratamiento);

                /* ¿Cuenta con Registro de Medicamentos Administrados a los NNA?  -  salud_009_sel_registroMedicamentoAdmin_a_NNA */
                if (this.RegistroMedicamentoNNA != 0 && this.RegistroMedicamentoNNA != -1) $("#IdParSalud_15").val("1");
                else $("#IdParSalud_15").val("0");

                /* ¿Cuenta con Protocolo para la Administración de Medicamentos a los NNA?  -  salud_010_sel_protocoloAdmin_Medica_a_NNA */
                if (this.ProtocoloAdmMedicamentos != 0 && this.ProtocoloAdmMedicamentos != -1) $("#IdParSalud_16").val("1");
                else $("#IdParSalud_16").val("0");

                /* ¿Existe Control Anual Ginecológico en los Adolescentes?  -  salud_011_sel_control_ginecologicoAdolescente */
                if (this.ControlGinecologico != 0 && this.ControlGinecologico != -1) $("#IdParSalud_19").val("1");
                else $("#IdParSalud_19").val("0");

                /* ¿Existen adolescentes que se hayan negado a Control Ginecológico?  -  salud_012_sel_adolescenteNiegaControlGineco */
                if (this.NegadaControlGinecologico != 0 && this.NegadaControlGinecologico != -1) $("#IdParSalud_20").val("1");
                else $("#IdParSalud_20").val("0");

                /* Adolescentes Embarazadas  - salud_013_sel_adolescenteEmbarazada */
                if (this.AdolecentesEmbarazadas != 0 && this.AdolecentesEmbarazadas != -1) $("#IdParSalud_21").val("1");
                else $("#IdParSalud_21").val("0");

                /* n caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?  */
                if (this.AdolecentesEmbarazadasControl == -1)$("#IdParSaludValor_22").val("");
                else $("#IdParSaludValor_22").val(this.AdolecentesEmbarazadasControl);
                
                document.getElementById("salud_016_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("salud_016_observaciones"), "labelCaracteres_ObsSalud");

                /* N° de NNA a la espera de Trasplante  -  salud_015_NNA_EsperaTransplantes */
                if (this.NNAEsperaTransplante == -1) $("#IdParSaludValor_5").val("");
                else $("#IdParSaludValor_5").val(this.NNAEsperaTransplante);

                /* N° de NNA Trasplantados  -  salud_016_NNA_Transplantados */
                if (this.NNATransplantados == -1) $("#IdParSaludValor_6").val("");
                else $("#IdParSaludValor_6").val(this.NNATransplantados);

                /* N° de NNA con Consumo sólo de Drogas  - salud_008_NNA_consumoDrogas */
                if (this.NNADrogas == -1) $("#IdParSaludValor_10").val("");
                else $("#IdParSaludValor_10").val(this.NNADrogas);

                /* N° de NNA con consumo sólo de Alcohol  -  salud_008_NNA_consumoAlcohol */
                if (this.NNAConsumoAlcohol == -1) $("#IdParSaludValor_11").val("");
                else $("#IdParSaludValor_11").val(this.NNAConsumoAlcohol);

                /* N° de NNA con consumo de Alcohol y Drogas  - salud_017_consumoDrogasyAlcohol */
                if (this.NNAConsumoAlcoholDrogas == -1) $("#IdParSaludValor_12").val("");
                else $("#IdParSaludValor_12").val(this.NNAConsumoAlcoholDrogas);

                /* ¿Cuenta con espacio adecuado para el resguardo de medicamentos?  -  salud_009_sel_resguardoMedicamentos */
                if (this.EspacioResguardoMedicamentos != 0 && this.EspacioResguardoMedicamentos != -1) $("#IdParSalud_13").val("1");
                else $("#IdParSalud_13").val("0");

                /* ¿Cuenta con inventario de medicamentos?  -  salud_009_sel_inventarioMedicamentos */
                if (this.InventarioMedicamentos != 0 && this.InventarioMedicamentos != -1) $("#IdParSalud_14").val("1");
                else $("#IdParSalud_14").val("0");

                /* ¿Cuenta con control al día de Niño Sano?  - salud_011_sel_control_nino_sano */
                if (this.ControlNinoSano != 0 && this.ControlNinoSano != -1) $("#IdParSalud_17").val("1");
                else $("#IdParSalud_17").val("0");

                /* ¿Cuenta con control al día de Adolescente Sano?  -  salud_011_sel_control_adolescente_sano */
                if (this.ControlAdolescenteSano != 0 && this.ControlAdolescenteSano != -1) $("#IdParSalud_18").val("1");
                else $("#IdParSalud_18").val("0");

                /* En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?
                 * combo -> salud_014_sel_adolescenteEmbarazadaControlalDia  : se remplazara por IdParSalud_22
                 * imput -> salud_015_adolescenteEmbarazadaControlalDia_cantidad -> onkeyup =EvaluaCuantasAdolescentesControlAldia(this); se remplaza por IdParSaludValor_22
                  */
                if ($("#IdParSaludValor_22").val() != "" && $("#IdParSaludValor_22").val() != "0")
                    if (parseInt($("#IdParSaludValor_22").val(), 10) > 0)
                        $("#IdParSalud_22").val(1);
                    else
                        $("#IdParSalud_22").val(0);
                else
                    $("#IdParSalud_22").val(0);
            }
        );
        if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesSalud = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            salud_residencia = true;
            CargaCamposComparativa6();
        }
    });
}

function ObtenerAntecedentesSalud_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesSalud",
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
                $("#salud_001_NNA_inscritosCESFAM_pjud").val(this.NNACesfam);
                $("#salud_002_NNA_problematicaSaludMental_pjud").val(this.NNASaludMentalDiagnostico);
                $("#salud_003_NNA_problematicaSaludMentalsinDiag_pjud").val(this.NNASaludMental);
                $("#salud_004_NNA_inscritosEnferCronica_pjud").val(this.NNACronicos);
                $("#salud_005_NNA_Discapacidad_pjud").val(this.NNADiscapacitados);
                $("#salud_006_NNA_inscritosProblemSaludRecibeMedica_pjud").val(this.NNAMedicamento);
                $("#salud_007_NNA_problematicaSaludenTratamiento_pjud").val(this.NNATratamiento);
                $("#salud_008_NNA_consumoDrogas_pjud").val(this.NNADrogas);

                $("#salud_009_sel_registroMedicamentoAdmin_a_NNA_pjud").val(this.RegistroMedicamentoNNA);
                $("#salud_010_sel_protocoloAdmin_Medica_a_NNA_pjud").val(this.ProtocoloAdmMedicamentos);
                $("#salud_011_sel_control_ginecologicoAdolescente_pjud").val(this.ControlGinecologico);
                $("#salud_012_sel_adolescenteNiegaControlGineco_pjud").val(this.NegadaControlGinecologico);
                $("#salud_013_sel_adolescenteEmbarazada_pjud").val(this.AdolecentesEmbarazadas);
                $("#salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud").val(this.AdolecentesEmbarazadasControl);

                $("#salud_016_observaciones_pjud").val(this.Observaciones);

                if ($("#salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud").val() != "" && $("#salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud").val() != "0")
                    if (parseInt($("#salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud").val(), 10) > 0)
                        $("#salud_014_sel_adolescenteEmbarazadaControlalDia_pjud").val(1);
                    else
                        $("#salud_014_sel_adolescenteEmbarazadaControlalDia_pjud").val(0);
                else
                    $("#salud_014_sel_adolescenteEmbarazadaControlalDia_pjud").val(0);
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesSalud_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        salud_pjud = true;
        CargaCamposComparativa6();
    });
}

function ObtenerAntecedentesSalud_Compare(codFichaPadre, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#labelCaracteres_ObsSalud").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesSalud",
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
                $("#IdParSaludValor_1" + sufijo).val(this.NNACesfam);
                $("#IdParSaludValor_2" + sufijo).val(this.NNASaludMentalDiagnostico);
                $("#IdParSaludValor_3" + sufijo).val(this.NNASaludMental);
                $("#IdParSaludValor_4" + sufijo).val(this.NNACronicos);
                $("#IdParSaludValor_7" + sufijo).val(this.NNADiscapacitados);
                $("#IdParSaludValor_8" + sufijo).val(this.NNAMedicamento);
                $("#IdParSaludValor_9" + sufijo).val(this.NNATratamiento);
                $("#IdParSaludValor_22" + sufijo).val(this.AdolecentesEmbarazadasControl);
                $("#salud_016_observaciones" + sufijo).val(this.Observaciones);
                $("#IdParSaludValor_5" + sufijo).val(this.NNAEsperaTransplante);
                $("#IdParSaludValor_6" + sufijo).val(this.NNATransplantados);
                $("#IdParSaludValor_10" + sufijo).val(this.NNADrogas);
                $("#IdParSaludValor_11" + sufijo).val(this.NNAConsumoAlcohol);

                //NUEVO CAMPO ANTECEDENETES SALUD, INDICA AQUELLOS NNA CON CONSUMO TANTO DE ALCOHOL, COMO DE DROGAS
                $("#IdParSaludValor_12" + sufijo).val(this.NNAConsumoAlcoholDrogas);

                if (this.EspacioResguardoMedicamentos != "-1" && this.EspacioResguardoMedicamentos!="0")
                    $("#IdParSalud_13" + sufijo).val(1);
                else
                    $("#IdParSalud_13" + sufijo).val(0);

                if (this.InventarioMedicamentos != "-1" && this.InventarioMedicamentos != "0")
                    $("#IdParSalud_14" + sufijo).val(1);
                else
                    $("#IdParSalud_14" + sufijo).val(0);

                if (this.ControlNinoSano != "-1" && this.ControlNinoSano != "0")
                    $("#IdParSalud_17" + sufijo).val(1);
                else
                    $("#IdParSalud_17" + sufijo).val(0);

                if (this.ControlAdolescenteSano != "-1" && this.ControlAdolescenteSano != "0")
                    $("#IdParSalud_18" + sufijo).val(1);
                else
                    $("#IdParSalud_18" + sufijo).val(0);

                if (this.RegistroMedicamentoNNA != "-1" && this.RegistroMedicamentoNNA != "0")
                    $("#IdParSalud_15" + sufijo).val(1);
                else
                    $("#IdParSalud_15" + sufijo).val(0);

                if (this.ProtocoloAdmMedicamentos != "-1" && this.ProtocoloAdmMedicamentos != "0")
                    $("#IdParSalud_16" + sufijo).val(1);
                else
                    $("#IdParSalud_16" + sufijo).val(0);

                if (this.ControlGinecologico != "-1" && this.ControlGinecologico != "0")
                    $("#IdParSalud_19" + sufijo).val(1);
                else
                    $("#IdParSalud_19" + sufijo).val(0);

                if (this.NegadaControlGinecologico != "-1" && this.NegadaControlGinecologico != "0")
                    $("#IdParSalud_20" + sufijo).val(1);
                else
                    $("#IdParSalud_20" + sufijo).val(0);

                if (this.AdolecentesEmbarazadas != "-1" && this.AdolecentesEmbarazadas != "0")
                    $("#IdParSalud_21" + sufijo).val(1);
                else
                    $("#IdParSalud_21" + sufijo).val(0);


                if ($("#IdParSaludValor_22" + sufijo).val() != "" && $("#IdParSaludValor_22" + sufijo).val() != "0")
                    if (parseInt($("#IdParSaludValor_22" + sufijo).val(), 10) > 0)
                        $("#IdParSaludValor_22" + sufijo).val(1);
                    else
                        $("#IdParSaludValor_22" + sufijo).val(0);
                else
                    $("#IdParSaludValor_22" + sufijo).val(0);
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesSalud_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            salud_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesSalud_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            salud_residencia_comp002 = true;
        }
        CargaCamposComparativa6_();
    });
}
////++++++++++++++++++++++
//FUNCIONES FRONTEND   
function EvaluaCuantasAdolescentesControlAldia(objInput) {
    if (EliminaEspacios(objInput.value) != "" && EliminaEspacios(objInput.value) != "0") {
        if (parseInt(EliminaEspacios(objInput.value),10) > 0)
            $("#IdParSalud_22").val(1);
        else
            $("#IdParSalud_22").val(0);
    }
    else {
        $("#IdParSalud_22").val(0);
    }
}

function EvaluaCuantasAdolescentesControlAldia_select() {
   
    if (document.getElementById("IdParSalud_22").value == "0") {
        $("#IdParSalud_22").val(0);
        $("#IdParSaludValor_22").val(0);
    } else {
        $("#IdParSaludValor_22").val(1);
        $("#IdParSalud_22").val(1);
    }

}
