////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesGestionResidencia() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var CatastroRedes = $("#idParGestionResidencia_1").val() == undefined ? -1 : $("#idParGestionResidencia_1").val();
    var RegistroVisitas = $("#idParGestionResidencia_2").val() == undefined ? -1 : $("#idParGestionResidencia_2").val();
    var ProtocoloAcogida = $("#idParGestionResidencia_4").val() == undefined ? -1 : $("#idParGestionResidencia_4").val();
    var AutocuidadoEquipo = $("#idParGestionResidencia_5").val() == undefined ? -1 : $("#idParGestionResidencia_5").val();
    var IntervencionCrisis = $("#idParGestionResidencia_6").val() == undefined ? -1 : $("#idParGestionResidencia_6").val();
    var InformacionNormativa = $("#idParGestionResidencia_7").val() == undefined ? -1 : $("#idParGestionResidencia_7").val();
    var ProtocoloConvivencia = $("#idParGestionResidencia_8").val() == undefined ? -1 : $("#idParGestionResidencia_8").val();
    var ProtocoloReclamos = $("#idParGestionResidencia_9").val() == undefined ? -1 : $("#idParGestionResidencia_9").val();
    var ProtocoloEscucha = $("#idParGestionResidencia_10").val() == undefined ? -1 : $("#idParGestionResidencia_10").val();
    var VinculacionResidencias = $("#idParGestionResidencia_11").val() == undefined ? -1 : $("#idParGestionResidencia_11").val();
    var ProcesosFormacion = $("#idParGestionResidencia_12").val() == undefined ? -1 : $("#idParGestionResidencia_12").val();
    var ProtocoloApadrinamiento = $("#idParGestionResidencia_13").val() == undefined ? -1 : $("#idParGestionResidencia_13").val();
    var ProtocoloTraslado = $("#idParGestionResidencia_14").val() == undefined ? -1 : $("#idParGestionResidencia_14").val();
    var ProtocoloEgreso = $("#idParGestionResidencia_15").val() == undefined ? -1 : $("#idParGestionResidencia_15").val();
    var ProtocoloRedSalud = $("#idParGestionResidencia_16").val() == undefined ? -1 : $("#idParGestionResidencia_16").val();
    var HabilitacionLaboral = $("#idParGestionResidencia_17").val() == undefined ? -1 : $("#idParGestionResidencia_17").val();

    var protoVisitas_existe = $("#idParGestionResidencia_2").val() == undefined ? -1 : $("#idParGestionResidencia_2").val();
    var RESProtocoloVisitas = $("#idParGestionResidencia_2").val() == undefined ? -1 : $("#idParGestionResidencia_2").val();
    var regisVisitas_existe = $("#idParGestionResidencia_3").val() == undefined ? -1 : $("#idParGestionResidencia_3").val();
    var activi_habilitaLaboral = $("#idParGestionResidencia_17").val() == undefined ? -1 : $("#idParGestionResidencia_17").val();
    var activi_vidaInpendiente = $("#idParGestionResidencia_18").val() == undefined ? -1 : $("#idParGestionResidencia_18").val();

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
                //ActivarDesactivarBotonesGrabar(9, false);
            }
        );

    });
}
/* Sprint 6 - 20191204 - gcastro - */
function ObtenerAntecedentesGestionResidencia(CodFicha, CodEstadoFichaAUX) {
   
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
                /* 1- Cuenta con catastro de redes */ /*gestionResid_001_sel_catastroRedes_existe*/
                if (this.CatastroRedes != 0 && this.CatastroRedes != -1) $("#idParGestionResidencia_1").val("1");
                else $("#idParGestionResidencia_1").val("0");

                /* eL id "gestionResid_002_sel_protocoloVisitas_existe" NO eliminar de la tabla original*/
           
                 /* 2- Existe Protocolo de Visitas  */ /*gestionResid_002_sel_protoVisitas_existe*/
                if (this.RESProtocoloVisitas != 0 && this.RESProtocoloVisitas != -1) $("#idParGestionResidencia_2").val("1");
                else $("#idParGestionResidencia_2").val("0");

                /* 3- Existe Registro de Visitas */  /*gestionResid_002_sel_regisVisitas_existe*/
                if (this.RESRegistroVisitas != 0 && this.RESRegistroVisitas != -1) $("#idParGestionResidencia_3").val("1");
                else $("#idParGestionResidencia_3").val("0");

                /* 4- Cuenta con Protocolo de Acogida del NNA */ /* gestionResid_003_sel_protocoloAcogida_NNA_existe */
                if (this.ProtocoloAcogida != 0 && this.ProtocoloAcogida != -1) $("#idParGestionResidencia_4").val("1");
                else $("#idParGestionResidencia_4").val("0");

                /* 5- Existen Actividades de Autocuidado para el Equipo */  /* gestionResid_004_sel_activi_autocuidadoEquipo_existe */
                if (this.AutocuidadoEquipo != 0 && this.AutocuidadoEquipo != -1) $("#idParGestionResidencia_5").val("1"); 
                else $("#idParGestionResidencia_5").val("0");

                 /* 6- Cuenta con Protocolo de Actuación de Intervención en Crisis *//* gestionResid_005_sel_protocoloActua_intervencionCrisis_existe*/
                if (this.IntervencionCrisis != 0 && this.IntervencionCrisis != -1) $("#idParGestionResidencia_6").val("1");
                else $("#idParGestionResidencia_6").val("0");

                 /* 7- Existe Protocolo de Información para NNA sobre la Normativa de Residencia */ /* gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe */
                if (this.InformacionNormativa != 0 && this.InformacionNormativa != -1) $("#idParGestionResidencia_7").val("1");
                else $("#idParGestionResidencia_7").val("0"); 

                 /* 8- Existe Protocolo de Convivencia *//*gestionResid_007_sel_protocoloConvivencia_existe*/
                if (this.ProtocoloConvivencia != 0 && this.ProtocoloConvivencia != -1) $("#idParGestionResidencia_8").val("1");
                else $("#idParGestionResidencia_8").val("0");

                /* 9- Existe Protocolo de Presentación de Reclamos y Quejas *//* gestionResid_008_sel_protocolo_PresentaReclamo_existe*/
                if (this.ProtocoloReclamos != 0 && this.ProtocoloReclamos != -1) $("#idParGestionResidencia_9").val("1");
                else $("#idParGestionResidencia_9").val("0");

                /* 10- Existe Protocolo y Espacios para la escucha de los NNA *//* gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe */
                if (this.ProtocoloEscucha != 0 && this.ProtocoloEscucha != -1) $("#idParGestionResidencia_10").val("1");
                else $("#idParGestionResidencia_10").val("0");

                /* 11- Vinculación entre Residencias (para hermanos) *//*gestionResid_010_sel_vinculacionResidencias_existe*/
                if (this.VinculacionResidencias != 0 && this.VinculacionResidencias != -1) $("#idParGestionResidencia_11").val("1");
                else $("#idParGestionResidencia_11").val("0");

                /* 12- Cuenta con Proceso de Formación Permanente para el personal *//*gestionResid_011_sel_ProcesoFormacion_existe*/
                if (this.ProcesosFormacion != 0 && this.ProcesosFormacion != -1) $("#idParGestionResidencia_12").val("1");
                else $("#idParGestionResidencia_12").val("0");

                 /* 13- Existe Protocolo de Apadrinamiento *//*gestionResid_012_sel_protocoloApadrinamiento_existe*/
                if (this.ProtocoloApadrinamiento != 0 && this.ProtocoloApadrinamiento != -1) $("#idParGestionResidencia_13").val("1");
                else $("#idParGestionResidencia_13").val("0");

               /* 14- Existe Protocolo de Derivación o Traslado a Residencia *//*gestionResid_013_sel_protocoloTrasladoResid_existe*/
                if (this.ProtocoloTraslado != 0 && this.ProtocoloTraslado != -1) $("#idParGestionResidencia_14").val("1");
                else $("#idParGestionResidencia_14").val("0");

                /* 15- Existe Protocolo de para el Egreso del NNA (Sistema Residencial)*//*gestionResid_014_sel_protocoloEgreso_NNA_existe*/
                if (this.ProtocoloEgreso != 0 && this.ProtocoloEgreso != -1) $("#idParGestionResidencia_15").val("1");
                else $("#idParGestionResidencia_15").val("0");

                /* 16- Existe Protocolo para Derivación a Red Salud */ /*gestionResid_015_sel_protocolo_derivacion_RedSalud_existe*/  
                if (this.ProtocoloRedSalud != 0 && this.ProtocoloRedSalud != -1) $("#idParGestionResidencia_16").val("1");
                else $("#idParGestionResidencia_16").val("0");

                /* 17- ¿Existen Actividades de Habilitación Laboral? */ /*gestionResid_016_sel_activi_habilitaLaboral*/
                if (this.HabilitacionLaboral != 0 && this.HabilitacionLaboral != -1) $("#idParGestionResidencia_17").val("1");
                else $("#idParGestionResidencia_17").val("0");

                 /* 18- ¿Existe proceso para la vida independiente? */  /*gestionResid_016_sel_activi_vidaInpendiente*/
                if (this.RESVidaIndependiente != 0 && this.RESVidaIndependiente != -1) $("#idParGestionResidencia_18").val("1");
                else $("#idParGestionResidencia_18").val("0");

                document.getElementById("gestionResid_017_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("gestionResid_017_observaciones"), "labelCaracteres_ObsGestionRes");

                if (CodEstadoFichaAUX == 0) {
                    $("#Infraest_049_observaciones").val("");
                    $("#seguridad_011_observaciones").val("");
                    $("#salud_016_observaciones").val("");
                    $("#educacion_011_observaciones").val("");
                    $("#alimentacion_009_observacion").val("");
                    $("#gestionResid_017_observaciones").val("");
                } 

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
                $("#idParGestionResidencia_1").val(this.CatastroRedes);
                $("#gestionResid_002_sel_protocoloVisitas_existe").val(this.RegistroVisitas);
                $("#idParGestionResidencia_4").val(this.ProtocoloAcogida);
                $("#idParGestionResidencia_5").val(this.AutocuidadoEquipo);
                $("#idParGestionResidencia_6").val(this.IntervencionCrisis);
                $("#idParGestionResidencia_7").val(this.InformacionNormativa);
                $("#idParGestionResidencia_8").val(this.ProtocoloConvivencia);
                $("#idParGestionResidencia_9").val(this.ProtocoloReclamos);
                $("#idParGestionResidencia_10").val(this.ProtocoloEscucha);
                $("#idParGestionResidencia_11").val(this.VinculacionResidencias);
                $("#idParGestionResidencia_12").val(this.ProcesosFormacion);
                $("#idParGestionResidencia_13").val(this.ProtocoloApadrinamiento);
                $("#idParGestionResidencia_14").val(this.ProtocoloTraslado);
                $("#idParGestionResidencia_15").val(this.ProtocoloEgreso);
                $("#idParGestionResidencia_16").val(this.ProtocoloRedSalud);
                $("#idParGestionResidencia_17").val(this.HabilitacionLaboral);

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
                    $("#idParGestionResidencia_1" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_1" + sufijo).val(0);

                if (this.RegistroVisitas != "0" && this.RegistroVisitas != "-1")
                    $("#gestionResid_002_sel_protocoloVisitas_existe" + sufijo).val(1);
                else
                    $("#gestionResid_002_sel_protocoloVisitas_existe" + sufijo).val(0);

                if (this.ProtocoloAcogida != "0" && this.ProtocoloAcogida != "-1")
                    $("#idParGestionResidencia_4" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_4" + sufijo).val(0);

                if (this.AutocuidadoEquipo != "0" && this.AutocuidadoEquipo != "-1")
                    $("#idParGestionResidencia_5" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_5" + sufijo).val(0);

                if (this.IntervencionCrisis != "0" && this.IntervencionCrisis != "-1")
                    $("#idParGestionResidencia_6" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_6" + sufijo).val(0);

                if (this.InformacionNormativa != "0" && this.InformacionNormativa != "-1")
                    $("#idParGestionResidencia_7" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_7" + sufijo).val(0);

                if (this.ProtocoloConvivencia != "0" && this.ProtocoloConvivencia != "-1")
                    $("#idParGestionResidencia_8" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_8" + sufijo).val(0);

                if (this.ProtocoloReclamos != "0" && this.ProtocoloReclamos != "-1")
                    $("#idParGestionResidencia_9" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_9" + sufijo).val(0);

                if (this.ProtocoloEscucha != "0" && this.ProtocoloEscucha != "-1")
                    $("#idParGestionResidencia_10" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_10" + sufijo).val(0);

                if (this.VinculacionResidencias != "0" && this.VinculacionResidencias != "-1")
                    $("#idParGestionResidencia_11" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_11" + sufijo).val(0);

                if (this.ProcesosFormacion != "0" && this.ProcesosFormacion != "-1")
                    $("#idParGestionResidencia_12" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_12" + sufijo).val(0);

                if (this.ProtocoloApadrinamiento != "0" && this.ProtocoloApadrinamiento != "-1")
                    $("#idParGestionResidencia_13" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_13" + sufijo).val(0);

                if (this.ProtocoloTraslado != "0" && this.ProtocoloTraslado != "-1")
                    $("#idParGestionResidencia_14" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_14" + sufijo).val(0);

                if (this.ProtocoloEgreso != "0" && this.ProtocoloEgreso != "-1")
                    $("#idParGestionResidencia_15" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_15" + sufijo).val(0);

                if (this.ProtocoloRedSalud != "0" && this.ProtocoloRedSalud != "-1")
                    $("#idParGestionResidencia_16" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_16" + sufijo).val(0);

                if (this.HabilitacionLaboral != "0" && this.HabilitacionLaboral != "-1")
                    $("#idParGestionResidencia_17" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_17" + sufijo).val(0);

                if (this.RESProtocoloVisitas != "0" && this.RESProtocoloVisitas != "-1")
                    $("#idParGestionResidencia_2" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_2" + sufijo).val(0);

                if (this.RESRegistroVisitas != "0" && this.RESRegistroVisitas != "-1")
                    $("#idParGestionResidencia_3" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_3" + sufijo).val(0);

                if (this.RESHabilitacionLaboral != "0" && this.RESHabilitacionLaboral != "-1")
                    $("#idParGestionResidencia_17" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_17" + sufijo).val(0);

                if (this.RESVidaIndependiente != "0" && this.RESVidaIndependiente != "-1")
                    $("#idParGestionResidencia_18" + sufijo).val(1);
                else
                    $("#idParGestionResidencia_18" + sufijo).val(0);

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

var ParValores = { 0: "NO", 1: "SI" };
//  1. carga de la tabla ParGestionResidencia
function CargaParGestionResidencia() {
    $("#gridGestionResidencia").DataTable().destroy();
    $('#gridGestionResidencia').dataTable({
        "ajax": {
            "url": "FichaResidencial.aspx/ObtenerParAntecedentesGestionResidencia",
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
            { "data": "IdParGestionResi" },
            { "data": "NombreGestion", "sClass": "etiqCampo3" },
            { "data": "VariableCuantitativa" },
            {"data":  "IndVigencia" },
            {
                "data": null,
                "render": function (data, type, row, meta)
                {
                    if (data.IndVigencia == "V")
                    {
                        var $select = $("<select id='idParGestionResidencia_" + data.IdParGestionResi + "' class='form-control dllSiNo' style='width: 100px;'></select>", {
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
                    
                }
            }
        ],
        "columnDefs": [{
            "targets": [0, 2,3],
            "visible": false,
            "searchable": false
        }
        ],
        "fixedColumns": true,
        "bLengthChange": false,
        "bInfo": false,
        "bPaginate": false
       
    });
  //  document.getElementById("gestionResid_017_observaciones").disabled = false;
}

function CargaParGestionResidencia_original() {

    $('#gridGestionResidencia').dataTable({
        "ajax": {
            "url": "FichaResidencial.aspx/ObtenerParAntecedentesGestionResidencia",
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
            { "data": "IdParGestionResi" },
            { "data": "NombreGestion", "sClass": "etiqCampo3"},
            { "data": "VariableCuantitativa" },
            {
                "data": null, 
                "render": function (data, type, row, meta)
                {
                    if (data.VariableCuantitativa == 0) {
                        var $select = $("<select class='form-control textCampoSel1 dllSiNo'></select>", {
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
                    } else {
                        var $input = $("<input type='text' class='form-control textCampoSel2' maxlength='4' onkeypress='return ValidaIngresoSoloNumeros(this.value, event);'>",{});
                        return $input.prop("outerHTML");
                    }
                  
                }
            }
        ],
            //{
            //    "data": null,
            //    "render": function (data, type, row, meta) {
            //        return '<a href="' + data['IdParGestionResi'] + '">View Detail</a>';
            //    }
            //},
        "columnDefs": [{
            "targets": [0,2],
            "visible": false,
            "searchable": false}
        ],
        "fixedColumns": true,
        "bLengthChange": false, 
        "bInfo": false,
        "bPaginate": false
        
    });

}


////++++++++++++++++++++++
//FUNCIONES FRONTEND
function EvaluaProtocoloyRegistroVisitas(){
    if(
        $("#idParGestionResidencia_2").val() == "1" &&  
        $("#idParGestionResidencia_3").val() == "1" )
        $("#gestionResid_002_sel_protocoloVisitas_existe").val(1);
    else
        $("#gestionResid_002_sel_protocoloVisitas_existe").val(0);
}
function EvaluaActividadHabilitaLaboralyVidaIndependiente(){
    if(
        $("#idParGestionResidencia_17").val() == "1" &&  
        $("#idParGestionResidencia_18").val() == "1")
        $("#idParGestionResidencia_17").val(1);
    else
        $("#idParGestionResidencia_17").val(0);
}

