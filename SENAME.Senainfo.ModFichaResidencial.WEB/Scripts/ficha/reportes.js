var IdUsuarioActualizacion;
var reportesData;
var cabmodal = "SENAINFO ";
var mensaje_ = "";

$(document).ready(function () {
    CargaInicial();
  

});


function CargaInicial() {
    IdUsuarioActualizacion = $("#idusuario_conect").val();
    CargaDatosReportes();
    CargaDatosInstitucionesUsuario();

    /* Sprint 4 - 20191121 - gcastro */
    $(document).on('click', '#btnGenerarReporte', function () {
        if ($("#cmbReporte").val() == 0) 
            MensajeINFO("Debe seleccionar un Reporte");
        else   
            GenerarReporte();
    });

    /* Spring 4.2 - 20191118 - gcastro */
    $(document).on('click', '#btnLimpiar', function () {
            LimpiarFormularioReportes();
    });

    $("#cmbReporte")
        .change(function ()
        {

            var infoReporte = reportesData.find(sel => sel.CodReporte == $(this).val().toString());
            var infoRequerida = $("#infoRequerida");

            if (infoReporte != null) {
                switch (infoReporte.RequiereCodProyecto) {
                    case "S":
                        infoRequerida.text('Este Reporte requiere que selecciones una Institución y Proyecto.').change();
                        break;
                    case "N":
                        infoRequerida.text('Este Reporte no requiere parametros adicionales.').change();
                        break;
                    default:
                        infoRequerida.text('El Tiempo de Carga de la información dependerá de la cantidad de registros.').change();
                        break;
                }
            }
            else
                infoRequerida.text('El Tiempo de Carga de la información dependerá de la cantidad de registros.').change();

        });

    $("#fechaPeriodoReporte")
        .change(function () {
        var aux = $(this).val().toString();
    alert(aux);
    });
    
}

///////////////////
//FUNCIONES MISCELANEAS
function InicializaCombo(cmb) {
    $(cmb).html("");
}

//INICIALIZACIÓN DE ELEMENTOS DE PAGINA
//FUNCIONES DE INICIALIZACIÓN COMBOS

function CargaDatosInstitucionesUsuario() {
    
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerInstitucionesUsuario",
        data: "{'IdUsuario': '" + IdUsuarioActualizacion + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
       
        var institucion = $("#cmbInstitucion");
        InicializaCombo("#cmbInstitucion");
        institucion.append("<option value='0'>Seleccionar una Institución</option>");

        var proyecto = $("#cmbProyecto");
        InicializaCombo("#cmbProyecto");
        proyecto.append("<option value='0'>Seleccionar un Proyecto</option>");

        if (r.d[0] != null)
        if ((r.d[0].error) == "") {
            if (r.d != "") {
                
                $.each(r.d,
                    function () {
                        institucion.append("<option value='" + this.CodInstitucion + "'>" + this.NombreInstitucion + "</option>");
                    }
                );
                document.getElementById("cmbInstitucion").disabled = false;
                if (r.d.length == 1) {
                    
                    $("#cmbInstitucion").prop('selectedIndex', 1);
                    CargaProyectosInstitucion($("#cmbInstitucion").val());
                }
            }
        }
        else {
            document.getElementById("cmbInstitucion").selectedIndex = 0;
            document.getElementById("cmbInstitucion").disabled = true;

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }
    });
}
function CargaProyectosInstitucion(codigoInstitucion) {
    //alert(codigoInstitucion + " - " + IdUsuarioActualizacion);
    document.getElementById("cmbProyecto").disabled = true;
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerProyectosXInstitucionYUsuario",
        data: "{'IdUsuario':'" + IdUsuarioActualizacion + "','codigoInstitucion':'" + codigoInstitucion + "' }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        var proyecto = $("#cmbProyecto");
        InicializaCombo("#cmbProyecto");
        proyecto.append("<option value='0'>Seleccionar</option>");

        if (r.d[0] != null)
        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#cmbProyecto").append("<option value='" + this.CodProyecto + "'>" + this.NombreProyecto + "</option>");
                }
            );
            document.getElementById("cmbProyecto").disabled = false;
        }
    });
}

