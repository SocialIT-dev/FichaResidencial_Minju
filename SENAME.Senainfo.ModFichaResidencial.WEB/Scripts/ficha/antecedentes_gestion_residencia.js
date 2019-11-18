////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesGestionResidencia() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var CatastroRedes= $("#gestionResid_001_sel_catastroRedes_existe").val();
    var RegistroVisitas= $("#gestionResid_002_sel_protocoloVisitas_existe").val();
    var ProtocoloAcogida= $("#gestionResid_003_sel_protocoloAcogida_NNA_existe").val();
    var AutocuidadoEquipo= $("#gestionResid_004_sel_activi_autocuidadoEquipo_existe").val();
    var IntervencionCrisis= $("#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe").val();
    var InformacionNormativa= $("#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe").val();
    var ProtocoloConvivencia= $("#gestionResid_007_sel_protocoloConvivencia_existe").val();
    var ProtocoloReclamos= $("#gestionResid_008_sel_protocolo_PresentaReclamo_existe").val();
    var ProtocoloEscucha= $("#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe").val();
    var VinculacionResidencias= $("#gestionResid_010_sel_vinculacionResidencias_existe").val();
    var ProcesosFormacion= $("#gestionResid_011_sel_ProcesoFormacion_existe").val();
    var ProtocoloApadrinamiento= $("#gestionResid_012_sel_protocoloApadrinamiento_existe").val();
    var ProtocoloTraslado= $("#gestionResid_013_sel_protocoloTrasladoResid_existe").val();
    var ProtocoloEgreso= $("#gestionResid_014_sel_protocoloEgreso_NNA_existe").val();
    var ProtocoloRedSalud= $("#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe").val();
    var HabilitacionLaboral= $("#gestionResid_016_sel_activi_habilitacionLaboral_existe").val();

    var protoVisitas_existe = $("#gestionResid_002_sel_protoVisitas_existe").val();
    var regisVisitas_existe = $("#gestionResid_002_sel_regisVisitas_existe").val();
    var activi_habilitaLaboral = $("#gestionResid_016_sel_activi_habilitaLaboral").val();
    var activi_vidaInpendiente = $("#gestionResid_016_sel_activi_vidaInpendiente").val();

    var Observaciones = replaceAll(EliminaEspacios(document.getElementById("gestionResid_017_observaciones").value),"'","");

    var dataParametros =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +

        "'CatastroRedes': '" + CatastroRedes + "'," +
        "'RegistroVisitas': '" + RegistroVisitas + "'," +
        "'ProtocoloAcogida': '" + ProtocoloAcogida + "'," +
        "'AutocuidadoEquipo': '" + AutocuidadoEquipo + "'," +
        "'IntervencionCrisis': '" + IntervencionCrisis + "'," +
        "'InformacionNormativa': '" + InformacionNormativa + "'," +
        "'ProtocoloConvivencia': '" + ProtocoloConvivencia + "'," +
        "'ProtocoloReclamos': '" + ProtocoloReclamos + "'," +
        "'ProtocoloEscucha': '" + ProtocoloEscucha + "'," +
        "'VinculacionResidencias': '" + VinculacionResidencias + "'," +
        "'ProcesosFormacion': '" + ProcesosFormacion + "'," +
        "'ProtocoloApadrinamiento': '" + ProtocoloApadrinamiento + "'," +
        "'ProtocoloTraslado': '" + ProtocoloTraslado + "'," +
        "'ProtocoloEgreso': '" + ProtocoloEgreso + "'," +
        "'ProtocoloRedSalud': '" + ProtocoloRedSalud + "'," +
        "'HabilitacionLaboral': '" + HabilitacionLaboral + "'," +
        "'Observaciones': '" + Observaciones + "'," +

        "'protoVisitas_existe': '" + protoVisitas_existe + "'," +
        "'regisVisitas_existe': '" + regisVisitas_existe + "'," +
        "'activi_habilitaLaboral': '" + activi_habilitaLaboral + "'," +
        "'activi_vidaInpendiente': '" + activi_vidaInpendiente + "'" +
        "}";

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesGestionResidencia",
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

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Gestión de Residencia.");
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
                ActivarDesactivarBotonesGrabar(9, false);
            }
        );

    });
}
function ObtenerAntecedentesGestionResidencia(CodFicha) {
    $("#labelCaracteres_ObsGestionRes").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesGestionResidencia",
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
                $("#gestionResid_001_sel_catastroRedes_existe").val(this.CatastroRedes);
                $("#gestionResid_002_sel_protocoloVisitas_existe").val(this.RegistroVisitas);
                $("#gestionResid_003_sel_protocoloAcogida_NNA_existe").val(this.ProtocoloAcogida);
                $("#gestionResid_004_sel_activi_autocuidadoEquipo_existe").val(this.AutocuidadoEquipo);
                $("#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe").val(this.IntervencionCrisis);
                $("#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe").val(this.InformacionNormativa);
                $("#gestionResid_007_sel_protocoloConvivencia_existe").val(this.ProtocoloConvivencia);
                $("#gestionResid_008_sel_protocolo_PresentaReclamo_existe").val(this.ProtocoloReclamos);
                $("#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe").val(this.ProtocoloEscucha);
                $("#gestionResid_010_sel_vinculacionResidencias_existe").val(this.VinculacionResidencias);
                $("#gestionResid_011_sel_ProcesoFormacion_existe").val(this.ProcesosFormacion);
                $("#gestionResid_012_sel_protocoloApadrinamiento_existe").val(this.ProtocoloApadrinamiento);
                $("#gestionResid_013_sel_protocoloTrasladoResid_existe").val(this.ProtocoloTraslado);
                $("#gestionResid_014_sel_protocoloEgreso_NNA_existe").val(this.ProtocoloEgreso);
                $("#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe").val(this.ProtocoloRedSalud);
                $("#gestionResid_016_sel_activi_habilitacionLaboral_existe").val(this.HabilitacionLaboral);

                document.getElementById("gestionResid_017_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("gestionResid_017_observaciones"), "labelCaracteres_ObsGestionRes");

                $("#gestionResid_002_sel_protoVisitas_existe").val(this.RESProtocoloVisitas);
                $("#gestionResid_002_sel_regisVisitas_existe").val(this.RESRegistroVisitas);
                $("#gestionResid_016_sel_activi_habilitaLaboral").val(this.RESHabilitacionLaboral);
                $("#gestionResid_016_sel_activi_vidaInpendiente").val(this.RESVidaIndependiente);
                //document.getElementById("gestionResid_018_observaciones_pobla_NNA_visita").value = this.ObservacionesNNAVisita;
                //$("#gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe").val(this.NNAvoluntadConversarConJuez );
                //$("#gestionResid_020_sel_entrevisto_NNA_reservada_existe").val(this.NNAentrevistadoFormaReservada);
            }
        );
    });
}

