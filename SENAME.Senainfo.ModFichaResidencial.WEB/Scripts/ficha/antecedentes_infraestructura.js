////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesInfraestructura() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var cantidadOficAdm= $("#Infraest_002_ofi_admin_cantidad").val();
    var cantidadSalaReunion= $("#Infraest_004_salaReuniones_cantidad").val();
    var cantidadSalaRecepcion= $("#Infraest_006_salaRecepcion_cantidad").val();
    var cantidadEspaciosVisitas = $("#Infraest_008_espacioVisitas_cantidad").val();
    var cantidadSalaTalleres= $("#Infraest_010_salaMultiuso_cantidad").val();
    var cantidadSalaLiving= $("#Infraest_012_salaEstar_cantidad").val();
    var cantidadEnfermeria= $("#Infraest_014_enfermeria_cantidad").val();
    var cantidadRecreacion= $("#Infraest_016_espacioRecreacional_cantidad").val();
    var cantidadAreasVerdes= $("#Infraest_020_areasVerdes_cantidad").val();
    var cantidadCocina= $("#Infraest_022_cocina_cantidad").val();
    var cantidadComedor = $("#Infraest_024_comedor_cantidad").val();
    var cantidadLavanderia= $("#Infraest_026_Lavanderia_cantidad").val();
    var cantidadDormitoriosNNA= $("#Infraest_028_Dormitorio_cantidad").val();
    var cantidadCamasNNA= $("#Infraest_030_CamasNNA_cantidad").val();
    var cantidadColsetLockers= $("#Infraest_032_closetLocker_cantidad").val();
    var cantidadBañosPublicos= $("#Infraest_034_banosPublico_cantidad").val();
    var cantidadBañosNNA = $("#Infraest_036_banosNNAadecuados_cantidad").val();
    var cantidadDuchasNNA = $("#Infraest_038_duchasNNA_cantidad").val();

    var AmbienteAcorde = $("#Infraest_039_ambientacionAcorde_existe").val();
    var vestuarioAdecuado= $("#Infraest_040_vestuarioAdecuado_existe").val();
    var utilesAseo= $("#Infraest_041_utilesAseoPersonalNNA_existe").val();
    var aguaCaliente= $("#Infraest_042_aguaCaliente_existe").val();
    var calefonGas= $("#Infraest_043_estadoCalefonLlavesGas_existe").val();
    var sistemaCalefacion= $("#Infraest_044_sistemaCalefaccion_existe").val();
    var ventilacion= $("#Infraest_045_ventilacionAdecuada_existe").val();
    var accesoDiscapacitados= $("#Infraest_046_AccesoDiscapacitados_existe").val();
    var habilitaDiscapacitados= $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe").val();
    var observaciones = replaceAll(EliminaEspacios(document.getElementById("Infraest_049_observaciones").value), "'", "");

    var BanosNNAenFuncionamiento = $("#Infraest_035_banosNNA_Funcionamiento_cant").val();
    var BanosNNAdeacuerdoNormativa = $("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val();
    var BanosNNAdehombres = $("#Infraest_035_banosNNA_Hombre_cant").val();
    var BanosNNAdemujeres = $("#Infraest_035_banosNNA_Mujer_cant").val();
    var BanosNNAmixtos = $("#Infraest_035_banosNNA_mixto_cant").val();
    var DuchasNNAFuncionamiento = $("#Infraest_037_duchasNNA_funcionamiento_cant").val();
    var DuchasNNAdeacuerdoNormativa = $("#Infraest_037_duchasNNA_normativa_cant").val();
    var DuchasNNAdehombres = $("#Infraest_037_duchasNNA_hombres_cant").val();
    var DuchasNNAdemujeres = $("#Infraest_037_duchasNNA_mujeres_cant").val();
    var DuchasNNAmixtas = $("#Infraest_037_duchasNNA_mixtos_cant").val();
    var VestuarioPersonalizadoNNA = $("#Infraest_040_vestuarioPersonalizado_existe").val();
    var CumpleNormativaCalefon = $("#Infraest_043_CumpleNormaCalefon").val();
    var CumpleNormativaLlaveGas = $("#Infraest_043_CumpleNormaLlaveGas").val();


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
/* VALORES  EN LOS COMBOS ANTES DE MOSTRARLOS DINÁMICAMENTE
 
 ANTES : val("1") = "SI"
	val("0") = "NO"
	val("-1") = ""

AHORA : val("1") = "SI"
	val("2") = "NO"
	val("-1") = NO EXISTE ESTE VALOR
 */
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
                $("#Infraest_002_ofi_admin_cantidad").val(this.CantidadOficAdm);
                $("#Infraest_004_salaReuniones_cantidad").val(this.CantidadSalaReunion);
                $("#Infraest_006_salaRecepcion_cantidad").val(this.CantidadSalaRecepcion);
                $("#Infraest_008_espacioVisitas_cantidad").val(this.CantidadEspaciosVisitas);
                $("#Infraest_010_salaMultiuso_cantidad").val(this.CantidadSalaTalleres);
                $("#Infraest_012_salaEstar_cantidad").val(this.CantidadSalaLiving);
                $("#Infraest_014_enfermeria_cantidad").val(this.CantidadEnfermeria);
                $("#Infraest_016_espacioRecreacional_cantidad").val(this.CantidadRecreacion);
                $("#Infraest_020_areasVerdes_cantidad").val(this.CantidadAreasVerdes);
                $("#Infraest_022_cocina_cantidad").val(this.CantidadCocina);
                $("#Infraest_024_comedor_cantidad").val(this.CantidadComedor);
                $("#Infraest_026_Lavanderia_cantidad").val(this.CantidadLavanderia);
                $("#Infraest_028_Dormitorio_cantidad").val(this.CantidadDormitoriosNNA);
                $("#Infraest_030_CamasNNA_cantidad").val(this.CantidadCamasNNA);
                $("#Infraest_032_closetLocker_cantidad").val(this.CantidadColsetLockers);
                $("#Infraest_034_banosPublico_cantidad").val(this.CantidadBañosPublicos);

                /*Inicio - Valido si viene valor  en los combos individuales*/               
                if (this.AmbienteAcorde == 0) $("#Infraest_039_ambientacionAcorde_existe").val(2); // val(2) = NO val(1) = SI  s
                   else $("#Infraest_039_ambientacionAcorde_existe").val(1);
                
                if (this.VestuarioAdecuado == 0) $("#Infraest_040_vestuarioAdecuado_existe").val(2);  
                else $("#Infraest_040_vestuarioAdecuado_existe").val(1);

                if (this.UtilesAseo == 0) $("#Infraest_041_utilesAseoPersonalNNA_existe").val("2"); 
                else $("#Infraest_041_utilesAseoPersonalNNA_existe").val("1");

                if (this.AguaCaliente == 0) $("#Infraest_042_aguaCaliente_existe").val("2"); 
                else $("#Infraest_042_aguaCaliente_existe").val("1");

                if (this.CalefonGas == 0) $("#Infraest_043_estadoCalefonLlavesGas_existe").val("2");
                else $("#Infraest_043_estadoCalefonLlavesGas_existe").val("1");

                if (this.SistemaCalefacion == 0) $("#Infraest_044_sistemaCalefaccion_existe").val("2"); 
                else $("#Infraest_044_sistemaCalefaccion_existe").val("1");

                if (this.Ventilacion == 0) $("#Infraest_045_ventilacionAdecuada_existe").val("2"); 
                else $("#Infraest_045_ventilacionAdecuada_existe").val("1"); 

                if (this.AccesoDiscapacitados == 0) $("#Infraest_046_AccesoDiscapacitados_existe").val("2");
                else $("#Infraest_046_AccesoDiscapacitados_existe").val("1"); 

                if (this.HabilitaDiscapacitados == 0) $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe").val("2"); 
                else $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe").val("1");

                if (this.CalefonNormativa == 0) $("#Infraest_043_CumpleNormaCalefon").val("2"); 
                else $("#Infraest_043_CumpleNormaCalefon").val("1");
                
                if (this.LlaveGasNormativa == 0) $("#Infraest_043_CumpleNormaLlaveGas").val("2"); 
                else $("#Infraest_043_CumpleNormaLlaveGas").val("1"); 

                if (this.VestuarioPersonalizadoNNA == 0) $("#Infraest_040_vestuarioPersonalizado_existe").val("2"); 
                else $("#Infraest_040_vestuarioPersonalizado_existe").val("1");  
                /* Fin */

                $("#Infraest_036_banosNNAadecuados_cantidad").val(this.CantidadBañosNNA);
                $("#Infraest_038_duchasNNA_cantidad").val(this.CantidadDuchasNNA);

                $("#Infraest_035_banosNNA_Funcionamiento_cant").val(this.CantidadBañosNNAFuncionamiento);
                $("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val(this.CantidadBañosNNANormativa);
                $("#Infraest_035_banosNNA_Hombre_cant").val(this.CantidadBañosNNAHombres);
                $("#Infraest_035_banosNNA_Mujer_cant").val(this.CantidadBañosNNAMujeres);
                $("#Infraest_035_banosNNA_mixto_cant").val(this.CantidadBañosNNAMixtos);
               
                $("#Infraest_037_duchasNNA_funcionamiento_cant").val(this.CantidadDuchasNNAFuncionamiento);
                $("#Infraest_037_duchasNNA_normativa_cant").val(this.CantidadDuchasNNANormativa);
                $("#Infraest_037_duchasNNA_hombres_cant").val(this.CantidadDuchasNNAHombres);
                $("#Infraest_037_duchasNNA_mujeres_cant").val(this.CantidadDuchasNNAMujeres);
                $("#Infraest_037_duchasNNA_mixtos_cant").val(this.CantidadDuchasNNAMixtas);

                if ($("#Infraest_035_banosNNA_Funcionamiento_cant").val() != "0")// probablemente hay que cambiar a 2
                {
                    $("#Infraest_035_banosNNA_Funcionamiento_existe").val("1");
                    document.getElementById("Infraest_035_banosNNA_AcuerdoNormativa_cant").disabled = false;
                }

                if ($("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val() != "0") $("#Infraest_035_banosNNA_AcuerdoNormativa_existe").val(1);
                if ($("#Infraest_035_banosNNA_Hombre_cant").val() != "0") $("#Infraest_035_banosNNA_Hombre_existe").val(1);
                if ($("#Infraest_035_banosNNA_Mujer_cant").val() != "0") $("#Infraest_035_banosNNA_Mujer_existe").val(1);
                if ($("#Infraest_035_banosNNA_mixto_cant").val() != "0") $("#Infraest_035_banosNNA_mixto_existe").val(1);

                if ($("#Infraest_037_duchasNNA_funcionamiento_cant").val() != "0")
                {
                    $("#Infraest_037_duchasNNA_funcionamiento_existe").val(1);
                    document.getElementById("Infraest_037_duchasNNA_normativa_cant").disabled = false;
                }
                if ($("#Infraest_037_duchasNNA_normativa_cant").val() != "0") $("#Infraest_037_duchasNNA_normativa_existe").val(1);
                if ($("#Infraest_037_duchasNNA_hombres_cant").val() != "0") $("#Infraest_037_duchasNNA_hombres_existe").val(1);
                if ($("#Infraest_037_duchasNNA_mujeres_cant").val() != "0") $("#Infraest_037_duchasNNA_mujeres_existe").val(1);
                if ($("#Infraest_037_duchasNNA_mixtos_cant").val() != "0") $("#Infraest_037_duchasNNA_mixtos_existe").val(1);
                
                document.getElementById("Infraest_049_observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("Infraest_049_observaciones"), "labelCaracteres_ObsInfra");

                if ($("#Infraest_002_ofi_admin_cantidad").val() != "0") $("#Infraest_001_ofi_admin_existe").val(1);

                if ($("#Infraest_004_salaReuniones_cantidad").val() != "0") $("#Infraest_003_salaReuniones_existe").val(1);
                

                if ($("#Infraest_006_salaRecepcion_cantidad").val() != "0")
                    $("#Infraest_005_salaRecepcion_existe").val(1);

                if ($("#Infraest_008_espacioVisitas_cantidad").val() != "0")
                    $("#Infraest_007_espacioVisitas_existe").val(1);

                if ($("#Infraest_010_salaMultiuso_cantidad").val() != "0")
                    $("#Infraest_009_salaMultiuso_existe").val(1);

                if ($("#Infraest_012_salaEstar_cantidad").val() != "0")
                    $("#Infraest_011_salaEstar_existe").val(1);

                if ($("#Infraest_014_enfermeria_cantidad").val() != "0")
                    $("#Infraest_013_enfermeria_existe").val(1);

                if ($("#Infraest_016_espacioRecreacional_cantidad").val() != "0")
                    $("#Infraest_015_espacioRecreacional_existe").val(1);

                if ($("#Infraest_020_areasVerdes_cantidad").val() != "0")
                    $("#Infraest_019_areasVerdes_existe").val(1);

                if ($("#Infraest_022_cocina_cantidad").val() != "0")
                    $("#Infraest_021_cocina_existe").val(1);

                if ($("#Infraest_024_comedor_cantidad").val() != "0")
                    $("#Infraest_023_comedor_existe").val(1);

                if ($("#Infraest_026_Lavanderia_cantidad").val() != "0")
                    $("#Infraest_025_Lavanderia_existe").val(1);

                if ($("#Infraest_028_Dormitorio_cantidad").val() != "0")
                    $("#Infraest_027_Dormitorio_existe").val(1);

                if ($("#Infraest_030_CamasNNA_cantidad").val() != "0")
                    $("#Infraest_029_CamasNNA_existe").val(1);

                if ($("#Infraest_032_closetLocker_cantidad").val() != "0")
                    $("#Infraest_031_closetLocker_existe").val(1);

                if ($("#Infraest_034_banosPublico_cantidad").val() != "0")
                    $("#Infraest_033_banosPublico_existe").val(1);

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
                    //  CargaParValores1($("#Infraest_039_ambientacionAcorde_existe").val());
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
                    $("#Infraest_001_ofi_admin_existe_pjud").val(1);

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
                $("#Infraest_002_ofi_admin_cantidad" + sufijo).val(this.CantidadOficAdm);
                $("#Infraest_004_salaReuniones_cantidad" + sufijo).val(this.CantidadSalaReunion);
                $("#Infraest_006_salaRecepcion_cantidad" + sufijo).val(this.CantidadSalaRecepcion);
                $("#Infraest_008_espacioVisitas_cantidad" + sufijo).val(this.CantidadEspaciosVisitas);
                $("#Infraest_010_salaMultiuso_cantidad" + sufijo).val(this.CantidadSalaTalleres);
                $("#Infraest_012_salaEstar_cantidad" + sufijo).val(this.CantidadSalaLiving);
                $("#Infraest_014_enfermeria_cantidad" + sufijo).val(this.CantidadEnfermeria);
                $("#Infraest_016_espacioRecreacional_cantidad" + sufijo).val(this.CantidadRecreacion);
                $("#Infraest_020_areasVerdes_cantidad" + sufijo).val(this.CantidadAreasVerdes);
                $("#Infraest_022_cocina_cantidad" + sufijo).val(this.CantidadCocina);
                $("#Infraest_024_comedor_cantidad" + sufijo).val(this.CantidadComedor);
                $("#Infraest_026_Lavanderia_cantidad" + sufijo).val(this.CantidadLavanderia);
                $("#Infraest_028_Dormitorio_cantidad" + sufijo).val(this.CantidadDormitoriosNNA);
                $("#Infraest_030_CamasNNA_cantidad" + sufijo).val(this.CantidadCamasNNA);
                $("#Infraest_032_closetLocker_cantidad" + sufijo).val(this.CantidadColsetLockers);
                $("#Infraest_034_banosPublico_cantidad" + sufijo).val(this.CantidadBañosPublicos);


                $("#Infraest_039_ambientacionAcorde_existe" + sufijo).val(this.AmbienteAcorde);
                $("#Infraest_040_vestuarioAdecuado_existe" + sufijo).val(this.VestuarioAdecuado);
                $("#Infraest_041_utilesAseoPersonalNNA_existe" + sufijo).val(this.UtilesAseo);
                $("#Infraest_042_aguaCaliente_existe" + sufijo).val(this.AguaCaliente);
                $("#Infraest_043_estadoCalefonLlavesGas_existe" + sufijo).val(this.CalefonGas);
                $("#Infraest_044_sistemaCalefaccion_existe" + sufijo).val(this.SistemaCalefacion);
                $("#Infraest_045_ventilacionAdecuada_existe" + sufijo).val(this.Ventilacion);
                $("#Infraest_046_AccesoDiscapacitados_existe" + sufijo).val(this.AccesoDiscapacitados);
                $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe" + sufijo).val(this.HabilitaDiscapacitados);

                $("#Infraest_036_banosNNAadecuados_cantidad" + sufijo).val(this.CantidadBañosNNA);
                $("#Infraest_038_duchasNNA_cantidad" + sufijo).val(this.CantidadDuchasNNA);


                $("#Infraest_035_banosNNA_Funcionamiento_cant" + sufijo).val(this.CantidadBañosNNAFuncionamiento);
                $("#Infraest_035_banosNNA_AcuerdoNormativa_cant" + sufijo).val(this.CantidadBañosNNANormativa);
                $("#Infraest_035_banosNNA_Hombre_cant" + sufijo).val(this.CantidadBañosNNAHombres);
                $("#Infraest_035_banosNNA_Mujer_cant" + sufijo).val(this.CantidadBañosNNAMujeres);
                $("#Infraest_035_banosNNA_mixto_cant" + sufijo).val(this.CantidadBañosNNAMixtos);

                $("#Infraest_037_duchasNNA_funcionamiento_cant" + sufijo).val(this.CantidadDuchasNNAFuncionamiento);
                $("#Infraest_037_duchasNNA_normativa_cant" + sufijo).val(this.CantidadDuchasNNANormativa);
                $("#Infraest_037_duchasNNA_hombres_cant" + sufijo).val(this.CantidadDuchasNNAHombres);
                $("#Infraest_037_duchasNNA_mujeres_cant" + sufijo).val(this.CantidadDuchasNNAMujeres);
                $("#Infraest_037_duchasNNA_mixtos_cant" + sufijo).val(this.CantidadDuchasNNAMixtas);

                if ($("#Infraest_035_banosNNA_Funcionamiento_cant" + sufijo).val() != "0")
                    $("#Infraest_035_banosNNA_Funcionamiento_existe" + sufijo).val(1);
                else
                    $("#Infraest_035_banosNNA_Funcionamiento_existe" + sufijo).val(0);

                if ($("#Infraest_035_banosNNA_AcuerdoNormativa_cant" + sufijo).val() != "0")
                    $("#Infraest_035_banosNNA_AcuerdoNormativa_existe" + sufijo).val(1);
                else
                    $("#Infraest_035_banosNNA_AcuerdoNormativa_existe" + sufijo).val(0);

                if ($("#Infraest_035_banosNNA_Hombre_cant" + sufijo).val() != "0")
                    $("#Infraest_035_banosNNA_Hombre_existe" + sufijo).val(1);
                else
                    $("#Infraest_035_banosNNA_Hombre_existe" + sufijo).val(0);

                if ($("#Infraest_035_banosNNA_Mujer_cant" + sufijo).val() != "0")
                    $("#Infraest_035_banosNNA_Mujer_existe" + sufijo).val(1);
                else
                    $("#Infraest_035_banosNNA_Mujer_existe" + sufijo).val(0);

                if ($("#Infraest_035_banosNNA_mixto_cant" + sufijo).val() != "0")
                    $("#Infraest_035_banosNNA_mixto_existe" + sufijo).val(1);
                else
                    $("#Infraest_035_banosNNA_mixto_existe" + sufijo).val(0);

                if ($("#Infraest_037_duchasNNA_funcionamiento_cant" + sufijo).val() != "0") 
                    $("#Infraest_037_duchasNNA_funcionamiento_existe" + sufijo).val(1);
                else
                    $("#Infraest_037_duchasNNA_funcionamiento_existe" + sufijo).val(0);

                if ($("#Infraest_037_duchasNNA_normativa_cant" + sufijo).val() != "0")
                    $("#Infraest_037_duchasNNA_normativa_existe" + sufijo).val(1);
                else
                    $("#Infraest_037_duchasNNA_normativa_existe" + sufijo).val(0);

                if ($("#Infraest_037_duchasNNA_hombres_cant" + sufijo).val() != "0")
                    $("#Infraest_037_duchasNNA_hombres_existe" + sufijo).val(1);
                else
                    $("#Infraest_037_duchasNNA_hombres_existe" + sufijo).val(0);

                if ($("#Infraest_037_duchasNNA_mujeres_cant" + sufijo).val() != "0")
                    $("#Infraest_037_duchasNNA_mujeres_existe" + sufijo).val(1);
                else
                    $("#Infraest_037_duchasNNA_mujeres_existe" + sufijo).val(0);

                if ($("#Infraest_037_duchasNNA_mixtos_cant" + sufijo).val() != "0")
                    $("#Infraest_037_duchasNNA_mixtos_existe" + sufijo).val(1);
                else
                    $("#Infraest_037_duchasNNA_mixtos_existe" + sufijo).val(0);

                if( this.CalefonNormativa != "0" && this.CalefonNormativa !="-1")
                    $("#Infraest_043_CumpleNormaCalefon"+ sufijo).val(1);
                else
                    $("#Infraest_043_CumpleNormaCalefon"+ sufijo).val(0);

                if (this.LlaveGasNormativa != "0" && this.LlaveGasNormativa != "-1") // revisar cambiar 0 por 2
                    $("#Infraest_043_CumpleNormaLlaveGas" + sufijo).val(1);
                else
                    $("#Infraest_043_CumpleNormaLlaveGas" + sufijo).val(0);

                if (this.VestuarioPersonalizadoNNA != "0" && this.VestuarioPersonalizadoNNA != "-1")
                    $("#Infraest_040_vestuarioPersonalizado_existe" + sufijo).val(1);
                else
                    $("#Infraest_040_vestuarioPersonalizado_existe" + sufijo).val(0);

                document.getElementById("Infraest_049_observaciones" + sufijo).value = this.Observaciones;

                if ($("#Infraest_002_ofi_admin_cantidad" + sufijo).val() != "0")
                    $("#Infraest_001_ofi_admin_existe" + sufijo).val(1);
                else
                    $("#Infraest_001_ofi_admin_existe" + sufijo).val(0);

                if ($("#Infraest_004_salaReuniones_cantidad" + sufijo).val() != "0")
                    $("#Infraest_003_salaReuniones_existe" + sufijo).val(1);  // gcastro modificado de 0 a 2
                else
                    $("#Infraest_003_salaReuniones_existe" + sufijo).val(0);

                if ($("#Infraest_006_salaRecepcion_cantidad" + sufijo).val() != "0")
                    $("#Infraest_005_salaRecepcion_existe" + sufijo).val(1);
                else
                    $("#Infraest_005_salaRecepcion_existe" + sufijo).val(0);

                if ($("#Infraest_008_espacioVisitas_cantidad" + sufijo).val() != "0")
                    $("#Infraest_007_espacioVisitas_existe" + sufijo).val(1);
                else
                    $("#Infraest_007_espacioVisitas_existe" + sufijo).val(0);

                if ($("#Infraest_010_salaMultiuso_cantidad" + sufijo).val() != "0")
                    $("#Infraest_009_salaMultiuso_existe" + sufijo).val(1);
                else
                    $("#Infraest_009_salaMultiuso_existe" + sufijo).val(0);

                if ($("#Infraest_012_salaEstar_cantidad" + sufijo).val() != "0")
                    $("#Infraest_011_salaEstar_existe" + sufijo).val(1);
                else
                    $("#Infraest_011_salaEstar_existe" + sufijo).val(0);

                if ($("#Infraest_014_enfermeria_cantidad" + sufijo).val() != "0")
                    $("#Infraest_013_enfermeria_existe" + sufijo).val(1);
                else
                    $("#Infraest_013_enfermeria_existe" + sufijo).val(0);

                if ($("#Infraest_016_espacioRecreacional_cantidad" + sufijo).val() != "0")
                    $("#Infraest_015_espacioRecreacional_existe" + sufijo).val(1);
                else
                    $("#Infraest_015_espacioRecreacional_existe" + sufijo).val(0);

                if ($("#Infraest_020_areasVerdes_cantidad" + sufijo).val() != "0")
                    $("#Infraest_019_areasVerdes_existe" + sufijo).val(1);
                else
                    $("#Infraest_019_areasVerdes_existe" + sufijo).val(0);

                if ($("#Infraest_022_cocina_cantidad" + sufijo).val() != "0")
                    $("#Infraest_021_cocina_existe" + sufijo).val(1);
                else
                    $("#Infraest_021_cocina_existe" + sufijo).val(0);

                if ($("#Infraest_024_comedor_cantidad" + sufijo).val() != "0")
                    $("#Infraest_023_comedor_existe" + sufijo).val(1);
                else
                    $("#Infraest_023_comedor_existe" + sufijo).val(0);

                if ($("#Infraest_026_Lavanderia_cantidad" + sufijo).val() != "0")
                    $("#Infraest_025_Lavanderia_existe" + sufijo).val(1);
                else
                    $("#Infraest_025_Lavanderia_existe" + sufijo).val(0);

                if ($("#Infraest_028_Dormitorio_cantidad" + sufijo).val() != "0")
                    $("#Infraest_027_Dormitorio_existe" + sufijo).val(1);
                else
                    $("#Infraest_027_Dormitorio_existe" + sufijo).val(0);

                if ($("#Infraest_030_CamasNNA_cantidad" + sufijo).val() != "0")
                    $("#Infraest_029_CamasNNA_existe" + sufijo).val(1);
                else
                    $("#Infraest_029_CamasNNA_existe" + sufijo).val(0);

                if ($("#Infraest_032_closetLocker_cantidad" + sufijo).val() != "0")
                    $("#Infraest_031_closetLocker_existe" + sufijo).val(1);
                else
                    $("#Infraest_031_closetLocker_existe" + sufijo).val(0);

                if ($("#Infraest_034_banosPublico_cantidad" + sufijo).val() != "0")
                    $("#Infraest_033_banosPublico_existe" + sufijo).val(1);
                else
                    $("#Infraest_033_banosPublico_existe" + sufijo).val(0);

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
    switch (opc) {
        case 1:
            var ofi_admin_cantidad_ = $("#Infraest_002_ofi_admin_cantidad").val();
            if (ofi_admin_cantidad_ != "0" && ofi_admin_cantidad_ != "") {
                document.getElementById("Infraest_001_ofi_admin_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_001_ofi_admin_existe").selectedIndex = 2;
            }
            break;
        case 2:
            var salaReuniones_cantidad_ = $("#Infraest_004_salaReuniones_cantidad").val();
            if (salaReuniones_cantidad_ != "0" && salaReuniones_cantidad_ != "") {
                document.getElementById("Infraest_003_salaReuniones_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_003_salaReuniones_existe").selectedIndex = 2;
            }
            break;
        case 3:
            var salaRecepcion_cantidad_ = $("#Infraest_006_salaRecepcion_cantidad").val();
            if (salaRecepcion_cantidad_ != "0" && salaRecepcion_cantidad_ != "") {
                document.getElementById("Infraest_005_salaRecepcion_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_005_salaRecepcion_existe").selectedIndex = 2;
            }
            break;
        case 4:
            var espacioVisitas_cantidad_ = $("#Infraest_008_espacioVisitas_cantidad").val();
            if (espacioVisitas_cantidad_ != "0" && espacioVisitas_cantidad_ != "") {
                document.getElementById("Infraest_007_espacioVisitas_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_007_espacioVisitas_existe").selectedIndex = 2;
            }
            break;
        case 5:
            var salaMultiuso_cantidad_ = $("#Infraest_010_salaMultiuso_cantidad").val();
            if (salaMultiuso_cantidad_ != "0" && salaMultiuso_cantidad_ != "") {
                document.getElementById("Infraest_009_salaMultiuso_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_009_salaMultiuso_existe").selectedIndex = 2;
            }
            break;
        case 6:
            var salaEstar_cantidad_ = $("#Infraest_012_salaEstar_cantidad").val();
            if (salaEstar_cantidad_ != "0" && salaEstar_cantidad_ != "") {
                document.getElementById("Infraest_011_salaEstar_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_011_salaEstar_existe").selectedIndex = 2;
            }
            break;
        case 7:
            var enfermeria_cantidad_ = $("#Infraest_014_enfermeria_cantidad").val();
            if (enfermeria_cantidad_ != "0" && enfermeria_cantidad_ != "") {
                document.getElementById("Infraest_013_enfermeria_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_013_enfermeria_existe").selectedIndex = 2;
            }
            break;
        case 8:
            var espacioRecreacional_cantidad_ = $("#Infraest_016_espacioRecreacional_cantidad").val();
            if (espacioRecreacional_cantidad_ != "0" && espacioRecreacional_cantidad_ != "") {
                document.getElementById("Infraest_015_espacioRecreacional_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_015_espacioRecreacional_existe").selectedIndex = 2;
            }
            break;
        case 9:
            var areasVerdes_cantidad_ = $("#Infraest_020_areasVerdes_cantidad").val();
            if (areasVerdes_cantidad_ != "0" && areasVerdes_cantidad_ != "") {
                document.getElementById("Infraest_019_areasVerdes_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_019_areasVerdes_existe").selectedIndex = 2;
            }
            break;
        case 10:
            var cocina_cantidad_ = $("#Infraest_022_cocina_cantidad").val();
            if (cocina_cantidad_ != "0" && cocina_cantidad_ != "") {
                document.getElementById("Infraest_021_cocina_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_021_cocina_existe").selectedIndex = 2;
            }
            break;
        case 11:
            var comedor_cantidad_ = $("#Infraest_024_comedor_cantidad").val();
            if (comedor_cantidad_ != "0" && comedor_cantidad_ != "") {
                document.getElementById("Infraest_023_comedor_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_023_comedor_existe").selectedIndex = 2;
            }
            break;
        case 12:
            var Lavanderia_cantidad_ = $("#Infraest_026_Lavanderia_cantidad").val();
            if (Lavanderia_cantidad_ != "0" && Lavanderia_cantidad_ != "") {
                document.getElementById("Infraest_025_Lavanderia_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_025_Lavanderia_existe").selectedIndex = 2;
            }
            break;
        case 13:
            var Dormitorio_cantidad_ = $("#Infraest_028_Dormitorio_cantidad").val();
            if (Dormitorio_cantidad_ != "0" && Dormitorio_cantidad_ != "") {
                document.getElementById("Infraest_027_Dormitorio_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_027_Dormitorio_existe").selectedIndex = 2;
            }
            break;
        case 14:
            var CamasNNA_cantidad_ = $("#Infraest_030_CamasNNA_cantidad").val();
            if (CamasNNA_cantidad_ != "0" && CamasNNA_cantidad_ != "") {
                document.getElementById("Infraest_029_CamasNNA_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_029_CamasNNA_existe").selectedIndex = 2;
            }
            break;
        case 15:
            var closetLocker_cantidad_ = $("#Infraest_032_closetLocker_cantidad").val();
            if (closetLocker_cantidad_ != "0" && closetLocker_cantidad_ != "") {
                document.getElementById("Infraest_031_closetLocker_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_031_closetLocker_existe").selectedIndex = 2;
            }
            break;
        case 16:
            var banosPublico_cantidad_ = $("#Infraest_034_banosPublico_cantidad").val();
            if (banosPublico_cantidad_ != "0" && banosPublico_cantidad_ != "") {
                document.getElementById("Infraest_033_banosPublico_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_033_banosPublico_existe").selectedIndex = 2;
            }
            break;

        case 17:
            if (document.getElementById("Infraest_036_banosNNAadecuados_cantidad").selectedIndex != 0) {
                document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 2;
            }
            break;
        case 18:
            if (document.getElementById("Infraest_038_duchasNNA_cantidad").selectedIndex != 0) {
                document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 2;
            }
            break;

        case 19://CAMPO NUEVO: Baños NNA en Funcionamiento
            if (EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()) == 0 || EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val())=="") {
                document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 2;
                document.getElementById("Infraest_035_banosNNA_Funcionamiento_existe").selectedIndex = 2;
                document.getElementById("Infraest_036_banosNNAadecuados_cantidad").selectedIndex = 0;

                $("#Infraest_035_banosNNA_AcuerdoNormativa_existe").val(0);
                $("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val(0);
                document.getElementById("Infraest_035_banosNNA_AcuerdoNormativa_cant").disabled = true;
            }
            else {
                document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 1;
                document.getElementById("Infraest_035_banosNNA_Funcionamiento_existe").selectedIndex = 1;
                document.getElementById("Infraest_035_banosNNA_AcuerdoNormativa_cant").disabled = false;

                valor19 = 0;
                if (EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()) != "") {
                    valor19 = parseInt(EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()), 10);
                }
                if (valor19 > 5) {
                    $("#Infraest_036_banosNNAadecuados_cantidad").val(6);
                }
                else {
                    $("#Infraest_036_banosNNAadecuados_cantidad").val(valor19);
                }
           
            }
            break;
        case 20://CAMPO NUEVO: Baños NNA de acuerdo a Normativa
            if (EliminaEspacios($("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val()) == 0 || EliminaEspacios($("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val()) == "") {
                $("#Infraest_035_banosNNA_AcuerdoNormativa_existe").val(0);
            }
            else {
                $("#Infraest_035_banosNNA_AcuerdoNormativa_existe").val(1);
                valor19 = parseInt(EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()), 10);
                valor20 = parseInt($("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val(), 10);
                if (valor20 > valor19) {
                    $("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val(valor19);
                    MensajeINFO("<p style='font-size:12px;'>Está ingresando más baños NNA de acuerdo a normativa que baños NNA en funcionamiento. El sistema igualará ambos campos al valor de baños NNA en funcionamiento</p>");
                }
            }
            break;
        case 21://CAMPO NUEVO: Baños NNA Hombres
            valor19 = 0; valor21 = 0; valor22 = 0; valor23 = 0;
            if (EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) == 0 || EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) == "") {
                $("#Infraest_035_banosNNA_Hombre_existe").val(0);
            }
            else {
                $("#Infraest_035_banosNNA_Hombre_existe").val(1);
            }
            if (EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()) != "") valor19 = parseInt(EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) != "") valor21 = parseInt($("#Infraest_035_banosNNA_Hombre_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_Mujer_cant").val()) != "") valor22 = parseInt($("#Infraest_035_banosNNA_Mujer_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_mixto_cant").val()) != "") valor23 = parseInt($("#Infraest_035_banosNNA_mixto_cant").val(), 10);
            if (valor19 > 0 && ((valor21 + valor22 + valor23) > valor19)) {
                $("#Infraest_035_banosNNA_Hombre_cant").val("");
                $("#Infraest_035_banosNNA_Hombre_existe").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de baños NNA de hombres, pues el valor ingresado (" + valor21 + "), más las cantidades de baños NNA de mujeres y mixtos sobrepasa la cantidad de baños NNA en funcionamiento.</p>");
            }

            break;
        case 22://CAMPO NUEVO: Baños NNA Mujeres
            valor19 = 0; valor21 = 0; valor22 = 0; valor23 = 0;
            if (EliminaEspacios($("#Infraest_035_banosNNA_Mujer_cant").val()) == 0 || EliminaEspacios($("#Infraest_035_banosNNA_Mujer_cant").val()) == "") {
                $("#Infraest_035_banosNNA_Mujer_existe").val(0);
            }
            else {
                $("#Infraest_035_banosNNA_Mujer_existe").val(1);
            }
            if (EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()) != "") valor19 = parseInt(EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) != "") valor21 = parseInt($("#Infraest_035_banosNNA_Hombre_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_Mujer_cant").val()) != "") valor22 = parseInt($("#Infraest_035_banosNNA_Mujer_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_mixto_cant").val()) != "") valor23 = parseInt($("#Infraest_035_banosNNA_mixto_cant").val(), 10);

            if (valor19 > 0 && ((valor21 + valor22 + valor23) > valor19)) {
                $("#Infraest_035_banosNNA_Mujer_cant").val("");
                $("#Infraest_035_banosNNA_Mujer_existe").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de baños NNA de mujeres, pues el valor ingresado (" + valor22 + "), más las cantidades de baños NNA de hombres y mixtos sobrepasa la cantidad de baños NNA en funcionamiento.</p>");
            }

            break;
        case 23://CAMPO NUEVO: Baños NNA mixtos
            valor19 = 0; valor21 = 0; valor22 = 0; valor23 = 0;
            if (EliminaEspacios($("#Infraest_035_banosNNA_mixto_cant").val()) == 0 || EliminaEspacios($("#Infraest_035_banosNNA_mixto_cant").val()) == "") {
                $("#Infraest_035_banosNNA_mixto_existe").val(0);
            }
            else {
                $("#Infraest_035_banosNNA_mixto_existe").val(1);
            }
            if (EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()) != "") valor19 = parseInt(EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) != "") valor21 = parseInt($("#Infraest_035_banosNNA_Hombre_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_Mujer_cant").val()) != "") valor22 = parseInt($("#Infraest_035_banosNNA_Mujer_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_035_banosNNA_mixto_cant").val()) != "") valor23 = parseInt($("#Infraest_035_banosNNA_mixto_cant").val(), 10);
            if (valor19 > 0 && ((valor21 + valor22 + valor23) > valor19)) {
                $("#Infraest_035_banosNNA_mixto_cant").val("");
                $("#Infraest_035_banosNNA_mixto_existe").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de baños NNA mixtos, pues el valor ingresado (" + valor23 + "), más las cantidades de baños NNA de hombres y mujeres sobrepasan la cantidad de baños NNA en funcionamiento.</p>");
            }

            break;
        case 24://CAMPO NUEVO: Duchas para NNA en Funcionamiento
            if (EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()) == 0 || EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()) == "") {
                document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 2;
                document.getElementById("Infraest_037_duchasNNA_funcionamiento_existe").selectedIndex = 2;
                document.getElementById("Infraest_038_duchasNNA_cantidad").selectedIndex = 0;

                $("#Infraest_037_duchasNNA_normativa_existe").val(0);
                $("#Infraest_037_duchasNNA_normativa_cant").val(0);
                document.getElementById("Infraest_037_duchasNNA_normativa_cant").disabled = true;
            }
            else {
                document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 1;
                document.getElementById("Infraest_037_duchasNNA_funcionamiento_existe").selectedIndex = 1;
                document.getElementById("Infraest_037_duchasNNA_normativa_cant").disabled = false;

                valor24 = 0;
                if (EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()) != "") {
                    valor24 = parseInt(EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()), 10);
                }
                if (valor24 > 5) {
                    $("#Infraest_038_duchasNNA_cantidad").val(6);
                }
                else {
                    $("#Infraest_038_duchasNNA_cantidad").val(valor24);
                }
  
            }
            break;

        case 25://CAMPO NUEVO: Duchas para  NNA de acuerdo a Normativa
            if (EliminaEspacios($("#Infraest_037_duchasNNA_normativa_cant").val()) == 0 || EliminaEspacios($("#Infraest_037_duchasNNA_normativa_cant").val()) == "") {
                $("#Infraest_037_duchasNNA_normativa_existe").val(0);
            }
            else {
                $("#Infraest_037_duchasNNA_normativa_existe").val(1);
                valor24 = parseInt(EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()), 10);
                valor25 = parseInt($("#Infraest_037_duchasNNA_normativa_cant").val(), 10);
                if (valor25 > valor24) {
                    $("#Infraest_037_duchasNNA_normativa_cant").val(valor24);
                    MensajeINFO("<p style='font-size:12px;'>Está ingresando más duchas para NNA de acuerdo a normativa que duchas para NNA en funcionamiento. El sistema igualará ambos campos al valor de duchas para NNA en funcionamiento.</p>");
                }
            }
            break;
        case 26://CAMPO NUEVO: Duchas para NNA de hombres
            valor24 = 0; valor26 = 0; valor27 = 0; valor28 = 0;
            if (EliminaEspacios($("#Infraest_037_duchasNNA_hombres_cant").val()) == 0 || EliminaEspacios($("#Infraest_037_duchasNNA_hombres_cant").val()) == "") {
                $("#Infraest_037_duchasNNA_hombres_existe").val(0);
            }
            else {
                $("#Infraest_037_duchasNNA_hombres_existe").val(1);
            }
            if (EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()) != "") valor24 = parseInt(EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_hombres_cant").val()) != "") valor26 = parseInt($("#Infraest_037_duchasNNA_hombres_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mujeres_cant").val()) != "") valor27 = parseInt($("#Infraest_037_duchasNNA_mujeres_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mixtos_cant").val()) != "") valor28 = parseInt($("#Infraest_037_duchasNNA_mixtos_cant").val(), 10);
            if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
                $("#Infraest_037_duchasNNA_hombres_cant").val("");
                $("#Infraest_037_duchasNNA_hombres_existe").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA de hombres, pues el valor ingresado (" + valor26 + "), más las cantidades de duchas para NNA de mujeres y mixtas sobrepasa la cantidad de duchas para NNA en funcionamiento.</p>");
            }
            break;
        case 27://CAMPO NUEVO: Duchas para NNA de mujeres
            valor24 = 0; valor26 = 0; valor27 = 0; valor28 = 0;
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mujeres_cant").val()) == 0 || EliminaEspacios($("#Infraest_037_duchasNNA_mujeres_cant").val()) == "") {
                $("#Infraest_037_duchasNNA_mujeres_existe").val(0);
            }
            else {
                $("#Infraest_037_duchasNNA_mujeres_existe").val(1);
            }
            if (EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()) != "") valor24 = parseInt(EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_hombres_cant").val()) != "") valor26 = parseInt($("#Infraest_037_duchasNNA_hombres_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mujeres_cant").val()) != "") valor27 = parseInt($("#Infraest_037_duchasNNA_mujeres_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mixtos_cant").val()) != "") valor28 = parseInt($("#Infraest_037_duchasNNA_mixtos_cant").val(), 10);
            if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
                $("#Infraest_037_duchasNNA_mujeres_cant").val("");
                $("#Infraest_037_duchasNNA_mujeres_existe").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA de mujeres, pues el valor ingresado (" + valor27 + "), más las cantidades de duchas para NNA de hombres y mixtas sobrepasa la cantidad de duchas para NNA en funcionamiento.</p>");
            }
            break;
        case 28://CAMPO NUEVO: Duchas para NNA mixtas
            valor24 = 0; valor26 = 0; valor27 = 0; valor28 = 0;
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mixtos_cant").val()) == 0 || EliminaEspacios($("#Infraest_037_duchasNNA_mixtos_cant").val()) == "") {
                $("#Infraest_037_duchasNNA_mixtos_existe").val(0);
            }
            else {
                $("#Infraest_037_duchasNNA_mixtos_existe").val(1);
            }
            if (EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()) != "") valor24 = parseInt(EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_hombres_cant").val()) != "") valor26 = parseInt($("#Infraest_037_duchasNNA_hombres_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mujeres_cant").val()) != "") valor27 = parseInt($("#Infraest_037_duchasNNA_mujeres_cant").val(), 10);
            if (EliminaEspacios($("#Infraest_037_duchasNNA_mixtos_cant").val()) != "") valor28 = parseInt($("#Infraest_037_duchasNNA_mixtos_cant").val(), 10);
            if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
                $("#Infraest_037_duchasNNA_mixtos_cant").val("");
                $("#Infraest_037_duchasNNA_mixtos_existe").val(0);
                MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA mixtas, pues el valor ingresado (" + valor28 + "), más las cantidades de duchas para NNA de hombres y de mujeres sobrepasa la cantidad de duchas para NNA en funcionamiento.</p>");
            }
            break;
    }
}
function EvaluaCumpleNormaCalefonLlaveGas() {
    if ($("#Infraest_043_CumpleNormaCalefon").val() == "1" && $("#Infraest_043_CumpleNormaLlaveGas").val() == "1")
        $("#Infraest_043_estadoCalefonLlavesGas_existe").val(1);
    else
        $("#Infraest_043_estadoCalefonLlavesGas_existe").val(2);/* gcastro - se cambio 0 por 2 */
    
}

