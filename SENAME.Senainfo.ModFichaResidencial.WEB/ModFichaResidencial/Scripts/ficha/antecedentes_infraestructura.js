////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesInfraestructura() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var cantidadOficAdm = $("#IdValor_1").val();
    var cantidadSalaReunion = $("#IdValor_2").val();
    var cantidadSalaRecepcion = $("#IdValor_3").val();
    var cantidadEspaciosVisitas = $("#IdValor_4").val();
    var cantidadSalaTalleres = $("#IdValor_5").val();
    var cantidadSalaLiving = $("#IdValor_6").val();
    var cantidadEnfermeria = $("#IdValor_7").val();
    var cantidadRecreacion = $("#IdValor_8").val();
    var cantidadAreasVerdes = $("#IdValor_9").val();
    var cantidadCocina = $("#IdValor_10").val();
    var cantidadComedor = $("#IdValor_11").val();
    var cantidadLavanderia = $("#IdValor_12").val();
    var cantidadDormitoriosNNA = $("#IdValor_13").val();
    var cantidadCamasNNA = $("#IdValor_14").val();
    var cantidadColsetLockers = $("#IdValor_15").val();
    var cantidadBañosPublicos = $("#IdValor_16").val();
    var cantidadBañosNNA = $("#Infraest_036_banosNNAadecuados_cantidad").val();
    var cantidadDuchasNNA = $("#Infraest_038_duchasNNA_cantidad").val();

    var AmbienteAcorde = $("#IdParInfraestructura_27").val();
    var vestuarioAdecuado = $("#IdParInfraestructura_28").val();
    var utilesAseo = $("#IdParInfraestructura_30").val();
    var aguaCaliente = $("#IdParInfraestructura_31").val();
    var calefonGas= $("#Infraest_043_estadoCalefonLlavesGas_existe").val();
    var sistemaCalefacion = $("#IdParInfraestructura_34").val();
    var ventilacion = $("#IdParInfraestructura_35").val();
    var accesoDiscapacitados = $("#IdParInfraestructura_36").val();
    var habilitaDiscapacitados = $("#IdParInfraestructura_37").val();
    var observaciones = replaceAll(EliminaEspacios(document.getElementById("Infraest_049_observaciones").value), "'", "");

    var BanosNNAenFuncionamiento = $("#IdValor_17").val();
    var BanosNNAdeacuerdoNormativa = $("#IdValor_18").val();
    var BanosNNAdehombres = $("#IdValor_19").val();
    var BanosNNAdemujeres = $("#IdValor_20").val();
    var BanosNNAmixtos = $("#IdValor_21").val();
    var DuchasNNAFuncionamiento = $("#IdValor_22").val();
    var DuchasNNAdeacuerdoNormativa = $("#IdValor_23").val();
    var DuchasNNAdehombres = $("#IdValor_24").val();
    var DuchasNNAdemujeres = $("#IdValor_25").val();
    var DuchasNNAmixtas = $("#IdValor_26").val();
    var VestuarioPersonalizadoNNA = $("#IdParInfraestructura_29").val();
    var CumpleNormativaCalefon = $("#IdParInfraestructura_32").val();
    var CumpleNormativaLlaveGas = $("#IdParInfraestructura_33").val();


    if (BanosNNAenFuncionamiento == "") BanosNNAenFuncionamiento = "0";
    if (BanosNNAdeacuerdoNormativa == "") BanosNNAdeacuerdoNormativa = "0";
    if (BanosNNAdehombres == "") BanosNNAdehombres = "0";
    if (BanosNNAdemujeres == "") BanosNNAdemujeres = "0";
    if (BanosNNAmixtos == "") BanosNNAmixtos = "0";
    if (DuchasNNAFuncionamiento == "") DuchasNNAFuncionamiento = "0";
    if (DuchasNNAdeacuerdoNormativa == "") DuchasNNAdeacuerdoNormativa = "0";
    if (DuchasNNAdehombres == "") DuchasNNAdehombres = "0";
    if (DuchasNNAdemujeres == "") DuchasNNAdemujeres = "0";
    if (DuchasNNAmixtas == "") DuchasNNAmixtas = "0";

    if (cantidadOficAdm == "") cantidadOficAdm = "0";
    if (cantidadSalaReunion == "") cantidadSalaReunion = "0";
    if (cantidadSalaRecepcion == "") cantidadSalaRecepcion = "0";
    if (cantidadEspaciosVisitas == "") cantidadEspaciosVisitas = "0";
    if (cantidadSalaTalleres == "") cantidadSalaTalleres = "0";
    if (cantidadSalaLiving == "") cantidadSalaLiving = "0";
    if (cantidadEnfermeria == "") cantidadEnfermeria = "0";
    if (cantidadRecreacion == "") cantidadRecreacion = "0";
    if (cantidadAreasVerdes == "") cantidadAreasVerdes = "0";
    if (cantidadCocina == "") cantidadCocina = "0";
    if (cantidadComedor == "") cantidadComedor = "0";
    if (cantidadLavanderia == "") cantidadLavanderia = "0";
    if (cantidadDormitoriosNNA == "") cantidadDormitoriosNNA = "0";
    if (cantidadCamasNNA == "") cantidadCamasNNA = "0";
    if (cantidadColsetLockers == "") cantidadColsetLockers = "0";
    if (cantidadBañosPublicos == "") cantidadBañosPublicos = "0";
    
    var dataParametros =
        "{'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +

        "'CantidadOficAdm': '" + cantidadOficAdm + "'," +
        "'CantidadSalaReunion': '" + cantidadSalaReunion + "'," +
        "'CantidadSalaRecepcion': '" + cantidadSalaRecepcion + "'," +
        "'CantidadEspaciosVisitas': '" + cantidadEspaciosVisitas + "'," +
        "'CantidadSalaTalleres': '" + cantidadSalaTalleres + "'," +
        "'CantidadSalaLiving': '" + cantidadSalaLiving + "'," +
        "'CantidadEnfermeria': '" + cantidadEnfermeria + "'," +
        "'CantidadRecreacion': '" + cantidadRecreacion + "'," +
        "'CantidadAreasVerdes': '" + cantidadAreasVerdes + "'," +
        "'CantidadCocina': '" + cantidadCocina + "'," +
        "'CantidadComedor': '" + cantidadComedor + "'," +
        "'CantidadLavanderia': '" + cantidadLavanderia + "'," +
        "'CantidadDormitoriosNNA': '" + cantidadDormitoriosNNA + "'," +
        "'CantidadCamasNNA': '" + cantidadCamasNNA + "'," +
        "'CantidadColsetLockers': '" + cantidadColsetLockers + "'," +
        "'CantidadBañosPublicos': '" + cantidadBañosPublicos + "'," +
        "'CantidadBañosNNA': '" + cantidadBañosNNA + "'," +
        "'CantidadDuchasNNA': '" + cantidadDuchasNNA + "'," +
        "'AmbienteAcorde': '" + AmbienteAcorde + "'," +
        "'VestuarioAdecuado': '" + vestuarioAdecuado + "'," +
        "'UtilesAseo': '" + utilesAseo + "'," +
        "'AguaCaliente': '" + aguaCaliente + "'," +
        "'CalefonGas': '" + calefonGas + "'," +
        "'SistemaCalefacion': '" + sistemaCalefacion + "'," +
        "'Ventilacion': '" + ventilacion + "'," +
        "'AccesoDiscapacitados': '" + accesoDiscapacitados + "'," +
        "'HabilitaDiscapacitados': '" + habilitaDiscapacitados + "'," +
        "'Observaciones': '" + observaciones + "'," +

        "'BanosNNAenFuncionamiento': '" + BanosNNAenFuncionamiento + "'," +
        "'BanosNNAdeacuerdoNormativa': '" + BanosNNAdeacuerdoNormativa + "'," +
        "'BanosNNAdehombres': '" + BanosNNAdehombres + "'," +
        "'BanosNNAdemujeres': '" + BanosNNAdemujeres + "'," +
        "'BanosNNAmixtos': '" + BanosNNAmixtos + "'," +
        "'DuchasNNAFuncionamiento': '" + DuchasNNAFuncionamiento + "'," +
        "'DuchasNNAdeacuerdoNormativa': '" + DuchasNNAdeacuerdoNormativa + "'," +
        "'DuchasNNAdehombres': '" + DuchasNNAdehombres + "'," +
        "'DuchasNNAdemujeres': '" + DuchasNNAdemujeres + "'," +
        "'DuchasNNAmixtas': '" + DuchasNNAmixtas + "'," +
        "'VestuarioPersonalizadoNNA': '" + VestuarioPersonalizadoNNA + "'," +
        "'CumpleNormativaCalefon': '" + CumpleNormativaCalefon + "'," +
        "'CumpleNormativaLlaveGas': '" + CumpleNormativaLlaveGas + "'" +
        "}";
    //alert(dataParametros);

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesInfraestructura",
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

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Infraestructura.");
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
                ActivarDesactivarBotonesGrabar(4, false);
            }
        );

    });
}

