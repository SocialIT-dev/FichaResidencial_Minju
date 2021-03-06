//NOTA: 
//Cuando se realicen cambios en esta librería revisar las referencias a la carpeta de las imágenes
//estas debería quedar indicadas del siguiente modo:  src="images/[ruta + nombre de imagen]", 
//donde [ruta + nombre de imagen] es la ruta final más el archivo referenciado.
var cabmodal = "SENAINFO ";
var CodFicha = 0;
var CodProyecto = 0;
var IdUsuarioActualizacion;

var conect = "";

var generalresidencia = false;
var generalpjud = false;

var generalresidenciaNNAAbandono = false;
var generalpjudNNAAbandono = false;
var nombres_NNA_abandono = "";
var nombres_NNA_abandono_pjud = "";

var generalresidenciaNNAadolescHijo = false;
var generalpjudNNAadolescHijo = false;
var nombres_NNA_adolescHijo = "";
var nombres_NNA_adolescHijo_pjud = "";

var poblacionCapacidad_residencia = false;
var poblacionCapacidad_pjud = false;

//PARA EVITAR NAVEGAR HACIA ATRÁS SI SE PRESIONA LA TECLA BORRAR HACIA ATRÁS (COD 8)
$(document).keydown(function (e) {
    var preventKeyPress;
    if (e.keyCode == 8) {
        var d = e.srcElement || e.target;
        switch (d.tagName.toUpperCase()) {
            case 'TEXTAREA':
                preventKeyPress = d.readOnly || d.disabled;
                break;
            case 'INPUT':
                preventKeyPress = d.readOnly || d.disabled ||
                    (d.attributes["type"] && $.inArray(d.attributes["type"].value.toLowerCase(), ["radio", "checkbox", "submit", "button"]) >= 0);
                break;
            case 'DIV':
                preventKeyPress = d.readOnly || d.disabled || !(d.attributes["contentEditable"] && d.attributes["contentEditable"].value == "true");
                break;
            default:
                preventKeyPress = true;
                break;
        }
    }
    else
        preventKeyPress = false;

    if (preventKeyPress)
        e.preventDefault();
});

///////////////////
//CONTROL DESBLOQUEO ZONAS
var ctrl_ObtenerAntecedentesGenerales = false;
var ctrl_ObtenerNnaAbandonoDetalleOBS = false;
var ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS = false;
var ctrl_ObtenerAntecedentesPoblacionCapacidad = false;
var ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion = false;
var ctrl_ObtenerAntecedentesInfraestructura = false;
var ctrl_ObtenerAntecedentesSeguridad = false;
var ctrl_ObtenerAntecedentesSalud = false;
var ctrl_ObtenerAntecedentesEducacion = false;
var ctrl_ObtenerAntecedentesAlimentacion = false;
var ctrl_ObtenerAntecedentesGestionResidencia_PJUD = false;
function InicializaVarControlDesbloqueoZonas() {
    ctrl_ObtenerAntecedentesGenerales = false;
    ctrl_ObtenerNnaAbandonoDetalleOBS = false;
    ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS = false;
    ctrl_ObtenerAntecedentesPoblacionCapacidad = false;
    ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion = false;
    ctrl_ObtenerAntecedentesInfraestructura = false;
    ctrl_ObtenerAntecedentesSeguridad = false;
    ctrl_ObtenerAntecedentesSalud = false;
    ctrl_ObtenerAntecedentesEducacion = false;
    ctrl_ObtenerAntecedentesAlimentacion = false;
    ctrl_ObtenerAntecedentesGestionResidencia_PJUD = false;
}

///////////////////
//FUNCIONES DE MENSAJERIA
function MensajeFormatoVariable(mensaje_, tipoLogo, textalign) {
    var d = new Date();
    var imgsrc;
    var colotext;
    var colorbutton;
    switch (tipoLogo) {
        case "info":
            imgsrc = "images/info32x.png";
            colortext = "#0F68B1";
            colorbutton = "#0F68B1";
            break;
        case "error":
            imgsrc = "images/error32x.png";
            colortext = "#000";
            colorbutton = "#DF0101";
            break;
        case "warning":
            imgsrc = "images/warning32x.png";
            colortext = "#0F68B1";
            colorbutton = "#0F68B1";
            break;
        case "success":
            imgsrc = "images/success32x.png";
            colortext = "#0F68B1";
            colorbutton = "#0F68B1";
            break;
    }
    if (mensaje_.indexOf("|") != -1) {
        mensaje_ = replaceAll(mensaje_, "|", "<br/>");
    }
    // <div class='divpadre'></div>
    swal({
        title:"<table style='margin:auto;font-size:18px;color:"+colortext+";'>"+
                "<tr>"+
                "<td style='font-size:24px;color:" + colortext + ";'>" + cabmodal + " " + d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>", 
        html: "<p style='text-align:"+textalign+";'><span style='color:" + colortext + ";font-size:14px;'>" + mensaje_ + "<span></p>",
        allowOutsideClick: true,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "cerrar",
        confirmButtonColor: colorbutton,

        background: "#EEEEEE"
    });
}
function MessageSucess(mensaje_) {
    var d = new Date();
    swal({
        title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>",
        html: "<span style='color:#0F68B1;font-size:14px;'>" + mensaje_ + "<span>",
        type: "success",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: true
    });
}
function MensajeINFO(mensaje_) {
    var d = new Date();
    swal({
        title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>"+
                "<td style='font-size:24px;color:#0F68B1;'>"+cabmodal+" "+d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>", 
        html: "<span style='color:#0F68B1;text-align:justify;'>" + mensaje_ + "<span>",
        type: "info",
        allowOutsideClick: true,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#0F68B1"
    });
}
function MensajeINFO2(mensaje_, fx) {
    var d = new Date();
    swal(
        {
            title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>"+
                "<td style='font-size:24px;color:#0F68B1;'>"+cabmodal+" "+ d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>", 
            html: "<div style='color:#0F68B1;'><span>" + mensaje_ + "<span></div>" +
                  "<div style='text-align:center;'>" +
                  "<br />" +
                  "<button id='btn_infov2_aceptar' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title=''><i class='fa fa-thumbs-up'></i>&nbsp;Aceptar</button>&nbsp;<button id='btn_infov2_cancelar' class='btn ' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;background:#A4A4A4;color:#FFF;' title=''><i class='fa fa-times'></i>&nbsp;Cancelar</button>" +
                  "</div>",
            //type: "info",
            allowOutsideClick: true,
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonText: "aceptar",
            cancelButtonText: "cancelar",
            confirmButtonColor: "#0F68B1",
            cancelButtonColor: "#0404B4"
    }); //.then((result)=>{if (result.value) { eval(fx); } } )
    jQuery('#btn_infov2_aceptar').bind('click', function () {
        swal.clickCancel();
        if (fx != "")
            eval(fx);
    });
    jQuery('#btn_infov2_cancelar').bind('click', function () {
        swal.clickCancel();
    });
}
function MensajeINFO2_V2(mensaje_, fx) {
    var d = new Date();
    swal(
        {
            title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>"+
                "<td style='font-size:24px;color:#0F68B1;'>"+cabmodal+"</td>"+
                "<td>" + d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>", 
            html: "<div style='color:#0F68B1;'><p style='text-align:left;'>" + mensaje_ + "<p></div>"+
                  "<div style='text-align:center;'>" +
                  "<br />" +
                  "<button id='btn_infov2_2_aceptar' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title=''><i class='fa fa-thumbs-up'></i>&nbsp;Aceptar</button>&nbsp;<button id='btn_infov2_2_cancelar' class='btn ' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;background:#A4A4A4;color:#FFF;' title=''><i class='fa fa-times'></i>&nbsp;Cancelar</button>" +
                  "</div>",
            allowOutsideClick: true,
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonText: "aceptar",
            cancelButtonText: "cancelar",
            confirmButtonColor: "#0F68B1",
            cancelButtonColor: "#0404B4"
    });//.then((result)=>{if (result.value) {eval(fx);}})
    jQuery('#btn_infov2_2_aceptar').bind('click', function () {
        swal.clickCancel();
        if(fx!="")
            eval(fx);
    });
    jQuery('#btn_infov2_2_cancelar').bind('click', function () {
        swal.clickCancel();
    });
}
function MensajeINFO3(mensaje_) {
    var d = new Date();
    swal({
        title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>"+
                "<td style='font-size:24px;color:0F68B1#;'>"+cabmodal+"</td>"+
                "<td>" + d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>",
        html: "<span style='color:#0F68B1;text-align:left;'>" + mensaje_ + "<span>",
        allowOutsideClick: true,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#0F68B1"
    });
}
function MensajeERROR(mensaje_) {
    var d = new Date();
    swal({
        title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>"+
                "<td style='font-size:24px;'>"+cabmodal+" "+d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>",
        html: "<span style='color:#000;text-align:left;'>" + mensaje_ + "<span>",
        type: "error",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#DF0101",
        padding: '20px'
    });
}
function MensajeERROR2(mensaje_, fx) {
    var d = new Date();
    swal({
        title:"<table style='margin:auto;font-size:18px;'>"+
            "<tr>"+
            "<td style='font-size:24px;'>"+cabmodal+"</td>"+
            "<td>" + d.getFullYear() + "</td>"+
            "</tr>"+
            "</table>",
        html: "<span style='color:#000;text-align:left;'>" + mensaje_ + "<span>" +
              "<div style='text-align:center;'>" +
              "<br />" +
              "<button id='btn_error2_aceptar' class='btn btn-danger' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title=''><i class='fa fa-thumbs-up'></i>&nbsp;Cerrar</button>" +
              "</div>",
        //type: "error",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#DF0101"
    }); //.then((result)=>{if (result.value) { eval(fx); }})
    jQuery('#btn_error2_aceptar').bind('click', function () {
        swal.clickCancel();
        if (fx != "")
            eval(fx);
    });
}
function MensajeWARNING(mensaje_, fx) {
    var d = new Date();
    swal({
        title:"<table style='margin:auto;font-size:18px;'>"+
            "<tr>"+
            "<td style='color:#0F68B1;font-size:24px;'>"+cabmodal+" "+d.getFullYear() + "</td>"+
            "</tr>"+
            "</table>",
        html: "<span style='color:#0F68B1;text-align:left;'>" + mensaje_ + "<span>"+
              "<div style='text-align:center;'>" +
              "<br />" +
              "<button id='btn_warning_aceptar' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title=''><i class='fa fa-thumbs-up'></i>&nbsp;Aceptar</button>&nbsp;<button id='btn_warning_cancelar' class='btn ' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;background:#A4A4A4;color:#FFF;' title=''><i class='fa fa-times'></i>&nbsp;Cancelar</button>" +
              "</div>",
        // 
        type: "warning",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        cancelButtonText: "cancelar",
        confirmButtonText: "aceptar",
        confirmButtonColor: "#0F68B1",
        cancelButtonColor: "#A4A4A4"
    }); //.then((result)=>{ if (result.value) { eval(fx); });
    jQuery('#btn_warning_aceptar').bind('click', function () {
        swal.clickCancel();
        if (fx != "")
            eval(fx);
    });
    jQuery('#btn_warning_cancelar').bind('click', function () {
        swal.clickCancel();
    });
}
function MensajeWARNING2(mensaje_, fx_aceptar, fx_cancelar) {
    var d = new Date();
    swal({
        title: "<table style='margin:auto;font-size:18px;'>" +
            "<tr>" +
            "<td style='color:#0F68B1;font-size:24px;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
            "</tr>" +
            "</table>",
        html: "<span style='color:#0F68B1;text-align:left;'>" + mensaje_ + "<span>" +
              "<div style='text-align:center;'>" +
              "<br />" +
              "<button id='btn_warning_aceptar' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title=''><i class='fa fa-thumbs-up'></i>&nbsp;Aceptar</button>&nbsp;<button id='btn_warning_cancelar' class='btn ' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;background:#A4A4A4;color:#FFF;' title=''><i class='fa fa-times'></i>&nbsp;Cancelar</button>" +
              "</div>",
        // 
        type: "warning",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        cancelButtonText: "cancelar",
        confirmButtonText: "aceptar",
        confirmButtonColor: "#0F68B1",
        cancelButtonColor: "#A4A4A4"
    }); //.then((result)=>{ if (result.value) { eval(fx); });
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
}
function MensajeERROR_App_Critico(mensaje_) {
    var d = new Date();
    swal({
        title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>"+
                "<td style='font-size:24px;'>"+cabmodal+" "+d.getFullYear() + "</td>"+
                "</tr>"+
                "</table>",
        html: mensaje_ ,
        type: "error",
        allowOutsideClick: true,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#DF0101",
        padding: '20px',
        width: '600px'
    });
}
function MensajeERROR_App_Critico2(mensaje_) {
    var d = new Date();
    swal({
        title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
                "</table>",
        html: "<table style='width:600px;'>" +
                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido la siguiente excepción:<br /></td></tr>" +
                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>ERROR: </b>" +
                    "<div class='scrollbar2' id='style-12' style='height: 150px;'>" +
                    "<div class='force-overflow2' style='text-align:left;'>" +
                    mensaje_ +
                    "</div></div>" +
                    "</td></tr>" +
                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br />Por favor reintentar, si el problema persiste, comunicarse con el administrador. </td></tr>" +
                    "</table>",
        type: "error",
        allowOutsideClick: true,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#DF0101",
        padding: '20px',
        width: '600px'
    });
}
function MensajeSQL(mensaje_, tipo, fx) {
    var d = new Date();

    if (tipo == "info2") {
        MensajeINFO2(mensaje_, fx);
    }
    else {
        if (tipo == "info") {
            MensajeINFO(mensaje_);
        }
        else {
            if (tipo == "error") {
                MensajeERROR2(mensaje_, fx);
            }
            else {
                if (tipo == "warning") {
                    MensajeWARNING(mensaje_, fx);
                }
                else {
                    if (tipo == "info2_v2") {
                        MensajeINFO2_V2(mensaje_, fx);
                    }
                }
            }
        }
    }
}
function MensajeERROR_App_DBOBJ(mensaje_) {
    var d = new Date();
    swal({
        title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
                "</table>",
        html: mensaje_,
        type: "error",
        allowOutsideClick: true,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#DF0101",
        padding: '20px',
        width: '600px'
    });
}

function DesplegarExcepcionCriticaApp(responseText) {
    //alert("DesplegarExcepcionCriticaApp: " + responseText);
    var jsonObj;
    var mensaje;
    var traza;
    var tipoExcepcion;
    var strError;
    if (responseText == undefined)
        responseText = "Se ha perdido conexión con el servidor de la aplicación. Esto puede deberse a una falla de comunicación o acceso a la red, o bien el servicio WEB al que trata de acceder está detenido.";

    try{
        jsonObj = JSON.parse(responseText);
        mensaje = jsonObj.Message;
        traza = jsonObj.StackTrace;
        tipoExcepcion = jsonObj.ExceptionType;

        strError = "<table style='width:600px;'>" +
                        "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido la siguiente excepción:<br /></td></tr>" +
                        "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + mensaje + "</td></tr>" +
                        "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>TRAZA: </b>" +
                        "<div class='scrollbar2' id='style-12' style='height: 150px;'>" +
                        "<div class='force-overflow2' style='text-align:left;'>" +
                        traza +
                        "</div></div>" +
                        "</td></tr>" +
                        "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>TIPO DE EXCEPCIÓN: </b>" + tipoExcepcion + "</td></tr>" +
                        "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br />Por favor reintentar, si el problema persiste, comunicarse con el administrador. </td></tr>" +
                        "</table>";
        var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

        MensajeERROR_App_Critico(strError);
    }
    catch (e) {
        traza = responseText;
        mensaje = "";
        tipoExcepcion = "";
        strError = "<table style='width:600px;'>" +
                "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido la siguiente excepción:<br /></td></tr>" +
                "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>Error del servidor</td></tr>" +
                "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>TRAZA: </b>" +
                "<div class='scrollbar2' id='style-12' style='height: 150px;'>" +
                "<div class='force-overflow2' style='text-align:left;'>" +
                traza +
                "</div></div>" +
                "</td></tr>" +
                "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>TIPO DE EXCEPCIÓN: </b>" + tipoExcepcion + "</td></tr>" +
                "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br />Por favor reintentar, si el problema persiste, comunicarse con el administrador. </td></tr>" +
                "</table>";
        var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

        MensajeERROR_App_Critico(strError);
    }
    //.substring(0, 400) + 
}
function DesplegarExcepcionCriticaDBOBJ(mensaje) {
    //alert("DesplegarExcepcionCriticaApp" + responseText);
    var strError = "";
    try {
        //e.Message + "|" + e.Source + "|" + e.StackTrace + "|" + e.InnerException;
        var arrMensaje = mensaje.split('|');
        var mensaje = arrMensaje[0];
        var traza = arrMensaje[2];
        var tipoExcepcion = arrMensaje[3];
        var d = new Date();
        var mm, dd;
        if ((d.getMonth() + 1) < 10) mm = "0" + (d.getMonth() + 1); else mm = (d.getMonth() + 1);
        if ((d.getDate() + 1) < 10) dd = "0" + (d.getDate() + 1); else dd = (d.getDate() + 1);

        var strhora = dd + "/" + mm + "/" + d.getFullYear() + " -- " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()

        strError = "<table style='width:600px;'>" +
                    "<tr><td style='text-align:left;font-size:14px;padding:20px;'>" +
                    "Ha sucedido un error en la conección de base de datos. Para ver el detalle de la excepción haga clic <span style='cursor:pointer;color:blue;' onclick='VerDetalleErrorDBOBJ();'>AQUI</span>.<br />" +
                    "<span style='color:#A4A4A4;'>Por favor reintentar, si el problema persiste, comunicarse con el administrador.<br />" +
                    "NOTA: Se recomienda enviar un print pantalla del error y copiar el texto del detalle,<br />para adjuntarlos en el correo que envíe a soporte.</span><br />" +
                    "</td></tr>" +
                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'>" +
                    "<div id='divERROR_' class='scrollbar2' id='style-12' style='height: 150px;display:none;'>" +
                    "<div class='force-overflow2' style='text-align:left;'>" +
                    "<b>MENSAJE: </b>" + mensaje + "<br /><br />" +
                    "<b>TRAZA: </b>" +
                    traza +
                    "<br /><br />" +
                    "<b>TIPO DE EXCEPCIÓN: </b>" + tipoExcepcion + "<br /><br />" +
                    "<b>HORA: </b>" + strhora +
                    "</div></div>" +
                    "</td>" +
                    "</tr>" +
                    "</table>";
        strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");
    }
    catch (e) {
        strError = "<table style='width:600px;'>" +
                    "<tr><td style='text-align:left;font-size:14px;padding:20px;'>" +
                    "Ha sucedido un error en la conección de base de datos. Para ver el detalle de la excepción haga clic <span style='cursor:pointer;color:blue;' onclick='VerDetalleErrorDBOBJ();'>AQUI</span><br />" +
                    "<span style='color:#A4A4A4;'>Por favor reintentar, si el problema persiste, comunicarse con el administrador.<br />" +
                    "NOTA: Se recomienda enviar un print pantalla del error y copiar el texto del detalle,<br />para adjuntarlos en el correo que envíe a soporte.</span><br />" +
                    "</td></tr>" +
                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'>" +
                    "<div id='divERROR_' class='scrollbar2' id='style-12' style='height: 150px;display:none;'>" +
                    "<div class='force-overflow2' style='text-align:left;'>" +
                    "<b>MENSAJE: </b>" + mensaje + "<br /><br />" +
                    "<b>HORA: </b>" + strhora +
                    "</div></div>" +
                    "</td></tr>" +
                    "</table>";
        strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

    }
    MensajeERROR_App_DBOBJ(strError);

    //.substring(0, 400) + 
}
function VerDetalleErrorDBOBJ() {
    if (document.getElementById("divERROR_").style.display == "none") {
        document.getElementById("divERROR_").style.display = "";
    }
    else {
        document.getElementById("divERROR_").style.display = "none";
    }
}

/////////////////// 
//FUNCIONES BASE VALIDACIÓN RUT 
function AnalizaRUT(opc){
    switch(opc){         
        case 1:             
            if (document.getElementById("general_010_rut_director_proyecto").value != null && document.getElementById("general_010_dv_rut_director_proyecto").value != null) {
                rut=EliminaEspacios(document.getElementById("general_010_rut_director_proyecto").value);
                id = EliminaEspacios(document.getElementById("general_010_dv_rut_director_proyecto").value);
            
                if(rut!="" && id!=""){                     
                    if (!revisarDigito2(rut + id)) {
                        document.getElementById("spanRUTerroneoGral").innerHTML = "&nbsp;* El RUT ingresado no es correcto, por favor,corregir.";
                    }
                    else {
                        document.getElementById("spanRUTerroneoGral").innerHTML = "";
                    }
                }

            }        
            break;
        case 2:
            if(document.getElementById("rut_NNA_abandono").value != null && document.getElementById("dv_rut_NNA_abandono").value != null){
                rut=EliminaEspacios(document.getElementById("rut_NNA_abandono").value);
                id=EliminaEspacios(document.getElementById("dv_rut_NNA_abandono").value);
            
                if(rut!="" && id!=""){                     
                    if( !revisarDigito2(rut+id) ){
                        document.getElementById("mensaje_agregar_NNA").innerHTML = "El RUT ingresado no es correcto, por favor,corregir.";
                    }
                    else{
                        document.getElementById("mensaje_agregar_NNA").innerHTML = "";
                    }
                }
            }
            break;
        case 3:
            if (document.getElementById("rut_AdolescenteHijo").value != null && document.getElementById("dv_rut_AdolescenteHijo").value != null) {
                rut = EliminaEspacios(document.getElementById("rut_AdolescenteHijo").value);
                id = EliminaEspacios(document.getElementById("dv_rut_AdolescenteHijo").value);

                if (rut != "" && id != "") {
                    if (!revisarDigito2(rut + id)) {
                        document.getElementById("mensaje_agregar_NNA").innerHTML = "El RUT ingresado no es correcto, por favor,corregir.";
                    }
                    else {
                        document.getElementById("mensaje_agregar_NNA").innerHTML = "";
                    }
                }

            }
            break;
        case 4:
            if (document.getElementById("rut_NNA_entrevistado").value != null && document.getElementById("dv_rut_NNA_entrevistado").value != null) {
                rut = EliminaEspacios(document.getElementById("rut_NNA_entrevistado").value);
                id = EliminaEspacios(document.getElementById("dv_rut_NNA_entrevistado").value);

                if (rut != "" && id != "") {
                    if (!revisarDigito2(rut + id)) {
                        document.getElementById("mensaje_agregar_NNA").innerHTML = "El RUT ingresado no es correcto, por favor,corregir.";
                    }
                    else {
                        document.getElementById("mensaje_agregar_NNA").innerHTML = "";
                    }
                }

            }    
            break;
    }
}
function revisarDigito2(crut) {
    largo = crut.length;
    if (largo < 2) {
         return false;
    }
    if (largo > 2)
        rut = crut.substring(0, largo - 1);
    else
        rut = crut.charAt(0);
    dv = crut.charAt(largo - 1);

    if (rut == null || dv == null)
        return 0

    var dvr = '0'
    suma = 0
    mul = 2

    for (i = rut.length - 1; i >= 0; i--) {
        suma = suma + rut.charAt(i) * mul
        if (mul == 7)
            mul = 2
        else
            mul++
    }
    res = suma % 11
    if (res == 1)
        dvr = 'K'
    else if (res == 0)
        dvr = '0'
    else {
        dvi = 11 - res
        dvr = dvi + ""
    }
    if (dvr != dv.toUpperCase()) {
        return false
    }
    return true
}

///////////////////
//FUNCIONES MISCELANEAS
function EliminaEspacios(valor) {
    return valor.replace(/^(\s|\&nbsp;)*|(\s|\&nbsp;)*$/g, "");
}
function ValidaIngresoSoloNumeros(valor, e) {
    //valida que cadena de texto sólo permita ingresar números: 
    var tecla = (document.all) ? e.keyCode : e.which;
    if ((tecla >= 48 && tecla <= 57) || tecla == 0 || tecla == 8) { return; } else { return false; }
}
function ValidaIngresoDV(valor, e) {
    //valida que cadena de texto sólo permita ingresar números y letra K: 
    var tecla = (document.all) ? e.keyCode : e.which;
    if ((tecla >= 48 && tecla <= 57) || tecla == 0 || tecla == 8 || tecla == 75 || tecla == 107) { return; } else { return false; }
}
function InicializaCombo(cmb) {
    $(cmb).html("");
}
function replaceAll(text, busca, reemplaza) {
    while (text.toString().indexOf(busca) != -1) {
        text = text.toString().replace(busca, reemplaza);
    }
    return text;
}

///////////////////
//FUNCIONES FRONTEND
function GrabarAntecedentes(opc) {

    GrabarFechaAplicacionFicha();

    var tipo_antecedentes = "";
    switch (opc) {
        case 1:
            //ActivarDesactivarBotonesGrabar(opc,true);
            tipo_antecedentes = "LOS ANTECEDENTES GENERALES";
            GrabarAntecedentesGenerales();
            break;
        case 2:
            //ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES POBLACIÓN Y CAPACIDAD";
            GrabarAntecedentesPoblacionCapacidad();
            break;
        case 3:
           // ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES DOTACIÓN DE PERSONAL";
            GrabarAntecedentesDotacionPersonalHAR();
            //GrabarAntecedentesDotacionPersonal();
            break;
        case 4:
            //ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES RECURSOS MATERIALES, INFRAESTRUCTURA Y EQUIPAMIENTO";
            GrabarAntecedentesInfraestructura();
            break;
        case 5:
           // ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES SEGURIDAD";
            GrabarAntecedentesSeguridad();
            break;
        case 6:
           // ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES SALUD";
            GrabarAntecedentesSalud();
            break;
        case 7:
           // ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES EDUCACIÓN";
            GrabarAntecedentesEducacion();
            break;
        case 8:
          //  ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES ALIMENTACIÓN";
            GrabarAntecedentesAlimentacion();
            break;
        case 9:
           // ActivarDesactivarBotonesGrabar(opc, true);
            tipo_antecedentes = "LOS ANTECEDENTES GESTIÓN DE RESIDENCIA";
            GrabarAntecedentesGestionResidencia();
            break;
        // AQUIHAR

        case 0:
            MensajeWARNING2("¿Confirma el registro de toda la ficha residecial folio " + CodFicha + "?. Si acepta, la ficha indicada no podrá ser modificada.", "GrabarFichaCompleta();", "ActivarDesactivarBotonesGrabar(0, false);")
            tipo_antecedentes = "LA FICHA RESIDENCIAL COMPLETA";
            ActivarDesactivarBotonesGrabar(opc, true);
            break;
    }
}
function GrabarFechaAplicacionFicha() {
    
    if (CodFicha != "" && CodFicha != "0") {
       // FechaAplicacion = $('#fechaaplicacionRegistro').html();
        /* remplazado por  */

        var FechaAplicacion = $('#ifechaaplicacionRegistro').val().toString();

        FechaAplicacion = FechaAplicacion.substring(6, 10) + FechaAplicacion.substring(3, 5) + FechaAplicacion.substring(0, 2);
        $.ajax({
            type: "POST",
            url: "FichaResidencial.aspx/GrabarFechaAplicacionFR",
            data: "{" +
                  "'CodFicha': '" + CodFicha + "'," +
                  "'FechaAplicacion': '" + FechaAplicacion + "'" +
                  "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                // Ajax OK !                   
            },
            error: function (r) {
                DesplegarExcepcionCriticaApp(r.responseText);
            }
        }).then(function (r) {
            
            //alert("GrabarFechaAplicacionFicha()");
            if ((r.d[0].error) == "") {
                if (r.d != "") {
                    $.each(r.d,
                        function () {}
                    );
                }
            }
            else {
                DesplegarExcepcionCriticaApp(r.d[0].error);
            }
        });
    }
}



function ObtenerFechaAplicacionFicha(CodFicha, CodEstadoFichaAUX) {

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerFechaAplicacionFicha",
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

        if ((r.d[0].error) == "") {

            $.each(r.d,
                function () {
                    var d = new Date();
                    var dia = d.getDate();
                    var mes = d.getMonth() + 1;
                    if (dia < 10) dia = "0" + dia;
                    if (mes < 10) mes = "0" + mes;
                    var diaActual = dia + '/' + mes + '/' + d.getFullYear();

                    if (this.FechaAplicacion != "")
                        {
                        $('#fechaaplicacionRegistro').html(this.FechaAplicacion);
                        document.getElementById("ifechaaplicacionRegistro").setAttribute('value', this.FechaAplicacion); //Sprint 2.1
                        }
                    else
                        {
                        $('#fechaaplicacionRegistro').html(diaActual);
                        document.getElementById("ifechaaplicacionRegistro").setAttribute('value', diaActual);            //Sprint 2.1
                        }
                }
            );

        }
        else {

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }


    });
}

function ActivarDesactivarBotonesGrabar(opc, bactivacion) {
    switch (opc) {
        case 1:
            $("#btn_antecedentesGenerales").attr({ "disabled": bactivacion });
            break;
        case 2:
            $("#btn_antecedentesPoblacionCapacidad").attr({ "disabled": bactivacion });
            break;
        case 3:
            $("#btn_antecedentesDotacionPersonal").attr({ "disabled": bactivacion });
            break;
        case 4:
            $("#btn_antecedentesInfraestructura").attr({ "disabled": bactivacion });
            break;
        case 5:
            $("#btn_antecedentesSeguridad").attr({ "disabled": bactivacion });
            break;
        case 6:
            $("#btn_antecedentesSalud").attr({ "disabled": bactivacion });
            break;
        case 7:
            $("#btn_antecedentesEducacion").attr({ "disabled": bactivacion });
            break;
        case 8:
            $("#btn_antecedentesAlimentacion").attr({ "disabled": bactivacion });
            break;
        case 9:
            $("#btn_antecedentesGestionResidencia").attr({ "disabled": bactivacion });
            break;
        case 0:
            $("#btn_antecedentesGenerales").attr({ "disabled": bactivacion });  //1
            $("#btn_antecedentesPoblacionCapacidad").attr({ "disabled": bactivacion });  //2
            $("#btn_antecedentesDotacionPersonal").attr({ "disabled": bactivacion }); //3
            $("#btn_antecedentesInfraestructura").attr({ "disabled": bactivacion }); //4
            $("#btn_antecedentesSeguridad").attr({ "disabled": bactivacion }); //5
            $("#btn_antecedentesSalud").attr({ "disabled": bactivacion }); //6
            $("#btn_antecedentesEducacion").attr({ "disabled": bactivacion }); //7
            $("#btn_antecedentesAlimentacion").attr({ "disabled": bactivacion }); //8
            $("#btn_antecedentesGestionResidencia").attr({ "disabled": bactivacion }); //9
            
            
            $("#btn_FichaGenera_01").attr({ "disabled": bactivacion }); // general tab general
            $("#btn_FichaGenera_02").attr({ "disabled": bactivacion }); // general tab poblacion capacidad
            $("#btn_FichaGenera_03").attr({ "disabled": bactivacion }); // general tab dotacion
            $("#btn_FichaGenera_04").attr({ "disabled": bactivacion }); // general tab infraestructura
            $("#btn_FichaGenera_05").attr({ "disabled": bactivacion }); // general tab seguridad
            $("#btn_FichaGenera_06").attr({ "disabled": bactivacion }); // general tab salud
            $("#btn_FichaGenera_07").attr({ "disabled": bactivacion }); // general tab educación
            $("#btn_FichaGenera_08").attr({ "disabled": bactivacion }); // general tab alimentacion
            $("#btn_FichaGenera_09").attr({ "disabled": bactivacion }); // general tab gestion residencia
            break;
    }
}

// INI CodigoHAR
function ActivarDesactivarCamposInput(opc, bactivacion) {
    switch (opc) {
        //Antecedentes Generales
        case 1:
 
            break;
        //Antecedentes de Población y Capacidad
        case 2:

            break;
        //Antecedentes de Dotacion de Personal
        case 3:
            $("#dotacion_101_Observaciones").attr({ "disabled": bactivacion });
            break;
        //Antecedentes Infractuctura
        case 4:
            $("#Infraest_049_observaciones").attr({ "disabled": bactivacion });
            break;
        //Antecedentes Seguridad
        case 5:
            $("#seguridad_011_observaciones").attr({ "disabled": bactivacion });
            break;
        //Antecedentes de Salud
        case 6:
            $("#salud_016_observaciones").attr({ "disabled": bactivacion });
            break;
        //Antecedentes de Educación
        case 7:
            $("#educacion_011_observaciones").attr({ "disabled": bactivacion });
            break;
        //Antecedentes de Alimentación
        case 8:
            $("#alimentacion_009_observacion").attr({ "disabled": bactivacion });
            break;
        //Antecedentes de Gestión de Residencia
        case 9:
            $("#gestionResid_017_observaciones").attr({ "disabled": bactivacion });
            break;
        case 0:
            $("#dotacion_101_Observaciones").attr({ "disabled": bactivacion }); //3
            $("#Infraest_049_observaciones").attr({ "disabled": bactivacion }); //4
            $("#seguridad_011_observaciones").attr({ "disabled": bactivacion }); //5
            $("#salud_016_observaciones").attr({ "disabled": bactivacion }); //6
            $("#educacion_011_observaciones").attr({ "disabled": bactivacion }); //7
            $("#alimentacion_009_observacion").attr({ "disabled": bactivacion }); //8
            $("#gestionResid_017_observaciones").attr({ "disabled": bactivacion }); //9
            break;
    }
}
// FIN CodigoHAR