function ValidaSumaDependientesbanosNNAFunc() {
    var valor19 = 0, valor20 = 0, valor21 = 0, valor22 = 0, valor23 = 0;

    if (EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()) != "") {
        valor19 = parseInt(EliminaEspacios($("#Infraest_035_banosNNA_Funcionamiento_cant").val()), 10);
    }

    if (EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) != "") valor21 = parseInt($("#Infraest_035_banosNNA_Hombre_cant").val(), 10);
    if (EliminaEspacios($("#Infraest_035_banosNNA_Mujer_cant").val()) != "") valor22 = parseInt($("#Infraest_035_banosNNA_Mujer_cant").val(), 10);
    if (EliminaEspacios($("#Infraest_035_banosNNA_mixto_cant").val()) != "") valor23 = parseInt($("#Infraest_035_banosNNA_mixto_cant").val(), 10);

    if (valor19 > 0 && ((valor21 + valor22 + valor23) > valor19)) {
        $("#Infraest_035_banosNNA_Funcionamiento_cant").val("");

        document.getElementById("Infraest_035_banosNNAadecuados_existe").selectedIndex = 2;
        document.getElementById("Infraest_035_banosNNA_Funcionamiento_existe").selectedIndex = 2;
        document.getElementById("Infraest_036_banosNNAadecuados_cantidad").selectedIndex = 0;
        $("#Infraest_035_banosNNA_AcuerdoNormativa_existe").val(0);
        $("#Infraest_035_banosNNA_AcuerdoNormativa_cant").val(0);
        document.getElementById("Infraest_035_banosNNA_AcuerdoNormativa_cant").disabled = true;
        MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de baños NNA en funcionamiento, pues el valor ingresado (" + valor19 + "), es menor que la suma de las cantidades de baños NNA de hombres, mujeres y mixtos.</p>");
    }
    else {
        if ((EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) != "") || (EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) != "") || (EliminaEspacios($("#Infraest_035_banosNNA_Hombre_cant").val()) != "")) {
            if (valor19 > 0 && ((valor21 + valor22 + valor23) < valor19)) {
                MensajeINFO("<p style='font-size:12px;'>La cantidad de baños NNA en funcionamiento es mayor que la suma de las cantidades de baños NNA de hombres, mujeres y mixtos. Tendrá que revisar las cantidades de estas últimas, porque la suma debe coincidir con la de baños en funcionamiento.</p>");
            }
        }
    }
}