// REVISAR ESTA FUNCION NO SE LLAMA REVISAR
function Infraest_037_duchasNNA_mixtos_cant(CodFicha) {
    $("#labelCaracteres_ObsInfra").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesInfraestructura",
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
                $("#IdValor_1").val(this.CantidadOficAdm);
                $("#IdValor_2").val(this.CantidadSalaReunion);
                $("#IdValor_3").val(this.CantidadSalaRecepcion);
                $("#IdValor_4").val(this.CantidadEspaciosVisitas);
                $("#IdValor_5").val(this.CantidadSalaTalleres);
                $("#IdValor_6").val(this.CantidadSalaLiving);
                $("#IdValor_7").val(this.CantidadEnfermeria);
                $("#IdValor_8").val(this.CantidadRecreacion);
                $("#IdValor_9").val(this.CantidadAreasVerdes);
                $("#IdValor_10").val(this.CantidadCocina);
                $("#IdValor_11").val(this.CantidadComedor);
                $("#IdValor_12").val(this.CantidadLavanderia);
                $("#IdValor_13").val(this.CantidadDormitoriosNNA);
                $("#IdValor_14").val(this.CantidadCamasNNA);
                $("#IdValor_15").val(this.CantidadColsetLockers);
                $("#IdValor_16").val(this.CantidadBañosPublicos);

                /*Inicio - Valido si viene valor  en los combos individuales*/               
                if (this.AmbienteAcorde == 0) $("#IdParInfraestructura_27").val("0"); 
                else $("#IdParInfraestructura_27").val("1");
                
                if (this.VestuarioAdecuado == 0) $("#IdParInfraestructura_28").val("0");  
                else $("#IdParInfraestructura_28").val("1");

                if (this.UtilesAseo == 0) $("#IdParInfraestructura_30").val(0); 
                else $("#IdParInfraestructura_30").val("1");

                if (this.AguaCaliente == 0) $("#IdParInfraestructura_31").val("0"); 
                else $("#IdParInfraestructura_31").val("1");

                if (this.CalefonGas == 0) $("#Infraest_043_estadoCalefonLlavesGas_existe").val("0");
                else $("#Infraest_043_estadoCalefonLlavesGas_existe").val("1");

                if (this.SistemaCalefacion == 0) $("#IdParInfraestructura_34").val("0"); 
                else $("#IdParInfraestructura_34").val("1");

                if (this.Ventilacion == 0) $("#IdParInfraestructura_35").val("0"); 
                else $("#IdParInfraestructura_35").val("1"); 

                if (this.AccesoDiscapacitados == 0) $("#IdParInfraestructura_36").val("0");
                else $("#IdParInfraestructura_36").val("1"); 

                if (this.HabilitaDiscapacitados == 0) $("#IdParInfraestructura_37").val("0"); 
                else $("#IdParInfraestructura_37").val("1");

                if (this.CalefonNormativa == 0) $("#IdParInfraestructura_32").val("0"); 
                else $("#IdParInfraestructura_32").val("1");
                
                if (this.LlaveGasNormativa == 0) $("#IdParInfraestructura_33").val("0"); 
                else $("#IdParInfraestructura_33").val("1"); 

                if (this.VestuarioPersonalizadoNNA == 0) $("#IdParInfraestructura_29").val("0"); 
                else $("#IdParInfraestructura_29").val("1");  
                /* Fin */

                $("#Infraest_036_banosNNAadecuados_cantidad").val(this.CantidadBañosNNA);
                $("#Infraest_038_duchasNNA_cantidad").val(this.CantidadDuchasNNA);

                $("#IdValor_17").val(this.CantidadBañosNNAFuncionamiento);
                $("#IdValor_18").val(this.CantidadBañosNNANormativa);
                $("#IdValor_19").val(this.CantidadBañosNNAHombres);
                $("#IdValor_20").val(this.CantidadBañosNNAMujeres);
                $("#IdValor_21").val(this.CantidadBañosNNAMixtos);
               
                $("#IdValor_22").val(this.CantidadDuchasNNAFuncionamiento);
                $("#IdValor_23").val(this.CantidadDuchasNNANormativa);
                $("#IdValor_24").val(this.CantidadDuchasNNAHombres);
                $("#IdValor_25").val(this.CantidadDuchasNNAMujeres);
                $("#IdValor_26").val(this.CantidadDuchasNNAMixtas);

                if ($("#IdValor_17").val() != "0")// probablemente hay que cambiar a 2
                {
                    $("#IdParInfraestructura_17").val("1");
                    document.getElementById("IdValor_18").disabled = false;
                }

                if ($("#IdValor_18").val() != "0") $("#IdParInfraestructura_18").val(1);
                if ($("#IdValor_19").val() != "0") $("#IdParInfraestructura_19").val(1);
                if ($("#IdValor_20").val() != "0") $("#IdParInfraestructura_20").val(1);
                if ($("#IdValor_21").val() != "0") $("#IdParInfraestructura_21").val(1);

                if ($("#IdValor_22").val() != "0")
                {
                    $("#IdParInfraestructura_22").val(1);
                    document.getElementById("IdValor_23").disabled = false;
                }
                if ($("#IdValor_23").val() != "0") $("#IdParInfraestructura_23").val(1);
                if ($("#IdValor_24").val() != "0") $("#IdParInfraestructura_24").val(1);
                if ($("#IdValor_25").val() != "0") $("#IdParInfraestructura_25").val(1);
                if ($("#IdValor_26").val() != "0") $("#IdParInfraestructura_26").val(1);
               // else $("#IdParInfraestructura_26").val(0);
                
                document.getElementById("Infraest_049_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("Infraest_049_observaciones"), "labelCaracteres_ObsInfra");

                if ($("#IdValor_1").val() != "0") $("#IdParInfraestructura_1").val("1");
                else $("#IdParInfraestructura_1").val("0");

                if ($("#IdValor_2").val() != "0") $("#IdParInfraestructura_2").val(1);
                

                if ($("#IdValor_3").val() != "0")
                    $("#IdParInfraestructura_3").val(1);

                if ($("#IdValor_4").val() != "0")
                    $("#IdParInfraestructura_4").val(1);

                if ($("#IdValor_5").val() != "0")
                    $("#IdParInfraestructura_5").val(1);

                if ($("#IdValor_6").val() != "0")
                    $("#IdParInfraestructura_6").val(1);

                if ($("#IdValor_7").val() != "0")
                    $("#IdParInfraestructura_7").val(1);

                if ($("#IdValor_8").val() != "0")
                    $("#IdParInfraestructura_8").val(1);

                if ($("#IdValor_9").val() != "0")
                    $("#IdParInfraestructura_9").val(1);

                if ($("#IdValor_10").val() != "0")
                    $("#IdParInfraestructura_10").val(1);

                if ($("#IdValor_11").val() != "0")
                    $("#IdParInfraestructura_11").val(1);

                if ($("#IdValor_12").val() != "0")
                    $("#IdParInfraestructura_12").val(1);

                if ($("#IdValor_13").val() != "0")
                    $("#IdParInfraestructura_13").val(1);

                if ($("#IdValor_14").val() != "0")
                    $("#IdParInfraestructura_14").val(1);

                if ($("#IdValor_15").val() != "0")
                    $("#IdParInfraestructura_15").val(1);

                if ($("#IdValor_16").val() != "0")
                    $("#IdParInfraestructura_16").val(1);

                if ($("#Infraest_036_banosNNAadecuados_cantidad").val() != "0")
                    $("#Infraest_035_banosNNAadecuados_existe").val(1);

                if ($("#Infraest_038_duchasNNA_cantidad").val() != "0")
                    $("#Infraest_037_duchasNNA_existe").val(1);
            }
        );
        if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesInfraestructura = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            infraestructura_residencia = true;
            CargaCamposComparativa4();
        }
    });
}

