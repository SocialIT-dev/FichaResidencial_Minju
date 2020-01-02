////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesEducacion() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var NNAEducacion = $("#educacion_001_NNA_asisten_colegio_cantidad").val();

    var NNAEducacionNo = $("#educacion_002_NNA_NO_asisten_colegio_cantidad").val();
    var NNAEducacionNoMotivo = $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").val();

    var NNARetrasoEscolar= $("#educacion_003_NNA_retrasoEscolar_cantidad").val();
    var NNAMatriculaCancelada= $("#educacion_004_NNA_matriculaCancelada_cantidad").val();
    var NNAEducaionEspecial= $("#educacion_005_NNA_asisten_colegioDiferencial_cantidad").val();
    var NNANivelacion= $("#educacion_006_NNA_asisten_colegioNivelacion_cantidad").val();

    var EspaciosEstudios= $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe").val();
    var MaterialBibliografico= $("#educacion_008_sel_materialBibliiografico_existe").val();
    var Computadores= $("#educacion_009_sel_computadores_existe").val();
    var AccesoInternetControlado = $("#educacion_010_sel_AccesoControladoInternet_existe").val();

    var NNA_matriculados = $("#educacion_001_NNA_matriculados").val();
    var NNA_examenesLibres = $("#educacion_006_NNA_examenesLibres_cantidad").val();


    var Observaciones= replaceAll(EliminaEspacios(document.getElementById("educacion_011_observaciones").value),"'","");

    if( NNAEducacion == "" ) NNAEducacion = "0";
    if( NNAEducacionNo  == "" ) NNAEducacionNo= "0";
    if( NNARetrasoEscolar  == "" ) NNARetrasoEscolar= "0";
    if( NNAMatriculaCancelada  == "" ) NNAMatriculaCancelada= "0";
    if( NNAEducaionEspecial  == "" ) NNAEducaionEspecial= "0";
    if (NNANivelacion == "") NNANivelacion = "0";
    if (NNA_matriculados == "") NNA_matriculados = "0";
    if (NNA_examenesLibres == "") NNA_examenesLibres = "0";

    var dataParametros =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +
        "'NNAEducacion': '" + NNAEducacion + "'," +
        "'NNAEducacionNo': '" + NNAEducacionNo + "'," +
        "'NNARetrasoEscolar': '" + NNARetrasoEscolar + "'," +
        "'NNAMatriculaCancelada': '" + NNAMatriculaCancelada + "'," +
        "'NNAEducaionEspecial': '" + NNAEducaionEspecial + "'," +
        "'NNANivelacion': '" + NNANivelacion + "'," +
        "'EspaciosEstudios': '" + EspaciosEstudios + "'," +
        "'MaterialBibliografico': '" + MaterialBibliografico + "'," +
        "'Computadores': '" + Computadores + "'," +
        "'AccesoInternetControlado': '" + AccesoInternetControlado + "'," +
        "'Observaciones': '" + Observaciones + "'," +

        "'NNA_matriculados': '" + NNA_matriculados + "'," +
        "'NNA_examenesLibres': '" + NNA_examenesLibres + "'," +
        "'NNAEducacionNoMotivo': '" + NNAEducacionNoMotivo + "'" +
        "}";
        
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesEducacion",
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

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Educación.");
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
                ActivarDesactivarBotonesGrabar(7, false);
            }
        );

    });
}

function ObtenerAntecedentesEducacion(CodProyecto, CodFicha) {
    $("#labelCaracteres_ObsEducacion").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesEducacion",
        data: "{'CodProyecto': '" + CodProyecto + "', " +
            "'CodFicha': '" + CodFicha + "'}",
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
                $("#educacion_001_NNA_asisten_colegio_cantidad").val(this.numeroAsistencia);/* 2. N° de NNA que si asisten a Establecimiento Educacional */

                $("#educacion_002_NNA_NO_asisten_colegio_cantidad").val(this.numeroNoAsistencia); /* 3. N° de NNA que no asisten a Establecimiento Educacional */

                /* NUEVO CAMPO ANTECEDENETES EDUCACIÓN: /* 4. Motivo de inasistencia de NNA a Establecimiento Educacional */
                if (this.NNAEducacionNo == "0" || this.NNAEducacionNo == "" || this.NNAEducacionNo == undefined) {
                    $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").val(0);
                    $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").attr("disabled", false);
                }
                else {
                    $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").val(this.NNAEducacionNoMotivo);
                    $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").attr("disabled", false);
                }

                $("#educacion_003_NNA_retrasoEscolar_cantidad").val(this.rezagoEscolar); /* 5. N° de NNA con Retraso o Rezago Escolar */
                $("#educacion_004_NNA_matriculaCancelada_cantidad").val(this.matriculaCancelada); /* 6. N° de NNA con Matrícula Cancelada */
                $("#educacion_005_NNA_asisten_colegioDiferencial_cantidad").val(this.asisteEducacionDiferencial); /* 7. N° de NNA que Asiste a Educación Diferencial */
                $("#educacion_006_NNA_asisten_colegioNivelacion_cantidad").val(this.nivelacionEstudios); /* 8. N° de NNA que Asiste a Educación de Nivelación de Estudios */

                $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe").val(0); /* 10. Espacios Destinados a Estudios y Desarrolo de Tareas */ /* se remplaza this.EspaciosEstudios por el cero */      
                $("#educacion_008_sel_materialBibliiografico_existe").val(0); /* 11. Material Bibliográfico */ /* SE Remplaza this.MaterialBibliografico por el cero */
                $("#educacion_009_sel_computadores_existe").val(0); /* 12. computadores */ /* se remplaza this.Computadores por el cero */
                $("#educacion_010_sel_AccesoControladoInternet_existe").val(0); /* 13. Acceso Controlado a Internet */ /* se remplaza this.AccesoInternetControlado */

                document.getElementById("educacion_011_observaciones").value = this.observaciones;
                ContadorCaracter(document.getElementById("educacion_011_observaciones"), "labelCaracteres_ObsEducacion");

                $("#educacion_001_NNA_matriculados").val(this.numeroMatriculados); /* 1. N° de NNA matriculados */
                $("#educacion_006_NNA_examenesLibres_cantidad").val(this.inscritosExamenesLibres); /* 9. N° de NNA inscritos para exámenes libres */
            }
        );
        if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesEducacion = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            educacion_residencia = true;
            CargaCamposComparativa7();
        }
    });
}