function ObtenerAntecedentesGestionResidencia_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesGestionResidencia",
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
                $("#gestionResid_001_sel_catastroRedes_existe").val(this.CatastroRedes);
                $("#gestionResid_002_sel_protocoloVisitas_existe").val(this.RegistroVisitas);
                $("#gestionResid_003_sel_protocoloAcogida_NNA_existe").val(this.ProtocoloAcogida);
                $("#gestionResid_004_sel_activi_autocuidadoEquipo_existe").val(this.AutocuidadoEquipo);
                $("#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe").val(this.IntervencionCrisis);
                $("#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe").val(this.InformacionNormativa);
                $("#gestionResid_007_sel_protocoloConvivencia_existe").val(this.ProtocoloConvivencia);
                $("#gestionResid_008_sel_protocolo_PresentaReclamo_existe").val(this.ProtocoloReclamos);
                $("#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe").val(this.ProtocoloEscucha);
                $("#gestionResid_010_sel_vinculacionResidencias_existe").val(this.VinculacionResidencias);
                $("#gestionResid_011_sel_ProcesoFormacion_existe").val(this.ProcesosFormacion);
                $("#gestionResid_012_sel_protocoloApadrinamiento_existe").val(this.ProtocoloApadrinamiento);
                $("#gestionResid_013_sel_protocoloTrasladoResid_existe").val(this.ProtocoloTraslado);
                $("#gestionResid_014_sel_protocoloEgreso_NNA_existe").val(this.ProtocoloEgreso);
                $("#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe").val(this.ProtocoloRedSalud);
                $("#gestionResid_016_sel_activi_habilitacionLaboral_existe").val(this.HabilitacionLaboral);

                document.getElementById("gestionResid_017_observaciones").value = this.Observaciones;
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesGestionResidencia_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        gestionResidencia_residencia = true;
        CargaCamposComparativa9();
    });
}