function ResetearFormulario() {
    CodFicha = 0;
    document.getElementById("folio_pendiente").innerHTML = "&nbsp;";
    document.getElementById("periodo_ficha").innerHTML = "&nbsp;";
    //Reseteamos TAB General
    var arrVariablesGenerales = [
    "general_002_tipoOrganismo",
    "general_003_modeloIntervencion",
    "general_004_direccion",
    "general_005_telefonos",
    "general_006_region",
    "general_007_comuna",
    "general_008_email",
    "general_009_directorProyecto",
    "general_010_rut_director_proyecto",
    "general_012_pobvig_masculina",
    "general_013_pobvig_femenina",
    "general_014_plazaConv_masculina",
    "general_015_plazaConv_femenina",
    "general_016_otrasPlazas_masculina",
    "general_017_otrasPlazas_femenina",
    "general_018_totalNNApresent_masculina",
    "general_019_totalNNApresent_femenina",
    "general_020_totalNNAacercFamilia_masculina",
    "general_021_totalNNAacercFamilia_femenina",
    "general_022_totalResidenMayor_masculina",
    "general_023_totalResidenMayor_femenina",
    "general_024_abandonoSist_masculina",
    "general_025_abandonoSist_femenina",
    "general_026_hospitalizados_masculina",
    "general_027_hospitalizados_femenina",
    "general_028_totalNNAart80bis_masculina",
    "general_029_totalNNAart80bis_femenina",
    "general_030_totalNNAabandono_masculina",
    "general_031_totalNNAabandono_femenina",
    "general_032_totalNNA_suscep_adopcion_masculina",
    "general_033_totalNNA_suscep_adopcion_femenina",
    "general_034_totalNNA_enlace_adopcion_masculina",
    "general_035_totalNNA_enlace_adopcion_femenina",
    "general_036_totalNNA_causaini_adopcion_masculina",
    "general_037_totalNNA_causaini_adopcion_femenina",
    "general_038_totalNNA_adoslecente_chijo_masculina",
    "general_039_totalNNA_adoslecente_chijo_femenina",
    "pobvig_total",
    "plazaConv_total",
    "otrasPlazas_total",
    "totalNNApresent_total",
    "totalNNAacercFamilia_total",
    "totalResidenMayor_total",
    "abandonoSist_total",
    "hospitalizados_total",
    "totalNNAart80bis_total",
    "totalNNAabandono_total",
    "totalNNA_suscep_adopcion_total",
    "totalNNA_enlace_adopcion_total",
        "totalNNA_causaini_adopcion_total",

    "totalNNA_adoslecente_chijo_total"
    ];

    arrVariablesGenerales.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    //INDICADORES DE TEXTO POR ESCRIBIR EN CAMPO OBSERVACIONES
    $("#labelCaracteres_ObsDotacion").html("");



    $("#labelCaracteres_ObsInfra").html("");
    $("#labelCaracteres_ObsSeguridad").html("");
    $("#labelCaracteres_ObsSalud").html("");
    $("#labelCaracteres_ObsEducacion").html("");
    $("#labelCaracteres_ObsAlimentacion").html("");
    $("#labelCaracteres_ObsGestionRes").html("");

    //RESETEO LA TABLA DE NNA en ABANDONO
    var tableNNA_Abandono = document.getElementById("tbl_NNA_abandonados");
    var numeroFilas_TBL_NNA_abandonados = $("#tbl_NNA_abandonados tr").length;
    if (numeroFilas_TBL_NNA_abandonados > 2) {
        for (var i = numeroFilas_TBL_NNA_abandonados - 1; i > 1; i--) {
            tableNNA_Abandono.deleteRow(i);
        }
    }
    $("#general_030_totalNNAabandono_masculina").val(0);
    $("#general_031_totalNNAabandono_femenina").val(0);
    $("#general_038_totalNNA_adoslecente_chijo_masculina").val(0);
    $("#general_039_totalNNA_adoslecente_chijo_femenina").val(0);

    //RESETEO LA TABLA DE NNA ADOLESCENTES CON HIJOS
    var tableNNA_adolescente_con_hijos = document.getElementById("tbl_adolescente_con_hijos");
    var numeroFilas_TBL_NNA_tableNNA_adolescente_con_hijos = $("#tbl_adolescente_con_hijos tr").length;
    if (numeroFilas_TBL_NNA_tableNNA_adolescente_con_hijos > 2) {
        for (var i = numeroFilas_TBL_NNA_tableNNA_adolescente_con_hijos - 1; i > 1; i--) {
            tableNNA_adolescente_con_hijos.deleteRow(i);
        }
    }
    document.getElementById("btn_AgregarNNAabandono").disabled = true;
    document.getElementById("btn_EliminarAllNNAabandono").disabled = true;
    document.getElementById("btn_AgregarNNAadolescenteConHijo").disabled = true;
    document.getElementById("btn_EliminaAllNNAadolescenteConHijo").disabled = true;

    //Reseteamos TAB Antecedentes Poblacion y Capacidad
    var arrVariablesPoblacionCapacidad = [
        "poblacion_001_sel_reside_con_subven",
        "poblacion_002_sel_sexo_atendidos",
        "poblacion_003_sel_rango_etareo_predomina",
        "poblacion_004_poblacion_vigente",
        "poblacion_006_programa_apadrinimiento"
    ];
    arrVariablesPoblacionCapacidad.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("poblacion_005_tipo_vulneracion_mas_frecuente").value = "";
    document.getElementById("poblacion_005_tipo_vulneracion_mas_frecuente").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    ////Reseteamos TAB Antecedentes Dotación Personal

    var table = $('#gridDotacion').DataTable();
    var numeroDeFilas = table.data().length;

    for (var i = 0; i < numeroDeFilas; i++) {
            var data = table.row(i).data();
            var x = String(data.Select_Profesion).split("<select id=IdProfesion_");
            var IdProf = x[1].split(" ");
            var IdProf2 = IdProf[0];

            $("#IdCantidad_" + IdProf2).val("0");
            $("#IdHorasSemanales_" + IdProf2).val("0");
            $("#IdCodJornada_" + IdProf2).val(0);
    }
        document.getElementById("dotacion_101_Observaciones").value="";
    document.getElementById("dotacion_101_Observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //var arrVariablesDotacionPersonal = [
    //    "dotacion_003_sel_director_tipo_jornada", "dotacion_007_sel_asistente_tipo_jornada", "dotacion_011_sel_psicologo_tipo_jornada", "dotacion_015_sel_enfermero_tipo_jornada", "dotacion_019_sel_auxenfermero_tipo_jornada",
    //    "dotacion_023_sel_medico_tipo_jornada", "dotacion_027_sel_psiquiatra_tipo_jornada", "dotacion_031_sel_terapeuta_ocup_tipo_jornada", "dotacion_035_sel_kinesiologo_tipo_jornada", "dotacion_039_sel_nutricionista_tipo_jornada",
    //    "dotacion_043_sel_fonoaudiologo_tipo_jornada", "dotacion_047_sel_profesorEducaFisica_tipo_jornada", "dotacion_051_sel_psicopedagogo_tipo_jornada", "dotacion_055_sel_educadoraParvulos_tipo_jornada", "dotacion_059_sel_educadoraTratoDirecto_tipo_jornada",
    //    "dotacion_063_sel_manipuladorAlimentos_tipo_jornada", "dotacion_067_sel_apoyoAdministrativo_tipo_jornada", "dotacion_071_sel_personalAseo_tipo_jornada", "dotacion_075_sel_personalLavandería_tipo_joranada", "dotacion_079_sel_monitoresTalleristas_tipo_jornada",
    //    "dotacion_083_sel_alumnosPractica_tipo_jornada", "dotacion_087_sel_apoyoVoluntario_tipo_jornada", "dotacion_091_sel_Otros_tipo_jornada", "dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada", "dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada"
    //];
 
    //arrVariablesDotacionPersonal.forEach(
    //    function (currentValue, index) {
    //        document.getElementById(currentValue).selectedIndex = 0;
    //        document.getElementById(currentValue).disabled = true;
    //    }
    //);
    //var arrVariablesDotacionPersonal_2 = [
    //    "dotacion_004_sel_director_horas_semanales","dotacion_008_sel_asistente_horas_semanales","dotacion_012_sel_psicologo_horas_semanales","dotacion_016_sel_enfermero_horas_semanales","dotacion_020_sel_auxenfermero_horas_semanales",
    //    "dotacion_024_sel_medico_horas_semanales","dotacion_028_sel_psiquiatra_horas_semanales","dotacion_032_sel_terapeuta_ocup_horas_semanales","dotacion_036_sel_kinesiologo_horas_semanales","dotacion_040_sel_nutricionista_horas_semanales",
    //    "dotacion_044_sel_fonoaudiologo_horas_semanales","dotacion_048_sel_profesorEducaFisica_horas_semanales","dotacion_052_sel_psicopedagogo_horas_semanales","dotacion_056_sel_educadoraParvulos_horas_semanales","dotacion_060_sel_educadoraTratoDirecto_horas_semanales",
    //    "dotacion_064_sel_manipuladorAlimentos_horas_semanales","dotacion_068_sel_apoyoAdministrativo_horas_semanales","dotacion_072_sel_personalAseo_horas_semanales","dotacion_076_sel_personalLavandería_horas_semanales","dotacion_080_sel_monitoresTalleristas_horas_semanales",
    //    "dotacion_084_sel_alumnosPractica_horas_semanales","dotacion_088_sel_apoyoVoluntario_horas_semanales","dotacion_092_sel_Otros_horas_semanales","dotacion_096_sel_PersonalLicenciaMedica_horas_semanales","dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales"
    //];
    //arrVariablesDotacionPersonal_2.forEach(
    //    function (currentValue, index) {
    //        document.getElementById(currentValue).value = "0";
    //        document.getElementById(currentValue).disabled = true;
    //    }
    //);
    //var arrVariablesDotacionPersonal_3 = [
    //    "dotacion_001_sel_director_existe", "dotacion_005_sel_asistente_existe", "dotacion_009_sel_psicologo_existe", "dotacion_013_sel_enfermero_existe", "dotacion_017_sel_auxenfermero_existe",
    //    "dotacion_021_sel_medico_existe", "dotacion_025_sel_psiquiatra_existe", "dotacion_029_sel_terapeuta_ocup_existe", "dotacion_033_sel_kinesiologo_existe", "dotacion_037_sel_nutricionista_existe",
    //    "dotacion_041_sel_fonoaudiologo_existe", "dotacion_045_sel_profesorEducaFisica_existe", "dotacion_049_sel_psicopedagogo_existe", "dotacion_053_sel_educadoraParvulos_existe", "dotacion_057_sel_educadoraTratoDirecto_existe",
    //    "dotacion_061_sel_manipuladorAlimentos_existe", "dotacion_065_sel_apoyoAdministrativo_existe", "dotacion_069_sel_personalAseo_existe", "dotacion_073_sel_personalLavanderia_existe", "dotacion_077_sel_monitoresTalleristas_existe",
    //    "dotacion_081_sel_alumnosPractica_existe", "dotacion_085_sel_apoyoVoluntario_existe", "dotacion_089_sel_Otros_existe", "dotacion_093_sel_PersonalLicenciaMedica_existe", "dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe"
    //];
    //arrVariablesDotacionPersonal_3.forEach(
    //    function (currentValue, index) {
    //        /* Sprint 3 - 20191115 - gcastro  Se cambió -> document.getElementById(currentValue).selectedIndex = 2 por selectedIndex = 1;*/
    //        document.getElementById(currentValue).selectedIndex = 1; 
    //        document.getElementById(currentValue).disabled = true;
    //    }
    //);
    //var arrVariablesDotacionPersonal_4 = [
    //    "dotacion_002_sel_director_cantidad","dotacion_006_sel_asistente_cantidad","dotacion_010_sel_psicologo_cantidad","dotacion_014_sel_enfermero_cantidad","dotacion_018_sel_auxenfermero_cantidad",
    //    "dotacion_022_sel_medico_cantidad","dotacion_026_sel_psiquiatra_cantidad","dotacion_030_sel_terapeuta_ocup_cantidad","dotacion_034_sel_kinesiologo_cantidad","dotacion_038_sel_nutricionista_cantidad",
    //    "dotacion_042_sel_fonoaudiologo_cantidad","dotacion_046_sel_profesorEducaFisica_cantidad","dotacion_050_sel_psicopedagogo_cantidad","dotacion_054_sel_educadoraParvulos_cantidad","dotacion_058_sel_educadoraTratoDirecto_cantidad",
    //    "dotacion_062_sel_manipuladorAlimentos_cantidad","dotacion_066_sel_apoyoAdministrativo_cantidad","dotacion_070_sel_personalAseo_cantidad","dotacion_074_sel_personalLavandería_cantidad","dotacion_078_sel_monitoresTalleristas_cantidad",
    //    "dotacion_082_sel_alumnosPractica_cantidad","dotacion_086_sel_apoyoVoluntario_cantidad","dotacion_090_sel_Otros_cantidad","dotacion_094_sel_PersonalLicenciaMedica_cantidad","dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad"
    //];
    //arrVariablesDotacionPersonal_4.forEach(
    //    function (currentValue, index) {
    //        //document.getElementById(currentValue).selectedIndex = 0;
    //        $("#" + currentValue).val("");
    //        document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
    //    }
    //);
    //document.getElementById("dotacion_101_Observaciones").value="";
    //document.getElementById("dotacion_101_Observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //Reseteamos TAB infraestructura
    var arrVariablesinfraestructura_1 = [
       // "Infraest_001_ofi_admin_existe",
       // "Infraest_003_salaReuniones_existe",
       // "Infraest_005_salaRecepcion_existe",
        //"Infraest_007_espacioVisitas_existe",
       // "Infraest_009_salaMultiuso_existe",
      //  "Infraest_011_salaEstar_existe",
       // "Infraest_013_enfermeria_existe",
       // "Infraest_015_espacioRecreacional_existe",
       // "Infraest_019_areasVerdes_existe",
        //"Infraest_021_cocina_existe",
       // "Infraest_023_comedor_existe",
      //  "Infraest_025_Lavanderia_existe",
       // "Infraest_027_Dormitorio_existe",
     //   "Infraest_029_CamasNNA_existe",
       // "Infraest_031_closetLocker_existe",
        //"Infraest_033_banosPublico_existe",
        "Infraest_035_banosNNAadecuados_existe", "Infraest_037_duchasNNA_existe",

        //"Infraest_035_banosNNA_Funcionamiento_existe",
        //"Infraest_035_banosNNA_AcuerdoNormativa_existe",
        //"Infraest_035_banosNNA_Hombre_existe",
        //"Infraest_035_banosNNA_Mujer_existe",
        //"Infraest_035_banosNNA_mixto_existe",
       // "Infraest_037_duchasNNA_funcionamiento_existe",
       // "Infraest_037_duchasNNA_normativa_existe",
        //"Infraest_037_duchasNNA_hombres_existe",
        //"Infraest_037_duchasNNA_mujeres_existe",
       // "Infraest_037_duchasNNA_mixtos_existe" 
    ];
    arrVariablesinfraestructura_1.forEach(
        function (currentValue, index) {
            /* Sprint 3 - 2019-11-14 - gcastro - Se remplazó selectedIndex = 2 por selectedIndex = 0 */
            document.getElementById(currentValue).sele
            ctedIndex = 0;
        }
    );

    var arrVariablesinfraestructura_3 = [
   // "Infraest_035_banosNNA_Funcionamiento_cant",
   // "Infraest_035_banosNNA_AcuerdoNormativa_cant",   
   // "Infraest_035_banosNNA_Hombre_cant", 
   // "Infraest_035_banosNNA_Mujer_cant",
    //"Infraest_035_banosNNA_mixto_cant",
    //"Infraest_037_duchasNNA_funcionamiento_cant",
   // "Infraest_037_duchasNNA_normativa_cant",
   // "Infraest_037_duchasNNA_hombres_cant",
   // "Infraest_037_duchasNNA_mujeres_cant",
   // "Infraest_037_duchasNNA_mixtos_cant"
    ];
    arrVariablesinfraestructura_3.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );

    var arrVariablesinfraestructura_2 = [
        //"Infraest_002_ofi_admin_cantidad",
      //  "Infraest_004_salaReuniones_cantidad",
       // "Infraest_006_salaRecepcion_cantidad",
       // "Infraest_008_espacioVisitas_cantidad",
       // "Infraest_010_salaMultiuso_cantidad",
       // "Infraest_012_salaEstar_cantidad",
        //"Infraest_014_enfermeria_cantidad",
        //"Infraest_016_espacioRecreacional_cantidad",
       // "Infraest_020_areasVerdes_cantidad",
        //"Infraest_022_cocina_cantidad",
        //"Infraest_024_comedor_cantidad",
        //"Infraest_026_Lavanderia_cantidad",
        //"Infraest_028_Dormitorio_cantidad",
       // "Infraest_030_CamasNNA_cantidad",
       // "Infraest_032_closetLocker_cantidad",
        //"Infraest_034_banosPublico_cantidad"
    ];
    arrVariablesinfraestructura_2.forEach(
        function (currentValue, index) {
            //document.getElementById(currentValue).selectedIndex = 0;
            $("#" + currentValue).val("");
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    var arrVariablesinfraestructura_3 = [
    //"Infraest_039_ambientacionAcorde_existe",
    //"Infraest_040_vestuarioAdecuado_existe",
   // "Infraest_041_utilesAseoPersonalNNA_existe",
    //"Infraest_042_aguaCaliente_existe",
    "Infraest_043_estadoCalefonLlavesGas_existe",
    //"Infraest_044_sistemaCalefaccion_existe",
   //"Infraest_045_ventilacionAdecuada_existe",
    //"Infraest_046_AccesoDiscapacitados_existe",
    //"Infraest_047_InstalacionesHabilitadasDiscapacitados_existe",

    //"Infraest_040_vestuarioPersonalizado_existe",
   // "Infraest_043_CumpleNormaCalefon",
   // "Infraest_043_CumpleNormaLlaveGas"
    ];
    arrVariablesinfraestructura_3.forEach(
    function (currentValue, index) {
        document.getElementById(currentValue).selectedIndex = 0;
        document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
    }
    );

    document.getElementById("Infraest_036_banosNNAadecuados_cantidad").selectedIndex = 0;
    document.getElementById("Infraest_038_duchasNNA_cantidad").selectedIndex = 0;
    document.getElementById("Infraest_036_banosNNAadecuados_cantidad").disabled= true;
    document.getElementById("Infraest_038_duchasNNA_cantidad").disabled= true;


    document.getElementById("Infraest_049_observaciones").value="";
    document.getElementById("Infraest_049_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //Reseteamos TAB Seguridad
    var arrVariablesSeguridad = [
       // "seguridad_001_planEmergencia_existe",
        //"seguridad_002_simulacroEmergencia_existe",
       // "seguridad_003_planEmergenciaVisado_existe",
        //"seguridad_004_extintores_existe",
        //"seguridad_005_senaletica_existe",
        //"seguridad_006_viaEvacuacion_existe",
        "seguridad_007_capacitacionPersonal_existe",
        "seguridad_008_sanitizacion_existe",
        //"seguridad_009_sistemaElectrico_existe",
        //"seguridad_010_zonaSeguridad_existe",

        //"seguridad_007_capacitacionPersonalemergencia", 
        //"seguridad_007_capacitacionPersonalprimerosAux",
       // "seguridad_008_sanitizacion_",
        //"seguridad_008_sanitizacion_desratizacion",
       // "seguridad_008_sanitizacion_fumigacion"
    ];
    arrVariablesSeguridad.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("seguridad_011_observaciones").value="";
    document.getElementById("seguridad_011_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //Reseteamos TAB Salud
    var arrVariablesSalud_1 = [
        //"salud_009_sel_registroMedicamentoAdmin_a_NNA",
        //"salud_010_sel_protocoloAdmin_Medica_a_NNA",
       // "salud_011_sel_control_ginecologicoAdolescente",
        //"salud_012_sel_adolescenteNiegaControlGineco",
       // "salud_013_sel_adolescenteEmbarazada",

       // "salud_009_sel_resguardoMedicamentos",
        //"salud_009_sel_inventarioMedicamentos",
       //"salud_011_sel_control_nino_sano",
        //"salud_011_sel_control_adolescente_sano"
    ];
    arrVariablesSalud_1.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    var arrVariablesSalud_2 = [
        //"salud_001_NNA_inscritosCESFAM",
        //"salud_002_NNA_problematicaSaludMental",
        //"salud_003_NNA_problematicaSaludMentalsinDiag",
       // "salud_004_NNA_inscritosEnferCronica",
        //"salud_005_NNA_Discapacidad",
       // "salud_006_NNA_inscritosProblemSaludRecibeMedica",
        //"salud_007_NNA_problematicaSaludenTratamiento",
        
       // "salud_015_adolescenteEmbarazadaControlalDia_cantidad",

        //"salud_015_NNA_EsperaTransplantes", 
       // "salud_016_NNA_Transplantados",

       // "salud_008_NNA_consumoDrogas",
       // "salud_008_NNA_consumoAlcohol",
       // "salud_017_consumoDrogasyAlcohol"
    ];
    arrVariablesSalud_2.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("salud_016_observaciones").value="";
    document.getElementById("salud_016_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto
   // document.getElementById("IdParSalud_22").selectedIndex = 2; comentado temporalmente !!!

    //Reseteamos TAB Educación
    var arrVariablesEducacion_1 = [
        "educacion_007_sel_EspacioEstudio_y_Tareas_existe",
        "educacion_008_sel_materialBibliiografico_existe",
        "educacion_009_sel_computadores_existe",
        "educacion_010_sel_AccesoControladoInternet_existe",
        "educacion_002_NNA_NO_asisten_colegio_cantidad_motivo"
    ];
    arrVariablesEducacion_1.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    var arrVariablesEducacion_2 = [
        "educacion_001_NNA_asisten_colegio_cantidad",
        "educacion_002_NNA_NO_asisten_colegio_cantidad",
        "educacion_003_NNA_retrasoEscolar_cantidad",
        "educacion_004_NNA_matriculaCancelada_cantidad",
        "educacion_005_NNA_asisten_colegioDiferencial_cantidad",
        "educacion_006_NNA_asisten_colegioNivelacion_cantidad",

        "educacion_001_NNA_matriculados",
        "educacion_006_NNA_examenesLibres_cantidad"
    ];
    arrVariablesEducacion_2.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("educacion_011_observaciones").value="";
    document.getElementById("educacion_011_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //Reseteamos TAB Alimentacion
    var arrVariablesAlimentacion_1 = [
       // "alimentacion_001_sel_registroHonorarioEntregaAlimento_existe",
       // "alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe",
        //"alimentacion_003_sel_menuEspeciales_existe",
        //"alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe",
        //"alimentacion_005_sel_certifSanitarioManipuladores_existe",
        "alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe",

        //"alimentacion_006_sel_AlmacenaAlimento_existe", 
       // "alimentacion_006_sel_EstadoConserva_existe"
    ];
    arrVariablesAlimentacion_1.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    var arrVariablesAlimentacion_2 = [
      //  "alimentacion_007_comidas_lunes_a_viernes_cantidad",
       // "alimentacion_008_comidas_sabado_domingo_fest_cantidad"
    ];
    arrVariablesAlimentacion_2.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("alimentacion_009_observacion").value="";
    document.getElementById("alimentacion_009_observacion").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //Reseteamos TAB  Gestion Residencia
    var arrVariablesGestionResidencia_1 = [
        "gestionResid_002_sel_protocoloVisitas_existe",

        /* "gestionResid_001_sel_catastroRedes_existe"
        //"gestionResid_002_sel_protoVisitas_existe"
        // "gestionResid_002_sel_regisVisitas_existe"
        // "gestionResid_003_sel_protocoloAcogida_NNA_existe",
        // "gestionResid_004_sel_activi_autocuidadoEquipo_existe"
        //"gestionResid_005_sel_protocoloActua_intervencionCrisis_existe",
        // "gestionResid_007_sel_protocoloConvivencia_existe",
        //"gestionResid_008_sel_protocolo_PresentaReclamo_existe",
        // "gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe",
        //"gestionResid_010_sel_vinculacionResidencias_existe",
        //"gestionResid_011_sel_ProcesoFormacion_existe",
        //"gestionResid_012_sel_protocoloApadrinamiento_existe",
        //"gestionResid_014_sel_protocoloEgreso_NNA_existe
        //"gestionResid_015_sel_protocolo_derivacion_RedSalud_existe",
        //  "gestionResid_016_sel_activi_habilitaLaboral",
        // "gestionResid_016_sel_activi_vidaInpendiente"
        // "gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe",
        //  "gestionResid_004_sel_activi_autocuidadoEquipo_existe",
        // "gestionResid_013_sel_protocoloTrasladoResid_existe", */
       
        "gestionResid_016_sel_activi_habilitacionLaboral_existe",
       
        //"gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe",
        //"gestionResid_020_sel_entrevisto_NNA_reservada_existe"  
    ];
    arrVariablesGestionResidencia_1.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("gestionResid_017_observaciones").value="";
    //document.getElementById("gestionResid_018_observaciones_pobla_NNA_visita").value="";
    document.getElementById("gestionResid_017_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto
    //document.getElementById("gestionResid_018_observaciones_pobla_NNA_visita").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //BOTONES FICHA
    var arrBotones = [
       "btn_AgregarNNAabandono",
       "btn_EliminarAllNNAabandono",
       "btn_AgregarNNAadolescenteConHijo",
       "btn_EliminaAllNNAadolescenteConHijo",

       "btn_FichaGenera_01",
       "btn_antecedentesGenerales",

       "btn_FichaGenera_02",
       "btn_antecedentesPoblacionCapacidad",

       "btn_FichaGenera_03",
       "btn_antecedentesDotacionPersonal",

       "btn_FichaGenera_04",
       "btn_antecedentesInfraestructura",

       "btn_FichaGenera_05",
       "btn_antecedentesSeguridad",

       "btn_FichaGenera_06",
       "btn_antecedentesSalud",
        
       "btn_FichaGenera_07",
       "btn_antecedentesEducacion",

       "btn_FichaGenera_08",
       "btn_antecedentesAlimentacion",

       "btn_FichaGenera_09",
       "btn_antecedentesGestionResidencia"
    ];

    arrBotones.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).disabled = true;
        }
    );
    $("#poblacion_006_programa_apadrinimiento").val(0);
}
function ActivaBotonesBusquedaNNAResidenciaXProyecto(valueCbmProyecto) {

    var arrBotones = [
        "btn_AgregarNNAabandono",
        "btn_EliminarAllNNAabandono",
        "btn_AgregarNNAadolescenteConHijo",
        "btn_EliminaAllNNAadolescenteConHijo",

        "btn_FichaGenera_01",
        "btn_antecedentesGenerales",

        "btn_FichaGenera_02",
        "btn_antecedentesPoblacionCapacidad",

        "btn_FichaGenera_03",
        "btn_antecedentesDotacionPersonal",

        "btn_FichaGenera_04",
        "btn_antecedentesInfraestructura",

        "btn_FichaGenera_05",
        "btn_antecedentesSeguridad",

        "btn_FichaGenera_06",
        "btn_antecedentesSalud",
        
        "btn_FichaGenera_07",
        "btn_antecedentesEducacion",

        "btn_FichaGenera_08",
        "btn_antecedentesAlimentacion",

        "btn_FichaGenera_09",
        "btn_antecedentesGestionResidencia"
    ];

    if (valueCbmProyecto == "0") {
        arrBotones.forEach(
            function (currentValue, index) {
                document.getElementById(currentValue).disabled = true;
            }
        );
    }
    else {
        arrBotones.forEach(
            function (currentValue, index) {
                document.getElementById(currentValue).disabled = false;
            }
        );
    }
}
function ActivaCamposFichaResidenciaXProyecto(valueCbmProyecto) {

    var arrCamposFichaResidencial = [
    "general_002_tipoOrganismo",
    "general_003_modeloIntervencion",
    "general_004_direccion",
    "general_005_telefonos",
    "general_006_region",
    "general_007_comuna",
    "general_008_email",
    "general_009_directorProyecto",
    "general_010_rut_director_proyecto",
    "general_012_pobvig_masculina",
    "general_013_pobvig_femenina",
    "general_014_plazaConv_masculina",
    "general_015_plazaConv_femenina",
    "general_016_otrasPlazas_masculina",
    "general_017_otrasPlazas_femenina",
    "general_018_totalNNApresent_masculina",
    "general_019_totalNNApresent_femenina",
    "general_020_totalNNAacercFamilia_masculina",
    "general_021_totalNNAacercFamilia_femenina",
    "general_022_totalResidenMayor_masculina",
    "general_023_totalResidenMayor_femenina",
    "general_024_abandonoSist_masculina",
    "general_025_abandonoSist_femenina",
    "general_026_hospitalizados_masculina",
    "general_027_hospitalizados_femenina",
    "general_028_totalNNAart80bis_masculina",
    "general_029_totalNNAart80bis_femenina",
    "general_030_totalNNAabandono_masculina",
    "general_031_totalNNAabandono_femenina",
    "general_032_totalNNA_suscep_adopcion_masculina",
    "general_033_totalNNA_suscep_adopcion_femenina",
    "general_034_totalNNA_enlace_adopcion_masculina",
    "general_035_totalNNA_enlace_adopcion_femenina",
    "general_036_totalNNA_causaini_adopcion_masculina",
    "general_037_totalNNA_causaini_adopcion_femenina",
    "general_038_totalNNA_adoslecente_chijo_masculina",
    "general_039_totalNNA_adoslecente_chijo_femenina",
    "pobvig_total",
    "plazaConv_total",
    "otrasPlazas_total",
    "totalNNApresent_total",
    "totalNNAacercFamilia_total",
    "totalResidenMayor_total",
    "abandonoSist_total",
    "hospitalizados_total",
    "totalNNAart80bis_total",
    "totalNNAabandono_total",
    "totalNNA_suscep_adopcion_total",
    "totalNNA_enlace_adopcion_total",
    "totalNNA_causaini_adopcion_total",
    "totalNNA_adoslecente_chijo_total",

    "poblacion_001_sel_reside_con_subven",
    "poblacion_002_sel_sexo_atendidos",
    "poblacion_003_sel_rango_etareo_predomina",
    "poblacion_004_poblacion_vigente",
    "poblacion_006_programa_apadrinimiento",
    "poblacion_005_tipo_vulneracion_mas_frecuente",

    "dotacion_002_sel_director_cantidad", "dotacion_006_sel_asistente_cantidad", "dotacion_010_sel_psicologo_cantidad", "dotacion_014_sel_enfermero_cantidad", "dotacion_018_sel_auxenfermero_cantidad",
    "dotacion_022_sel_medico_cantidad", "dotacion_026_sel_psiquiatra_cantidad", "dotacion_030_sel_terapeuta_ocup_cantidad", "dotacion_034_sel_kinesiologo_cantidad", "dotacion_038_sel_nutricionista_cantidad",
    "dotacion_042_sel_fonoaudiologo_cantidad", "dotacion_046_sel_profesorEducaFisica_cantidad", "dotacion_050_sel_psicopedagogo_cantidad", "dotacion_054_sel_educadoraParvulos_cantidad", "dotacion_058_sel_educadoraTratoDirecto_cantidad",
    "dotacion_062_sel_manipuladorAlimentos_cantidad", "dotacion_066_sel_apoyoAdministrativo_cantidad", "dotacion_070_sel_personalAseo_cantidad", "dotacion_074_sel_personalLavandería_cantidad", "dotacion_078_sel_monitoresTalleristas_cantidad",
    "dotacion_082_sel_alumnosPractica_cantidad", "dotacion_086_sel_apoyoVoluntario_cantidad", "dotacion_090_sel_Otros_cantidad", "dotacion_094_sel_PersonalLicenciaMedica_cantidad", "dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad",
    "dotacion_101_Observaciones",

        "IdValor_1", "IdValor_2", "IdValor_3", "IdValor_4", "IdValor_5", "IdValor_6",
        "IdValor_7", "IdValor_8", "IdValor_9", "IdValor_10", "IdValor_11", "IdValor_12",
        "IdValor_13", "IdValor_14", "IdValor_15", "IdValor_16", "Infraest_036_banosNNAadecuados_cantidad", "Infraest_038_duchasNNA_cantidad",
    "IdParInfraestructura_27",
    "IdParInfraestructura_28",
    "IdParInfraestructura_30",
    "IdParInfraestructura_31",
    "Infraest_043_estadoCalefonLlavesGas_existe",
    "IdParInfraestructura_34",
    "IdParInfraestructura_35",
    "IdParInfraestructura_36",
    "IdParInfraestructura_37",
    "Infraest_049_observaciones",

    "IdParSeguridad_1",
    "IdParSeguridad_2",
    "IdParSeguridad_3",
    "IdParSeguridad_4",
    "IdParSeguridad_5",
    "IdParSeguridad_6",
    "seguridad_007_capacitacionPersonal_existe",
    "seguridad_008_sanitizacion_existe",
    "IdParSeguridad_12",
    "IdParSeguridad_13",
    "seguridad_011_observaciones",

    "IdParSalud_15",
    "IdParSalud_16",
    "IdParSalud_19",
    "IdParSalud_20",
    "IdParSalud_21",
    "IdParSalud_22",
    "IdParSaludValor_1",
    "IdParSaludValor_2",
    "IdParSaludValor_3",
    "IdParSaludValor_4",
    "IdParSaludValor_7",
    "IdParSaludValor_8",
    "IdParSaludValor_9",
    
    "IdParSaludValor_22",
    "salud_016_observaciones",

    "educacion_001_NNA_asisten_colegio_cantidad",

    "educacion_002_NNA_NO_asisten_colegio_cantidad",
    "educacion_002_NNA_NO_asisten_colegio_cantidad_motivo",

    "educacion_003_NNA_retrasoEscolar_cantidad",
    "educacion_004_NNA_matriculaCancelada_cantidad",
    "educacion_005_NNA_asisten_colegioDiferencial_cantidad",
    "educacion_006_NNA_asisten_colegioNivelacion_cantidad",
    "educacion_007_sel_EspacioEstudio_y_Tareas_existe",
    "educacion_008_sel_materialBibliiografico_existe",
    "educacion_009_sel_computadores_existe",
    "educacion_010_sel_AccesoControladoInternet_existe",
    "educacion_011_observaciones",

    "IdParAlimentacion_1",
    "IdParAlimentacion_2",
    "IdParAlimentacion_3",
    "IdParAlimentacion_4",
    "IdParAlimentacion_5",
    "alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe",
    "IdParAlimentacion_8",
    "IdParAlimentacion_9",
    "alimentacion_009_observacion",

    "idParGestionResidencia_1",
    "gestionResid_002_sel_protocoloVisitas_existe",
    "idParGestionResidencia_4",
    "idParGestionResidencia_5",
    "idParGestionResidencia_6",
    "idParGestionResidencia_7",
    "idParGestionResidencia_8",
    "idParGestionResidencia_9",
    "idParGestionResidencia_10",
    "idParGestionResidencia_11",
    "idParGestionResidencia_12",
    "idParGestionResidencia_13",
    "idParGestionResidencia_14",
    "idParGestionResidencia_15",
    "idParGestionResidencia_16",
    "gestionResid_016_sel_activi_habilitacionLaboral_existe",
    "gestionResid_017_observaciones",

    //CAMPOS NUEVOS
    "IdParInfraestructura_29",

    "IdValor_17",
    "IdValor_18",
    "IdValor_19",
    "IdValor_20",
    "IdValor_21",
    "IdValor_22",
    "IdValor_23",
    "IdValor_24",
    "IdValor_25",
    "IdValor_26",

    "IdParInfraestructura_32",
    "IdParInfraestructura_33",

    "IdParSeguridad_7",
    "IdParSeguridad_8",
    "IdParSeguridad_9",
    "IdParSeguridad_10",
    "IdParSeguridad_11",

    "IdParSaludValor_5",
    "IdParSaludValor_6",

    "IdParSaludValor_10",
    "IdParSaludValor_11",
    "IdParSaludValor_12",

    "IdParSalud_13", 
    "IdParSalud_14",
    "IdParSalud_17",  
    "IdParSalud_18",

    "educacion_001_NNA_matriculados",
    "educacion_006_NNA_examenesLibres_cantidad",

    "IdParAlimentacion_6",
    "IdParAlimentacion_7",

    "idParGestionResidencia_2",
    "idParGestionResidencia_3",
    "idParGestionResidencia_17",

    "idParGestionResidencia_18"
    //FIN CAMPOS NUEVOS


    //"gestionResid_018_observaciones_pobla_NNA_visita"
    //"gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe",
    //"gestionResid_020_sel_entrevisto_NNA_reservada_existe",

    ];

 
    if (valueCbmProyecto == "0") {
        arrCamposFichaResidencial.forEach(
            function (currentValue, index) {
                document.getElementById(currentValue).disabled = true;
            }
        );
    }
    else {
        arrCamposFichaResidencial.forEach(
            function (currentValue, index) {
                document.getElementById(currentValue).disabled = false;
            }
        );
    }

    //NUEVAS REGLAS
    if (document.getElementById("IdValor_17").value != "" && document.getElementById("IdValor_17").value != "0") {
        document.getElementById("IdValor_18").disabled = false;
    }
    else {
        document.getElementById("IdValor_18").disabled = true;
    }
    if (document.getElementById("IdValor_22").value != "" && document.getElementById("IdValor_22").value != "0") {
        document.getElementById("IdValor_23").disabled = false;
    }
    else {
        document.getElementById("IdValor_23").disabled = true;
    }
}
function StopValidaConexion() {
    conect = "";
    clearInterval(myVar);
}
$(document).ready(function () {
  
    CargaInicial();

    /*Carga inicial de tablas paramétricas*/
    //CargaParDotacionPersonalV2();
    //CargaParValoresDotacionPersonal();
    //CargaParDotacionPersonalV2();


    CargaParValores1HAR(0);
    CargaParValores1();
    CargaRangoEtareoAtencion1();
    CargaParInfraestructura();
  
    CargaParSeguridad();
    CargaParSalud();
    CargaParAlimentacion();
    CargaParGestionResidencia(); 

    opcioncarga = "REGISTROFICHARESIDENCIAL";

    $(document).keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
        }
        keybase = keybase + event.charCode;
        if (keybase == "1011131171051121119710810297") {
            $("#divconfig").attr({ "style": "display:block;" });
            $("#divconfig").html("<p style='font-size:14px;font-family:arial;'>" + AscChar("67:114:101:100:105:116:111:115:60:98:114:32:47:62:69:113:117:105:112:111:32:100:101:115:97:114:114:111:108:108:111:58:32:74:117:108:105:111:32:67:101:115:97:114:32:80:97:114:114:97:32:67:104:97:99:111:110:32:45:32:73:118:97:110:32:83:97:108:100:105:118:97:114:32:82:111:100:114:105:103:117:101:122:32:50:48:49:55:45:50:48:49:56") + "</p>");
        }
    });
});
function AscChar(t) { var arr = t.split(':'); var out = ""; for (k = 0; k <= arr.length - 1; k++) { out = out + String.fromCharCode(arr[k]); } return out; }
var keybase = "";
function InicializaKey() { keybase = ""; $("#divconfig").attr({ "style": "display:none;" }); }
$(window).on('beforeunload', function () {
    StopValidaConexion();
});
///////////////////
//FUNCIONES BACKEND
var dialogProgress;
var bar;
function GrabarFichaCompleta() {
    var sinDat1 = "", sinDat2 = "", sinDat3 = "", sinDat4 = "";
    var sinDat5 = "", sinDat6 = "", sinDat7 = "", sinDat8 = "", sinDat9 = "";
    var sinDatT = "";
    var dataParametros1 = "", dataParametros2 = "", dataParametros3 = "", dataParametros4 = "", dataParametros5 = "", dataParametros6 = "", dataParametros7 = "", dataParametros8 = "", dataParametros9 = "";

    CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;
    var CodEstadoFicha = 1;
//}
    var bValidar = false;

    ////----------------------------------------------------------------
    //PASO 1.1 RESCATO DATOS ANTECDENTES GENERALES Y VALIDO
    var PoblacionHombres = $("#general_012_pobvig_masculina").val();
    var PoblacionMujeres = $("#general_013_pobvig_femenina").val();
    var PlazasSenameHombres = $("#general_014_plazaConv_masculina").val();
    var PlazasSenameMujeres = $("#general_015_plazaConv_femenina").val();
    var OtrasPlazasHombres = $("#general_016_otrasPlazas_masculina").val();
    var OtrasPlazasMujeres = $("#general_017_otrasPlazas_femenina").val();
    var TotalNnaHombres = $("#general_018_totalNNApresent_masculina").val();
    var TotalNnaMujeres = $("#general_019_totalNNApresent_femenina").val();
    var TotalAcercamientoHombres = $("#general_020_totalNNAacercFamilia_masculina").val();
    var TotalAcercamientoMujeres = $("#general_021_totalNNAacercFamilia_femenina").val();
    var TotalMayoresHombres = $("#general_022_totalResidenMayor_masculina").val();
    var TotalMayoresMujeres = $("#general_023_totalResidenMayor_femenina").val();
    var FugaHombres = $("#general_024_abandonoSist_masculina").val();
    var FugaMujeres = $("#general_025_abandonoSist_femenina").val();
    var HospitalizadosHombres = $("#general_026_hospitalizados_masculina").val();
    var HosptitalizadosMujeres = $("#general_027_hospitalizados_femenina").val();
    var Art80Hombres = $("#general_028_totalNNAart80bis_masculina").val();
    var Art80Mujeres = $("#general_029_totalNNAart80bis_femenina").val();
    var AbandonoHombres = $("#general_030_totalNNAabandono_masculina").val();
    var AbandonoMujeres = $("#general_031_totalNNAabandono_femenina").val();
    var SentenciaAdopcionHombres = $("#general_032_totalNNA_suscep_adopcion_masculina").val();
    var SentenciaAdopcionMujeres = $("#general_033_totalNNA_suscep_adopcion_femenina").val();
    var EnlaceAdopcionHombres = $("#general_034_totalNNA_enlace_adopcion_masculina").val();
    var EnlaceAdopcionMujeres = $("#general_035_totalNNA_enlace_adopcion_femenina").val();
    var SinSentenciaHombres = $("#general_036_totalNNA_causaini_adopcion_masculina").val();
    var SinSentenciaMujeres = $("#general_037_totalNNA_causaini_adopcion_femenina").val();
    var AdolecentesHijosHombres = $("#general_038_totalNNA_adoslecente_chijo_masculina").val();
    var AdolecentesHijosMujeres = $("#general_039_totalNNA_adoslecente_chijo_femenina").val();

    //VALIDACION DE CAMPOS ANTECEDENTES GENERALES
    if (PoblacionHombres == "") { sinDat1 += "<br /> - Población vigente hombres"; bValidar = true; }
    if (PoblacionMujeres == "") { sinDat1 += "<br /> - Población vigente mujeres"; bValidar = true; }
    if (PlazasSenameHombres == "") { sinDat1 += "<br /> - Plazas Convenidas con SENAME hombres"; bValidar = true; }
    if (PlazasSenameMujeres == "") { sinDat1 += "<br /> - Plazas Convenidas con SENAME mujeres"; bValidar = true; }
    if (OtrasPlazasHombres == "") { sinDat1 += "<br /> - Otras Plazas no subvencionadas hombres"; bValidar = true; }
    if (OtrasPlazasMujeres == "") { sinDat1 += "<br /> - Otras Plazas no subvencionadas mujeres"; bValidar = true; }
    if (TotalNnaHombres == "") { sinDat1 += "<br /> - Total NNA Presentes hombres"; bValidar = true; }
    if (TotalNnaMujeres == "") { sinDat1 += "<br /> - Total NNA Presentes mujeres"; bValidar = true; }
    if (TotalAcercamientoHombres == "") { sinDat1 += "<br /> - Total NNA en Acercamiento Familar hombres"; bValidar = true; }
    if (TotalAcercamientoMujeres == "") { sinDat1 += "<br /> - Total NNA en Acercamiento Familar mujeres"; bValidar = true; }
    if (TotalMayoresHombres == "") { sinDat1 += "<br /> - Total de Residentes Mayores de Edad hombres"; bValidar = true; }
    if (TotalMayoresMujeres == "") { sinDat1 += "<br /> - Total de Residentes Mayores de Edad mujeres"; bValidar = true; }
    if (FugaHombres == "") { sinDat1 += "<br /> - Abandono de Sistema hombres"; bValidar = true; }
    if (FugaMujeres == "") { sinDat1 += "<br /> - Abandono de Sistema mujeres"; bValidar = true; }
    if (HospitalizadosHombres == "") { sinDat1 += "<br /> - Hospitalizados hombres"; bValidar = true; }
    if (HosptitalizadosMujeres == "") { sinDat1 += "<br /> - Hospitalizados mujeres"; bValidar = true; }
    if (Art80Hombres == "") { sinDat1 += "<br /> - Total NNA ingresados con Artículo 80 Bis hombres"; bValidar = true; }
    if (Art80Mujeres == "") { sinDat1 += "<br /> - Total NNA ingresados con Artículo 80 Bis mujeres"; bValidar = true; }
    if (AbandonoHombres == "") { sinDat1 += "<br /> - Total NNA en completo abandono hombres"; bValidar = true; }
    if (AbandonoMujeres == "") { sinDat1 += "<br /> - Total NNA en completo abandono mujeres"; bValidar = true; }
    if (SentenciaAdopcionHombres == "") { sinDat1 += "<br /> - Total de NNA declarados susceptibles de ser adoptados hombres"; bValidar = true; }
    if (SentenciaAdopcionMujeres == "") { sinDat1 += "<br /> - Total de NNA declarados susceptibles de ser adoptados mujeres"; bValidar = true; }
    if (EnlaceAdopcionHombres == "") { sinDat1 += "<br /> - Total de NNA con enlace de adopción hombres"; bValidar = true; }
    if (EnlaceAdopcionMujeres == "") { sinDat1 += "<br /> - Total de NNA con enlace de adopción mujeres"; bValidar = true; }
    if (SinSentenciaHombres == "") { sinDat1 += "<br /> - Total de NNA con causa iniciada por susceptibilidad de adopción hombres"; bValidar = true;}
    if (SinSentenciaMujeres == "") { sinDat1 += "<br /> - Total de NNA con causa iniciada por susceptibilidad de adopción mujeres"; bValidar = true; }
    if (AdolecentesHijosHombres == "") { sinDat1 += "<br /> - Total de adolescentes c/hijos recién nacidos/lactantes hombres"; bValidar = true; }
    if (AdolecentesHijosMujeres == "") { sinDat1 += "<br /> - Total de adolescentes c/hijos recién nacidos/lactantes mujeres"; bValidar = true; }

    if (bValidar) {
        sinDatT = "<br /><b>ANTECEDENTES GENERALES</b>" + sinDat1;
    }

    /**/
    ////----------------------------------------------------------------
    //PASO 1.2 RESCATO DATOS ANTECDENTES POBLACION Y CAPACIDAD Y VALIDO
    bValidar = false;
    var SubvencionSename = $("#poblacion_001_sel_reside_con_subven").val();
    var SexoAtiende = $("#poblacion_002_sel_sexo_atendidos").val();
    var RangoEtareo = $("#poblacion_003_sel_rango_etareo_predomina").val();
    var PoblacionVigente = $("#poblacion_004_poblacion_vigente").val();
    var TipoVulneracion = $("#poblacion_005_tipo_vulneracion_mas_frecuente").val();
    var ProgramaApadrinamiento = EliminaEspacios($("#poblacion_006_programa_apadrinimiento").val());

    //VALIDACION DE CAMPOS ANTECEDENTES POBLACION Y CAPACIDAD
    if (SubvencionSename == "-1") { sinDat2 += "<br /> - Residencia con Subvención SENAME"; bValidar = true; }
    if (SexoAtiende == "0") { sinDat2 += "<br /> - Sexo que atiende la Residencia"; bValidar = true; }
    if (RangoEtareo == "0") {
        sinDat2 += "<br /> - Rango etáreao de Atención"; bValidar = true; }
    if (PoblacionVigente == "0") { sinDat2 += "<br /> - Rango etáreao Predominante"; bValidar = true; }
    if (EliminaEspacios(TipoVulneracion) == "") { sinDat2 += "<br /> - Tipo de Vulneración más Frecuente"; bValidar = true; }
    if (ProgramaApadrinamiento == "-1") { sinDat2 += "<br /> - Programa de Apadrinamiento"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES POBLACION Y CAPACIDAD</b>" + sinDat2;
    }

    ////----------------------------------------------------------------
    //PASO 1.3 RESCATO DATOS ANTECDENTES DOTACION PERSONAL Y VALIDO
    bValidar = false;

    var table = $('#gridDotacion').DataTable();
    var numeroDeFilas = table.data().length;

    for (var i = 0; i < numeroDeFilas; i++) {
        var data = table.row(i).data();
        var x_ = String(data.Select_Profesion).split("<select id=IdProfesion_");

        var IdProf_ = x_[1].split(" ");
        var ValorCant_ = $("#IdCantidad_" + IdProf_[0]).val();
        var ValorHorasSemanales_ = $("#IdHorasSemanales_" + IdProf_[0]).val();
        var ValorJornada_ = $("#IdCodJornada_" + IdProf_[0]).val();

        if (ValorCant_ == "") {
            ValorCant_ = 0;
        }
        if (ValorHorasSemanales_ == "") {
            ValorHorasSemanales_ = 0;
        }
        if (ValorCant_ != "0") {
            if (ValorJornada_ == "0") { sinDat3 += "<br /> - Tipo " + data.D_Descripcion; bValidar = true; }
            if (ValorHorasSemanales_ == "0" || ValorHorasSemanales_ == "") { sinDat3 += "<br /> - Horas semanales " + data.D_Descripcion; bValidar = true; }

        }
    }

    var ObservacionesDotacion = replaceAll(EliminaEspacios(document.getElementById("dotacion_101_Observaciones").value), "'", "");
    if (ObservacionesDotacion == "") { sinDat3 += "<br /> - Observaciones de dotación de personal"; bValidar = true; }

    //var CantidadDirector = $("#dotacion_002_sel_director_cantidad").val();
    //var CantidadAsistenteSocial= $("#dotacion_006_sel_asistente_cantidad").val();
    //var CantidadPsicologo= $("#dotacion_010_sel_psicologo_cantidad").val();
    //var CantidadEnfermero= $("#dotacion_014_sel_enfermero_cantidad").val();
    //var CantidadAuxiliarEnfermeria= $("#dotacion_018_sel_auxenfermero_cantidad").val();
    //var CantidadMedico= $("#dotacion_022_sel_medico_cantidad").val();
    //var CantidadPsiquiatra= $("#dotacion_026_sel_psiquiatra_cantidad").val();
    //var CantidadTerapeutaOcupacional= $("#dotacion_030_sel_terapeuta_ocup_cantidad").val();
    //var CantidadKinesiolgo= $("#dotacion_034_sel_kinesiologo_cantidad").val();
    //var CantidadNutricionista= $("#dotacion_038_sel_nutricionista_cantidad").val();
    //var CantidadFonoaudiologo= $("#dotacion_042_sel_fonoaudiologo_cantidad").val();
    //var CantidadProfEducFisica= $("#dotacion_046_sel_profesorEducaFisica_cantidad").val();
    //var CantidadPsicopedagogo= $("#dotacion_050_sel_psicopedagogo_cantidad").val();
    //var CantidadEducadoraParvulos= $("#dotacion_054_sel_educadoraParvulos_cantidad").val();
    //var CantidadEducadorTratoDirecto= $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val();
    //var CantidadManipuladorAlimentos= $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val();
    //var CantidadApoyoAdm= $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val();
    //var CantidadPersonalAseo= $("#dotacion_070_sel_personalAseo_cantidad").val();
    //var CantidadPersonalLavanderia= $("#dotacion_074_sel_personalLavandería_cantidad").val();
    //var CantidadMonitoresTalleristas= $("#dotacion_078_sel_monitoresTalleristas_cantidad").val();
    //var CantidadAlumnosPractica= $("#dotacion_082_sel_alumnosPractica_cantidad").val();
    //var CantidadApoyoVoluntario= $("#dotacion_086_sel_apoyoVoluntario_cantidad").val();
    //var CantidadOtros= $("#dotacion_090_sel_Otros_cantidad").val();
    //var CantidadLicencia= $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val();
    //var CantidadSuplenteLicencia= $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val();

    ////tipo_jornada: 25
    //var CodJornadaDirector= $("#dotacion_003_sel_director_tipo_jornada").val();
    //var CodJornadaAsistenteSocial= $("#dotacion_007_sel_asistente_tipo_jornada").val();
    //var CodJornadaPsicologo = $("#dotacion_011_sel_psicologo_tipo_jornada").val();
    //var CodJornadaEnfermero= $("#dotacion_015_sel_enfermero_tipo_jornada").val();
    //var CodJornadaAuxiliarEnfermeria= $("#dotacion_019_sel_auxenfermero_tipo_jornada").val();
    //var CodJornadaMedico= $("#dotacion_023_sel_medico_tipo_jornada").val();
    //var CodJornadaPsiquiatra= $("#dotacion_027_sel_psiquiatra_tipo_jornada").val();
    //var CodJornadaTerapeutaOcupacional= $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada").val();
    //var CodJornadaKinesiologo= $("#dotacion_035_sel_kinesiologo_tipo_jornada").val();
    //var CodJornadaNutricionista= $("#dotacion_039_sel_nutricionista_tipo_jornada").val();
    //var CodJornadaFonoaudiologo= $("#dotacion_043_sel_fonoaudiologo_tipo_jornada").val();
    //var CodJornadaProfEducFisica= $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada").val();
    //var CodJornadaPsicopedagogo= $("#dotacion_051_sel_psicopedagogo_tipo_jornada").val();
    //var CodJornadaEducadoraParvulos= $("#dotacion_055_sel_educadoraParvulos_tipo_jornada").val();
    //var CodJornadaEducadorTratoDirecto= $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").val();
    //var CodJornadaManipuladorAlimentos= $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada").val();
    //var CodJornadaApoyoAdm= $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada").val();
    //var CodJornadaPersonalAseo= $("#dotacion_071_sel_personalAseo_tipo_jornada").val();
    //var CodJornadaPersonalLavanderia= $("#dotacion_075_sel_personalLavandería_tipo_joranada").val();
    //var CodJornadaMonitoresTalleristas= $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada").val();
    //var CodJornadaAlumnosPractica= $("#dotacion_083_sel_alumnosPractica_tipo_jornada").val();
    //var CodJornadaApoyoVoluntario= $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada").val();
    //var CodJornadaOtros= $("#dotacion_091_sel_Otros_tipo_jornada").val();
    //var CodJornadaLicencia= $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").val();
    //var CodJornadaSuplenteLicencia= $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").val();

    ////horas_semanales: 25
    //var HorasSemDirector= $("#dotacion_004_sel_director_horas_semanales").val();
    //var HorasSemAsistenteSocial = $("#dotacion_008_sel_asistente_horas_semanales").val();
    //var HorasSemPsicologo= $("#dotacion_012_sel_psicologo_horas_semanales").val();
    //var HorasSemEnfermero= $("#dotacion_016_sel_enfermero_horas_semanales").val();
    //var HorasSemAuxiliarEnfermeria= $("#dotacion_020_sel_auxenfermero_horas_semanales").val();
    //var HorasSemMedico= $("#dotacion_024_sel_medico_horas_semanales").val();
    //var HorasSemPsiquiatra= $("#dotacion_028_sel_psiquiatra_horas_semanales").val();
    //var HorasSemTerapeutaOcupacional= $("#dotacion_032_sel_terapeuta_ocup_horas_semanales").val();
    //var HorasSemKinesiologo= $("#dotacion_036_sel_kinesiologo_horas_semanales").val();
    //var HorasSemNutricionista= $("#dotacion_040_sel_nutricionista_horas_semanales").val();
    //var HorasSemFonoaudiolgo= $("#dotacion_044_sel_fonoaudiologo_horas_semanales").val();
    //var HorasSemProfEducFisica= $("#dotacion_048_sel_profesorEducaFisica_horas_semanales").val();
    //var HorasSemPsicopedagogo= $("#dotacion_052_sel_psicopedagogo_horas_semanales").val();
    //var HorasSemEducadoraParvulos= $("#dotacion_056_sel_educadoraParvulos_horas_semanales").val();
    //var HorasSemEducadorTratoDirecto= $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales").val();
    //var HorasSemManipuladorAlimentos= $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales").val();
    //var HorasSemApoyoAdm= $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales").val();
    //var HorasSemPersonalAseo= $("#dotacion_072_sel_personalAseo_horas_semanales").val();
    //var HorasSemPersonalLavanderia= $("#dotacion_076_sel_personalLavandería_horas_semanales").val();
    //var HorasSemMonitoresTalleristas= $("#dotacion_080_sel_monitoresTalleristas_horas_semanales").val();
    //var HorasSemAlumnosPractica= $("#dotacion_084_sel_alumnosPractica_horas_semanales").val();
    //var HorasSemApoyoVoluntario= $("#dotacion_088_sel_apoyoVoluntario_horas_semanales").val();
    //var HorasSemOtros= $("#dotacion_092_sel_Otros_horas_semanales").val();
    //var HorasSemLicencia= $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").val();
    //var HorasSemSuplenteLicencia= $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").val();
    //var ObservacionesDotacion = replaceAll(EliminaEspacios(document.getElementById("dotacion_101_Observaciones").value),"'","");

    ////VALIDACION DE CAMPOS ANTECEDENTES DOTACION PERSONAL
    //if (CantidadDirector != "0") {
    //    if (CodJornadaDirector == "0") { sinDat3 += "<br /> - Tipo jornada director"; bValidar = true; }
    //    if (HorasSemDirector == "0" || HorasSemDirector == "") { sinDat3 += "<br /> - Horas semanales director"; bValidar = true; }
    //}
    //if (CantidadAsistenteSocial != "0") {
    //    if (CodJornadaAsistenteSocial == "0") { sinDat3 += "<br /> - Tipo jornada asistente social"; bValidar = true; }
    //    if (HorasSemAsistenteSocial == "0" || HorasSemAsistenteSocial == "") { sinDat3 += "<br /> - Horas semanales asistente social"; bValidar = true; }
    //}
    //if (CantidadPsicologo != "0") {
    //    if (CodJornadaPsicologo == "0") { sinDat3 += "<br /> - Tipo jornada psicologo"; bValidar = true; }
    //    if (HorasSemPsicologo == "0" || HorasSemPsicologo == "") { sinDat3 += "<br /> - Horas semanales psicologo"; bValidar = true; }
    //}
    //if (CantidadEnfermero != "0") {
    //    if (CodJornadaEnfermero == "0") { sinDat3 += "<br /> - Tipo jornada enfermero"; bValidar = true; }
    //    if (HorasSemEnfermero == "0" || HorasSemEnfermero == "") { sinDat3 += "<br /> - Horas semanales enfermero"; bValidar = true; }
    //}
    //if (CantidadAuxiliarEnfermeria != "0") {
    //    if (CodJornadaAuxiliarEnfermeria == "0") { sinDat3 += "<br /> - Tipo jornada auxiliar enfermeria"; bValidar = true; }
    //    if (HorasSemAuxiliarEnfermeria == "0" || HorasSemAuxiliarEnfermeria == "") { sinDat3 += "<br /> - Horas semanales auxiliar enfermeria"; bValidar = true; }
    //}
    //if (CantidadMedico != "0") {
    //    if (CodJornadaMedico == "0") { sinDat3 += "<br /> - Tipo jornada médico"; bValidar = true; }
    //    if (HorasSemMedico == "0" || HorasSemMedico == "") { sinDat3 += "<br /> - Horas semanales médico"; bValidar = true; }
    //}
    //if (CantidadPsiquiatra != "0") {
    //    if (CodJornadaPsiquiatra == "0") { sinDat3 += "<br /> - Tipo jornada psiquiatra"; bValidar = true; }
    //    if (HorasSemPsiquiatra == "0" || HorasSemPsiquiatra == "") { sinDat3 += "<br /> - Horas semanales psiquiatra"; bValidar = true; }
    //}
    //if (CantidadTerapeutaOcupacional != "0") {
    //    if (CodJornadaTerapeutaOcupacional == "0") { sinDat3 += "<br /> - Tipo jornada terapeuta ocupacional"; bValidar = true; }
    //    if (HorasSemTerapeutaOcupacional == "0" || HorasSemTerapeutaOcupacional == "") { sinDat3 += "<br /> - Horas semanales terapeuta ocupacional"; bValidar = true; }
    //}
    //if (CantidadKinesiolgo != "0") {
    //    if (CodJornadaKinesiologo == "0") { sinDat3 += "<br /> - Tipo jornada kinesiolgo"; bValidar = true; }
    //    if (HorasSemKinesiologo == "0" || HorasSemKinesiologo == "") { sinDat3 += "<br /> - Horas semanales kinesiolgo"; bValidar = true; }
    //}
    //if (CantidadNutricionista != "0") {
    //    if (CodJornadaNutricionista == "0") { sinDat3 += "<br /> - Tipo jornada nutricionista"; bValidar = true; }
    //    if (HorasSemNutricionista == "0" || HorasSemNutricionista == "") { sinDat3 += "<br /> - Horas semanales nutricionista"; bValidar = true; }
    //}
    //if (CantidadFonoaudiologo != "0") {
    //    if (CodJornadaFonoaudiologo == "0") { sinDat3 += "<br /> - Tipo jornada fonoaudiologo"; bValidar = true; }
    //    if (HorasSemFonoaudiolgo == "0" || HorasSemFonoaudiolgo == "") { sinDat3 += "<br /> - Horas semanales fonoaudiologo"; bValidar = true; }
    //}
    //if (CantidadProfEducFisica != "0") {
    //    if (CodJornadaProfEducFisica == "0") { sinDat3 += "<br /> - Tipo jornada profesor(a) de educación física"; bValidar = true; }
    //    if (HorasSemProfEducFisica == "0" || HorasSemProfEducFisica == "") { sinDat3 += "<br /> - Horas semanales profesor(a) de educación física"; bValidar = true; }
    //}
    //if (CantidadPsicopedagogo != "0") {
    //    if (CodJornadaPsicopedagogo == "0") { sinDat3 += "<br /> - Tipo jornada psicopedagogo"; bValidar = true; }
    //    if (HorasSemPsicopedagogo == "0" || HorasSemPsicopedagogo == "") { sinDat3 += "<br /> - Horas semanales psicopedagogo"; bValidar = true; }
    //}
    //if (CantidadEducadoraParvulos != "0") {
    //    if (CodJornadaEducadoraParvulos == "0") { sinDat3 += "<br /> - Tipo jornada educador(a) párvulos"; bValidar = true; }
    //    if (HorasSemEducadoraParvulos == "0" || HorasSemEducadoraParvulos == "") { sinDat3 += "<br /> - Horas semanales educador(a) párvulos"; bValidar = true; }
    //}
    //if (CantidadEducadorTratoDirecto != "0") {
    //    if (CodJornadaEducadorTratoDirecto == "0") { sinDat3 += "<br /> - Tipo jornada educador trato directo"; bValidar = true; }
    //    if (HorasSemEducadorTratoDirecto == "0" || HorasSemEducadorTratoDirecto == "") { sinDat3 += "<br /> - Horas semanales educador trato directo"; bValidar = true; }
    //}
    //if (CantidadManipuladorAlimentos != "0") {
    //    if (CodJornadaManipuladorAlimentos == "0") { sinDat3 += "<br /> - Tipo jornada manipulador de alimentos"; bValidar = true; }
    //    if (HorasSemManipuladorAlimentos == "0" || HorasSemManipuladorAlimentos == "") { sinDat3 += "<br /> - Horas semanales manipulador de alimentos"; bValidar = true; }
    //}
    //if (CantidadApoyoAdm != "0") {
    //    if (CodJornadaApoyoAdm == "0") { sinDat3 += "<br /> - Tipo jornada apoyo administrativo"; bValidar = true; }
    //    if (HorasSemApoyoAdm == "0" || HorasSemApoyoAdm == "") { sinDat3 += "<br /> - Horas semanales apoyo administrativo"; bValidar = true; }
    //}
    //if (CantidadPersonalAseo != "0") {
    //    if (CodJornadaPersonalAseo == "0") { sinDat3 += "<br /> - Tipo jornada personal de aseo"; bValidar = true; }
    //    if (HorasSemPersonalAseo == "0" || HorasSemPersonalAseo == "") { sinDat3 += "<br /> - Horas semanales personal de aseo"; bValidar = true; }
    //}
    //if (CantidadPersonalLavanderia != "0") {
    //    if (CodJornadaPersonalLavanderia == "0") { sinDat3 += "<br /> - Tipo jornada personal de lavanderia"; bValidar = true; }
    //    if (HorasSemPersonalLavanderia == "0" || HorasSemPersonalLavanderia == "") { sinDat3 += "<br /> - Horas semanales personal de lavanderia"; bValidar = true; }
    //}
    //if (CantidadMonitoresTalleristas != "0") {
    //    if (CodJornadaMonitoresTalleristas == "0") { sinDat3 += "<br /> - Tipo jornadaMonitores Talleristas"; bValidar = true; }
    //    if (HorasSemMonitoresTalleristas == "0" || HorasSemMonitoresTalleristas == "") { sinDat3 += "<br /> - Horas semanales monitores talleristas"; bValidar = true; }
    //}
    //if (CantidadAlumnosPractica != "0") {
    //    if (CodJornadaAlumnosPractica == "0") { sinDat3 += "<br /> - Tipo jornada alumnos en práctica"; bValidar = true; }
    //    if (HorasSemAlumnosPractica == "0" || HorasSemAlumnosPractica == "") { sinDat3 += "<br /> -Horas semanales alumnos en práctica"; bValidar = true; }
    //}
    //if (CantidadApoyoVoluntario != "0") {
    //    if (CodJornadaApoyoVoluntario == "0") { sinDat3 += "<br /> - Tipo jornada apoyo voluntario"; bValidar = true; }
    //    if (HorasSemApoyoVoluntario == "0" || HorasSemApoyoVoluntario == "") { sinDat3 += "<br /> - Horas semanales apoyo voluntario"; bValidar = true; }
    //}
    //if (CantidadOtros != "0") {
    //    if (CodJornadaOtros == "0") { sinDat3 += "<br /> - Tipo jornada otros"; bValidar = true; }
    //    if (HorasSemOtros == "0" || HorasSemOtros == "") { sinDat3 += "<br /> - Horas semanales otros"; bValidar = true; }
    //}
    //if (CantidadLicencia != "0") {
    //    if (CodJornadaLicencia == "0") { sinDat3 += "<br /> - Tipo jornada personal con licencia médica"; bValidar = true; }
    //    if (HorasSemLicencia == "0" || HorasSemLicencia == "") { sinDat3 += "<br /> - Horas semanales personal con licencia médica"; bValidar = true; }
    //}
    //if (CantidadSuplenteLicencia != "0") {
    //    if (CodJornadaSuplenteLicencia == "0") { sinDat3 += "<br /> - Tipo jornada personal con licencia (con suplente)"; bValidar = true; }
    //    if (HorasSemSuplenteLicencia == "0" || HorasSemSuplenteLicencia == "") { sinDat3 += "<br /> - Horas semanales personal con licencia (con suplente)"; bValidar = true; }
    //}
    //if (ObservacionesDotacion == "") { sinDat3 += "<br /> - Observaciones de dotación de personal"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES DOTACIÓN DE PERSONAL</b>" + sinDat3;
    }

    ////----------------------------------------------------------------
    //PASO 1.4 RESCATO DATOS ANTECDENTES INFRAESTRUCUTURA Y VALIDO
    bValidar = false;

    //var cantidadOficAdm = $("#IdValor_1").val();
    //var cantidadSalaReunion = $("#IdValor_2").val();
    //var cantidadSalaRecepcion = $("#IdValor_3").val();
    //var cantidadEspaciosVisitas = $("#IdValor_4").val();
    //var cantidadSalaTalleres = $("#IdValor_5").val();
    //var cantidadSalaLiving = $("#IdValor_6").val();
    //var cantidadEnfermeria = $("#IdValor_7").val();
    //var cantidadRecreacion = $("#IdValor_8").val();
    //var cantidadAreasVerdes = $("#IdValor_9").val();
    //var cantidadCocina = $("#IdValor_10").val();
    //var cantidadComedor = $("#IdValor_11").val();
    //var cantidadLavanderia = $("#IdValor_12").val();
    //var cantidadDormitoriosNNA = $("#IdValor_13").val();
    //var cantidadCamasNNA = $("#IdValor_14").val();
    //var cantidadColsetLockers = $("#IdValor_15").val();
    //var cantidadBañosPublicos = $("#IdValor_16").val();

    //var cantidadBañosNNA = $("#Infraest_036_banosNNAadecuados_cantidad").val();
    //var canBañosFunciNNA = $("#IdValor_17").val();
    //var canBañosNormaNNA = $("#IdValor_18").val();
    //var canBañosHombrNNA = $("#IdValor_19").val();
    //var canBañosMujerNNA = $("#IdValor_20").val();
    //var canBañosMixtoNNA = $("#IdValor_21").val();

    //var cantidadDuchasNNA = $("#Infraest_038_duchasNNA_cantidad").val();
    //var canDuchasFunciNNA = $("#IdValor_22").val();
    //var canDuchasNormaNNA = $("#IdValor_23").val();
    //var canDuchasHombrNNA = $("#IdValor_24").val();
    //var canDuchasMujerNNA = $("#IdValor_25").val();
    //var canDuchasMixtoNNA = $("#IdValor_26").val();

    //var ambienteAcorde = $("#IdParInfraestructura_27").val();

    //var vestuarioAdecuado = $("#IdParInfraestructura_28").val();
    //var vestuarioPersonalizado = $("#IdParInfraestructura_29").val();
    
    //var utilesAseo = $("#IdParInfraestructura_30").val();
    //var aguaCaliente = $("#IdParInfraestructura_31").val();

    //var calefonGas = $("#Infraest_043_estadoCalefonLlavesGas_existe").val();
    //var calefonNorma = $("#IdParInfraestructura_32").val();
    //var llaveGasNorma = $("#IdParInfraestructura_33").val();
    
    //var sistemaCalefacion = $("#IdParInfraestructura_34").val();
    //var ventilacion = $("#IdParInfraestructura_35").val();
    //var accesoDiscapacitados = $("#IdParInfraestructura_36").val();
    //var habilitaDiscapacitados = $("#IdParInfraestructura_37").val();
    //var observacionesInfraestructura = replaceAll(EliminaEspacios(document.getElementById("Infraest_049_observaciones").value), "'", "");
    var cantidadOficAdm = $("#IdValor_1").val() == undefined ? -1 : $("#IdValor_1").val();
    var cantidadSalaReunion = $("#IdValor_2").val() == undefined ? -1 : $("#IdValor_2").val();
    var cantidadSalaRecepcion = $("#IdValor_3").val() == undefined ? -1 : $("#IdValor_3").val();
    var cantidadEspaciosVisitas = $("#IdValor_4").val() == undefined ? -1 : $("#IdValor_4").val();
    var cantidadSalaTalleres = $("#IdValor_5").val() == undefined ? -1 : $("#IdValor_5").val();
    var cantidadSalaLiving = $("#IdValor_6").val() == undefined ? -1 : $("#IdValor_6").val();
    var cantidadEnfermeria = $("#IdValor_7").val() == undefined ? -1 : $("#IdValor_7").val();
    var cantidadRecreacion = $("#IdValor_8").val() == undefined ? -1 : $("#IdValor_8").val();
    var cantidadAreasVerdes = $("#IdValor_9").val() == undefined ? -1 : $("#IdValor_9").val();
    var cantidadCocina = $("#IdValor_10").val() == undefined ? -1 : $("#IdValor_10").val();
    var cantidadComedor = $("#IdValor_11").val() == undefined ? -1 : $("#IdValor_11").val();
    var cantidadLavanderia = $("#IdValor_12").val() == undefined ? -1 : $("#IdValor_12").val();
    var cantidadDormitoriosNNA = $("#IdValor_13").val() == undefined ? -1 : $("#IdValor_13").val();
    var cantidadCamasNNA = $("#IdValor_14").val() == undefined ? -1 : $("#IdValor_14").val();
    var cantidadColsetLockers = $("#IdValor_15").val() == undefined ? -1 : $("#IdValor_15").val();
    var cantidadBañosPublicos = $("#IdValor_16").val() == undefined ? -1 : $("#IdValor_16").val();
    var cantidadBañosNNA = $("#Infraest_036_banosNNAadecuados_cantidad").val(); // == undefined ? -1 : $("#IdValor_").val();
    var cantidadDuchasNNA = $("#Infraest_038_duchasNNA_cantidad").val(); // == undefined ? -1 : $("#IdValor_").val();

    var AmbienteAcorde = $("#IdParInfraestructura_27").val() == undefined ? -1 : $("#IdParInfraestructura_27").val();
    var vestuarioAdecuado = $("#IdParInfraestructura_28").val() == undefined ? -1 : $("#IdParInfraestructura_28").val();
    var utilesAseo = $("#IdParInfraestructura_30").val() == undefined ? -1 : $("#IdParInfraestructura_30").val();
    var aguaCaliente = $("#IdParInfraestructura_31").val() == undefined ? -1 : $("#IdParInfraestructura_31").val();
    var calefonGas = $("#Infraest_043_estadoCalefonLlavesGas_existe").val(); // == undefined ? -1 : $("#IdValor_").val();
    var sistemaCalefacion = $("#IdParInfraestructura_34").val() == undefined ? -1 : $("#IdParInfraestructura_34").val();
    var ventilacion = $("#IdParInfraestructura_35").val() == undefined ? -1 : $("#IdParInfraestructura_35").val();
    var accesoDiscapacitados = $("#IdParInfraestructura_36").val() == undefined ? -1 : $("#IdParInfraestructura_36").val();
    var habilitaDiscapacitados = $("#IdParInfraestructura_37").val() == undefined ? -1 : $("#IdParInfraestructura_37").val();
    var observaciones = replaceAll(EliminaEspacios(document.getElementById("Infraest_049_observaciones").value), "'", "");

    var BanosNNAenFuncionamiento = $("#IdValor_17").val() == undefined ? -1 : $("#IdValor_17").val();
    var BanosNNAdeacuerdoNormativa = $("#IdValor_18").val() == undefined ? -1 : $("#IdValor_18").val();
    var BanosNNAdehombres = $("#IdValor_19").val() == undefined ? -1 : $("#IdValor_19").val();
    var BanosNNAdemujeres = $("#IdValor_20").val() == undefined ? -1 : $("#IdValor_20").val();
    var BanosNNAmixtos = $("#IdValor_21").val() == undefined ? -1 : $("#IdValor_21").val();
    var DuchasNNAFuncionamiento = $("#IdValor_22").val() == undefined ? -1 : $("#IdValor_22").val();
    var DuchasNNAdeacuerdoNormativa = $("#IdValor_23").val() == undefined ? -1 : $("#IdValor_23").val();
    var DuchasNNAdehombres = $("#IdValor_24").val() == undefined ? -1 : $("#IdValor_24").val();
    var DuchasNNAdemujeres = $("#IdValor_25").val() == undefined ? -1 : $("#IdValor_25").val();
    var DuchasNNAmixtas = $("#IdValor_26").val() == undefined ? -1 : $("#IdValor_26").val();
    var VestuarioPersonalizadoNNA = $("#IdParInfraestructura_29").val() == undefined ? -1 : $("#IdParInfraestructura_29").val();
    var CumpleNormativaCalefon = $("#IdParInfraestructura_32").val() == undefined ? -1 : $("#IdParInfraestructura_32").val();
    var CumpleNormativaLlaveGas = $("#IdParInfraestructura_33").val() == undefined ? -1 : $("#IdParInfraestructura_33").val();

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
    //VALIDACION DE CAMPOS ANTECEDENTES INFRAESTRUCUTURA

    //BAÑOS NNA
    if (BanosNNAdehombres == "") BanosNNAdehombres = "0";
    if (BanosNNAdemujeres == "") BanosNNAdemujeres = "0";
    if (BanosNNAmixtos == "") BanosNNAmixtos = "0";

    if (BanosNNAenFuncionamiento != "") {
        if (BanosNNAenFuncionamiento != "0") {
            if (parseInt(BanosNNAenFuncionamiento, 10) != (parseInt(BanosNNAdehombres, 10) + parseInt(BanosNNAdemujeres, 10) + parseInt(BanosNNAmixtos, 10))) {
                sinDat4 += "<br /> - Suma de baños NNA hombres, mujeres y mixto no es igual a baños en funcionamiento."; bValidar = true;
            }
        }
        else {
            if ((parseInt(BanosNNAdehombres, 10) + parseInt(BanosNNAdemujeres, 10) + parseInt(BanosNNAmixtos, 10)) != 0) {
                sinDat4 += "<br /> - Indicó baños NNA hombres, mujeres y/o mixto, pero no ingreso baños en funcionamiento."; bValidar = true;
            }
        }
    }
    else {
        if ((parseInt(BanosNNAdehombres, 10) + parseInt(BanosNNAdemujeres, 10) + parseInt(BanosNNAmixtos, 10)) != 0) {
            sinDat4 += "<br /> - Indicó baños NNA hombres, mujeres y/o mixto, pero no ingreso baños en funcionamiento."; bValidar = true;
        }


        else {
            sinDat4 += "<br />- Baños NNA en funcionamiento<br />- Baños NNA hombres<br />- Baños NNA mujeres<br />- Baños NNA mixtos"; bValidar = true;
        }
    }
    //DUCHAS NNA
    if (DuchasNNAdehombres == "") DuchasNNAdehombres = "0";
    if (DuchasNNAdemujeres == "") DuchasNNAdemujeres = "0";
    if (DuchasNNAmixtas == "") DuchasNNAmixtas = "0";

    if (DuchasNNAFuncionamiento != "") {
        if (DuchasNNAFuncionamiento != "0") {
            if (parseInt(DuchasNNAFuncionamiento, 10) != (parseInt(DuchasNNAdehombres, 10) + parseInt(DuchasNNAdemujeres, 10) + parseInt(DuchasNNAmixtas, 10))) {
                sinDat4 += "<br /> - Suma de duchas para NNA hombres, mujeres y mixto no es igual a duchas para NNA en funcionamiento."; bValidar = true;
            }
        }
        else {
            if ((parseInt(DuchasNNAdehombres, 10) + parseInt(DuchasNNAdemujeres, 10) + parseInt(DuchasNNAmixtas, 10)) != 0) {
                sinDat4 += "<br /> - Indicó duchas para NNA hombres, mujeres y/o mixtas, pero no ingreso duchas para NNA en funcionamiento."; bValidar = true;
            }
        }
    }
    else {
        if ((parseInt(DuchasNNAdehombres, 10) + parseInt(DuchasNNAdemujeres, 10) + parseInt(DuchasNNAmixtas, 10)) != 0) {
            sinDat4 += "<br /> - Indicó duchas para NNA hombres, mujeres y/o mixtas, pero no ingreso duchas para NNA en funcionamiento."; bValidar = true;
        }

        else {
            sinDat4 += "<br /> - Duchas para NNA en funcionamiento<br />- Duchas para NNA hombres<br />- Duchas para NNA mujeres<br />- Duchas para NNA mixtos"; bValidar = true;
        }
    }

    if (AmbienteAcorde == "-1") { sinDat4 += "<br /> - Ambientación Acorde a la Población"; bValidar = true; }
    if (vestuarioAdecuado == "-1") { sinDat4 += "<br /> - Vestuario adecuado de acuerdo a estación"; bValidar = true; }
    if (VestuarioPersonalizadoNNA == "-1") { sinDat4 += "<br /> - Vestuario personalizado para el NNA"; bValidar = true; }
    
    if (utilesAseo == "-1") { sinDat4 += "<br /> - Útiles de Aseo Personal para los NNA"; bValidar = true; }
    if (aguaCaliente == "-1") { sinDat4 += "<br /> - Agua Caliente"; bValidar = true; }

    //if (calefonGas == "-1") { sinDat4 += "<br /> - Estado Calefón y Llaves de Gas"; bValidar = true; }
    if (CumpleNormativaCalefon == "-1") { sinDat4 += "<br /> - Cumple Normativa calefón"; bValidar = true; }
    if (CumpleNormativaLlaveGas == "-1") { sinDat4 += "<br /> - Cumple Normativa llave de gas"; bValidar = true; }
    
    if (sistemaCalefacion == "-1") { sinDat4 += "<br /> - Sistema de calefacción (Especificar en Observación)"; bValidar = true; }
    if (ventilacion == "-1") { sinDat4 += "<br /> - Ventilación adecuada del inmueble"; bValidar = true; }
    if (accesoDiscapacitados == "-1") { sinDat4 += "<br /> - Acceso para personas con situación de Discapacidad"; bValidar = true; }
    if (habilitaDiscapacitados == "-1") { sinDat4 += "<br /> - Instalaciones Habilitadas para Discapacitados (Baños, ramplas, etc.)"; bValidar = true; }
    if (observaciones == "") { sinDat4 += "<br /> - Observaciones"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES INFRAESTRUCTURA</b>" + sinDat4;
    }


    ////----------------------------------------------------------------
    //PASO 1.5 RESCATO DATOS ANTECDENTES SEGURIDAD Y VALIDO
    bValidar = false;
    var PlanEmergencia = $("#IdParSeguridad_1").val();
    var SimulacroEmergencia = $("#IdParSeguridad_2").val();
    var PlanEmergenciaCalificado = $("#IdParSeguridad_3").val();
    var Extintores = $("#IdParSeguridad_4").val();
    var Senaletica = $("#IdParSeguridad_5").val();
    var ViasEvacuacion = $("#IdParSeguridad_6").val();

    var CapacitacionPersonalEmergencia = $("#seguridad_007_capacitacionPersonal_existe").val();
    var Cap_PersonalEmergencia = $("#IdParSeguridad_7").val();
    var Cap_PersonalPrimerosAux = $("#IdParSeguridad_8").val();

    var Sanitizacion = $("#seguridad_008_sanitizacion_existe").val();
    var Sanitizacion_ = $("#IdParSeguridad_9").val();
    var Desratizacion = $("#IdParSeguridad_10").val();
    var Fumigacion = $("#IdParSeguridad_11").val();

    var SistemaElectrico = $("#IdParSeguridad_12").val();
    var ZonasSeguridad = $("#IdParSeguridad_13").val();
    var ObservacionesSeguridad = replaceAll(EliminaEspacios(document.getElementById("seguridad_011_observaciones").value), "'", "");

    //VALIDACION DE CAMPOS ANTECEDENTES SEGURIDAD
    if (PlanEmergencia == "-1") { sinDat5 += "<br /> - Plan de Emergencia"; bValidar = true; }
    if (SimulacroEmergencia == "-1") { sinDat5 += "<br /> - Simulacro Emergencia (Último Cuatrimestre)"; bValidar = true; }
    if (PlanEmergenciaCalificado == "-1") { sinDat5 += "<br /> - Plan de Emergencia ¿Visado por personal calificado?"; bValidar = true; }
    if (Extintores == "-1") { sinDat5 += "<br /> - Extintores"; bValidar = true; }
    if (Senaletica == "-1") { sinDat5 += "<br /> - Señalética"; bValidar = true; }
    if (ViasEvacuacion == "-1") { sinDat5 += "<br /> - Vías de Evacuación"; bValidar = true; }

    //if (CapacitacionPersonalEmergencia == "-1") { sinDat5 += "<br /> - Capacitación Personal en Emergencia y Primeros Auxilios"; bValidar = true; }
    if (Cap_PersonalEmergencia == "-1") { sinDat5 += "<br /> - Capacitación Personal en Emergencia"; bValidar = true; }
    if (Cap_PersonalPrimerosAux == "-1") { sinDat5 += "<br /> - Capacitación Personal en Primeros Auxilios"; bValidar = true; }

    //if (Sanitizacion == "-1") { sinDat5 += "<br /> - Sanitización, Desratización y Fumigación"; bValidar = true; }
    if (Sanitizacion_ == "-1") { sinDat5 += "<br /> - Sanitización"; bValidar = true; }
    if (Desratizacion == "-1") { sinDat5 += "<br /> - Desratización"; bValidar = true; }
    if (Fumigacion == "-1") { sinDat5 += "<br /> - Fumigación"; bValidar = true; }

    if (SistemaElectrico == "-1") { sinDat5 += "<br /> - Sistema Eléctrico"; bValidar = true; }
    if (ZonasSeguridad == "-1") { sinDat5 += "<br /> - Zona de Seguridad Demarcada"; bValidar = true; }
    if (ObservacionesSeguridad == "") { sinDat5 += "<br /> - Observaciones"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES SEGURIDAD</b>" + sinDat5;
    }


    ////----------------------------------------------------------------
    //PASO 1.6 RESCATO DATOS ANTECDENTES SALUD Y VALIDO
    bValidar = false;
    //var NNACesfam = $("#IdParSaludValor_1").val();
    //var NNASaludMentalDiagnostico = $("#IdParSaludValor_2").val();
    //var NNASaludMental = $("#IdParSaludValor_3").val();
    //var NNACronicos = $("#IdParSaludValor_4").val();


    //var NNAEsperaTransplantes = $("#IdParSaludValor_5").val();
    //var NNATransplantados = $("#IdParSaludValor_6").val();

    //var NNADiscapacitados = $("#IdParSaludValor_7").val();
    //var NNAMedicamento = $("#IdParSaludValor_8").val();
    //var NNATratamiento = $("#IdParSaludValor_9").val();

    //var NNADrogas = $("#IdParSaludValor_10").val();
    //var NNAAlcohol = $("#IdParSaludValor_11").val();
    //var NNAAlcoholyDroga = $("#IdParSaludValor_12").val();
    
    //var resguardoMedicamentos = $("#IdParSalud_13").val();
    //var inventarioMedicamentos = $("#IdParSalud_14").val();

    //var AdolecentesEmbarazadasControl = $("#IdParSaludValor_22").val();
    //var RegistroMedicamentoNNA = $("#IdParSalud_15").val();
    //var ProtocoloAdmMedicamentos = $("#IdParSalud_16").val();

    //var controlNinoSano = $("#IdParSalud_17").val();
    //var controlAdolescenteSano = $("#IdParSalud_18").val();

    //var ControlGinecologico = $("#IdParSalud_19").val();
    //var NegadaControlGinecologico = $("#IdParSalud_20").val();
    //var AdolecentesEmbarazadas = $("#IdParSalud_21").val();
    //var ObservacionesSalud = replaceAll(EliminaEspacios(document.getElementById("salud_016_observaciones").value), "'", "");
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
    var Observaciones = replaceAll(EliminaEspacios(document.getElementById("salud_016_observaciones").value), "'", "");

    var NNA_EsperaTransplantes = $("#IdParSaludValor_5").val() == undefined ? -1 : $("#IdParSaludValor_5").val();
    var NNA_Transplantados = $("#IdParSaludValor_6").val() == undefined ? -1 : $("#IdParSaludValor_6").val();

    var NNADrogas = $("#IdParSaludValor_10").val() == undefined ? -1 : $("#IdParSaludValor_10").val();
    var NNA_consumoAlcohol = $("#IdParSaludValor_11").val() == undefined ? -1 : $("#IdParSaludValor_11").val();
    var NNAAlcoholyDroga = $("#IdParSaludValor_12").val() == undefined ? -1 : $("#IdParSaludValor_12").val();

    var sel_resguardoMedicamentos = $("#IdParSalud_13").val() == undefined ? "0" : $("#IdParSalud_13").val();
    var sel_inventarioMedicamentos = $("#IdParSalud_14").val() == undefined ? "0" : $("#IdParSalud_14").val();
    var sel_control_nino_sano = $("#IdParSalud_17").val() == undefined ? "0" : $("#IdParSalud_17").val();
    var sel_control_adolescente_sano = $("#IdParSalud_18").val() == undefined ? "0" : $("#IdParSalud_18").val();

    if (NNACesfam == "") NNACesfam = "0";
    if (NNASaludMentalDiagnostico == "") NNASaludMentalDiagnostico = "0";
    if (NNASaludMental == "") NNASaludMental = "0";
    if (NNACronicos == "") NNACronicos = "0";
    if (NNADiscapacitados == "") NNADiscapacitados = "0";
    if (NNAMedicamento == "") NNAMedicamento = "0";
    if (NNATratamiento == "") NNATratamiento = "0";
    if (NNADrogas == "") NNADrogas = "0";

    if (NNA_EsperaTransplantes == "") NNA_EsperaTransplantes = "0";
    if (NNA_Transplantados == "") NNA_Transplantados = "0";
    if (NNA_consumoAlcohol == "") NNA_consumoAlcohol = "0";
    if (NNAAlcoholyDroga == "") NNAAlcoholyDroga = "0";

    if (AdolecentesEmbarazadasControl == "") AdolecentesEmbarazadasControl = "0";
    //VALIDACION DE CAMPOS ANTECEDENTES SALUD
    if (NNACesfam == "") { sinDat6 += "<br /> - N° de NNA Inscritos en CESFAM"; bValidar = true; }
    if (NNASaludMentalDiagnostico == "") { sinDat6 += "<br /> - N° de NNA con Problemática de Salud Mental con Diagnóstico"; bValidar = true; }
    if (NNASaludMental == "") { sinDat6 += "<br /> - N° de NNA con Problemátiva de Salud Mental sin Diagnóstico"; bValidar = true; }
    if (NNACronicos == "") { sinDat6 += "<br /> - N° de NNA Inscritos con Enfermedad Crónica"; bValidar = true; }

    if (NNA_EsperaTransplantes == "") { sinDat6 += "<br /> - N° de NNA a la espera de Trasplante"; bValidar = true; }
    if (NNA_Transplantados == "") { sinDat6 += "<br /> - N° de NNA Trasplantados"; bValidar = true; }

    if (NNADiscapacitados == "") { sinDat6 += "<br /> - N° de NNA Inscritos con Situación de Discapacidad"; bValidar = true; }
    if (NNAMedicamento == "") { sinDat6 += "<br /> - N° de NNA recibiendo tratamiento farmacológico"; bValidar = true; }
    if (NNATratamiento == "") { sinDat6 += "<br /> - N° de NNA con Problemática de Salud en Tratamiento"; bValidar = true; }

    if (NNADrogas == "") { sinDat6 += "<br /> - N° de NNA con Consumo sólo de Drogas"; bValidar = true; }
    if (NNA_consumoAlcohol == "") { sinDat6 += "<br /> - N° de NNA con consumo sólo de Alcohol"; bValidar = true; }
    if (NNAAlcoholyDroga == "") { sinDat6 += "<br /> - N° de NNA con consumo de Alcohol y Drogas"; bValidar = true; }
    

    if (sel_resguardoMedicamentos == "-1") { sinDat6 += "<br /> - ¿Cuenta con espacio adecuado para el resguardo de medicamentos?"; bValidar = true; }
    if (sel_inventarioMedicamentos == "-1") { sinDat6 += "<br /> - ¿Cuenta con inventario de medicamentos?"; bValidar = true; }

    if (RegistroMedicamentoNNA == "-1") { sinDat6 += "<br /> - Registro de Medicamentos Administrados a los NNA"; bValidar = true; }
    if (ProtocoloAdmMedicamentos == "-1") { sinDat6 += "<br /> - Protocolo para la Administración de Medicamentos a los NNA"; bValidar = true; }

    if (sel_control_nino_sano == "-1") { sinDat6 += "<br /> - ¿Cuenta con control al día de Niño Sano?"; bValidar = true; }
    if (sel_control_adolescente_sano == "-1") { sinDat6 += "<br /> - ¿Cuenta con control al día de Adolescente Sano?"; bValidar = true; }

    if (ControlGinecologico == "-1") { sinDat6 += "<br /> - Control Anual Ginecológico en los Adolescentes"; bValidar = true; }
    if (NegadaControlGinecologico == "-1") { sinDat6 += "<br /> - Adolescentes que se hayan negado a Control Ginecológico"; bValidar = true; }
    if (AdolecentesEmbarazadas == "-1") { sinDat6 += "<br /> - Adolesentes Embarazadas"; bValidar = true; }
    if (AdolecentesEmbarazadasControl == "") { sinDat6 += "<br /> - Adolescentes Embarazadas que pertenecen a la residencia "; bValidar = true; }
    if (Observaciones == "") { sinDat6 += "<br /> - Observaciones"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES SALUD</b>" + sinDat6;
    }

    ////----------------------------------------------------------------
    //PASO 1.7 RESCATO DATOS ANTECDENTES EDUCACION Y VALIDO
    bValidar = false;
    var NNAmatriculados = $("#educacion_001_NNA_matriculados").val();
    var NNAEducacion = $("#educacion_001_NNA_asisten_colegio_cantidad").val();
    var NNAEducacionNo = $("#educacion_002_NNA_NO_asisten_colegio_cantidad").val();
    var NNAEducacionNoMotivo = $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo").val();

    var NNARetrasoEscolar = $("#educacion_003_NNA_retrasoEscolar_cantidad").val();
    var NNAMatriculaCancelada = $("#educacion_004_NNA_matriculaCancelada_cantidad").val();
    var NNAEducaionEspecial = $("#educacion_005_NNA_asisten_colegioDiferencial_cantidad").val();
    var NNANivelacion = $("#educacion_006_NNA_asisten_colegioNivelacion_cantidad").val();
    var NNA_examenesLibres = $("#educacion_006_NNA_examenesLibres_cantidad").val();
    var EspaciosEstudios = $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe").val();
    var MaterialBibliografico = $("#educacion_008_sel_materialBibliiografico_existe").val();
    var Computadores = $("#educacion_009_sel_computadores_existe").val();
    var AccesoInternetControlado = $("#educacion_010_sel_AccesoControladoInternet_existe").val();
    var ObservacionesEducacion = replaceAll(EliminaEspacios(document.getElementById("educacion_011_observaciones").value), "'", "");

    //VALIDACION DE CAMPOS ANTECEDENTES EDUCACION 
    if (NNAmatriculados == "") { sinDat7 += "<br /> - N° de NNA matriculados"; bValidar = true; }
    if (NNAEducacion == "") { sinDat7 += "<br /> - N° de NNA que si asisten a Establecimiento Educacional"; bValidar = true; }
    if (NNAEducacionNo == "") { sinDat7 += "<br /> - N° de NNA que no asisten a Establecimiento Educacional"; bValidar = true; }

    if ((NNAEducacionNo != "" && NNAEducacionNo != "0") && NNAEducacionNoMotivo == "-1") { sinDat7 += "<br /> - Motivo de inasistencia de NNA a Establecimiento Educacional"; bValidar = true; }

    if (NNARetrasoEscolar == "") { sinDat7 += "<br /> - N° de NNA con Retraso o Rezago Escolar"; bValidar = true; }
    if (NNAMatriculaCancelada == "") { sinDat7 += "<br /> - N° de NNA con Matrícula Cancelada"; bValidar = true; }
    if (NNAEducaionEspecial == "") { sinDat7 += "<br /> - N° de NNA que Asiste a Educación Diferencial"; bValidar = true; }
    if (NNANivelacion == "") { sinDat7 += "<br /> - N° de NNA que Asiste a Educación de Nivelación de Estudios"; bValidar = true; }
    if (NNA_examenesLibres == "") { sinDat7 += "<br /> - N° de NNA inscritos para exámenes libres"; bValidar = true; }
    if (EspaciosEstudios == "-1") { sinDat6 += "<br /> - Espacios Destinados a Estudios y Desarrolo de Tareas"; bValidar = true; }
    if (MaterialBibliografico == "-1") { sinDat6 += "<br /> - Material Bibliográfico"; bValidar = true; }
    if (Computadores == "-1") { sinDat6 += "<br /> - Computadores"; bValidar = true; }
    if (AccesoInternetControlado == "-1") { sinDat6 += "<br /> - Acceso Controlado a Internet"; bValidar = true; }


    if (ObservacionesEducacion == "") { sinDat7 += "<br /> - Observaciones"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES EDUCACIÓN</b>" + sinDat7;
    }
   
    ////----------------------------------------------------------------
    //PASO 1.8 RESCATO DATOS ANTECDENTES ALIMENTACION Y VALIDO
    bValidar = false;
    var registroHonorario = $("#IdParAlimentacion_1").val();
    var registroPlanificacion = $("#IdParAlimentacion_2").val();
    var menusEspeciales = $("#IdParAlimentacion_3").val();
    var asesoriaNutricionista = $("#IdParAlimentacion_4").val();
    var certificadosSanitarios = $("#IdParAlimentacion_5").val();

    var conservacionAlimentos = $("#alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe").val();
    var almacenamientoAlimentos_ = $("#IdParAlimentacion_6").val();
    var estadoConservaAlimentos_ = $("#IdParAlimentacion_7").val();
    
    var cantidadComidas = $("#IdParAlimentacion_8").val();
    var cantidadComidasFeriados = $("#IdParAlimentacion_9").val();
    var observacionesAlimentacion = replaceAll(EliminaEspacios(document.getElementById("alimentacion_009_observacion").value), "'", "");

    //VALIDACION DE CAMPOS ANTECEDENTES ALIMENTACION
    if (registroHonorario == "-1") { sinDat8 += "<br /> - Registro de Honorarios de Entrega de Alimentos"; bValidar = true; }
    if (registroPlanificacion == "-1") { sinDat8 += "<br /> - ¿Cuenta con minuta alimentaria?"; bValidar = true; }
    if (menusEspeciales == "-1") { sinDat8 += "<br /> - Existencia de Menús Especiales"; bValidar = true; }
    if (asesoriaNutricionista == "-1") { sinDat8 += "<br /> - ¿Cuenta con minuta alimentaria aprobada?"; bValidar = true; }
    if (certificadosSanitarios == "-1") { sinDat8 += "<br /> Existen Certificados Sanitarios de las Manipuladoras- "; bValidar = true; }

    //if (conservacionAlimentos == "-1") { sinDat8 += "<br /> - Almacenamiento de Alimentos y Estado de Conservación"; bValidar = true; }
    if (almacenamientoAlimentos_ == "-1") { sinDat8 += "<br /> - Almacenamiento de Alimentos"; bValidar = true; }
    if (estadoConservaAlimentos_ == "-1") { sinDat8 += "<br /> - Estado de Conservación de Alimentos"; bValidar = true; }

    if (cantidadComidas == "") { sinDat8 += "<br /> - N° de Comidas Entregadas de Lunes a Viernes"; bValidar = true; }
    if (cantidadComidasFeriados == "") { sinDat8 += "<br /> - N° de Comidas Entregadas Sábado, Domingo y Festivos"; bValidar = true; }
    if (observacionesAlimentacion == "") { sinDat8 += "<br /> - Observaciones"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES ALIMENTACIÓN</b>" + sinDat8;
    }

    ////----------------------------------------------------------------
    //PASO 1.9 RESCATO DATOS ANTECDENTES GESTION RESIDENCIA Y VALIDO
    bValidar = false;
    var CatastroRedes = $("#idParGestionResidencia_1").val();

    var RegistroVisitas = $("#gestionResid_002_sel_protocoloVisitas_existe").val();
    var protoVisitas = $("#idParGestionResidencia_2").val();
    var regisVisitas = $("#idParGestionResidencia_3").val();

    var ProtocoloAcogida = $("#idParGestionResidencia_4").val();
    var AutocuidadoEquipo = $("#idParGestionResidencia_5").val();
    var IntervencionCrisis = $("#idParGestionResidencia_6").val();
    var InformacionNormativa = $("#idParGestionResidencia_7").val();
    var ProtocoloConvivencia = $("#idParGestionResidencia_8").val();
    var ProtocoloReclamos = $("#idParGestionResidencia_9").val();
    var ProtocoloEscucha = $("#idParGestionResidencia_10").val();
    var VinculacionResidencias = $("#idParGestionResidencia_11").val();
    var ProcesosFormacion = $("#idParGestionResidencia_12").val();
    var ProtocoloApadrinamiento = $("#idParGestionResidencia_13").val();
    var ProtocoloTraslado = $("#idParGestionResidencia_14").val();
    var ProtocoloEgreso = $("#idParGestionResidencia_15").val();
    var ProtocoloRedSalud = $("#idParGestionResidencia_16").val();

    var HabilitacionLaboral = $("#gestionResid_016_sel_activi_habilitacionLaboral_existe").val();
    var actividadHabilitacionLaboral = $("#idParGestionResidencia_17").val();
    var actividadVidaIndependiente = $("#idParGestionResidencia_18").val();

    var ObservacionesResidencia = replaceAll(EliminaEspacios(document.getElementById("gestionResid_017_observaciones").value), "'", "");
    
    //VALIDACION DE CAMPOS ANTECEDENTES GESTION RESIDENCIA
    if (CatastroRedes == "-1") { sinDat9 += "<br /> -  Catastro de redes"; bValidar = true; }

    //if (RegistroVisitas == "-1") { sinDat9 += "<br /> - Protocolo y/o Registro de Visitas"; bValidar = true; }
    if (protoVisitas == "-1") { sinDat9 += "<br /> - Existe Protocolo de Visitas"; bValidar = true; }
    if (regisVisitas == "-1") { sinDat9 += "<br /> - Existe Registro de Visitas"; bValidar = true; }

    if (ProtocoloAcogida == "-1") { sinDat9 += "<br /> - Protocolo de Acogida del NNA"; bValidar = true; }
    if (AutocuidadoEquipo == "-1") { sinDat9 += "<br /> - Actividades de Autocuidado para el Equipo"; bValidar = true; }
    if (IntervencionCrisis == "-1") { sinDat9 += "<br /> - Protocolo de Actuación de Intervención en Crisis"; bValidar = true; }
    if (InformacionNormativa == "-1") { sinDat9 += "<br /> - Protocolo de Información para NNA sobre la Normativa de Residencia"; bValidar = true; }
    if (ProtocoloConvivencia == "-1") { sinDat9 += "<br /> - Protocolo de Convivencia"; bValidar = true; }
    if (ProtocoloReclamos == "-1") { sinDat9 += "<br /> - Protocolo de Presentación de Reclamos y Quejas"; bValidar = true; }
    if (ProtocoloEscucha == "-1") { sinDat9 += "<br /> - Protocolo y Espacios para la escucha de los NNA"; bValidar = true; }
    if (VinculacionResidencias == "-1") { sinDat9 += "<br /> - Vinculación entre Residencias (para hermanos)"; bValidar = true; }
    if (ProcesosFormacion == "-1") { sinDat9 += "<br /> - Cuenta con Proceso de Formación Permanente para el personal"; bValidar = true; }
    if (ProtocoloApadrinamiento == "-1") { sinDat9 += "<br /> - Protocolo de Apadrinamiento"; bValidar = true; }
    if (ProtocoloTraslado == "-1") { sinDat9 += "<br /> - Protocolo de Derivación o Traslado a Residencia"; bValidar = true; }
    if (ProtocoloEgreso == "-1") { sinDat9 += "<br /> - Protocolo de para el Egreso del NNA (Sistema Residencial)"; bValidar = true; }
    if (ProtocoloRedSalud == "-1") { sinDat9 += "<br /> - Protocolo para Derivación a Red Salud"; bValidar = true; }

    //if (HabilitacionLaboral == "-1") { sinDat9 += "<br /> - Actividades de Habilitación Laboral y Preparación para la Vida Independiente"; bValidar = true; }
    if (actividadHabilitacionLaboral == "-1") { sinDat9 += "<br /> - Existen Actividades de Habilitación Laboral"; bValidar = true; }
    if (actividadVidaIndependiente == "-1") { sinDat9 += "<br /> - Existe proceso para la vida independiente"; bValidar = true; }

    if (ObservacionesResidencia == "") { sinDat9 += "<br /> - Observaciones"; bValidar = true; }

    if (bValidar) {
        sinDatT = ((sinDatT != "") ? sinDatT + "<br />" : "");
        sinDatT = sinDatT + "<br /><b>ANTECEDENTES GESTIÓN RESIDENCIA</b>" + sinDat9;
    }
    /**/
    //----------------------------------------------------------------
//PASO 1.10 REVISO SI HAY DATOS FALTANTES PARA INFORMAR AL USUARIO

    if (sinDatT != "") {
        swal({

            title: "<span class='titsec3' >REGISTRO DE FICHA RESIDENCIAL</span>",
            html: "<div style='font-size:12px;text-align:left;'>Para poder grabar la ficha residencial en forma completa debe ingresar todos los datos, pues todos son obligatorios. Los campos que debe completar son:<br/><br/><div>" +
                  "<div class='scrollbar2' id='style-12'>" +
                  "<div class='force-overflow2' style='text-align:left;'>" +
                   sinDatT +
                  "</div></div>" +
                  "<div style='text-align:center;'>",
            allowOutsideClick: false,
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: true,
            focusConfirm: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
            background: "#ffffff",
            width: "500px",
            padding: 20
        });

        //ACTIVO TODOS LOS BOTONES BLOQUEADOS
        ActivarDesactivarBotonesGrabar(0, false);
        //SE DETIENE LA EJECUCIÓN DE GRABADO POR 
        //VALIDACION DE CAMPOS FALTANTES

        return;
    }

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //----------------------------------------------------------------
    //PASO 2.1 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS GENERALES
    //var arrDetalle_NNA_abandono = RetornaArregloTablaDetalleNNA("tbl_NNA_abandonados");
    //alert(arrDetalle_NNA_abandono);

    //var arrDetalle_NNA_adolescente_sinHijos = RetornaArregloTablaDetalleNNA("tbl_adolescente_con_hijos");
    //alert(arrDetalle_NNA_adolescente_sinHijos);

    var dataParametros1 =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'PoblacionHombres': '" + PoblacionHombres + "'," +
        "'PoblacionMujeres': '" + PoblacionMujeres + "'," +
        "'PlazasSenameHombres': '" + PlazasSenameHombres + "'," +
        "'PlazasSenameMujeres': '" + PlazasSenameMujeres + "'," +
        "'OtrasPlazasHombres': '" + OtrasPlazasHombres + "'," +
        "'OtrasPlazasMujeres': '" + OtrasPlazasMujeres + "'," +
        "'TotalNnaHombres': '" + TotalNnaHombres + "'," +
        "'TotalNnaMujeres': '" + TotalNnaMujeres + "'," +
        "'TotalAcercamientoHombres': '" + TotalAcercamientoHombres + "'," +
        "'TotalAcercamientoMujeres': '" + TotalAcercamientoMujeres + "'," +
        "'TotalMayoresHombres': '" + TotalMayoresHombres + "'," +
        "'TotalMayoresMujeres': '" + TotalMayoresMujeres + "'," +
        "'FugaHombres': '" + FugaHombres + "'," +
        "'FugaMujeres': '" + FugaMujeres + "'," +
        "'HospitalizadosHombres': '" + HospitalizadosHombres + "'," +
        "'HosptitalizadosMujeres': '" + HosptitalizadosMujeres + "'," +
        "'Art80Hombres': '" + Art80Hombres + "'," +
        "'Art80Mujeres': '" + Art80Mujeres + "'," +
        "'AbandonoHombres': '" + AbandonoHombres + "'," +
        "'AbandonoMujeres': '" + AbandonoMujeres + "'," +
        "'SentenciaAdopcionHombres': '" + SentenciaAdopcionHombres + "'," +
        "'SentenciaAdopcionMujeres': '" + SentenciaAdopcionMujeres + "'," +
        "'EnlaceAdopcionHombres': '" + EnlaceAdopcionHombres + "'," +
        "'EnlaceAdopcionMujeres': '" + EnlaceAdopcionMujeres + "'," +
        "'SinSentenciaHombres': '" + SinSentenciaHombres + "'," +
        "'SinSentenciaMujeres': '" + SinSentenciaMujeres + "'," +
        "'AdolecentesHijosHombres': '" + AdolecentesHijosHombres + "'," +
        "'AdolecentesHijosMujeres': '" + AdolecentesHijosMujeres + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +
        "'DetalleNNA_Abandono': '" + RetornaArregloTablaDetalleNNA("tbl_NNA_abandonados") + "'," +
        "'DetalleNNA_AdolescenteConHijos': '" + RetornaArregloTablaDetalleNNA("tbl_adolescente_con_hijos") + "'" +
        "}";

    //alert(dataParametros);

   
    //----------------------------------------------------------------
    //PASO 2.2 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS POBLACION Y CAPACIDAD 
    var dataParametros2 =
           "{" +
           "'CodProyecto': '" + CodProyecto + "'," +
           "'CodFicha': '[CodFicha_]'," +
           "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
           "'CodEstadoFicha': '" + CodEstadoFicha + "'," +
           "'SubvencionSename': '" + SubvencionSename + "'," +
           "'SexoAtiende': '" + SexoAtiende + "'," +
           "'RangoEtareo': '" + RangoEtareo + "'," +
           "'PoblacionVigente': '" + PoblacionVigente + "'," +
           "'TipoVulneracion': '" + replaceAll(TipoVulneracion, "'", "") + "'," +
           "'ProgramaApadrinamiento': '" + ProgramaApadrinamiento + "'" +
           "}";



    //AQUIHAR----------------------------------------------------------------
    //PASO 2.3 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS DOTACION PERSONAL
    var dataParametros3 =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '[CodFicha_]'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +

        "'CantidadDirector': '" + $("#dotacion_002_sel_director_cantidad").val() + "'," +
        "'CodJornadaDirector': '" + $("#dotacion_003_sel_director_tipo_jornada").val() + "'," +
        "'HorasSemDirector': '" + $("#dotacion_004_sel_director_horas_semanales").val() + "'," +

        "'CantidadAsistenteSocial': '" + $("#dotacion_006_sel_asistente_cantidad").val() + "'," +
        "'CodJornadaAsistenteSocial': '" + $("#dotacion_007_sel_asistente_tipo_jornada").val() + "'," +
        "'HorasSemAsistenteSocial': '" + $("#dotacion_008_sel_asistente_horas_semanales").val() + "'," +

        "'CantidadPsicologo': '" + $("#dotacion_010_sel_psicologo_cantidad").val() + "'," +
        "'CodJornadaPsicologo': '" + $("#dotacion_011_sel_psicologo_tipo_jornada").val() + "'," +
        "'HorasSemPsicologo': '" + $("#dotacion_012_sel_psicologo_horas_semanales").val() + "'," +

        "'CantidadEnfermero': '" + $("#dotacion_014_sel_enfermero_cantidad").val() + "'," +
        "'CodJornadaEnfermero': '" + $("#dotacion_015_sel_enfermero_tipo_jornada").val() + "'," +
        "'HorasSemEnfermero': '" + $("#dotacion_016_sel_enfermero_horas_semanales").val() + "'," +

        "'CantidadAuxiliarEnfermeria': '" + $("#dotacion_018_sel_auxenfermero_cantidad").val() + "'," +
        "'CodJornadaAuxiliarEnfermeria': '" + $("#dotacion_019_sel_auxenfermero_tipo_jornada").val() + "'," +
        "'HorasSemAuxiliarEnfermeria': '" + $("#dotacion_020_sel_auxenfermero_horas_semanales").val() + "'," +

        "'CantidadMedico': '" + $("#dotacion_022_sel_medico_cantidad").val() + "'," +
        "'CodJornadaMedico': '" + $("#dotacion_023_sel_medico_tipo_jornada").val() + "'," +
        "'HorasSemMedico': '" + $("#dotacion_024_sel_medico_horas_semanales").val() + "'," +

        "'CantidadPsiquiatra': '" + $("#dotacion_026_sel_psiquiatra_cantidad").val() + "'," +
        "'CodJornadaPsiquiatra': '" + $("#dotacion_027_sel_psiquiatra_tipo_jornada").val() + "'," +
        "'HorasSemPsiquiatra': '" + $("#dotacion_028_sel_psiquiatra_horas_semanales").val() + "'," +

        "'CantidadTerapeutaOcupacional': '" + $("#dotacion_030_sel_terapeuta_ocup_cantidad").val() + "'," +
        "'CodJornadaTerapeutaOcupacional': '" + $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada").val() + "'," +
        "'HorasSemTerapeutaOcupacional': '" + $("#dotacion_032_sel_terapeuta_ocup_horas_semanales").val() + "'," +

        "'CantidadKinesiolgo': '" + $("#dotacion_034_sel_kinesiologo_cantidad").val() + "'," +
        "'CodJornadaKinesiologo': '" + $("#dotacion_035_sel_kinesiologo_tipo_jornada").val() + "'," +
        "'HorasSemKinesiologo': '" + $("#dotacion_036_sel_kinesiologo_horas_semanales").val() + "'," +

        "'CantidadNutricionista': '" + $("#dotacion_038_sel_nutricionista_cantidad").val() + "'," +
        "'CodJornadaNutricionista': '" + $("#dotacion_039_sel_nutricionista_tipo_jornada").val() + "'," +
        "'HorasSemNutricionista': '" + $("#dotacion_040_sel_nutricionista_horas_semanales").val() + "'," +

        "'CantidadFonoaudiologo': '" + $("#dotacion_042_sel_fonoaudiologo_cantidad").val() + "'," +
        "'CodJornadaFonoaudiologo': '" + $("#dotacion_043_sel_fonoaudiologo_tipo_jornada").val() + "'," +
        "'HorasSemFonoaudiolgo': '" + $("#dotacion_044_sel_fonoaudiologo_horas_semanales").val() + "'," +

        "'CantidadProfEducFisica': '" + $("#dotacion_046_sel_profesorEducaFisica_cantidad").val() + "'," +
        "'CodJornadaProfEducFisica': '" + $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada").val() + "'," +
        "'HorasSemProfEducFisica': '" + $("#dotacion_048_sel_profesorEducaFisica_horas_semanales").val() + "'," +

        "'CantidadPsicopedagogo': '" + $("#dotacion_050_sel_psicopedagogo_cantidad").val() + "'," +
        "'CodJornadaPsicopedagogo': '" + $("#dotacion_051_sel_psicopedagogo_tipo_jornada").val() + "'," +
        "'HorasSemPsicopedagogo': '" + $("#dotacion_052_sel_psicopedagogo_horas_semanales").val() + "'," +

        "'CantidadEducadoraParvulos': '" + $("#dotacion_054_sel_educadoraParvulos_cantidad").val() + "'," +
        "'CodJornadaEducadoraParvulos': '" + $("#dotacion_055_sel_educadoraParvulos_tipo_jornada").val() + "'," +
        "'HorasSemEducadoraParvulos': '" + $("#dotacion_056_sel_educadoraParvulos_horas_semanales").val() + "'," +

        "'CantidadEducadorTratoDirecto': '" + $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val() + "'," +
        "'CodJornadaEducadorTratoDirecto': '" + $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").val() + "'," +
        "'HorasSemEducadorTratoDirecto': '" + $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales").val() + "'," +

        "'CantidadManipuladorAlimentos': '" + $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val() + "'," +
        "'CodJornadaManipuladorAlimentos': '" + $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada").val() + "'," +
        "'HorasSemManipuladorAlimentos': '" + $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales").val() + "'," +

        "'CantidadApoyoAdm': '" + $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val() + "'," +
        "'CodJornadaApoyoAdm': '" + $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada").val() + "'," +
        "'HorasSemApoyoAdm': '" + $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales").val() + "'," +

        "'CantidadPersonalAseo': '" + $("#dotacion_070_sel_personalAseo_cantidad").val() + "'," +
        "'CodJornadaPersonalAseo': '" + $("#dotacion_071_sel_personalAseo_tipo_jornada").val() + "'," +
        "'HorasSemPersonalAseo': '" + $("#dotacion_072_sel_personalAseo_horas_semanales").val() + "'," +

        "'CantidadPersonalLavanderia': '" + $("#dotacion_074_sel_personalLavandería_cantidad").val() + "'," +
        "'CodJornadaPersonalLavanderia': '" + $("#dotacion_075_sel_personalLavandería_tipo_joranada").val() + "'," +
        "'HorasSemPersonalLavanderia': '" + $("#dotacion_076_sel_personalLavandería_horas_semanales").val() + "'," +

        "'CantidadMonitoresTalleristas': '" + $("#dotacion_078_sel_monitoresTalleristas_cantidad").val() + "'," +
        "'CodJornadaMonitoresTalleristas': '" + $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada").val() + "'," +
        "'HorasSemMonitoresTalleristas': '" + $("#dotacion_080_sel_monitoresTalleristas_horas_semanales").val() + "'," +

        "'CantidadAlumnosPractica': '" + $("#dotacion_082_sel_alumnosPractica_cantidad").val() + "'," +
        "'CodJornadaAlumnosPractica': '" + $("#dotacion_083_sel_alumnosPractica_tipo_jornada").val() + "'," +
        "'HorasSemAlumnosPractica': '" + $("#dotacion_084_sel_alumnosPractica_horas_semanales").val() + "'," +

        "'CantidadApoyoVoluntario': '" + $("#dotacion_086_sel_apoyoVoluntario_cantidad").val() + "'," +
        "'CodJornadaApoyoVoluntario': '" + $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada").val() + "'," +
        "'HorasSemApoyoVoluntario': '" + $("#dotacion_088_sel_apoyoVoluntario_horas_semanales").val() + "'," +

        "'CantidadOtros': '" + $("#dotacion_090_sel_Otros_cantidad").val() + "'," +
        "'CodJornadaOtros': '" + $("#dotacion_091_sel_Otros_tipo_jornada").val() + "'," +
        "'HorasSemOtros': '" + $("#dotacion_092_sel_Otros_horas_semanales").val() + "'," +

        "'CantidadLicencia': '" + $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val() + "'," +
        "'CodJornadaLicencia': '" + $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").val() + "'," +
        "'HorasSemLicencia': '" + $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").val() + "'," +

        "'CantidadSuplenteLicencia': '" + $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val() + "'," +
        "'CodJornadaSuplenteLicencia': '" + $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").val() + "'," +
        "'HorasSemSuplenteLicencia': '" + $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").val() + "'," +

        "'Observaciones': '" + replaceAll(document.getElementById("dotacion_101_Observaciones").value, "'", "") + "'" +
        "}";

  
    //----------------------------------------------------------------
    //PASO 2.4 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS INFRAESTRUCTURA   
    var dataParametros4 =
        "{"+
        "\"CodProyecto\": \"" + CodProyecto + "\"," +
        "\"CodFicha\": \"[CodFicha_]\"," +
        "\"IdUsuarioActualizacion\": \"" + IdUsuarioActualizacion + "\"," +
        "\"CodEstadoFicha\": \"" + CodEstadoFicha + "\"," +


        "\"CantidadOficAdm\": \"" + cantidadOficAdm + "\"," +
        "\"CantidadSalaReunion\": \"" + cantidadSalaReunion + "\"," +
        "\"CantidadSalaRecepcion\": \"" + cantidadSalaRecepcion + "\"," +
        "\"CantidadEspaciosVisitas\": \"" + cantidadEspaciosVisitas + "\"," +
        "\"CantidadSalaTalleres\": \"" + cantidadSalaTalleres + "\"," +
        "\"CantidadSalaLiving\": \"" + cantidadSalaLiving + "\"," +
        "\"CantidadEnfermeria\": \"" + cantidadEnfermeria + "\"," +
        "\"CantidadRecreacion\": \"" + cantidadRecreacion + "\"," +
        "\"CantidadAreasVerdes\": \"" + cantidadAreasVerdes + "\"," +
        "\"CantidadCocina\": \"" + cantidadCocina + "\"," +
        "\"CantidadComedor\": \"" + cantidadComedor + "\"," +
        "\"CantidadLavanderia\": \"" + cantidadLavanderia + "\"," +
        "\"CantidadDormitoriosNNA\": \"" + cantidadDormitoriosNNA + "\"," +
        "\"CantidadCamasNNA\": \"" + cantidadCamasNNA + "\"," +
        "\"CantidadColsetLockers\": \"" + cantidadColsetLockers + "\"," +
        "\"CantidadBañosPublicos\": \"" + cantidadBañosPublicos + "\"," +
        "\"CantidadBañosNNA\": \"" + cantidadBañosNNA + "\"," +
        "\"CantidadDuchasNNA\": \"" + cantidadDuchasNNA + "\"," +
        "\"AmbienteAcorde\": \"" + AmbienteAcorde + "\"," +
        "\"VestuarioAdecuado\": \"" + vestuarioAdecuado + "\"," +
        "\"UtilesAseo\": \"" + utilesAseo + "\"," +
        "\"AguaCaliente\": \"" + aguaCaliente + "\"," +
        "\"CalefonGas\": \"" + calefonGas + "\"," +
        "\"SistemaCalefacion\": \"" + sistemaCalefacion + "\"," +
        "\"Ventilacion\": \"" + ventilacion + "\"," +
        "\"AccesoDiscapacitados\": \"" + accesoDiscapacitados + "\"," +
        "\"HabilitaDiscapacitados\": \"" + habilitaDiscapacitados + "\"," +
        "\"Observaciones\": \"" + replaceAll(observaciones, "\"", "") + "\"," +

        "\"BanosNNAenFuncionamiento\": \"" + BanosNNAenFuncionamiento + "\"," +
        "\"BanosNNAdeacuerdoNormativa\": \"" + BanosNNAdeacuerdoNormativa + "\"," +
        "\"BanosNNAdehombres\": \"" + BanosNNAdehombres + "\"," +
        "\"BanosNNAdemujeres\": \"" + BanosNNAdemujeres + "\"," +
        "\"BanosNNAmixtos\": \"" + BanosNNAmixtos + "\"," +

        "\"DuchasNNAFuncionamiento\": \"" + DuchasNNAFuncionamiento + "\"," +
        "\"DuchasNNAdeacuerdoNormativa\": \"" + DuchasNNAdeacuerdoNormativa + "\"," +
        "\"DuchasNNAdehombres\": \"" + DuchasNNAdehombres + "\"," +
        "\"DuchasNNAdemujeres\": \"" + DuchasNNAdemujeres + "\"," +
        "\"DuchasNNAmixtas\": \"" + DuchasNNAmixtas + "\"," +

        "\"VestuarioPersonalizadoNNA\": \"" + VestuarioPersonalizadoNNA + "\"," +
        "\"CumpleNormativaCalefon\": \"" + CumpleNormativaCalefon + "\"," +
        "\"CumpleNormativaLlaveGas\": \"" + CumpleNormativaLlaveGas + "\"" +
        "}";

    //----------------------------------------------------------------
    //PASO 2.5 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS SEGURIDAD
    var dataParametros5 =
         "{" +
         "\"CodProyecto\": \"" + CodProyecto + "\"," +
         "\"CodFicha\": \"[CodFicha_]\"," +
         "\"IdUsuarioActualizacion\": \"" + IdUsuarioActualizacion + "\"," +
         "\"CodEstadoFicha\": \"" + CodEstadoFicha + "\"," +
         "\"PlanEmergencia\": \"" + PlanEmergencia + "\"," +
         "\"SimulacroEmergencia\": \"" + SimulacroEmergencia + "\"," +
         "\"PlanEmergenciaCalificado\": \"" + PlanEmergenciaCalificado + "\"," +
         "\"Extintores\": \"" + Extintores + "\"," +
         "\"Senaletica\": \"" + Senaletica + "\"," +
         "\"ViasEvacuacion\": \"" + ViasEvacuacion + "\"," +
         "\"CapacitacionPersonalEmergencia\": \"" + CapacitacionPersonalEmergencia + "\"," +
         "\"Sanitizacion\": \"" + Sanitizacion + "\"," +
         "\"SistemaElectrico\": \"" + SistemaElectrico + "\"," +
         "\"ZonasSeguridad\": \"" + ZonasSeguridad + "\"," +
         "\"Observaciones\": \"" + replaceAll(ObservacionesSeguridad, "\"", "") + "\"," +

        "\"capacitacionEmergencia\": \"" + Cap_PersonalEmergencia + "\"," +
        "\"capacitacionPrimerosAux\": \"" + Cap_PersonalPrimerosAux + "\"," +
        "\"seg_sanitizacion\": \"" + Sanitizacion_ + "\"," +
        "\"seg_desratizacion\": \"" + Desratizacion + "\"," +
        "\"seg_fumigacion\": \"" + Fumigacion + "\"" +
        "}";


    //----------------------------------------------------------------
    //PASO 2.6 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS SALUD
    var dataParametros6 =
            "{" +
            "\"CodProyecto\": \"" + CodProyecto + "\"," +
            "\"CodFicha\": \"[CodFicha_]\"," +
            "\"IdUsuarioActualizacion\": \"" + IdUsuarioActualizacion + "\"," +
            "\"CodEstadoFicha\": \"" + CodEstadoFicha + "\"," +
            "\"NNACesfam\": \"" + NNACesfam + "\"," +
            "\"NNASaludMentalDiagnostico\": \"" + NNASaludMentalDiagnostico + "\"," +
            "\"NNASaludMental\": \"" + NNASaludMental + "\"," +
            "\"NNACronicos\": \"" + NNACronicos + "\"," +
            "\"NNADiscapacitados\": \"" + NNADiscapacitados + "\"," +
            "\"NNAMedicamento\": \"" + NNAMedicamento + "\"," +
            "\"NNATratamiento\": \"" + NNATratamiento + "\"," +
            "\"NNADrogas\": \"" + NNADrogas + "\"," +
            "\"RegistroMedicamentoNNA\": \"" + RegistroMedicamentoNNA + "\"," +
            "\"ProtocoloAdmMedicamentos\": \"" + ProtocoloAdmMedicamentos + "\"," +
            "\"ControlGinecologico\": \"" + ControlGinecologico + "\"," +
            "\"NegadaControlGinecologico\": \"" + NegadaControlGinecologico + "\"," +
            "\"AdolecentesEmbarazadas\": \"" + AdolecentesEmbarazadas + "\"," +
            "\"AdolecentesEmbarazadasControl\": \"" + AdolecentesEmbarazadasControl + "\"," +
        "\"Observaciones\": \"" + replaceAll(Observaciones, "\"", "") + "\"," +

        "\"NNA_EsperaTransplantes\": \"" + NNA_EsperaTransplantes + "\"," +
        "\"NNA_Transplantados\": \"" + NNA_Transplantados + "\"," +
        "\"NNA_consumoAlcohol\": \"" + NNA_consumoAlcohol + "\"," +
        "\"sel_resguardoMedicamentos\": \"" + sel_resguardoMedicamentos + "\"," +
        "\"sel_inventarioMedicamentos\": \"" + sel_inventarioMedicamentos + "\"," +
        "\"sel_control_nino_sano\": \"" + sel_control_nino_sano + "\"," +
        "\"sel_control_adolescente_sano\": \"" + sel_control_adolescente_sano + "\"," +
            "\"NNAAlcoholyDroga\": \"" + NNAAlcoholyDroga + "\"" +
            "}";
          
    //----------------------------------------------------------------
    //PASO 2.7 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS EDUCACION
    var dataParametros7 =
            "{" +
            "\"CodProyecto\": \"" + CodProyecto + "\"," +
            "\"CodFicha\": \"[CodFicha_]\"," +
            "\"IdUsuarioActualizacion\": \"" + IdUsuarioActualizacion + "\"," +
            "\"CodEstadoFicha\": \"" + CodEstadoFicha + "\"," +
            "\"NNAEducacion\": \"" + NNAEducacion + "\"," +
            "\"NNAEducacionNo\": \"" + NNAEducacionNo + "\"," +
            "\"NNARetrasoEscolar\": \"" + NNARetrasoEscolar + "\"," +
            "\"NNAMatriculaCancelada\": \"" + NNAMatriculaCancelada + "\"," +
            "\"NNAEducaionEspecial\": \"" + NNAEducaionEspecial + "\"," +
            "\"NNANivelacion\": \"" + NNANivelacion + "\"," +
            "\"EspaciosEstudios\": \"" + EspaciosEstudios + "\"," +
            "\"MaterialBibliografico\": \"" + MaterialBibliografico + "\"," +
            "\"Computadores\": \"" + Computadores + "\"," +
            "\"AccesoInternetControlado\": \"" + AccesoInternetControlado + "\"," +
            "\"Observaciones\": \"" + replaceAll(ObservacionesEducacion, "\"", "") + "\"," +

            "\"NNA_matriculados\": \"" +  NNAmatriculados + "\"," +
            "\"NNA_examenesLibres\": \"" + NNA_examenesLibres + "\"," +
            "\"NNAEducacionNoMotivo\": \"" + NNAEducacionNoMotivo + "\"" +
            "}";

    //----------------------------------------------------------------
    //PASO 2.8 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS ALIMENTACION
    var dataParametros8 =
        "{" +
        "\"CodProyecto\": \"" + CodProyecto + "\"," +
        "\"CodFicha\": \"[CodFicha_]\"," +
        "\"IdUsuarioActualizacion\": \"" + IdUsuarioActualizacion + "\"," +
        "\"CodEstadoFicha\": \"" + CodEstadoFicha + "\"," +
        "\"RegistroHonorario\": \"" + registroHonorario + "\"," +
        "\"RegistroPlanificacion\": \"" + registroPlanificacion + "\"," +
        "\"MenusEspeciales\": \"" + menusEspeciales + "\"," +
        "\"AsesoriaNutricionista\": \"" + asesoriaNutricionista + "\"," +
        "\"CertificadosSanitarios\": \"" + certificadosSanitarios + "\"," +
        "\"ConservacionAlimentos\": \"" + conservacionAlimentos + "\"," +
        "\"CantidadComidas\": \"" + cantidadComidas + "\"," +
        "\"CantidadComidasFeriados\": \"" + cantidadComidasFeriados + "\"," +
        "\"Observaciones\": \"" + replaceAll(EliminaEspacios(observacionesAlimentacion), "\"", "") + "\"," +

        "\"AlmacenaAlimento_existe\": \"" + almacenamientoAlimentos_ + "\"," +
        "\"EstadoConserva_existe\": \"" + estadoConservaAlimentos_ + "\"" +
        "}";

    //----------------------------------------------------------------
    //PASO 2.9 ARMO FORMATO JSON DATOS Y PROCEDO A GRABAR DATOS GESTION RESIDENCIA

    CodEstadoFicha = 2; //---> Aquí cambio el estado de la ficha residencial con el último SET de datos
    var dataParametros9 =
        "{" +
            "\"CodProyecto\": \"" + CodProyecto + "\"," +
            "\"CodFicha\": \"[CodFicha_]\"," +
            "\"IdUsuarioActualizacion\": \"" + IdUsuarioActualizacion + "\"," +
            "\"CodEstadoFicha\": \"" + CodEstadoFicha + "\"," +
            "\"CatastroRedes\": \"" + CatastroRedes + "\"," +
            "\"RegistroVisitas\": \"" + RegistroVisitas + "\"," +
            "\"ProtocoloAcogida\": \"" + ProtocoloAcogida + "\"," +
            "\"AutocuidadoEquipo\": \"" + AutocuidadoEquipo + "\"," +
            "\"IntervencionCrisis\": \"" + IntervencionCrisis + "\"," +
            "\"InformacionNormativa\": \"" + InformacionNormativa + "\"," +
            "\"ProtocoloConvivencia\": \"" + ProtocoloConvivencia + "\"," +
            "\"ProtocoloReclamos\": \"" + ProtocoloReclamos + "\"," +
            "\"ProtocoloEscucha\": \"" + ProtocoloEscucha + "\"," +
            "\"VinculacionResidencias\": \"" + VinculacionResidencias + "\"," +
            "\"ProcesosFormacion\": \"" + ProcesosFormacion + "\"," +
            "\"ProtocoloApadrinamiento\": \"" + ProtocoloApadrinamiento + "\"," +
            "\"ProtocoloTraslado\": \"" + ProtocoloTraslado + "\"," +
            "\"ProtocoloEgreso\": \"" + ProtocoloEgreso + "\"," +
            "\"ProtocoloRedSalud\": \"" + ProtocoloRedSalud + "\"," +
            "\"HabilitacionLaboral\": \"" + HabilitacionLaboral + "\"," +
            "\"Observaciones\": \"" + replaceAll(ObservacionesResidencia, "\"", "") + "\"," +

            "\"protoVisitas_existe\": \"" + protoVisitas + "\"," +
            "\"regisVisitas_existe\": \"" + regisVisitas + "\"," +
            "\"activi_habilitaLaboral\": \"" + actividadHabilitacionLaboral + "\"," +
            "\"activi_vidaInpendiente\": \"" + actividadVidaIndependiente + "\"" +
            "}";
       
    //----------------------------------------------------------------
    //LEVANTO UN INDICADOR DE PASOS QUE SEÑALA EN QUE PARTE DEL PROCESO VA
    //EL REGISTRO COMPLETO DE LA FICHA:
    var d = new Date();
    var dialogProgress = swal({
        title: "",
        html: "<div id='divpadre'><div id='containerProgressBar'></div></div><br /><div style='width:100%;text-alig:center;'><span id='spanEtapa' style='font-size:24px;color:#0F68B1;'></span></div>",
        type: "",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#DF0101",
        padding: '20px',
        width: '500px'
    });

    bar = new ProgressBar.Circle(containerProgressBar, {
        color: '#',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',

        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#088A29', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '4rem';
    bar.text.style.color = "#088A29";
    //----------------------------------------------------------------
    //PASO 2.10 INICIO LA SERIE DE CARGAS EN FORMA SECUENCIAL DE CADA TAB
    //CADA PASO QUE TERMINA GENERA EL LLAMADO DEL PASO SIGUIENTE.
    Paso1_Generales(dataParametros1, dataParametros2, dataParametros3, dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9);
}

function Paso1_Generales(dataParametros1, dataParametros2, dataParametros3, dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Generales";
    CodEstadoFicha = 2;
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesGenerales",
        data: dataParametros1,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
            //EN EL PASO DE ANTECEDENTES GENERALES
            return;
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op1").addClass("active");
                    bar.animate(.1);
                    
                    //Incorporo grabar fecha de aplicación de ficha
                    GrabarFechaAplicacionFicha();

                    Paso2_Poblacion_Capacidad(dataParametros2, dataParametros3, dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");
                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);
                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES GENERALES
                    return;
                }
            }
        );
    });
}
function Paso2_Poblacion_Capacidad(dataParametros2, dataParametros3, dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Poblacion y Capacidad";
    CodEstadoFicha = 2;
    dataParametros2 = replaceAll(dataParametros2, "[CodFicha_]", CodFicha);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesPoblacionCapacidad",
        data: dataParametros2,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
            //EN EL PASO DE ANTECEDENTES POBLACION Y CAPACIDAD 
            return;
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op2").addClass("active");
                    bar.animate(.2);
                    Paso3_Dotacion_Personal(dataParametros3, dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");
                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);


                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES POBLACION Y CAPACIDAD 
                    return;
                }
            }
        );
    });


}
//AQUIHAR
function Paso3_Dotacion_Personal(dataParametros3, dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Dotacion Personal";
    CodEstadoFicha = 2;
    //dataParametros3 = replaceAll(dataParametros3, "[CodFicha_]", CodFicha);
    //$.ajax({
    //    type: "POST",
    //    url: "FichaResidencial.aspx/GrabarAntecedentesDotacionPersonal",
    //    data: dataParametros3,
    //    //data: '{}',
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (r) {
    //        // Ajax OK !                   
    //    },
    //    error: function (r) {
    //        DesplegarExcepcionCriticaApp(r.responseText);
    //        //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
    //        //EN EL PASO DE ANTECEDENTES DOTACION PERSONAL
    //        return;
    //    }

    //poloaracena
    var table = $('#gridDotacion').DataTable();
    var numeroDeFilas = table.data().length;
    var CodigoProy = $("#general_001_sel_proyecto").val();
    var observacionesDotacion = replaceAll(EliminaEspacios(document.getElementById("dotacion_101_Observaciones").value), "'", "");
    var CodigoEstFicha = 1;

    var strGrilla = '';
    var pipe = "|";
    for (var i = 0; i < numeroDeFilas; i++) {
        var data = table.row(i).data();

        var x = String(data.Select_Profesion).split("<select id=IdProfesion_");
        var IdProf = x[1].split(" ");
        var IdProf2 = IdProf[0];
        var ValorCant = $("#IdCantidad_" + IdProf2).val();
        var ValorHorasSemanales = $("#IdHorasSemanales_" + IdProf2).val();
        var ValorJornada = $("#IdCodJornada_" + IdProf2).val();

        if (ValorCant == "") {
            ValorCant = "0";
        }

        if (ValorHorasSemanales == "") {
            ValorHorasSemanales = "0";
        }

        if (ValorJornada == "") {
            ValorJornada = "0";
        }
  
        strGrilla = strGrilla + CodFicha + pipe + CodigoProy + pipe + CodigoEstFicha + pipe + IdUsuarioActualizacion + pipe + IdProf2 + pipe + ValorCant + pipe + ValorJornada + pipe + ValorHorasSemanales + pipe + observacionesDotacion + "~"

    }
    strGrilla = "{\"strGrilla\":" + "\"" + strGrilla + "\""

    strGrilla = strGrilla + "}";
    strGrilla = strGrilla.replace(/~"}/g, "\"}");

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesDotacionPersonalHAR",
        data: strGrilla,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            //ok
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op3").addClass("active");
                    bar.animate(.3);
                    Paso4_Infraestructura(dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);

                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES DOTACION PERSONAL
                    return;
                }
            }
        );
    });
}
function Paso4_Infraestructura(dataParametros4, dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Infraestructura";
    CodEstadoFicha = 2;
    dataParametros4 = replaceAll(dataParametros4, "[CodFicha_]", CodFicha);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesInfraestructura",
        data: dataParametros4,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
            //EN EL PASO DE ANTECEDENTES INFRAESTRUCTURA
            return;
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op4").addClass("active");
                    bar.animate(.4);
                    Paso5_Seguridad(dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);

                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES INFRAESTRUCTURA
                    return;
                }
            }
        );

    });
}
function Paso5_Seguridad(dataParametros5, dataParametros6, dataParametros7, dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Seguridad";
    CodEstadoFicha = 2;
    dataParametros5 = replaceAll(dataParametros5, "[CodFicha_]", CodFicha);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesSeguridad",
        data: dataParametros5,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
            //EN EL PASO DE ANTECEDENTES SEGURIDAD
            return;
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op5").addClass("active");
                    bar.animate(.5);
                    Paso6_Salud(dataParametros6, dataParametros7, dataParametros8, dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);

                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES SEGURIDAD
                    return;
                }
            }
        );

    });
}
function Paso6_Salud(dataParametros6, dataParametros7, dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Salud";
    CodEstadoFicha = 2;
    dataParametros6 = replaceAll(dataParametros6, "[CodFicha_]", CodFicha);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesSalud",
        data: dataParametros6,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
            //EN EL PASO DE ANTECEDENTES SALUD
            return;
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op6").addClass("active");
                    bar.animate(.6);
                    Paso7_Educacion(dataParametros7, dataParametros8, dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);

                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES SALUD
                    return;
                }
            }
        );

    });
}
function Paso7_Educacion(dataParametros7, dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Educación";
    CodEstadoFicha = 2;
    dataParametros7 = replaceAll(dataParametros7, "[CodFicha_]", CodFicha);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesEducacion",
        data: dataParametros7,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
            //EN EL PASO DE ANTECEDENTES EDUCACION
            return;
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op7").addClass("active");
                    bar.animate(.7);
                    Paso8_Alimentacion(dataParametros8, dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);

                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES EDUCACION
                    return;
                }
            }
        );

    });
}
function Paso8_Alimentacion(dataParametros8, dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Alimentación";
    CodEstadoFicha = 2;
    dataParametros8 = replaceAll(dataParametros8, "[CodFicha_]", CodFicha);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesAlimentacion",
        data: dataParametros8,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
            //EN EL PASO DE ANTECEDENTES ALIMENTACION
            return;
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    //$("#op8").addClass("active");
                    bar.animate(.85);
                    Paso9_Gestion_Residencia(dataParametros9);
                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);

                    //SE DETIENE LA EJECUCIÓN DE GRABADO POR ERROR  
                    //EN EL PASO DE ANTECEDENTES ALIMENTACION
                    return;
                }
            }
        );

    });
}
function Paso9_Gestion_Residencia(dataParametros9) {
    document.getElementById("spanEtapa").innerHTML = "Antecedentes Gestión Residencia";
    CodEstadoFicha = 2;
    dataParametros9 = replaceAll(dataParametros9, "[CodFicha_]", CodFicha);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesGestionResidencia",
        data: dataParametros9,
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
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);
                    //$("#op9").addClass("active");
                    bar.animate(1);
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                    
                    setTimeout(function () { MensajeRegistroFichaFullExitoso(CodFicha); }, 1500);

                }
                else {
                    var strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                    var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

                    MensajeERROR_App_Critico(strError);

                    //ACTIVO TODOS LOS BOTONES
                    ActivarDesactivarBotonesGrabar(0, false);
                }
            }
        );

    });
}
function MensajeRegistroFichaFullExitoso(CodFicha) {
    swal.clickCancel();

    //alert("MensajeRegistroFichaFullExitoso");
    MessageSucess("Se han registrado exitosamente todos datos de antecedentes de la Ficha de Gestión Residencial folio número " + CodFicha + " y se ha procedido a su cierre.");
    
    //ACTIVO TODOS LOS BOTONES
    ActivarDesactivarBotonesGrabar(0, false);

    CargaDatosGeneralesDDL2($("#general_001_sel_proyecto").val());

    RecargaFechaAplicacionFichaResidencial();
}
function RecargaFechaAplicacionFichaResidencial() {
    var d = new Date();
    var dia = d.getDate();
    var mes = d.getMonth() + 1;
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    var diaActual = dia + '/' + mes + '/' + d.getFullYear();
    //$('#fechaaplicacionRegistro').html(diaActual);    //Sprint 2.1
    document.getElementById("ifechaaplicacionRegistro").setAttribute('value', diaActual);
}
var myVar;
function CargaInicial() {
    ResetearFormulario();
    IdUsuarioActualizacion = $("#idusuario_conect").val();
    //CargaDatosProyectosUsuario();
    document.getElementById("general_001_sel_proyecto").disabled = true;
    CargaDatosInstitucionesUsuario();


    myVar = setInterval(CargaDatosProyectosUsuario2, 10000);

   
}


