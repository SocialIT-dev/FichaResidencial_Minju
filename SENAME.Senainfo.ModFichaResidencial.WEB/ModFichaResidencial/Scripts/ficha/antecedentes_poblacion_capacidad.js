////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesPoblacionCapacidad()
{
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;

    var SubvencionSename = $("#poblacion_001_sel_reside_con_subven").val();
    var SexoAtiende = $("#poblacion_002_sel_sexo_atendidos").val();

    var RangoEtareo = $("#poblacion_003_sel_rango_etareo_predomina").val();  

    /* Sprint 3 - 20191125 - gcastro - valida que un RangoEtareo este selecionado */
    if ((RangoEtareo == "") || (RangoEtareo == null) || (RangoEtareo == 0))
    {
        var mensaje = "Debe seleccionar una opción de Rango etáreo Atención";
        MensajeERROR_App_Critico(mensaje);
        $("#btn_antecedentesPoblacionCapacidad").attr({ "disabled": false });
        return;
    }

    var PoblacionVigente = $("#poblacion_004_poblacion_vigente").val();
    var TipoVulneracion = $("#poblacion_005_tipo_vulneracion_mas_frecuente").val();
    var ProgramaApadrinamiento = $("#poblacion_006_programa_apadrinimiento").val();

    if (ProgramaApadrinamiento == null || ProgramaApadrinamiento == "-1")
        ProgramaApadrinamiento = "0";

    var dataParametros = 
        "{'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "',"+
        "'SubvencionSename': '" + SubvencionSename + "'," +
        "'SexoAtiende': '" + SexoAtiende + "'," +
        "'RangoEtareo': '" + RangoEtareo + "'," +
        "'PoblacionVigente': '" + PoblacionVigente + "'," +
        "'TipoVulneracion': '" + replaceAll(EliminaEspacios(TipoVulneracion),"'","") + "'," +
        "'ProgramaApadrinamiento': '" + ProgramaApadrinamiento + "'}";
 
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesPoblacionCapacidad",
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

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Población y Capacidad.");
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
                ActivarDesactivarBotonesGrabar(2, false);
            }
        );

    });
}
function ObtenerAntecedentesPoblacionCapacidad(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesPoblacionCapacidad",
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
    }).then(function (r)
    {
        $.each(r.d,
            function () {
                $("#poblacion_001_sel_reside_con_subven").val(this.SubvencionSename);
                $("#poblacion_002_sel_sexo_atendidos").val(this.SexoAtiende);
                $("#poblacion_003_sel_rango_etareo_predomina").val(this.IdRangoEtareo); /* - Spring 3 - 20191112 - gcastro - RangoEtareo es remplazado por IdRangoEtareo*/
              $("#poblacion_004_poblacion_vigente").val(this.PoblacionVigente);
               $("#poblacion_005_tipo_vulneracion_mas_frecuente").val(this.TipoVulneracion);
               $("#poblacion_006_programa_apadrinimiento").val(this.ProgramaApadrinamiento);
                
            }
        );
      
        if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_ObtenerAntecedentesPoblacionCapacidad = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            poblacionCapacidad_residencia = true;
            if (opcioncarga == "GESTIONOBSERVACIONES") CargaCamposComparativa2();
        }
    });
}

//PJUD
function ObtenerAntecedentesPoblacionCapacidad_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesPoblacionCapacidad",
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
                $("#poblacion_001_sel_reside_con_subven_pjud").val(this.SubvencionSename);
                $("#poblacion_002_sel_sexo_atendidos_pjud").val(this.SexoAtiende);
                $("#poblacion_003_sel_rango_etareo_predomina_pjud").val(this.RangoEtareo);
                $("#poblacion_004_poblacion_vigente_pjud").val(this.PoblacionVigente);
                $("#poblacion_005_tipo_vulneracion_mas_frecuente_pjud").val(this.TipoVulneracion);
                $("#poblacion_006_programa_apadrinimiento_pjud").val(this.ProgramaApadrinamiento);
            }
        );

        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesPoblacionCapacidad_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        poblacionCapacidad_pjud = true;
        CargaCamposComparativa2();
    });
}

function ObtenerAntecedentesPoblacionCapacidad_Compare(CodFichaCompare, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesPoblacionCapacidad",
        data: "{'CodFicha': '" + CodFichaCompare + "'}",
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
                $("#poblacion_001_sel_reside_con_subven"+sufijo).val(this.SubvencionSename);
                $("#poblacion_002_sel_sexo_atendidos"+sufijo).val(this.SexoAtiende);
                $("#poblacion_003_sel_rango_etareo_predomina"+sufijo).val(this.RangoEtareo);
                $("#poblacion_004_poblacion_vigente"+sufijo).val(this.PoblacionVigente);
                $("#poblacion_005_tipo_vulneracion_mas_frecuente"+sufijo).val(this.TipoVulneracion);
                $("#poblacion_006_programa_apadrinimiento"+sufijo).val(this.ProgramaApadrinamiento);
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesPoblacionCapacidad_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            poblacionCapacidad_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesPoblacionCapacidad_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            poblacionCapacidad_residencia_comp002 = true;
        }
        CargaCamposComparativa2_();
    });
}

function CargaRangoEtareoAtencion1() {

    document.getElementById("poblacion_003_sel_rango_etareo_predomina").selectedIndex = 0;
    document.getElementById("poblacion_003_sel_rango_etareo_predomina").disabled = true;

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerRangoEtareoAtencion",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        var Institucion = $("#poblacion_003_sel_rango_etareo_predomina");
        InicializaCombo("#poblacion_003_sel_rango_etareo_predomina");
        Institucion.append("<option value='0'>Seleccionar</option>");

        var NombreRangoEtareo = "";
        if ((r.d[0].error) == "") {
            if (r.d != "") {
                $.each(r.d,
                    function () {
                        if (NombreRangoEtareo == "" || NombreRangoEtareo != this.DescripcionRango) {
                            $("#poblacion_003_sel_rango_etareo_predomina").append("<option value='" + this.IdRangoEtareo + "'>" + this.DescripcionRango + "</option>");
                            NombreRangoEtareo = this.DescripcionRango;
                        }
                    }
                );
                document.getElementById("poblacion_003_sel_rango_etareo_predomina").disabled = false;
                if (r.d.length == 1)
                {
                    $("#poblacion_003_sel_rango_etareo_predomina").prop('selectedIndex', 1);
                    CargaRangoEtareoAtencion2($("#poblacion_003_sel_rango_etareo_predomina").val());
                }
            }
        }
        else {
            document.getElementById("poblacion_003_sel_rango_etareo_predomina").selectedIndex = 0;
            document.getElementById("poblacion_003_sel_rango_etareo_predomina").disabled = true;

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }
    });
}
// spring 3 - 20191113 - gcastro
function CargaRangoEtareoAtencion2(idRangoEtareo) 
{
    if (idRangoEtareo != "0" && idRangoEtareo != null) {

        $.ajax({
            type: "POST",
            url: "FichaResidencial.aspx/ObtenerRangoEtareoAtencionPorID",
            data: "{'idRangoEtareo': '" + idRangoEtareo + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                // Ajax OK !                   
            },
            error: function (r) {
                DesplegarExcepcionCriticaApp(r.responseText);
            }
        }).then(function (r) {
            if (r.d[0].error == "")
            {
                $.each(r.d,
                    function () {
                        $("#poblacion_003_sel_rango_etareo_predomina").val(this.IdRangoEtareo);
                    }
                );
            }
            else {
                DesplegarExcepcionCriticaApp(r.d[0].error);
            }
        });


    }
}