function ValidaSumaDependecniasDuchaNNAFunc() {
    var valor24 = 0, valor26 = 0, valor27 = 0, valor28 = 0;

    if (EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()) != "") {
        valor24 = parseInt(EliminaEspacios($("#Infraest_037_duchasNNA_funcionamiento_cant").val()), 10);
    }

    if (EliminaEspacios($("#Infraest_037_duchasNNA_hombres_cant").val()) != "") valor26 = parseInt($("#Infraest_037_duchasNNA_hombres_cant").val(), 10);
    if (EliminaEspacios($("#Infraest_037_duchasNNA_mujeres_cant").val()) != "") valor27 = parseInt($("#Infraest_037_duchasNNA_mujeres_cant").val(), 10);
    if (EliminaEspacios($("#Infraest_037_duchasNNA_mixtos_cant").val()) != "") valor28 = parseInt($("#Infraest_037_duchasNNA_mixtos_cant").val(), 10);
    if (valor24 > 0 && ((valor26 + valor27 + valor28) > valor24)) {
        $("#Infraest_037_duchasNNA_funcionamiento_cant").val("");

        document.getElementById("Infraest_037_duchasNNA_existe").selectedIndex = 2;
        document.getElementById("Infraest_037_duchasNNA_funcionamiento_existe").selectedIndex = 2;
        document.getElementById("Infraest_038_duchasNNA_cantidad").selectedIndex = 0;
        $("#Infraest_037_duchasNNA_normativa_existe").val(0);
        $("#Infraest_037_duchasNNA_normativa_cant").val(0);
        document.getElementById("Infraest_037_duchasNNA_normativa_cant").disabled = true;
        MensajeINFO("<p style='font-size:12px;'>Ingrese nuevamente el valor de duchas para NNA en funcionamiento, pues el valor ingresado (" + valor24 + "), es menor que la suma de las cantidades de duchas para NNA de hombres, mujeres y mixtas.</p>");
    }
    else {
        if ((EliminaEspacios($("#Infraest_037_duchasNNA_hombres_cant").val()) != "") || (EliminaEspacios($("#Infraest_037_duchasNNA_mujeres_cant").val()) != "") || (EliminaEspacios($("#Infraest_037_duchasNNA_mixtos_cant").val()) != "")) {
            if (valor24 > 0 && ((valor26 + valor27 + valor28) < valor24)) {
                MensajeINFO("<p style='font-size:12px;'>La cantidad de duchas para NNA en funcionamiento es mayor que la suma de las cantidades de duchas para NNA de hombres, mujeres y mixtas. Tendrá que revisar las cantidades de estas últimas, porque la suma debe coincidir con la de duchas para NNA en funcionamiento.</p>");
            }
        }
    }
}