//INICIALIZACIÓN DE ELEMENTOS DE PAGINA
//FUNCIONES DE INICIALIZACIÓN COMBOS
function CargaDatosInstitucionesUsuario() {
    //alert(IdUsuarioActualizacion);
    document.getElementById("general_000_sel_Institucion").disabled = true;

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
        //alert("What!!!");
        var Institucion = $("#general_000_sel_Institucion");
        InicializaCombo("#general_000_sel_Institucion");
        Institucion.append("<option value='0'>Seleccionar una institución</option>");

        var proyecto = $("#general_001_sel_proyecto");
        InicializaCombo("#general_001_sel_proyecto");
        proyecto.append("<option value='0'>Seleccionar un proyecto</option>");

        var NombreInstitucionAUX = "";

        //alert(r.d[0].error);
        if ((r.d[0].error) == "") {
            if (r.d != "") {
                $.each(r.d,
                    function () {
                        if (NombreInstitucionAUX == "" || NombreInstitucionAUX != this.NombreInstitucion) {
                            $("#general_000_sel_Institucion").append("<option value='" + this.CodInstitucion + "'>" + this.NombreInstitucion + "</option>");
                            NombreInstitucionAUX = this.NombreInstitucion;
                        }
                    }
                );
                document.getElementById("general_000_sel_Institucion").disabled = false;
                if (r.d.length == 1) {
                    //alert(r.d.length);
                    $("#general_000_sel_Institucion").prop('selectedIndex', 1);
                    CargaProyectosInstitucion($("#general_000_sel_Institucion").val());
                }
            }
        }
        else {
            document.getElementById("general_000_sel_Institucion").selectedIndex = 0;
            document.getElementById("general_000_sel_Institucion").disabled = true;

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }
    });
}