function ObtenerAntecedentesGestionResidencia_PJUD2(CodFicha) {
        $.ajax({
            type: "POST",
            url: "FichaResidencial.aspx/ObtenerAntecedentesGestionResidencia",
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
                    $("#gestionResid_001_sel_catastroRedes_existe_pjud").val(this.CatastroRedes);
                    $("#gestionResid_002_sel_protocoloVisitas_existe_pjud").val(this.RegistroVisitas);
                    $("#gestionResid_003_sel_protocoloAcogida_NNA_existe_pjud").val(this.ProtocoloAcogida);
                    $("#gestionResid_004_sel_activi_autocuidadoEquipo_existe_pjud").val(this.AutocuidadoEquipo);
                    $("#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_pjud").val(this.IntervencionCrisis);
                    $("#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_pjud").val(this.InformacionNormativa);
                    $("#gestionResid_007_sel_protocoloConvivencia_existe_pjud").val(this.ProtocoloConvivencia);
                    $("#gestionResid_008_sel_protocolo_PresentaReclamo_existe_pjud").val(this.ProtocoloReclamos);
                    $("#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_pjud").val(this.ProtocoloEscucha);
                    $("#gestionResid_010_sel_vinculacionResidencias_existe_pjud").val(this.VinculacionResidencias);
                    $("#gestionResid_011_sel_ProcesoFormacion_existe_pjud").val(this.ProcesosFormacion);
                    $("#gestionResid_012_sel_protocoloApadrinamiento_existe_pjud").val(this.ProtocoloApadrinamiento);
                    $("#gestionResid_013_sel_protocoloTrasladoResid_existe_pjud").val(this.ProtocoloTraslado);
                    $("#gestionResid_014_sel_protocoloEgreso_NNA_existe_pjud").val(this.ProtocoloEgreso);
                    $("#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_pjud").val(this.ProtocoloRedSalud);
                    $("#gestionResid_016_sel_activi_habilitacionLaboral_existe_pjud").val(this.HabilitacionLaboral);

                    document.getElementById("gestionResid_017_observaciones_pjud").value = this.Observaciones;
                    
                    //document.getElementById("gestionResid_018_observaciones_pobla_NNA_visita").value = this.ObservacionesNNAVisita;
                    //$("#gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe").val(this.NNAvoluntadConversarConJuez );
                    //$("#gestionResid_020_sel_entrevisto_NNA_reservada_existe").val(this.NNAentrevistadoFormaReservada);
                }
            );
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesGestionResidencia_PJUD_2 = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            gestionResidencia_pjud = true;
            CargaCamposComparativa9();
        });
    }