var ParValores = { 0: "NO", 1: "SI" };
function CargaParInfraestructura() {
    $("#gridInfraestructura").DataTable().destroy();
    $('#gridInfraestructura').dataTable({
        "ajax": {
            "url": "FichaResidencial.aspx/ObtenerParInfraestructura",
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
            { "data": "IdParInfraestructura" },
            { "data": "NombreParInfraestructura", "sClass": "etiqCampo3" },
            { "data": "VariableCuantitativa" },
            { "data": "SegundaVarCuantitativa" },
            {
                "data": null,
                "render": function (data, type, row, meta)
                {
                    if (data.IdParInfraestructura <= 26) 
                        var $select = $("<select id='IdParInfraestructura_" + data.IdParInfraestructura + "' class='form-control textCampoSel1 dllSiNo' disabled='disabled'></select>", {});
                     else 
                        var $select = $("<select id='IdParInfraestructura_" + data.IdParInfraestructura + "' class='form-control textCampoSel1 dllSiNo'></select>", {});

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
            },
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    var dataRender;
                    if ((data.SegundaVarCuantitativa == true) && (data.IdParInfraestructura <= 26))
                    {                                                   
                        if (data.IdParInfraestructura == 17) 
                            var $input = $("<input type='text' id='IdValor_" + data.IdParInfraestructura + "' style='width:100px;' class='form-control' maxlength='4'  onkeyup='HabilitaInfraestructura(" + data.IdParInfraestructura + ");' onkeypress='return ValidaIngresoSoloNumeros(this.value, event)'; onblur='ValidaSumaDependientesbanosNNAFunc();'>", {});
                        else if ((data.IdParInfraestructura == 22))
                            var $input = $("<input type='text' id='IdValor_" + data.IdParInfraestructura + "' style='width:100px;' class='form-control' maxlength='4'  onkeyup='HabilitaInfraestructura(" + data.IdParInfraestructura + ");' onkeypress='return ValidaIngresoSoloNumeros(this.value, event)'; onblur='ValidaSumaDependecniasDuchaNNAFunc();'>", {});
                        else
                            var $input = $("<input type='text' id='IdValor_" + data.IdParInfraestructura + "' style='width:100px;' class='form-control' maxlength='4'  onkeyup='HabilitaInfraestructura(" + data.IdParInfraestructura + ");' onkeypress='return ValidaIngresoSoloNumeros(this.value, event);'>", {});

                        return $input.prop("outerHTML");
                    } else {
                        dataRender = "";
                        return dataRender;
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

function ObtenerAntecedentesInfraestructura(CodFicha) {
    $("#labelCaracteres_ObsInfra").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesInfraestructura",
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
                $("#IdValor_1").val(this.CantidadOficAdm);
                $("#IdValor_2").val(this.CantidadSalaReunion);
                $("#IdValor_3").val(this.CantidadSalaRecepcion);
                $("#IdValor_4").val(this.CantidadEspaciosVisitas);
                $("#IdValor_5").val(this.CantidadSalaTalleres);
                $("#IdValor_6").val(this.CantidadSalaLiving);
                $("#IdValor_7").val(this.CantidadEnfermeria);
                $("#IdValor_8").val(this.CantidadRecreacion);
                $("#IdValor_9").val(this.CantidadAreasVerdes);
                $("#IdValor_10").val(this.CantidadCocina);
                $("#IdValor_11").val(this.CantidadComedor);
                $("#IdValor_12").val(this.CantidadLavanderia);
                $("#IdValor_13").val(this.CantidadDormitoriosNNA);
                $("#IdValor_14").val(this.CantidadCamasNNA);
                $("#IdValor_15").val(this.CantidadColsetLockers);
                $("#IdValor_16").val(this.CantidadBañosPublicos);

                $("#IdParInfraestructura_27").val(this.AmbienteAcorde);
                $("#IdParInfraestructura_28").val(this.VestuarioAdecuado);
                $("#IdParInfraestructura_30").val(this.UtilesAseo);
                $("#IdParInfraestructura_31").val(this.AguaCaliente);
                $("#Infraest_043_estadoCalefonLlavesGas_existe").val(this.CalefonGas);
                $("#IdParInfraestructura_34").val(this.SistemaCalefacion);
                $("#IdParInfraestructura_35").val(this.Ventilacion);
                $("#IdParInfraestructura_36").val(this.AccesoDiscapacitados);
                $("#IdParInfraestructura_37").val(this.HabilitaDiscapacitados);

                $("#Infraest_036_banosNNAadecuados_cantidad").val(this.CantidadBañosNNA);
                $("#Infraest_038_duchasNNA_cantidad").val(this.CantidadDuchasNNA);

                $("#IdValor_17").val(this.CantidadBañosNNAFuncionamiento);
                $("#IdValor_18").val(this.CantidadBañosNNANormativa);
                $("#IdValor_19").val(this.CantidadBañosNNAHombres);
                $("#IdValor_20").val(this.CantidadBañosNNAMujeres);
                $("#IdValor_21").val(this.CantidadBañosNNAMixtos);

                $("#IdValor_22").val(this.CantidadDuchasNNAFuncionamiento);
                $("#IdValor_23").val(this.CantidadDuchasNNANormativa);
                $("#IdValor_24").val(this.CantidadDuchasNNAHombres);
                $("#IdValor_25").val(this.CantidadDuchasNNAMujeres);
                $("#IdValor_26").val(this.CantidadDuchasNNAMixtas);

                if ($("#IdValor_17").val() != "0") { $("#IdParInfraestructura_17").val(1); document.getElementById("IdValor_18").disabled = false; }
                if ($("#IdValor_18").val() != "0") $("#IdParInfraestructura_18").val(1);
                if ($("#IdValor_19").val() != "0") $("#IdParInfraestructura_19").val(1);
                if ($("#IdValor_20").val() != "0") $("#IdParInfraestructura_20").val(1);
                if ($("#IdValor_21").val() != "0") $("#IdParInfraestructura_21").val(1);

                if ($("#IdValor_22").val() != "0") { $("#IdParInfraestructura_22").val(1); document.getElementById("IdValor_23").disabled = false; }
                if ($("#IdValor_23").val() != "0") $("#IdParInfraestructura_23").val(1);
                if ($("#IdValor_24").val() != "0") $("#IdParInfraestructura_24").val(1);
                if ($("#IdValor_25").val() != "0") $("#IdParInfraestructura_25").val(1);
                if ($("#IdValor_26").val() != "0") $("#IdParInfraestructura_26").val(1);

                $("#IdParInfraestructura_32").val(this.CalefonNormativa);
                $("#IdParInfraestructura_33").val(this.LlaveGasNormativa);
                $("#IdParInfraestructura_29").val(this.VestuarioPersonalizadoNNA);

                document.getElementById("Infraest_049_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("Infraest_049_observaciones"), "labelCaracteres_ObsInfra");

                if ($("#IdValor_1").val() != "0")
                    $("#IdParInfraestructura_1").val(1);

                if ($("#IdValor_2").val() != "0")
                    $("#IdParInfraestructura_2").val(1);

                if ($("#IdValor_3").val() != "0")
                    $("#IdParInfraestructura_3").val(1);

                if ($("#IdValor_4").val() != "0")
                    $("#IdParInfraestructura_4").val(1);

                if ($("#IdValor_5").val() != "0")
                    $("#IdParInfraestructura_5").val(1);

                if ($("#IdValor_6").val() != "0")
                    $("#IdParInfraestructura_6").val(1);

                if ($("#IdValor_7").val() != "0")
                    $("#IdParInfraestructura_7").val(1);

                if ($("#IdValor_8").val() != "0")
                    $("#IdParInfraestructura_8").val(1);

                if ($("#IdValor_9").val() != "0")
                    $("#IdParInfraestructura_9").val(1);

                if ($("#IdValor_10").val() != "0")
                    $("#IdParInfraestructura_10").val(1);

                if ($("#IdValor_11").val() != "0")
                    $("#IdParInfraestructura_11").val(1);

                if ($("#IdValor_12").val() != "0")
                    $("#IdParInfraestructura_12").val(1);

                if ($("#IdValor_13").val() != "0")
                    $("#IdParInfraestructura_13").val(1);

                if ($("#IdValor_14").val() != "0")
                    $("#IdParInfraestructura_14").val(1);

                if ($("#IdValor_15").val() != "0")
                    $("#IdParInfraestructura_15").val(1);

                if ($("#IdValor_16").val() != "0")
                    $("#IdParInfraestructura_16").val(1);

                if ($("#Infraest_036_banosNNAadecuados_cantidad").val() != "0")
                    $("#Infraest_035_banosNNAadecuados_existe").val(1);

                if ($("#Infraest_038_duchasNNA_cantidad").val() != "0")
                    $("#Infraest_037_duchasNNA_existe").val(1);
            }
        );
        if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesInfraestructura = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            infraestructura_residencia = true;
            CargaCamposComparativa4();
        }
    });
}

// Sprint 3 - 20191113 - gcastro
function CargaParValores1()
{
    var x = document.getElementsByClassName("dllSiNo");
    x.selectedIndex = 0;
    x.disabled = true;
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerParValores",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        InicializaCombo(".dllSiNo");
        // Institucion.append("<option value='0'>Seleccionar</option>");
        var NombreInstitucionAUX = "";
        if ((r.d[0].error) == "") {
            if (r.d != "") {
                $.each(r.d,
                    function () {
                        if (NombreInstitucionAUX == "" || NombreInstitucionAUX != this.Descripcion) {
                            $(".dllSiNo").append("<option value='" + this.IdValor + "'>" + this.Descripcion + "</option>");
                            NombreInstitucionAUX = this.Descripcion;
                        }
                    }
                );
                //   document.getElementsByClassName("form-control textCampoSel1 dllSiNo").disabled = false;
                x.disabled = false;
                if (r.d.length == 1) {
                    $(".dllSiNo").prop('selectedIndex', 1);
                    //  CargaParValores1($("#IdParInfraestructura_27").val());
                }
            }
        }
        else {
            x.selectedIndex = 0;
            x.disabled = true;

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }
    });
}
//PJUD  
function ObtenerAntecedentesInfraestructura_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesInfraestructura",
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
                $("#Infraest_002_ofi_admin_cantidad_pjud").val(this.CantidadOficAdm);
                $("#Infraest_004_salaReuniones_cantidad_pjud").val(this.CantidadSalaReunion);
                $("#Infraest_006_salaRecepcion_cantidad_pjud").val(this.CantidadSalaRecepcion);
                $("#Infraest_008_espacioVisitas_cantidad_pjud").val(this.CantidadEspaciosVisitas);
                $("#Infraest_010_salaMultiuso_cantidad_pjud").val(this.CantidadSalaTalleres);
                $("#Infraest_012_salaEstar_cantidad_pjud").val(this.CantidadSalaLiving);
                $("#Infraest_014_enfermeria_cantidad_pjud").val(this.CantidadEnfermeria);
                $("#Infraest_016_espacioRecreacional_cantidad_pjud").val(this.CantidadRecreacion);
                $("#Infraest_020_areasVerdes_cantidad_pjud").val(this.CantidadAreasVerdes);
                $("#Infraest_022_cocina_cantidad_pjud").val(this.CantidadCocina);
                $("#Infraest_024_comedor_cantidad_pjud").val(this.CantidadComedor);
                $("#Infraest_026_Lavanderia_cantidad_pjud").val(this.CantidadLavanderia);
                $("#Infraest_028_Dormitorio_cantidad_pjud").val(this.CantidadDormitoriosNNA);
                $("#Infraest_030_CamasNNA_cantidad_pjud").val(this.CantidadCamasNNA);
                $("#Infraest_032_closetLocker_cantidad_pjud").val(this.CantidadColsetLockers);
                $("#Infraest_034_banosPublico_cantidad_pjud").val(this.CantidadBañosPublicos);
                $("#Infraest_036_banosNNAadecuados_cantidad_pjud").val(this.CantidadBañosNNA);
                $("#Infraest_038_duchasNNA_cantidad_pjud").val(this.CantidadDuchasNNA);

                $("#Infraest_039_ambientacionAcorde_existe_pjud").val(this.AmbienteAcorde);
                $("#Infraest_040_vestuarioAdecuado_existe_pjud").val(this.VestuarioAdecuado);
                $("#Infraest_041_utilesAseoPersonalNNA_existe_pjud").val(this.UtilesAseo);
                $("#Infraest_042_aguaCaliente_existe_pjud").val(this.AguaCaliente);
                $("#Infraest_043_estadoCalefonLlavesGas_existe_pjud").val(this.CalefonGas);
                $("#Infraest_044_sistemaCalefaccion_existe_pjud").val(this.SistemaCalefacion);
                $("#Infraest_045_ventilacionAdecuada_existe_pjud").val(this.Ventilacion);
                $("#Infraest_046_AccesoDiscapacitados_existe_pjud").val(this.AccesoDiscapacitados);
                $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud").val(this.HabilitaDiscapacitados);

                $("#Infraest_049_observaciones_pjud").val(this.Observaciones);

                if ($("#Infraest_002_ofi_admin_cantidad_pjud").val() != "0")
                    $("#Infraest_001_ofi_admin_existe_pjud").val("1");

                if ($("#Infraest_004_salaReuniones_cantidad_pjud").val() != "0")
                    $("#Infraest_003_salaReuniones_existe_pjud").val(1);

                if ($("#Infraest_006_salaRecepcion_cantidad_pjud").val() != "0")
                    $("#Infraest_005_salaRecepcion_existe_pjud").val(1);

                if ($("#Infraest_008_espacioVisitas_cantidad_pjud").val() != "0")
                    $("#Infraest_007_espacioVisitas_existe_pjud").val(1);

                if ($("#Infraest_010_salaMultiuso_cantidad_pjud").val() != "0")
                    $("#Infraest_009_salaMultiuso_existe_pjud").val(1);

                if ($("#Infraest_012_salaEstar_cantidad_pjud").val() != "0")
                    $("#Infraest_011_salaEstar_existe_pjud").val(1);

                if ($("#Infraest_014_enfermeria_cantidad_pjud").val() != "0")
                    $("#Infraest_013_enfermeria_existe_pjud").val(1);

                if ($("#Infraest_016_espacioRecreacional_cantidad_pjud").val() != "0")
                    $("#Infraest_015_espacioRecreacional_existe_pjud").val(1);

                if ($("#Infraest_020_areasVerdes_cantidad_pjud").val() != "0")
                    $("#Infraest_019_areasVerdes_existe_pjud").val(1);

                if ($("#Infraest_022_cocina_cantidad_pjud").val() != "0")
                    $("#Infraest_021_cocina_existe_pjud").val(1);

                if ($("#Infraest_024_comedor_cantidad_pjud").val() != "0")
                    $("#Infraest_023_comedor_existe_pjud").val(1);

                if ($("#Infraest_026_Lavanderia_cantidad_pjud").val() != "0")
                    $("#Infraest_025_Lavanderia_existe_pjud").val(1);

                if ($("#Infraest_028_Dormitorio_cantidad_pjud").val() != "0")
                    $("#Infraest_027_Dormitorio_existe_pjud").val(1);

                if ($("#Infraest_030_CamasNNA_cantidad_pjud").val() != "0")
                    $("#Infraest_029_CamasNNA_existe_pjud").val(1);

                if ($("#Infraest_032_closetLocker_cantidad_pjud").val() != "0")
                    $("#Infraest_031_closetLocker_existe_pjud").val(1);

                if ($("#Infraest_034_banosPublico_cantidad_pjud").val() != "0")
                    $("#Infraest_033_banosPublico_existe_pjud").val(1);

                if ($("#Infraest_036_banosNNAadecuados_cantidad_pjud").val() != "0")
                    $("#Infraest_035_banosNNAadecuados_existe_pjud").val(1);

                if ($("#Infraest_038_duchasNNA_cantidad_pjud").val() != "0")
                    $("#Infraest_037_duchasNNA_existe_pjud").val(1);
            }
        );

        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesInfraestructura_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        infraestructura_pjud = true;
        CargaCamposComparativa4();
    });
}