function CargaProyectosInstitucion(codigoInstitucion) {
    //alert(codigoInstitucion + " - " + IdUsuarioActualizacion);
    ResetearFormulario();
    document.getElementById("general_001_sel_proyecto").selectedIndex = 0;
    document.getElementById("general_001_sel_proyecto").disabled = true;

    if (codigoInstitucion != 0) {
        $.ajax({
            type: "POST",
            url: "FichaResidencial.aspx/ObtenerProyectosXInstitucionYUsuario",
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
            var proyecto = $("#general_001_sel_proyecto");
            InicializaCombo("#general_001_sel_proyecto");

            proyecto.append("<option value='0'>Seleccionar un proyecto</option>");
            var errorDetectado = "";

            //alert(r.d[0].error);
            if ((r.d[0].error) == "") {

                if (r.d != "") {
                    $.each(r.d,
                        function () {
                            $("#general_001_sel_proyecto").append("<option value='" + this.CodProyecto + "'>" + this.NombreProyecto + "</option>");
                        }
                    );
                    document.getElementById("general_001_sel_proyecto").disabled = false;
                    if (r.d.length == 1) {
                        $("#general_001_sel_proyecto").prop('selectedIndex', 1);
                        CargaDatosGeneralesDDL2($("#general_001_sel_proyecto").val());

                        $("#divbotonImprimePDF").css("display", "block");
                        $('#input-1').iCheck('check');
                        $('#chkConFecha').iCheck('uncheck');
                        tipoFormularioPDF_FR = 0;
                        imprimePDF_FR = 0;
                    }
                }

            }
            else {
                document.getElementById("general_001_sel_proyecto").selectedIndex = 0;
                document.getElementById("general_001_sel_proyecto").disabled = true;

                DesplegarExcepcionCriticaApp(r.d[0].error);
            }

        });
    }
}