function ObtenerAntecedentesGestionResidenciaEntrevistados_PJUD(CodFicha) {
    var femenino = 0, masculino = 0;
    var agregados = 1;

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerNNAEntrevistadosJuez",
        data: "{'CodFicha': '" + CodFicha + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            //alert(r);
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        var tblDestino = document.getElementById("tbl_detalle_NNA_entrevistados_pjud");

        $.each(r.d, function () {
            rut = this.Rut;
            nna = this.ApellidoPaterno + " " + this.ApellidoMaterno + ", " + this.Nombres;
            rit = this.Rit;
            tribunal = this.NombreTribunal;
            codigotribunal = this.CodTribunal;
            codnino = this.CodNino;
            sexo = this.Sexo;
            nombres = this.Nombres;
            apellidoPaterno = this.ApellidoPaterno;
            apellidoMaterno = this.ApellidoMaterno;

            var rowCount2 = tblDestino.rows.length;
            var row = tblDestino.insertRow(rowCount2);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = agregados;
            cell1.className = "td_registro_NNA";
            cell1.style.width = "20px;";

            cell2.innerHTML = rut;
            cell2.className = "td_registro_NNA";
            cell2.style.width = "50px;";
            cell2.dataset.codnino = codnino;
            cell2.dataset.sexo = sexo;

            cell3.innerHTML = nna;
            cell3.className = "td_registro_NNA";
            cell3.dataset.nombres = nombres;
            cell3.dataset.apellidopaterno = apellidoPaterno;
            cell3.dataset.apellidomaterno = apellidoMaterno;

            cell4.innerHTML = rit;
            cell4.className = "td_registro_NNA";

            cell5.innerHTML = tribunal;
            cell5.id = "codtribunal_" + agregados;
            cell5.dataset.codtribunal = codigotribunal;
            cell5.className = "td_registro_NNA";

            var largo = rut.length;
            var rut_identificador = rut.substring(0, largo - 2);

            agregados++;

        });

        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerNnaEntrevistadosDetalleOBS_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");
    });
}