function ObtenerAntecedentesInfraestructura_Compare(codFichaPadre, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#labelCaracteres_ObsInfra").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesInfraestructura",
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
                $("#IdValor_1" + sufijo).val(this.CantidadOficAdm);
                $("#IdValor_2" + sufijo).val(this.CantidadSalaReunion);
                $("#IdValor_3" + sufijo).val(this.CantidadSalaRecepcion);
                $("#IdValor_4" + sufijo).val(this.CantidadEspaciosVisitas);
                $("#IdValor_5" + sufijo).val(this.CantidadSalaTalleres);
                $("#IdValor_6" + sufijo).val(this.CantidadSalaLiving);
                $("#IdValor_7" + sufijo).val(this.CantidadEnfermeria);
                $("#IdValor_8" + sufijo).val(this.CantidadRecreacion);
                $("#IdValor_9" + sufijo).val(this.CantidadAreasVerdes);
                $("#IdValor_10" + sufijo).val(this.CantidadCocina);
                $("#IdValor_11" + sufijo).val(this.CantidadComedor);
                $("#IdValor_12" + sufijo).val(this.CantidadLavanderia);
                $("#IdValor_13" + sufijo).val(this.CantidadDormitoriosNNA);
                $("#IdValor_14" + sufijo).val(this.CantidadCamasNNA);
                $("#IdValor_15" + sufijo).val(this.CantidadColsetLockers);
                $("#IdValor_16" + sufijo).val(this.CantidadBañosPublicos);


                $("#IdParInfraestructura_27" + sufijo).val(this.AmbienteAcorde);
                $("#IdParInfraestructura_28" + sufijo).val(this.VestuarioAdecuado);
                $("#IdParInfraestructura_30" + sufijo).val(this.UtilesAseo);
                $("#IdParInfraestructura_31" + sufijo).val(this.AguaCaliente);
                $("#Infraest_043_estadoCalefonLlavesGas_existe" + sufijo).val(this.CalefonGas);
                $("#IdParInfraestructura_34" + sufijo).val(this.SistemaCalefacion);
                $("#IdParInfraestructura_35" + sufijo).val(this.Ventilacion);
                $("#IdParInfraestructura_36" + sufijo).val(this.AccesoDiscapacitados);
                $("#IdParInfraestructura_37" + sufijo).val(this.HabilitaDiscapacitados);

                $("#Infraest_036_banosNNAadecuados_cantidad" + sufijo).val(this.CantidadBañosNNA);
                $("#Infraest_038_duchasNNA_cantidad" + sufijo).val(this.CantidadDuchasNNA);


                $("#IdValor_17" + sufijo).val(this.CantidadBañosNNAFuncionamiento);
                $("#IdValor_18" + sufijo).val(this.CantidadBañosNNANormativa);
                $("#IdValor_19" + sufijo).val(this.CantidadBañosNNAHombres);
                $("#IdValor_20" + sufijo).val(this.CantidadBañosNNAMujeres);
                $("#IdValor_21" + sufijo).val(this.CantidadBañosNNAMixtos);

                $("#IdValor_22" + sufijo).val(this.CantidadDuchasNNAFuncionamiento);
                $("#IdValor_23" + sufijo).val(this.CantidadDuchasNNANormativa);
                $("#IdValor_24" + sufijo).val(this.CantidadDuchasNNAHombres);
                $("#IdValor_25" + sufijo).val(this.CantidadDuchasNNAMujeres);
                $("#IdValor_26" + sufijo).val(this.CantidadDuchasNNAMixtas);

                if ($("#IdValor_17" + sufijo).val() != "0")
                    $("#IdParInfraestructura_17" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_17" + sufijo).val(0);

                if ($("#IdValor_18" + sufijo).val() != "0")
                    $("#IdParInfraestructura_18" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_18" + sufijo).val(0);

                if ($("#IdValor_19" + sufijo).val() != "0")
                    $("#IdParInfraestructura_19" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_19" + sufijo).val(0);

                if ($("#IdValor_20" + sufijo).val() != "0")
                    $("#IdParInfraestructura_20" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_20" + sufijo).val(0);

                if ($("#IdValor_21" + sufijo).val() != "0")
                    $("#IdParInfraestructura_21" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_21" + sufijo).val(0);

                if ($("#IdValor_22" + sufijo).val() != "0") 
                    $("#IdParInfraestructura_22" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_22" + sufijo).val(0);

                if ($("#IdValor_23" + sufijo).val() != "0")
                    $("#IdParInfraestructura_23" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_23" + sufijo).val(0);

                if ($("#IdValor_24" + sufijo).val() != "0")
                    $("#IdParInfraestructura_24" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_24" + sufijo).val(0);

                if ($("#IdValor_25" + sufijo).val() != "0")
                    $("#IdParInfraestructura_25" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_25" + sufijo).val(0);

                if ($("#IdValor_26" + sufijo).val() != "0")
                    $("#IdParInfraestructura_26" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_26" + sufijo).val(0);

                if( this.CalefonNormativa != "0" && this.CalefonNormativa !="-1")
                    $("#IdParInfraestructura_32"+ sufijo).val(1);
                else
                    $("#IdParInfraestructura_32"+ sufijo).val(0);

                if (this.LlaveGasNormativa != "0" && this.LlaveGasNormativa != "-1") // revisar cambiar 0 por 2
                    $("#IdParInfraestructura_33" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_33" + sufijo).val(0);

                if (this.VestuarioPersonalizadoNNA != "0" && this.VestuarioPersonalizadoNNA != "-1")
                    $("#IdParInfraestructura_29" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_29" + sufijo).val(0);

                document.getElementById("Infraest_049_observaciones" + sufijo).value = this.Observaciones;

                if ($("#IdValor_1" + sufijo).val() != "0")
                    $("#IdParInfraestructura_1" + sufijo).val("1");
                else
                    $("#IdParInfraestructura_1" + sufijo).val("0");

                if ($("#IdValor_2" + sufijo).val() != "0")
                    $("#IdParInfraestructura_2" + sufijo).val(1);  // gcastro modificado de 0 a 2
                else
                    $("#IdParInfraestructura_2" + sufijo).val(0);

                if ($("#IdValor_3" + sufijo).val() != "0")
                    $("#IdParInfraestructura_3" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_3" + sufijo).val(0);

                if ($("#IdValor_4" + sufijo).val() != "0")
                    $("#IdParInfraestructura_4" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_4" + sufijo).val(0);

                if ($("#IdValor_5" + sufijo).val() != "0")
                    $("#IdParInfraestructura_5" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_5" + sufijo).val(0);

                if ($("#IdValor_6" + sufijo).val() != "0")
                    $("#IdParInfraestructura_6" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_6" + sufijo).val(0);

                if ($("#IdValor_7" + sufijo).val() != "0")
                    $("#IdParInfraestructura_7" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_7" + sufijo).val(0);

                if ($("#IdValor_8" + sufijo).val() != "0")
                    $("#IdParInfraestructura_8" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_8" + sufijo).val(0);

                if ($("#IdValor_9" + sufijo).val() != "0")
                    $("#IdParInfraestructura_9" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_9" + sufijo).val(0);

                if ($("#IdValor_10" + sufijo).val() != "0")
                    $("#IdParInfraestructura_10" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_10" + sufijo).val(0);

                if ($("#IdValor_11" + sufijo).val() != "0")
                    $("#IdParInfraestructura_11" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_11" + sufijo).val(0);

                if ($("#IdValor_12" + sufijo).val() != "0")
                    $("#IdParInfraestructura_12" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_12" + sufijo).val(0);

                if ($("#IdValor_13" + sufijo).val() != "0")
                    $("#IdParInfraestructura_13" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_13" + sufijo).val(0);

                if ($("#IdValor_14" + sufijo).val() != "0")
                    $("#IdParInfraestructura_14" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_14" + sufijo).val(0);

                if ($("#IdValor_15" + sufijo).val() != "0")
                    $("#IdParInfraestructura_15" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_15" + sufijo).val(0);

                if ($("#IdValor_16" + sufijo).val() != "0")
                    $("#IdParInfraestructura_16" + sufijo).val(1);
                else
                    $("#IdParInfraestructura_16" + sufijo).val(0);

                if ($("#Infraest_036_banosNNAadecuados_cantidad" + sufijo).val() != "0")
                    $("#Infraest_035_banosNNAadecuados_existe" + sufijo).val(1);
                else
                    $("#Infraest_035_banosNNAadecuados_existe" + sufijo).val(0);

                if ($("#Infraest_038_duchasNNA_cantidad" + sufijo).val() != "0")
                    $("#Infraest_037_duchasNNA_existe" + sufijo).val(1);
                else
                    $("#Infraest_037_duchasNNA_existe" + sufijo).val(0);

            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesInfraestructura_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            infraestructura_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesInfraestructura_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            infraestructura_residencia_comp002 = true;
        }
        CargaCamposComparativa4_();
    });
}
////++++++++++++++++++++++
//FUNCIONES FRONTEND
function HabilitaInfraestructura(opc) {
    var valor19 = 0, valor20 = 0, valor21 = 0, valor22 = 0, valor23 = 0;
    var valor24 = 0, valor25 = 0, valor26 = 0, valor27 = 0, valor28 = 0;
    var valorCantidad = "";
    switch (opc) {
        case 1:
            var ofi_admin_cantidad_ = $("#IdValor_1").val();
            valorCantidad  = ofi_admin_cantidad_.charAt(0);

            if (valorCantidad != "0" && ofi_admin_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_1").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_1").selectedIndex = 0; 
            }
            break;
        case 2:
            var salaReuniones_cantidad_ = $("#IdValor_2").val();
            valorCantidad = salaReuniones_cantidad_.charAt(0);
            if (valorCantidad != "0" && salaReuniones_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_2").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_2").selectedIndex = 0;
            }
            break;
        case 3:
            var salaRecepcion_cantidad_ = $("#IdValor_3").val();
            valorCantidad = salaRecepcion_cantidad_.charAt(0);
            if (valorCantidad != "0" && salaRecepcion_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_3").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_3").selectedIndex = 0;
            }
            break;
        case 4:
            var espacioVisitas_cantidad_ = $("#IdValor_4").val();
            valorCantidad = espacioVisitas_cantidad_.charAt(0);
            if (valorCantidad != "0" && espacioVisitas_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_4").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_4").selectedIndex = 0;
            }
            break;
        case 5:
            var salaMultiuso_cantidad_ = $("#IdValor_5").val();
            valorCantidad = salaMultiuso_cantidad_.charAt(0);
            if (valorCantidad != "0" && salaMultiuso_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_5").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_5").selectedIndex = 0;
            }
            break;
        case 6:
            var salaEstar_cantidad_ = $("#IdValor_6").val();
            valorCantidad = salaEstar_cantidad_.charAt(0);
            if (valorCantidad != "0" && salaEstar_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_6").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_6").selectedIndex = 0;
            }
            break;
        case 7:
            var enfermeria_cantidad_ = $("#IdValor_7").val();
            valorCantidad = enfermeria_cantidad_.charAt(0);
            if (valorCantidad != "0" && enfermeria_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_7").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_7").selectedIndex = 0;
            }
            break;
        case 8:
            var espacioRecreacional_cantidad_ = $("#IdValor_8").val();
            valorCantidad = espacioRecreacional_cantidad_.charAt(0);
            if (valorCantidad != "0" && espacioRecreacional_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_8").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_8").selectedIndex = 0;
            }
            break;
        case 9:
            var areasVerdes_cantidad_ = $("#IdValor_9").val();
            valorCantidad = areasVerdes_cantidad_.charAt(0);
            if (valorCantidad != "0" && areasVerdes_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_9").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_9").selectedIndex = 0;
            }
            break;
        case 10:
            var cocina_cantidad_ = $("#IdValor_10").val();
            valorCantidad = cocina_cantidad_.charAt(0);
            if (valorCantidad != "0" && cocina_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_10").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_10").selectedIndex = 0;
            }
            break;
        case 11:
            var comedor_cantidad_ = $("#IdValor_11").val();
            valorCantidad = comedor_cantidad_.charAt(0);
            if (valorCantidad != "0" && comedor_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_11").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_11").selectedIndex = 0;
            }
            break;
        case 12:
            var Lavanderia_cantidad_ = $("#IdValor_12").val();
            valorCantidad = Lavanderia_cantidad_.charAt(0);
            if (valorCantidad != "0" && Lavanderia_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_12").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_12").selectedIndex = 0;
            }
            break;
        case 13:
            var Dormitorio_cantidad_ = $("#IdValor_13").val();
            valorCantidad = Dormitorio_cantidad_.charAt(0);
            if (valorCantidad != "0" && Dormitorio_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_13").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_13").selectedIndex = 0;
            }
            break;
        case 14:
            var CamasNNA_cantidad_ = $("#IdValor_14").val();
            valorCantidad = CamasNNA_cantidad_.charAt(0);
            if (valorCantidad != "0" && CamasNNA_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_14").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_14").selectedIndex = 0;
            }
            break;
        case 15:
            var closetLocker_cantidad_ = $("#IdValor_15").val();
            valorCantidad = closetLocker_cantidad_.charAt(0);
            if (valorCantidad != "0" && closetLocker_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_15").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_15").selectedIndex = 0;
            }
            break;
        case 16:
            var banosPublico_cantidad_ = $("#IdValor_16").val();
            valorCantidad = banosPublico_cantidad_.charAt(0);
            if (valorCantidad != "0" && banosPublico_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_16").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_16").selectedIndex = 0;
            }
            break;

        case 17://CAMPO NUEVO: Baños NNA en Funcionamiento -- antes era opción = 19
            if (EliminaEspacios($("#IdValor_17").val()) == 0 || EliminaEspacios($("#IdValor_17").val())=="") {
                document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 0;
                document.getElementById("IdParInfraestructura_17").selectedIndex = 0;
                document.getElementById("Infraest_036_banosNNAadecuados_cantidad").selectedIndex = 0;

                $("#IdParInfraestructura_18").val(0);
                $("#IdValor_18").val(0);
                document.getElementById("IdValor_18").disabled = true;
            }
            else {
                document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 1;
                document.getElementById("IdParInfraestructura_17").selectedIndex = 1;
                document.getElementById("IdValor_18").disabled = false;

                valor19 = 0;
                if (EliminaEspacios($("#IdValor_17").val()) != "") {
                    valor19 = parseInt(EliminaEspacios($("#IdValor_17").val()), 10);
                }
                if (valor19 > 5) {
                    $("#Infraest_036_banosNNAadecuados_cantidad").val(6);
                }
                else {
                    $("#Infraest_036_banosNNAadecuados_cantidad").val(valor19);
                }
           
            }
            break;
        case 19:
            var banosNNHombres_cantidad_ = $("#IdValor_19").val();
            valorCantidad = banosNNHombres_cantidad_.charAt(0);
            if (valorCantidad != "0" && banosNNHombres_cantidad_ != "") {
                document.getElementById("IdParInfraestructura_19").selectedIndex = 1;
            }
            else {
                document.getElementById("IdParInfraestructura_19").selectedIndex = 0;
            }
            break;
        case 18:// CAMPO NUEVO: Baños NNA de acuerdo a Normativa  -- ANTES CASE : 20
            if (EliminaEspacios($("#IdValor_18").val()) == 0 || EliminaEspacios($("#IdValor_18").val()) == "") {
                $("#IdParInfraestructura_18").val(0);
            }
            else {
                $("#IdParInfraestructura_18").val(1);
                valor19 = parseInt(EliminaEspacios($("#IdValor_17").val()), 10);
                valor20 = parseInt($("#IdValor_18").val(), 10);
                if (valor20 > valor19) {
                    $("#IdValor_18").val(valor19);
                    MensajeINFO("<p style='font-size:12px;'>Está ingresando más baños NNA de acuerdo a normativa que baños NNA en funcionamiento. El sistema igualará ambos campos al valor de baños NNA en funcionamiento</p>");
                }
            }
            break;

        case 20://Baños NNA de mujeres   --- ANTES OPCIÓN = 22
            valor19 = 0; valor21 = 0; valor22 = 0; valor23 = 0;
            if (EliminaEspacios($("#IdValor_20").val()) == 0 || EliminaEspacios($("#IdValor_20").val()) == "") {
                $("#IdParInfraestructura_20").val(0);
            }
            else {
                $("#IdParInfraestructura_20").val(1);
            }
            if (EliminaEspacios($("#IdValor_17").val()) != "") valor19 = parseInt(EliminaEspacios($("#IdValor_17").val()), 10);
            if (EliminaEspacios($("#IdValor_19").val()) != "") valor21 = parseInt($("#IdValor_19").val(), 10);
            if (EliminaEspacios($("#IdValor_20").val()) != "") valor22 = parseInt($("#IdValor_20").val(), 10);
            if (EliminaEspacios($("#IdValor_21").val()) != "") valor23 = parseInt($("#IdValor_21").val(), 10);

            if (valor19 > 0 && ((valor21 + valor22 + valor23) > valor19)) {
                $("#IdValor_20").val("");
                $("#IdParInfraestructura_20").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de baños NNA de mujeres, pues el valor ingresado (" + valor22 + "), más las cantidades de baños NNA de hombres y mixtos sobrepasa la cantidad de baños NNA en funcionamiento.</p>");
            }

            break;
        case 21://CAMPO NUEVO: Baños NNA mixtos  -- antes OPCION 23
            valor19 = 0; valor21 = 0; valor22 = 0; valor23 = 0;
            if (EliminaEspacios($("#IdValor_21").val()) == 0 || EliminaEspacios($("#IdValor_21").val()) == "") {
                $("#IdParInfraestructura_21").val(0);
            }
            else {
                $("#IdParInfraestructura_21").val(1);
            }
            if (EliminaEspacios($("#IdValor_17").val()) != "") valor19 = parseInt(EliminaEspacios($("#IdValor_17").val()), 10);
            if (EliminaEspacios($("#IdValor_19").val()) != "") valor21 = parseInt($("#IdValor_19").val(), 10);
            if (EliminaEspacios($("#IdValor_20").val()) != "") valor22 = parseInt($("#IdValor_20").val(), 10);
            if (EliminaEspacios($("#IdValor_21").val()) != "") valor23 = parseInt($("#IdValor_21").val(), 10);
            if (valor19 > 0 && ((valor21 + valor22 + valor23) > valor19)) {
                $("#IdValor_21").val("");
                $("#IdParInfraestructura_21").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de baños NNA mixtos, pues el valor ingresado (" + valor23 + "), más las cantidades de baños NNA de hombres y mujeres sobrepasan la cantidad de baños NNA en funcionamiento.</p>");
            }

            break;
        case 22://CAMPO NUEVO: Duchas para NNA en Funcionamiento  -- ANTES OPCION 24
            if (EliminaEspacios($("#IdValor_22").val()) == 0 || EliminaEspacios($("#IdValor_22").val()) == "") {
                document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 0;
                document.getElementById("IdParInfraestructura_22").selectedIndex = 0;
                document.getElementById("Infraest_038_duchasNNA_cantidad").selectedIndex = 0;

                $("#IdParInfraestructura_23").val(0);
                $("#IdValor_23").val(0);
                document.getElementById("IdValor_23").disabled = true;
            }
            else {
                document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 1;
                document.getElementById("IdParInfraestructura_22").selectedIndex = 1;
                document.getElementById("IdValor_23").disabled = false;

                valor24 = 0;
                if (EliminaEspacios($("#IdValor_22").val()) != "") {
                    valor24 = parseInt(EliminaEspacios($("#IdValor_22").val()), 10);
                }
                if (valor24 > 5) {
                    $("#Infraest_038_duchasNNA_cantidad").val(6);
                }
                else {
                    $("#Infraest_038_duchasNNA_cantidad").val(valor24);
                }
  
            }
            break;

        case 23://CAMPO NUEVO: Duchas para  NNA de acuerdo a Normativa  -- ANTES CASE 25
            if (EliminaEspacios($("#IdValor_23").val()) == 0 || EliminaEspacios($("#IdValor_23").val()) == "") {
                $("#IdParInfraestructura_23").val(0);
            }
            else {
                $("#IdParInfraestructura_23").val(1);
                valor24 = parseInt(EliminaEspacios($("#IdValor_22").val()), 10);
                valor25 = parseInt($("#IdValor_23").val(), 10);
                if (valor25 > valor24) {
                    $("#IdValor_23").val(valor24);
                    MensajeINFO("<p style='font-size:12px;'>Está ingresando más duchas para NNA de acuerdo a normativa que duchas para NNA en funcionamiento. El sistema igualará ambos campos al valor de duchas para NNA en funcionamiento.</p>");
                }
            }
            break;
        case 24://CAMPO NUEVO: Duchas para NNA de hombres -- ANTES  CASE 26
            valor24 = 0; valor26 = 0; valor27 = 0; valor28 = 0;
            if (EliminaEspacios($("#IdValor_24").val()) == 0 || EliminaEspacios($("#IdValor_24").val()) == "") {
                $("#IdParInfraestructura_24").val(0);
            }
            else {
                $("#IdParInfraestructura_24").val(1);
            }
            if (EliminaEspacios($("#IdValor_22").val()) != "") valor24 = parseInt(EliminaEspacios($("#IdValor_22").val()), 10);
            if (EliminaEspacios($("#IdValor_24").val()) != "") valor26 = parseInt($("#IdValor_24").val(), 10);
            if (EliminaEspacios($("#IdValor_25").val()) != "") valor27 = parseInt($("#IdValor_25").val(), 10);
            if (EliminaEspacios($("#IdValor_26").val()) != "") valor28 = parseInt($("#IdValor_26").val(), 10);
            if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
                $("#IdValor_24").val("");
                $("#IdParInfraestructura_24").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA de hombres, pues el valor ingresado (" + valor26 + "), más las cantidades de duchas para NNA de mujeres y mixtas sobrepasa la cantidad de duchas para NNA en funcionamiento.</p>");
            }
            break;
        case 25://CAMPO NUEVO: Duchas para NNA de mujeres  -- ANTES CASE 27
            valor24 = 0; valor26 = 0; valor27 = 0; valor28 = 0;
            if (EliminaEspacios($("#IdValor_25").val()) == 0 || EliminaEspacios($("#IdValor_25").val()) == "") {
                $("#IdParInfraestructura_25").val(0);
            }
            else {
                $("#IdParInfraestructura_25").val(1);
            }
            if (EliminaEspacios($("#IdValor_22").val()) != "") valor24 = parseInt(EliminaEspacios($("#IdValor_22").val()), 10);
            if (EliminaEspacios($("#IdValor_24").val()) != "") valor26 = parseInt($("#IdValor_24").val(), 10);
            if (EliminaEspacios($("#IdValor_25").val()) != "") valor27 = parseInt($("#IdValor_25").val(), 10);
            if (EliminaEspacios($("#IdValor_26").val()) != "") valor28 = parseInt($("#IdValor_26").val(), 10);
            if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
                $("#IdValor_25").val("");
                $("#IdParInfraestructura_25").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA de mujeres, pues el valor ingresado (" + valor27 + "), más las cantidades de duchas para NNA de hombres y mixtas sobrepasa la cantidad de duchas para NNA en funcionamiento.</p>");
            }
            break;
        case 26://CAMPO NUEVO: Duchas para NNA mixtas -- ANTES CASE : 28
            valor24 = 0; valor26 = 0; valor27 = 0; valor28 = 0;
            if (EliminaEspacios($("#IdValor_26").val()) == 0 || EliminaEspacios($("#IdValor_26").val()) == "") {
                $("#IdParInfraestructura_26").val(0);
            }
            else {
                $("#IdParInfraestructura_26").val(1);
            }
            if (EliminaEspacios($("#IdValor_22").val()) != "") valor24 = parseInt(EliminaEspacios($("#IdValor_22").val()), 10);
            if (EliminaEspacios($("#IdValor_24").val()) != "") valor26 = parseInt($("#IdValor_24").val(), 10);
            if (EliminaEspacios($("#IdValor_25").val()) != "") valor27 = parseInt($("#IdValor_25").val(), 10);
            if (EliminaEspacios($("#IdValor_26").val()) != "") valor28 = parseInt($("#IdValor_26").val(), 10);
            if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
                $("#IdValor_26").val("");
                $("#IdParInfraestructura_26").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA mixtas, pues el valor ingresado (" + valor28 + "), más las cantidades de duchas para NNA de hombres y de mujeres sobrepasa la cantidad de duchas para NNA en funcionamiento.</p>");
            }
            break;
    }
}

function EvaluaCumpleNormaCalefonLlaveGas() {
    if ($("#IdParInfraestructura_32").val() == "1" && $("#IdParInfraestructura_33").val() == "1")
        $("#Infraest_043_estadoCalefonLlavesGas_existe").val("1");
    else
        $("#Infraest_043_estadoCalefonLlavesGas_existe").val("0");
    
}

function ValidaSumaDependientesbanosNNAFunc() {
    var valor19 = 0, valor20 = 0, valor21 = 0, valor22 = 0, valor23 = 0;
    /*
        IdValor_17 -> Baños NNA en Funcionamiento
        IdValor_18 -> Baños NNA de acuerdo a Normativa
        IdValor_19 -> Baños NNA de hombres
        IdValor_20 -> Baños NNA de mujeres
        IdValor_21 -> Baños NNA mixtos
     */
    if (EliminaEspacios($("#IdValor_17").val()) != "") {
        valor19 = parseInt(EliminaEspacios($("#IdValor_17").val()), 10);
    }

    if (EliminaEspacios($("#IdValor_19").val()) != "") valor21 = parseInt($("#IdValor_19").val(), 10);
    if (EliminaEspacios($("#IdValor_20").val()) != "") valor22 = parseInt($("#IdValor_20").val(), 10);
    if (EliminaEspacios($("#IdValor_21").val()) != "") valor23 = parseInt($("#IdValor_21").val(), 10);

    if (valor19 > 0 && ((valor21 + valor22 + valor23) > valor19)) {
        $("#IdValor_17").val("");

        document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 0;
        document.getElementById("IdParInfraestructura_17").selectedIndex = 0;
        document.getElementById("Infraest_036_banosNNAadecuados_cantidad").selectedIndex = 0;
        $("#IdParInfraestructura_18").val(0);
        $("#IdValor_18").val(0);
        document.getElementById("IdValor_18").disabled = true;
        MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de baños NNA en funcionamiento, pues el valor ingresado (" + valor19 + "), es menor que la suma de las cantidades de baños NNA de hombres, mujeres y mixtos.</p>");
    }
    else {
        if ((EliminaEspacios($("#IdValor_19").val()) != "") ||
            (EliminaEspacios($("#IdValor_19").val()) != "") ||
            (EliminaEspacios($("#IdValor_19").val()) != ""))
        {
            if (valor19 > 0 && ((valor21 + valor22 + valor23) < valor19)) {
                MensajeINFO("<p style='font-size:12px;'>La cantidad de baños NNA en funcionamiento es mayor que la suma de las cantidades de baños NNA de hombres, mujeres y mixtos. Tendrá que revisar las cantidades de estas últimas, porque la suma debe coincidir con la de baños en funcionamiento.</p>");
            }
        }
    }
}

function ValidaSumaDependecniasDuchaNNAFunc() {
    var valor24 = 0, valor26 = 0, valor27 = 0, valor28 = 0;
    /*  
        IdValor_22 -> Duchas para NNA en Funcionamiento
        IdValor_23 -> Duchas para NNA de acuerdo a Normativa
        IdValor_24 -> Duchas para NNA de hombres
        IdValor_25 -> Duchas para NNA de mujeres
        IdValor_26 -> Duchas para NNA mixtas
     */
    if (EliminaEspacios($("#IdValor_22").val()) != "") {
        valor24 = parseInt(EliminaEspacios($("#IdValor_22").val()), 10);
    }

    if (EliminaEspacios($("#IdValor_24").val()) != "") valor26 = parseInt($("#IdValor_24").val(), 10);
    if (EliminaEspacios($("#IdValor_25").val()) != "") valor27 = parseInt($("#IdValor_25").val(), 10);
    if (EliminaEspacios($("#IdValor_26").val()) != "") valor28 = parseInt($("#IdValor_26").val(), 10);
    if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
        $("#IdValor_22").val("");

        document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 2;
        document.getElementById("IdParInfraestructura_22").selectedIndex = 2;
        document.getElementById("Infraest_038_duchasNNA_cantidad").selectedIndex = 0;
        $("#IdParInfraestructura_23").val(0);
        $("#IdValor_23").val(0);
        document.getElementById("IdValor_23").disabled = true;
        MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA en funcionamiento, pues el valor ingresado (" + valor24 + "), es menor que la suma de las cantidades de duchas para NNA de hombres, mujeres y mixtas.</p>");
    }
    else {
        if ((EliminaEspacios($("#IdValor_24").val()) != "") ||
            (EliminaEspacios($("#IdValor_25").val()) != "") ||
            (EliminaEspacios($("#IdValor_26").val()) != "")) {
            if (valor24 > 0 && ((valor26 + valor27 + valor28) < valor24)) {
                MensajeINFO("<p style='font-size:12px;'>La cantidad de duchas para NNA en funcionamiento es mayor que la suma de las cantidades de duchas para NNA de hombres, mujeres y mixtas. Tendrá que revisar las cantidades de estas últimas, porque la suma debe coincidir con la de duchas para NNA en funcionamiento.</p>");
            }
        }
    }
}