function CargaDatosProyectosUsuario() {
    //alert(IdUsuarioActualizacion);
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerProyectosusuario",
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
        var Institucion = $("#general_000_sel_Institucion");
        InicializaCombo("#general_000_sel_Institucion");
        Institucion.append("<option value='0'>Selecciona una institución</option>");

        var proyecto = $("#general_001_sel_proyecto");
        InicializaCombo("#general_001_sel_proyecto");
        proyecto.append("<option value='0'>Selecciona un proyecto</option>");

        var NombreInstitucionAUX = "";

        if (r.d != "") {
            $.each(r.d,
                function () {
                    //if (this.Estatus == "REGION HABILITADA") {
                    document.getElementById("frmwork").style.display = "block";
                    if (NombreInstitucionAUX == "" || NombreInstitucionAUX != this.NombreInstitucion) {
                        $("#general_000_sel_Institucion").append("<option value='0'>" + this.NombreInstitucion + "</option>");
                        NombreInstitucionAUX = this.NombreInstitucion;
                    }
                    $("#general_001_sel_proyecto").append("<option value='" + this.CodProyecto + "'>" + this.NombreProyecto + "</option>");
                    //}
                    //else {
                    //    document.getElementById("frmMsg").style.display = "block";
                    //    return;
                    //}
                }
            );

        }
        //else {
        //    document.getElementById("frmMsg").style.display = "block";
        //}

    });
}
function CargaDatosGeneralesDDL(CodProyecto) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerDatosGenerales",
        data: "{'CodProyecto': '" + CodProyecto + "'}",
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

        var Institucion = $("#general_000_sel_Institucion");
        InicializaCombo("#general_000_sel_Institucion");
        Institucion.append("<option value='0'>Selecciona una institución</option>");

        var proyecto = $("#general_001_sel_proyecto");
        InicializaCombo("#general_001_sel_proyecto");
        proyecto.append("<option value='0'>Selecciona un proyecto</option>");



        $.each(r.d,
            function () {

                $("#general_000_sel_Institucion").append("<option value='0'>" + this.NombreInstitucion + "</option>");
                $("#general_001_sel_proyecto").append("<option value='" + CodProyecto + "'>" + this.NombreProyecto + "</option>");
            


            
            }
        );
    });
}