function ObtenerAntecedentesGestionResidencia_Compare(codFichaPadre, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#labelCaracteres_ObsGestionRes").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesGestionResidencia",
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
                if (this.CatastroRedes != "0" && this.CatastroRedes != "-1")
                    $("#gestionResid_001_sel_catastroRedes_existe" + sufijo).val(1);
                else
                    $("#gestionResid_001_sel_catastroRedes_existe" + sufijo).val(0);

                if (this.RegistroVisitas != "0" && this.RegistroVisitas != "-1")
                    $("#gestionResid_002_sel_protocoloVisitas_existe" + sufijo).val(1);
                else
                    $("#gestionResid_002_sel_protocoloVisitas_existe" + sufijo).val(0);

                if (this.ProtocoloAcogida != "0" && this.ProtocoloAcogida != "-1")
                    $("#gestionResid_003_sel_protocoloAcogida_NNA_existe" + sufijo).val(1);
                else
                    $("#gestionResid_003_sel_protocoloAcogida_NNA_existe" + sufijo).val(0);

                if (this.AutocuidadoEquipo != "0" && this.AutocuidadoEquipo != "-1")
                    $("#gestionResid_004_sel_activi_autocuidadoEquipo_existe" + sufijo).val(1);
                else
                    $("#gestionResid_004_sel_activi_autocuidadoEquipo_existe" + sufijo).val(0);

                if (this.IntervencionCrisis != "0" && this.IntervencionCrisis != "-1")
                    $("#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe" + sufijo).val(1);
                else
                    $("#gestionResid_005_sel_protocoloActua_intervencionCrisis_existe" + sufijo).val(0);

                if (this.InformacionNormativa != "0" && this.InformacionNormativa != "-1")
                    $("#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe" + sufijo).val(1);
                else
                    $("#gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe" + sufijo).val(0);

                if (this.ProtocoloConvivencia != "0" && this.ProtocoloConvivencia != "-1")
                    $("#gestionResid_007_sel_protocoloConvivencia_existe" + sufijo).val(1);
                else
                    $("#gestionResid_007_sel_protocoloConvivencia_existe" + sufijo).val(0);

                if (this.ProtocoloReclamos != "0" && this.ProtocoloReclamos != "-1")
                    $("#gestionResid_008_sel_protocolo_PresentaReclamo_existe" + sufijo).val(1);
                else
                    $("#gestionResid_008_sel_protocolo_PresentaReclamo_existe" + sufijo).val(0);

                if (this.ProtocoloEscucha != "0" && this.ProtocoloEscucha != "-1")
                    $("#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe" + sufijo).val(1);
                else
                    $("#gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe" + sufijo).val(0);

                if (this.VinculacionResidencias != "0" && this.VinculacionResidencias != "-1")
                    $("#gestionResid_010_sel_vinculacionResidencias_existe" + sufijo).val(1);
                else
                    $("#gestionResid_010_sel_vinculacionResidencias_existe" + sufijo).val(0);

                if (this.ProcesosFormacion != "0" && this.ProcesosFormacion != "-1")
                    $("#gestionResid_011_sel_ProcesoFormacion_existe" + sufijo).val(1);
                else
                    $("#gestionResid_011_sel_ProcesoFormacion_existe" + sufijo).val(0);

                if (this.ProtocoloApadrinamiento != "0" && this.ProtocoloApadrinamiento != "-1")
                    $("#gestionResid_012_sel_protocoloApadrinamiento_existe" + sufijo).val(1);
                else
                    $("#gestionResid_012_sel_protocoloApadrinamiento_existe" + sufijo).val(0);

                if (this.ProtocoloTraslado != "0" && this.ProtocoloTraslado != "-1")
                    $("#gestionResid_013_sel_protocoloTrasladoResid_existe" + sufijo).val(1);
                else
                    $("#gestionResid_013_sel_protocoloTrasladoResid_existe" + sufijo).val(0);

                if (this.ProtocoloEgreso != "0" && this.ProtocoloEgreso != "-1")
                    $("#gestionResid_014_sel_protocoloEgreso_NNA_existe" + sufijo).val(1);
                else
                    $("#gestionResid_014_sel_protocoloEgreso_NNA_existe" + sufijo).val(0);

                if (this.ProtocoloRedSalud != "0" && this.ProtocoloRedSalud != "-1")
                    $("#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe" + sufijo).val(1);
                else
                    $("#gestionResid_015_sel_protocolo_derivacion_RedSalud_existe" + sufijo).val(0);

                if (this.HabilitacionLaboral != "0" && this.HabilitacionLaboral != "-1")
                    $("#gestionResid_016_sel_activi_habilitacionLaboral_existe" + sufijo).val(1);
                else
                    $("#gestionResid_016_sel_activi_habilitacionLaboral_existe" + sufijo).val(0);

                if (this.RESProtocoloVisitas != "0" && this.RESProtocoloVisitas != "-1")
                    $("#gestionResid_002_sel_protoVisitas_existe" + sufijo).val(1);
                else
                    $("#gestionResid_002_sel_protoVisitas_existe" + sufijo).val(0);

                if (this.RESRegistroVisitas != "0" && this.RESRegistroVisitas != "-1")
                    $("#gestionResid_002_sel_regisVisitas_existe" + sufijo).val(1);
                else
                    $("#gestionResid_002_sel_regisVisitas_existe" + sufijo).val(0);

                if (this.RESHabilitacionLaboral != "0" && this.RESHabilitacionLaboral != "-1")
                    $("#gestionResid_016_sel_activi_habilitaLaboral" + sufijo).val(1);
                else
                    $("#gestionResid_016_sel_activi_habilitaLaboral" + sufijo).val(0);

                if (this.RESVidaIndependiente != "0" && this.RESVidaIndependiente != "-1")
                    $("#gestionResid_016_sel_activi_vidaInpendiente" + sufijo).val(1);
                else
                    $("#gestionResid_016_sel_activi_vidaInpendiente" + sufijo).val(0);

                document.getElementById("gestionResid_017_observaciones" + sufijo).value = this.Observaciones;
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesGestionResidencia_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            gestion_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesGestionResidencia_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            gestion_residencia_comp002 = true;
        }
        CargaCamposComparativa9_();
    });
}
////++++++++++++++++++++++
//FUNCIONES FRONTEND
function EvaluaProtocoloyRegistroVisitas(){
    if(
        $("#gestionResid_002_sel_protoVisitas_existe").val() == "1" &&  
        $("#gestionResid_002_sel_regisVisitas_existe").val() == "1" )
        $("#gestionResid_002_sel_protocoloVisitas_existe").val(1);
    else
        $("#gestionResid_002_sel_protocoloVisitas_existe").val(0);
}
function EvaluaActividadHabilitaLaboralyVidaIndependiente(){
    if(
        $("#gestionResid_016_sel_activi_habilitaLaboral").val() == "1" &&  
        $("#gestionResid_016_sel_activi_vidaInpendiente").val() == "1")
        $("#gestionResid_016_sel_activi_habilitacionLaboral_existe").val(1);
    else
        $("#gestionResid_016_sel_activi_habilitacionLaboral_existe").val(0);
}