function CargaDatosReportes() {
    

    $.ajax({
        type: "POST",
        url: "FichaResidencialReportes.aspx/ListarReportes",
        data: "",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        //alert("What!!!");
        var reporte = $("#cmbReporte");
        InicializaCombo("#cmbReporte");
        reporte.append("<option value='0'>Selecciona un Reporte</option>");
        
        if (r.d[0] != null)
        if ((r.d[0].error) == "") {
            if (r.d != "") {
                reportesData = r.d;
                
                $.each(r.d,
                    function () {
                            reporte.append("<option value='" + this.CodReporte + "'>" + this.Descripcion + "</option>");
                    }
                );
                
            }
        }
        else {
            document.getElementById("cmbReporte").selectedIndex = 0;
            document.getElementById("cmbReporte").disabled = true;

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }
    });
}

/* Sprint 4 - 20191121 - gcastro */
function GenerarReporte()
{
    var periodoSeleccionado = document.getElementById("fechaPeriodoReporte").innerHTML;

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth() + 1;
    if (mes < 10) mes = "0" + mes;
    var periodoActual = mes + '/' + d.getFullYear();

    if (periodoSeleccionado == periodoActual)
        MensajeINFO("Se generará el Reporte en base al periodo actual", "GeneraReporte01();", "CancelarEnvio();")
    else
        GeneraReporte01()
}

function GeneraReporte01()
{
    var periodoSeleccionado = document.getElementById("fechaPeriodoReporte").innerHTML;
    var idusuario = IdUsuarioActualizacion;
    var codInstitucion = $("#cmbInstitucion").val();
    var codProyecto = $("#cmbProyecto").val();
    var codReporte = $("#cmbReporte").val();

    window.location = "FichaResidencialReporteHandler.ashx?idusuario=" + idusuario +
        "&codInstitucion=" + codInstitucion +
        "&codProyecto=" + codProyecto +
        "&codReporte=" + codReporte +
        "&periodo=" + periodoSeleccionado;
}

function CancelarEnvio() {
    return;
}

/* Sprint 4 - 20191120 - gcastro */
function LimpiarFormularioReportes() {
    document.getElementById("cmbInstitucion").selectedIndex = 0;          
    document.getElementById("cmbProyecto").selectedIndex = 0; 
    document.getElementById("cmbReporte").selectedIndex = 0;

    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth() + 1;
    //if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    var diaActual =  mes + '/' + d.getFullYear();
    document.getElementById('fechaPeriodoReporte').innerHTML = diaActual; 
}

/* Sprint 4 - 20191120 - gcastro */
// FUNCIONES GENÉRICAS
function MensajeINFO(mensaje_, fx_aceptar, fx_cancelar) {
    var d = new Date();
    swal({
        title: "<table style='margin:auto;font-size:18px;'>" +
            "<tr>" +
            "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
            "</tr>" +
            "</table>",
        html: "<span style='color:#0F68B1;text-align:left;'>" + mensaje_ + "<span>" +
            "<div style='text-align:center;'>" +
            "<br />" +
            "<button id='btn_warning_aceptar' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title=''><i class='fa fa-thumbs-up'></i>&nbsp;Aceptar</button>&nbsp;<button id='btn_warning_cancelar' class='btn ' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;background:#A4A4A4;color:#FFF;' title=''><i class='fa fa-times'></i>&nbsp;Cancelar</button>" +
            "</div>",
        type: "warning",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        cancelButtonText: "cancelar",
        confirmButtonText: "aceptar",
        confirmButtonColor: "#0F68B1",
        cancelButtonColor: "#A4A4A4"
    });
    jQuery('#btn_warning_aceptar').bind('click', function () {
        swal.clickCancel();
        if (fx_aceptar != "")
            eval(fx_aceptar);
    });
    jQuery('#btn_warning_cancelar').bind('click', function () {
        swal.clickCancel();
        if (fx_cancelar != "")
            eval(fx_cancelar);
    });
    mensaje_ = "";
}