function CargaDatosProyectosUsuario2() {
      try {
        $.ajax({
            url: ("FichaResidencialSesion.aspx"),
            type: 'post',
            //contentType: "application/json; charset=utf-8",
            //dataType: "json",
            success: function (response, status) {
                //alert(response);
                errGlosa = response;
                var jsonObj = JSON.parse(errGlosa);
                //alert(jsonObj.d[0].error);
                if (jsonObj.d[0].error != "")
                    DesplegarExcepcionCriticaApp(jsonObj.d[0].error);

            },
            error: function (xhr, status, errorResponse) {
                var errGlosa = "";
                errGlosa = xhr.responseText;
                //alert(xhr.responseText);
                //alert(errorResponse);
                //alert(errGlosa);
                if (errGlosa != undefined) {
                    if (errGlosa != "") {
                        errGlosa += ". " + errorResponse;
                    }
                    else {
                        errGlosa = errorResponse;
                    }
                }
                if (errGlosa == undefined)
                    DesplegarExcepcionCriticaApp("Se ha perdido conexión con el servidor de la aplicación. Esto puede deberse a una falla de comunicación o acceso a la red, o bien el servicio WEB al que trata de acceder está detenido.");
                else {
                    var jsonObj = JSON.parse(errGlosa);
                    DesplegarExcepcionCriticaDBOBJ(jsonObj.d[0].error);
                }
            }
        });
    }
    catch (err) {
        DesplegarExcepcionCriticaApp(err.message);
    }

}

//FUNCIONALIDA PDF Make
var tipoFormularioPDF_FR = 0;
var imprimePDF_FR = 0;
function MarcaTipoFormularioPDF(opc) {
    tipoFormularioPDF_FR = opc;
    if (opc==2) {
        MensajeINFO("<p style='text-align:center;'>Verifique que los datos del formularios están completos antes de generar el PDF</p>");
    }
}