function ObtenerAntecedentesEducacion_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesEducacion",
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
                $("#educacion_001_NNA_asisten_colegio_cantidad_pjud").val(this.NNAEducacion);
                $("#educacion_002_NNA_NO_asisten_colegio_cantidad_pjud").val(this.NNAEducacionNo);
                $("#educacion_003_NNA_retrasoEscolar_cantidad_pjud").val(this.NNARetrasoEscolar);
                $("#educacion_004_NNA_matriculaCancelada_cantidad_pjud").val(this.NNAMatriculaCancelada);
                $("#educacion_005_NNA_asisten_colegioDiferencial_cantidad_pjud").val(this.NNAEducaionEspecial);
                $("#educacion_006_NNA_asisten_colegioNivelacion_cantidad_pjud").val(this.NNANivelacion);

                $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe_pjud").val(this.EspaciosEstudios);
                $("#educacion_008_sel_materialBibliiografico_existe_pjud").val(this.MaterialBibliografico);
                $("#educacion_009_sel_computadores_existe_pjud").val(this.Computadores);
                $("#educacion_010_sel_AccesoControladoInternet_existe_pjud").val(this.AccesoInternetControlado);

                $("#educacion_011_observaciones_pjud").val(this.Observaciones);
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesEducacion_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        educacion_pjud = true;
        CargaCamposComparativa7();
    });
}

function ObtenerAntecedentesEducacion_Compare(codFichaPadre, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#labelCaracteres_ObsEducacion").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesEducacion",
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
                $("#educacion_001_NNA_matriculados" + sufijo).val(this.NNAMatriculados);
                $("#educacion_001_NNA_asisten_colegio_cantidad" + sufijo).val(this.NNAEducacion);

                $("#educacion_002_NNA_NO_asisten_colegio_cantidad" + sufijo).val(this.NNAEducacionNo);

                //NUEVO CAMPO ANTECEDENETES EDUCACIÓN:  educacion_002_NNA_NO_asisten_colegio_cantidad_motivo
                if(this.NNAEducacionNoMotivo=="" || this.NNAEducacionNoMotivo=="0")
                    $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo" + sufijo).val(-1);
                else
                    $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo" + sufijo).val(this.NNAEducacionNoMotivo);

                $("#educacion_003_NNA_retrasoEscolar_cantidad" + sufijo).val(this.NNARetrasoEscolar);
                $("#educacion_004_NNA_matriculaCancelada_cantidad" + sufijo).val(this.NNAMatriculaCancelada);
                $("#educacion_005_NNA_asisten_colegioDiferencial_cantidad" + sufijo).val(this.NNAEducaionEspecial);
                $("#educacion_006_NNA_asisten_colegioNivelacion_cantidad" + sufijo).val(this.NNANivelacion);
                $("#educacion_006_NNA_examenesLibres_cantidad" + sufijo).val(this.NNAExamenesLibres);

                if (this.EspaciosEstudios != "0" && this.EspaciosEstudios!="-1")
                    $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe" + sufijo).val(1);
                else
                    $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe" + sufijo).val(0);

                if (this.MaterialBibliografico != "0" && this.MaterialBibliografico != "-1")
                    $("#educacion_008_sel_materialBibliiografico_existe" + sufijo).val(1);
                else
                    $("#educacion_008_sel_materialBibliiografico_existe" + sufijo).val(0);

                if (this.EspaciosEstudios != "0" && this.EspaciosEstudios != "-1")
                    $("#educacion_009_sel_computadores_existe" + sufijo).val(1);
                else
                    $("#educacion_009_sel_computadores_existe" + sufijo).val(0);

                if (this.EspaciosEstudios != "0" && this.EspaciosEstudios != "-1")
                    $("#educacion_010_sel_AccesoControladoInternet_existe" + sufijo).val(1);
                else
                    $("#educacion_010_sel_AccesoControladoInternet_existe" + sufijo).val(0);

                document.getElementById("educacion_011_observaciones" + sufijo).value = this.Observaciones;
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesEducacion_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            educacion_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesEducacion_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            educacion_residencia_comp002 = true;
        }
        CargaCamposComparativa7_();
    });
}
////++++++++++++++++++++++
//FUNCIONES FRONTEND
function MotivoInasistencia(objSel) {
    if (objSel.value == "4") {
        MensajeINFO("Si selecciona la opción OTROS, como motivo de inasistencia a clases para los NNA, deberá especificar en las observaciones de antecedentes de educación esta situación.");
    }
}
function RevisaValorInasistenciaaClases(objInputCan) {
    if (objInputCan.value == "" || objInputCan.value == "0") {
        $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").val(-1);
        $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").attr("disabled", true);
    }
    else {
        $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").attr("disabled", false);
    }
}