////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesSalud() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var NNACesfam= $("#salud_001_NNA_inscritosCESFAM").val();
    var NNASaludMentalDiagnostico= $("#salud_002_NNA_problematicaSaludMental").val();
    var NNASaludMental= $("#salud_003_NNA_problematicaSaludMentalsinDiag").val();
    var NNACronicos= $("#salud_004_NNA_inscritosEnferCronica").val();
    var NNADiscapacitados= $("#salud_005_NNA_Discapacidad").val();
    var NNAMedicamento= $("#salud_006_NNA_inscritosProblemSaludRecibeMedica").val();
    var NNATratamiento= $("#salud_007_NNA_problematicaSaludenTratamiento").val();
    

    var RegistroMedicamentoNNA= $("#salud_009_sel_registroMedicamentoAdmin_a_NNA").val();
    var ProtocoloAdmMedicamentos= $("#salud_010_sel_protocoloAdmin_Medica_a_NNA").val();
    var ControlGinecologico= $("#salud_011_sel_control_ginecologicoAdolescente").val();
    var NegadaControlGinecologico= $("#salud_012_sel_adolescenteNiegaControlGineco").val();
    var AdolecentesEmbarazadas= $("#salud_013_sel_adolescenteEmbarazada").val();
    var AdolecentesEmbarazadasControl= $("#salud_015_adolescenteEmbarazadaControlalDia_cantidad").val();
    var Observaciones= replaceAll(EliminaEspacios(document.getElementById("salud_016_observaciones").value),"'","");

    var NNA_EsperaTransplantes = $("#salud_015_NNA_EsperaTransplantes").val();
    var NNA_Transplantados = $("#salud_016_NNA_Transplantados").val();

    var NNADrogas = $("#salud_008_NNA_consumoDrogas").val();
    var NNA_consumoAlcohol = $("#salud_008_NNA_consumoAlcohol").val();
    var NNAAlcoholyDroga = $("#salud_017_consumoDrogasyAlcohol").val();

    var sel_resguardoMedicamentos = $("#salud_009_sel_resguardoMedicamentos").val();
    var sel_inventarioMedicamentos = $("#salud_009_sel_inventarioMedicamentos").val();
    var sel_control_nino_sano = $("#salud_011_sel_control_nino_sano").val();
    var sel_control_adolescente_sano = $("#salud_011_sel_control_adolescente_sano").val();

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
                $("#salud_001_NNA_inscritosCESFAM").val(this.NNACesfam);
                $("#salud_002_NNA_problematicaSaludMental").val(this.NNASaludMentalDiagnostico);
                $("#salud_003_NNA_problematicaSaludMentalsinDiag").val(this.NNASaludMental);
                $("#salud_004_NNA_inscritosEnferCronica").val(this.NNACronicos);
                $("#salud_005_NNA_Discapacidad").val(this.NNADiscapacitados);
                $("#salud_006_NNA_inscritosProblemSaludRecibeMedica").val(this.NNAMedicamento);
                $("#salud_007_NNA_problematicaSaludenTratamiento").val(this.NNATratamiento);

                $("#salud_009_sel_registroMedicamentoAdmin_a_NNA").val(this.RegistroMedicamentoNNA);
                $("#salud_010_sel_protocoloAdmin_Medica_a_NNA").val(this.ProtocoloAdmMedicamentos);
                $("#salud_011_sel_control_ginecologicoAdolescente").val(this.ControlGinecologico);
                $("#salud_012_sel_adolescenteNiegaControlGineco").val(this.NegadaControlGinecologico);
                $("#salud_013_sel_adolescenteEmbarazada").val(this.AdolecentesEmbarazadas);
                $("#salud_015_adolescenteEmbarazadaControlalDia_cantidad").val(this.AdolecentesEmbarazadasControl);

                document.getElementById("salud_016_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("salud_016_observaciones"), "labelCaracteres_ObsSalud");

                $("#salud_015_NNA_EsperaTransplantes").val(this.NNAEsperaTransplante);
                $("#salud_016_NNA_Transplantados").val(this.NNATransplantados);

                $("#salud_008_NNA_consumoDrogas").val(this.NNADrogas);
                $("#salud_008_NNA_consumoAlcohol").val(this.NNAConsumoAlcohol);

                //NUEVO CAMPO ANTECEDENETES SALUD, INDICA AQUELLOS NNA CON CONSUMO TANTO DE ALCOHOL, COMO DE DROGAS
                $("#salud_017_consumoDrogasyAlcohol").val(this.NNAConsumoAlcoholDrogas);

                $("#salud_009_sel_resguardoMedicamentos").val(this.EspacioResguardoMedicamentos);
                $("#salud_009_sel_inventarioMedicamentos").val(this.InventarioMedicamentos);
                $("#salud_011_sel_control_nino_sano").val(this.ControlNinoSano);
                $("#salud_011_sel_control_adolescente_sano").val(this.ControlAdolescenteSano);

                if ($("#salud_015_adolescenteEmbarazadaControlalDia_cantidad").val() != "" && $("#salud_015_adolescenteEmbarazadaControlalDia_cantidad").val() != "0")
                    if( parseInt($("#salud_015_adolescenteEmbarazadaControlalDia_cantidad").val(),10) > 0)
                        $("#salud_014_sel_adolescenteEmbarazadaControlalDia").val(1);
                    else
                        $("#salud_014_sel_adolescenteEmbarazadaControlalDia").val(0);
                else
                    $("#salud_014_sel_adolescenteEmbarazadaControlalDia").val(0);
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
                $("#salud_001_NNA_inscritosCESFAM" + sufijo).val(this.NNACesfam);
                $("#salud_002_NNA_problematicaSaludMental" + sufijo).val(this.NNASaludMentalDiagnostico);
                $("#salud_003_NNA_problematicaSaludMentalsinDiag" + sufijo).val(this.NNASaludMental);
                $("#salud_004_NNA_inscritosEnferCronica" + sufijo).val(this.NNACronicos);
                $("#salud_005_NNA_Discapacidad" + sufijo).val(this.NNADiscapacitados);
                $("#salud_006_NNA_inscritosProblemSaludRecibeMedica" + sufijo).val(this.NNAMedicamento);
                $("#salud_007_NNA_problematicaSaludenTratamiento" + sufijo).val(this.NNATratamiento);
                $("#salud_015_adolescenteEmbarazadaControlalDia_cantidad" + sufijo).val(this.AdolecentesEmbarazadasControl);
                $("#salud_016_observaciones" + sufijo).val(this.Observaciones);
                $("#salud_015_NNA_EsperaTransplantes" + sufijo).val(this.NNAEsperaTransplante);
                $("#salud_016_NNA_Transplantados" + sufijo).val(this.NNATransplantados);
                $("#salud_008_NNA_consumoDrogas" + sufijo).val(this.NNADrogas);
                $("#salud_008_NNA_consumoAlcohol" + sufijo).val(this.NNAConsumoAlcohol);

                //NUEVO CAMPO ANTECEDENETES SALUD, INDICA AQUELLOS NNA CON CONSUMO TANTO DE ALCOHOL, COMO DE DROGAS
                $("#salud_017_consumoDrogasyAlcohol" + sufijo).val(this.NNAConsumoAlcoholDrogas);

                if (this.EspacioResguardoMedicamentos != "-1" && this.EspacioResguardoMedicamentos!="0")
                    $("#salud_009_sel_resguardoMedicamentos" + sufijo).val(1);
                else
                    $("#salud_009_sel_resguardoMedicamentos" + sufijo).val(0);

                if (this.InventarioMedicamentos != "-1" && this.InventarioMedicamentos != "0")
                    $("#salud_009_sel_inventarioMedicamentos" + sufijo).val(1);
                else
                    $("#salud_009_sel_inventarioMedicamentos" + sufijo).val(0);

                if (this.ControlNinoSano != "-1" && this.ControlNinoSano != "0")
                    $("#salud_011_sel_control_nino_sano" + sufijo).val(1);
                else
                    $("#salud_011_sel_control_nino_sano" + sufijo).val(0);

                if (this.ControlAdolescenteSano != "-1" && this.ControlAdolescenteSano != "0")
                    $("#salud_011_sel_control_adolescente_sano" + sufijo).val(1);
                else
                    $("#salud_011_sel_control_adolescente_sano" + sufijo).val(0);

                if (this.RegistroMedicamentoNNA != "-1" && this.RegistroMedicamentoNNA != "0")
                    $("#salud_009_sel_registroMedicamentoAdmin_a_NNA" + sufijo).val(1);
                else
                    $("#salud_009_sel_registroMedicamentoAdmin_a_NNA" + sufijo).val(0);

                if (this.ProtocoloAdmMedicamentos != "-1" && this.ProtocoloAdmMedicamentos != "0")
                    $("#salud_010_sel_protocoloAdmin_Medica_a_NNA" + sufijo).val(1);
                else
                    $("#salud_010_sel_protocoloAdmin_Medica_a_NNA" + sufijo).val(0);

                if (this.ControlGinecologico != "-1" && this.ControlGinecologico != "0")
                    $("#salud_011_sel_control_ginecologicoAdolescente" + sufijo).val(1);
                else
                    $("#salud_011_sel_control_ginecologicoAdolescente" + sufijo).val(0);

                if (this.NegadaControlGinecologico != "-1" && this.NegadaControlGinecologico != "0")
                    $("#salud_012_sel_adolescenteNiegaControlGineco" + sufijo).val(1);
                else
                    $("#salud_012_sel_adolescenteNiegaControlGineco" + sufijo).val(0);

                if (this.AdolecentesEmbarazadas != "-1" && this.AdolecentesEmbarazadas != "0")
                    $("#salud_013_sel_adolescenteEmbarazada" + sufijo).val(1);
                else
                    $("#salud_013_sel_adolescenteEmbarazada" + sufijo).val(0);


                if ($("#salud_015_adolescenteEmbarazadaControlalDia_cantidad" + sufijo).val() != "" && $("#salud_015_adolescenteEmbarazadaControlalDia_cantidad" + sufijo).val() != "0")
                    if (parseInt($("#salud_015_adolescenteEmbarazadaControlalDia_cantidad" + sufijo).val(), 10) > 0)
                        $("#salud_014_sel_adolescenteEmbarazadaControlalDia" + sufijo).val(1);
                    else
                        $("#salud_014_sel_adolescenteEmbarazadaControlalDia" + sufijo).val(0);
                else
                    $("#salud_014_sel_adolescenteEmbarazadaControlalDia" + sufijo).val(0);
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
            $("#salud_014_sel_adolescenteEmbarazadaControlalDia").val(1);
        else
            $("#salud_014_sel_adolescenteEmbarazadaControlalDia").val(0);
    }
    else {
        $("#salud_014_sel_adolescenteEmbarazadaControlalDia").val(0);
    }
}