function MarcaImprimeFechaPDF() {
    if (imprimePDF_FR == 0)
        imprimePDF_FR = 1;
    else
        imprimePDF_FR = 0;
}
function CargaBotonFormularioPDF() {
    if (document.getElementById("general_001_sel_proyecto").selectedIndex == 0)
        $("#divbotonImprimePDF").css("display", "none");
    else {
        $("#divbotonImprimePDF").css("display", "block");
        $('#input-1').iCheck('check');
        $('#chkConFecha').iCheck('uncheck');
        tipoFormularioPDF_FR = 0;
        imprimePDF_FR = 0;
    }
}
function GeneraArrNNA_Abandono(){
    var arrBodyNNA_AdolecentesConHijos = [];
    arrBodyNNA_AdolecentesConHijos[0] = [{ text: 'DETALLE DE NNA EN COMPLETO ABANDONO', style: 'header2', colSpan: 4 }, {}, {}, {}];
    arrBodyNNA_AdolecentesConHijos[1] = ['RUT', 'NOMBRE NNA', 'RIT', 'TRIBUNAL'];
    arrBodyNNA_AdolecentesConHijos[2] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[3] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[4] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[5] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[6] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[7] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[8] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[9] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[10] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[11] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[12] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[13] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[14] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[15] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[16] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[17] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[18] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[19] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[20] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[21] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[22] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[23] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[24] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[25] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[26] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[27] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[28] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[29] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[30] = ['', '', '', ''];
    return arrBodyNNA_AdolecentesConHijos;
}
function GeneraArrNNA_Adolescente() {
    var arrBodyNNA_AdolecentesConHijos = [];
    arrBodyNNA_AdolecentesConHijos[0] = [{ text: 'DETALLE DE ADOLESCENTE CON HIJOS LACTANTES', style: 'header2', colSpan: 4 }, {}, {}, {}];
    arrBodyNNA_AdolecentesConHijos[1] = ['RUT', 'NOMBRE NNA', 'RIT', 'TRIBUNAL'];
    arrBodyNNA_AdolecentesConHijos[2] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[3] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[4] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[5] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[6] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[7] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[8] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[9] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[10] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[11] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[12] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[13] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[14] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[15] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[16] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[17] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[18] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[19] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[20] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[21] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[22] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[23] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[24] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[25] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[26] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[27] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[28] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[29] = ['', '', '', ''];
    arrBodyNNA_AdolecentesConHijos[30] = ['', '', '', ''];
    return arrBodyNNA_AdolecentesConHijos;
}
function GenerarFormularioPDF_FR(opc) {
    var d = new Date();
    var arrBody;
    var arrBodyNNA_Abandono = [];
    var arrBodyNNA_AdolecentesConHijos = [];
    var fechadoc = "fecha: __________";

    switch(tipoFormularioPDF_FR){
        case 0:
            arrBody = [
                [{text:'Institución:', style: 'text1' }, ''],
                [{text:'Proyecto:', style: 'text1' }, ''],
                [{text:'Tipo de organismo:', style: 'text1' }, ''],
                [{text:'Modelo de Intervención:', style: 'text1' }, ''],
                [{text:'Dirección:', style: 'text1' }, ''],
                [{text:'Teléfonos:', style: 'text1' }, ''],
                [{text:'Región:', style: 'text1' }, ''],
                [{text:'Comuna:', style: 'text1' }, ''],
                [{text:'Correo electrónico:', style: 'text1' }, ''],
                [{text:'Director:', style: 'text1' }, ''],
                [{ text: 'RUT Director:', style: 'text1' }, '']
            ];
            arrBodyNNA_Abandono = GeneraArrNNA_Abandono();
            arrBodyNNA_AdolecentesConHijos = GeneraArrNNA_Adolescente();
            break;
        case 1:
            arrBody = [
                [{ text: 'Institución:', style: 'text1' }, { text: $('#general_000_sel_Institucion option:selected').text(), style: 'text1' }],
                [{ text: 'Proyecto:', style: 'text1' }, { text: $('#general_001_sel_proyecto option:selected').text(), style: 'text1' }],
                [{ text: 'Tipo de organismo:', style: 'text1' }, { text: $('#general_002_tipoOrganismo').val(), style: 'text1' }],
                [{ text: 'Modelo de Intervención:', style: 'text1' }, { text: $('#general_003_modeloIntervencion').val(), style: 'text1' }],
                [{ text: 'Dirección:', style: 'text1' }, { text: $('#general_004_direccion').val(), style: 'text1' }],
                [{ text: 'Teléfonos:', style: 'text1' }, { text: $('#general_005_telefonos').val(), style: 'text1' }],
                [{ text: 'Región:', style: 'text1' }, { text: $('#general_006_region').val(), style: 'text1' }],
                [{ text: 'Comuna:', style: 'text1' }, { text: $('#general_007_comuna').val(), style: 'text1' }],
                [{ text: 'Correo electrónico:', style: 'text1' }, { text: $('#general_008_email').val(), style: 'text1' }],
                [{ text: 'Director:', style: 'text1' }, { text: $('#general_009_directorProyecto').val(), style: 'text1' }],
                [{ text: 'RUT Director:', style: 'text1' }, { text: $('#general_010_rut_director_proyecto').val(), style: 'text1' }]
            ];
            arrBodyNNA_Abandono = GeneraArrNNA_Abandono();
            arrBodyNNA_AdolecentesConHijos = GeneraArrNNA_Adolescente();
            break;
        case 2:
            arrBody = [
                [{text:'Institución:', style: 'text1' }, {text:$('#general_000_sel_Institucion option:selected').text(), style: 'text1'}],
                [{text:'Proyecto:', style: 'text1' }, {text:$('#general_001_sel_proyecto option:selected').text(), style: 'text1'}],
                [{text:'Tipo de organismo:', style: 'text1' }, {text:$('#general_002_tipoOrganismo').val(), style: 'text1'}],
                [{text:'Modelo de Intervención:', style: 'text1' }, {text:$('#general_003_modeloIntervencion').val(), style: 'text1'}],
                [{text:'Dirección:', style: 'text1' }, {text:$('#general_004_direccion').val(), style: 'text1'}],
                [{text:'Teléfonos:', style: 'text1' }, {text:$('#general_005_telefonos').val(), style: 'text1'}],
                [{text:'Región:', style: 'text1' }, {text:$('#general_006_region').val(), style: 'text1'}],
                [{text:'Comuna:', style: 'text1' }, {text:$('#general_007_comuna').val(), style: 'text1'}],
                [{text:'Correo electrónico:', style: 'text1' }, {text:$('#general_008_email').val(), style: 'text1'}],
                [{text:' Proyecto:', style: 'text1' }, {text:$('#general_009_directorProyecto').val(), style: 'text1'}],
                [{ text: 'RUT  Proyecto:', style: 'text1' }, { text: $('#general_010_rut_director_proyecto').val(), style: 'text1' }]
            ];

            arrBodyNNA_Abandono = [];
            arrBodyNNA_Abandono[0] = [{ text: 'DETALLE DE NNA EN COMPLETO ABANDONO', style: 'header2', colSpan: 4 }, {}, {}, {}];
            arrBodyNNA_Abandono[1] = ['RUT', 'NOMBRE NNA', 'RIT', 'TRIBUNAL'];

            arrBodyNNA_AdolecentesConHijos = [];
            arrBodyNNA_AdolecentesConHijos[0] = [{ text: 'DETALLE DE ADOLESCENTE CON HIJOS LACTANTES', style: 'header2', colSpan: 4 }, {}, {}, {}];
            arrBodyNNA_AdolecentesConHijos[1] = ['RUT', 'NOMBRE NNA', 'RIT', 'TRIBUNAL'];

            var tblNNA_Abandono = document.getElementById("tbl_NNA_abandonados");
            var tblNNA_Adolescente = document.getElementById("tbl_adolescente_con_hijos");

            var rowCount1 = tblNNA_Abandono.rows.length;
            var rowCount2 = tblNNA_Adolescente.rows.length;

            var k = 2;
            if (rowCount1 > 2) {
                for (var i = 2; i <= rowCount1 - 1; i++) {
                    var row = tblNNA_Abandono.rows[i];
                    arrBodyNNA_Abandono[k] = [{ text: EliminaEspacios(row.cells[1].innerHTML), style: 'text2' }, { text: EliminaEspacios(row.cells[2].innerHTML), style: 'text2' }, { text: EliminaEspacios(row.cells[3].innerHTML), style: 'text2' }, { text: EliminaEspacios(row.cells[4].innerHTML), style: 'text2' }];
                    k++;
                }
                if (k < 30) {
                    for (var i = k; i <= 30; i++) {
                        arrBodyNNA_Abandono[i] = ['', '', '', ''];
                    }
                }
            }
            else {
               arrBodyNNA_Abandono = GeneraArrNNA_Abandono();
            }

            k = 2;
            if (rowCount2 > 2) {
                for (var i = 2; i <= rowCount2 - 1; i++) {
                    var row = tblNNA_Adolescente.rows[i];
                    arrBodyNNA_AdolecentesConHijos[k] = [{ text: EliminaEspacios(row.cells[1].innerHTML), style: 'text2' }, { text: EliminaEspacios(row.cells[2].innerHTML), style: 'text2' }, { text: EliminaEspacios(row.cells[3].innerHTML), style: 'text2' }, { text: EliminaEspacios(row.cells[4].innerHTML), style: 'text2' }];
                    k++;
                }
                if (k < 30) {
                    for (var i = k; i <= 30; i++) {
                        arrBodyNNA_AdolecentesConHijos[i] = ['', '', '', ''];
                    }
                }
            }
            else {
                arrBodyNNA_AdolecentesConHijos = GeneraArrNNA_Adolescente();
            }
            
            break;
    }

    //variables antecedentes generales-------------
    var general_012_pobvig_masculina = "";
    var general_013_pobvig_femenina = "";
    var pobvig_total = "";
    var general_014_plazaConv_masculina = "";
    var general_015_plazaConv_femenina = "";
    var plazaConv_total = "";
    var general_016_otrasPlazas_masculina = "";
    var general_017_otrasPlazas_femenina = "";
    var otrasPlazas_total = "";
    var general_018_totalNNApresent_masculina = "";
    var general_019_totalNNApresent_femenina = "";
    var totalNNApresent_total = "";
    var general_020_totalNNAacercFamilia_masculina = "";
    var general_021_totalNNAacercFamilia_femenina = "";
    var totalNNAacercFamilia_total = "";
    var general_022_totalResidenMayor_masculina = "";
    var general_023_totalResidenMayor_femenina = "";
    var totalResidenMayor_total = "";
    var general_024_abandonoSist_masculina = "";
    var general_025_abandonoSist_femenina = "";
    var abandonoSist_total = "";
    var general_026_hospitalizados_masculina = "";
    var general_027_hospitalizados_femenina = "";
    var hospitalizados_total = "";
    var general_028_totalNNAart80bis_masculina = "";
    var general_029_totalNNAart80bis_femenina = "";
    var totalNNAart80bis_total = "";
    var general_030_totalNNAabandono_masculina = "";
    var general_031_totalNNAabandono_femenina = "";
    var totalNNAabandono_total = "";
    var general_038_totalNNA_adoslecente_chijo_masculina = "";
    var general_039_totalNNA_adoslecente_chijo_femenina = "";
    var totalNNA_adoslecente_chijo_total = "";
    var general_032_totalNNA_suscep_adopcion_masculina = "";
    var general_033_totalNNA_suscep_adopcion_femenina = "";
    var totalNNA_suscep_adopcion_total = "";
    var general_034_totalNNA_enlace_adopcion_masculina = "";
    var general_035_totalNNA_enlace_adopcion_femenina = "";
    var totalNNA_enlace_adopcion_total = "";
    var general_036_totalNNA_causaini_adopcion_masculina = "";
    var general_037_totalNNA_causaini_adopcion_femenina = "";
    var totalNNA_causaini_adopcion_total = "";

    //variables antecedentes población y capacidad-------------
    var poblacion_001_sel_reside_con_subven = "";
    var poblacion_002_sel_sexo_atendidos = "";
    var poblacion_003_sel_rango_etareo_predomina = "";
    var poblacion_004_poblacion_vigente = "";
    var poblacion_005_tipo_vulneracion_mas_frecuente = "";

    //variables antecedentes dotación-------------
    var dotacion_001_sel_director_existe = "";
    var dotacion_002_sel_director_cantidad = "";
    var dotacion_003_sel_director_tipo_jornada = "";
    var dotacion_004_sel_director_horas_semanales = "";
    var dotacion_005_sel_asistente_existe = "";
    var dotacion_006_sel_asistente_cantidad = "";
    var dotacion_007_sel_asistente_tipo_jornada = "";
    var dotacion_008_sel_asistente_horas_semanales = "";
    var dotacion_009_sel_psicologo_existe = "";
    var dotacion_010_sel_psicologo_cantidad = "";
    var dotacion_011_sel_psicologo_tipo_jornada = "";
    var dotacion_012_sel_psicologo_horas_semanales = "";
    var dotacion_013_sel_enfermero_existe = "";
    var dotacion_014_sel_enfermero_cantidad = "";
    var dotacion_015_sel_enfermero_tipo_jornada = "";
    var dotacion_016_sel_enfermero_horas_semanales = "";
    var dotacion_017_sel_auxenfermero_existe = "";
    var dotacion_018_sel_auxenfermero_cantidad = "";
    var dotacion_019_sel_auxenfermero_tipo_jornada = "";
    var dotacion_020_sel_auxenfermero_horas_semanales = "";
    var dotacion_021_sel_medico_existe = "";
    var dotacion_022_sel_medico_cantidad = "";
    var dotacion_023_sel_medico_tipo_jornada = "";
    var dotacion_024_sel_medico_horas_semanales = "";
    var dotacion_025_sel_psiquiatra_existe = "";
    var dotacion_026_sel_psiquiatra_cantidad = "";
    var dotacion_027_sel_psiquiatra_tipo_jornada = "";
    var dotacion_028_sel_psiquiatra_horas_semanales = "";
    var dotacion_029_sel_terapeuta_ocup_existe = "";
    var dotacion_030_sel_terapeuta_ocup_cantidad = "";
    var dotacion_031_sel_terapeuta_ocup_tipo_jornada = "";
    var dotacion_032_sel_terapeuta_ocup_horas_semanales = "";
    var dotacion_033_sel_kinesiologo_existe = "";
    var dotacion_034_sel_kinesiologo_cantidad = "";
    var dotacion_035_sel_kinesiologo_tipo_jornada = "";
    var dotacion_036_sel_kinesiologo_horas_semanales = "";
    var dotacion_037_sel_nutricionista_existe = "";
    var dotacion_038_sel_nutricionista_cantidad = "";
    var dotacion_039_sel_nutricionista_tipo_jornada = "";
    var dotacion_040_sel_nutricionista_horas_semanales = "";
    var dotacion_041_sel_fonoaudiologo_existe = "";
    var dotacion_042_sel_fonoaudiologo_cantidad = "";
    var dotacion_043_sel_fonoaudiologo_tipo_jornada = "";
    var dotacion_044_sel_fonoaudiologo_horas_semanales = "";
    var dotacion_045_sel_profesorEducaFisica_existe = "";
    var dotacion_046_sel_profesorEducaFisica_cantidad = "";
    var dotacion_047_sel_profesorEducaFisica_tipo_jornada = "";
    var dotacion_048_sel_profesorEducaFisica_horas_semanales = "";
    var dotacion_049_sel_psicopedagogo_existe = "";
    var dotacion_050_sel_psicopedagogo_cantidad = "";
    var dotacion_051_sel_psicopedagogo_tipo_jornada = "";
    var dotacion_052_sel_psicopedagogo_horas_semanales = "";
    var dotacion_053_sel_educadoraParvulos_existe = "";
    var dotacion_054_sel_educadoraParvulos_cantidad = "";
    var dotacion_055_sel_educadoraParvulos_tipo_jornada = "";
    var dotacion_056_sel_educadoraParvulos_horas_semanales = "";
    var dotacion_057_sel_educadoraTratoDirecto_existe = "";
    var dotacion_058_sel_educadoraTratoDirecto_cantidad = "";
    var dotacion_059_sel_educadoraTratoDirecto_tipo_jornada = "";
    var dotacion_060_sel_educadoraTratoDirecto_horas_semanales = "";
    var dotacion_061_sel_manipuladorAlimentos_existe = "";
    var dotacion_062_sel_manipuladorAlimentos_cantidad = "";
    var dotacion_063_sel_manipuladorAlimentos_tipo_jornada = "";
    var dotacion_064_sel_manipuladorAlimentos_horas_semanales = "";
    var dotacion_065_sel_apoyoAdministrativo_existe = "";
    var dotacion_066_sel_apoyoAdministrativo_cantidad = "";
    var dotacion_067_sel_apoyoAdministrativo_tipo_jornada = "";
    var dotacion_068_sel_apoyoAdministrativo_horas_semanales = "";
    var dotacion_069_sel_personalAseo_existe = "";
    var dotacion_070_sel_personalAseo_cantidad = "";
    var dotacion_071_sel_personalAseo_tipo_jornada = "";
    var dotacion_072_sel_personalAseo_horas_semanales = "";
    var dotacion_073_sel_personalLavanderia_existe = "";
    var dotacion_074_sel_personalLavandería_cantidad = "";
    var dotacion_075_sel_personalLavandería_tipo_joranada = "";
    var dotacion_076_sel_personalLavandería_horas_semanales = "";
    var dotacion_077_sel_monitoresTalleristas_existe = "";
    var dotacion_078_sel_monitoresTalleristas_cantidad = "";
    var dotacion_079_sel_monitoresTalleristas_tipo_jornada = "";
    var dotacion_080_sel_monitoresTalleristas_horas_semanales = "";
    var dotacion_081_sel_alumnosPractica_existe = "";
    var dotacion_082_sel_alumnosPractica_cantidad = "";
    var dotacion_083_sel_alumnosPractica_tipo_jornada = "";
    var dotacion_084_sel_alumnosPractica_horas_semanales = "";
    var dotacion_085_sel_apoyoVoluntario_existe = "";
    var dotacion_086_sel_apoyoVoluntario_cantidad = "";
    var dotacion_087_sel_apoyoVoluntario_tipo_jornada = "";
    var dotacion_088_sel_apoyoVoluntario_horas_semanales = "";
    var dotacion_089_sel_Otros_existe = "";
    var dotacion_090_sel_Otros_cantidad = "";
    var dotacion_091_sel_Otros_tipo_jornada = "";
    var dotacion_092_sel_Otros_horas_semanales = "";
    var dotacion_093_sel_PersonalLicenciaMedica_existe = "";
    var dotacion_094_sel_PersonalLicenciaMedica_cantidad = "";
    var dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada = "";
    var dotacion_096_sel_PersonalLicenciaMedica_horas_semanales = "";
    var dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe = "";
    var dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad = "";
    var dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada = "";
    var dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales = "";
    var dotacion_101_Observaciones = "";

    //variables antecedentes infraestructura-------------
    var IdParInfraestructura_1 = "";
    var IdValor_1 = "";
    var IdParInfraestructura_2 = "";
    var IdValor_2 = "";
    var IdParInfraestructura_3 = "";
    var IdValor_3 = "";
    var IdParInfraestructura_4 = "";
    var IdValor_4 = "";
    var IdParInfraestructura_5 = "";
    var IdValor_5 = "";
    var IdParInfraestructura_6 = "";
    var IdValor_6 = "";
    var IdParInfraestructura_7 = "";
    var IdValor_7 = "";
    var IdParInfraestructura_8 = "";
    var IdValor_8 = "";
    var IdParInfraestructura_9 = "";
    var IdValor_9 = "";
    var IdParInfraestructura_10 = "";
    var IdValor_10 = "";
    var IdParInfraestructura_11 = "";
    var IdValor_11 = "";
    var IdParInfraestructura_12 = "";
    var IdValor_12 = "";
    var IdParInfraestructura_13 = "";
    var IdValor_13 = "";
    var IdParInfraestructura_14 = "";
    var IdValor_14 = "";
    var IdParInfraestructura_15 = "";
    var IdValor_15 = "";
    var IdParInfraestructura_16 = "";
    var IdValor_16 = "";
    var IdParInfraestructura_17 = "";
    var IdValor_17 = "";
    var IdParInfraestructura_18 = "";
    var IdValor_18 = "";
    var IdParInfraestructura_19 = "";
    var IdValor_19 = "";
    var IdParInfraestructura_20 = "";
    var IdValor_20 = "";
    var IdParInfraestructura_21 = "";
    var IdValor_21 = "";
    var IdParInfraestructura_22 = "";
    var IdValor_22 = "";
    var IdParInfraestructura_23 = "";
    var IdValor_23 = "";
    var IdParInfraestructura_24 = "";
    var IdValor_24 = "";
    var IdParInfraestructura_25 = "";
    var IdValor_25 = "";
    var IdParInfraestructura_26 = "";
    var IdValor_26 = "";
    var IdParInfraestructura_27 = "";
    var IdParInfraestructura_28 = "";
    var IdParInfraestructura_29 = "";
    var IdParInfraestructura_30 = "";
    var IdParInfraestructura_31 = "";
    var IdParInfraestructura_32 = "";
    var IdParInfraestructura_33 = "";
    var IdParInfraestructura_34 = "";
    var IdParInfraestructura_35 = "";
    var IdParInfraestructura_36 = "";
    var IdParInfraestructura_37 = "";
    var Infraest_049_observaciones = "";

    //variables antecedentes seguridad-------------
    var IdParSeguridad_1 = "";
    var IdParSeguridad_2 = "";
    var IdParSeguridad_3 = "";
    var IdParSeguridad_4 = "";
    var IdParSeguridad_5 = "";
    var IdParSeguridad_6 = "";
    var seguridad_007_capacitacionPersonal_existe = "";
    var IdParSeguridad_7 = "";
    var IdParSeguridad_8 = "";
    var IdParSeguridad_9 = "";
    var IdParSeguridad_10 = "";
    var IdParSeguridad_11 = "";
    var IdParSeguridad_12 = "";
    var IdParSeguridad_13 = "";
    var seguridad_011_observaciones = "";

    //variables antecedentes salud -------------
    var IdParSaludValor_1 = "";
    var IdParSaludValor_2 = "";
    var IdParSaludValor_3 = "";
    var IdParSaludValor_4 = "";
    var IdParSaludValor_5 = "";
    var IdParSaludValor_6 = "";
    var IdParSaludValor_7 = "";
    var IdParSaludValor_8 = "";
    var IdParSaludValor_9 = "";
    var IdParSaludValor_10 = "";
    var IdParSaludValor_11 = "";
    var IdParSaludValor_12 = "";
    var IdParSalud_13 = "";
    var IdParSalud_14 = "";
    var IdParSalud_15 = "";
    var IdParSalud_16 = "";
    var IdParSalud_17 = "";
    var IdParSalud_18 = "";
    var IdParSalud_19 = "";
    var IdParSalud_20 = "";
    var IdParSalud_21 = "";
    var IdParSalud_22 = "";
    var IdParSaludValor_22 = "";
    var salud_016_observaciones = "";

    //variables antecedentes educacion-------------
    var educacion_001_NNA_matriculados = "";
    var educacion_001_NNA_asisten_colegio_cantidad = "";
    var educacion_002_NNA_NO_asisten_colegio_cantidad = "";
    var educacion_002_NNA_NO_asisten_colegio_cantidad_motivo = "";
    var educacion_003_NNA_retrasoEscolar_cantidad = "";
    var educacion_004_NNA_matriculaCancelada_cantidad = "";
    var educacion_005_NNA_asisten_colegioDiferencial_cantidad = "";
    var educacion_006_NNA_asisten_colegioNivelacion_cantidad = "";
    var educacion_006_NNA_examenesLibres_cantidad = "";
    var educacion_007_sel_EspacioEstudio_y_Tareas_existe = "";
    var educacion_008_sel_materialBibliiografico_existe = "";
    var educacion_009_sel_computadores_existe = "";
    var educacion_010_sel_AccesoControladoInternet_existe = "";
    var educacion_011_observaciones = "";

    //variables antecedentes alimentacion-------------
    var IdParAlimentacion_1 = "";
    var IdParAlimentacion_2 = "";
    var IdParAlimentacion_3 = "";
    var IdParAlimentacion_4 = "";
    var IdParAlimentacion_5 = "";
    var IdParAlimentacion_6 = "";
    var IdParAlimentacion_7 = "";
    var IdParAlimentacion_8 = "";
    var IdParAlimentacion_9 = "";
    var alimentacion_009_observacion = "";

    //variables antecedentes residencia-------------
    var idParGestionResidencia_1 = "";
    var idParGestionResidencia_2 = "";
    var idParGestionResidencia_3 = "";
    var idParGestionResidencia_4 = "";
    var idParGestionResidencia_5 = "";
    var idParGestionResidencia_6 = "";
    var idParGestionResidencia_7 = "";
    var idParGestionResidencia_8 = "";
    var idParGestionResidencia_9 = "";
    var idParGestionResidencia_10 = "";
    var idParGestionResidencia_11 = "";
    var idParGestionResidencia_12 = "";
    var idParGestionResidencia_13 = "";
    var idParGestionResidencia_14 = "";
    var idParGestionResidencia_15 = "";
    var idParGestionResidencia_16 = "";
    var idParGestionResidencia_17 = "";
    var idParGestionResidencia_18 = "";
    var gestionResid_017_observaciones = "";

    //Rescato los datos de todos los campos he imprimo los valores en PDF si se ha solicitado por el usuario:
    if (tipoFormularioPDF_FR == 2) {

        //variables antecedentes generales-------------
        general_012_pobvig_masculina = $("#general_012_pobvig_masculina").val();
        general_013_pobvig_femenina = $("#general_013_pobvig_femenina").val();
        pobvig_total = $("#pobvig_total").val();
        general_014_plazaConv_masculina = $("#general_014_plazaConv_masculina").val();
        general_015_plazaConv_femenina = $("#general_015_plazaConv_femenina").val();
        plazaConv_total = $("#plazaConv_total").val();
        general_016_otrasPlazas_masculina = $("#general_016_otrasPlazas_masculina").val();
        general_017_otrasPlazas_femenina = $("#general_017_otrasPlazas_femenina").val();
        otrasPlazas_total = $("#otrasPlazas_total").val();
        general_018_totalNNApresent_masculina = $("#general_018_totalNNApresent_masculina").val();
        general_019_totalNNApresent_femenina = $("#general_019_totalNNApresent_femenina").val();
        totalNNApresent_total = $("#totalNNApresent_total").val();
        general_020_totalNNAacercFamilia_masculina = $("#general_020_totalNNAacercFamilia_masculina").val();
        general_021_totalNNAacercFamilia_femenina = $("#general_021_totalNNAacercFamilia_femenina").val();
        totalNNAacercFamilia_total = $("#totalNNAacercFamilia_total").val();
        general_022_totalResidenMayor_masculina = $("#general_022_totalResidenMayor_masculina").val();
        general_023_totalResidenMayor_femenina = $("#general_023_totalResidenMayor_femenina").val();
        totalResidenMayor_total = $("#totalResidenMayor_total").val();
        general_024_abandonoSist_masculina = $("#general_024_abandonoSist_masculina").val();
        general_025_abandonoSist_femenina = $("#general_025_abandonoSist_femenina").val();
        abandonoSist_total = $("#abandonoSist_total").val();
        general_026_hospitalizados_masculina = $("#general_026_hospitalizados_masculina").val();
        general_027_hospitalizados_femenina = $("#general_027_hospitalizados_femenina").val();
        hospitalizados_total = $("#hospitalizados_total").val();
        general_028_totalNNAart80bis_masculina = $("#general_028_totalNNAart80bis_masculina").val();
        general_029_totalNNAart80bis_femenina = $("#general_029_totalNNAart80bis_femenina").val();
        totalNNAart80bis_total = $("#totalNNAart80bis_total").val();
        general_030_totalNNAabandono_masculina = $("#general_030_totalNNAabandono_masculina").val();
        general_031_totalNNAabandono_femenina = $("#general_031_totalNNAabandono_femenina").val();
        totalNNAabandono_total = $("#totalNNAabandono_total").val();
        general_038_totalNNA_adoslecente_chijo_masculina = $("#general_038_totalNNA_adoslecente_chijo_masculina").val();
        general_039_totalNNA_adoslecente_chijo_femenina = $("#general_039_totalNNA_adoslecente_chijo_femenina").val();
        totalNNA_adoslecente_chijo_total = $("#totalNNA_adoslecente_chijo_total").val();
        general_032_totalNNA_suscep_adopcion_masculina = $("#general_032_totalNNA_suscep_adopcion_masculina").val();
        general_033_totalNNA_suscep_adopcion_femenina = $("#general_033_totalNNA_suscep_adopcion_femenina").val();
        totalNNA_suscep_adopcion_total = $("#totalNNA_suscep_adopcion_total").val();
        general_034_totalNNA_enlace_adopcion_masculina =$("#general_034_totalNNA_enlace_adopcion_masculina").val();
        general_035_totalNNA_enlace_adopcion_femenina = $("#general_035_totalNNA_enlace_adopcion_femenina").val();
        totalNNA_enlace_adopcion_total = $("#totalNNA_enlace_adopcion_total").val();
        general_036_totalNNA_causaini_adopcion_masculina = $("#general_036_totalNNA_causaini_adopcion_masculina").val();
        general_037_totalNNA_causaini_adopcion_femenina = $("#general_037_totalNNA_causaini_adopcion_femenina").val();
        totalNNA_causaini_adopcion_total = $("#totalNNA_causaini_adopcion_total").val();

        //variables antecedentes población y capacidad-------------
        poblacion_001_sel_reside_con_subven = $("#poblacion_001_sel_reside_con_subven option:selected").text();
        poblacion_002_sel_sexo_atendidos = $("#poblacion_002_sel_sexo_atendidos option:selected").text();
        poblacion_003_sel_rango_etareo_predomina = $("#poblacion_003_sel_rango_etareo_predomina option:selected").text();
        poblacion_004_poblacion_vigente = $("#poblacion_004_poblacion_vigente option:selected").text();
        poblacion_005_tipo_vulneracion_mas_frecuente = $("#poblacion_005_tipo_vulneracion_mas_frecuente").val();

        //variables antecedentes dotación-------------
        dotacion_001_sel_director_existe = $("#dotacion_001_sel_director_existe option:selected").text();
        dotacion_002_sel_director_cantidad = $("#dotacion_002_sel_director_cantidad").val();
        dotacion_003_sel_director_tipo_jornada = $("#dotacion_003_sel_director_tipo_jornada option:selected").text();
        dotacion_004_sel_director_horas_semanales = $("#dotacion_004_sel_director_horas_semanales").val();
        dotacion_005_sel_asistente_existe = $("#dotacion_005_sel_asistente_existe option:selected").text();
        dotacion_006_sel_asistente_cantidad = $("#dotacion_006_sel_asistente_cantidad").val();
        dotacion_007_sel_asistente_tipo_jornada = $("#dotacion_007_sel_asistente_tipo_jornada option:selected").text();
        dotacion_008_sel_asistente_horas_semanales = $("#dotacion_008_sel_asistente_horas_semanales").val();
        dotacion_009_sel_psicologo_existe = $("#dotacion_009_sel_psicologo_existe option:selected").text();
        dotacion_010_sel_psicologo_cantidad = $("#dotacion_010_sel_psicologo_cantidad").val();
        dotacion_011_sel_psicologo_tipo_jornada = $("#dotacion_011_sel_psicologo_tipo_jornada option:selected").text();
        dotacion_012_sel_psicologo_horas_semanales = $("#dotacion_012_sel_psicologo_horas_semanales").val();
        dotacion_013_sel_enfermero_existe = $("#dotacion_013_sel_enfermero_existe option:selected").text();
        dotacion_014_sel_enfermero_cantidad = $("#dotacion_014_sel_enfermero_cantidad").val();
        dotacion_015_sel_enfermero_tipo_jornada = $("#dotacion_015_sel_enfermero_tipo_jornada option:selected").text();
        dotacion_016_sel_enfermero_horas_semanales = $("#dotacion_016_sel_enfermero_horas_semanales").val();
        dotacion_017_sel_auxenfermero_existe = $("#dotacion_017_sel_auxenfermero_existe option:selected").text();
        dotacion_018_sel_auxenfermero_cantidad = $("#dotacion_018_sel_auxenfermero_cantidad").val();
        dotacion_019_sel_auxenfermero_tipo_jornada = $("#dotacion_019_sel_auxenfermero_tipo_jornada option:selected").text();
        dotacion_020_sel_auxenfermero_horas_semanales = $("#dotacion_020_sel_auxenfermero_horas_semanales").val();
        dotacion_021_sel_medico_existe = $("#dotacion_021_sel_medico_existe option:selected").text();
        dotacion_022_sel_medico_cantidad = $("#dotacion_022_sel_medico_cantidad").val();
        dotacion_023_sel_medico_tipo_jornada = $("#dotacion_023_sel_medico_tipo_jornada option:selected").text();
        dotacion_024_sel_medico_horas_semanales = $("#dotacion_024_sel_medico_horas_semanales").val();
        dotacion_025_sel_psiquiatra_existe = $("#dotacion_025_sel_psiquiatra_existe option:selected").text();
        dotacion_026_sel_psiquiatra_cantidad = $("#dotacion_026_sel_psiquiatra_cantidad").val();
        dotacion_027_sel_psiquiatra_tipo_jornada = $("#dotacion_027_sel_psiquiatra_tipo_jornada option:selected").text();
        dotacion_028_sel_psiquiatra_horas_semanales = $("#dotacion_028_sel_psiquiatra_horas_semanales").val();
        dotacion_029_sel_terapeuta_ocup_existe = $("#dotacion_029_sel_terapeuta_ocup_existe option:selected").text();
        dotacion_030_sel_terapeuta_ocup_cantidad = $("#dotacion_030_sel_terapeuta_ocup_cantidad").val();
        dotacion_031_sel_terapeuta_ocup_tipo_jornada = $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada option:selected").text();
        dotacion_032_sel_terapeuta_ocup_horas_semanales = $("#dotacion_032_sel_terapeuta_ocup_horas_semanales").val();
        dotacion_033_sel_kinesiologo_existe = $("#dotacion_033_sel_kinesiologo_existe option:selected").text();
        dotacion_034_sel_kinesiologo_cantidad = $("#dotacion_034_sel_kinesiologo_cantidad").val();
        dotacion_035_sel_kinesiologo_tipo_jornada = $("#dotacion_035_sel_kinesiologo_tipo_jornada option:selected").text();
        dotacion_036_sel_kinesiologo_horas_semanales = $("#dotacion_036_sel_kinesiologo_horas_semanales").val();
        dotacion_037_sel_nutricionista_existe = $("#dotacion_037_sel_nutricionista_existe option:selected").text();
        dotacion_038_sel_nutricionista_cantidad = $("#dotacion_038_sel_nutricionista_cantidad").val();
        dotacion_039_sel_nutricionista_tipo_jornada = $("#dotacion_039_sel_nutricionista_tipo_jornada option:selected").text();
        dotacion_040_sel_nutricionista_horas_semanales = $("#dotacion_040_sel_nutricionista_horas_semanales").val();
        dotacion_041_sel_fonoaudiologo_existe = $("#dotacion_041_sel_fonoaudiologo_existe option:selected").text();
        dotacion_042_sel_fonoaudiologo_cantidad = $("#dotacion_042_sel_fonoaudiologo_cantidad").val();
        dotacion_043_sel_fonoaudiologo_tipo_jornada = $("#dotacion_043_sel_fonoaudiologo_tipo_jornada option:selected").text();
        dotacion_044_sel_fonoaudiologo_horas_semanales = $("#dotacion_044_sel_fonoaudiologo_horas_semanales").val();
        dotacion_045_sel_profesorEducaFisica_existe = $("#dotacion_045_sel_profesorEducaFisica_existe option:selected").text();
        dotacion_046_sel_profesorEducaFisica_cantidad = $("#dotacion_046_sel_profesorEducaFisica_cantidad").val();
        dotacion_047_sel_profesorEducaFisica_tipo_jornada = $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada option:selected").text();
        dotacion_048_sel_profesorEducaFisica_horas_semanales = $("#dotacion_048_sel_profesorEducaFisica_horas_semanales").val();
        dotacion_049_sel_psicopedagogo_existe = $("#dotacion_049_sel_psicopedagogo_existe option:selected").text();
        dotacion_050_sel_psicopedagogo_cantidad = $("#dotacion_050_sel_psicopedagogo_cantidad").val();
        dotacion_051_sel_psicopedagogo_tipo_jornada = $("#dotacion_051_sel_psicopedagogo_tipo_jornada option:selected").text();
        dotacion_052_sel_psicopedagogo_horas_semanales = $("#dotacion_052_sel_psicopedagogo_horas_semanales").val();
        dotacion_053_sel_educadoraParvulos_existe = $("#dotacion_053_sel_educadoraParvulos_existe option:selected").text();
        dotacion_054_sel_educadoraParvulos_cantidad = $("#dotacion_054_sel_educadoraParvulos_cantidad").val();
        dotacion_055_sel_educadoraParvulos_tipo_jornada = $("#dotacion_055_sel_educadoraParvulos_tipo_jornada option:selected").text();
        dotacion_056_sel_educadoraParvulos_horas_semanales = $("#dotacion_056_sel_educadoraParvulos_horas_semanales").val();
        dotacion_057_sel_educadoraTratoDirecto_existe = $("#dotacion_057_sel_educadoraTratoDirecto_existe option:selected").text();
        dotacion_058_sel_educadoraTratoDirecto_cantidad = $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val();
        dotacion_059_sel_educadoraTratoDirecto_tipo_jornada = $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada option:selected").text();
        dotacion_060_sel_educadoraTratoDirecto_horas_semanales = $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales").val();
        dotacion_061_sel_manipuladorAlimentos_existe = $("#dotacion_061_sel_manipuladorAlimentos_existe option:selected").text();
        dotacion_062_sel_manipuladorAlimentos_cantidad = $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val();
        dotacion_063_sel_manipuladorAlimentos_tipo_jornada = $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada option:selected").text();
        dotacion_064_sel_manipuladorAlimentos_horas_semanales = $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales").val();
        dotacion_065_sel_apoyoAdministrativo_existe = $("#dotacion_065_sel_apoyoAdministrativo_existe option:selected").text();
        dotacion_066_sel_apoyoAdministrativo_cantidad = $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val();
        dotacion_067_sel_apoyoAdministrativo_tipo_jornada = $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada option:selected").text();
        dotacion_068_sel_apoyoAdministrativo_horas_semanales = $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales").val();
        dotacion_069_sel_personalAseo_existe = $("#dotacion_069_sel_personalAseo_existe option:selected").text();
        dotacion_070_sel_personalAseo_cantidad = $("#dotacion_070_sel_personalAseo_cantidad").val();
        dotacion_071_sel_personalAseo_tipo_jornada = $("#dotacion_071_sel_personalAseo_tipo_jornada option:selected").text();
        dotacion_072_sel_personalAseo_horas_semanales = $("#dotacion_072_sel_personalAseo_horas_semanales").val();
        dotacion_073_sel_personalLavanderia_existe = $("#dotacion_073_sel_personalLavanderia_existe option:selected").text();
        dotacion_074_sel_personalLavandería_cantidad = $("#dotacion_074_sel_personalLavandería_cantidad").val();
        dotacion_075_sel_personalLavandería_tipo_joranada = $("#dotacion_075_sel_personalLavandería_tipo_joranada option:selected").text();
        dotacion_076_sel_personalLavandería_horas_semanales = $("#dotacion_076_sel_personalLavandería_horas_semanales").val();
        dotacion_077_sel_monitoresTalleristas_existe = $("#dotacion_077_sel_monitoresTalleristas_existe option:selected").text();
        dotacion_078_sel_monitoresTalleristas_cantidad = $("#dotacion_078_sel_monitoresTalleristas_cantidad").val();
        dotacion_079_sel_monitoresTalleristas_tipo_jornada = $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada option:selected").text();
        dotacion_080_sel_monitoresTalleristas_horas_semanales = $("#dotacion_080_sel_monitoresTalleristas_horas_semanales").val();
        dotacion_081_sel_alumnosPractica_existe = $("#dotacion_081_sel_alumnosPractica_existe option:selected").text();
        dotacion_082_sel_alumnosPractica_cantidad = $("#dotacion_082_sel_alumnosPractica_cantidad").val();
        dotacion_083_sel_alumnosPractica_tipo_jornada = $("#dotacion_083_sel_alumnosPractica_tipo_jornada option:selected").text();
        dotacion_084_sel_alumnosPractica_horas_semanales = $("#dotacion_084_sel_alumnosPractica_horas_semanales").val();
        dotacion_085_sel_apoyoVoluntario_existe = $("#dotacion_085_sel_apoyoVoluntario_existe option:selected").text();
        dotacion_086_sel_apoyoVoluntario_cantidad = $("#dotacion_086_sel_apoyoVoluntario_cantidad").val();
        dotacion_087_sel_apoyoVoluntario_tipo_jornada = $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada option:selected").text();
        dotacion_088_sel_apoyoVoluntario_horas_semanales = $("#dotacion_088_sel_apoyoVoluntario_horas_semanales").val();
        dotacion_089_sel_Otros_existe = $("#dotacion_089_sel_Otros_existe option:selected").text();
        dotacion_090_sel_Otros_cantidad = $("#dotacion_090_sel_Otros_cantidad").val();
        dotacion_091_sel_Otros_tipo_jornada = $("#dotacion_091_sel_Otros_tipo_jornada option:selected").text();
        dotacion_092_sel_Otros_horas_semanales = $("#dotacion_092_sel_Otros_horas_semanales").val();
        dotacion_093_sel_PersonalLicenciaMedica_existe = $("#dotacion_093_sel_PersonalLicenciaMedica_existe option:selected").text();
        dotacion_094_sel_PersonalLicenciaMedica_cantidad = $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val();
        dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada = $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada option:selected").text();
        dotacion_096_sel_PersonalLicenciaMedica_horas_semanales = $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").val();
        dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe = $("#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe option:selected").text();
        dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad = $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val();
        dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada = $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada option:selected").text();
        dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales = $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").val();
        dotacion_101_Observaciones = $("#dotacion_101_Observaciones").val();

        //variables antecedentes infraestructura-------------
        IdParInfraestructura_1 = $("#IdParInfraestructura_1 option:selected").text(); 
        IdValor_1 = $("#IdValor_1").val();
        IdParInfraestructura_2 = $("#IdParInfraestructura_2 option:selected").text();
        IdValor_2 = $("#IdValor_2").val();
        IdParInfraestructura_3 = $("#IdParInfraestructura_3 option:selected").text();
        IdValor_3 = $("#IdValor_3").val();
        IdParInfraestructura_4 = $("#IdParInfraestructura_4 option:selected").text();
        IdValor_4 = $("#IdValor_4").val();
        IdParInfraestructura_5 = $("#IdParInfraestructura_5 option:selected").text();
        IdValor_5 = $("#IdValor_5").val();
        IdParInfraestructura_6 = $("#IdParInfraestructura_6 option:selected").text();
        IdValor_6 = $("#IdValor_6").val();
        IdParInfraestructura_7 = $("#IdParInfraestructura_7 option:selected").text();
        IdValor_7 = $("#IdValor_7").val();
        IdParInfraestructura_8 = $("#IdParInfraestructura_8 option:selected").text();
        IdValor_8 = $("#IdValor_8").val();
        IdParInfraestructura_9 = $("#IdParInfraestructura_9 option:selected").text();
        IdValor_9 = $("#IdValor_9").val();
        IdParInfraestructura_10 = $("#IdParInfraestructura_10 option:selected").text();
        IdValor_10 = $("#IdValor_10").val();
        IdParInfraestructura_11 = $("#IdParInfraestructura_11 option:selected").text();
        IdValor_11 = $("#IdValor_11").val();
        IdParInfraestructura_12 = $("#IdParInfraestructura_12 option:selected").text();
        IdValor_12 = $("#IdValor_12").val();
        IdParInfraestructura_13 = $("#IdParInfraestructura_13 option:selected").text();
        IdValor_13 = $("#IdValor_13").val();
        IdParInfraestructura_14 = $("#IdParInfraestructura_14 option:selected").text();
        IdValor_14 = $("#IdValor_14").val();
        IdParInfraestructura_15 = $("#IdParInfraestructura_15 option:selected").text();
        IdValor_15 = $("#IdValor_15").val();
        IdParInfraestructura_16 = $("#IdParInfraestructura_16 option:selected").text();
        IdValor_16 = $("#IdValor_16").val();
        IdParInfraestructura_17 = $("#IdParInfraestructura_17 option:selected").text();
        IdValor_17 = $("#IdValor_17").val();
        IdParInfraestructura_18 = $("#IdParInfraestructura_18 option:selected").text();
        IdValor_18 = $("#IdValor_18").val();
        IdParInfraestructura_19 = $("#IdParInfraestructura_19 option:selected").text();
        IdValor_19 = $("#IdValor_19").val();
        IdParInfraestructura_20 = $("#IdParInfraestructura_20 option:selected").text();
        IdValor_20 = $("#IdValor_20").val();
        IdParInfraestructura_21 = $("#IdParInfraestructura_21 option:selected").text();
        IdValor_21 = $("#IdValor_21").val();
        IdParInfraestructura_22 = $("#IdParInfraestructura_22 option:selected").text();
        IdValor_22 = $("#IdValor_22").val();
        IdParInfraestructura_23 = $("#IdParInfraestructura_23 option:selected").text();
        IdValor_23 = $("#IdValor_23").val();
        IdParInfraestructura_24 = $("#IdParInfraestructura_24 option:selected").text();
        IdValor_24 = $("#IdValor_24").val();
        IdParInfraestructura_25 = $("#IdParInfraestructura_25 option:selected").text();
        IdValor_25 = $("#IdValor_25").val();
        IdParInfraestructura_26 = $("#IdParInfraestructura_26 option:selected").text();
        IdValor_26 = $("#IdValor_26").val();
        IdParInfraestructura_27 = $("#IdParInfraestructura_27 option:selected").text();
        IdParInfraestructura_28 = $("#IdParInfraestructura_28 option:selected").text();
        IdParInfraestructura_29 = $("#IdParInfraestructura_29 option:selected").text();
        IdParInfraestructura_30 = $("#IdParInfraestructura_30 option:selected").text();
        IdParInfraestructura_31 = $("#IdParInfraestructura_31 option:selected").text();
        IdParInfraestructura_32 = $("#IdParInfraestructura_32 option:selected").text();
        IdParInfraestructura_33 = $("#IdParInfraestructura_33 option:selected").text();
        IdParInfraestructura_34 = $("#IdParInfraestructura_34 option:selected").text();
        IdParInfraestructura_35 = $("#IdParInfraestructura_35 option:selected").text();
        IdParInfraestructura_36 = $("#IdParInfraestructura_36 option:selected").text();
        IdParInfraestructura_37 = $("#IdParInfraestructura_37 option:selected").text();
        Infraest_049_observaciones = $("#Infraest_049_observaciones").val();

        //variables antecedentes seguridad-------------
        IdParSeguridad_1 = $("#IdParSeguridad_1 option:selected").text();
        IdParSeguridad_2 = $("#IdParSeguridad_2 option:selected").text();
        IdParSeguridad_3 = $("#IdParSeguridad_3 option:selected").text();
        IdParSeguridad_4 = $("#IdParSeguridad_4 option:selected").text();
        IdParSeguridad_5 = $("#IdParSeguridad_5 option:selected").text();
        IdParSeguridad_6 = $("#IdParSeguridad_6 option:selected").text();
        seguridad_007_capacitacionPersonal_existe = $("#seguridad_007_capacitacionPersonal_existe option:selected").text();
        IdParSeguridad_7 = $("#IdParSeguridad_7 option:selected").text();
        IdParSeguridad_8 = $("#IdParSeguridad_8 option:selected").text();
        IdParSeguridad_9 = $("#IdParSeguridad_9 option:selected").text();
        IdParSeguridad_10 = $("#IdParSeguridad_10 option:selected").text();
        IdParSeguridad_11 = $("#IdParSeguridad_11 option:selected").text();
        IdParSeguridad_12 = $("#IdParSeguridad_12 option:selected").text();
        IdParSeguridad_13 = $("#IdParSeguridad_13 option:selected").text();
        seguridad_011_observaciones = $("#seguridad_011_observaciones").val();

        //variables antecedentes salud-------------
        IdParSaludValor_1 = $("#IdParSaludValor_1").val();
        IdParSaludValor_2 = $("#IdParSaludValor_2").val();
        IdParSaludValor_3 = $("#IdParSaludValor_3").val();
        IdParSaludValor_4 = $("#IdParSaludValor_4").val();
        IdParSaludValor_5 = $("#IdParSaludValor_5").val();
        IdParSaludValor_6 = $("#IdParSaludValor_6").val();
        IdParSaludValor_7 = $("#IdParSaludValor_7").val();
        IdParSaludValor_8 = $("#IdParSaludValor_8").val();
        IdParSaludValor_9 = $("#IdParSaludValor_9").val();
        IdParSaludValor_10 = $("#IdParSaludValor_10").val();
        IdParSaludValor_11 = $("#IdParSaludValor_11").val();
        IdParSaludValor_12 = $("#IdParSaludValor_12").val();
        IdParSalud_13 = $("#IdParSalud_13 option:selected").text();
        IdParSalud_14 = $("#IdParSalud_14 option:selected").text();
        IdParSalud_15 = $("#IdParSalud_15 option:selected").text();
        IdParSalud_16 = $("#IdParSalud_16 option:selected").text();
        IdParSalud_17 = $("#IdParSalud_17 option:selected").text();
        IdParSalud_18 = $("#IdParSalud_18 option:selected").text();
        IdParSalud_19 = $("#IdParSalud_19 option:selected").text();
        IdParSalud_20 = $("#IdParSalud_20 option:selected").text();
        IdParSalud_21 = $("#IdParSalud_21 option:selected").text();
        IdParSalud_22 = $("#IdParSalud_22 option:selected").text();
        IdParSaludValor_22 = $("#IdParSaludValor_22").val();
        salud_016_observaciones = $("#salud_016_observaciones").val();

        //variables antecedentes educacion-------------
        educacion_001_NNA_matriculados = $("#educacion_001_NNA_matriculados").val();
        educacion_001_NNA_asisten_colegio_cantidad = $("#educacion_001_NNA_asisten_colegio_cantidad").val();
        educacion_002_NNA_NO_asisten_colegio_cantidad = $("#educacion_002_NNA_NO_asisten_colegio_cantidad").val();
        educacion_002_NNA_NO_asisten_colegio_cantidad_motivo = $("#educacion_002_NNA_NO_asisten_colegio_cantidad_motivo option:selected").text();
        educacion_003_NNA_retrasoEscolar_cantidad = $("#educacion_003_NNA_retrasoEscolar_cantidad").val();
        educacion_004_NNA_matriculaCancelada_cantidad = $("#educacion_004_NNA_matriculaCancelada_cantidad").val();
        educacion_005_NNA_asisten_colegioDiferencial_cantidad = $("#educacion_005_NNA_asisten_colegioDiferencial_cantidad").val();
        educacion_006_NNA_asisten_colegioNivelacion_cantidad = $("#educacion_006_NNA_asisten_colegioNivelacion_cantidad").val();
        educacion_006_NNA_examenesLibres_cantidad = $("#educacion_006_NNA_examenesLibres_cantidad").val();
        educacion_007_sel_EspacioEstudio_y_Tareas_existe = $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe option:selected").text();
        educacion_008_sel_materialBibliiografico_existe = $("#educacion_008_sel_materialBibliiografico_existe option:selected").text();
        educacion_009_sel_computadores_existe = $("#educacion_009_sel_computadores_existe option:selected").text();
        educacion_010_sel_AccesoControladoInternet_existe = $("#educacion_010_sel_AccesoControladoInternet_existe option:selected").text();
        educacion_011_observaciones = $("#educacion_011_observaciones").val();

        //variables antecedentes alimentacion-------------
        IdParAlimentacion_1 = $("#IdParAlimentacion_1 option:selected").text();
        IdParAlimentacion_2 = $("#IdParAlimentacion_2 option:selected").text();
        IdParAlimentacion_3 = $("#IdParAlimentacion_3 option:selected").text();
        IdParAlimentacion_4 = $("#IdParAlimentacion_4 option:selected").text();
        IdParAlimentacion_5 = $("#IdParAlimentacion_5 option:selected").text();
        IdParAlimentacion_6 = $("#IdParAlimentacion_6 option:selected").text();
        IdParAlimentacion_7 = $("#IdParAlimentacion_7 optionselected").text();
        IdParAlimentacion_8 = $("#IdParAlimentacion_8").val();
        IdParAlimentacion_9 = $("#IdParAlimentacion_9").val();
        alimentacion_009_observacion = $("#alimentacion_009_observacion").val();

        //variables antecedentes residencia-------------
        idParGestionResidencia_1 = $("#idParGestionResidencia_1 option:selected").text();
        idParGestionResidencia_2 = $("#idParGestionResidencia_2 option:selected").text();
        idParGestionResidencia_3 = $("#idParGestionResidencia_3 option:selected").text();
        idParGestionResidencia_4 = $("#idParGestionResidencia_4 option:selected").text();
        idParGestionResidencia_5 = $("#idParGestionResidencia_5 option:selected").text();
        idParGestionResidencia_6 = $("#idParGestionResidencia_6 option:selected").text();
        idParGestionResidencia_7 = $("#idParGestionResidencia_7 option:selected").text();
        idParGestionResidencia_8 = $("#idParGestionResidencia_8 option:selected").text();
        idParGestionResidencia_9 = $("#idParGestionResidencia_9 option:selected").text();
        idParGestionResidencia_10 = $("#idParGestionResidencia_10 option:selected").text();
        idParGestionResidencia_11 = $("#idParGestionResidencia_11 option:selected").text();
        idParGestionResidencia_12 = $("#idParGestionResidencia_12 option:selected").text();
        idParGestionResidencia_13 = $("#idParGestionResidencia_13 option:selected").text();
        idParGestionResidencia_14 = $("#idParGestionResidencia_14 option:selected").text();
        idParGestionResidencia_15 = $("#idParGestionResidencia_15 option:selected").text();
        idParGestionResidencia_16 = $("#idParGestionResidencia_16 option:selected").text();
        idParGestionResidencia_17 = $("#idParGestionResidencia_17 option:selected").text();
        idParGestionResidencia_18 = $("#idParGestionResidencia_18 option:selected").text();
        gestionResid_017_observaciones = $("#gestionResid_017_observaciones").val();
    }

    //Se imprime fecha del documento:
    if (imprimePDF_FR == 1) {    
        fechadoc = d.getDate() + " de " + CalculaMes(parseInt(d.getMonth(),10) + 1) + " de " + d.getFullYear();
    }

    var docDefinition = {
        // a string or { width: number, height: number }
        pageSize: 'A4',

        // by default we use portrait, you can change it to landscape if you wish
        pageOrientation: 'portrait',

        // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
        pageMargins: [40, 40, 40, 40],
        footer: function (currentPage, pageCount) {
            //if (currentPage != 1) {
            return {
                margin: 5,
                columns: [
                {
                    fontSize: 9,
                    text: [
                    {
                        text: '_______________________________________________________________________________________________________________________' +
                        '\n',
                        margin: [0, -40]
                    },
                    {
                        text: 'SENAINFO © - ' + d.getFullYear() + " / " + currentPage.toString() + ' de ' + pageCount,
                    }
                    ],
                    alignment: 'center'
                }
                ]
            };
            //}
        },
        content: [
            {
                image: 'data:image/png;base64,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',
                width: 90,
                height: 82,
                absolutePosition: { x: 40, y: 40 }
            },
            {
                text: 'FORMULARIO DE FICHA RESIDENCIAL',
                style: 'header',
                absolutePosition: { x: 170, y: 75 }
            },
            { 
                text: fechadoc,
                style: 'text1',
                absolutePosition: { y: 40 },
                alignment: 'right'
            },
            { text: '\n\n\n\n\n\n\n' },
            {
                table: {
                    widths: ['auto', '*'],
                    body: arrBody
                }
            },
            { text: '\n', alignment: 'center', style: 'header' },
            {
                table: {
                    widths: ['auto', 70, 70, 70],
                    headerRows: 1,
                    body: [                        
                        [{ text: 'ANTECEDENTES POBLACIÓN', style: 'header2', colSpan: 4 }, {}, {}, {}],
                        [' ','MASCULINO','FEMENINO','TOTAL'],
                        [{ text: 'Población Vigente', style: 'text1' }, general_012_pobvig_masculina, general_013_pobvig_femenina, pobvig_total],
                        [{ text: 'Plazas Convenidas con SENAME (En caso de tener subvención)', style: 'text1' }, general_014_plazaConv_masculina, general_015_plazaConv_femenina, plazaConv_total],
                        [{ text: 'Otras Plazas no subvencionadas por Sename', style: 'text1' }, general_016_otrasPlazas_masculina, general_017_otrasPlazas_femenina, otrasPlazas_total],
                        [{ text: 'Total NNA Presentes', style: 'text1' }, general_018_totalNNApresent_masculina, general_019_totalNNApresent_femenina, totalNNApresent_total],
                        [{ text: 'Total NNA en Acercamiento Familar', style: 'text1' }, general_020_totalNNAacercFamilia_masculina, general_021_totalNNAacercFamilia_femenina, totalNNAacercFamilia_total],
                        [{ text: 'Total de Residentes Mayores de Edad', style: 'text1' }, general_022_totalResidenMayor_masculina, general_023_totalResidenMayor_femenina, totalResidenMayor_total],
                        [{ text: 'Abandono de Sistema', style: 'text1' }, general_024_abandonoSist_masculina, general_025_abandonoSist_femenina, abandonoSist_total],
                        [{ text: 'Hospitalizados', style: 'text1' }, general_026_hospitalizados_masculina, general_027_hospitalizados_femenina, hospitalizados_total],
                        [{ text: 'Total NNA ingresados con Artículo 80 Bis', style: 'text1' }, general_028_totalNNAart80bis_masculina, general_029_totalNNAart80bis_femenina, totalNNAart80bis_total],
                        [{ text: 'Total NNA en completo abandono decretado por el o la Juez(a) (especificar)', style: 'text1' }, general_030_totalNNAabandono_masculina, general_031_totalNNAabandono_femenina, totalNNAabandono_total],
                        [{ text: 'Total de adolescentes con hijos recién nacidos o lactantes (especificar)', style: 'text1' }, general_038_totalNNA_adoslecente_chijo_masculina, general_039_totalNNA_adoslecente_chijo_femenina, totalNNA_adoslecente_chijo_total]
                    ]
                }
            },
            { text: '\n', alignment: 'center', style: 'header' },
            {
                 table: {
                     widths: ['auto', 70, 70, 70],
                     headerRows: 1,
                     body: [                        
                         [{ text: 'ANTECEDENTES ADOPCIÓN DE NNA', style: 'header2', colSpan: 4 }, {}, {}, {}],
                         [{},'MASCULINO','FEMENINO','TOTAL'],
                         [{ text: 'Total de NNA declarados susceptibles de ser adoptados (con sentencia)', style: 'text1' }, general_032_totalNNA_suscep_adopcion_masculina, general_033_totalNNA_suscep_adopcion_femenina, totalNNA_suscep_adopcion_total],
                         [{ text: 'Total de NNA con enlace de adopción (considerar sólo población de NNA declarados susceptible de ser adoptados)', style: 'text1' }, general_034_totalNNA_enlace_adopcion_masculina, general_035_totalNNA_enlace_adopcion_femenina, totalNNA_enlace_adopcion_total],
                         [{ text: 'Total de NNA con causa iniciada por susceptibilidad de adopción (sin sentencia)', style: 'text1' }, general_036_totalNNA_causaini_adopcion_masculina, general_037_totalNNA_causaini_adopcion_femenina, totalNNA_causaini_adopcion_total]
                     ]
                 }
            },

            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: [45, 250, 'auto', 140],
                    heights: ['auto', 'auto', 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                    headerRows: 1,
                    body: arrBodyNNA_Abandono
                }
            },

            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: [45, 250, 'auto', 140],
                    heights: ['auto', 'auto', 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                    headerRows: 1,
                    body: arrBodyNNA_AdolecentesConHijos
                }
            },


            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: ['auto', 400],
                    headerRows: 1,
                    body: [
                        [{ text: 'ANTECEDENTES POBLACIÓN Y CAPACIDAD', style: 'header2', colSpan: 2 }, {}],
                        [{ text: 'Residencia con Subvención SENAME', style: 'text1' }, poblacion_001_sel_reside_con_subven],
                        [{ text: 'Sexo que atiende la Residencia', style: 'text1' }, poblacion_002_sel_sexo_atendidos],
                        [{ text: 'Rango etáreo de Atención', style: 'text1' }, poblacion_003_sel_rango_etareo_predomina],
                        [{ text: 'Rango etáreo Predominante', style: 'text1' }, poblacion_004_poblacion_vigente],
                        [{ text: 'Tipo de Vulneración más Frecuente', style: 'text1' }, poblacion_005_tipo_vulneracion_mas_frecuente]
                    ]
                }
            },
            { text: '', pageBreak: 'before'},
            {
                    table: {
                        widths: ['auto', 70, 70, 70, 70],
                        heights: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 310],
                    headerRows: 1,
                    body: [    
                            [{ text: 'ANTECEDENTES DE DOTACIÓN DE PERSONAL', style: 'header2', colSpan: 5 }, {}, {}, {}, {}],
                            [{},{ text: 'EXISTE',style:'text2'},{ text: 'CANTIDAD',style:'text2'},{ text: 'TIPO JORNADA',style:'text2'},{ text: 'HORAS SEMANALES',style:'text2'}],
                            [{ text: 'Director(a)', style: 'text2' },{ text: dotacion_001_sel_director_existe, style: 'text2' },{ text: dotacion_002_sel_director_cantidad, style: 'text2' },{ text: dotacion_003_sel_director_tipo_jornada, style: 'text2' },{ text: dotacion_004_sel_director_horas_semanales, style: 'text2' }],
                            [{ text: 'Asistente Social', style: 'text2' },{ text: dotacion_005_sel_asistente_existe, style: 'text2' },{ text: dotacion_006_sel_asistente_cantidad, style: 'text2' },{ text: dotacion_007_sel_asistente_tipo_jornada, style: 'text2' },{ text: dotacion_008_sel_asistente_horas_semanales, style: 'text2' }],
                            [{ text: 'Psicólogo', style: 'text2' },{ text: dotacion_009_sel_psicologo_existe, style: 'text2' },{ text: dotacion_010_sel_psicologo_cantidad, style: 'text2' },{ text: dotacion_011_sel_psicologo_tipo_jornada, style: 'text2' },{ text: dotacion_012_sel_psicologo_horas_semanales, style: 'text2' }],
                            [{ text: 'Enfermero(a)', style: 'text2' },{ text: dotacion_013_sel_enfermero_existe, style: 'text2' },{ text: dotacion_014_sel_enfermero_cantidad, style: 'text2' },{ text: dotacion_015_sel_enfermero_tipo_jornada, style: 'text2' },{ text: dotacion_016_sel_enfermero_horas_semanales, style: 'text2' }],
                            [{ text: 'Auxiliar de Enfermería', style: 'text2' },{ text: dotacion_017_sel_auxenfermero_existe, style: 'text2' },{ text: dotacion_018_sel_auxenfermero_cantidad, style: 'text2' },{ text: dotacion_019_sel_auxenfermero_tipo_jornada, style: 'text2' },{ text: dotacion_020_sel_auxenfermero_horas_semanales, style: 'text2' }],
                            [{ text: 'Médico', style: 'text2' },{ text: dotacion_021_sel_medico_existe, style: 'text2' },{ text: dotacion_022_sel_medico_cantidad, style: 'text2' },{ text: dotacion_023_sel_medico_tipo_jornada, style: 'text2' },{ text: dotacion_024_sel_medico_horas_semanales, style: 'text2' }],
                            [{ text: 'Psiquiatra', style: 'text2' }, { text: dotacion_025_sel_psiquiatra_existe, style: 'text2' }, { text: dotacion_026_sel_psiquiatra_cantidad, style: 'text2' }, { text: dotacion_027_sel_psiquiatra_tipo_jornada, style: 'text2' }, { text: dotacion_028_sel_psiquiatra_horas_semanales, style: 'text2' }],
                            [{ text: 'Terapeuta Ocupacional', style: 'text2' },{ text: dotacion_029_sel_terapeuta_ocup_existe, style: 'text2' },{ text: dotacion_030_sel_terapeuta_ocup_cantidad, style: 'text2' },{ text: dotacion_031_sel_terapeuta_ocup_tipo_jornada, style: 'text2' },{ text: dotacion_032_sel_terapeuta_ocup_horas_semanales, style: 'text2' }],
                            [{ text: 'Kinesiólogo', style: 'text2' },{ text: dotacion_033_sel_kinesiologo_existe, style: 'text2' },{ text: dotacion_034_sel_kinesiologo_cantidad, style: 'text2' },{ text: dotacion_035_sel_kinesiologo_tipo_jornada, style: 'text2' },{ text: dotacion_036_sel_kinesiologo_horas_semanales, style: 'text2' }],
                            [{ text: 'Nutricionista', style: 'text2' },{ text: dotacion_037_sel_nutricionista_existe, style: 'text2' },{ text: dotacion_038_sel_nutricionista_cantidad, style: 'text2' },{ text: dotacion_039_sel_nutricionista_tipo_jornada, style: 'text2' },{ text: dotacion_040_sel_nutricionista_horas_semanales, style: 'text2' }],
                            [{ text: 'Fonoaudiólogo', style: 'text2' },{ text: dotacion_041_sel_fonoaudiologo_existe, style: 'text2' },{ text: dotacion_042_sel_fonoaudiologo_cantidad, style: 'text2' },{ text: dotacion_043_sel_fonoaudiologo_tipo_jornada, style: 'text2' },{ text: dotacion_044_sel_fonoaudiologo_horas_semanales, style: 'text2' }],
                            [{ text: 'Profesor(a) de Educación Física', style: 'text2' },{ text: dotacion_045_sel_profesorEducaFisica_existe, style: 'text2' },{ text: dotacion_046_sel_profesorEducaFisica_cantidad, style: 'text2' },{ text: dotacion_047_sel_profesorEducaFisica_tipo_jornada, style: 'text2' },{ text: dotacion_048_sel_profesorEducaFisica_horas_semanales, style: 'text2' }],
                            [{ text: 'Psicopedagogo(a)', style: 'text2' },{ text: dotacion_049_sel_psicopedagogo_existe, style: 'text2' },{ text: dotacion_050_sel_psicopedagogo_cantidad, style: 'text2' },{ text: dotacion_051_sel_psicopedagogo_tipo_jornada, style: 'text2' },{ text: dotacion_052_sel_psicopedagogo_horas_semanales, style: 'text2' }],
                            [{ text: 'Educador(a) de Párvulos', style: 'text2' },{ text: dotacion_053_sel_educadoraParvulos_existe, style: 'text2' },{ text: dotacion_054_sel_educadoraParvulos_cantidad, style: 'text2' },{ text: dotacion_055_sel_educadoraParvulos_tipo_jornada, style: 'text2' },{ text: dotacion_056_sel_educadoraParvulos_horas_semanales, style: 'text2' }],
                            [{ text: 'Educador(a) de trato directo', style: 'text2' },{ text: dotacion_057_sel_educadoraTratoDirecto_existe, style: 'text2' },{ text: dotacion_058_sel_educadoraTratoDirecto_cantidad, style: 'text2' },{ text: dotacion_059_sel_educadoraTratoDirecto_tipo_jornada, style: 'text2' },{ text: dotacion_060_sel_educadoraTratoDirecto_horas_semanales, style: 'text2' }],
                            [{ text: 'Manipulador(a) de Alimentos', style: 'text2' },{ text: dotacion_061_sel_manipuladorAlimentos_existe, style: 'text2' },{ text: dotacion_062_sel_manipuladorAlimentos_cantidad, style: 'text2' },{ text: dotacion_063_sel_manipuladorAlimentos_tipo_jornada, style: 'text2' },{ text: dotacion_064_sel_manipuladorAlimentos_horas_semanales, style: 'text2' }],
                            [{ text: 'Apoyo Administrativo ', style: 'text2' },{ text: dotacion_065_sel_apoyoAdministrativo_existe, style: 'text2' },{ text: dotacion_066_sel_apoyoAdministrativo_cantidad, style: 'text2' },{ text: dotacion_067_sel_apoyoAdministrativo_tipo_jornada, style: 'text2' },{ text: dotacion_068_sel_apoyoAdministrativo_horas_semanales, style: 'text2' }],
                            [{ text: 'Personal de Aseo ', style: 'text2' },{ text: dotacion_069_sel_personalAseo_existe, style: 'text2' },{ text: dotacion_070_sel_personalAseo_cantidad, style: 'text2' },{ text: dotacion_071_sel_personalAseo_tipo_jornada, style: 'text2' },{ text: dotacion_072_sel_personalAseo_horas_semanales, style: 'text2' }],
                            [{ text: 'Personal de Lavandería', style: 'text2' },{ text: dotacion_073_sel_personalLavanderia_existe, style: 'text2' },{ text: dotacion_074_sel_personalLavandería_cantidad, style: 'text2' },{ text: dotacion_075_sel_personalLavandería_tipo_joranada, style: 'text2' },{ text: dotacion_076_sel_personalLavandería_horas_semanales, style: 'text2' }],
                            [{ text: 'Monitores Talleristas', style: 'text2' },{ text: dotacion_077_sel_monitoresTalleristas_existe, style: 'text2' },{ text: dotacion_078_sel_monitoresTalleristas_cantidad, style: 'text2' },{ text: dotacion_079_sel_monitoresTalleristas_tipo_jornada, style: 'text2' },{ text: dotacion_080_sel_monitoresTalleristas_horas_semanales, style: 'text2' }],
                            [{ text: 'Alumnos en Práctica (Especificar en Observación) ', style: 'text2' },{ text: dotacion_081_sel_alumnosPractica_existe, style: 'text2' },{ text: dotacion_082_sel_alumnosPractica_cantidad, style: 'text2' },{ text: dotacion_083_sel_alumnosPractica_tipo_jornada, style: 'text2' },{ text: dotacion_084_sel_alumnosPractica_horas_semanales, style: 'text2' }],
                            [{ text: 'Apoyo Voluntario (Especificar en Observación)', style: 'text2' },{ text: dotacion_085_sel_apoyoVoluntario_existe, style: 'text2' },{ text: dotacion_086_sel_apoyoVoluntario_cantidad, style: 'text2' },{ text: dotacion_087_sel_apoyoVoluntario_tipo_jornada, style: 'text2' },{ text: dotacion_088_sel_apoyoVoluntario_horas_semanales, style: 'text2' }],
                            [{ text: 'Otros (Especificar en Observaciones) ', style: 'text2' },{ text: dotacion_089_sel_Otros_existe, style: 'text2' },{ text: dotacion_090_sel_Otros_cantidad, style: 'text2' },{ text: dotacion_091_sel_Otros_tipo_jornada, style: 'text2' },{ text: dotacion_092_sel_Otros_horas_semanales, style: 'text2' }],
                            [{ text: '¿Personal con Licencia Médica? ', style: 'text2' },{ text: dotacion_093_sel_PersonalLicenciaMedica_existe, style: 'text2' },{ text: dotacion_094_sel_PersonalLicenciaMedica_cantidad, style: 'text2' },{ text: dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada, style: 'text2' },{ text: dotacion_096_sel_PersonalLicenciaMedica_horas_semanales, style: 'text2' }],
                            [{ text: 'Personal con Licencia ¿Cuenta con Suplente?', style: 'text2' }, { text: dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe, style: 'text2' }, { text: dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad, style: 'text2' }, { text: dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada, style: 'text2' }, { text: dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales, style: 'text2' }],
                            [{ text: 'OBSERVACIONES', style: 'text2', colSpan: 5 }, {}, {}, {}, {}],
                            [{ text: dotacion_101_Observaciones, style: 'text2', colSpan: 5 }, {}, {}, {}, {}]
                        ]
                    }
            },
            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: ['*', 70, 70],
                    heights: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 160],
                    headerRows: 1,
                    body: [
                            [{ text: 'ANTECEDENTES INFRAESTRUCTURA Y EQUIPAMIENTO', style: 'header2', colSpan: 3 }, {}, {}],
                            [{}, { text: 'EXISTE', style: 'text2' }, { text: 'CANTIDAD', style: 'text2' }],
                        [{ text: 'Oficinas Administrativas', style: 'text2' }, { text: IdParInfraestructura_1, style: 'text2' }, { text: IdValor_1, style: 'text2' }],
                        [{ text: 'Sala de Reuniones', style: 'text2' }, { text: IdParInfraestructura_2, style: 'text2' }, { text: IdValor_2, style: 'text2' }],
                        [{ text: 'Sala de Recepción 	', style: 'text2' }, { text: IdParInfraestructura_3, style: 'text2' }, { text: IdValor_3, style: 'text2' }],
                        [{ text: 'Espacio de Visitas 	', style: 'text2' }, { text: IdParInfraestructura_4, style: 'text2' }, { text: IdValor_4, style: 'text2' }],
                        [{ text: 'Sala Multiuso para Talleres ', style: 'text2' }, { text: IdParInfraestructura_5, style: 'text2' }, { text: IdValor_5, style: 'text2' }],
                        [{ text: 'Sala de Estar/Living ', style: 'text2' }, { text: IdParInfraestructura_6, style: 'text2' }, { text: IdValor_6, style: 'text2' }],
                        [{ text: 'Unidad de Salud', style: 'text2' }, { text: IdParInfraestructura_7, style: 'text2' }, { text: IdValor_7, style: 'text2' }],
                        [{ text: 'Espacios Recreacionales', style: 'text2' }, { text: IdParInfraestructura_8, style: 'text2' }, { text: IdValor_8, style: 'text2' }],
                        [{ text: 'Áreas Verdes', style: 'text2' }, { text: IdParInfraestructura_9, style: 'text2' }, { text: IdValor_9, style: 'text2' }],
                        [{ text: 'Cocina', style: 'text2' }, { text: IdParInfraestructura_10, style: 'text2' }, { text: IdValor_10, style: 'text2' }],
                        [{ text: 'Comedor', style: 'text2' }, { text: IdParInfraestructura_11, style: 'text2' }, { text: IdValor_11, style: 'text2' }],
                        [{ text: 'Lavandería', style: 'text2' }, { text: IdParInfraestructura_12, style: 'text2' }, { text: IdValor_12, style: 'text2' }],
                        [{ text: 'Dormitorio NNA', style: 'text2' }, { text: IdParInfraestructura_13, style: 'text2' }, { text: IdValor_13, style: 'text2' }],
                        [{ text: 'Camas NNA', style: 'text2' }, { text: IdParInfraestructura_14, style: 'text2' }, { text: IdValor_14, style: 'text2' }],
                        [{ text: 'Closet, Lockers', style: 'text2' }, { text: IdParInfraestructura_15, style: 'text2' }, { text: IdValor_15, style: 'text2' }],
                        [{ text: 'Baños para Público', style: 'text2' }, { text: IdParInfraestructura_16, style: 'text2' }, { text: IdValor_16, style: 'text2' }],
                        [{ text: 'Baños NNA en Funcionamiento', style: 'text2' }, { text: IdParInfraestructura_17, style: 'text2' }, { text: IdValor_17, style: 'text2' }],
                        [{ text: 'Baños NNA de acuerdo a Normativa', style: 'text2' }, { text: IdParInfraestructura_18, style: 'text2' }, { text: IdValor_18, style: 'text2' }],
                        [{ text: 'Baños NNA de hombres ', style: 'text2' }, { text: IdParInfraestructura_19, style: 'text2' }, { text: IdValor_19, style: 'text2' }],
                        [{ text: 'Baños NNA de mujeres', style: 'text2' }, { text: IdParInfraestructura_20, style: 'text2' }, { text: IdValor_20, style: 'text2' }],
                        [{ text: 'Baños NNA mixtos', style: 'text2' }, { text: IdParInfraestructura_21, style: 'text2' }, { text: IdValor_21, style: 'text2' }],
                        [{ text: 'Duchas para NNA en Funcionamiento', style: 'text2' }, { text: IdParInfraestructura_22, style: 'text2' }, { text: IdValor_22, style: 'text2' }],
                        [{ text: 'Duchas para NNA de acuerdo a Normativa', style: 'text2' }, { text: IdParInfraestructura_23, style: 'text2' }, { text: IdValor_23, style: 'text2' }],
                        [{ text: 'Duchas para NNA de hombres', style: 'text2' }, { text: IdParInfraestructura_24, style: 'text2' }, { text: IdValor_24, style: 'text2' }],
                        [{ text: 'Duchas para NNA de mujeres', style: 'text2' }, { text: IdParInfraestructura_25, style: 'text2' }, { text: IdValor_25, style: 'text2' }],
                        [{ text: 'Duchas para NNA mixtas', style: 'text2' }, { text: IdParInfraestructura_26, style: 'text2' }, { text: IdValor_26, style: 'text2' }],
                        [{ text: 'Ambientación Acorde a la Población', style: 'text2' }, { text: IdParInfraestructura_27, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Vestuario adecuado de acuerdo a estación', style: 'text2' }, { text: IdParInfraestructura_28, style: 'text2' },{text:'', style: 'celdaNula'}],
                        [{ text: 'Vestuario personalizado para el NNA', style: 'text2' }, { text: IdParInfraestructura_29, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Útiles de Aseo Personal para los NNA', style: 'text2' }, { text: IdParInfraestructura_30, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Agua Caliente', style: 'text2' }, { text: IdParInfraestructura_31, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Cumple Normativa Calefón ', style: 'text2' }, { text: IdParInfraestructura_32, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Cumple Normativa llave de gas', style: 'text2' }, { text: IdParInfraestructura_33, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Sistema de calefacción (Especificar en Observación)', style: 'text2' }, { text: IdParInfraestructura_34, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Ventilación adecuada del inmueble', style: 'text2' }, { text: IdParInfraestructura_35, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Acceso para personas con situación de Discapacidad', style: 'text2' }, { text: IdParInfraestructura_36, style: 'text2' }, { text: '', style: 'celdaNula' }],
                        [{ text: 'Instalaciones Habilitadas para Discapacitados (Baños, ramplas, etc.)', style: 'text2' }, { text: IdParInfraestructura_37, style: 'text2' }, { text: '', style: 'celdaNula' }],
                            [{ text: 'OBSERVACIONES', style: 'text2', colSpan: 3 }, {}, {}],
                            [{ text: Infraest_049_observaciones, style: 'text2', colSpan: 3 }, {}, {}]
                    ]
                }
            },
            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: ['*', 70],
                    heights: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 350],
                    headerRows: 1,
                    body: [
                            [{ text: 'ANTECEDENTES SEGURIDAD', style: 'header2', colSpan: 2 }, {}],
                            [{}, { text: 'EXISTE', style: 'text2' }],
                        [{ text: 'Plan de Emergencia 	', style: 'text2' }, { text: IdParSeguridad_1, style: 'text2' }],
                        [{ text: 'Simulacro Emergencia (Último Cuatrimestre)', style: 'text2' }, { text: IdParSeguridad_2, style: 'text2' }],
                        [{ text: 'Plan de Emergencia ¿Visado por personal calificado?', style: 'text2' }, { text: IdParSeguridad_3, style: 'text2' }],
                        [{ text: 'Extintores', style: 'text2' }, { text: IdParSeguridad_4, style: 'text2' }],
                        [{ text: 'Señalética 	', style: 'text2' }, { text: IdParSeguridad_5, style: 'text2' }],
                        [{ text: 'Vías de Evacuación 	', style: 'text2' }, { text: IdParSeguridad_6, style: 'text2' }],
                        [{ text: 'Capacitación Personal en Emergencia', style: 'text2' }, { text: IdParSeguridad_7, style: 'text2' }],
                        [{ text: 'Capacitación Personal en Primeros Auxilios', style: 'text2' }, { text: IdParSeguridad_8, style: 'text2' }],
                        [{ text: 'Sanitización', style: 'text2' }, { text: IdParSeguridad_9, style: 'text2' }],
                        [{ text: 'Desratización', style: 'text2' }, { text: IdParSeguridad_10, style: 'text2' }],
                        [{ text: 'Fumigación', style: 'text2' }, { text: IdParSeguridad_11, style: 'text2' }],
                        [{ text: 'Sistema Eléctrico', style: 'text2' }, { text: IdParSeguridad_12, style: 'text2' }],
                        [{ text: 'Zona de Seguridad Demarcada', style: 'text2' }, { text: IdParSeguridad_13, style: 'text2' }],
                            [{ text: 'OBSERVACIONES', style: 'text1', colSpan: 2 }, {}],
                            [{ text: seguridad_011_observaciones, style: 'text2', colSpan: 2 }, {}]
                    ]
                }                      
            },
            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: ['*', 70],
                    heights: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 300],
                    headerRows: 1,
                    body: [
                            [{ text: 'ANTECEDENTES SALUD', style: 'header2', colSpan: 2 }, {}],
                            [{}, { text: 'ESPECIFICAR y/o EXISTE', style: 'text2' }],
                        [{ text: 'N° de NNA Inscritos en CESFAM ', style: 'text1' }, { text: IdParSaludValor_1, style: 'text2' }],
                        [{ text: 'N° de NNA con Problemática de Salud Mental con Diagnóstico ', style: 'text1' }, { text: IdParSaludValor_2, style: 'text2' }],
                        [{ text: 'N° de NNA con Problemática de Salud Mental sin Diagnóstico', style: 'text1' }, { text: IdParSaludValor_3, style: 'text2' }],
                        [{ text: 'N° de NNA Inscritos con Enfermedad Crónica', style: 'text1' }, { text: IdParSalud_4, style: 'text2' }],
                        [{ text: 'N° de NNA a la espera de Trasplante', style: 'text1' }, { text: IdParSalud_5, style: 'text2' }],
                        [{ text: 'N° de NNA Trasplantados', style: 'text1' }, { text: IdParSalud_6, style: 'text2' }],
                        [{ text: 'N° de NNA Inscritos con Situación de Discapacidad', style: 'text1' }, { text: IdParSalud_7, style: 'text2' }],
                        [{ text: 'N° de NNA recibiendo tratamiento farmacológico', style: 'text1' }, { text: IdParSalud_8, style: 'text2' }],
                        [{ text: 'N° de NNA con Problemática de Salud en Tratamiento', style: 'text1' }, { text: IdParSalud_9, style: 'text2' }],
                        [{ text: 'N° de NNA con Consumo sólo de Drogas', style: 'text1' }, { text: IdParSaludValor_10, style: 'text2' }],
                        [{ text: 'N° de NNA con consumo sólo de Alcohol', style: 'text1' }, { text: IdParSaludValor_11, style: 'text2' }],
                        [{ text: 'N° de NNA con consumo de Alcohol y Drogas', style: 'text1' }, { text: IdParSaludValor_12, style: 'text2' }],
                        [{ text: '¿Cuenta con espacio adecuado para el resguardo de medicamentos?', style: 'text1' }, { text: IdParSalud_13, style: 'text2' }],
                        [{ text: '¿Cuenta con inventario de medicamentos?', style: 'text1' }, { text: IdParSalud_14, style: 'text2' }],
                        [{ text: '¿Cuenta con Registro de Medicamentos Administrados a los NNA?', style: 'text1' }, { text: IdParSalud_15, style: 'text2' }],
                        [{ text: '¿Cuenta con Protocolo para la Administración de Medicamentos a los NNA?', style: 'text1' }, { text: IdParSalud_16, style: 'text2' }],
                        [{ text: '¿Cuenta con control al día de Niño Sano?', style: 'text1' }, { text: IdParSalud_17, style: 'text2' }],
                        [{ text: '¿Cuenta con control al día de Adolescente Sano?', style: 'text1' }, { text: IdParSalud_18, style: 'text2' }],
                        [{ text: '¿Existe Control Anual Ginecológico en los Adolescentes?', style: 'text1' }, { text: IdParSalud_19, style: 'text2' }],
                        [{ text: '¿Existen adolescentes que se hayan negado a Control Ginecológico?', style: 'text1' }, { text: IdParSalud_20, style: 'text2' }],
                        [{ text: 'Adolescentes Embarazadas', style: 'text1' }, { text: IdParSalud_21, style: 'text2' }],
                        [{ text: 'En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?', style: 'text1' }, { text: IdParSalud_22, style: 'text2' }],
                        [{ text: 'N° de Adolescentes Embarazadas con controles médicos al día', style: 'text1' }, { text: IdParSaludValor_22, style: 'text2' }],
                            [{ text: 'OBSERVACIONES', style: 'text1', colSpan: 2 }, {}],
                            [{ text: salud_016_observaciones, style: 'text2', colSpan: 2 }, {}]
                    ]
                }
            },
            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: ['*', 70],
                    heights: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 350],
                    headerRows: 1,
                    body: [
                            [{ text: 'ANTECEDENTES EDUCACIÓN', style: 'header2', colSpan: 2 }, {}],
                            [{}, { text: 'CANTIDAD y/o EXISTE', style: 'text2' }],
                            [{ text: 'N° de NNA matriculados ', style: 'text1' },{ text: educacion_001_NNA_matriculados, style: 'text2' }],
                            [{ text: 'N° de NNA que si asisten a Establecimiento Educacional', style: 'text1' },{ text: educacion_001_NNA_asisten_colegio_cantidad, style: 'text2' }],
                            [{ text: 'N° de NNA que no asisten a Establecimiento Educacional', style: 'text1' },{ text: educacion_002_NNA_NO_asisten_colegio_cantidad_motivo, style: 'text2' }],
                            [{ text: 'Motivo de inasistencia de NNA a Establecimiento Educacional (Salud, Rechazo, Suspensión, Otro)', style: 'text1' }, { text: educacion_002_NNA_NO_asisten_colegio_cantidad_motivo, style: 'text2' }],
                            [{ text: 'N° de NNA con Retraso o Rezago Escolar', style: 'text1' },{ text: educacion_003_NNA_retrasoEscolar_cantidad, style: 'text2' }],
                            [{ text: 'N° de NNA con Matrícula Cancelada', style: 'text1' },{ text: educacion_004_NNA_matriculaCancelada_cantidad, style: 'text2' }],
                            [{ text: 'N° de NNA que Asiste a Educación Diferencial', style: 'text1' },{ text: educacion_005_NNA_asisten_colegioDiferencial_cantidad, style: 'text2' }],
                            [{ text: 'N° de NNA que Asiste a Educación de Nivelación de Estudios', style: 'text1' },{ text: educacion_006_NNA_asisten_colegioNivelacion_cantidad, style: 'text2' }],
                            [{ text: 'N° de NNA inscritos para exámenes libres', style: 'text1' },{ text: educacion_006_NNA_examenesLibres_cantidad, style: 'text2' }],
                            [{ text: 'Espacios Destinados a Estudios y Desarrollo de Tareas', style: 'text1' },{ text: educacion_007_sel_EspacioEstudio_y_Tareas_existe, style: 'text2' }],
                            [{ text: 'Material Bibliográfico ', style: 'text1' },{ text: educacion_008_sel_materialBibliiografico_existe, style: 'text2' }],
                            [{ text: 'Computadores ', style: 'text1' },{ text: educacion_009_sel_computadores_existe, style: 'text2' }],
                            [{ text: 'Acceso Controlado a Internet', style: 'text1' },{ text: educacion_010_sel_AccesoControladoInternet_existe, style: 'text2' }],                           
                            [{ text: 'OBSERVACIONES', style: 'text1', colSpan: 2 }, {}],
                            [{ text: educacion_011_observaciones, style: 'text2', colSpan: 2 }, {}]
                    ]
                }
            },
            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: ['*', 70],
                    heights: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 350],
                    headerRows: 1,
                    body: [
                            [{ text: 'ANTECEDENTES ALIMENTACIÓN', style: 'header2', colSpan: 2 }, {}],
                            [{}, { text: 'EXISTE', style: 'text2' }],
                        [{ text: 'Cuenta con Registro de Horarios de Entrega de Alimentos', style: 'text2' }, { text: IdParAlimentacion_1, style: 'text2' }],
                        [{ text: '¿Cuenta con minuta alimentaria? ', style: 'text2' }, { text: IdParAlimentacion_2, style: 'text2' }],
                        [{ text: 'Existencia de Menús Especiales ', style: 'text2' }, { text: IdParAlimentacion_3, style: 'text2' }],
                        [{ text: '¿Cuenta con minuta alimentaria aprobada?', style: 'text2' }, { text: IdParAlimentacion_4, style: 'text2' }],
                        [{ text: 'Existen Certificados Sanitarios de las Manipuladoras', style: 'text2' }, { text: IdParAlimentacion_5, style: 'text2' }],
                        [{ text: 'Almacenamiento de Alimentos', style: 'text2' }, { text: IdParAlimentacion_6, style: 'text2' }],
                        [{ text: 'Estado de Conservación', style: 'text2' }, { text: IdParAlimentacion_7, style: 'text2' }],
                            [{}, { text: 'ESPECIFIQUE', style: 'text2' }],
                        [{ text: 'N° de Comidas Entregadas de Lunes a Viernes', style: 'text2' }, { text: IdParAlimentacion_8, style: 'text2' }],
                        [{ text: 'N° de Comidas Entregadas Sábado, Domingo y Festivos', style: 'text2' }, { text: IdParAlimentacion_9, style: 'text2'}],
                            [{ text: 'OBSERVACIONES', style: 'text1', colSpan: 2 }, {}],
                            [{ text: alimentacion_009_observacion, style: 'text2', colSpan: 2 }, {}]
                    ]
                }
            },
            { text: '', pageBreak: 'before' },
            {
                table: {
                    widths: ['*', 70],
                    heights: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto',350],
                    headerRows: 1,
                    body: [
                            [{ text: 'ANTECEDENTES DE GESTIÓN DE RESIDENCIA', style: 'header2', colSpan: 2 }, {}],
                            [{}, { text: 'EXISTE', style: 'text2' }],
                        [{ text: 'Cuenta con catastro de redes', style: 'text1' }, { text: idParGestionResidencia_1, style: 'text2' }],
                        [{ text: 'Existe Protocolo de Visitas', style: 'text1' }, { text: idParGestionResidencia_2, style: 'text2' }],
                        [{ text: 'Existe Registro de Visitas', style: 'text1' }, { text: idParGestionResidencia_3, style: 'text2' }],
                        [{ text: 'Cuenta con Protocolo de Acogida del NNA', style: 'text1' }, { text: idParGestionResidencia_4, style: 'text2' }],
                        [{ text: 'Existen Actividades de Autocuidado para el Equipo', style: 'text1' }, { text: idParGestionResidencia_5, style: 'text2' }],
                        [{ text: 'Cuenta con Protocolo de Actuación de Intervención en Crisis', style: 'text1' }, { text: idParGestionResidencia_6, style: 'text2' }],
                        [{ text: 'Existe Protocolo de Información para NNA sobre la Normativa de Residencia', style: 'text1' }, { text: idParGestionResidencia_7, style: 'text2' }],
                        [{ text: 'Existe Protocolo de Convivencia', style: 'text1' }, { text: idParGestionResidencia_8, style: 'text2' }],
                        [{ text: 'Existe Protocolo de Presentación de Reclamos y Quejas', style: 'text1' }, { text: idParGestionResidencia_9, style: 'text2' }],
                        [{ text: 'Existe Protocolo y Espacios para la escucha de los NNA', style: 'text1' }, { text: idParGestionResidencia_10, style: 'text2' }],
                        [{ text: 'Vinculación entre Residencias (para hermanos)', style: 'text1' }, { text: idParGestionResidencia_11, style: 'text2' }],
                        [{ text: 'Cuenta con Proceso de Formación Permanente para el personal', style: 'text1' }, { text: idParGestionResidencia_12, style: 'text2' }],
                        [{ text: 'Existe Protocolo de Apadrinamiento ', style: 'text1' }, { text: idParGestionResidencia_13, style: 'text2' }],
                        [{ text: 'Existe Protocolo de Derivación o Traslado a Residencia', style: 'text1' }, { text: idParGestionResidencia_14, style: 'text2' }],
                        [{ text: 'Existe Protocolo de para el Egreso del NNA (Sistema Residencial)', style: 'text1' }, { text: idParGestionResidencia_15, style: 'text2' }],
                        [{ text: 'Existe Protocolo para Derivación a Red Salud ', style: 'text1' }, { text: idParGestionResidencia_16, style: 'text2' }],
                        [{ text: '¿Existen Actividades de Habilitación Laboral?', style: 'text1' }, { text: idParGestionResidencia_17, style: 'text2' }],
                        [{ text: '¿Existe proceso para la vida independiente?', style: 'text1' }, { text: idParGestionResidencia_18, style: 'text2' }],
                            [{ text: 'OBSERVACIONES', style: 'text1', colSpan: 2 }, {}],
                            [{ text: gestionResid_017_observaciones, style: 'text1', colSpan: 2 }, {}]
                    ]
                }
            },        
    ],
        styles: {
            header: {
                fontSize: 20,
                bold: true

            },
            header2: {
                fontSize: 18,
                bold: true

            },
            text1: {
                fontSize: 9,
                bold: true

            },
            text2: {
                fontSize: 8,
                bold: true
            },
            celdaNula: {
                fillColor: '#dddddd'
            }
        }
    };
    // download the PDF
    pdfMake.createPdf(docDefinition).download('formularioficharesidencial.pdf');
}
function CalculaMes(opc) {
    var salida = "";
    switch(opc){
        case 1:
            salida = "enero";
            break;
        case 2:
            salida = "febrero";
            break;
        case 3:
            salida = "marzo";
            break;
        case 4:
            salida = "abril";
            break;
        case 5:
            salida = "mayo";
            break;
        case 6:
            salida = "junio";
            break;
        case 7:
            salida = "julio";
            break;
        case 8:
            salida = "agosto";
            break;
        case 9:
            salida = "septiembre";
            break;
        case 10:
            salida = "octubre";
            break;
        case 11:
            salida = "noviembre";
            break;
        case 12:
            salida = "diciembre";
            break;
    }
    return salida;
}