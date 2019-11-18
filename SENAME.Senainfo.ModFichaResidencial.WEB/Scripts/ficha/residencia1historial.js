//NOTA: 
//Cuando se realicen cambios en esta librería revisar las referencias a la carpeta de las imágenes
//estas debería quedar indicadas del siguiente modo:  src="images/[ruta + nombre de imagen]", 
//donde [ruta + nombre de imagen] es la ruta final más el archivo referenciado.
var cabmodal = "SENAINFO ";
var CodFicha = 0;
var CodFichaHija = 0;
var CodProyecto = 0;
var IdUsuarioActualizacion;

var bPendientes = true;
var bEnProceso = true;
var bFinalizadas = false;
var bEnviadas = false;
var conect = "";
var CodFichaHijaTramitaciones = 0;
var periodoGlobal = "";

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
        title: "<table style='margin:auto;font-size:18px;color:" + colortext + ";'>" +
                "<tr>" +
                "<td style='font-size:24px;color:" + colortext + ";'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
                "</table>",
        html: "<p style='text-align:" + textalign + ";'><span style='color:" + colortext + ";font-size:14px;'>" + mensaje_ + "<span></p>",
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
        title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
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
        title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
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
            title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
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
            title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
                "</table>",
            html: "<div style='color:#0F68B1;'><p style='text-align:left;'>" + mensaje_ + "<p></div>" +
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
        if (fx != "")
            eval(fx);
    });
    jQuery('#btn_infov2_2_cancelar').bind('click', function () {
        swal.clickCancel();
    });
}
function MensajeINFO2_V3(mensaje_, fx) {
    var d = new Date();
    swal(
        {
            title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
                "</table>",
            html: "<div style='color:#0F68B1;'><p style='text-align:left;'>" + mensaje_ + "<p></div>" +
                  "<div style='text-align:center;'>" +
                  "<br />" +
                  "<button id='btn_infov2_2_aceptar' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title=''><i class='fa fa-thumbs-up'></i>&nbsp;Aceptar</button>" +
                  "</div>",
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonText: "aceptar",
            cancelButtonText: "cancelar",
            confirmButtonColor: "#0F68B1",
            cancelButtonColor: "#0404B4"
        });//.then((result)=>{if (result.value) {eval(fx);}})
    jQuery('#btn_infov2_2_aceptar').bind('click', function () {
        swal.clickCancel();
        //alert(fx);
        if (fx != "")
            eval(fx);
    });
}
function MensajeINFO3(mensaje_) {
    var d = new Date();
    swal({
        title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:0F68B1#;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
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
        title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
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
        title: "<table style='margin:auto;font-size:18px;'>" +
            "<tr>" +
            "<td style='font-size:24px;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
            "</tr>" +
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
        if (fx != "")
            eval(fx);
    });
    jQuery('#btn_warning_cancelar').bind('click', function () {
        swal.clickCancel();
    });
}
function MensajeERROR_App_Critico(mensaje_) {
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
function DesplegarExcepcionCriticaApp(responseText) {
    //alert("DesplegarExcepcionCriticaApp" + responseText);
    try {
        var jsonObj = JSON.parse(responseText);
        var mensaje = jsonObj.Message;
        var traza = jsonObj.StackTrace;
        var tipoExcepcion = jsonObj.ExceptionType;

        var strError = "<table style='width:600px;'>" +
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
    }
    catch (e) {
        var strError = "<table style='width:600px;'>" +
                         "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido la siguiente excepción:<br /></td></tr>" +
                         "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>Error de solicitud al servidor. Por favor, revise la traza para identificar el detalle del error.</td></tr>" +
                         "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>TRAZA: </b>" +
                         "<div class='scrollbar2' id='style-12' style='height: 150px;'>" +
                         "<div class='force-overflow2' style='text-align:left;'>" +
                         responseText +
                         "</div></div>" +
                         "</td></tr>" +
                         "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>TIPO DE EXCEPCIÓN: </b>Carga de recurso.</td></tr>" +
                         "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br />Por favor reintentar, si el problema persiste, comunicarse con el administrador. </td></tr>" +
                         "</table>";
        var strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");

    }
    MensajeERROR_App_Critico(strError);

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
        var mm, dd, hh, mm, ss;
        if ((d.getMonth() + 1) < 10) mm = "0" + (d.getMonth() + 1); else mm = (d.getMonth() + 1);
        if ((d.getDate()) < 10) dd = "0" + (d.getDate()); else dd = (d.getDate());

        if ((d.getHours()) < 10) hh = "0" + (d.getHours()); else hh = (d.getHours());
        if ((d.getMinutes()) < 10) mm = "0" + (d.getMinutes()); else mm = (d.getMinutes());
        if ((d.getSeconds()) < 10) ss = "0" + (d.getSeconds()); else ss = (d.getSeconds());

        var strhora = dd + "/" + mm + "/" + d.getFullYear() + " -- " + hh + ":" + mm + ":" + ss;

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
function AnalizaRUT(opc) {
    switch (opc) {
        case 1:
            if ($("#general_010_rut_director_proyecto").val() != null && $("#general_010_dv_rut_director_proyecto").val() != null) {
                rut = EliminaEspacios($("#general_010_rut_director_proyecto").val());
                id = EliminaEspacios($("#general_010_dv_rut_director_proyecto").val());

                if (rut != "" && id != "") {
                    if (!revisarDigito2(rut + id)) {
                        $("#spanRUTerroneoGral").html("&nbsp;* El RUT ingresado no es correcto, por favor,corregir.");
                    }
                    else {
                        $("#spanRUTerroneoGral").html("");
                    }
                }

            }
            break;
        case 2:
            if ($("#rut_NNA_abandono").val() != null && $("#dv_rut_NNA_abandono").val() != null) {
                rut = EliminaEspacios($("#rut_NNA_abandono").val());
                id = EliminaEspacios($("#dv_rut_NNA_abandono").val());

                if (rut != "" && id != "") {
                    if (!revisarDigito2(rut + id)) {
                        $("#mensaje_agregar_NNA").html("El RUT ingresado no es correcto, por favor,corregir.");
                    }
                    else {
                        $("#mensaje_agregar_NNA").html("");
                    }
                }
            }
            break;
        case 3:
            if ($("#rut_AdolescenteHijo").val() != null && $("#dv_rut_AdolescenteHijo").val() != null) {
                rut = EliminaEspacios($("#rut_AdolescenteHijo").val());
                id = EliminaEspacios($("#dv_rut_AdolescenteHijo").val());

                if (rut != "" && id != "") {
                    if (!revisarDigito2(rut + id)) {
                        $("#mensaje_agregar_NNA").html("El RUT ingresado no es correcto, por favor,corregir.");
                    }
                    else {
                        $("#mensaje_agregar_NNA").html("");
                    }
                }

            }
            break;
        case 4:
            if ($("#rut_NNA_entrevistado").val() != null && $("#dv_rut_NNA_entrevistado").val() != null) {
                rut = EliminaEspacios($("#rut_NNA_entrevistado").val());
                id = EliminaEspacios($("#dv_rut_NNA_entrevistado").val());

                if (rut != "" && id != "") {
                    if (!revisarDigito2(rut + id)) {
                        $("#mensaje_agregar_NNA").html("El RUT ingresado no es correcto, por favor,corregir.");
                    }
                    else {
                        $("#mensaje_agregar_NNA").html("");
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
String.prototype.mapReplace = function (map) {
    var regex = [];
    for (var key in map)
        regex.push(key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"));
    return this.replace(new RegExp(regex.join('|'), "g"), function (word) {
        return map[word];
    });
};

String.prototype.reverse = function () {
    var x = this.length;
    var cadena = "";
    while (x >= 0) {
        cadena = cadena + this.charAt(x);
        x--;
    }
    return cadena;
};

function limpiarDocumentacion() {
    InicializaCombo("#cmbInstitucion");
    InicializaCombo("#cmbProyecto");
    InicializaCombo("#cmbInstitucion2");
    InicializaCombo("#cmbProyecto2");

    InicializaCombo("#cmbInstitucionCompare");
    InicializaCombo("#cmbProyectoCompare");

}
function MostrarModalBusqueda() {
    var d = new Date();

    var htmldiag = "<div class='padre'>" +
        '<div class="hijo" style="width:100%;">' +
        '<div id="pnl001" style="width:100%;">' +
            '<table class="table table-bordered table-col-fix table-condensed">' +
            '<caption><span id="lbl001">Buscador Busca Proyectos</span></caption>' +
            '<tbody>' +
            '<tr id="tr_codigo_institucion">' +
                '<th class="titulo-tabla" scope="row"> <span id="lbl002">Código Institución</span></th>' +
                '<td>' +
                    '<table>' +
                    '<tbody>' +
                    '<tr>' +
                    '<td>' +
                        '<div class="input-group">' +
                        '<input name="txt001" value="" id="txt001" class="form-control input-sm" type="text" style="width:150px">' +
                        '<a id="ImageButton1" class="input-group-addon btn btn-info btn-sm" href="javascript:">' +
                        '<span class="glyphicon glyphicon-search"></span>' +
                        '</a>' +
                        '</div>' +
                    '</td>' +
                    '<td>&nbsp;</td>' +
                    '<td>' +
                        '<select name="cmbIntiticionesBsq" id="cmbIntiticionesBsq"  style="width:100%;" onchange="javascript:" class="form-control input-sm">' +
                        '<option value="0"> Seleccionar </option>' +
                        '</select>' +
                    '</td>' +
                    '</tr>' +
                    '</tbody>' +
                    '</table>' +
                '</td>' +
            '</tr>' +
            '<tr id="tr_nombre_proyecto">' +
                '<th class="titulo-tabla" scope="row"><span id="lbl0016">Nombre del Proyecto</span></th>' +
                '<td>' +
                    '<input name="txt0011" id="txt0011" class="form-control  input-sm" type="text">' +
                '</td>' +
            '</tr>' +
            '<tr id="tr_codigo_proyecto">' +
                '<th class="titulo-tabla" scope="row"><span id="lbl0017">Código del Proyecto</span></th>' +
                '<td>' +
                    '<input name="txt0012" id="txt0012" class="form-control  input-sm" type="text">' +
                '</td>' +
            '</tr>' +
            '<tr id="tr_tipo_proyecto">' +
                '<th class="titulo-tabla" scope="row"><span id="lbl0018">Tipo de Proyecto</span></th>' +
                '<td><b style="color:blue;">R - CENTROS RESIDENCIALES</b></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
        '</div>' +
        '<div class="row hijo">' +
            '<div class="botonera pull-right">' +
                '<a id="btnBuscar" class="btn btn-danger btn-sm fixed-width-button" href="javascript:">' +
                    '<span class="glyphicon glyphicon-zoom-in"></span>&nbsp;Buscar' +
                '</a>' +
                '<a id="btnLimpiar" class="btn btn-info btn-sm fixed-width-button" href="javascript:' +
                    '<span class="glyphicon glyphicon-remove-sign"></span>&nbsp;Limpiar' +
                '</a>' +
            '</div>' +
        '</div>' +

        "</div>";

    swal({
        title: "<table style='margin:auto;font-size:18px;color:#0F68B1;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
                "</table>",
        html: htmldiag,
        allowOutsideClick: true,
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "cerrar",
        confirmButtonColor: "#0F68B1",
        background: "#EEEEEE",
        width: "80%"
    });
}
function MostrarModalProyecto() {
    MostrarModalBusqueda();
}
function MostrarModalInstitucion() {
    MostrarModalBusqueda();
}


///////////////////
//FUNCIONES FRONTEND

///////////////////
//CONTROL DESBLOQUEO ZONA COMPARATIVAS
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
var dotacionpersonal_residencia = false;
var dotacionpersonal_pjud = false;
var infraestructura_residencia = false;
var infraestructura_pjud = false;
var seguridad_residencia = false;
var seguridad_pjud = false;
var salud_residencia = false;
var salud_pjud = false;
var educacion_residencia = false;
var educacion_pjud = false;
var alimentacion_residencia = false;
var alimentacion_pjud = false;
var gestionResidencia_residencia = false;
var gestionResidencia_pjud = false;
function InicializaVarControlZonaDatosComparativas() {

    $("#DivFichaComparativo01").html("");
    $("#DivFichaComparativo02").html("");
    $("#DivFichaComparativo03").html("");
    $("#DivFichaComparativo04").html("");
    $("#DivFichaComparativo05").html("");
    $("#DivFichaComparativo06").html("");
    $("#DivFichaComparativo07").html("");
    $("#DivFichaComparativo08").html("");
    $("#DivFichaComparativo09").html("");

    //TAB GENERAL
    generalresidencia = false;
    generalpjud = false;

    generalresidenciaNNAAbandono = false;
    generalpjudNNAAbandono = false;
    nombres_NNA_abandono = "";
    nombres_NNA_abandono_pjud = "";

    generalresidenciaNNAadolescHijo = false;
    generalpjudNNAadolescHijo = false;
    nombres_NNA_adolescHijo = "";
    nombres_NNA_adolescHijo_pjud = "";
    //TAB POBLACION CAPACIDAD
    poblacionCapacidad_residencia = false;
    poblacionCapacidad_pjud = false;
    //TAB DOTACIÓN DE PERSONAL 
    dotacionpersonal_residencia = false;
    dotacionpersonal_pjud = false;
    //TAB INFRAESTRUCTURA
    infraestructura_residencia = false;
    infraestructura_pjud = false;
    //TAB SEFURIDAD
    seguridad_residencia = false;
    seguridad_pjud = false;
    //TAB SALUD
    salud_residencia = false;
    salud_pjud = false;
    //TAB EDUCACION
    educacion_residencia = false;
    educacion_pjud = false;
    //TAB ALIMENTACION
    alimentacion_residencia = false;
    alimentacion_pjud = false;
    //TAB GESTION RESIDENCIA
    gestionResidencia_residencia = false;
    gestionResidencia_pjud = false;
}
var myCTRL_DatosComparativas;
function AnalizaCargaCompletaDatosParaComparativas() {
    var output = false;

    if (
        (generalresidencia && generalpjud) &&
        (generalresidenciaNNAAbandono && generalpjudNNAAbandono) &&
        (generalresidenciaNNAadolescHijo && generalpjudNNAadolescHijo) &&
        (poblacionCapacidad_residencia && poblacionCapacidad_pjud) &&
        (dotacionpersonal_residencia && dotacionpersonal_pjud) &&
        (infraestructura_residencia && infraestructura_pjud) &&
        (seguridad_residencia && seguridad_pjud) &&
        (salud_residencia && salud_pjud) &&
        (educacion_residencia && educacion_pjud) &&
        (alimentacion_residencia && alimentacion_pjud) &&
        (gestionResidencia_residencia && gestionResidencia_pjud)
    ) output = true;

    if (output) {
        clearInterval(myCTRL_DatosComparativas);
    }
    return output;
}
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

var ctrl_ObtenerAntecedentesGenerales_PJUD = false;
var ctrl_ObtenerNnaAbandonoDetalleOBS_PJUD = false;
var ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS_PJUD = false;
var ctrl_ObtenerAntecedentesPoblacionCapacidad_PJUD = false;
var ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion_PJUD = false;
var ctrl_ObtenerAntecedentesInfraestructura_PJUD = false;
var ctrl_ObtenerAntecedentesSeguridad_PJUD = false;
var ctrl_ObtenerAntecedentesSalud_PJUD = false;
var ctrl_ObtenerAntecedentesEducacion_PJUD = false;
var ctrl_ObtenerAntecedentesAlimentacion_PJUD = false;
var ctrl_ObtenerAntecedentesGestionResidencia_PJUD_2 = false;
var ctrl_ObtenerNnaEntrevistadosDetalleOBS_PJUD = false;

var ctrl_CargaObservacionesPJUD_TABGenerales = false;
var ctrl_CargaObservacionesPJUD_TABPoblacion_y_Capacidad = false;
var ctrl_CargaObservacionesPJUD_TABDotacion = false;
var ctrl_CargaObservacionesPJUD_TABMateriales_Infraestructura_Equipamiento = false;
var ctrl_CargaObservacionesPJUD_TABSeguridad = false;
var ctrl_CargaObservacionesPJUD_TABSalud = false;
var ctrl_CargaObservacionesPJUD_TABEducacion = false;
var ctrl_CargaObservacionesPJUD_TABAlimentacion = false;
var ctrl_CargaObservacionesPJUD_TABGestionResidencia = false;
var ctrl_CargaObservacionesSugerenciasPJUD_GeneralFicha = false;
function InicializaVarControlDesbloqueoZonasPJUD() {
    ctrl_ObtenerAntecedentesGenerales_PJUD = false;
    ctrl_ObtenerNnaAbandonoDetalleOBS_PJUD = false;
    ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS_PJUD = false;
    ctrl_ObtenerAntecedentesPoblacionCapacidad_PJUD = false;
    ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion_PJUD = false;
    ctrl_ObtenerAntecedentesInfraestructura_PJUD = false;
    ctrl_ObtenerAntecedentesSeguridad_PJUD = false;
    ctrl_ObtenerAntecedentesSalud_PJUD = false;
    ctrl_ObtenerAntecedentesEducacion_PJUD = false;
    ctrl_ObtenerAntecedentesAlimentacion_PJUD = false;
    ctrl_ObtenerAntecedentesGestionResidencia_PJUD_2 = false;
    ctrl_ObtenerNnaEntrevistadosDetalleOBS_PJUD = false;

    ctrl_CargaObservacionesPJUD_TABGenerales = false;
    ctrl_CargaObservacionesPJUD_TABPoblacion_y_Capacidad = false;
    ctrl_CargaObservacionesPJUD_TABDotacion = false;
    ctrl_CargaObservacionesPJUD_TABMateriales_Infraestructura_Equipamiento = false;
    ctrl_CargaObservacionesPJUD_TABSeguridad = false;
    ctrl_CargaObservacionesPJUD_TABSalud = false;
    ctrl_CargaObservacionesPJUD_TABEducacion = false;
    ctrl_CargaObservacionesPJUD_TABAlimentacion = false;
    ctrl_CargaObservacionesPJUD_TABGestionResidencia = false;
    ctrl_CargaObservacionesSugerenciasPJUD_GeneralFicha = false;
}

var ctrl_CargaRespuestaOBS_PJUD_TABGenerales = false;
var ctrl_CargaRespuestaOBS_PJUD_TABPoblacion_y_Capacidad = false;
var ctrl_CargaRespuestaOBS_PJUD_TABDotacion = false;
var ctrl_CargaRespuestaOBS_PJUD_TABMateriales_Infraestructura_Equipamiento = false;
var ctrl_CargaRespuestaOBS_PJUD_TABSeguridad = false;
var ctrl_CargaRespuestaOBS_PJUD_TABSalud = false;
var ctrl_CargaRespuestaOBS_PJUD_TABEducacion = false;
var ctrl_CargaRespuestaOBS_PJUD_TABAlimentacion = false;
var ctrl_CargaRespuestaOBS_PJUD_TABGestionResidencia = false;
function InicializaVarControlDesbloqueoZonasTramitaciones() {
    ctrl_CargaRespuestaOBS_PJUD_TABGenerales = false;
    ctrl_CargaRespuestaOBS_PJUD_TABPoblacion_y_Capacidad = false;
    ctrl_CargaRespuestaOBS_PJUD_TABDotacion = false;
    ctrl_CargaRespuestaOBS_PJUD_TABMateriales_Infraestructura_Equipamiento = false;
    ctrl_CargaRespuestaOBS_PJUD_TABSeguridad = false;
    ctrl_CargaRespuestaOBS_PJUD_TABSalud = false;
    ctrl_CargaRespuestaOBS_PJUD_TABEducacion = false;
    ctrl_CargaRespuestaOBS_PJUD_TABAlimentacion = false;
    ctrl_CargaRespuestaOBS_PJUD_TABGestionResidencia = false;
}

function ReseteaTBLListFichaResOBS() {
    //TABLA DE RESULTADOS DE BUSQUEDA DE FICHA CON OBSERVACIONES
    var tblDestino = document.getElementById("tbl_listadoFichaResOBS");
    var rowCount = tblDestino.rows.length;
    // alert(rowCount);
    for (var i = rowCount - 1; i >= 1 ; i--) {
        tblDestino.deleteRow(i);
    }
}
function ActualizaEstadoVarEstatus(opc) {
    switch (opc) {
        case 1:
            if (bPendientes == true) bPendientes = false; else bPendientes = true;
            break;
        case 2:
            if (bEnProceso == true) bEnProceso = false; else bEnProceso = true;
            break;
        case 3:
            if (bFinalizadas == true) bFinalizadas = false; else bFinalizadas = true;
            break;
        case 4:
            if (bEnviadas == true) bEnviadas = false; else bEnviadas = true;
            break;
    }
}
function VolverListado() {
    $("#tblDatosGBL").css("display", "none");
    $("#frmwork").css("display", "none");
    $("#frmwork2").css("display", "none");
    $("#btnVolverListado").css("display", "none");
    $("#btnVolverListado2").css("display", "none");
    $("#divFuncionesEstadisticasFicha").css("display", "block");
    $("#divListadoFichasXResponder").css("display", "block");

    BuscarFichasResidencialesOBS(1, 'BSQGRAL');
}

function ResetearIndicadoresBusquedaFichasOBS() {
    $("#divlistCanFichasConObsLbl").css("display", "none");
    $("#divlistadoFichasConObsCtrl").css("display", "none");
    $("#lbl_cantidadFichaResOBS").html("");
    $("#tbl_listadoFichaResOBS").css("display", "none");
}
function SeleccionaPagina(numpagina) {
    $("#paginadorFichaResOBS").html("");
    var paginasLink = "";
    var controlPrev = "";
    var controlNext = "";

    paginaActualBSQ = numpagina;

    if (paginaActualBSQ == 1) {
        controlPrev = "disabled";
        controlNext = "";
    }
    else {
        controlPrev = "";
        if (paginaActualBSQ == totalPaginasBSQ)
            controlNext = "disabled";
        else
            controlNext = "";
    }
    for (var k = 1; k <= totalPaginasBSQ; k++) {
        if (k == numpagina)
            valActive = "active";
        else
            valActive = "";
        paginasLink = paginasLink + '<li class="paginate_button ' + valActive + '"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="1" tabindex="0" onclick="SeleccionaPagina(' + k + ')">' + k + '</a></li>';
    }

    paginasLink = '<ul class="pagination">' +
                  '<li class="paginate_button previous ' + controlPrev + '" id="prev_listadoFichaResOBS"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="' + k + '" tabindex="0" onclick="SeleccionaPrevNext(0);">Anterior</a></li>' +
                    paginasLink +
                  '<li class="paginate_button next ' + controlNext + '" id="next_listadoFichaResOBS"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="' + (k + 1) + '" tabindex="0" onclick="SeleccionaPrevNext(1);">Siguiente</a></li>' +
                  '</ul>';
    $("#paginadorFichaResOBS").html(paginasLink);
    BuscarFichasResidencialesOBS(numpagina, "BSQPAG");
}
function SeleccionaPrevNext(op) {
    //alert(paginaActualBSQ + "-- " +totalPaginasBSQ);
    if (op == 0) {
        if ((paginaActualBSQ - 1) > 0)
            paginaActualBSQ = paginaActualBSQ - 1;
        else
            return;
    }
    else {
        if ((paginaActualBSQ + 1) <= totalPaginasBSQ)
            paginaActualBSQ = paginaActualBSQ + 1;
        else
            return;
    }
    //alert(paginaActualBSQ + "-- " + totalPaginasBSQ);
    $("#paginadorFichaResOBS").html("");
    var paginasLink = "";
    var controlPrev = "";
    var controlNext = "";

    if (paginaActualBSQ == 1) {
        controlPrev = 'disabled"';
        controlNext = '" style="cursor:pointer;"';
    }
    else {
        controlPrev = "";
        if (paginaActualBSQ == totalPaginasBSQ)
            controlNext = 'disabled"';
        else
            controlNext = '" style="cursor:pointer;"';
    }

    for (var k = 1; k <= totalPaginasBSQ; k++) {
        if (k == paginaActualBSQ)
            valActive = "active";
        else
            valActive = "";
        paginasLink = paginasLink + '<li class="paginate_button ' + valActive + '" ><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="1" tabindex="0" onclick="SeleccionaPagina(' + k + ')">' + k + '</a></li>';
    }

    paginasLink = '<ul class="pagination">' +
                  '<li class="paginate_button previous ' + controlPrev + ' id="prev_listadoFichaResOBS"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + k + '" tabindex="0" onclick="SeleccionaPrevNext(0);">Anterior</a></li>' +
                    paginasLink +
                  '<li class="paginate_button next ' + controlNext + ' id="next_listadoFichaResOBS"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + (k + 1) + '" tabindex="0" onclick="SeleccionaPrevNext(1);">Siguiente</a></li>' +
                  '</ul>';
    $("#paginadorFichaResOBS").html(paginasLink);
    BuscarFichasResidencialesOBS(paginaActualBSQ, "BSQPAG");
}

function ResetearFormulario() {
    $("#folio_pendiente").html("&nbsp;");
    $("#periodo_ficha").html("&nbsp;");

    //Reseteamos TAB General
    var arrVariablesGenerales = [
    "general_000_sel_Institucion",
    "general_001_sel_proyecto",
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
            $("#" + currentValue).val("");
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr("disabled",true);
        }
    );
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
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    $("#poblacion_005_tipo_vulneracion_mas_frecuente").val("");
    //deben habilitarse con la selección de codigo de proyecto
    $("#poblacion_005_tipo_vulneracion_mas_frecuente").attr("disabled", true);

    //Reseteamos TAB Antecedentes Dotación Personal
    var arrVariablesDotacionPersonal = [
        "dotacion_003_sel_director_tipo_jornada", "dotacion_007_sel_asistente_tipo_jornada", "dotacion_011_sel_psicologo_tipo_jornada", "dotacion_015_sel_enfermero_tipo_jornada", "dotacion_019_sel_auxenfermero_tipo_jornada",
        "dotacion_023_sel_medico_tipo_jornada", "dotacion_027_sel_psiquiatra_tipo_jornada", "dotacion_031_sel_terapeuta_ocup_tipo_jornada", "dotacion_035_sel_kinesiologo_tipo_jornada", "dotacion_039_sel_nutricionista_tipo_jornada",
        "dotacion_043_sel_fonoaudiologo_tipo_jornada", "dotacion_047_sel_profesorEducaFisica_tipo_jornada", "dotacion_051_sel_psicopedagogo_tipo_jornada", "dotacion_055_sel_educadoraParvulos_tipo_jornada", "dotacion_059_sel_educadoraTratoDirecto_tipo_jornada",
        "dotacion_063_sel_manipuladorAlimentos_tipo_jornada", "dotacion_067_sel_apoyoAdministrativo_tipo_jornada", "dotacion_071_sel_personalAseo_tipo_jornada", "dotacion_075_sel_personalLavandería_tipo_joranada", "dotacion_079_sel_monitoresTalleristas_tipo_jornada",
        "dotacion_083_sel_alumnosPractica_tipo_jornada", "dotacion_087_sel_apoyoVoluntario_tipo_jornada", "dotacion_091_sel_Otros_tipo_jornada", "dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada", "dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada"
    ];
    arrVariablesDotacionPersonal.forEach(
        function (currentValue, index) {
            $("#" + currentValue).attr({"selectedIndex":0,"disabled":true});
        }
    );
    var arrVariablesDotacionPersonal_2 = [
        "dotacion_004_sel_director_horas_semanales", "dotacion_008_sel_asistente_horas_semanales", "dotacion_012_sel_psicologo_horas_semanales", "dotacion_016_sel_enfermero_horas_semanales", "dotacion_020_sel_auxenfermero_horas_semanales",
        "dotacion_024_sel_medico_horas_semanales", "dotacion_028_sel_psiquiatra_horas_semanales", "dotacion_032_sel_terapeuta_ocup_horas_semanales", "dotacion_036_sel_kinesiologo_horas_semanales", "dotacion_040_sel_nutricionista_horas_semanales",
        "dotacion_044_sel_fonoaudiologo_horas_semanales", "dotacion_048_sel_profesorEducaFisica_horas_semanales", "dotacion_052_sel_psicopedagogo_horas_semanales", "dotacion_056_sel_educadoraParvulos_horas_semanales", "dotacion_060_sel_educadoraTratoDirecto_horas_semanales",
        "dotacion_064_sel_manipuladorAlimentos_horas_semanales", "dotacion_068_sel_apoyoAdministrativo_horas_semanales", "dotacion_072_sel_personalAseo_horas_semanales", "dotacion_076_sel_personalLavandería_horas_semanales", "dotacion_080_sel_monitoresTalleristas_horas_semanales",
        "dotacion_084_sel_alumnosPractica_horas_semanales", "dotacion_088_sel_apoyoVoluntario_horas_semanales", "dotacion_092_sel_Otros_horas_semanales", "dotacion_096_sel_PersonalLicenciaMedica_horas_semanales", "dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales"
    ];
    arrVariablesDotacionPersonal_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("0");
            $("#" + currentValue).attr("disabled",true);
        }
    );
    var arrVariablesDotacionPersonal_3 = [
        "dotacion_001_sel_director_existe", "dotacion_005_sel_asistente_existe", "dotacion_009_sel_psicologo_existe", "dotacion_013_sel_enfermero_existe", "dotacion_017_sel_auxenfermero_existe",
        "dotacion_021_sel_medico_existe", "dotacion_025_sel_psiquiatra_existe", "dotacion_029_sel_terapeuta_ocup_existe", "dotacion_033_sel_kinesiologo_existe", "dotacion_037_sel_nutricionista_existe",
        "dotacion_041_sel_fonoaudiologo_existe", "dotacion_045_sel_profesorEducaFisica_existe", "dotacion_049_sel_psicopedagogo_existe", "dotacion_053_sel_educadoraParvulos_existe", "dotacion_057_sel_educadoraTratoDirecto_existe",
        "dotacion_061_sel_manipuladorAlimentos_existe", "dotacion_065_sel_apoyoAdministrativo_existe", "dotacion_069_sel_personalAseo_existe", "dotacion_073_sel_personalLavanderia_existe", "dotacion_077_sel_monitoresTalleristas_existe",
        "dotacion_081_sel_alumnosPractica_existe", "dotacion_085_sel_apoyoVoluntario_existe", "dotacion_089_sel_Otros_existe", "dotacion_093_sel_PersonalLicenciaMedica_existe", "dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe"
    ];
    arrVariablesDotacionPersonal_3.forEach(
        function (currentValue, index) {
            $("#" + currentValue).attr({ "selectedIndex": 2, "disabled": true });
        }
    );
    var arrVariablesDotacionPersonal_4 = [
        "dotacion_002_sel_director_cantidad", "dotacion_006_sel_asistente_cantidad", "dotacion_010_sel_psicologo_cantidad", "dotacion_014_sel_enfermero_cantidad", "dotacion_018_sel_auxenfermero_cantidad",
        "dotacion_022_sel_medico_cantidad", "dotacion_026_sel_psiquiatra_cantidad", "dotacion_030_sel_terapeuta_ocup_cantidad", "dotacion_034_sel_kinesiologo_cantidad", "dotacion_038_sel_nutricionista_cantidad",
        "dotacion_042_sel_fonoaudiologo_cantidad", "dotacion_046_sel_profesorEducaFisica_cantidad", "dotacion_050_sel_psicopedagogo_cantidad", "dotacion_054_sel_educadoraParvulos_cantidad", "dotacion_058_sel_educadoraTratoDirecto_cantidad",
        "dotacion_062_sel_manipuladorAlimentos_cantidad", "dotacion_066_sel_apoyoAdministrativo_cantidad", "dotacion_070_sel_personalAseo_cantidad", "dotacion_074_sel_personalLavandería_cantidad", "dotacion_078_sel_monitoresTalleristas_cantidad",
        "dotacion_082_sel_alumnosPractica_cantidad", "dotacion_086_sel_apoyoVoluntario_cantidad", "dotacion_090_sel_Otros_cantidad", "dotacion_094_sel_PersonalLicenciaMedica_cantidad", "dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad"
    ];
    arrVariablesDotacionPersonal_4.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "value": 0, "disabled": true });
        }
    );
    $("#dotacion_101_Observaciones").val("");
    //deben habilitarse con la selección de codigo de proyecto
    $("#dotacion_101_Observaciones").attr("disabled",true);
    //Reseteamos TAB infraestructura
    var arrVariablesinfraestructura_1 = [
    "Infraest_001_ofi_admin_existe", "Infraest_003_salaReuniones_existe", "Infraest_005_salaRecepcion_existe", "Infraest_007_espacioVisitas_existe", "Infraest_009_salaMultiuso_existe", "Infraest_011_salaEstar_existe",
    "Infraest_013_enfermeria_existe", "Infraest_015_espacioRecreacional_existe", "Infraest_019_areasVerdes_existe", "Infraest_021_cocina_existe", "Infraest_023_comedor_existe", "Infraest_025_Lavanderia_existe",
    "Infraest_027_Dormitorio_existe", "Infraest_029_CamasNNA_existe", "Infraest_031_closetLocker_existe", "Infraest_033_banosPublico_existe", "Infraest_035_banosNNAadecuados_existe", "Infraest_037_duchasNNA_existe",

    "Infraest_035_banosNNA_Funcionamiento_existe", "Infraest_035_banosNNA_AcuerdoNormativa_existe", "Infraest_035_banosNNA_Hombre_existe", "Infraest_035_banosNNA_Mujer_existe", "Infraest_035_banosNNA_mixto_existe",
    "Infraest_037_duchasNNA_funcionamiento_existe", "Infraest_037_duchasNNA_normativa_existe", "Infraest_037_duchasNNA_hombres_existe", "Infraest_037_duchasNNA_mujeres_existe", "Infraest_037_duchasNNA_mixtos_existe"
    ];
    arrVariablesinfraestructura_1.forEach(
        function (currentValue, index) {
            $("#" + currentValue).attr("selectedIndex", 2);
        }
    );

    var arrVariablesinfraestructura_3 = [
    "Infraest_035_banosNNA_Funcionamiento_cant",
    "Infraest_035_banosNNA_AcuerdoNormativa_cant",
    "Infraest_035_banosNNA_Hombre_cant",
    "Infraest_035_banosNNA_Mujer_cant",
    "Infraest_035_banosNNA_mixto_cant",
    "Infraest_037_duchasNNA_funcionamiento_cant",
    "Infraest_037_duchasNNA_normativa_cant",
    "Infraest_037_duchasNNA_hombres_cant",
    "Infraest_037_duchasNNA_mujeres_cant",
    "Infraest_037_duchasNNA_mixtos_cant"
    ];
    arrVariablesinfraestructura_3.forEach(
        function (currentValue, index) {
            $("#"+currentValue).val("");
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr("disabled", true);
        }
    );

    var arrVariablesinfraestructura_2 = [
    "Infraest_036_banosNNAadecuados_cantidad", "Infraest_038_duchasNNA_cantidad",
    "Infraest_039_ambientacionAcorde_existe",
    "Infraest_040_vestuarioAdecuado_existe",
    "Infraest_041_utilesAseoPersonalNNA_existe",
    "Infraest_042_aguaCaliente_existe",
    "Infraest_043_estadoCalefonLlavesGas_existe",
    "Infraest_044_sistemaCalefaccion_existe",
    "Infraest_045_ventilacionAdecuada_existe",
    "Infraest_046_AccesoDiscapacitados_existe",
    "Infraest_047_InstalacionesHabilitadasDiscapacitados_existe",

    "Infraest_040_vestuarioPersonalizado_existe",
    "Infraest_043_CumpleNormaCalefon",
    "Infraest_043_CumpleNormaLlaveGas"
    ];
    arrVariablesinfraestructura_2.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    var arrVariablesinfraestructura_4 = [
    "Infraest_002_ofi_admin_cantidad", "Infraest_004_salaReuniones_cantidad", "Infraest_006_salaRecepcion_cantidad", "Infraest_008_espacioVisitas_cantidad", "Infraest_010_salaMultiuso_cantidad", "Infraest_012_salaEstar_cantidad",
    "Infraest_014_enfermeria_cantidad", "Infraest_016_espacioRecreacional_cantidad", "Infraest_020_areasVerdes_cantidad", "Infraest_022_cocina_cantidad", "Infraest_024_comedor_cantidad", "Infraest_026_Lavanderia_cantidad",
    "Infraest_028_Dormitorio_cantidad", "Infraest_030_CamasNNA_cantidad", "Infraest_032_closetLocker_cantidad", "Infraest_034_banosPublico_cantidad"
    ];
    arrVariablesinfraestructura_4.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "value": 0, "disabled": true });
        }
    );
    $("#Infraest_049_observaciones").val("");
    //deben habilitarse con la selección de codigo de proyecto
    $("#Infraest_049_observaciones").attr("disabled", true);
    //Reseteamos TAB Seguridad
    var arrVariablesSeguridad = [
        "seguridad_001_planEmergencia_existe",
        "seguridad_002_simulacroEmergencia_existe",
        "seguridad_003_planEmergenciaVisado_existe",
        "seguridad_004_extintores_existe",
        "seguridad_005_senaletica_existe",
        "seguridad_006_viaEvacuacion_existe",
        "seguridad_007_capacitacionPersonal_existe",
        "seguridad_008_sanitizacion_existe",
        "seguridad_009_sistemaElectrico_existe",
        "seguridad_010_zonaSeguridad_existe",

        "seguridad_007_capacitacionPersonalemergencia",
        "seguridad_007_capacitacionPersonalprimerosAux",
        "seguridad_008_sanitizacion_",
        "seguridad_008_sanitizacion_desratizacion",
        "seguridad_008_sanitizacion_fumigacion"
    ];
    arrVariablesSeguridad.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    $("#seguridad_011_observaciones").val("");
    //deben habilitarse con la selección de codigo de proyecto
    $("#seguridad_011_observaciones").attr("disabled",true);
    //Reseteamos TAB Salud
    var arrVariablesSalud_1 = [
        "salud_009_sel_registroMedicamentoAdmin_a_NNA",
        "salud_010_sel_protocoloAdmin_Medica_a_NNA",
        "salud_011_sel_control_ginecologicoAdolescente",
        "salud_012_sel_adolescenteNiegaControlGineco",
        "salud_013_sel_adolescenteEmbarazada",

        "salud_009_sel_resguardoMedicamentos",
        "salud_009_sel_inventarioMedicamentos",
        "salud_011_sel_control_nino_sano",
        "salud_011_sel_control_adolescente_sano"
    ];
    arrVariablesSalud_1.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    var arrVariablesSalud_2 = [
        "salud_001_NNA_inscritosCESFAM",
        "salud_002_NNA_problematicaSaludMental",
        "salud_003_NNA_problematicaSaludMentalsinDiag",
        "salud_004_NNA_inscritosEnferCronica",
        "salud_005_NNA_Discapacidad",
        "salud_006_NNA_inscritosProblemSaludRecibeMedica",
        "salud_007_NNA_problematicaSaludenTratamiento",
        
        "salud_015_adolescenteEmbarazadaControlalDia_cantidad",

        "salud_015_NNA_EsperaTransplantes",
        "salud_016_NNA_Transplantados",

        "salud_008_NNA_consumoDrogas",
        "salud_008_NNA_consumoAlcohol",
        "salud_017_consumoDrogasyAlcohol"
    ];
    arrVariablesSalud_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr("disabled",true);
        }
    );
    $("#salud_016_observaciones").val("");
    $("#salud_016_observaciones").attr("disabled", true);
    //deben habilitarse con la selección de codigo de proyecto
    $("#salud_014_sel_adolescenteEmbarazadaControlalDia").attr("selectedIndex", 2);
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
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
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
            $("#" + currentValue).val("");
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr("disabled",true);
        }
    );
    $("#educacion_011_observaciones").val("");
    //deben habilitarse con la selección de codigo de proyecto
    $("#educacion_011_observaciones").attr("disabled", true);

    //Reseteamos TAB Alimentacion
    var arrVariablesAlimentacion_1 = [
        "alimentacion_001_sel_registroHonorarioEntregaAlimento_existe",
        "alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe",
        "alimentacion_003_sel_menuEspeciales_existe",
        "alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe",
        "alimentacion_005_sel_certifSanitarioManipuladores_existe",
        "alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe",

        "alimentacion_006_sel_AlmacenaAlimento_existe",
        "alimentacion_006_sel_EstadoConserva_existe"
    ];
    arrVariablesAlimentacion_1.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    var arrVariablesAlimentacion_2 = [
        "alimentacion_007_comidas_lunes_a_viernes_cantidad",
        "alimentacion_008_comidas_sabado_domingo_fest_cantidad"
    ];
    arrVariablesAlimentacion_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr("disabled",true);
        }
    );
    $("#alimentacion_009_observacion").val("");
    //deben habilitarse con la selección de codigo de proyecto
    $("#alimentacion_009_observacion").attr("disabled", true);
    //Reseteamos TAB  Gestion Residencia
    var arrVariablesGestionResidencia_1 = [
        "gestionResid_001_sel_catastroRedes_existe",
        "gestionResid_002_sel_protocoloVisitas_existe",
        "gestionResid_003_sel_protocoloAcogida_NNA_existe",
        "gestionResid_004_sel_activi_autocuidadoEquipo_existe",
        "gestionResid_005_sel_protocoloActua_intervencionCrisis_existe",
        "gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe",
        "gestionResid_007_sel_protocoloConvivencia_existe",
        "gestionResid_008_sel_protocolo_PresentaReclamo_existe",
        "gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe",
        "gestionResid_010_sel_vinculacionResidencias_existe",
        "gestionResid_011_sel_ProcesoFormacion_existe",
        "gestionResid_012_sel_protocoloApadrinamiento_existe",
        "gestionResid_013_sel_protocoloTrasladoResid_existe",
        "gestionResid_014_sel_protocoloEgreso_NNA_existe",
        "gestionResid_015_sel_protocolo_derivacion_RedSalud_existe",
        "gestionResid_016_sel_activi_habilitacionLaboral_existe",

        "gestionResid_002_sel_protoVisitas_existe",
        "gestionResid_002_sel_regisVisitas_existe",

        "gestionResid_016_sel_activi_habilitaLaboral",
        "gestionResid_016_sel_activi_vidaInpendiente"
        //"gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe",
        //"gestionResid_020_sel_entrevisto_NNA_reservada_existe"  
    ];
    arrVariablesGestionResidencia_1.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    $("#gestionResid_017_observaciones").val("");
    $("#gestionResid_017_observaciones").attr("disabled",true);//deben habilitarse con la selección de codigo de proyecto

}
function ResetearFormularioPJUD() {

    //Reseteamos TAB General
    var arrVariablesGenerales = [
    "general_000_sel_Institucion_pjud",
    "general_001_sel_proyecto_pjud",
    "general_002_tipoOrganismo_pjud",
    "general_003_modeloIntervencion_pjud",
    "general_004_direccion_pjud",
    "general_005_telefonos_pjud",
    "general_006_region_pjud",
    "general_007_comuna_pjud",
    "general_008_email_pjud",
    "general_009_directorProyecto_pjud",
    "general_010_rut_director_proyecto_pjud",
    "general_012_pobvig_masculina_pjud",
    "general_013_pobvig_femenina_pjud",
    "general_014_plazaConv_masculina_pjud",
    "general_015_plazaConv_femenina_pjud",
    "general_016_otrasPlazas_masculina_pjud",
    "general_017_otrasPlazas_femenina_pjud",
    "general_018_totalNNApresent_masculina_pjud",
    "general_019_totalNNApresent_femenina_pjud",
    "general_020_totalNNAacercFamilia_masculina_pjud",
    "general_021_totalNNAacercFamilia_femenina_pjud",
    "general_022_totalResidenMayor_masculina_pjud",
    "general_023_totalResidenMayor_femenina_pjud",
    "general_024_abandonoSist_masculina_pjud",
    "general_025_abandonoSist_femenina_pjud",
    "general_026_hospitalizados_masculina_pjud",
    "general_027_hospitalizados_femenina_pjud",
    "general_028_totalNNAart80bis_masculina_pjud",
    "general_029_totalNNAart80bis_femenina_pjud",
    "general_030_totalNNAabandono_masculina_pjud",
    "general_031_totalNNAabandono_femenina_pjud",
    "general_032_totalNNA_suscep_adopcion_masculina_pjud",
    "general_033_totalNNA_suscep_adopcion_femenina_pjud",
    "general_034_totalNNA_enlace_adopcion_masculina_pjud",
    "general_035_totalNNA_enlace_adopcion_femenina_pjud",
    "general_036_totalNNA_causaini_adopcion_masculina_pjud",
    "general_037_totalNNA_causaini_adopcion_femenina_pjud",
    "general_038_totalNNA_adoslecente_chijo_masculina_pjud",
    "general_039_totalNNA_adoslecente_chijo_femenina_pjud",
    "pobvig_total_pjud",
    "plazaConv_total_pjud",
    "otrasPlazas_total_pjud",
    "totalNNApresent_total_pjud",
    "totalNNAacercFamilia_total_pjud",
    "totalResidenMayor_total_pjud",
    "abandonoSist_total_pjud",
    "hospitalizados_total_pjud",
    "totalNNAart80bis_total_pjud",
    "totalNNAabandono_total_pjud",
    "totalNNA_suscep_adopcion_total_pjud",
    "totalNNA_enlace_adopcion_total_pjud",
    "totalNNA_causaini_adopcion_total_pjud",
    "totalNNA_adoslecente_chijo_total_pjud"
    ];

    arrVariablesGenerales.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "value": "", "disabled": true });
        }
    );

    //RESETEO LA TABLA DE NNA en ABANDONO
    var tableNNA_Abandono = document.getElementById("tbl_NNA_abandonados_pjud");
    var numeroFilas_TBL_NNA_abandonados = $("#tbl_NNA_abandonados_pjud tr").length;
    if (numeroFilas_TBL_NNA_abandonados > 2) {
        for (var i = numeroFilas_TBL_NNA_abandonados - 1; i > 1; i--) {
            tableNNA_Abandono.deleteRow(i);
        }
    }
    $("#general_030_totalNNAabandono_masculina_pjud").val(0);
    $("#general_031_totalNNAabandono_femenina_pjud").val(0);
    $("#general_038_totalNNA_adoslecente_chijo_masculina_pjud").val(0);
    $("#general_039_totalNNA_adoslecente_chijo_femenina_pjud").val(0);

    //RESETEO LA TABLA DE NNA ADOLESCENTES CON HIJOS
    var tableNNA_adolescente_con_hijos = document.getElementById("tbl_adolescente_con_hijos_pjud");
    var numeroFilas_TBL_NNA_tableNNA_adolescente_con_hijos = $("#tbl_adolescente_con_hijos_pjud tr").length;
    if (numeroFilas_TBL_NNA_tableNNA_adolescente_con_hijos > 2) {
        for (var i = numeroFilas_TBL_NNA_tableNNA_adolescente_con_hijos - 1; i > 1; i--) {
            tableNNA_adolescente_con_hijos.deleteRow(i);
        }
    }

    //Reseteamos TAB Antecedentes Poblacion y Capacidad
    var arrVariablesPoblacionCapacidad = [
        "poblacion_001_sel_reside_con_subven_pjud",
        "poblacion_002_sel_sexo_atendidos_pjud",
        "poblacion_003_sel_rango_etareo_predomina_pjud",
        "poblacion_004_poblacion_vigente_pjud",
        "poblacion_006_programa_apadrinimiento_pjud"
    ];
    arrVariablesPoblacionCapacidad.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    $("#poblacion_005_tipo_vulneracion_mas_frecuente_pjud").val("");
    $("#poblacion_005_tipo_vulneracion_mas_frecuente_pjud").attr("disabled",true); //deben habilitarse con la selección de codigo de proyecto

    //OBSERVACIONES TAB POBLACION PJUD
    $("#poblacion_007_observaciones_pjud").val("");
    $("#poblacion_007_observaciones_pjud").attr("readOnly",true);


    //Reseteamos TAB Antecedentes Dotación Personal
    var arrVariablesDotacionPersonal = [
        "dotacion_003_sel_director_tipo_jornada_pjud", "dotacion_007_sel_asistente_tipo_jornada_pjud", "dotacion_011_sel_psicologo_tipo_jornada_pjud", "dotacion_015_sel_enfermero_tipo_jornada_pjud", "dotacion_019_sel_auxenfermero_tipo_jornada_pjud",
        "dotacion_023_sel_medico_tipo_jornada_pjud", "dotacion_027_sel_psiquiatra_tipo_jornada_pjud", "dotacion_031_sel_terapeuta_ocup_tipo_jornada_pjud", "dotacion_035_sel_kinesiologo_tipo_jornada_pjud", "dotacion_039_sel_nutricionista_tipo_jornada_pjud",
        "dotacion_043_sel_fonoaudiologo_tipo_jornada_pjud", "dotacion_047_sel_profesorEducaFisica_tipo_jornada_pjud", "dotacion_051_sel_psicopedagogo_tipo_jornada_pjud", "dotacion_055_sel_educadoraParvulos_tipo_jornada_pjud", "dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_pjud",
        "dotacion_063_sel_manipuladorAlimentos_tipo_jornada_pjud", "dotacion_067_sel_apoyoAdministrativo_tipo_jornada_pjud", "dotacion_071_sel_personalAseo_tipo_jornada_pjud", "dotacion_075_sel_personalLavandería_tipo_joranada_pjud", "dotacion_079_sel_monitoresTalleristas_tipo_jornada_pjud",
        "dotacion_083_sel_alumnosPractica_tipo_jornada_pjud", "dotacion_087_sel_apoyoVoluntario_tipo_jornada_pjud", "dotacion_091_sel_Otros_tipo_jornada_pjud", "dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_pjud", "dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_pjud"
    ];
    arrVariablesDotacionPersonal.forEach(
        function (currentValue, index) {
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    var arrVariablesDotacionPersonal_2 = [
        "dotacion_004_sel_director_horas_semanales_pjud", "dotacion_008_sel_asistente_horas_semanales_pjud", "dotacion_012_sel_psicologo_horas_semanales_pjud", "dotacion_016_sel_enfermero_horas_semanales_pjud", "dotacion_020_sel_auxenfermero_horas_semanales_pjud",
        "dotacion_024_sel_medico_horas_semanales_pjud", "dotacion_028_sel_psiquiatra_horas_semanales_pjud", "dotacion_032_sel_terapeuta_ocup_horas_semanales_pjud", "dotacion_036_sel_kinesiologo_horas_semanales_pjud", "dotacion_040_sel_nutricionista_horas_semanales_pjud",
        "dotacion_044_sel_fonoaudiologo_horas_semanales_pjud", "dotacion_048_sel_profesorEducaFisica_horas_semanales_pjud", "dotacion_052_sel_psicopedagogo_horas_semanales_pjud", "dotacion_056_sel_educadoraParvulos_horas_semanales_pjud", "dotacion_060_sel_educadoraTratoDirecto_horas_semanales_pjud",
        "dotacion_064_sel_manipuladorAlimentos_horas_semanales_pjud", "dotacion_068_sel_apoyoAdministrativo_horas_semanales_pjud", "dotacion_072_sel_personalAseo_horas_semanales_pjud", "dotacion_076_sel_personalLavandería_horas_semanales_pjud", "dotacion_080_sel_monitoresTalleristas_horas_semanales_pjud",
        "dotacion_084_sel_alumnosPractica_horas_semanales_pjud", "dotacion_088_sel_apoyoVoluntario_horas_semanales_pjud", "dotacion_092_sel_Otros_horas_semanales_pjud", "dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_pjud", "dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_pjud"
    ];
    arrVariablesDotacionPersonal_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).attr({ "value": "0", "disabled": true });
        }
    );
    var arrVariablesDotacionPersonal_3 = [
        "dotacion_001_sel_director_existe_pjud", "dotacion_005_sel_asistente_existe_pjud", "dotacion_009_sel_psicologo_existe_pjud", "dotacion_013_sel_enfermero_existe_pjud", "dotacion_017_sel_auxenfermero_existe_pjud",
        "dotacion_021_sel_medico_existe_pjud", "dotacion_025_sel_psiquiatra_existe_pjud", "dotacion_029_sel_terapeuta_ocup_existe_pjud", "dotacion_033_sel_kinesiologo_existe_pjud", "dotacion_037_sel_nutricionista_existe_pjud",
        "dotacion_041_sel_fonoaudiologo_existe_pjud", "dotacion_045_sel_profesorEducaFisica_existe_pjud", "dotacion_049_sel_psicopedagogo_existe_pjud", "dotacion_053_sel_educadoraParvulos_existe_pjud", "dotacion_057_sel_educadoraTratoDirecto_existe_pjud",
        "dotacion_061_sel_manipuladorAlimentos_existe_pjud", "dotacion_065_sel_apoyoAdministrativo_existe_pjud", "dotacion_069_sel_personalAseo_existe_pjud", "dotacion_073_sel_personalLavanderia_existe_pjud", "dotacion_077_sel_monitoresTalleristas_existe_pjud",
        "dotacion_081_sel_alumnosPractica_existe_pjud", "dotacion_085_sel_apoyoVoluntario_existe_pjud", "dotacion_089_sel_Otros_existe_pjud", "dotacion_093_sel_PersonalLicenciaMedica_existe_pjud", "dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_pjud"
    ];
    arrVariablesDotacionPersonal_3.forEach(
        function (currentValue, index) {
            $("#" + currentValue).attr({ "selectedIndex": 2, "disabled": true });
        }
    );
    var arrVariablesDotacionPersonal_4 = [
        "dotacion_002_sel_director_cantidad_pjud", "dotacion_006_sel_asistente_cantidad_pjud", "dotacion_010_sel_psicologo_cantidad_pjud", "dotacion_014_sel_enfermero_cantidad_pjud", "dotacion_018_sel_auxenfermero_cantidad_pjud",
        "dotacion_022_sel_medico_cantidad_pjud", "dotacion_026_sel_psiquiatra_cantidad_pjud", "dotacion_030_sel_terapeuta_ocup_cantidad_pjud", "dotacion_034_sel_kinesiologo_cantidad_pjud", "dotacion_038_sel_nutricionista_cantidad_pjud",
        "dotacion_042_sel_fonoaudiologo_cantidad_pjud", "dotacion_046_sel_profesorEducaFisica_cantidad_pjud", "dotacion_050_sel_psicopedagogo_cantidad_pjud", "dotacion_054_sel_educadoraParvulos_cantidad_pjud", "dotacion_058_sel_educadoraTratoDirecto_cantidad_pjud",
        "dotacion_062_sel_manipuladorAlimentos_cantidad_pjud", "dotacion_066_sel_apoyoAdministrativo_cantidad_pjud", "dotacion_070_sel_personalAseo_cantidad_pjud", "dotacion_074_sel_personalLavandería_cantidad_pjud", "dotacion_078_sel_monitoresTalleristas_cantidad_pjud",
        "dotacion_082_sel_alumnosPractica_cantidad_pjud", "dotacion_086_sel_apoyoVoluntario_cantidad_pjud", "dotacion_090_sel_Otros_cantidad_pjud", "dotacion_094_sel_PersonalLicenciaMedica_cantidad_pjud", "dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_pjud"
    ];
    arrVariablesDotacionPersonal_4.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    $("#dotacion_101_Observaciones_pjud").val("");
    $("#dotacion_101_Observaciones_pjud").attr("readOnly", true);//deben habilitarse con la selección de codigo de proyecto


    //Reseteamos TAB infraestructura
    var arrVariablesinfraestructura_1 = [
    "Infraest_001_ofi_admin_existe_pjud", "Infraest_003_salaReuniones_existe_pjud", "Infraest_005_salaRecepcion_existe_pjud", "Infraest_007_espacioVisitas_existe_pjud", "Infraest_009_salaMultiuso_existe_pjud", "Infraest_011_salaEstar_existe_pjud",
    "Infraest_013_enfermeria_existe_pjud", "Infraest_015_espacioRecreacional_existe_pjud", "Infraest_019_areasVerdes_existe_pjud", "Infraest_021_cocina_existe_pjud", "Infraest_023_comedor_existe_pjud", "Infraest_025_Lavanderia_existe_pjud",
    "Infraest_027_Dormitorio_existe_pjud", "Infraest_029_CamasNNA_existe_pjud", "Infraest_031_closetLocker_existe_pjud", "Infraest_033_banosPublico_existe_pjud", "Infraest_035_banosNNAadecuados_existe_pjud", "Infraest_037_duchasNNA_existe_pjud"
    ];
    arrVariablesinfraestructura_1.forEach(
        function (currentValue, index) {
            $("#" + currentValue).attr("selectedIndex",2);
        }
    );
    var arrVariablesinfraestructura_2 = [
    "Infraest_002_ofi_admin_cantidad_pjud", "Infraest_004_salaReuniones_cantidad_pjud", "Infraest_006_salaRecepcion_cantidad_pjud", "Infraest_008_espacioVisitas_cantidad_pjud", "Infraest_010_salaMultiuso_cantidad_pjud", "Infraest_012_salaEstar_cantidad_pjud",
    "Infraest_014_enfermeria_cantidad_pjud", "Infraest_016_espacioRecreacional_cantidad_pjud", "Infraest_020_areasVerdes_cantidad_pjud", "Infraest_022_cocina_cantidad_pjud", "Infraest_024_comedor_cantidad_pjud", "Infraest_026_Lavanderia_cantidad_pjud",
    "Infraest_028_Dormitorio_cantidad_pjud", "Infraest_030_CamasNNA_cantidad_pjud", "Infraest_032_closetLocker_cantidad_pjud", "Infraest_034_banosPublico_cantidad_pjud", "Infraest_036_banosNNAadecuados_cantidad_pjud", "Infraest_038_duchasNNA_cantidad_pjud",
    "Infraest_039_ambientacionAcorde_existe_pjud",
    "Infraest_040_vestuarioAdecuado_existe_pjud",
    "Infraest_041_utilesAseoPersonalNNA_existe_pjud",
    "Infraest_042_aguaCaliente_existe_pjud",
    "Infraest_043_estadoCalefonLlavesGas_existe_pjud",
    "Infraest_044_sistemaCalefaccion_existe_pjud",
    "Infraest_045_ventilacionAdecuada_existe_pjud",
    "Infraest_046_AccesoDiscapacitados_existe_pjud",
    "Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud"
    ];
    arrVariablesinfraestructura_2.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    $("#Infraest_049_observaciones_pjud").val("");
    $("#Infraest_049_observaciones_pjud").readOnly = true; //deben habilitarse con la selección de codigo de proyecto


    //Reseteamos TAB Seguridad
    var arrVariablesSeguridad = [
        "seguridad_001_planEmergencia_existe_pjud",
        "seguridad_002_simulacroEmergencia_existe_pjud",
        "seguridad_003_planEmergenciaVisado_existe_pjud",
        "seguridad_004_extintores_existe_pjud",
        "seguridad_005_senaletica_existe_pjud",
        "seguridad_006_viaEvacuacion_existe_pjud",
        "seguridad_007_capacitacionPersonal_existe_pjud",
        "seguridad_008_sanitizacion_existe_pjud",
        "seguridad_009_sistemaElectrico_existe_pjud",
        "seguridad_010_zonaSeguridad_existe_pjud"
    ];
    arrVariablesSeguridad.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );

    //Reseteamos TAB Salud
    var arrVariablesSalud_1 = [
        "salud_009_sel_registroMedicamentoAdmin_a_NNA_pjud",
        "salud_010_sel_protocoloAdmin_Medica_a_NNA_pjud",
        "salud_011_sel_control_ginecologicoAdolescente_pjud",
        "salud_012_sel_adolescenteNiegaControlGineco_pjud",
        "salud_013_sel_adolescenteEmbarazada_pjud"
    ];
    arrVariablesSalud_1.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    var arrVariablesSalud_2 = [
        "salud_001_NNA_inscritosCESFAM_pjud",
        "salud_002_NNA_problematicaSaludMental_pjud",
        "salud_003_NNA_problematicaSaludMentalsinDiag_pjud",
        "salud_004_NNA_inscritosEnferCronica_pjud",
        "salud_005_NNA_Discapacidad_pjud",
        "salud_006_NNA_inscritosProblemSaludRecibeMedica_pjud",
        "salud_007_NNA_problematicaSaludenTratamiento_pjud",
        "salud_008_NNA_consumoDrogas_pjud",
        "salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud"
    ];
    arrVariablesSalud_2.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "value": "", "disabled": true });
        }
    );
    $("#salud_014_sel_adolescenteEmbarazadaControlalDia_pjud").attr("selectedIndex",2);


    //Reseteamos TAB Educación
    var arrVariablesEducacion_1 = [
        "educacion_007_sel_EspacioEstudio_y_Tareas_existe_pjud",
        "educacion_008_sel_materialBibliiografico_existe_pjud",
        "educacion_009_sel_computadores_existe_pjud",
        "educacion_010_sel_AccesoControladoInternet_existe_pjud"
    ];
    arrVariablesEducacion_1.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    var arrVariablesEducacion_2 = [
        "educacion_001_NNA_asisten_colegio_cantidad_pjud",
        "educacion_002_NNA_NO_asisten_colegio_cantidad_pjud",
        "educacion_003_NNA_retrasoEscolar_cantidad_pjud",
        "educacion_004_NNA_matriculaCancelada_cantidad_pjud",
        "educacion_005_NNA_asisten_colegioDiferencial_cantidad_pjud",
        "educacion_006_NNA_asisten_colegioNivelacion_cantidad_pjud"
    ];
    arrVariablesEducacion_2.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "value": "", "disabled": true });
        }
    );

    //Reseteamos TAB Alimentacion
    var arrVariablesAlimentacion_1 = [
        "alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_pjud",
        "alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_pjud",
        "alimentacion_003_sel_menuEspeciales_existe_pjud",
        "alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_pjud",
        "alimentacion_005_sel_certifSanitarioManipuladores_existe_pjud",
        "alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_pjud",
    ];
    arrVariablesAlimentacion_1.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    var arrVariablesAlimentacion_2 = [
        "alimentacion_007_comidas_lunes_a_viernes_cantidad_pjud",
        "alimentacion_008_comidas_sabado_domingo_fest_cantidad_pjud"
    ];
    arrVariablesAlimentacion_2.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "value": "", "disabled": true });
        }
    );

    //Reseteamos TAB  Gestion Residencia
    var arrVariablesGestionResidencia_1 = [
        "gestionResid_001_sel_catastroRedes_existe_pjud",
        "gestionResid_002_sel_protocoloVisitas_existe_pjud",
        "gestionResid_003_sel_protocoloAcogida_NNA_existe_pjud",
        "gestionResid_004_sel_activi_autocuidadoEquipo_existe_pjud",
        "gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_pjud",
        "gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_pjud",
        "gestionResid_007_sel_protocoloConvivencia_existe_pjud",
        "gestionResid_008_sel_protocolo_PresentaReclamo_existe_pjud",
        "gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_pjud",
        "gestionResid_010_sel_vinculacionResidencias_existe_pjud",
        "gestionResid_011_sel_ProcesoFormacion_existe_pjud",
        "gestionResid_012_sel_protocoloApadrinamiento_existe_pjud",
        "gestionResid_013_sel_protocoloTrasladoResid_existe_pjud",
        "gestionResid_014_sel_protocoloEgreso_NNA_existe_pjud",
        "gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_pjud",
        "gestionResid_016_sel_activi_habilitacionLaboral_existe_pjud"
        //"gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe",
        //"gestionResid_020_sel_entrevisto_NNA_reservada_existe"  
    ];
    arrVariablesGestionResidencia_1.forEach(
        function (currentValue, index) {
            //deben habilitarse con la selección de codigo de proyecto
            $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
        }
    );
    //RESETEO LA TABLA DE NNA ADOLESCENTES CON HIJOS
    var tableNNA_entrevistados_pjud = document.getElementById("tbl_detalle_NNA_entrevistados_pjud");
    var numeroFilas_TBL_NNA_entrevistados_pjud = $("#tbl_detalle_NNA_entrevistados_pjud tr").length;
    if (numeroFilas_TBL_NNA_entrevistados_pjud > 2) {
        for (var i = numeroFilas_TBL_NNA_entrevistados_pjud - 1; i > 1; i--) {
            tableNNA_entrevistados_pjud.deleteRow(i);
        }
    }

    //Reseteo de campos observaciones PJUD y respuestas SENAME en ficha hija:
    //OBSERVACIONES TAB GENERALES PJUD
    $("#general_040_observaciones_pjud").val("");
    $("#general_040_observaciones_pjud").attr("readOnly", true);

    $("#general_041_respuesta_SENAME_pjud").val("");
    $("#general_041_respuesta_SENAME_pjud").attr("readOnly", true);

    $("#poblacion_007_observaciones_pjud").val("");
    $("#poblacion_008_respuesta_SENAME_pjud").val("");
    $("#dotacion_101_Observaciones_pjud").val("");
    $("#dotacion_102_respuesta_SENAME_pjud").val("");
    $("#Infraest_049_observaciones_pjud").val("");
    $("#Infraest_050_respuesta_SENAME_pjud").val("");

    $("#poblacion_007_observaciones_pjud").attr("readOnly", true);
    $("#poblacion_008_respuesta_SENAME_pjud").attr("readOnly", true);
    $("#dotacion_101_Observaciones_pjud").attr("readOnly", true);
    $("#dotacion_102_respuesta_SENAME_pjud").attr("readOnly", true);
    $("#Infraest_049_observaciones_pjud").attr("readOnly", true);
    $("#Infraest_050_respuesta_SENAME_pjud").attr("readOnly", true);


    $("#gestionResid_021_observacion_gral_pjud").val("");
    $("#gestionResid_022_sugerencias_a_SENAME").val("");
    $("#gestionResid_023_sugerencias_a_residencia").val("");

    $("#gestionResid_021_observacion_gral_pjud").attr("readOnly", true);
    $("#gestionResid_022_sugerencias_a_SENAME").attr("readOnly", true);
    $("#gestionResid_023_sugerencias_a_residencia").attr("readOnly", true);

    $("#gestionResid_024_respuesta_SENAME").val("");
    $("#gestionResid_024_respuesta_SENAME").attr("readOnly", true);

    $("#div001_ObsGral_Sugerencia").html("");
    $("#div002_ObsGral_Sugerencia").html("");
    $("#div003_ObsGral_Sugerencia").html("");

    var arrVariablesInfraEstructuraEval = [
        "Infraest_001_ofi_admin_existe_pjud_eval",
        "Infraest_003_salaReuniones_existe_pjud_eval",
        "Infraest_005_salaRecepcion_existe_pjud_eval",
        "Infraest_007_espacioVisitas_existe_pjud_eval",
        "Infraest_009_salaMultiuso_existe_pjud_eval",
        "Infraest_011_salaEstar_existe_pjud_eval",
        "Infraest_011_salaEstar_existe_pjud_eval",
        "Infraest_013_enfermeria_existe_pjud_eval",
        "Infraest_015_espacioRecreacional_existe_pjud_eval",
        "Infraest_019_areasVerdes_existe_pjud_eval",
        "Infraest_021_cocina_existe_pjud_eval",
        "Infraest_023_comedor_existe_pjud_eval",
        "Infraest_025_Lavanderia_existe_pjud_eval",
        "Infraest_027_Dormitorio_existe_pjud_eval",
        "Infraest_029_CamasNNA_existe_pjud_eval",
        "Infraest_031_closetLocker_existe_pjud_eval",
        "Infraest_033_banosPublico_existe_pjud_eval",
        "Infraest_035_banosNNAadecuados_existe_pjud_eval",
        "Infraest_037_duchasNNA_existe_pjud_eval",
        "Infraest_039_ambientacionAcorde_existe_pjud_eval",
        "Infraest_040_vestuarioAdecuado_existe_pjud_eval",
        "Infraest_041_utilesAseoPersonalNNA_existe_pjud_eval",
        "Infraest_042_aguaCaliente_existe_pjud_eval",
        "Infraest_043_estadoCalefonLlavesGas_existe_eval",
        "Infraest_044_sistemaCalefaccion_existe_pjud_eval",
        "Infraest_045_ventilacionAdecuada_existe_pjud_eval",
        "Infraest_046_AccesoDiscapacitados_existe_pjud_eval",
        "Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud_eval"
    ];
    arrVariablesInfraEstructuraEval.forEach(
     function (currentValue, index) {
         $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
     }
    );
    $("#seguridad_011_observaciones_pjud").attr({"value":"","readOnly":true});
    $("#seguridad_012_respuesta_sename_pjud").attr({ "value": "", "readOnly": true });
    $("#salud_016_observaciones_pjud").attr({ "value": "", "readOnly": true });   
    $("#salud_017_respuesta_sename_pjud").attr({ "value": "", "readOnly": true });
    $("#educacion_011_observaciones_pjud").attr({ "value": "", "readOnly": true });  
    $("#educacion_012_respuesta_sename_pjud").attr({ "value": "", "readOnly": true });

    var arrVariablesEducacionEval = [
        "educacion_007_sel_EspacioEstudio_y_Tareas_existe_eval_pjud",
        "educacion_008_sel_materialBibliiografico_existe_eval_pjud",
        "educacion_009_sel_computadores_existe_eval_pjud",
        "educacion_010_sel_AccesoControladoInternet_existe_eval_pjud"];

    arrVariablesEducacionEval.forEach(
     function (currentValue, index) {
         $("#" + currentValue).attr({ "selectedIndex": 0, "disabled": true });
     }
    );

    $("#alimentacion_009_observacion_pjud").attr({ "value": "", "readOnly": true });    
    $("#alimentacion_010_respuesta_sename_pjud").attr({ "value": "", "readOnly": true });

    $("#gestionResid_017_observaciones_pjud").attr({ "value": "", "readOnly": true });
    $("#gestionResid_018_observaciones_pobla_NNA_visita_pjud").attr({ "value": "", "readOnly": true });
    $("#gestionResid_021_sel_respuesta_sename_pjud").attr({ "value": "", "readOnly": true });

    $("#gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe_pjud").attr({ "selectedIndex": 0, "disabled": true });
    $("#gestionResid_020_sel_entrevisto_NNA_reservada_existe_pjud").attr({ "selectedIndex": 0, "disabled": true });

}
function ResetearTramitacionOBS() {
    strtramitacion_1_General = "";
    strtramitacion_2_Personal = "";
    strtramitacion_3_Materiale = "";
    strtramitacion_4_Seguridad = "";
    strtramitacion_5_Salud = "";
    strtramitacion_6_Educacion = "";
    strtramitacion_7_Alimentacion = "";
    strtramitacion_8_GestionResidencia = "";
    strtramitacion_9_PoblaciónCapacidad = "";
    CodFichaHijaTramitaciones = 0;

    $("#div_respuestas_obs_general").attr({ "style": "display:none;" });
    $("#div_tramitacion001").html("");
    $("#files001").html('<table id="tbl001"></table>');

    //FALTA AGREGAR TODAS LAS SECCIONES >>><<<<<
}
function VerDetalle(CodProyecto, codFichaPadre, codFichaHijo, objAElement) {
    //alert(CodProyecto+" - "+codFichaPadre+" - "+codFichaHijo);
    var param = objAElement.dataset.institucionproyecto;
    var arrParam = param.split('|');
    existedirRespuesta = "";
    correlativoIdDetalle = 1;
    $("#text_respuesta_ObsGral_Sugerencia").val("");

    if ($("#A1").attr("aria-expanded") == "true") $("#A1").click();
    if ($("#A2").attr("aria-expanded") == "true") $("#A2").click();
    if ($("#A3").attr("aria-expanded") == "true") $("#A3").click();
    if ($("#A5").attr("aria-expanded") == "true") $("#A5").click();

    if ($("#A6").attr("aria-expanded") == "true") $("#A6").click();
    if ($("#A7").attr("aria-expanded") == "true") $("#A7").click();

    $("#LI_general").click();
    $("#LI_general_2").click();
    //Reinicio de id de respuesta:
    $("#IdRespuesta").val("0");
    arrObsPorSeccion = ["", "", "", "", "", "", "", "", ""];
    arrUltimosIdDetalle = [0, 0, null, null, null, null, null, null, null] ;
    arrUltimosIdDetalleGls = ["", "", "", "", "", "", "", "", ""];
    arrVisadosAuto = [0, 0, null, null, null, null, null, null, null] ;
    BloqueaIngresoRespuestaGlobal(false);
    InicializaContadoresTexto();
    EstadoRespuestaGlobal = false;
    $("#spanPeriodoGBL").html("");
    $("#spanProyectoGBL").html("");
    $("#spanInstitucionGBL").html("");


    //reseteo de sección de tramitación
    ResetearTramitacionOBS();
    ResetearBotonerasRespuesta();
    InicializaVarControlDesbloqueoZonasTramitaciones();

    //reseteo div de secciones de comparación
    InicializaVarControlZonaDatosComparativas();

    document.getElementById("divListadoFichasXResponder").style.display = "none";
    document.getElementById("divFuncionesEstadisticasFicha").style.display = "none";
    document.getElementById("frmwork").style.display = "block";

    $("#btnVolverListado").attr({ 'style': 'display: block;margin-bottom:10px;' });

    //SE BLOQUEA ACCESO A SECCION HASTA QUE SE CARGUEN LOS DATOS
    AdminitrarAccesoASeccionesOBS("bloqueo", "FICHA_PADRE");
    InicializaVarControlDesbloqueoZonas();

    AdminitrarAccesoASeccionesOBS("bloqueo", "INFORME_VISITA");
    InicializaVarControlDesbloqueoZonasPJUD();

    AdminitrarAccesoASeccionesOBS("bloqueo", "INFORME_COMPARATIVA");

    AdminitrarAccesoASeccionesOBS("bloqueo", "TRAMITACION_OBSERVACIONES");

    CodFichaHijaTramitaciones = codFichaHijo;
    CargaDatosGeneralesDDL3(CodProyecto, arrParam[0], arrParam[1], codFichaPadre);
    ObtenerDatosGeneralesInformeVisita(CodProyecto, codFichaPadre, codFichaHijo);
    CargaDatosGeneralesDDL4(CodProyecto, arrParam[0], arrParam[1], codFichaHijo, codFichaPadre);
    /*
    myCTRL_FichaPadre = setInterval("AnalizaCargaCompletaDatosFichaPadre()", 2000);
    myCTRL_FichaPJUD = setInterval("AnalizaCargaCompletaDatosFichaPJUD()", 2000);
    myCTRL_DatosTramitacionOBS = setInterval("AnalizaCargaCompletaDatosTramitacionOBS()", 2000);
    myCTRL_DatosComparativas = setInterval("AnalizaCargaCompletaDatosParaComparativas()", 2000);
    */
    myCTRL_FichaPadre = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo', 'FICHA_PADRE')", 2000);
    myCTRL_FichaPJUD = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo', 'INFORME_VISITA')", 2000);
    myCTRL_DatosTramitacionOBS = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo', 'TRAMITACION_OBSERVACIONES')", 2000);
    myCTRL_DatosComparativas = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo', 'INFORME_COMPARATIVA')", 2000);
}
function InicializaContadoresTexto() {
    $("#labelCaracteres_respuesta_ObsGral").html("");
    for (var k = 1; k <= 9; k++) {
        $("#labelCaracteres_respuesta00" + k).html("");
    }
}
function ResetearBotonerasRespuesta() {
    for (var k = 1; k <= 9; k++) {
        $("#divBotonera00" + k).attr({ "style": "display:;" });
    }
}
var myCTRL_FichaPadre;
function AnalizaCargaCompletaDatosFichaPadre() {
    var output = false;
    if (ctrl_ObtenerAntecedentesGenerales == true &&
        ctrl_ObtenerNnaAbandonoDetalleOBS == true &&
        ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS == true &&
        ctrl_ObtenerAntecedentesPoblacionCapacidad == true &&
        ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion == true &&
        ctrl_ObtenerAntecedentesInfraestructura == true &&
        ctrl_ObtenerAntecedentesSeguridad == true &&
        ctrl_ObtenerAntecedentesSalud == true &&
        ctrl_ObtenerAntecedentesEducacion == true &&
        ctrl_ObtenerAntecedentesAlimentacion == true &&
        ctrl_ObtenerAntecedentesGestionResidencia_PJUD == true)
        output = true;

    if (output) {
        clearInterval(myCTRL_FichaPadre);
    }
    /*
    alert("ctrl_ObtenerAntecedentesGenerales ==" + ctrl_ObtenerAntecedentesGenerales + "\n" +
        "ctrl_ObtenerNnaAbandonoDetalleOBS ==" + ctrl_ObtenerNnaAbandonoDetalleOBS + "\n" +
        "ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS ==" + ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS + "\n" +
        "ctrl_ObtenerAntecedentesPoblacionCapacidad ==" + ctrl_ObtenerAntecedentesPoblacionCapacidad + "\n" +
        "ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion ==" + ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion + "\n" +
        "ctrl_ObtenerAntecedentesInfraestructura ==" + ctrl_ObtenerAntecedentesInfraestructura + "\n" +
        "ctrl_ObtenerAntecedentesSeguridad ==" + ctrl_ObtenerAntecedentesSeguridad + "\n" +
        "ctrl_ObtenerAntecedentesSalud ==" + ctrl_ObtenerAntecedentesSalud + "\n" +
        "ctrl_ObtenerAntecedentesEducacion ==" + ctrl_ObtenerAntecedentesEducacion + "\n" +
        "ctrl_ObtenerAntecedentesAlimentacion ==" + ctrl_ObtenerAntecedentesAlimentacion + "\n" +
        "ctrl_ObtenerAntecedentesGestionResidencia_PJUD ==" + ctrl_ObtenerAntecedentesGestionResidencia_PJUD);
    */
    return output;

}
var myCTRL_FichaPJUD;
function AnalizaCargaCompletaDatosFichaPJUD() {
    var output = false;
    if (ctrl_ObtenerAntecedentesGenerales_PJUD == true &&
        ctrl_ObtenerNnaAbandonoDetalleOBS_PJUD == true &&
        ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS_PJUD == true &&
        ctrl_ObtenerAntecedentesPoblacionCapacidad_PJUD == true &&
        ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion_PJUD == true &&
        ctrl_ObtenerAntecedentesInfraestructura_PJUD == true &&
        ctrl_ObtenerAntecedentesSeguridad_PJUD == true &&
        ctrl_ObtenerAntecedentesSalud_PJUD == true &&
        ctrl_ObtenerAntecedentesEducacion_PJUD == true &&
        ctrl_ObtenerAntecedentesAlimentacion_PJUD == true &&
        ctrl_ObtenerAntecedentesGestionResidencia_PJUD_2 == true &&
        ctrl_ObtenerNnaEntrevistadosDetalleOBS_PJUD == true)
        output = true;

    if (output) {
        clearInterval(myCTRL_FichaPJUD);
    }
    return output;
}
var myCTRL_DatosTramitacionOBS;
function AnalizaCargaCompletaDatosTramitacionOBS() {
    var output = false;

    if (
        ctrl_CargaRespuestaOBS_PJUD_TABGenerales == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABPoblacion_y_Capacidad == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABDotacion == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABMateriales_Infraestructura_Equipamiento == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABSeguridad == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABSalud == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABEducacion == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABAlimentacion == true &&
        ctrl_CargaRespuestaOBS_PJUD_TABGestionResidencia == true
    ) {
        output = true;
    }

    if (output) {
        clearInterval(myCTRL_DatosTramitacionOBS);
    }
    return output;
}
function AdminitrarAccesoASeccionesOBS(opc, seccion) {
    switch (seccion) {
        case "FICHA_PADRE":
            if (opc == "bloqueo") {
                document.getElementById("imgSeccionObs001").style.display = "block";
                document.getElementById("A1").disabled = true;
            }
            else {
                if (AnalizaCargaCompletaDatosFichaPadre() == true) {
                    document.getElementById("imgSeccionObs001").style.display = "none";
                    document.getElementById("A1").disabled = false;
                    document.getElementById("lblmsgA1").style.display = "none";
                }
            }
            break;
        case "INFORME_VISITA":
            if (opc == "bloqueo") {
                document.getElementById("imgSeccionObs002").style.display = "block";
                document.getElementById("A2").disabled = true;
            }
            else {
                if (AnalizaCargaCompletaDatosFichaPJUD() == true) {
                    document.getElementById("imgSeccionObs002").style.display = "none";
                    document.getElementById("A2").disabled = false;
                    document.getElementById("lblmsgA2").style.display = "none";
                }
            }
            break;
        case "INFORME_COMPARATIVA":
            if (opc == "bloqueo") {
                document.getElementById("imgSeccionObs003").style.display = "block";
                document.getElementById("A3").disabled = true;
            }
            else {
                if (AnalizaCargaCompletaDatosParaComparativas()) {
                    document.getElementById("imgSeccionObs003").style.display = "none";
                    document.getElementById("A3").disabled = false;
                    document.getElementById("lblmsgA3").style.display = "none";
                }
            }
            break;
        case "TRAMITACION_OBSERVACIONES":
            if (opc == "bloqueo") {
                document.getElementById("imgSeccionObs004").style.display = "block";
                document.getElementById("A5").disabled = true;
            }
            else {
                if (AnalizaCargaCompletaDatosTramitacionOBS()) {
                    document.getElementById("imgSeccionObs004").style.display = "none";
                    document.getElementById("A5").disabled = false;
                    document.getElementById("lblmsgA4").style.display = "none";

                    CargaTramitacionObservacionesAll($("#idcodfichaOBS_pjud ").val());
                }
            }
            break;
    }
}
function AnalizaEstadoHabilitacion(opc) {
    var htmldiag = "";
    switch (opc) {
        case "FICHA_PADRE":
            if (document.getElementById("A1").disabled == true) document.getElementById("lblmsgA1").style.display = "block";
            break;
        case "INFORME_VISITA":
            if (document.getElementById("A2").disabled == true) document.getElementById("lblmsgA2").style.display = "block";
            break;
        case "INFORME_COMPARATIVA":
            if (document.getElementById("A3").disabled == true) document.getElementById("lblmsgA3").style.display = "block";
            break;
        case "TRAMITACION_OBSERVACIONES":
            if (document.getElementById("A5").disabled == true) document.getElementById("lblmsgA4").style.display = "block";
            break;
    }
}
function StopValidaConexion() {
    conect = "";
    clearInterval(myVar);
}
$(document).ready(function () {
    CargaInicial();
    ConfiguraBotonesCheckBox();
    ProbarApiFile();
    opcioncarga = "GESTIONHISTORIAL";

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
$(window).on('beforeunload', function () {
    StopValidaConexion();
});
var keybase = "";
function InicializaKey() { keybase = ""; $("#divconfig").attr({ "style": "display:none;" }); }
function ConfiguraBotonesCheckBox() {
    $(function () {
        $('.button-checkbox').each(function () {

            // Settings
            var $widget = $(this),
                $button = $widget.find('button'),
                $checkbox = $widget.find('input:checkbox'),
                color = $button.data('color'),
                settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
                };

            // Event Handlers
            $button.on('click', function () {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
                $checkbox.triggerHandler('change');
                updateDisplay();
            });
            $checkbox.on('change', function () {
                updateDisplay();
            });

            // Actions
            function updateDisplay() {
                var isChecked = $checkbox.is(':checked');

                // Set the button's state
                $button.data('state', (isChecked) ? "on" : "off");

                // Set the button's icon
                $button.find('.state-icon')
                    .removeClass()
                    .addClass('state-icon ' + settings[$button.data('state')].icon);

                // Update the button's color
                if (isChecked) {
                    $button
                        .removeClass('btn-default')
                        .addClass('btn-' + color + ' active');
                }
                else {
                    $button
                        .removeClass('btn-' + color + ' active')
                        .addClass('btn-default');
                }
            }

            // Initialization
            function init() {

                updateDisplay();

                // Inject the icon if applicable
                if ($button.find('.state-icon').length == 0) {
                    $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
                }
            }
            init();
        });
    });
}
function ProbarApiFile() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // alert('Great success! All the File APIs are supported.');
    }
    else {
        MensajeINFO('<p style="font-size:12px;text-align:justify;">Atención, el navegador que está utilizando no soporta completamente las API de manejo de archivos. Se recomienda actualizar a un navegador más moderno (Mozilla Firefox v.59, Opera v.51 , Google Chrome v.65, versiones superiores de estos).</p>');
    }
}
///////////////////
//FUNCIONES BACKEND
var dialogProgress;
var bar;
var myVar;
var totalRegistrosBSQ = 0;
var totalPaginasBSQ = 1;
var paginaActualBSQ = 1;

function CargaInicial() {

    IdUsuarioActualizacion = $("#idusuario_conect_obs").val();
    bPendientes = true;
    bEnProceso = true;
    bFinalizadas = true;
    bEnviadas = false;

    document.getElementById("chkPendiente").checked = bPendientes;
    document.getElementById("chkEnProceso").checked = bEnProceso;
    document.getElementById("chkFinalizado").checked = bFinalizadas;
    document.getElementById("cmbProyecto").disabled = true;

    CargaDatosInstitucionesUsuario();
    //    myVar = setInterval(CargaDatosProyectosUsuario2, 10000);

}
function CargaDatosInstitucionesUsuario() {
    //alert(IdUsuarioActualizacion);
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerInstitucionesUsuario",
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
        var ncargaDatosUpload = false;
        var Institucion = $("#cmbInstitucion");
        var Institucion2 = $("#cmbInstitucion2");
        var Institucion3 = $("#cmbInstitucionCompare");

        InicializaCombo("#cmbInstitucion");
        InicializaCombo("#cmbInstitucion2");
        InicializaCombo("#cmbInstitucionCompare");

        Institucion.append("<option value='0'>Seleccionar</option>");
        Institucion2.append("<option value='0'>Seleccionar</option>");
        Institucion3.append("<option value='0'>Seleccionar</option>");

        var proyecto = $("#cmbProyecto");
        InicializaCombo("#cmbProyecto");
        proyecto.append("<option value='0'>Seleccionar</option>");

        var proyecto2 = $("#cmbProyecto2");
        InicializaCombo("#cmbProyecto2");
        proyecto2.append("<option value='0'>Seleccionar</option>");

        var proyecto3 = $("#cmbProyectoCompare");
        InicializaCombo("#cmbProyectoCompare");
        proyecto3.append("<option value='0'>Seleccionar</option>");

        var NombreInstitucionAUX = "";

        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (NombreInstitucionAUX == "" || NombreInstitucionAUX != this.NombreInstitucion) {
                        $("#cmbInstitucion").append("<option value='" + this.CodInstitucion + "'>" + this.NombreInstitucion + "</option>");

                        $("#cmbInstitucion2").append("<option value='" + this.CodInstitucion + "'>" + this.NombreInstitucion + "</option>");

                        $("#cmbInstitucionCompare").append("<option value='" + this.CodInstitucion + "'>" + this.NombreInstitucion + "</option>");
                        NombreInstitucionAUX = this.NombreInstitucion;

                        //alert(this.NombreUsuario);
                        $("#nombreusuariogls").val(this.NombreUsuario);

                        if (!ncargaDatosUpload) {
                            $("#tipoArchivoPermitido").val(this.TipoArchivo);
                            $("#maximoTamanoCarpeta").val(this.TamañoMaximo);
                            $("#rutarepositorio").val(this.Ruta);

                            //alert( $("#rutarepositorio").val() );
                            ncargaDatosUpload = true;
                        }
                    }
                }
            );
            //document.getElementById("cmbInstitucion").selectedIndex = 1;
            //alert($("#tipoArchivoPermitido").val() + " >>> " + $("#maximoTamanoCarpeta").val() + " >>> " +  $("#rutarepositorio").val() );
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
function CargaProyectosInstitucion2(codigoInstitucion) {
    //alert(codigoInstitucion + " - " + IdUsuarioActualizacion);
    document.getElementById("cmbProyecto2").disabled = true;
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
        var proyecto2 = $("#cmbProyecto2");
        InicializaCombo("#cmbProyecto2");
        proyecto2.append("<option value='0'>Seleccionar</option>");

        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#cmbProyecto2").append("<option value='" + this.CodProyecto + "'>" + this.NombreProyecto + "</option>");
                }
            );
            document.getElementById("cmbProyecto2").disabled = false;
        }
    });
}
function CargaProyectosInstitucion3(codigoInstitucion) {
    //alert(codigoInstitucion + " - " + IdUsuarioActualizacion);
    LimpiaBusquedaFichas();

    document.getElementById("cmbProyectoCompare").disabled = true;
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
        var proyecto2 = $("#cmbProyectoCompare");
        InicializaCombo("#cmbProyectoCompare");
        proyecto2.append("<option value='0'>Seleccionar</option>");

        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#cmbProyectoCompare").append("<option value='" + this.CodProyecto + "'>" + this.NombreProyecto + "</option>");
                }
            );
            document.getElementById("cmbProyectoCompare").disabled = false;
        }
    });
}
function LimpiaBusquedaFichas() {
    LimpiarSeleccion();
    ReseteaTBLListFichaResCompare();
    arrSeleccionados = [null, null];
    arrDatosSeleccionados = [null, null];
    $("#divlistadoFichasCompareCtrl").css("display", "none");
    $("#divMensajeBusquedaVaciaCompare").css("display", "none");
    $("#divlistCanFichasCompareLbl").css("display", "none");
    $("#divlistadoFichasCompareTBL").css("display", "none");
    $("#paginadorFichaResCompare").css("display", "none");
}
function BuscarFichasResidencialesOBS(numpagina, opcbsq) {

    var CodProyecto = $("#cmbProyecto").val();
    var VPendiente = 0, VProceso = 0, VFinalizada = 0;
    var CantidadPag = 10;
    var totalRegistros = 0;

    if (bPendientes) VPendiente = 1;
    if (bEnProceso) VProceso = 1;
    if (bFinalizadas) VFinalizada = 1;

    var CodFichaFinal = 0;
    var CodFichaHijo = 0;

    document.getElementById("divMensajeBusquedaVacia").style.display = "none";
    if (opcbsq == "BSQGRAL") document.getElementById("paginadorFichaResOBS").style.display = "none";


    if (document.getElementById("divlistadoFichasConObsCtrl").style.display != "none") {
        CantidadPag = $("#cantListaFichaResidencial").val();
    }
    if (document.getElementById("paginadorFichaResOBS").style.display != "none" && opcbsq != "BSQGRAL" && numpagina != 1) {

        var tblDestino = document.getElementById("tbl_listadoFichaResOBS");
        var rowCountList = tblDestino.rows.length;
        var row = tblDestino.rows[rowCountList - 1];
        var IDs = row.dataset.codigos;

        arrIDs = IDs.split("-");
        CodFichaFinal = arrIDs[1];
        CodFichaHijo = arrIDs[2];
    }

    ResetearIndicadoresBusquedaFichasOBS();

    var CodInstitucion = $("#cmbInstitucion").val();

    var parametros1 = "{" +
                        "'CodProyecto':'" + CodProyecto + "'," +
                        "'VPendiente':'" + VPendiente + "'," +
                        "'VProceso':'" + VProceso + "'," +
                        "'VFinalizada':'" + VFinalizada + "'," +
                        "'CantidadPag':'" + CantidadPag + "'," +
                        "'CodFichaFinal':'" + CodFichaFinal + "'," +
                        "'CodFichaHijo':'" + CodFichaHijo + "'," +
                        "'IdUsuarioSenainfo':'" + IdUsuarioActualizacion + "'," +
                        "'CodInstitucion':'" + CodInstitucion + "'," +
                        "'numpagina':'" + numpagina + "'" +
                      "}";


    var parametros2 = "{" +
                        "'CodProyecto':'" + CodProyecto + "'," +
                        "'VPendiente':'" + VPendiente + "'," +
                        "'VProceso':'" + VProceso + "'," +
                        "'VFinalizada':'" + VFinalizada + "'," +
                        "'CantidadPag':'" + CantidadPag + "'," +
                        "'CodFichaFinal':'" + CodFichaFinal + "'," +
                        "'CodFichaHijo':'" + CodFichaHijo + "'," +
                        "'IdUsuarioSenainfo':'" + IdUsuarioActualizacion + "'," +
                        "'CodInstitucion':'" + CodInstitucion + "'" +
                      "}";
    //    alert("CodProyecto=" + CodProyecto + " | VPendiente=" + VPendiente + " | VProceso= " + VProceso + " | VFinalizada=" + VFinalizada + " | CodFichaFinal=" + CodFichaFinal + " | CodFichaHijo=" + CodFichaHijo + " | CantidadPag=" + CantidadPag);

    //Consulto el total de registros que se obtienen de la consulta y
    //rescato los registros por página de acuerdo al filtro indicado por el usuario, 
    //esto se ejecuta desde la función siguiente
    CalculaRegistrosTotalesFichaConObservaciones(parametros1, parametros2, CantidadPag, opcbsq);
}
function CalculaRegistrosTotalesFichaConObservaciones(parametros1, parametros2, CantidadPag, opcbsq) {
    //Consulto el total de registros que se obtienen de la consulta
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/BuscarFichasResidencialesOBSTotal",
        data: parametros2,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        if (r.d != "") {
            $.each(r.d, function () {
                var totalRegistros = this.TotalRegistros;
                RegistrosFichaConObservaciones(parametros1, totalRegistros, CantidadPag, opcbsq);
            });
        }
    });
}
function RegistrosFichaConObservaciones(parametros, totalRegistros, CantidadPag, opcbsq) {
    var NombreInstitucion = "";
    var NombreProyecto = "";
    var CodFichaPadre = "";
    var FechaCeradaResidencia = "";
    var FechaActualizacionPJUD = "";
    var CorteTribunal = "";
    var NombreJuez = "";
    var Estado = "";
    var DiasEnTramite = 0;

    //Rescato los registros por página de acuerdo al filtro indicado por el usuario.
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/BuscarFichasResidencialesOBS",
        data: parametros,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        document.getElementById("divlistadoFichasConObsTBL").style.display = "";
        var tblDestino = document.getElementById("tbl_listadoFichaResOBS");
        var agregados = 1;
        ReseteaTBLListFichaResOBS();

        if (r.d != "") {
            document.getElementById("tbl_listadoFichaResOBS").style.display = "";

            //alert(r.d.length);
            $.each(r.d, function () {

                NombreInstitucion = this.NombreInstitucion;
                NombreProyecto = this.NombreProyecto;
                CodFichaPadre = this.CodFichaPadre;
                FechaCeradaResidencia = this.FechaCeradaResidencia;
                FechaActualizacionPJUD = this.FechaActualizacionPJUD;
                CorteTribunal = this.CorteTribunal;
                NombreJuez = this.NombreJuez;
                Estado = this.Estado;
                DiasEnTramite = this.DiasEnTramite;

                var rowCount2 = tblDestino.rows.length;
                var row = tblDestino.insertRow(rowCount2);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                var cell8 = row.insertCell(7);
                var cell9 = row.insertCell(8);
                var cell10 = row.insertCell(9);

                row.className = "text-center odd";
                row.dataset.codigos = this.CodProyecto + "-" + CodFichaPadre + "-" + this.CodFicha;
                row.role = "row";

                cell1.innerHTML = NombreInstitucion;

                cell2.innerHTML = NombreProyecto;

                cell3.innerHTML = CodFichaPadre;

                cell4.innerHTML = FechaCeradaResidencia;

                cell5.innerHTML = FechaActualizacionPJUD;

                cell6.innerHTML = CorteTribunal;

                cell7.innerHTML = NombreJuez;

                cell8.innerHTML = Estado;

                cell9.innerHTML = DiasEnTramite;

                cell10.innerHTML = "<a id='linkgGOFR_" + agregados + "' href='#' class='linkgGOFR' data-institucionproyecto='" + NombreInstitucion + "|" + NombreProyecto + "'  onclick='VerDetalle(" + this.CodProyecto + "," + CodFichaPadre + "," + this.CodFicha + ", this);'>Gestionar</a>";
                agregados++;
            });

            document.getElementById("divlistCanFichasConObsLbl").style.display = "";
            document.getElementById("lbl_cantidadFichaResOBS").innerHTML = "Fichas Residenciales con Observaciones :" + totalRegistros;
            totalRegistrosBSQ = totalRegistros;

            document.getElementById("divlistadoFichasConObsCtrl").style.display = "";

            if (parseInt(totalRegistros, 10) > parseInt(CantidadPag, 10)) {

                if (opcbsq == "BSQGRAL") {
                    var paginas = ~~(parseInt(totalRegistros, 10) / parseInt(CantidadPag, 10)) + 1;
                    var paginasLink = "";
                    //alert("paginas:" + paginas);

                    for (var k = 1; k <= paginas; k++) {
                        if (k == 1)
                            valActive = "active";
                        else
                            valActive = "";
                        paginasLink = paginasLink + '<li class="paginate_button ' + valActive + '"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="1" tabindex="0" onclick="SeleccionaPagina(' + k + ')">' + k + '</a></li>';
                    }
                    paginasLink = '<ul class="pagination">' +
                                  '<li class="paginate_button previous disabled" id="prev_listadoFichaResOBS"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + k + '" tabindex="0" onclick="SeleccionaPrevNext(0);">Anterior</a></li>' +
                                    paginasLink +
                                  '<li class="paginate_button next" style="cursor:pointer;" id="next_listadoFichaResOBS"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + (k + 1) + '" tabindex="0" onclick="SeleccionaPrevNext(1);">Siguiente</a></li>' +
                                  '</ul>';
                    document.getElementById("paginadorFichaResOBS").style.display = "";
                    document.getElementById("paginadorFichaResOBS").innerHTML = paginasLink;

                    totalPaginasBSQ = paginas;
                    paginaActualBSQ = 1;
                }
            }
            else {
                document.getElementById("paginadorFichaResOBS").style.display = "none";
                document.getElementById("paginadorFichaResOBS").innerHTML = "";
                totalPaginasBSQ = 1;
            }
        }
        else {
            document.getElementById("tbl_listadoFichaResOBS").style.display = "none";
            document.getElementById("divMensajeBusquedaVacia").style.display = "";
        }
    });
}

function CargaDatosGeneralesDDL3(CodProyecto, glsinstitucion, glsproyecto, codFichaPadre) {
    ResetearFormulario();
    var CodFichaAUX;
    var CodFicha2;
    var tokensUsr = document.getElementById("tokensUsr_obs").value;

    if (CodProyecto != "0") {
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

            var proyecto = $("#general_001_sel_proyecto");

            //alert(tokensUsr);

            $.each(r.d,
                function () {
                    $("#general_000_sel_Institucion").val(glsinstitucion);
                    $("#general_001_sel_proyecto").val(glsproyecto);
                    $("#general_002_tipoOrganismo").val(this.TipoProyecto);
                    $("#general_003_modeloIntervencion").val(this.NombreModeloIntervencion);
                    $("#general_004_direccion").val(this.Direccion);
                    $("#general_005_telefonos").val(this.Telefono);
                    $("#general_006_region").val(this.Region);
                    $("#general_007_comuna").val(this.Comuna);
                    $("#general_008_email").val(this.Mail);
                    $("#general_009_directorProyecto").val(this.NombreDirector);
                    $("#general_010_rut_director_proyecto").val(this.RutDirector);

                    //alert(this.Periodo);
                    var periodo = this.Periodo.toString();
                    var year = periodo.substring(0, 4);
                    var mes = replaceAll(periodo, year, "");
                    //alert(year + " >>> " + mes);
                    switch (mes) {
                        case "01":
                            periodoGlobal = "ENERO " + year;
                            break;
                        case "02":
                            periodoGlobal = "FEBRERO " + year;
                            break;
                        case "03":
                            periodoGlobal = "MARZO " + year;
                            break;
                        case "04":
                            periodoGlobal = "ABRIL " + year;
                            break;
                        case "05":
                            periodoGlobal = "MAYO " + year;
                            break;
                        case "06":
                            periodoGlobal = "JUNIO " + year;
                            break;
                        case "07":
                            periodoGlobal = "JULIO " + year;
                            break;
                        case "08":
                            periodoGlobal = "AGOSTO " + year;
                            break;
                        case "09":
                            periodoGlobal = "SEPTIEMBRE " + year;
                            break;
                        case "10":
                            periodoGlobal = "OCTUBRE " + year;
                            break;
                        case "11":
                            periodoGlobal = "NOVIEMBRE " + year;
                            break;
                        case "12":
                            periodoGlobal = "DICIEMBRE " + year;
                            break;
                    }
                    $("#spanPeriodoGBL").html(periodoGlobal);
                    $("#spanProyectoGBL").html(glsproyecto);
                    $("#spanInstitucionGBL").html(glsinstitucion);

                    $("#tblDatosGBL").attr({ "style": "display:block" });

                    CodFicha = codFichaPadre;

                    if (CodFicha != "0" || CodFicha2 != "0") {

                        document.getElementById("folio_pendiente").innerHTML = "&nbsp;";
                        document.getElementById("periodo_ficha").innerHTML = "&nbsp;";


                        $("#idcodfichaOBS ").val(codFichaPadre);
                        $("#idcodfichaOBS ").attr({ 'style': 'color:blue;font-weight:bold;font-size:20px;' });

                        if (CodFicha != "0")
                            CodFichaAUX = CodFicha;
                        else
                            if (CodFicha2 != "0")
                                CodFichaAUX = CodFicha2;

                        //alert("- CodFichaAUX=" + CodFichaAUX + " =>> " + "\n- CodFicha=" + CodFicha + "\n- CodFicha2=" + CodFicha2);

                        ObtenerAntecedentesGenerales(CodFichaAUX);
                        ObtenerNnaAbandonoDetalleOBS(CodFichaAUX);
                        ObtenerNnaAdolescenteConHijosDetalleOBS(CodFichaAUX);

                        ObtenerAntecedentesPoblacionCapacidad(CodFichaAUX);
                        ObtenerAntecedentesDotacionPersonal_Visualizacion(CodFichaAUX);
                        ObtenerAntecedentesInfraestructura(CodFichaAUX);

                        ObtenerAntecedentesSeguridad(CodFichaAUX);
                        ObtenerAntecedentesSalud(CodFichaAUX);
                        ObtenerAntecedentesEducacion(CodFichaAUX);
                        ObtenerAntecedentesAlimentacion(CodFichaAUX);
                        ObtenerAntecedentesGestionResidencia_PJUD(CodFichaAUX);
                        //alert(tokensUsr);                  
                    }
                    else {
                        document.getElementById("folio_pendiente").innerHTML = "&nbsp;";
                        document.getElementById("periodo_ficha").innerHTML = "&nbsp;";
                    }
                }
            );
        });
    }
}
function CargaDatosGeneralesDDL4(CodProyecto, glsinstitucion, glsproyecto, CodFichaHija, codFichaPadre) {

    ResetearFormularioPJUD();
    var CodFichaAUX;
    var CodFicha2;
    var tokensUsr = document.getElementById("tokensUsr_obs").value;

    if (CodProyecto != "0") {
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
            //alert(tokensUsr);

            $.each(r.d,
                function () {
                    $("#general_000_sel_Institucion_pjud").val(glsinstitucion);
                    $("#general_001_sel_proyecto_pjud").val(glsproyecto);
                    $("#general_002_tipoOrganismo_pjud").val(this.TipoProyecto);
                    $("#general_003_modeloIntervencion_pjud").val(this.NombreModeloIntervencion);
                    $("#general_004_direccion_pjud").val(this.Direccion);
                    $("#general_005_telefonos_pjud").val(this.Telefono);
                    $("#general_006_region_pjud").val(this.Region);
                    $("#general_007_comuna_pjud").val(this.Comuna);
                    $("#general_008_email_pjud").val(this.Mail);
                    $("#general_009_directorProyecto_pjud").val(this.NombreDirector);
                    $("#general_010_rut_director_proyecto_pjud").val(this.RutDirector);


                    if (CodFichaHija != "0") {

                        $("#idcodfichaOBS_pjud ").val(CodFichaHija);
                        $("#idcodfichaOBS_pjud ").attr({ 'style': 'color:blue;font-weight:bold;font-size:20px;' });


                        //alert("- CodFichaAUX=" + CodFichaAUX + " =>> " + "\n- CodFicha=" + CodFicha + "\n- CodFicha2=" + CodFicha2);


                        ObtenerAntecedentesGenerales_PJUD(CodFichaHija);
                        ObtenerNnaAbandonoDetalleOBS_PJUD(CodFichaHija);
                        ObtenerNnaAdolescenteConHijosDetalleOBS_PJUD(CodFichaHija);

                        ObtenerAntecedentesPoblacionCapacidad_PJUD(CodFichaHija);
                        ObtenerAntecedentesDotacionPersonal_Visualizacion_PJUD(CodFichaHija);
                        ObtenerAntecedentesInfraestructura_PJUD(CodFichaHija);
                        ObtenerAntecedentesSeguridad_PJUD(CodFichaHija);
                        ObtenerAntecedentesSalud_PJUD(CodFichaHija);
                        ObtenerAntecedentesEducacion_PJUD(CodFichaHija);
                        ObtenerAntecedentesAlimentacion_PJUD(CodFichaHija);
                        ObtenerAntecedentesGestionResidencia_PJUD2(CodFichaHija);
                        ObtenerAntecedentesGestionResidenciaEntrevistados_PJUD(CodFichaHija);

                        CargaObservacionesPJUD_TABGenerales(CodFichaHija);
                        CargaObservacionesPJUD_TABPoblacion_y_Capacidad(CodFichaHija);
                        CargaObservacionesPJUD_TABDotacion(CodFichaHija);
                        CargaObservacionesPJUD_TABMateriales_Infraestructura_Equipamiento(CodFichaHija);
                        CargaObservacionesPJUD_TABSeguridad(CodFichaHija);
                        CargaObservacionesPJUD_TABSalud(CodFichaHija);
                        CargaObservacionesPJUD_TABEducacion(CodFichaHija);
                        CargaObservacionesPJUD_TABAlimentacion(CodFichaHija);
                        CargaObservacionesPJUD_TABGestionResidencia(CodFichaHija);

                        CargaObservacionesSugerenciasPJUD_GeneralFicha(CodFichaHija);
                        //alert(tokensUsr);                  


                    }
                }
            );
        });
    }
}

function ObtenerNnaAbandonoDetalleOBS(CodFicha) {

    var femenino = 0, masculino = 0;
    var agregados = 1;

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerNnaAbandono",
        data: "{'CodFicha': '" + CodFicha + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
            //alert(r);
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        var tblDestino = document.getElementById("tbl_NNA_abandonados");

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

            nombres_NNA_abandono = apellidoMaterno + "|" + apellidoPaterno + "|," + nombres + "~" + nombres_NNA_abandono;

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
        //CalcularNNA_EnAbandonoDesdeTBL();
        //alert("nombres_NNA_abandono" + "\n\n" + nombres_NNA_abandono);

        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerNnaAbandonoDetalleOBS = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        generalresidenciaNNAAbandono = true;
        CargaCamposComparativa();
    });

}
function ObtenerNnaAdolescenteConHijosDetalleOBS(CodFicha) {

    var femenino = 0, masculino = 0;
    var agregados = 1;

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAdolecentesConHijos",
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
        var tblDestino = document.getElementById("tbl_adolescente_con_hijos");

        tblDestino.style.width = "100%";

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

            nombres_NNA_adolescHijo = apellidoPaterno + "|" + apellidoMaterno + "|," + nombres + "~" + nombres_NNA_adolescHijo;

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
        ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        generalresidenciaNNAadolescHijo = true;
        CargaCamposComparativa();
    });
}
function ObtenerDatosGeneralesInformeVisita(CodProyecto, codFichaPadre, codFichaHijo) {
    var parametros = "{" +
                        "'CodProyecto':'" + CodProyecto + "'," +
                        "'VPendiente':'0'," +
                        "'VProceso':'0'," +
                        "'VFinalizada':'0'," +
                        "'CantidadPag':'10'," +
                        "'CodFichaFinal':'" + codFichaPadre + "'," +
                        "'CodFichaHijo':'" + codFichaHijo + "'," +
                        "'IdUsuarioSenainfo':'" + IdUsuarioActualizacion + "'," +
                        "'CodInstitucion':'0'," +
                        "'numpagina':'1'" +
                      "}";

    var NombreInstitucion = "";
    var NombreProyecto = "";
    var CodFichaPadre = "";
    var FechaCeradaResidencia = "";
    var FechaActualizacionPJUD = "";
    var CorteTribunal = "";
    var NombreJuez = "";
    var Estado = "";
    var DiasEnTramite = 0;

    $("#general_001_juez_visita_pjud").val("");
    $("#general_002_consejero_visita_pjud").val("");
    $("#general_003_corte_apelaciones_pjud").val("");
    $("#general_004_tribunal_familia_pjud").val("");
    $("#general_005_persona1_residencia_pjud").val("");
    $("#general_006_persona2_residencia_pjud").val("");
    $("#general_007_fecha_visita_anterior_pjud").val("");
    $("#general_008_fecha_visita_actual_pjud").val("");
    $("#general_009_hora_inicio_visita_pjud").val("");
    $("#general_010_hora_termino_visita_pjud").val("");

    //Rescato los registros por página de acuerdo al filtro indicado por el usuario.
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/BuscarFichasResidencialesOBS",
        data: parametros,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        if (r.d != "") {

            //alert(r.d.length);
            $.each(r.d, function () {
                var CorteTribunal = this.CorteTribunal;
                var arrCorteTribunal = CorteTribunal.split('/');

                $("#general_001_juez_visita_pjud").val(this.NombreJuez);
                $("#general_002_consejero_visita_pjud").val(this.NombreConsejero);
                $("#general_003_corte_apelaciones_pjud").val(EliminaEspacios(arrCorteTribunal[0]));
                $("#general_004_tribunal_familia_pjud").val(EliminaEspacios(arrCorteTribunal[1]));
                $("#general_005_persona1_residencia_pjud").val(this.PersonaResidencia1);
                $("#general_006_persona2_residencia_pjud").val(this.PersonaResidencia2);
                $("#general_007_fecha_visita_anterior_pjud").val(this.FechaVisitaAnterior);
                $("#general_008_fecha_visita_actual_pjud").val(this.FechaVisitaActual);
                $("#general_009_hora_inicio_visita_pjud").val(this.HoraInicioVisita);
                $("#general_010_hora_termino_visita_pjud").val(this.HoraFinVisita);

            });
        }
    });

}
function CargaObservacionesSugerenciasPJUD_GeneralFicha(CodFicha) {
    try {
        $.ajax({
            type: "POST",
            url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesFicha",
            data: "{'CodFicha': '" + CodFicha + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                // Ajax OK !              
            },
            error: function (r) {
                DesplegarExcepcionCriticaApp(r.responseText);
            }
        }).then(function (r) {


            if (r.d != "") {
                $.each(r.d,
                    function () {
                        $("#gestionResid_021_observacion_gral_pjud").val(this.ObservacionesGeneralesJuez);
                        $("#gestionResid_022_sugerencias_a_SENAME").val(this.SugerenciasSenameJuez);
                        $("#gestionResid_023_sugerencias_a_residencia").val(this.SugerenciasResidenciaJuez);
                        $("#gestionResid_024_respuesta_SENAME").val(this.RespuestaSename);

                        $("#div001_ObsGral_Sugerencia").html(this.ObservacionesGeneralesJuez);
                        $("#div002_ObsGral_Sugerencia").html(this.SugerenciasSenameJuez);
                        $("#div003_ObsGral_Sugerencia").html(this.SugerenciasResidenciaJuez);

                        //CARGO RESPUESTA GENERAL SENAME En sección tramitaciones
                        $("#text_respuesta_ObsGral_Sugerencia").val(this.RespuestaSename);


                        if (this.EstadoRespuesta == "Finalizada") {
                            BloqueaIngresoRespuestaGlobal(true);
                            $("#check000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
                            $("#ontx000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
                            $("#text_respuesta_ObsGral_Sugerencia").attr({ "readOnly": true });
                            EstadoRespuestaGlobal = true;
                        }
                        else {
                            BloqueaIngresoRespuestaGlobal(false);
                            $("#check000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
                            $("#ontx000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
                            $("#text_respuesta_ObsGral_Sugerencia").attr({ "readOnly": false });
                            EstadoRespuestaGlobal = false;
                        }
                    }
                );
            }
            //CONTROL DESBLOQUEO ZONA CARGA
            ctrl_CargaObservacionesSugerenciasPJUD_GeneralFicha = true;
            AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");
        });

    }
    catch (e) {
        MensajeERROR("Ha sucedido una excepción mientras se cargaba las observacione y las sugerencias globales de la ficha residencial: " + e.message + "<br/>Por favor, reintentar. Si el error persiste contactar al administrador.");
    }
}
var EstadoRespuestaGlobal = false;

function CargaObservacionesPJUD_TABGenerales(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesGenerales",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {


        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#general_040_observaciones_pjud").val(this.ObservacionJuez);
                    $("#general_041_respuesta_SENAME_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[0] = this.ObservacionJuez;
                }
            );
        }
        else {
            $("#general_040_observaciones_pjud").val("");
            $("#general_041_respuesta_SENAME_pjud").val("");
            arrObsPorSeccion[0] = "";
        }

        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABGenerales = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABGenerales = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABPoblacion_y_Capacidad(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesPoblacion",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {


        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#poblacion_007_observaciones_pjud").val(this.ObservacionJuez);
                    $("#poblacion_008_respuesta_SENAME_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[1] = this.ObservacionJuez;
                }
            );
        }
        else {
            $("#poblacion_007_observaciones_pjud").val("");
            $("#poblacion_008_respuesta_SENAME_pjud").val("");
            arrObsPorSeccion[1] = "";
        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABPoblacion_y_Capacidad = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABPoblacion_y_Capacidad = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABDotacion(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesPersonal",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#dotacion_101_Observaciones_pjud").val(this.ObservacionJuez);
                    $("#dotacion_102_respuesta_SENAME_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[2] = this.ObservacionJuez;
                }
            );
        }
        else {
            $("#dotacion_101_Observaciones_pjud").val("");
            $("#dotacion_102_respuesta_SENAME_pjud").val("");
            arrObsPorSeccion[2] = "";
        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABDotacion = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABDotacion = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABMateriales_Infraestructura_Equipamiento(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesMateriales",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {


        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#Infraest_049_observaciones_pjud").val(this.ObservacionJuez);
                    $("#Infraest_050_respuesta_SENAME_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[3] = this.ObservacionJuez;

                    if (this.EvaluacionOficAdm == "-1") { $("#Infraest_001_ofi_admin_existe_pjud_eval").val(0) } else { $("#Infraest_001_ofi_admin_existe_pjud_eval").val(this.EvaluacionOficAdm) };
                    if (this.EvaluacionSalaReunion == "-1") { $("#Infraest_003_salaReuniones_existe_pjud_eval").val(0) } else { $("#Infraest_003_salaReuniones_existe_pjud_eval").val(this.EvaluacionSalaReunion) };
                    if (this.EvaluacionSalaRecepcion == "-1") { $("#Infraest_005_salaRecepcion_existe_pjud_eval").val(0) } else { $("#Infraest_005_salaRecepcion_existe_pjud_eval").val(this.EvaluacionSalaRecepcion) };
                    if (this.EvaluacionEspaciosVisitas == "-1") { $("#Infraest_007_espacioVisitas_existe_pjud_eval").val(0) } else { $("#Infraest_007_espacioVisitas_existe_pjud_eval").val(this.EvaluacionEspaciosVisitas) };
                    if (this.EvaluacionSalaTalleres == "-1") { $("#Infraest_009_salaMultiuso_existe_pjud_eval").val(0) } else { $("#Infraest_009_salaMultiuso_existe_pjud_eval").val(this.EvaluacionSalaTalleres) };
                    if (this.EvaluacionSalaLiving == "-1") { $("#Infraest_011_salaEstar_existe_pjud_eval").val(0) } else { $("#Infraest_011_salaEstar_existe_pjud_eval").val(this.EvaluacionSalaLiving) };
                    if (this.EvaluacionEnfermeria == "-1") { $("#Infraest_013_enfermeria_existe_pjud_eval").val(0) } else { $("#Infraest_013_enfermeria_existe_pjud_eval").val(this.EvaluacionEnfermeria) };
                    if (this.EvaluacionRecreacion == "-1") { $("#Infraest_015_espacioRecreacional_existe_pjud_eval").val(0) } else { $("#Infraest_015_espacioRecreacional_existe_pjud_eval").val(this.EvaluacionRecreacion) };
                    if (this.EvaluacionAreasVerdes == "-1") { $("#Infraest_019_areasVerdes_existe_pjud_eval").val(0) } else { $("#Infraest_019_areasVerdes_existe_pjud_eval").val(this.EvaluacionAreasVerdes) };
                    if (this.EvaluacionCocina == "-1") { $("#Infraest_021_cocina_existe_pjud_eval").val(0) } else { $("#Infraest_021_cocina_existe_pjud_eval").val(this.EvaluacionCocina) };
                    if (this.EvaluacionComedor == "-1") { $("#Infraest_023_comedor_existe_pjud_eval").val(0) } else { $("#Infraest_023_comedor_existe_pjud_eval").val(this.EvaluacionComedor) };
                    if (this.EvaluacionLavanderia == "-1") { $("#Infraest_025_Lavanderia_existe_pjud_eval").val(0) } else { $("#Infraest_025_Lavanderia_existe_pjud_eval").val(this.EvaluacionLavanderia) };
                    if (this.EvaluacionDormitorios == "-1") { $("#Infraest_027_Dormitorio_existe_pjud_eval").val(0) } else { $("#Infraest_027_Dormitorio_existe_pjud_eval").val(this.EvaluacionDormitorios) };
                    if (this.EvaluacionCamasNNA == "-1") { $("#Infraest_029_CamasNNA_existe_pjud_eval").val(0) } else { $("#Infraest_029_CamasNNA_existe_pjud_eval").val(this.EvaluacionCamasNNA) };
                    if (this.EvaluacionClosetLockers == "-1") { $("#Infraest_031_closetLocker_existe_pjud_eval").val(0) } else { $("#Infraest_031_closetLocker_existe_pjud_eval").val(this.EvaluacionClosetLockers) };
                    if (this.EvaluacionBañosPublicos == "-1") { $("#Infraest_033_banosPublico_existe_pjud_eval").val(0) } else { $("#Infraest_033_banosPublico_existe_pjud_eval").val(this.EvaluacionBañosPublicos) };
                    if (this.EvaluacionBañosNNA == "-1") { $("#Infraest_035_banosNNAadecuados_existe_pjud_eval").val(0) } else { $("#Infraest_035_banosNNAadecuados_existe_pjud_eval").val(this.EvaluacionBañosNNA) };
                    if (this.EvaluacionDuchasNNA == "-1") { $("#Infraest_037_duchasNNA_existe_pjud_eval").val(0) } else { $("#Infraest_037_duchasNNA_existe_pjud_eval").val(this.EvaluacionDuchasNNA) };
                    if (this.EvaluacionAmbienteAcorde == "-1") { $("#Infraest_039_ambientacionAcorde_existe_pjud_eval").val(0) } else { $("#Infraest_039_ambientacionAcorde_existe_pjud_eval").val(this.EvaluacionAmbienteAcorde) };
                    if (this.EvaluacionVestuarioAdecuado == "-1") { $("#Infraest_040_vestuarioAdecuado_existe_pjud_eval").val(0) } else { $("#Infraest_040_vestuarioAdecuado_existe_pjud_eval").val(this.EvaluacionVestuarioAdecuado) };
                    if (this.EvaluacionUtilesAseo == "-1") { $("#Infraest_041_utilesAseoPersonalNNA_existe_pjud_eval").val(0) } else { $("#Infraest_041_utilesAseoPersonalNNA_existe_pjud_eval").val(this.EvaluacionUtilesAseo) };
                    if (this.EvaluacionAguaCaliente == "-1") { $("#Infraest_042_aguaCaliente_existe_pjud_eval").val(0) } else { $("#Infraest_042_aguaCaliente_existe_pjud_eval").val(this.EvaluacionAguaCaliente) };
                    if (this.EvaluacionCalefonGas == "-1") { $("#Infraest_043_estadoCalefonLlavesGas_existe_eval").val(0) } else { $("#Infraest_043_estadoCalefonLlavesGas_existe_eval").val(this.EvaluacionCalefonGas) };
                    if (this.EvaluacionSistemaCalefacion == "-1") { $("#Infraest_044_sistemaCalefaccion_existe_pjud_eval").val(0) } else { $("#Infraest_044_sistemaCalefaccion_existe_pjud_eval").val(this.EvaluacionSistemaCalefacion) };
                    if (this.EvaluacionVentilacion == "-1") { $("#Infraest_045_ventilacionAdecuada_existe_pjud_eval").val(0) } else { $("#Infraest_045_ventilacionAdecuada_existe_pjud_eval").val(this.EvaluacionVentilacion) };
                    if (this.EvaluacionAccesoDiscapacitados == "-1") { $("#Infraest_046_AccesoDiscapacitados_existe_pjud_eval").val(0) } else { $("#Infraest_046_AccesoDiscapacitados_existe_pjud_eval").val(this.EvaluacionAccesoDiscapacitados) };
                    if (this.EvaluacionHabilitaDiscapacitados == "-1") { $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud_eval").val(0) } else { $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud_eval").val(this.EvaluacionHabilitaDiscapacitados) };
                }
            );
        }
        else {
            $("#Infraest_049_observaciones_pjud").val("");
            $("#Infraest_050_respuesta_SENAME_pjud").val("");
            arrObsPorSeccion[3] = "";

            $("#Infraest_001_ofi_admin_existe_pjud_eval").val(0);
            $("#Infraest_003_salaReuniones_existe_pjud_eval").val(0);
            $("#Infraest_005_salaRecepcion_existe_pjud_eval").val(0);
            $("#Infraest_007_espacioVisitas_existe_pjud_eval").val(0);
            $("#Infraest_009_salaMultiuso_existe_pjud_eval").val(0);
            $("#Infraest_011_salaEstar_existe_pjud_eval").val(0);
            $("#Infraest_013_enfermeria_existe_pjud_eval").val(0);
            $("#Infraest_015_espacioRecreacional_existe_pjud_eval").val(0);
            $("#Infraest_019_areasVerdes_existe_pjud_eval").val(0);
            $("#Infraest_021_cocina_existe_pjud_eval").val(0);
            $("#Infraest_023_comedor_existe_pjud_eval").val(0);
            $("#Infraest_025_Lavanderia_existe_pjud_eval").val(0);
            $("#Infraest_027_Dormitorio_existe_pjud_eval").val(0);
            $("#Infraest_029_CamasNNA_existe_pjud_eval").val(0);
            $("#Infraest_031_closetLocker_existe_pjud_eval").val(0);
            $("#Infraest_033_banosPublico_existe_pjud_eval").val(0);
            $("#Infraest_035_banosNNAadecuados_existe_pjud_eval").val(0);
            $("#Infraest_037_duchasNNA_existe_pjud_eval").val(0);
            $("#Infraest_039_ambientacionAcorde_existe_pjud_eval").val(0);
            $("#Infraest_040_vestuarioAdecuado_existe_pjud_eval").val(0);
            $("#Infraest_041_utilesAseoPersonalNNA_existe_pjud_eval").val(0);
            $("#Infraest_042_aguaCaliente_existe_pjud_eval").val(0);
            $("#Infraest_043_estadoCalefonLlavesGas_existe_eval").val(0);
            $("#Infraest_044_sistemaCalefaccion_existe_pjud_eval").val(0);
            $("#Infraest_045_ventilacionAdecuada_existe_pjud_eval").val(0);
            $("#Infraest_046_AccesoDiscapacitados_existe_pjud_eval").val(0);
            $("#Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud_eval").val(0);
        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABMateriales_Infraestructura_Equipamiento = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABMateriales_Infraestructura_Equipamiento = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABSeguridad(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesSeguridad",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {


        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#seguridad_011_observaciones_pjud").val(this.ObservacionJuez);
                    $("#seguridad_012_respuesta_sename_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[4] = this.ObservacionJuez;
                }
            );
        }
        else {
            $("#seguridad_011_observaciones_pjud").val("");
            $("#seguridad_012_respuesta_sename_pjud").val("");
            arrObsPorSeccion[4] = "";
        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABSeguridad = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABSeguridad = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABSalud(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesSalud",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {


        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#salud_016_observaciones_pjud").val(this.ObservacionJuez);
                    $("#salud_017_respuesta_sename_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[5] = this.ObservacionJuez;
                }
            );
        }
        else {
            $("#salud_016_observaciones_pjud").val("");
            $("#salud_017_respuesta_sename_pjud").val("");
            arrObsPorSeccion[5] = "";
        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABSalud = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABSalud = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABEducacion(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesEducacion",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {


        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#educacion_011_observaciones_pjud").val(this.ObservacionJuez);
                    $("#educacion_012_respuesta_sename_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[6] = this.ObservacionJuez;

                    if (this.EvaluacionEspaciosEstudios == "-1") $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe_eval_pjud").val(0); else $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe_eval_pjud").val(this.EvaluacionEspaciosEstudios);
                    if (this.EvaluacionMaterialBibliografico == "-1") $("#educacion_008_sel_materialBibliiografico_existe_eval_pjud").val(0); else $("#educacion_008_sel_materialBibliiografico_existe_eval_pjud").val(this.EvaluacionMaterialBibliografico);
                    if (this.EvaluacionComputadores == "-1") $("#educacion_009_sel_computadores_existe_eval_pjud").val(0); else $("#educacion_009_sel_computadores_existe_eval_pjud").val(this.EvaluacionComputadores);
                    if (this.EvaluacionAccesoInternet == "-1") $("#educacion_010_sel_AccesoControladoInternet_existe_eval_pjud").val(0); else $("#educacion_010_sel_AccesoControladoInternet_existe_eval_pjud").val(this.EvaluacionAccesoInternet);
                }
            );
        }
        else {
            $("#educacion_011_observaciones_pjud").val("");
            $("#educacion_012_respuesta_sename_pjud").val("");
            arrObsPorSeccion[6] = "";

            $("#educacion_007_sel_EspacioEstudio_y_Tareas_existe_eval_pjud").val(-1);
            $("#educacion_008_sel_materialBibliiografico_existe_eval_pjud").val(-1);
            $("#educacion_009_sel_computadores_existe_eval_pjud").val(-1);
            $("#educacion_010_sel_AccesoControladoInternet_existe_eval_pjud").val(-1);

        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABEducacion = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABEducacion = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABAlimentacion(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesAlimentacion",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#alimentacion_009_observacion_pjud").val(this.ObservacionJuez);
                    $("#alimentacion_010_respuesta_sename_pjud").val(this.RespuestaSename);
                    arrObsPorSeccion[7] = this.ObservacionJuez;
                }
            );
        }
        else {
            $("#alimentacion_009_observacion_pjud").val("");
            $("#alimentacion_010_respuesta_sename_pjud").val("");
            arrObsPorSeccion[7] = "";
        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABAlimentacion = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABAlimentacion = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}
function CargaObservacionesPJUD_TABGestionResidencia(CodFicha) {

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerObservacionesGestionResidencia",
        data: "{'CodFicha': '" + CodFicha + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        if (r.d != "") {
            $.each(r.d,
                function () {
                    $("#gestionResid_017_observaciones_pjud").val(this.ObservacionGestion);
                    $("#gestionResid_018_observaciones_pobla_NNA_visita_pjud").val(this.ObservacionJuez);
                    arrObsPorSeccion[8] = this.ObservacionJuez;

                    if (this.JuezEntrevistaNNA == "-1") $("#gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe_pjud").val(-1); else $("#gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe_pjud").val(this.JuezEntrevistaNNA);
                    if (this.EntrevistaReservadaNNA == "-1") $("#gestionResid_020_sel_entrevisto_NNA_reservada_existe_pjud").val(-1); else $("#gestionResid_020_sel_entrevisto_NNA_reservada_existe_pjud").val(this.EntrevistaReservadaNNA);
                    $("#gestionResid_021_sel_respuesta_sename_pjud").val(this.RespuestaSename);
                }
            );
        }
        else {
            $("#gestionResid_017_observaciones_pjud").val("");
            $("#gestionResid_018_observaciones_pobla_NNA_visita_pjud").val("");
            arrObsPorSeccion[8] = "";

            $("#gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe_pjud").val(-1);
            $("#gestionResid_020_sel_entrevisto_NNA_reservada_existe_pjud").val(-1);
            $("#gestionResid_021_sel_respuesta_sename_pjud").val("");
        }
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_CargaObservacionesPJUD_TABGestionResidencia = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        ctrl_CargaRespuestaOBS_PJUD_TABGestionResidencia = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "TRAMITACION_OBSERVACIONES");
    });
}

var strtramitacion_1_General = "";
var strtramitacion_2_Personal = "";
var strtramitacion_3_Materiale = "";
var strtramitacion_4_Seguridad = "";
var strtramitacion_5_Salud = "";
var strtramitacion_6_Educacion = "";
var strtramitacion_7_Alimentacion = "";
var strtramitacion_8_GestionResidencia = "";
var strtramitacion_9_PoblaciónCapacidad = "";
var arrObsPorSeccion = ["", "", "", "", "", "", "", "", ""];
var arrUltimosIdDetalle = [0, 0, null, null, null, null, null, null, null] ;
var arrUltimosIdDetalleGls = ["", "", "", "", "", "", "", "", ""];

function CargaTramitacionObservacionesAll(codFichaHijo) {

    strtramitacion_1_General = "";
    strtramitacion_2_Personal = "";
    strtramitacion_3_Materiale = "";
    strtramitacion_4_Seguridad = "";
    strtramitacion_5_Salud = "";
    strtramitacion_6_Educacion = "";
    strtramitacion_7_Alimentacion = "";
    strtramitacion_8_GestionResidencia = "";
    strtramitacion_9_PoblaciónCapacidad = "";

    var fin_tx001_general = false;
    var fin_tx002_dotacion = false;
    var fin_tx003_infraestr = false;
    var fin_tx004_seguridad = false;
    var fin_tx005_salud = false;
    var fin_tx006_educacion = false;
    var fin_tx007_alimentacion = false;
    var fin_tx008_gestionResid = false;
    var fin_tx009_poblacion = false;
    var idDetalleUltimo1 = 0;
    var idDetalleUltimo2 = 0;
    var idDetalleUltimo3 = 0;
    var idDetalleUltimo4 = 0;
    var idDetalleUltimo5 = 0;
    var idDetalleUltimo6 = 0;
    var idDetalleUltimo7 = 0;
    var idDetalleUltimo8 = 0;
    var idDetalleUltimo9 = 0;
    var idDetalleUltimo1Gls = "";
    var idDetalleUltimo2Gls = "";
    var idDetalleUltimo3Gls = "";
    var idDetalleUltimo4Gls = "";
    var idDetalleUltimo5Gls = "";
    var idDetalleUltimo6Gls = "";
    var idDetalleUltimo7Gls = "";
    var idDetalleUltimo8Gls = "";
    var idDetalleUltimo9Gls = "";
    var estadoRespuestaFicha = false;
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerTramitacionObservaciones",
        data: "{'CodFicha': '" + codFichaHijo + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        if (r.d != "") {
            $.each(r.d,
                function () {
                    //@IdTipoRespuesta 
                    //1 -> General                  
                    //2 -> Personal 
                    //3 -> Materiale
                    //4 -> Seguridad
                    //5 -> Salud
                    //6 -> Educación
                    //7 -> Alimentación
                    //8 -> Gestión Residencia
                    //9 -> Población y Capacidad


                    //this.IdDetallle 
                    //this.IdRespuesta  
                    //this.Respuesta  
                    //this.Fecha  
                    //this.Hora 
                    //this.PersonaCreacion 
                    //this.IdTipoRespuesta 
                    //this.EstadoDetalle  
                    //this.Estado  
                    //this.NombreArchivo  
                    //this.Extension 
                    //this.FolderAdjuntos

                    var adjuntos = "";
                    var calculaImagen = "";
                    var correlativo = 1;
                    var arrAdjuntos;

                    $("#IdRespuesta").val(this.IdRespuesta);

                    // Evalua despliegue secciones de respuestas 
                    // si existen observaciones:
                    EvaluaDespliegueSecciones(codFichaHijo);

                    if (this.IdTipoRespuesta == 1) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_1_General = strtramitacion_1_General + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx001_general == false && this.EstadoDetalle == "Finalizada") { fin_tx001_general = true; }
                        idDetalleUltimo1 = this.IdDetalle;
                        idDetalleUltimo1Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 9) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_9_PoblaciónCapacidad = strtramitacion_9_PoblaciónCapacidad + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx009_poblacion == false && this.EstadoDetalle == "Finalizada") { fin_tx009_poblacion = true; }
                        idDetalleUltimo9 = this.IdDetalle;
                        idDetalleUltimo9Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 2) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_2_Personal = strtramitacion_2_Personal + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx002_dotacion == false && this.EstadoDetalle == "Finalizada") { fin_tx002_dotacion = true; }
                        idDetalleUltimo2 = this.IdDetalle;
                        idDetalleUltimo2Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 3) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_3_Materiale = strtramitacion_3_Materiale + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx003_infraestr == false && this.EstadoDetalle == "Finalizada") { fin_tx003_infraestr = true; }
                        idDetalleUltimo3 = this.IdDetalle;
                        idDetalleUltimo3Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 4) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_4_Seguridad = strtramitacion_4_Seguridad + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx004_seguridad == false && this.EstadoDetalle == "Finalizada") { fin_tx004_seguridad = true; }
                        idDetalleUltimo4 = this.IdDetalle;
                        idDetalleUltimo4Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 5) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_5_Salud = strtramitacion_5_Salud + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx005_salud == false && this.EstadoDetalle == "Finalizada") { fin_tx005_salud = true; }
                        idDetalleUltimo5 = this.IdDetalle;
                        idDetalleUltimo5Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 6) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_6_Educacion = strtramitacion_6_Educacion + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx006_educacion == false && this.EstadoDetalle == "Finalizada") { fin_tx006_educacion = true; }
                        idDetalleUltimo6 = this.IdDetalle;
                        idDetalleUltimo6Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 7) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_7_Alimentacion = strtramitacion_7_Alimentacion + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx007_alimentacion == false && this.EstadoDetalle == "Finalizada") { fin_tx007_alimentacion = true; }
                        idDetalleUltimo7 = this.IdDetalle;
                        idDetalleUltimo7Gls = this.Respuesta;
                    }
                    if (this.IdTipoRespuesta == 8) {
                        adjuntos = GeneraAdjuntosdeRespuestas(this.NombreArchivo, this.Extension, this.FolderAdjuntos, this.IdDetalle, correlativo);
                        correlativo = ActualizaCorrelativoIdAdjunto(correlativo, this.NombreArchivo);
                        strtramitacion_8_GestionResidencia = strtramitacion_8_GestionResidencia + cuerpoRespuesta.mapReplace({
                            "[fecha_]": this.Fecha,
                            "[hora_]": this.Hora,
                            "[usuario_]": this.PersonaCreacion,
                            "[mensaje]": this.Respuesta,
                            "[listado_adjuntos]": adjuntos
                        });
                        if (fin_tx008_gestionResid == false && this.EstadoDetalle == "Finalizada") { fin_tx008_gestionResid = true; }
                        idDetalleUltimo8 = this.IdDetalle;
                        idDetalleUltimo8Gls = this.Respuesta;
                    }

                    if (estadoRespuestaFicha == false && this.Estado == "Finalizada") estadoRespuestaFicha = true;
                }
            );
            arrUltimosIdDetalle = [idDetalleUltimo1, idDetalleUltimo2, idDetalleUltimo3, idDetalleUltimo4, idDetalleUltimo5, idDetalleUltimo6, idDetalleUltimo7, idDetalleUltimo8, idDetalleUltimo9];
            arrUltimosIdDetalleGls = [idDetalleUltimo1Gls, idDetalleUltimo2Gls, idDetalleUltimo3Gls, idDetalleUltimo4Gls, idDetalleUltimo5Gls, idDetalleUltimo6Gls, idDetalleUltimo7Gls, idDetalleUltimo8Gls, idDetalleUltimo9Gls]
        }
        else {
            // Evalua despliegue secciones de respuestas 
            // si existen observaciones
            EvaluaDespliegueSecciones(codFichaHijo);
        }

        if (estadoRespuestaFicha || EstadoRespuestaGlobal) {
            BloqueaIngresoRespuestaGlobal(true);
            $("#check000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
            $("#ontx000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
        }
        else {
            BloqueaIngresoRespuestaGlobal(false);
            $("#check000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
            $("#ontx000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
        }
        var valor_div_grl = document.getElementById("div_tramitacion001").innerHTML;
        strtramitacion_1_General = valor_div_grl.mapReplace({ "[tramitacion]": strtramitacion_1_General });
        IndicaFinTramitacionOBS(fin_tx001_general, "#div_tramitacion001", "#divBotonera001", strtramitacion_1_General, 1);

        var valor_div_poblaCapacidad = document.getElementById("div_tramitacion009").innerHTML;
        strtramitacion_9_PoblaciónCapacidad = valor_div_poblaCapacidad.mapReplace({ "[tramitacion]": strtramitacion_9_PoblaciónCapacidad });
        IndicaFinTramitacionOBS(fin_tx009_poblacion, "#div_tramitacion009", "#divBotonera009", strtramitacion_9_PoblaciónCapacidad, 9);

        var valor_div_dotacion = document.getElementById("div_tramitacion002").innerHTML;
        strtramitacion_2_Personal = valor_div_dotacion.mapReplace({ "[tramitacion]": strtramitacion_2_Personal });
        IndicaFinTramitacionOBS(fin_tx002_dotacion, "#div_tramitacion002", "#divBotonera002", strtramitacion_2_Personal, 2);

        var valor_div_infraestr = document.getElementById("div_tramitacion003").innerHTML;
        strtramitacion_3_Materiale = valor_div_infraestr.mapReplace({ "[tramitacion]": strtramitacion_3_Materiale });
        IndicaFinTramitacionOBS(fin_tx003_infraestr, "#div_tramitacion003", "#divBotonera003", strtramitacion_3_Materiale, 3);

        var valor_div_seguridad = document.getElementById("div_tramitacion004").innerHTML;
        strtramitacion_4_Seguridad = valor_div_seguridad.mapReplace({ "[tramitacion]": strtramitacion_4_Seguridad });
        IndicaFinTramitacionOBS(fin_tx004_seguridad, "#div_tramitacion004", "#divBotonera004", strtramitacion_4_Seguridad, 4);

        var valor_div_salud = document.getElementById("div_tramitacion005").innerHTML;
        strtramitacion_5_Salud = valor_div_salud.mapReplace({ "[tramitacion]": strtramitacion_5_Salud });
        IndicaFinTramitacionOBS(fin_tx005_salud, "#div_tramitacion005", "#divBotonera005", strtramitacion_5_Salud, 5);

        var valor_div_educacion = document.getElementById("div_tramitacion006").innerHTML;
        strtramitacion_6_Educacion = valor_div_educacion.mapReplace({ "[tramitacion]": strtramitacion_6_Educacion });
        IndicaFinTramitacionOBS(fin_tx006_educacion, "#div_tramitacion006", "#divBotonera006", strtramitacion_6_Educacion, 6);

        var valor_div_alimentacion = document.getElementById("div_tramitacion007").innerHTML;
        strtramitacion_7_Alimentacion = valor_div_alimentacion.mapReplace({ "[tramitacion]": strtramitacion_7_Alimentacion });
        IndicaFinTramitacionOBS(fin_tx007_alimentacion, "#div_tramitacion007", "#divBotonera007", strtramitacion_7_Alimentacion, 7);

        var valor_div_gestionresidencia = document.getElementById("div_tramitacion008").innerHTML;
        strtramitacion_8_GestionResidencia = valor_div_gestionresidencia.mapReplace({ "[tramitacion]": strtramitacion_8_GestionResidencia });
        IndicaFinTramitacionOBS(fin_tx008_gestionResid, "#div_tramitacion008", "#divBotonera008", strtramitacion_8_GestionResidencia, 8);
    });
}
function IndicaFinTramitacionOBS(bindicadorFIn, divtramites, divBotonera, htmlTramitacion, opc) {
    if (bindicadorFIn == true) {
        var fila_resp = ingresoNuevaRespuesta.mapReplace({ "[tramitacion]": "", "[indexseccion]": opc });
        var strHTML_ = htmlTramitacion;
        strHTML_ = replaceAll(strHTML_, fila_resp, "");
        strHTML_ = strHTML_ + bloqueTXFinalizada;


        $(divBotonera).attr({ "style": "display:none;" });

        $(divtramites).html(strHTML_);

        $("#check00" + opc).attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
        $("#ontx00" + opc).attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });

        arrVisadosAuto[opc - 1] = 1;
    }
    else {
        $(divtramites).html(htmlTramitacion);
        $("#check00" + opc).attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
        $("#ontx00" + opc).attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
        arrVisadosAuto[opc - 1] = 0;

        //No se despliega botonera si no se está cargando Gestión Observaciones:
        //Además se muestra caja de tramitación pendiente. Esto es para desplegar
        //el historial en detalle en la funcionalidad de histiorial de ficha.
        if (opcioncarga != "GESTIONOBSERVACIONES") {
            var fila_resp = ingresoNuevaRespuesta.mapReplace({ "[tramitacion]": "", "[indexseccion]": opc });
            var strHTML_ = htmlTramitacion;
            strHTML_ = replaceAll(strHTML_, fila_resp, "");
            strHTML_ = strHTML_ + bloqueTXPendiente;


            $(divBotonera).attr({ "style": "display:none;" });

            $(divtramites).html(strHTML_);

            $("#check00" + opc).attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
            $("#ontx00" + opc).attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });

            BloqueaIngresoRespuestaGlobal(true);
        }
    }
}

function GeneraAdjuntosdeRespuestas(NombreArchivo, Extension, FolderAdjuntos, IdDetalle, correlativo) {
    var adjuntos = "";
    var correlativointerno = correlativo;
    if (NombreArchivo.indexOf(';') != -1) {

        var arrAdjuntos = NombreArchivo.split(';');
        var arrExtension = Extension.split(';');
        var arrFolderAdjuntos = FolderAdjuntos.split(';');

        for (var k = 0; k <= arrAdjuntos.length - 1; k++) {

            calculaImagen = ObtenerTipoImagen(arrExtension[k]);

            //adjuntos = adjuntos + formatoadjunto.mapReplace({ "[nombre_archivo_adjunto]": arrAdjuntos[k], "[tipo_imagen]": calculaImagen, "[url_doc]": $("#iisadjuntos").val() + "/" + arrFolderAdjuntos[k] + "/" + arrAdjuntos[k], "[id_doc]": IdDetalle + "_" + correlativointerno });
            adjuntos = adjuntos + formatoadjunto.mapReplace({ "[nombre_archivo_adjunto]": arrAdjuntos[k], "[tipo_imagen]": calculaImagen, "[url_doc]": arrFolderAdjuntos[k], "[id_doc]": IdDetalle + "_" + correlativointerno });
            correlativointerno++;
        }
    }
    else {
        if (NombreArchivo != "") {
            calculaImagen = ObtenerTipoImagen(Extension);
            //adjuntos = formatoadjunto.mapReplace({ "[nombre_archivo_adjunto]": NombreArchivo, "[tipo_imagen]": calculaImagen, "[url_doc]": $("#iisadjuntos").val() + "/" + FolderAdjuntos + "/" + NombreArchivo, "[id_doc]": IdDetalle + "_" + correlativointerno });
            adjuntos = formatoadjunto.mapReplace({ "[nombre_archivo_adjunto]": NombreArchivo, "[tipo_imagen]": calculaImagen, "[url_doc]": FolderAdjuntos, "[id_doc]": IdDetalle + "_" + correlativointerno });
        }
    }
    return adjuntos;
}
function ActualizaCorrelativoIdAdjunto(correlativo, NombreArchivo) {
    if (NombreArchivo != "") {
        if (NombreArchivo.indexOf(';') != -1) {
            arrAdjuntos = NombreArchivo.split(';');
            correlativo = correlativo + (arrAdjuntos.length - 1);
        }
        else {
            correlativo++;
        }
    }
    return correlativo;
}
function EvaluaDespliegueSecciones(codFichaHijo) {
    //(1) Habilita seccion de respuestas antecedentes generales
    if (arrObsPorSeccion[0] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[0], "div_tramitacion001", codFichaHijo, 1);
        $("#div_respuestas_obs_general").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_general").attr({ "style": "display:none;" });
        $("#div_tramitacion001").html("");
    }
    //(2) Habilita seccion de respuestas antecedentes población capacidad
    if (arrObsPorSeccion[1] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[1], "div_tramitacion009", codFichaHijo, 9);
        $("#div_respuestas_obs_poblacionCapacidad").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_poblacionCapacidad").attr({ "style": "display:none;" });
        $("#div_tramitacion009").html("");
    }
    //(3) Habilita seccion de respuestas antecedentes dotación personal
    if (arrObsPorSeccion[2] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[2], "div_tramitacion002", codFichaHijo, 2);
        $("#div_respuestas_obs_dotacionPersonal").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_dotacionPersonal").attr({ "style": "display:none;" });
        $("#div_tramitacion002").html("");
    }
    //(4) Habilita seccion de respuestas antecedentes infraestructura
    if (arrObsPorSeccion[3] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[3], "div_tramitacion003", codFichaHijo, 3);
        $("#div_respuestas_obs_infraestructura").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_infraestructura").attr({ "style": "display:none;" });
        $("#div_tramitacion003").html("");
    }
    //(5) Habilita seccion de respuestas antecedentes seguridad
    if (arrObsPorSeccion[4] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[4], "div_tramitacion004", codFichaHijo, 4);
        $("#div_respuestas_obs_seguridad").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_seguridad").attr({ "style": "display:none;" });
        $("#div_tramitacion004").html("");
    }
    //(6) Habilita seccion de respuestas antecedentes salud
    if (arrObsPorSeccion[5] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[5], "div_tramitacion005", codFichaHijo, 5);
        $("#div_respuestas_obs_salud").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_salud").attr({ "style": "display:none;" });
        $("#div_tramitacion005").html("");
    }
    //(7) Habilita seccion de respuestas antecedentes educacion
    if (arrObsPorSeccion[6] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[6], "div_tramitacion006", codFichaHijo, 6);
        $("#div_respuestas_obs_educacion").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_educacion").attr({ "style": "display:none;" });
        $("#div_tramitacion006").html("");
    }
    //(8) Habilita seccion de respuestas antecedentes educacion
    if (arrObsPorSeccion[7] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[7], "div_tramitacion007", codFichaHijo, 7);
        $("#div_respuestas_obs_alimentacion").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_alimentacion").attr({ "style": "display:none;" });
        $("#div_tramitacion007").html("");
    }
    //(9) Habilita seccion de respuestas antecedentes gestión residencia
    if (arrObsPorSeccion[8] != "") {
        CargaTramitacionObservaciones(arrObsPorSeccion[8], "div_tramitacion008", codFichaHijo, 8);
        $("#div_respuestas_obs_gestion_residencia").attr({ "style": "display:block;" });
    }
    else {
        $("#div_respuestas_obs_gestion_residencia").attr({ "style": "display:none;" });
        $("#div_tramitacion008").html("");
    }
}

function VerDoc(objImg) {
    //var url = $("#" + objImg.id).data("url");
    var codarchivo = $("#" + objImg.id).data("url");

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ObtenerURLDescarga",
        data: "{" +
                "'codarchivo': '" + codarchivo + "'" +
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
        if (r.d != "") {
            $.each(r.d,
                function () {
                    window.open(this.url);
                }
            );
        }
    });

}
function ObtenerTipoImagen(tipo) {
    var output = "";

    switch (tipo) {
        case "doc":
            output = "type_doc.png";
            break;
        case "docx":
            output = "type_docx.png";
            break;
        case "xls":
            output = "type_xls.png";
            break;
        case "xlsx":
            output = "type_xlsx.png";
            break;
        case "gif":
            output = "type_gif.png";
            break;
        case "jpg":
            output = "type_jpg.png";
            break;
        case "mp3":
            output = "type_mp3.png";
            break;
        case "mp4":
            output = "type_mp4.png";
            break;
        case "pdf":
            output = "type_pdf.png";
            break;
        case "png":
            output = "type_png.png";
            break;
        case "txt":
            output = "type_text.png";
            break;
        case "zip":
            output = "type_zip.png";
            break;
        case "rar":
            output = "type-rar.png";
            break;
        case "ppt":
            output = "type-ppt.png";
            break;
        case "pptx":
            output = "type-pptx.png";
            break;
    }
    return output;
}
//////////////////////////////////////
//RESPUESTAS
function ObtieneSeccion(p) {
    var tipoAntecedentes = "";
    switch (p) {
        case 1:
            tipoAntecedentes = " antecedentes generales";
            break;
        case 2:
            tipoAntecedentes = " antecedentes dotación personal";
            break;
        case 3:
            tipoAntecedentes = " antecedentes de infraestructura";
            break;
        case 4:
            tipoAntecedentes = " antecedentes de seguridad";
            break;
        case 5:
            tipoAntecedentes = " antecedentes de salud";
            break;
        case 6:
            tipoAntecedentes = " antecedentes de educación";
            break;
        case 7:
            tipoAntecedentes = " antecedentes de alimentación";
            break;
        case 8:
            tipoAntecedentes = " antecedentes de gestión residencia";
            break;
        case 9:
            tipoAntecedentes = " antecedentes de población y capacidad";
            break;
    }
    return tipoAntecedentes;
}
function FocusTextoGral() {
    $("#text_respuesta_ObsGral_Sugerencia").focus();
}
var bexistenNoVisadas = false;
function GrabarRespuestaGeneralSENAME() {
    var seccionesNoVisadas = "";
    bexistenNoVisadas = false;
    if (EliminaEspacios($("#text_respuesta_ObsGral_Sugerencia").val()) == "") {
        MensajeINFO2_V3("<p style='font-size:12px;text-align:justify;'>Para poder dar por finalizada la tramitación general de observaciones del PJUD, debe ingresar una respuesta general para la ficha residencia seleccionada.</p>", "FocusTextoGral();");
    }
    else {
        for (var p = 1; p <= 9; p++) {
            if (arrObsPorSeccion[p - 1] != "") {
                if (document.getElementById("ontx00" + p).style.display != "none") {
                    bexistenNoVisadas = true;
                    seccionesNoVisadas = seccionesNoVisadas + "<br />-<b>" + ObtieneSeccion(p) + "</b>"; // ==>>" + arrUltimosIdDetalle[p-1];
                }
            }
        }
        if (bexistenNoVisadas) {
            MensajeWARNING("<p style='font-size:12px;text-align:justify;'>Atención!! existen las siguiente secciones sin visar:<br /> " + seccionesNoVisadas + "<br /><br />" +
                           "Si existen respuestas de tramitaciones en estas secciones, la última registrada en cada una de ella será considera para su envío como respuesta formal a la observación correspondiente. " +
                           "Si usted está de acuerdo con esta haga clic en Aceptar, de lo contrario en Cancelar para poder ir a cada sección y visarla con una respuesta que sea conforme a lo que se pide resolver en la observación." +
                           "</p>", "ProcesarFinalizacionGeneral()");

        }
        else {
            ProcesarFinalizacionGeneral();
        }
    }
}
var arrVisadosAuto = [0, 0, null, null, null, null, null, null, null] ;
function ProcesarFinalizacionGeneral() {

    //alert(arrVisadosAuto);
    document.getElementById('btnResponderOBS_General').disabled = true;
    if (bexistenNoVisadas) {

        MensajeProcesandoVisadosAutomatico();

        for (var p = 1; p <= 9; p++) {
            if (arrObsPorSeccion[p - 1] != "") {
                if (document.getElementById("ontx00" + p).style.display != "none") {
                    VisarFinalizarTramitacion(p, arrUltimosIdDetalle[p - 1], true, arrUltimosIdDetalleGls[p - 1]);
                }
            }
            else {
                arrVisadosAuto[p - 1] = 1;
            }
        }
    }
    else {
        EjecutaGuardarRespuestaGeneralSENAME();
    }
}
function EjecutaGuardarRespuestaGeneralSENAME() {

    if (bexistenNoVisadas) swal.clickCancel();

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ProcesarFinalizacionGeneral",
        data: "{" +
                "'IdUsuario': '" + IdUsuarioActualizacion + "'," +
                "'CodFicha': '" + CodFichaHijaTramitaciones + "'," +
                "'Respuesta': '" + EliminaEspacios($("#text_respuesta_ObsGral_Sugerencia").val()) + "'" +
              "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
            document.getElementById('btnResponderOBS_General').disabled = false;
        }
    }).then(function (r) {
        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (this.REGISTRO_ACTUALIZADO != "-1") {
                        BloqueaIngresoRespuestaGlobal(true);
                        $("#gestionResid_024_respuesta_SENAME").val(EliminaEspacios($("#text_respuesta_ObsGral_Sugerencia").val()));

                        $("#check000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
                        $("#ontx000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });

                        InicializaContadoresTexto();

                        MessageSucess("<p style='text-alig:justify;font-size:14px;'>Se ha guardado y finalizado correctamente la tramitación de las observaciones para la ficha residencial seleccionada.</p>");
                    }
                }
            );
        }
    });
}
var swalVisadoAuto;
function MensajeProcesandoVisadosAutomatico() {
    var d = new Date();
    swalVisadoAuto = swal({
        title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
                "</tr>" +
                "</table>",
        html: "<div style='text-align:center;margin:auto;padding: 0 1rem;margin: 1rem;'><div style='  margin-left: auto;margin-right: auto;'><span style='color:#0F68B1;text-align:center;'>Procesando visado automático de respuestas a observaciones<span>" +
              "<br /><img src='images/loader_ficharesidencial.gif' style='width:30px;' /></div></div>",
        type: "info",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false
    });
}
function BloqueaIngresoRespuestaGlobal(opcion) {
    if (opcion) {
        $('#text_respuesta_ObsGral_Sugerencia').prop('readonly', true);
        document.getElementById('btnResponderOBS_General').style.display = "none";
        document.getElementById('btnResponderOBS_General').disabled = true;
    }
    else {
        $('#text_respuesta_ObsGral_Sugerencia').prop('readonly', false);
        document.getElementById('btnResponderOBS_General').style.display = "";
        document.getElementById('btnResponderOBS_General').disabled = false;
    }

}


//INICIALIZACIÓN DE ELEMENTOS DE PAGINA
//FUNCIONES DE INICIALIZACIÓN COMBOS
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
        //alert("What!!!");
        var Institucion = $("#cmbInstitucion");
        InicializaCombo("#cmbInstitucion");
        Institucion.append("<option value='0'>Seleccionar</option>");

        var proyecto = $("#cmbProyecto");
        InicializaCombo("#cmbProyecto");
        proyecto.append("<option value='0'>Seleccionar</option>");

        var NombreInstitucionAUX = "";

        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (NombreInstitucionAUX == "" || NombreInstitucionAUX != this.NombreInstitucion) {
                        $("#cmbInstitucion").append("<option value='0'>" + this.NombreInstitucion + "</option>");
                        NombreInstitucionAUX = this.NombreInstitucion;
                    }
                    //$("#cmbProyecto").append("<option value='" + this.CodProyecto + "'>" + this.NombreProyecto + "</option>");
                }
            );
            //document.getElementById("cmbInstitucion").selectedIndex = 1;
        }
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


        if (r.d != "") {
            $.each(r.d,
                function () {
                    conect = "conectado";
                    if (this.error != "") {
                        DesplegarExcepcionCriticaDBOBJ(this.error);
                    }
                }
            );
        }
    });
}


//ESTADISTICAS
function PrincipalHistorial() {
    ReseteaCodigos();
    $("#frmwork2").css("display", "none");
    $("#btnVolverListado2").css("display", "none");
    $("#frmwork3").css("display", "none");
    $("#btnVolverListado3").css("display", "none");
    $("#btnVolverListado4").css("display", "none");

    $("#frmwork4").css("display", "none");
    $("#btnVolverListado5").css("display", "none");

    $("#divFuncionesEstadisticasFicha").css("display", "block");
    $("#divListadoFichasXResponder").css("display", "block");
    $("#glsTimpoPromedio").html("");
}
function VerTiemposPromedio() {
    ReseteaCodigos();
    $("#divFuncionesEstadisticasFicha").css("display", "none");
    $("#divListadoFichasXResponder").css("display", "none");
    $("#glsTimpoPromedio").html(" / TIEMPOS PROMEDIO POR ETAPA");
    $("#frmwork3").css("display", "none");
    $("#btnVolverListado3").css("display", "none");
    $("#btnVolverListado4").css("display", "none");

    $("#frmwork2").css("display", "block");
    $("#btnVolverListado2").css("display", "block");

    $("#frmwork4").css("display", "none");
    $("#btnVolverListado5").css("display", "none");

    CargarTiemposPromedio();
    $("#divglosadetalle").html("<b>PROMEDIOS GENERALES</b>");
}
function VolverTimeLine1() {
    VerTiemposPromedio();
}
function CargarTiemposPromedio() {
    var t4, t3, t2, t1, t0;
    var divT4_point = document.getElementById("divT4_point");
    var divT3_point = document.getElementById("divT3_point");
    var divT2_point = document.getElementById("divT2_point");
    var divT1_point = document.getElementById("divT1_point");
    var divT0_point = document.getElementById("divT0_point");

    ReseteaTiemposPromedio();
    ReseteaCodigos();
    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerTiempoPromedioGeneral",
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


        if (r.d != "") {
            $.each(r.d,
                function () {
                    //AQUI DEBO CARGAR LOS TIEMPO QUE ME ENTREGUE LA CONSULTA A LA BASE DE DATOS
                    t4 = this.TiempoConsumoRespuesta; 
                    t3 = this.TiempoInicioTramitacion + this.TiempoFinTramitacion; 
                    t2 = this.TiempoObservacion; 
                    t1 = this.TiempoConsumo; 
                    t0 = this.TiempoFinalizacion;
                    $("#T4").html(t4 + " DÍAS");
                    $("#T3").html(t3 + " DÍAS");
                    $("#T2").html(t2 + " DÍAS");
                    $("#T1").html(t1 + " DÍAS");
                    $("#T0").html(t0 + " DÍAS");
                    //alert(t0 + " - " + t1 + " - " + t2 + " - " + t3 + " - " + t4);
                    if (t4 != 0) { divT4_point.className = "timeline-badge success"; $("#chkT4_01").css("display", ""); $("#chkT4_02").css("display", "none"); } else { divT4_point.className = "timeline-badge warning"; $("#chkT4_01").css("display", "none"); $("#chkT4_02").css("display", ""); }
                    if (t3 != 0 || t4 != 0) { divT3_point.className = "timeline-badge success"; $("#chkT3_01").css("display", ""); $("#chkT3_02").css("display", "none"); } else { divT3_point.className = "timeline-badge warning"; $("#chkT3_01").css("display", "none"); $("#chkT3_02").css("display", ""); }
                    if (t2 != 0 || t3 != 0) { divT2_point.className = "timeline-badge success"; $("#chkT2_01").css("display", ""); $("#chkT2_02").css("display", "none"); } else { divT4_point.className = "timeline-badge warning"; $("#chkT2_01").css("display", "none"); $("#chkT2_02").css("display", ""); }
                    if (t1 != 0 || t2 != 0) { divT1_point.className = "timeline-badge success"; $("#chkT1_01").css("display", ""); $("#chkT1_02").css("display", "none"); } else { divT1_point.className = "timeline-badge warning"; $("#chkT1_01").css("display", "none"); $("#chkT1_02").css("display", ""); }
                    if (t0 != 0 || t1 != 0) { divT0_point.className = "timeline-badge success"; $("#chkT0_01").css("display", ""); $("#chkT0_02").css("display", "none"); } else { divT0_point.className = "timeline-badge warning"; $("#chkT0_01").css("display", "none"); $("#chkT0_02").css("display", ""); }
                }
            );
        }
        else {
            $("#T4").html("NO INFORMADO");
            $("#T3").html("NO INFORMADO");
            $("#T2").html("NO INFORMADO");
            $("#T1").html("NO INFORMADO");
            $("#T0").html("NO INFORMADO");
            divT4_point.className = "timeline-badge warning"; $("#chkT4_01").css("display", "none"); $("#chkT4_02").css("display", "");
            divT3_point.className = "timeline-badge warning"; $("#chkT3_01").css("display", "none"); $("#chkT3_02").css("display", "");
            divT4_point.className = "timeline-badge warning"; $("#chkT2_01").css("display", "none"); $("#chkT2_02").css("display", "");
            divT1_point.className = "timeline-badge warning"; $("#chkT1_01").css("display", "none"); $("#chkT1_02").css("display", "");
            divT0_point.className = "timeline-badge warning"; $("#chkT0_01").css("display", "none"); $("#chkT0_02").css("display", "");
        }
    });
}
var tipoEtapaSeleccionada = "";
var codinstitucionSel_=0;
var codproyectoSel_=0;
var codinstitucionGlosaSel_="";
var codproyectoGlosaSel_ = "";
var paramData = "";
var glosaTituloDetalle = "";
function VerDetalleTiempoPromedio(opc) {

    tipoEtapaSeleccionada = opc;

    if ($("#" + opc).html() == "NO INFORMADO") {
        MensajeINFO("Esta etapa, actualmente no informa tiempo promedio.");
    }
    else {
        var tipo = "";
        switch (opc) {
            case "T0":
                tipo = "REGISTRO DE FICHA RESIDENCIAL";
                break;
            case "T1":
                tipo = "CONSUMO SERVICIO WEB DE FICHA RESIDENCIAL DESDE PJUD";
                break;
            case "T2":
                tipo = "ENVÍO DE OBSERVACIONES DESDE PJUD";
                break;
            case "T3":
                tipo = "TRAMITACIÓN DE OBSERVACIONES";
                break;
            case "T4":
                tipo = "CONSUMO SERVICIO WEB DE RESPUESTAS DESDE PJUD";
                break;
        }

        if (codinstitucionSel_ != 0 && codproyectoSel_ != 0) {
            $("#divFuncionesEstadisticasFicha").css("display", "none");
            $("#divListadoFichasXResponder").css("display", "none");
            $("#glsTimpoPromedio").html(" / TIEMPOS PROMEDIO POR ETAPA");
            $("#frmwork2").css("display", "none");
            $("#btnVolverListado2").css("display", "none");
            $("#btnVolverListado4").css("display", "none");

            $("#frmwork3").css("display", "none");
            $("#btnVolverListado3").css("display", "none");

            $("#frmwork4").css("display", "block");
            $("#btnVolverListado5").css("display", "block");


            $("#tiempoAvgPromedioPorFichas_").html("TIEMPOS POR FICHA (días)<br />INSTITUCIÓN: <b>" + codinstitucionGlosaSel_ + "</b><br />PROYECTO: <b>" + codproyectoGlosaSel_ + "</b><br /><i style='color:#A4A4A4;font-size:16px;' class='fa fa-asterisk' aria-hidden='true'></i>&nbsp;<span style='color:#A4A4A4;font-size:11px;'>Todos los valores de tiempos de están expresados en días</span><br /><br />");

            var tblDestinoXFicha = document.getElementById("tblTiempoAvgXFicha");
            var rowCount1 = tblDestinoXFicha.rows.length;

            for (var i = rowCount1 - 1; i > 0; i--) {
                tblDestinoXFicha.deleteRow(i);
            }
            
            var t0avg = 0, t1avg = 0, t2avg = 0, t3Aavg = 0, t3Bavg = 0, t4avg = 0;
            var t0avg_div = 0, t1avg_div = 0, t2avg_div = 0, t3Aavg_div = 0, t3Bavg_div = 0, t4avg_div = 0;

            $.ajax({
                type: "POST",
                url: "FichaResidencialHistorial.aspx/ObtenerListadoFichasXProyecto",
                data: '{"CodProyecto":"' + codproyectoSel_ + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (r) {
                    // Ajax OK !              
                },
                error: function (r) {
                    DesplegarExcepcionCriticaApp(r.responseText);
                }
            }).then(function (r) {
                if (r.d != "") {

                    $.each(r.d,
                        function () {
                            var rowCount2 = tblDestinoXFicha.rows.length;
                            var row = tblDestinoXFicha.insertRow(rowCount2);

                            var cell1 = row.insertCell(0);//código ficha
                            var cell2 = row.insertCell(1);//corte
                            var cell3 = row.insertCell(2);//juez
                            var cell4 = row.insertCell(3);//tiempo de registro de ficha residencial
                            var cell5 = row.insertCell(4);//tiempo de consumo WS de ficha desde PJUD
                            var cell6 = row.insertCell(5);//tiempo de envío de Observaciones desde PJUD
                            var cell7 = row.insertCell(6);//tiempo en espera de tramitación por parte de SENAME
                            var cell8 = row.insertCell(7);//tiempo de tramitación de observaciones ficha residencial
                            var cell9 = row.insertCell(8);//tiempo de Consumo WS de respuestas desde PJUD


                            row.id = "row_inst_" + rowCount2;
                            row.style.cursor = "pointer";
                            row.dataset.valores =codinstitucionSel_ + "|" + codproyectoSel_ + "|" + this.CodFicha + "|" + codinstitucionGlosaSel_ + "|" + codproyectoGlosaSel_;
                            //row.onclick = function () { VerDetalleTiemposPromedioPorFicha(this.dataset.valores); };

                            cell1.innerHTML = this.CodFicha;
                            cell2.innerHTML = this.Corte_Tribunal;
                            cell3.innerHTML = this.Juez;

                            cell4.className = "text-center";
                            cell4.innerHTML = this.t0;
                            cell5.className = "text-center";
                            cell5.innerHTML = this.t1;
                            cell6.className = "text-center";
                            cell6.innerHTML = this.t2;
                            cell7.className = "text-center";
                            cell7.innerHTML = this.t3A;
                            cell8.className = "text-center";
                            cell8.innerHTML = this.t3B;
                            cell9.className = "text-center";
                            cell9.innerHTML = this.t4;

                            t0avg = t0avg + this.t0;
                            t1avg = t1avg + this.t1;
                            t2avg = t2avg + this.t2;
                            t3Aavg = t3Aavg + this.t3A;
                            t3Bavg = t3Bavg + this.t3B;
                            t4avg = t4avg + this.t4;

                            if (this.t0 > 0) t0avg_div = t0avg_div + 1;
                            if (this.t1 > 0) t1avg_div = t1avg_div + 1;
                            if (this.t2 > 0) t2avg_div = t2avg_div + 1;
                            if (this.t3A > 0) t3Aavg_div = t3Aavg_div + 1;
                            if (this.t3B > 0) t3Bavg_div = t3Bavg_div + 1;
                            if (this.t4 > 0) t4avg_div = t4avg_div + 1;
                        }
                    );
                    var rowCount2 = tblDestinoXFicha.rows.length;
                    var row = tblDestinoXFicha.insertRow(rowCount2);

                    var cell1 = row.insertCell(0);//código ficha
                    cell1.colSpan = 3;
                    cell1.className = "text-center";
                    cell1.innerHTML = "<b style='color:#2471A3;'>PROMEDIOS</b>";

                    var cell4 = row.insertCell(1);//tiempo de registro de ficha residencial
                    var cell5 = row.insertCell(2);//tiempo de consumo WS de ficha desde PJUD
                    var cell6 = row.insertCell(3);//tiempo de envío de Observaciones desde PJUD
                    var cell7 = row.insertCell(4);//tiempo en espera de tramitación por parte de SENAME
                    var cell8 = row.insertCell(5);//tiempo de tramitación de observaciones ficha residencial
                    var cell9 = row.insertCell(6);//tiempo de Consumo WS de respuestas desde PJUD

                    //t4avgNext 
                    //t3AavgNext
                    //t3BavgNext
                    //t2avgNext 
                    //t1avgNext 
                    //t0avgNext 

                    cell4.className = "text-center";
                    if (t0avg_div > 0) {
                        if (t0avgNext.toFixed(1) != (t0avg / t0avg_div).toFixed(1))
                            cell4.innerHTML = "<b style='color:#2471A3;'>" + t0avgNext.toFixed(1) + "</b>";
                        else
                            cell4.innerHTML = "<b style='color:#2471A3;'>" + (t0avg / t0avg_div).toFixed(1) + "</b>";
                        
                    }
                    else "<b style='color:#2471A3;'>0</b>";

                    cell5.className = "text-center";
                    if (t1avg_div > 0) {
                        if (t1avgNext.toFixed(1) != (t1avg / t1avg_div).toFixed(1))
                            cell5.innerHTML = "<b style='color:#2471A3;'>" + t1avgNext.toFixed(1) + "</b>";
                        else
                            cell5.innerHTML = "<b style='color:#2471A3;'>" + (t1avg / t1avg_div).toFixed(1) + "</b>";
                    }
                    else cell5.innerHTML = "<b style='color:#2471A3;'>0</b>";

                    cell6.className = "text-center";
                    if (t2avg_div > 0) {
                        if (t2avgNext.toFixed(1) != (t2avg / t2avg_div).toFixed(1))
                            cell6.innerHTML = "<b style='color:#2471A3;'>" + t2avgNext.toFixed(1) + "</b>";
                        else
                            cell6.innerHTML = "<b style='color:#2471A3;'>" + (t2avg / t2avg_div).toFixed(1) + "</b>";
                    }
                    else cell6.innerHTML = "<b style='color:#2471A3;'>0</b>";

                    cell7.className = "text-center";
                    if (t3Aavg_div > 0) {
                        if (t3AavgNext.toFixed(1) != (t3Aavg / t3Aavg_div).toFixed(1))
                            cell7.innerHTML = "<b style='color:#2471A3;'>" + t3AavgNext.toFixed(1) + "</b>";
                        else
                            cell7.innerHTML = "<b style='color:#2471A3;'>" + (t3Aavg / t3Aavg_div).toFixed(1) + "</b>";
                    }
                    else cell7.innerHTML = "<b style='color:#2471A3;'>0</b>";

                    cell8.className = "text-center";
                    if (t3Bavg_div > 0) {
                        if (t3BavgNext.toFixed(1) != (t3Bavg / t3Bavg_div).toFixed(1))
                            cell8.innerHTML = "<b style='color:#2471A3;'>" + t3BavgNext.toFixed(1) + "</b>";
                        else
                            cell8.innerHTML = "<b style='color:#2471A3;'>" + (t3Bavg / t3Bavg_div).toFixed(1) + "</b>";
                    }
                    else cell8.innerHTML = "<b style='color:#2471A3;'>0</b>";

                    cell9.className = "text-center";
                    if (t4avg_div > 0) {
                        if (t4avgNext.toFixed(1) != (t4avg / t4avg_div).toFixed(1))
                            cell9.innerHTML = "<b style='color:#2471A3;'>" + t4avgNext.toFixed(1) + "</b>";
                        else
                            cell9.innerHTML = "<b style='color:#2471A3;'>" + (t4avg / t4avg_div).toFixed(1) + "</b>";
                    }
                    else cell9.innerHTML = "<b style='color:#2471A3;'>0</b>";
                }
            });
            

        }
        else {
            $("#divFuncionesEstadisticasFicha").css("display", "none");
            $("#divListadoFichasXResponder").css("display", "none");
            $("#glsTimpoPromedio").html(" / TIEMPOS PROMEDIO POR ETAPA");
            $("#frmwork2").css("display", "none");
            $("#btnVolverListado2").css("display", "none");
            $("#btnVolverListado4").css("display", "none");

            $("#frmwork4").css("display", "none");
            $("#btnVolverListado5").css("display", "none");

            $("#frmwork3").css("display", "block");
            $("#btnVolverListado3").css("display", "block");
            $("#tiempoAvgPromedio_").html("");

            glosaTituloDetalle = "TIEMPO PROMEDIO DE <b>" + tipo + "</b> POR RESIDENCIAS (días)<br /><br />";

            var tblDestino = document.getElementById("tblTiempoAvgXResidencia");
            var rowCount1 = tblDestino.rows.length;

            for (var i = rowCount1 - 1; i > 0; i--) {
                tblDestino.deleteRow(i);
            }

            var sumaDias = 0, divisores = 0;

            $.ajax({
                type: "POST",
                url: "FichaResidencialHistorial.aspx/ObtenerListadoResidenciasXTiempoPromedioGeneral",
                data: '{"CodEtapa":"' + opc + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (r) {
                    // Ajax OK !              
                },
                error: function (r) {
                    DesplegarExcepcionCriticaApp(r.responseText);
                }
            }).then(function (r) {


                if (r.d != "") {

                    $.each(r.d,
                        function () {
                            
                            var rowCount2 = tblDestino.rows.length;
                            var row = tblDestino.insertRow(rowCount2);
                            
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            var cell5 = row.insertCell(4);

                            var arrDatosInstitucion;
                            var nombreInstitucion;
                            var estatusConsumo;
                            $("#divMensajeFichaConsumoPjud").css("display", "none");

                            if (opc == "T4" || opc == "T1") {
                                arrDatosInstitucion = this.NombreInstitucion.split('|');
                                nombreInstitucion = arrDatosInstitucion[0];
                                estatusConsumo = arrDatosInstitucion[1];
                                $("#spanConsumo").html("Estado<br />consumo");

                                if (estatusConsumo == "SI")
                                    strHTMLConsumo = "<i class='fa fa-check' aria-hidden='true' style='color:#139B0A;'></i>";
                                else
                                    strHTMLConsumo = "<i class='fa fa-times' aria-hidden='true' style='color:#DF0000;'></i>";

                                if (opc == "T1") $("#divMensajeFichaConsumoPjud").css("display","");
                              }
                            else {
                                nombreInstitucion = this.NombreInstitucion;
                                $("#spanConsumo").html("");
                                strHTMLConsumo = "";
                            }

                            row.id = "row_inst_" + rowCount2;
                            row.style.cursor = "pointer";
                            row.dataset.valores = this.CodInstitucion + "|" + this.CodProyecto + "|" + nombreInstitucion + "|" + this.NombreProyecto + "|" + this.Tiempo;
                            row.onclick = function () { VerDetalleTiemposPromedioPorResidencia(this.dataset.valores); };
                            cell1.innerHTML = nombreInstitucion;
                            cell2.innerHTML = this.NombreProyecto;

                            cell3.className = "text-center";
                            cell3.innerHTML = this.CantidadFichas;
                            cell4.className = "text-center";
                            cell4.innerHTML = this.Tiempo;
                            cell5.className = "text-center";
                            cell5.innerHTML = strHTMLConsumo;

                            sumaDias = sumaDias + this.Tiempo * this.CantidadFichas;
                            divisores = divisores + this.CantidadFichas;
                        }
                    );
                    //var rowCount2 = tblDestino.rows.length;
                    //var row = tblDestino.insertRow(rowCount2);

                    //var cell1 = row.insertCell(0);
                    //cell1.colSpan = 3;
                    //cell1.className = "text-center";
                    //cell1.innerHTML = "<b style='color:#2471A3;'>PROMEDIO</b>";

                    //var cell4 = row.insertCell(1);
                    //var cell5 = row.insertCell(2);

                    //cell4.className = "text-center";
                    //cell4.innerHTML = "<b style='color:#2471A3;'>" + (sumaDias / divisores).toFixed(1) + "</b>";
                    //cell5.innerHTML = "";
                    $("#spanCanFichas").html("Cantidad de fichas: " + "<b style='color:#2471A3;'>" + divisores + "</b>");
                    $("#spanSumaTiemposFichas").html("Suma total tiempos de fichas: " + "<b style='color:#2471A3;'>" + sumaDias + "</b>");
                    $("#spanAvgFichas").html( "Promedio tiempo por ficha: " + "<b style='color:#2471A3;'>" + (sumaDias / divisores).toFixed(1) + "</b>" );
                    
                }
            });

            if (opc == "T4") {
                glosaTituloDetalle = glosaTituloDetalle +
                          "<i class='fa fa-check' aria-hidden='true' style='color:#139B0A;margin-right:4px;'></i>Respuestas consumidas PJUD<br />" +
                          "<i class='fa fa-times' aria-hidden='true' style='color:#DF0000;margin-right:6px'></i>Respuestas NO consumidas PJUD<br />";
            }
            else {
                if (opc == "T1") {
                    glosaTituloDetalle = glosaTituloDetalle +
                              "<i class='fa fa-check' aria-hidden='true' style='color:#139B0A;margin-right:4px;'></i>Ficha residencial consumida PJUD<br />" +
                              "<i class='fa fa-times' aria-hidden='true' style='color:#DF0000;margin-right:6px;'></i>Ficha residencial NO consumida PJUD<br />";
                }
            }
            $("#tiempoAvgPromedio_").html(glosaTituloDetalle);
        }
    }
}
var t4avgNext, t3AavgNext, t3BavgNext, t2avgNext, t1avgNext, t0avgNext;
function VerDetalleTiemposPromedioPorResidencia(data) {
    var arrDatos = data.split('|');
    var t4, t3, t2, t1, t0;

    var divT4_point = document.getElementById("divT4_point");
    var divT3_point = document.getElementById("divT3_point");
    var divT2_point = document.getElementById("divT2_point");
    var divT1_point = document.getElementById("divT1_point");
    var divT0_point = document.getElementById("divT0_point");

    t4avgNext = 0, t3AavgNext = 0, t3BavgNext = 0, t2avgNext = 0, t1avgNext = 0, t0avgNext = 0;

    codinstitucionSel_=arrDatos[0];
    codproyectoSel_=arrDatos[1];
    codinstitucionGlosaSel_=arrDatos[2];
    codproyectoGlosaSel_ = arrDatos[3];
    paramData = data;

    ReseteaTiemposPromedio();
    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerTiempoPromedioPorInstitucionYProyecto",
        data: '{' +
              '"codinstitucion":"' + arrDatos[0]+ '",' +
              '"codproyecto":"' + arrDatos[1] + '"' +
              '}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !              
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {


        if (r.d != "") {

            $.each(r.d,
                function () {
                    t4 = this.TiempoConsumoRespuesta;
                    t3 = this.TiempoInicioTramitacion + this.TiempoFinTramitacion;
                    t2 = this.TiempoObservacion;
                    t1 = this.TiempoConsumo;
                    t0 = this.TiempoFinalizacion;

                    t4avgNext = this.TiempoConsumoRespuesta;
                    t3AavgNext = this.TiempoInicioTramitacion;
                    t3BavgNext = this.TiempoFinTramitacion;
                    t2avgNext = this.TiempoObservacion;
                    t1avgNext = this.TiempoConsumo;
                    t0avgNext = this.TiempoFinalizacion;

                    $("#T4").html(t4 + " DÍAS");
                    $("#T3").html(t3 + " DÍAS");
                    $("#T2").html(t2 + " DÍAS");
                    $("#T1").html(t1 + " DÍAS");
                    $("#T0").html(t0 + " DÍAS");
                    //alert(t0 + " - " + t1 + " - " + t2 + " - " + t3 + " - " + t4);
                    if (t4 != 0) { divT4_point.className = "timeline-badge success"; $("#chkT4_01").css("display", ""); $("#chkT4_02").css("display", "none"); } else { divT4_point.className = "timeline-badge warning"; $("#chkT4_01").css("display", "none"); $("#chkT4_02").css("display", ""); }
                    if (t3 != 0 || t4 != 0) { divT3_point.className = "timeline-badge success"; $("#chkT3_01").css("display", ""); $("#chkT3_02").css("display", "none"); } else { divT3_point.className = "timeline-badge warning"; $("#chkT3_01").css("display", "none"); $("#chkT3_02").css("display", ""); }
                    if (t2 != 0 || t3 != 0) { divT2_point.className = "timeline-badge success"; $("#chkT2_01").css("display", ""); $("#chkT2_02").css("display", "none"); } else { divT2_point.className = "timeline-badge warning"; $("#chkT2_01").css("display", "none"); $("#chkT2_02").css("display", ""); }
                    if (t1 != 0 || t2 != 0) { divT1_point.className = "timeline-badge success"; $("#chkT1_01").css("display", ""); $("#chkT1_02").css("display", "none"); } else { divT1_point.className = "timeline-badge warning"; $("#chkT1_01").css("display", "none"); $("#chkT1_02").css("display", ""); }
                    if (t0 != 0 || t1 != 0) { divT0_point.className = "timeline-badge success"; $("#chkT0_01").css("display", ""); $("#chkT0_02").css("display", "none"); } else { divT0_point.className = "timeline-badge warning"; $("#chkT0_01").css("display", "none"); $("#chkT0_02").css("display", ""); }
                }
            );
        }
    });
    $("#divglosadetalle").html("PROMEDIOS GENERALES<br />INSTITUCIÓN: <b>" + arrDatos[2] + "</b><br />PROYECTO: <b>" + arrDatos[3] + "</b><br/><i style='color:#A4A4A4;font-size:16px;' class='fa fa-asterisk' aria-hidden='true'></i>&nbsp;<span style='color:#A4A4A4;font-size:11px;'>Todos los valores de tiempos promedios de están expresados en días</span>");

    $("#divFuncionesEstadisticasFicha").css("display", "none");
    $("#divListadoFichasXResponder").css("display", "none");
    $("#frmwork3").css("display", "none");
    $("#btnVolverListado3").css("display", "none");

    $("#frmwork4").css("display", "none");
    $("#btnVolverListado5").css("display", "none");

    $("#frmwork2").css("display", "block");
    $("#btnVolverListado4").css("display", "block");
}
function ReseteaTiemposPromedio() {
    $("#T4").html("");
    $("#T3").html("");
    $("#T2").html("");
    $("#T1").html("");
    $("#T0").html("");
}
function ReseteaCodigos() {
    codinstitucionSel_ = 0;
    codproyectoSel_ = 0;
    codinstitucionGlosaSel_="";
    codproyectoGlosaSel_ = "";
    paramData = "";
}
function VolverDetalleResidenciasxEtapa() {
    ReseteaCodigos();
    VerDetalleTiempoPromedio(tipoEtapaSeleccionada);
}
function VolverTimeLine2() {
    VerDetalleTiemposPromedioPorResidencia(paramData);
}
//EVOLUCION DE INDICADORES Y ESTADÍSTICAS GRÁFICAS
function VerSelectoresSeccion() {
    $("#divFuncionesEstadisticasFicha").css("display", "none");
    $("#divListadoFichasXResponder").css("display", "none");
    $("#frmwork3").css("display", "none");
    $("#btnVolverListado3").css("display", "none");

    $("#frmwork4").css("display", "none");
    $("#btnVolverListado5").css("display", "none");

    $("#frmwork2").css("display", "none");
    $("#btnVolverListado4").css("display", "none");

    $("#frmwork5").css("display", "block");
    $("#btnVolverListado6").css("display", "block");

    $("#glsTimpoPromedio").html(" / EVOLUCIÓN DE INDICADORES");
}
function VolverTimeLine3() {
    $("#divFuncionesEstadisticasFicha").css("display", "block");
    $("#divListadoFichasXResponder").css("display", "block");

    $("#frmwork2").css("display", "none");
    $("#btnVolverListado4").css("display", "none");

    $("#frmwork3").css("display", "none");
    $("#btnVolverListado3").css("display", "none");

    $("#frmwork4").css("display", "none");
    $("#btnVolverListado5").css("display", "none");

    $("#frmwork5").css("display", "none");
    $("#btnVolverListado5").css("display", "none");
    $("#glsTimpoPromedio").html("");
}
var tipoEvolucion = "";
function VerEvolucionIndicadores(opc) {
    switch (opc) {
        case 1://antecedentes generales
            tipoEvolucion = "ANTECEDENTES GENERALES";
            break;
        case 2://antecedentes de dotación de personal
            tipoEvolucion = "ANTECEDENTES DE DOTACIÓN DE PERSONAL";
            break;
        case 3://antecedentes infraestructura
            tipoEvolucion = "ANTECEDENTES INFRAESTRUCTURA";
            break;
        case 4://antecedentes de salud
            tipoEvolucion = "ANTECEDENTES DE SALUD";
            break;
        case 5://antecedentes de educación
            tipoEvolucion = "ANTECEDENTES DE EDUCACIÓN";
            break;
        case 6://antecedentes de alimentación
            tipoEvolucion = "ANTECEDENTES DE ALIMENTACIÓN";
            break;
    }

    //Despliego la zona de graficos
    $("#frmwork5").css("display", "none");
    $("#frmwork6").css("display", "block");
    $("#spanTitEvolSeleccionada").html(tipoEvolucion);
    IndicadoresAntecedentes(opc);

}
var tipoEvolucion = 0;
function VolverPanelSelectorEvolucion() {
    $("#frmwork6").css("display", "none");
    
    $("#TBL_antecedentes_generales").html("");

    $("#frmwork5").css("display", "block");
    tipoEvolucion = 0;
}
function IndicadoresAntecedentes(tipoEstadisticaSel) {
    tipoEvolucion = tipoEstadisticaSel;

    $("#cmbInstitucion2").val(0);
    var proyecto2 = $("#cmbProyecto2");
    InicializaCombo("#cmbProyecto2");
    proyecto2.append("<option value='0'>Seleccionar</option>");
    $("#cmbProyecto2").attr("disabled", true);

    switch (tipoEvolucion) {
        case 1:
            GenerarEstadisticasAntecedentesGenerales();
            break;
        case 2:
            GenerarEstadisticasAntecedentesDotacionPersonal();
            break;
        case 3:
            GenerarEstadisticasAntecedentesInfraestructura();
            break;
        case 4:
            GenerarEstadisticasAntecedentesSalud();
            break;
        case 5:
            GenerarEstadisticasAntecedentesEducacion();
            break;
        case 6:
            GenerarEstadisticasAntecedentesAlimentacion();
            break;
    }
    
}
function GenerarEstadisticas() {
    switch (tipoEvolucion) {
        case 1:
            GenerarEstadisticasAntecedentesGenerales();
            break;
        case 2:
            GenerarEstadisticasAntecedentesDotacionPersonal();
            break;
        case 3:
            GenerarEstadisticasAntecedentesInfraestructura();
            break;
        case 4:
            GenerarEstadisticasAntecedentesSalud();
            break;
        case 5:
            GenerarEstadisticasAntecedentesEducacion();
            break;
        case 6:
            GenerarEstadisticasAntecedentesAlimentacion();
            break;
    }
}

function EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, tipo, contenedor, opc, titleStat, titleStat2, coloresSeries, bgColor, dataUniResidencias) {

    var dataGraph = [{ name: 'Total', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Mujeres', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Hombres', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerDatosEstadisticosPorTipoAntecedentesGenerales",
        data: "{"+
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'paramtipoEvolucion': '" + tipo + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (this.Total != 0) dataGraph[0].data[this.Mes - 1] = this.Total;
                    if (this.Mujeres != 0) dataGraph[1].data[this.Mes - 1] = this.Mujeres;
                    if (this.Hombres != 0) dataGraph[2].data[this.Mes - 1] = this.Hombres;
                }
            );

            GraficaIndicadorAnual(contenedor, opc, titleStat, titleStat2, dataGraph, coloresSeries, bgColor, dataUniResidencias);
        }
    });
}
function CalculaUniversoResidencias(institucion, proyecto, yearregistro) {
    var dataUniResidencias = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerProyectosConFicha",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    //alert(this.Mes + " -- " + this.ProyectosFicha + " -- " + this.TotalProyectos)
                    dataUniResidencias[this.Mes - 1][0] = this.ProyectosFicha;
                    dataUniResidencias[this.Mes - 1][1] = this.TotalProyectos;
                }
            );
        }
        //alert(dataUniResidencias);
        return dataUniResidencias;
    });

}

function EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, tipo, contenedor, opc, titleStat, titleStat2, coloresSeries, bgColor, dataUniResidencias) {


    var dataGraph = [{ name: 'Total Horas por semana', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Cantidad', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];
  
    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerDatosEstadisticosPorTipoAntecedentesPersonal",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'paramtipoEvolucion': '" + tipo + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (this.TotalHorasSem != 0) dataGraph[0].data[this.Mes - 1] = this.TotalHorasSem;
                    if (this.Cantidad != 0) dataGraph[1].data[this.Mes - 1] = this.Cantidad;
                }
            );

            GraficaIndicadorAnual(contenedor, opc, titleStat, titleStat2, dataGraph, coloresSeries, bgColor, dataUniResidencias);
        }
    });
    
}
function EjecutaConsultaEstadisticaAntecedentesInfraestructura(institucion, proyecto, yearregistro, contenedor, opc, titleStat, titleStat2, dataUniResidencias) {


    var dataGraph1 = [{ data: [null, null, null, null, null, null, null, null, null, null, null, null], name: 'Oficinas Administrativas' },
                     { name: 'Sala de Reuniones', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Sala de Recepcións', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Espacio de Visitas', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Sala Multiuso para Talleres', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Sala de Estar Living', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Unidad de Salud', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Espacios Recreacionales', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Áreas Verdes', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Cocina', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Comedor', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Lavandería', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Baños para Público', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph2 = [{ name: 'Dormitorio NNA', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Camas NNA', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Closet, Lockers', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph3 = [{ name: 'Baños NNA en Funcionamiento', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Baños NNA de acuerdo a Normativa', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Baños NNA de hombres', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Baños NNA de mujeres', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Baños NNA mixtos', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph4 = [{ name: 'Duchas para NNA en Funcionamiento', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Duchas para NNA de acuerdo a Normativa', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Duchas para NNA de hombres', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Duchas para NNA de mujeres', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'Duchas para NNA mixtas', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var arrContenedores = contenedor.split('|');
    var arrtitleStat = titleStat.split('|');

    coloresSeries1 = ["#641E16", "#229954", "#D4AC0D", "#D35400", "#A569BD", "#148F77", "#7D6608", "#717D7E", "#EC7063", "#F7DC6F", "#7DCEA0", "#B2BABB", "#273746"];
    coloresSeries2 = ["#C0392B", "#EDBB99", "#154360"];
    coloresSeries3 = ["#4A235A", "#8F07C7", "#FF0000", "#001FFF", "#2BCB00"];
    coloresSeries4 = ["#EEDC00", "#00EE9B", "#EE009F", "#00B8EE", "#FD8600"];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerDatosEstadisticosPorTipoAntecedentesInfraestructura",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (this.CantidadOficAdm != -1) dataGraph1[0].data[this.Mes - 1] = this.CantidadOficAdm;
                    if (this.CantidadSalaReunion != -1) dataGraph1[1].data[this.Mes - 1] = this.CantidadSalaReunion;
                    if (this.CantidadSalaRecepcion != -1) dataGraph1[2].data[this.Mes - 1] = this.CantidadSalaRecepcion;
                    if (this.CantidadEspaciosVisitas != -1) dataGraph1[3].data[this.Mes - 1] = this.CantidadEspaciosVisitas;
                    if (this.CantidadSalaTalleres != -1) dataGraph1[4].data[this.Mes - 1] = this.CantidadSalaTalleres;
                    if (this.CantidadSalaLiving != -1) dataGraph1[5].data[this.Mes - 1] = this.CantidadSalaLiving;
                    if (this.CantidadEnfermeria != -1) dataGraph1[6].data[this.Mes - 1] = this.CantidadEnfermeria;
                    if (this.CantidadRecreacion != -1) dataGraph1[7].data[this.Mes - 1] = this.CantidadRecreacion;
                    if (this.CantidadAreasVerdes != -1) dataGraph1[8].data[this.Mes - 1] = this.CantidadAreasVerdes;
                    if (this.CantidadCocina != -1) dataGraph1[9].data[this.Mes - 1] = this.CantidadCocina;
                    if (this.CantidadComedor != -1) dataGraph1[10].data[this.Mes - 1] = this.CantidadComedor;
                    if (this.CantidadLavanderia != -1) dataGraph1[11].data[this.Mes - 1] = this.CantidadLavanderia;
                    if (this.CantidadBañosPublicos != -1) dataGraph1[12].data[this.Mes - 1] = this.CantidadBañosPublicos;

                    if (this.CantidadDormitoriosNNA != -1) dataGraph2[0].data[this.Mes - 1] = this.CantidadDormitoriosNNA;
                    if (this.CantidadCamasNNA != -1) dataGraph2[1].data[this.Mes - 1] = this.CantidadCamasNNA;
                    if (this.CantidadColsetLockers != -1) dataGraph2[2].data[this.Mes - 1] = this.CantidadColsetLockers;

                    if (this.CantidadBañosNNAFuncionamiento != -1) dataGraph3[0].data[this.Mes - 1] = this.CantidadBañosNNAFuncionamiento;
                    if (this.CantidadBañosNNANormativa != -1) dataGraph3[1].data[this.Mes - 1] = this.CantidadBañosNNANormativa;
                    if (this.CantidadBañosNNAHombres != -1) dataGraph3[2].data[this.Mes - 1] = this.CantidadBañosNNAHombres;
                    if (this.CantidadBañosNNAMujeres != -1) dataGraph3[3].data[this.Mes - 1] = this.CantidadBañosNNAMujeres;
                    if (this.CantidadBañosNNAMixtos != -1) dataGraph3[4].data[this.Mes - 1] = this.CantidadBañosNNAMixtos;

                    if (this.CantidadDuchasNNAFuncionamiento != -1) dataGraph4[0].data[this.Mes - 1] = this.CantidadDuchasNNAFuncionamiento;
                    if (this.CantidadDuchasNNANormativa != -1) dataGraph4[1].data[this.Mes - 1] = this.CantidadDuchasNNANormativa;
                    if (this.CantidadDuchasNNAHombres != -1) dataGraph4[2].data[this.Mes - 1] = this.CantidadDuchasNNAHombres;
                    if (this.CantidadDuchasNNAMujeres != -1) dataGraph4[3].data[this.Mes - 1] = this.CantidadDuchasNNAMujeres;
                    if (this.CantidadDuchasNNAMixtas != -1) dataGraph4[4].data[this.Mes - 1] = this.CantidadDuchasNNAMixtas;
                }
            );

            GraficaIndicadorAnual(arrContenedores[0], opc, arrtitleStat[0], titleStat2, dataGraph1, coloresSeries1, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[1], opc, arrtitleStat[1], titleStat2, dataGraph2, coloresSeries2, "#EAEDED", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[2], opc, arrtitleStat[2], titleStat2, dataGraph3, coloresSeries3, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[3], opc, arrtitleStat[3], titleStat2, dataGraph4, coloresSeries4, "#EAEDED", dataUniResidencias);
        }
    });
    
}
function EjecutaConsultaEstadisticaAntecedentesSalud(institucion, proyecto, yearregistro, contenedor, opc, titleStat, titleStat2, dataUniResidencias) {


    var dataGraph1 = [
                     { name: 'NNA Inscritos en CESFAM', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA Inscritos con Enfermedad Crónica', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA Inscritos con Situación de Discapacidad', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph2 = [
                     { name: 'NNA con Problemática de Salud Mental con Diagnóstico', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA con Problemática de Salud Mental sin Diagnóstico', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph3 = [
                     { name: 'NNA a la espera de Trasplante', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA Trasplantados', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph4 = [
                     { name: 'NNA recibiendo tratamiento farmacológico', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA con Problemática de Salud en Tratamiento', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph5 = [
                     { name: 'NNA con Consumo sólo de Drogas', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA con consumo sólo de Alcohol', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA con consumo de Alcohol y Drogas', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph6 = [{ name: 'Adolescentes Embarazadas con controles médicos al día', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];


    var arrContenedores = contenedor.split('|');
    var arrtitleStat = titleStat.split('|');

    coloresSeries1 = ["#D35400", "#154360", "#A569BD"];
    coloresSeries2 = ["#C0392B", "#154360"];
    coloresSeries3 = ["#C0392B", "#154360"]; 
    coloresSeries4 = ["#C0392B", "#154360"];
    coloresSeries5 = ["#C0392B", "#154360"];
    coloresSeries6 = ["#C0392B"];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerDatosEstadisticosPorTipoAntecedentesSalud",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (this.NNACesfam != -1) dataGraph1[0].data[this.Mes - 1] = this.NNACesfam;
                    if (this.NNACronicos != -1) dataGraph1[1].data[this.Mes - 1] = this.NNACronicos;
                    if (this.NNADiscapacitados != -1) dataGraph1[2].data[this.Mes - 1] = this.NNADiscapacitados;

                    if (this.NNASaludMentalDiagnostico != -1) dataGraph2[0].data[this.Mes - 1] = this.NNASaludMentalDiagnostico;
                    if (this.NNASaludMental != -1) dataGraph2[1].data[this.Mes - 1] = this.NNASaludMental;

                    if (this.NNAEsperaTransplante != -1) dataGraph3[0].data[this.Mes - 1] = this.NNAEsperaTransplante;
                    if (this.NNATransplantados != -1) dataGraph3[1].data[this.Mes - 1] = this.NNATransplantados;

                    if (this.NNAMedicamento != -1) dataGraph4[0].data[this.Mes - 1] = this.NNAMedicamento;
                    if (this.NNATratamiento != -1) dataGraph4[1].data[this.Mes - 1] = this.NNATratamiento;

                    if (this.NNADrogas != -1) dataGraph5[0].data[this.Mes - 1] = this.NNADrogas;
                    if (this.NNAConsumoAlcohol != -1) dataGraph5[1].data[this.Mes - 1] = this.NNAConsumoAlcohol;
                    if (this.NNAConsumoAlcoholDrogas != -1) dataGraph5[2].data[this.Mes - 1] = this.NNAConsumoAlcoholDrogas;

                    if (this.AdolecentesEmbarazadas != -1) dataGraph6[0].data[this.Mes - 1] = this.AdolecentesEmbarazadas;

                }
            );

            GraficaIndicadorAnual(arrContenedores[0], opc, arrtitleStat[0], titleStat2, dataGraph1, coloresSeries1, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[1], opc, arrtitleStat[1], titleStat2, dataGraph2, coloresSeries2, "#EAEDED", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[2], opc, arrtitleStat[2], titleStat2, dataGraph3, coloresSeries3, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[3], opc, arrtitleStat[3], titleStat2, dataGraph4, coloresSeries4, "#EAEDED", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[4], opc, arrtitleStat[4], titleStat2, dataGraph5, coloresSeries5, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[5], opc, arrtitleStat[5], titleStat2, dataGraph6, coloresSeries6, "#EAEDED", dataUniResidencias);
        }
    });

}
function EjecutaConsultaEstadisticaAntecedentesEducacion(institucion, proyecto, yearregistro, contenedor, opc, titleStat, titleStat2, dataUniResidencias) {

    var dataGraph1 = [
                     { name: 'NNA matriculados', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA con Matrícula Cancelada', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph2 = [
                     { name: 'NNA que si asisten a Establecimiento Educacional', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA que no asisten a Establecimiento Educacional', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph3 = [
                     { name: 'NNA con Retraso o Rezago Escolar', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA que Asiste a Educación Diferencial', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph4 = [
                     { name: 'NNA que Asiste a Educación de Nivelación de Estudios', data: [null, null, null, null, null, null, null, null, null, null, null, null] },
                     { name: 'NNA inscritos para exámenes libres', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var arrContenedores = contenedor.split('|');
    var arrtitleStat = titleStat.split('|');

    coloresSeries1 = ["#D35400", "#154360"];
    coloresSeries2 = ["#C0392B", "#154360"];
    coloresSeries3 = ["#C0392B", "#154360"];
    coloresSeries4 = ["#C0392B", "#154360"];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerDatosEstadisticosPorTipoAntecedentesEducacion",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (this.NNAMatriculados != -1) dataGraph1[0].data[this.Mes - 1] = this.NNAMatriculados;
                    if (this.NNAMatriculaCancelada != -1) dataGraph1[1].data[this.Mes - 1] = this.NNAMatriculaCancelada;

                    if (this.NNAEducacion != -1) dataGraph2[0].data[this.Mes - 1] = this.NNAEducacion;
                    if (this.NNAEducacionNo != -1) dataGraph2[1].data[this.Mes - 1] = this.NNAEducacionNo;

                    if (this.NNARetrasoEscolar != -1) dataGraph3[0].data[this.Mes - 1] = this.NNARetrasoEscolar;
                    if (this.NNAEducaionEspecial != -1) dataGraph3[1].data[this.Mes - 1] = this.NNAEducaionEspecial;

                    if (this.NNANivelacion != -1) dataGraph4[0].data[this.Mes - 1] = this.NNANivelacion;
                    if (this.NNAExamenesLibres != -1) dataGraph4[1].data[this.Mes - 1] = this.NNAExamenesLibres;

                }
            );

            GraficaIndicadorAnual(arrContenedores[0], opc, arrtitleStat[0], titleStat2, dataGraph1, coloresSeries1, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[1], opc, arrtitleStat[1], titleStat2, dataGraph2, coloresSeries2, "#EAEDED", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[2], opc, arrtitleStat[2], titleStat2, dataGraph3, coloresSeries3, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[3], opc, arrtitleStat[3], titleStat2, dataGraph4, coloresSeries4, "#EAEDED", dataUniResidencias);
        }
    });

}
function EjecutaConsultaEstadisticaAntecedentesAlimentacion(institucion, proyecto, yearregistro, contenedor, opc, titleStat, titleStat2, dataUniResidencias) {

    var dataGraph1 = [{ name: 'Comidas Entregadas de Lunes a Viernes', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var dataGraph2 = [{ name: 'Comidas Entregadas Sábado, Domingo y Festivos', data: [null, null, null, null, null, null, null, null, null, null, null, null] }];

    var arrContenedores = contenedor.split('|');
    var arrtitleStat = titleStat.split('|');

    coloresSeries1 = ["#D35400"];
    coloresSeries2 = ["#C0392B"];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerDatosEstadisticosPorTipoAntecedentesAlimentacion",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    if (this.CantidadComidas != -1) dataGraph1[0].data[this.Mes - 1] = this.CantidadComidas;
                    if (this.CantidadComidasFeriados != -1) dataGraph2[0].data[this.Mes - 1] = this.CantidadComidasFeriados;
                }
            );

            GraficaIndicadorAnual(arrContenedores[0], opc, arrtitleStat[0], titleStat2, dataGraph1, coloresSeries1, "#FFF", dataUniResidencias);
            GraficaIndicadorAnual(arrContenedores[1], opc, arrtitleStat[1], titleStat2, dataGraph2, coloresSeries2, "#EAEDED", dataUniResidencias);
        }
    });

}

function GenerarEstadisticasAntecedentesGenerales() {
        $("#TBL_antecedentes_generales").html("");

        $("#TBL_antecedentes_generales").html(
            '<div id="containerPoblacion" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerPlazasConvenidasconSENAME" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerOtrasPlazasNoConvenidasconSENAME" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'+
            '<div id="containerTotalNNAPresentes" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'+
            '<div id="containerTotalNNA_AcercamientoFamilar" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerTotaldeResidentesMayoresEdad" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerAbandonodeSistema" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerHospitalizados" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerTotal_NNAingresadosArtículo80Bis" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerTotal_NNAcompletoAbandonoDecretadoporJuez" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerTotal_AdolescentesHijosRecienNacidosLactantes" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerTotal_NNASusceptiblesAdoptados" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerTotal_NNAconEnlaceAdopcion" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
            '<div id="containerTotal_NNAcausaIniciadaSusceptibilidadAdopcion" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'
        );

        /*
        TIPOS DE DESPLIEGUE PARA ANTECEDENTES GENERALES
        @tipo:
        1 = Poblacion
        2 = Plazas Convenidas
        3 = Otras Plazas
        4 = Total Presentes
        5 = Total Acercamiento
        6 = Total Mayores
        7 = Abandono Sistema (Fuga)
        8 = Hospitalizados
        9 = Total 80 Bis
        10 = Total Completo Abandono
        11 = Adolescentes con Hijos
        12 = Total NNA suceptibles a ser adoptados (con sentencia)
        13 = Total NNA con enlace de adopcion
        14 = Total NNA con causa iniciada (sin sentencia)
        */

        var institucion = $("#cmbInstitucion2").val();
        var proyecto = $("#cmbProyecto2").val();
        var yearregistro = $("#cmbYearRegistro").val();

        var gls_institucion = "INSTITUCIÓN: TODAS";
        var gls_proyecto = "RESIDENCIA: TODAS";

        if (institucion != "0") gls_institucion = $("#cmbInstitucion2 option:selected").text();
        if (proyecto != "0") gls_proyecto = $("#cmbProyecto2 option:selected").text();

        var titleStat2 = gls_institucion + " - " + gls_proyecto;

        /*
        CAMPOS PARA CALCULAR UNIVERSO
        - ProyectosFicha
        - TotalProyectos 
        - Mes
        */
        var dataUniResidencias = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];

        $.ajax({
            type: "POST",
            url: "FichaResidencialHistorial.aspx/ObtenerProyectosConFicha",
            data: "{" +
                  "'codinstitucion': '" + institucion + "'," +
                  "'codproyecto': '" + proyecto + "'," +
                  "'yearRegistro': '" + yearregistro + "'" +
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
            //alert("What!!!");
            if (r.d != "") {
                $.each(r.d,
                    function () {
                        //alert(this.Mes + " -- " + this.ProyectosFicha + " -- " + this.TotalProyectos)
                        dataUniResidencias[this.Mes - 1][0] = this.ProyectosFicha;
                        dataUniResidencias[this.Mes - 1][1] = this.TotalProyectos;
                    }
                );
            }
            //(1)--------------------------------
            //   Población Vigente
            var titleStat = "POBLACIÓN VIGENTE - " + yearregistro;
            var contenedor = 'containerPoblacion';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 1, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#FFF', dataUniResidencias);

            //(2)--------------------------------
            //   Plazas Convenidas con SENAME (En caso de tener subvención)
            titleStat = "PLAZAS CONVENIDAS CON SENAME (En caso de tener subvención) - " + yearregistro;
            contenedor = 'containerPlazasConvenidasconSENAME';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 2, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#EAEDED', dataUniResidencias);


            //(3)--------------------------------
            //   Otras Plazas no subvencionadas por Sename
            titleStat = "OTRAS PLAZAS NO SUBVENCIONADAS POR SENAME - " + yearregistro;
            contenedor = 'containerOtrasPlazasNoConvenidasconSENAME';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 3, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#FFF', dataUniResidencias);

            //(4)--------------------------------
            //   Otras Plazas no subvencionadas por Sename
            titleStat = "TOTAL NNA PRESENTES - " + yearregistro;
            contenedor = 'containerTotalNNAPresentes';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 4, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#EAEDED', dataUniResidencias);

            //(5)--------------------------------
            //   Total NNA en Acercamiento Familar 		
            titleStat = "TOTAL NNA EN ACERCAMIENTO FAMILAR - " + yearregistro;
            contenedor = 'containerTotalNNA_AcercamientoFamilar';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 5, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#FFF', dataUniResidencias);
            //(6)--------------------------------
            //   Total de Residentes Mayores de Edad 			
            titleStat = "TOTAL DE RESIDENTES MAYORES DE EDAD - " + yearregistro;
            contenedor = 'containerTotaldeResidentesMayoresEdad';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 6, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#EAEDED', dataUniResidencias);

            //(7)--------------------------------
            //   Abandono de Sistema 			
            titleStat = "ABANDONO DE SISTEMA - " + yearregistro;
            contenedor = 'containerAbandonodeSistema';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 7, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#FFF', dataUniResidencias);

            //(8)--------------------------------
            //   Hospitalizados 			
            titleStat = "HOSPITALIZADOS - " + yearregistro;
            contenedor = 'containerHospitalizados';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 8, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#EAEDED', dataUniResidencias);

            //(9)--------------------------------
            //   Total NNA ingresados con Artículo 80 Bis
            titleStat = "TOTAL NNA INGRESADOS CON ARTÍCULO 80 BIS - " + yearregistro;
            contenedor = 'containerTotal_NNAingresadosArtículo80Bis';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 9, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#FFF', dataUniResidencias);

            //(10)--------------------------------
            //   Total NNA en completo abandono decretado por el o la Juez(a) (especificar) 			
            titleStat = "TOTAL NNA EN COMPLETO ABANDONO DECRETADO POR EL O LA JUEZ(A) - " + yearregistro;
            contenedor = 'containerTotal_NNAcompletoAbandonoDecretadoporJuez';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 10, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#EAEDED', dataUniResidencias);

            //(11)--------------------------------
            //   Total de adolescentes con hijos recién nacidos o lactantes (especificar)
            titleStat = "TOTAL DE ADOLESCENTES CON HIJOS RECIÉN NACIDOS O LACTANTES - " + yearregistro;
            contenedor = 'containerTotal_AdolescentesHijosRecienNacidosLactantes';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 11, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#FFF', dataUniResidencias);

            //(12)--------------------------------
            //   Total de NNA declarados susceptibles de ser adoptados (con sentencia) 			
            titleStat = "TOTAL DE NNA DECLARADOS SUSCEPTIBLES DE SER ADOPTADOS (CON SENTENCIA) - " + yearregistro;
            contenedor = 'containerTotal_NNASusceptiblesAdoptados';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 12, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#EAEDED', dataUniResidencias);

            //(13)--------------------------------
            //   Total de NNA con enlace de adopción (considerar sólo población de NNA declarados susceptible de ser adoptados) 			
            titleStat = "TOTAL DE NNA CON ENLACE DE ADOPCIÓN - " + yearregistro;
            contenedor = 'containerTotal_NNAconEnlaceAdopcion';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 13, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#FFF', dataUniResidencias);

            //(14)--------------------------------
            //   Total de NNA con causa iniciada por susceptibilidad de adopción (sin sentencia)
            titleStat = "TOTAL DE NNA CON CAUSA INICIADA POR SUSCEPTIBILIDAD DE ADOPCIÓN - " + yearregistro;
            contenedor = 'containerTotal_NNAcausaIniciadaSusceptibilidadAdopcion';
            $("#" + contenedor).css("display", "block");
            EjecutaConsultaEstadisticaAntecedentesGenerales(institucion, proyecto, yearregistro, 14, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#A569BD', '#2980B9'], '#EAEDED', dataUniResidencias);

        });

 
}
function GenerarEstadisticasAntecedentesDotacionPersonal() {
    $("#TBL_antecedentes_generales").html("");
    $("#TBL_antecedentes_generales").html(
        '<div id="containerDirector" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerAsistenteSocial" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerPsicologo" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerEnfermero" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerAuxiliarEnfermeria" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerMedico" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerPsiquiatra" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerTerapeutaOcupacional" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerKinesiologo" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerNutricionista" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerFonoaudiologo" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerProfesorEducacionFisica" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerPsicopedagogo" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerEducadorParvulos" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +

        '<div id="containerEducadorTratoDirecto" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerManipuladorAlimentos" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerApoyoAdministrativo" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerPersonalAseo" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerPersonalLavanderia" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerMonitoresTalleristas" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerAlumnosPractica" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerApoyoVoluntario" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerDotacionOtros" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerPersonalLicenciaMedica" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerPersonalLicenciaConSuplente" style="min-width: 310px; height: 400px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'
    );

    /*
    TIPOS DE DESPLIEGUE PARA ANTECEDENTES DOTACION PERSONAL
    @tipo:
    15 = Director(a)
    16 = Asistente Social:
    17 = Psicólogo
    18 = Enfermero(a)
    19 = Auxiliar de Enfermería
    20 = Médico
    21 = Psiquiatra
    22 = Terapeuta Ocupacional
    23 = Kinesiólogo
    24 = Nutricionista
    25 = Fonoaudiólogo
    26 = Profesor(a) de Educación Física
    27 = Psicopedagogo(a)
    28 = Educador(a) de Párvulos
    29 = Educador(a) de trato directo
    30 = Manipulador(a) de Alimentos
    31 = Apoyo Administrativo
    32 = Personal de Aseo
    33 = Personal de Lavandería
    34 = Monitores Talleristas
    35 = Alumnos en Práctica (Especificar en Observación)
    36 = Apoyo Voluntario (Especificar en Observación)
    37 = Otros (Especificar en Observaciones)
    38 = ¿Personal con Licencia Médica?
    39 = Personal con Licencia ¿Cuenta con Suplente?
    */

    var institucion = $("#cmbInstitucion2").val();
    var proyecto = $("#cmbProyecto2").val();
    var yearregistro = $("#cmbYearRegistro").val();

    var gls_institucion = "INSTITUCIÓN: TODAS";
    var gls_proyecto = "RESIDENCIA: TODAS";

    if (institucion != "0") gls_institucion =  $("#cmbInstitucion2 option:selected").text();
    if (proyecto != "0") gls_proyecto = $("#cmbProyecto2 option:selected").text();

    var titleStat2 = gls_institucion + " - " + gls_proyecto;

    var dataUniResidencias = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerProyectosConFicha",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    dataUniResidencias[this.Mes - 1][0] = this.ProyectosFicha;
                    dataUniResidencias[this.Mes - 1][1] = this.TotalProyectos;
                }
            );
        }

        //(1)--------------------------------
        //   Director(a)
        var titleStat = "DOTACIÓN DE DIRECTORES DE RESIDENCIAS - " + yearregistro;
        var contenedor = 'containerDirector';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 15, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);


        //(2)--------------------------------
        //   Asistente Social:
        titleStat = "DOTACIÓN DE ASISTENTES SOCIALES - " + yearregistro;
        contenedor = 'containerAsistenteSocial';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 16, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);


        //(3)--------------------------------
        //   Psicologo
        titleStat = "DOTACIÓN DE PSICÓLOGOS - " + yearregistro;
        contenedor = 'containerPsicologo';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 17, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(4)--------------------------------
        //   Enfermero(a)
        titleStat = "DOTACIÓN DE ENFERMEROS(AS) - " + yearregistro;
        contenedor = 'containerEnfermero';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 18, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(5)--------------------------------
        //   Auxiliar de Enfermería
        titleStat = "DOTACIÓN DE AUXILIARES DE ENFERMERÍA - " + yearregistro;
        contenedor = 'containerAuxiliarEnfermeria';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 19, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(6)--------------------------------
        //   Médico
        titleStat = "DOTACIÓN DE MÉDICOS - " + yearregistro;
        contenedor = 'containerMedico';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 20, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(7)--------------------------------
        //   Psiquiatra
        titleStat = "DOTACIÓN DE PSIQUIATRAS - " + yearregistro;
        contenedor = 'containerPsiquiatra';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 21, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(8)--------------------------------
        //  Terapeuta Ocupacional
        titleStat = "DOTACIÓN DE TERAPEUTAS OCUPACIONALES - " + yearregistro;
        contenedor = 'containerTerapeutaOcupacional';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 22, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(9)--------------------------------
        //   Kinesiólogo
        titleStat = "DOTACIÓN DE KINESIÓLOGOS - " + yearregistro;
        contenedor = 'containerKinesiologo';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 23, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(10)--------------------------------
        //   Nutricionista
        titleStat = "DOTACIÓN DE NUTRICIONISTAS - " + yearregistro;
        contenedor = 'containerNutricionista';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 24, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(11)--------------------------------
        //   Fonoaudiólogo
        titleStat = "DOTACIÓN DE FONOAUDIÓLOGOS(AS) - " + yearregistro;
        contenedor = 'containerFonoaudiologo';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 25, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(12)--------------------------------
        //  Profesor(a) de Educación Física
        titleStat = "DOTACIÓN DE PROFESORES(AS) DE EDUCACIÓN FÍSICA - " + yearregistro;
        contenedor = 'containerProfesorEducacionFisica';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 26, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(13)--------------------------------
        //  Psicopedagogo(a)
        titleStat = "DOTACIÓN DE PSICOPEDAGOGOS(AS) - " + yearregistro;
        contenedor = 'containerPsicopedagogo';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 27, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(14)--------------------------------
        //   Educador(a) de Párvulos
        titleStat = "DOTACIÓN DE EDUCADORES(AS) DE PÁRVULOS - " + yearregistro;
        contenedor = 'containerEducadorParvulos';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 28, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(15)--------------------------------
        //   Educador(a) de trato directo
        titleStat = "DOTACIÓN DE EDUCADORES(AS) DE TRATO DIRECTO - " + yearregistro;
        contenedor = 'containerEducadorTratoDirecto';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 29, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(16)--------------------------------
        //   Manipulador(a) de Alimentos
        titleStat = "DOTACIÓN DE MANIPULADORES(AS) DE ALIMENTOS - " + yearregistro;
        contenedor = 'containerManipuladorAlimentos';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 30, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(17)--------------------------------
        //   Apoyo Administrativo
        titleStat = "DOTACIÓN DE APOYO ADMINISTRATIVO - " + yearregistro;
        contenedor = 'containerApoyoAdministrativo';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 31, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(18)--------------------------------
        //   Personal de Aseo
        titleStat = "DOTACIÓN DE PERSONAL DE ASEO - " + yearregistro;
        contenedor = 'containerPersonalAseo';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 32, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(19)--------------------------------
        //   Personal de Lavandería
        titleStat = "DOTACIÓN DE PERSONAL DE LAVANDERÍA - " + yearregistro;
        contenedor = 'containerPersonalLavanderia';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 33, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(20)--------------------------------
        //   Monitores Talleristas
        titleStat = "DOTACIÓN DE MONITORES TALLERISTAS - " + yearregistro;
        contenedor = 'containerMonitoresTalleristas';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 34, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(21)--------------------------------
        //   Alumnos en Práctica
        titleStat = "DOTACIÓN DE ALUMNOS EN PRÁCTICA - " + yearregistro;
        contenedor = 'containerAlumnosPractica';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 35, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(22)--------------------------------
        //   Apoyo Voluntario
        titleStat = "DOTACIÓN DE APOYO VOLUNTARIO - " + yearregistro;
        contenedor = 'containerApoyoVoluntario';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 36, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(23)--------------------------------
        //   Otros
        titleStat = "DOTACIÓN DE PERSONAL (OTROS) - " + yearregistro;
        contenedor = 'containerDotacionOtros';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 37, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

        //(24)--------------------------------
        //   ¿Personal con Licencia Médica?
        titleStat = "DOTACIÓN DE PERSONAL CON LICENCIA MÉDICA - " + yearregistro;
        contenedor = 'containerPersonalLicenciaMedica';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 38, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#EAEDED', dataUniResidencias);

        //(25)--------------------------------
        //   Personal con Licencia ¿Cuenta con Suplente?
        titleStat = "DOTACIÓN DE PERSONAL CON LICENCIA QUE CUENTA CON SUPLENTE - " + yearregistro;
        contenedor = 'containerPersonalLicenciaConSuplente';
        $("#" + contenedor).css("display", "block");
        EjecutaConsultaEstadisticaAntecedentesDotacionPersonal(institucion, proyecto, yearregistro, 39, contenedor, tipoEvolucion, titleStat, titleStat2, ['#CB4335', '#2980B9'], '#FFF', dataUniResidencias);

    });

}
function GenerarEstadisticasAntecedentesInfraestructura() {
    $("#TBL_antecedentes_generales").html("");
    $("#TBL_antecedentes_generales").html(
        '<div id="containerInfraestructura1" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'+
        '<div id="containerInfraestructura2" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'+
        '<div id="containerInfraestructura3" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'+
        '<div id="containerInfraestructura4" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'
    );

    /*
    TIPOS DE DESPLIEGUE PARA ANTECEDENTES DOTACION PERSONAL
    @tipo:
        GRUPO 1
            Oficinas Administrativas 	
            Sala de Reuniones 	
            Sala de Recepción 	
            Espacio de Visitas 	
            Sala Multiuso para Talleres 	
            Sala de Estar/Living 	
            Unidad de Salud 	
            Espacios Recreacionales 	
            Áreas Verdes 	
            Cocina 	
            Comedor 	
            Lavandería 	
            Baños para Público 	

        GRUPO 2
            Dormitorio NNA
            Camas NNA 	
            Closet, Lockers 	
        
        GRUPO 3
            Baños NNA en Funcionamiento 	
            Baños NNA de acuerdo a Normativa 	
            Baños NNA de hombres 	
            Baños NNA de mujeres 	
            Baños NNA mixtos 	

        GRUPO 4
            Duchas para NNA en Funcionamiento 	
            Duchas para NNA de acuerdo a Normativa 	
            Duchas para NNA de hombres 	
            Duchas para NNA de mujeres 	
            Duchas para NNA mixtas
    */

    var institucion = $("#cmbInstitucion2").val();
    var proyecto = $("#cmbProyecto2").val();
    var yearregistro = $("#cmbYearRegistro").val();

    var gls_institucion = "INSTITUCIÓN: TODAS";
    var gls_proyecto = "RESIDENCIA: TODAS";

    if (institucion != "0") gls_institucion = $("#cmbInstitucion2 option:selected").text();
    if (proyecto != "0") gls_proyecto = $("#cmbProyecto2 option:selected").text();

    var titleStat2 = gls_institucion + " - " + gls_proyecto;

    var dataUniResidencias = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerProyectosConFicha",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    //alert(this.Mes + " -- " + this.ProyectosFicha + " -- " + this.TotalProyectos)
                    dataUniResidencias[this.Mes - 1][0] = this.ProyectosFicha;
                    dataUniResidencias[this.Mes - 1][1] = this.TotalProyectos;
                }
            );
        }

        //(1)--------------------------------
        //   
        var titleStat1_1 = "INFRAESTRUCTURA SECCIÓN 1 - " + yearregistro;
        var contenedor1 = 'containerInfraestructura1';
        $("#" + contenedor1).css("display", "block");

        var titleStat1_2 = "INFRAESTRUCTURA SECCIÓN 2 - " + yearregistro;
        var contenedor2 = 'containerInfraestructura2';
        $("#" + contenedor2).css("display", "block");

        var titleStat1_3 = "INFRAESTRUCTURA SECCIÓN 3 - " + yearregistro;
        var contenedor3 = 'containerInfraestructura3';
        $("#" + contenedor3).css("display", "block");

        var titleStat1_4 = "INFRAESTRUCTURA SECCIÓN 4 - " + yearregistro;
        var contenedor4 = 'containerInfraestructura4';
        $("#" + contenedor4).css("display", "block");

        var contenedor = contenedor1 + "|" + contenedor2 + "|" + contenedor3 + "|" + contenedor4;
        var titleStat1 = titleStat1_1 + "|" + titleStat1_2 + "|" + titleStat1_3 + "|" + titleStat1_4;

        EjecutaConsultaEstadisticaAntecedentesInfraestructura(institucion, proyecto, yearregistro, contenedor, tipoEvolucion, titleStat1, titleStat2, dataUniResidencias);
    });

}
function GenerarEstadisticasAntecedentesSalud() {
    $("#TBL_antecedentes_generales").html("");
    $("#TBL_antecedentes_generales").html(
        '<div id="containerSalud1" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerSalud2" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerSalud3" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerSalud4" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerSalud5" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerSalud6" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' 
    );

    /*
    TIPOS DE DESPLIEGUE PARA ANTECEDENTES SALUD

    GRUPO 1
        N° de NNA Inscritos en CESFAM 	
        N° de NNA Inscritos con Enfermedad Crónica 	
        N° de NNA Inscritos con Situación de Discapacidad 	

    GRUPO 2
        N° de NNA con Problemática de Salud Mental con Diagnóstico 	
        N° de NNA con Problemática de Salud Mental sin Diagnóstico 	
        
    GRUPO 3
        N° de NNA a la espera de Trasplante 	
        N° de NNA Trasplantados 	

    GRUPO 4
        N° de NNA recibiendo tratamiento farmacológico 	
        N° de NNA con Problemática de Salud en Tratamiento 	

    GRUPO 5
        N° de NNA con Consumo de Drogas 	
        N° de NNA con consumo de Alcohol

    GRUPO 6
        En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?

    */

    var institucion = $("#cmbInstitucion2").val();
    var proyecto = $("#cmbProyecto2").val();
    var yearregistro = $("#cmbYearRegistro").val();

    var gls_institucion = "INSTITUCIÓN: TODAS";
    var gls_proyecto = "RESIDENCIA: TODAS";

    if (institucion != "0") gls_institucion = $("#cmbInstitucion2 option:selected").text();
    if (proyecto != "0") gls_proyecto = $("#cmbProyecto2 option:selected").text();

    var titleStat2 = gls_institucion + " - " + gls_proyecto;


    var dataUniResidencias = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerProyectosConFicha",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    //alert(this.Mes + " -- " + this.ProyectosFicha + " -- " + this.TotalProyectos)
                    dataUniResidencias[this.Mes - 1][0] = this.ProyectosFicha;
                    dataUniResidencias[this.Mes - 1][1] = this.TotalProyectos;
                }
            );
        }
        //(1)--------------------------------
        //   
        var titleStat1_1 = "SALUD SECCIÓN 1 - " + yearregistro;
        var contenedor1 = 'containerSalud1';
        $("#" + contenedor1).css("display", "block");

        var titleStat1_2 = "SALUD SECCIÓN 2 - " + yearregistro;
        var contenedor2 = 'containerSalud2';
        $("#" + contenedor2).css("display", "block");

        var titleStat1_3 = "SALUD  SECCIÓN 3 - " + yearregistro;
        var contenedor3 = 'containerSalud3';
        $("#" + contenedor3).css("display", "block");

        var titleStat1_4 = "SALUD SECCIÓN 4 - " + yearregistro;
        var contenedor4 = 'containerSalud4';
        $("#" + contenedor4).css("display", "block");

        var titleStat1_5 = "SALUD SECCIÓN 5 - " + yearregistro;
        var contenedor5 = 'containerSalud5';
        $("#" + contenedor5).css("display", "block");

        var titleStat1_6 = "SALUD SECCIÓN 6 - " + yearregistro;
        var contenedor6 = 'containerSalud6';
        $("#" + contenedor6).css("display", "block");


        var contenedor = contenedor1 + "|" + contenedor2 + "|" + contenedor3 + "|" + contenedor4 + "|" + contenedor5 + "|" + contenedor6;
        var titleStat1 = titleStat1_1 + "|" + titleStat1_2 + "|" + titleStat1_3 + "|" + titleStat1_4 + "|" + titleStat1_5 + "|" + titleStat1_6;

        EjecutaConsultaEstadisticaAntecedentesSalud(institucion, proyecto, yearregistro, contenedor, tipoEvolucion, titleStat1, titleStat2, dataUniResidencias);
    });

}
function GenerarEstadisticasAntecedentesEducacion() {
    $("#TBL_antecedentes_generales").html("");
    $("#TBL_antecedentes_generales").html(
        '<div id="containerEducacion1" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerEducacion2" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerEducacion3" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerEducacion4" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'
    );

    /*
    TIPOS DE DESPLIEGUE PARA ANTECEDENTES EDUCACIÓN
    GRUPO 1
        N° de NNA matriculados
        N° de NNA con Matrícula Cancelada 	

    GRUPO 2
        N° de NNA que si asisten a Establecimiento Educacional 	
        N° de NNA que no asisten a Establecimiento Educacional 	

    GRUPO 3
        N° de NNA con Retraso Escolar 	
        N° de NNA que Asiste a Educación Diferencial 	

    GRUPO 4
        N° de NNA que Asiste a Educación de Nivelación de Estudios 	
        N° de NNA inscritos para exámenes libres
    */

    var institucion = $("#cmbInstitucion2").val();
    var proyecto = $("#cmbProyecto2").val();
    var yearregistro = $("#cmbYearRegistro").val();

    var gls_institucion = "INSTITUCIÓN: TODAS";
    var gls_proyecto = "RESIDENCIA: TODAS";

    if (institucion != "0") gls_institucion = $("#cmbInstitucion2 option:selected").text();
    if (proyecto != "0") gls_proyecto = $("#cmbProyecto2 option:selected").text();

    var titleStat2 = gls_institucion + " - " + gls_proyecto;

    var dataUniResidencias = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerProyectosConFicha",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    //alert(this.Mes + " -- " + this.ProyectosFicha + " -- " + this.TotalProyectos)
                    dataUniResidencias[this.Mes - 1][0] = this.ProyectosFicha;
                    dataUniResidencias[this.Mes - 1][1] = this.TotalProyectos;
                }
            );
        }
        //(1)--------------------------------
        //   
        var titleStat1_1 = "EDUCACIÓN SECCIÓN 1 - " + yearregistro;
        var contenedor1 = 'containerEducacion1';
        $("#" + contenedor1).css("display", "block");

        var titleStat1_2 = "EDUCACIÓN SECCIÓN 2 - " + yearregistro;
        var contenedor2 = 'containerEducacion2';
        $("#" + contenedor2).css("display", "block");

        var titleStat1_3 = "EDUCACIÓN  SECCIÓN 3 - " + yearregistro;
        var contenedor3 = 'containerEducacion3';
        $("#" + contenedor3).css("display", "block");

        var titleStat1_4 = "EDUCACIÓN SECCIÓN 4 - " + yearregistro;
        var contenedor4 = 'containerEducacion4';
        $("#" + contenedor4).css("display", "block");

        var contenedor = contenedor1 + "|" + contenedor2 + "|" + contenedor3 + "|" + contenedor4;
        var titleStat1 = titleStat1_1 + "|" + titleStat1_2 + "|" + titleStat1_3 + "|" + titleStat1_4;

        EjecutaConsultaEstadisticaAntecedentesEducacion(institucion, proyecto, yearregistro, contenedor, tipoEvolucion, titleStat1, titleStat2, dataUniResidencias);
    });

}
function GenerarEstadisticasAntecedentesAlimentacion() {
    $("#TBL_antecedentes_generales").html("");
    $("#TBL_antecedentes_generales").html(
        '<div id="containerAlimentacion1" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>' +
        '<div id="containerAlimentacion2" style="min-width: 310px; height: 700px; margin: 0 auto;margin-bottom:10px;display:none;"></div>'
    );

    /*
    TIPOS DE DESPLIEGUE PARA ANTECEDENTES ALIMENTACIÓN
    N° de Comidas Entregadas de Lunes a Viernes 	
    N° de Comidas Entregadas Sábado, Domingo y Festivos
    */

    var institucion = $("#cmbInstitucion2").val();
    var proyecto = $("#cmbProyecto2").val();
    var yearregistro = $("#cmbYearRegistro").val();

    var gls_institucion = "INSTITUCIÓN: TODAS";
    var gls_proyecto = "RESIDENCIA: TODAS";

    if (institucion != "0") gls_institucion = $("#cmbInstitucion2 option:selected").text();
    if (proyecto != "0") gls_proyecto = $("#cmbProyecto2 option:selected").text();

    var titleStat2 = gls_institucion + " - " + gls_proyecto;

    var dataUniResidencias = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];

    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/ObtenerProyectosConFicha",
        data: "{" +
              "'codinstitucion': '" + institucion + "'," +
              "'codproyecto': '" + proyecto + "'," +
              "'yearRegistro': '" + yearregistro + "'" +
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
        //alert("What!!!");
        if (r.d != "") {
            $.each(r.d,
                function () {
                    //alert(this.Mes + " -- " + this.ProyectosFicha + " -- " + this.TotalProyectos)
                    dataUniResidencias[this.Mes - 1][0] = this.ProyectosFicha;
                    dataUniResidencias[this.Mes - 1][1] = this.TotalProyectos;
                }
            );
        }
        //(1)--------------------------------
        //   
        var titleStat1_1 = "N° de Comidas Entregadas de Lunes a Viernes - " + yearregistro;
        var contenedor1 = 'containerAlimentacion1';
        $("#" + contenedor1).css("display", "block");

        var titleStat1_2 = "N° de Comidas Entregadas Sábado, Domingo y Festivos - " + yearregistro;
        var contenedor2 = 'containerAlimentacion2';
        $("#" + contenedor2).css("display", "block");

        var contenedor = contenedor1 + "|" + contenedor2;
        var titleStat1 = titleStat1_1 + "|" + titleStat1_2;

        EjecutaConsultaEstadisticaAntecedentesAlimentacion(institucion, proyecto, yearregistro, contenedor, tipoEvolucion, titleStat1, titleStat2, dataUniResidencias);
    });

}

function GraficaIndicadorAnual(contenedor, opc, titleStat, titleStat2, data, coloresSeries, bgColor, dataUniResidencias) {
    
    Highcharts.chart(contenedor, {
        chart: {
            borderColor: '#BEBEBE',
            borderWidth: 1,
            backgroundColor: bgColor,
            type: 'spline',
            zoomType: 'x',
            panning: true,
            panKey: 'shift'
        },
        colors: coloresSeries,
        title: {
            text: titleStat + ' - ' + titleStat2,
            style: {
                "color": "#2874A6",
                "fontSize": "12px"
            }
        },
        subtitle: {
            text: 'Origen: SENAME Analytics',
            style: {
                color: '#666666'
            }
        },
        xAxis: {
            categories: [
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun',
                'Jul',
                'Ago',
                'Sep',
                'Oct',
                'Nov',
                'Dic'
            ]
        },
        yAxis: {
            title: {
                text: 'Cantidad'
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 0,
            y: 100
        },

        tooltip: {
            formatter: function () {
                var s = '<b style="font-size:20px">' + CalculaMes(this.x) + '</b>';
                if (opc == 2) {
                    var k = 0;
                    var arrDotacion = [null, null];
                    $.each(this.points, function () {
                        s += '<br/>' + this.series.name + ': ' + PonerSepMiles(this.y);
                        arrDotacion[k] = this.y;
                        k++;
                    });
                    s += '<br/>Promedio Horas/semana: ' + (arrDotacion[0] / arrDotacion[1]).toFixed(1);
                    s += '<br/>' + '% del total de residencias: ' + (dataUniResidencias[CalculaIndiceMes(this.x)][0] * 100 / dataUniResidencias[CalculaIndiceMes(this.x)][1]).toFixed(2);
                    s += '<br/>' + 'residencias contabilizadas: ' + dataUniResidencias[CalculaIndiceMes(this.x)][0];
                    s += '<br/>' + 'total residencias: ' + dataUniResidencias[CalculaIndiceMes(this.x)][1];
                }
                else {
                    $.each(this.points, function () {
                        s += '<br/>' + this.series.name + ': ' + PonerSepMiles(this.y);
                    });
                    s += '<br/>' + '% del total de residencias: ' + (dataUniResidencias[CalculaIndiceMes(this.x)][0] * 100 / dataUniResidencias[CalculaIndiceMes(this.x)][1]).toFixed(2);
                    s += '<br/>' + 'residencias contabilizadas: ' + dataUniResidencias[CalculaIndiceMes(this.x)][0];
                    s += '<br/>' + 'total residencias: ' + dataUniResidencias[CalculaIndiceMes(this.x)][1];

                }
                return s;
            },
            shared: true,
            crosshairs: true,
            useHTML: true
        },
        plotOptions: {
            series: {
                label: {
                    enabled: false
                },
                animation: {
                    duration: 3000
                },
                connectNulls: true
            }
        },
        series: data
    });
}
function CalculaIndiceMes(opc) {
    var salida = 0;
    switch (opc) {
        case 'Ene':
            salida = 0;
            break;
        case 'Feb':
            salida = 1;
            break;
        case 'Mar':
            salida = 2;
            break;
        case 'Abr':
            salida = 3;
            break;
        case 'May':
            salida = 4;
            break;
        case 'Jun':
            salida = 5;
            break;
        case 'Jul':
            salida = 6;
            break;
        case 'Ago':
            salida = 7;
            break;
        case 'Sep':
            salida = 8;
            break;
        case 'Oct':
            salida = 9;
            break;
        case 'Nov':
            salida = 10;
            break;
        case 'Dec':
            salida = 11;
            break;
    }
    return salida;
}
function CalculaMes(opc) {
    var salida = "";
    switch(opc){
        case 'Ene':
            salida = "enero";
            break;
        case 'Feb':
            salida = "febrero";
            break;
        case 'Mar':
            salida = "marzo";
            break;
        case 'Abr':
            salida = "abril";
            break;
        case 'May':
            salida = "mayo";
            break;
        case 'Jun':
            salida = "junio";
            break;
        case 'Jul':
            salida = "julio";
            break;
        case 'Ago':
            salida = "agosto";
            break;
        case 'Sep':
            salida = "septiembre";
            break;
        case 'Oct':
            salida = "octubre";
            break;
        case 'Nov':
            salida = "noviembre";
            break;
        case 'Dec':
            salida = "diciembre";
            break;
    }
    return salida;
}
function PonerSepMiles(number) {
    return number.toLocaleString()
}
//COMPARACIÓN ENTRE FICHAS
function VerComparacionFichas() {
    $("#divFuncionesEstadisticasFicha").css("display", "none");
    $("#divListadoFichasXResponder").css("display", "none");
    $("#frmwork3").css("display", "none");
    $("#btnVolverListado3").css("display", "none");

    $("#frmwork4").css("display", "none");
    $("#btnVolverListado5").css("display", "none");

    $("#frmwork2").css("display", "none");
    $("#btnVolverListado4").css("display", "none");

    $("#frmwork7").css("display", "block");
    $("#btnVolverListado8").css("display", "block");

    $("#glsTimpoPromedio").html(" / COMPARACIÓN ENTRE FICHAS");
    LimpiarSeleccion();
}
function VolverFuncionesModuloStat() {
    $("#divFuncionesEstadisticasFicha").css("display", "block");
    $("#divListadoFichasXResponder").css("display", "block");

    $("#frmwork7").css("display", "none");
    $("#btnVolverListado8").css("display", "none");

    $("#frmwork3").css("display", "none");
    $("#btnVolverListado3").css("display", "none");

    $("#frmwork4").css("display", "none");
    $("#btnVolverListado5").css("display", "none");

    $("#frmwork5").css("display", "none");
    $("#btnVolverListado5").css("display", "none");
    $("#glsTimpoPromedio").html("");

    $("#cmbInstitucionCompare").val(0);
    CargaProyectosInstitucion3($("#cmbInstitucionCompare").val());
    
    //Reseteo busqueda previa al volver
    $("#divlistadoFichasCompareTBL").css("display", "none");
    ReseteaTBLListFichaResCompare();
    $("#divlistadoFichasCompareCtrl").css("display", "none");
    $("#divlistCanFichasCompareLbl").css("display", "none");
    $("#lbl_cantidadFichaResCompare").html("Fichas Residenciales:");
    $("#cantListaFichaResidencialCompare").val(10);
     
}
function BuscarFichasResidencialesCompare(numpagina, opcbsq) {

    var CodProyecto = $("#cmbProyectoCompare").val();
    var VPendiente = 1, VProceso = 1, VFinalizada = 1;
    var CantidadPag = 10;
    var totalRegistros = 0;

    var CodFichaFinal = 0;
    var CodFichaHijo = 0;
    var opcionLimite = "avanza";

    if ($("#cmbInstitucionCompare").val() == "0" || $("#cmbProyectoCompare").val() == "0") {
        MensajeINFO("<p style='font-size:14px;text-align:center;'>Para ejecutar la búsqueda de fichas a comparar debe seleccionar un proyecto residencial.</p>");
        return;
    }
    

    if (opcbsq == 'BSQGRAL0') {
        arrSeleccionados = [null, null];
        arrDatosSeleccionados = [null, null];
        opcbsq = 'BSQGRAL';
        $("#spanFichasSeleccionadas").html('<button class="btn btn-default disabled">Seleccionar dos fichas</button>');
    }

    document.getElementById("divMensajeBusquedaVaciaCompare").style.display = "none";
    if (opcbsq == "BSQGRAL") document.getElementById("paginadorFichaResCompare").style.display = "none";


    if (document.getElementById("divlistadoFichasCompareCtrl").style.display != "none") {
        CantidadPag = $("#cantListaFichaResidencialCompare").val();
    }

    ResetearIndicadoresBusquedaFichasCompare();

    var CodInstitucion = $("#cmbInstitucionCompare").val();

    var parametros1 = "{" +
                        "'CodProyecto':'" + CodProyecto + "'," +
                        "'CantidadPag':'" + CantidadPag + "'," +
                        "'IdUsuarioSenainfo':'" + IdUsuarioActualizacion + "'," +
                        "'CodInstitucion':'" + CodInstitucion + "'," +
                        "'numpagina':'" + numpagina + "'" +
                      "}";

    var parametros2 = "{" +
                        "'CodProyecto':'" + CodProyecto + "'," +
                        "'IdUsuarioSenainfo':'" + IdUsuarioActualizacion + "'," +
                        "'CodInstitucion':'" + CodInstitucion + "'" +
                      "}";

    //    alert("CodProyecto=" + CodProyecto + " | VPendiente=" + VPendiente + " | VProceso= " + VProceso + " | VFinalizada=" + VFinalizada + " | CodFichaFinal=" + CodFichaFinal + " | CodFichaHijo=" + CodFichaHijo + " | CantidadPag=" + CantidadPag);

    //Consulto el total de registros que se obtienen de la consulta y
    //rescato los registros por página de acuerdo al filtro indicado por el usuario, 
    //esto se ejecuta desde la función siguiente
    CalculaRegistrosTotalesFichaCompare(parametros1, parametros2, CantidadPag, opcbsq);
}
function ResetearIndicadoresBusquedaFichasCompare() {
    $("#divlistCanFichasCompareLbl").css("display", "none");
    $("#divlistadoFichasConCompareCtrl").css("display", "none");
    $("#lbl_cantidadFichaResCompare").html("");
    $("#tbl_listadoFichaCompare").css("display", "none");
}

function CalculaRegistrosTotalesFichaCompare(parametros1, parametros2, CantidadPag, opcbsq) {
    //Consulto el total de registros que se obtienen de la consulta
    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/BuscarFichasResidencialesTotal",
        data: parametros2,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        if (r.d != "") {
            $.each(r.d, function () {
                var totalRegistros = this.TotalRegistros;
                RegistrosFichaCompare(parametros1, totalRegistros, CantidadPag, opcbsq);
            });
        }
    });
}
function RegistrosFichaCompare(parametros, totalRegistros, CantidadPag, opcbsq) {
    var NombreInstitucion = "";
    var NombreProyecto = "";
    var CodFichaPadre = "";
    var FechaCeradaResidencia = "";
    var FechaActualizacionPJUD = "";
    var CorteTribunal = "";
    var NombreJuez = "";
    var Estado = "";
    var DiasEnTramite = 0;

    //Rescato los registros por página de acuerdo al filtro indicado por el usuario.
    $.ajax({
        type: "POST",
        url: "FichaResidencialHistorial.aspx/BuscarFichasResidenciales",
        data: parametros,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        document.getElementById("divlistadoFichasCompareTBL").style.display = "";
        var tblDestino = document.getElementById("tbl_listadoFichaCompare");
        var agregados = 1;
        ReseteaTBLListFichaResCompare();
        //alert("numpaginaSel:" + numpaginaSel + " -- opcbsq:" + opcbsq);
        if (r.d != "") {
            document.getElementById("tbl_listadoFichaCompare").style.display = "";

            //alert(r.d.length);
            $.each(r.d, function () {

                NombreInstitucion = this.NombreInstitucion;
                NombreProyecto = this.NombreProyecto;
                CodFicha = this.CodFicha;
                FechaActualizacion = this.FechaActualizacion;
                usuarioregistro = this.usuarioregistro;
                Estado = this.Estado;

                var rowCount2 = tblDestino.rows.length;
                var row = tblDestino.insertRow(rowCount2);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);


                row.className = "text-center odd";
                row.dataset.codigos = this.CodProyecto + "-" + this.CodFicha;
                row.role = "row";

                cell1.innerHTML = NombreInstitucion;

                cell2.innerHTML = NombreProyecto;

                cell3.innerHTML = CodFicha;

                cell4.innerHTML = FechaActualizacion;

                cell5.innerHTML = usuarioregistro;

                cell6.innerHTML = Estado;
                //MARCAR SI ESTA SELECCIONADA
                if( RevisarFichaSeleccionada(CodFicha) ){
                    uncheckDisplay = "none";
                    checkDisplay = "block";
                }
                else{
                    uncheckDisplay = "block";
                    checkDisplay = "none";
                }
                cell7.innerHTML = "<i class='fa fa-square-o' aria-hidden='true' id='uncheckFR_" + agregados + "' data-institucionproyecto='" + NombreInstitucion + "|" + NombreProyecto + "|" + agregados + "' style='cursor:pointer;color:#8f9090;display:"+uncheckDisplay+";font-size:24px;' onclick='SeleccionarRF(0," + agregados + "," + this.CodProyecto + ","+ this.CodFicha + ", this);'></i><i class='fa fa-check-square-o' aria-hidden='true' id='checkFR_" + agregados + "' data-institucionproyecto='" + NombreInstitucion + "|" + NombreProyecto + "|" + agregados + "'  style='cursor:pointer;color:#229954;display:"+checkDisplay+";font-size:24px;' onclick='SeleccionarRF(1," + agregados + "," + this.CodProyecto + ","  + this.CodFicha + ", this);'></i>";
                agregados++;
            });

            document.getElementById("divlistCanFichasCompareLbl").style.display = "";
            document.getElementById("lbl_cantidadFichaResCompare").innerHTML = "Fichas Residenciales :" + totalRegistros;
            totalRegistrosBSQ = totalRegistros;

            document.getElementById("divlistadoFichasCompareCtrl").style.display = "";

            //alert(totalRegistros + " ---- " + CantidadPag + " ----" + opcbsq);
            if (parseInt(totalRegistros, 10) > parseInt(CantidadPag, 10)) {

                if (opcbsq == "BSQGRAL") {
                    var paginas = ~~(parseInt(totalRegistros, 10) / parseInt(CantidadPag, 10)) + 1;
                    var paginasLink = "";
                    //alert("paginas:" + paginas);

                    for (var k = 1; k <= paginas; k++) {
                        if (k == numpaginaSel)
                            valActive = "active";
                        else
                            valActive = "";
                        paginasLink = paginasLink + '<li class="paginate_button ' + valActive + '"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="1" tabindex="0" onclick="SeleccionaPaginaHistorial(' + k + ')">' + k + '</a></li>';
                    }
                    paginasLink = '<ul class="pagination">' +
                                  '<li class="paginate_button previous disabled" id="prev_listadoFichaResOBS"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + k + '" tabindex="0" onclick="SeleccionaPrevNextHistorial(0);">Anterior</a></li>' +
                                    paginasLink +
                                  '<li class="paginate_button next" style="cursor:pointer;" id="next_listadoFichaResOBS"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + (k + 1) + '" tabindex="0" onclick="SeleccionaPrevNextHistorial(1);">Siguiente</a></li>' +
                                  '</ul>';
                    document.getElementById("paginadorFichaResCompare").style.display = "";
                    document.getElementById("paginadorFichaResCompare").innerHTML = paginasLink;

                    totalPaginasBSQ = paginas;
                    paginaActualBSQ = 1;
                }
            }
            else {
                document.getElementById("paginadorFichaResCompare").style.display = "none";
                document.getElementById("paginadorFichaResCompare").innerHTML = "";
                totalPaginasBSQ = 1;
            }
        }
        else {
            document.getElementById("tbl_listadoFichaCompare").style.display = "none";
            document.getElementById("divMensajeBusquedaVaciaCompare").style.display = "";
        }
    });
}

function RevisarFichaSeleccionada(codficha) {
    var salida = false;
    if (arrSeleccionados[0] == codficha || arrSeleccionados[1] == codficha) salida = true;
    return salida;
}
function ReseteaTBLListFichaResCompare() {
    //TABLA DE RESULTADOS DE BUSQUEDA DE FICHA CON OBSERVACIONES
    var tblDestino = document.getElementById("tbl_listadoFichaCompare");
    var rowCount = tblDestino.rows.length;
    // alert(rowCount);
    for (var i = rowCount - 1; i >= 1 ; i--) {
        tblDestino.deleteRow(i);
    }
}

var arrSeleccionados = [null, null];
var arrDatosSeleccionados = [null, null];
function SeleccionarRF(opcCheck, indice, codProyecto, codFicha, objCheck) {
    //alert(opcCheck + " -- " + codProyecto + " -- " + codFichaPadre + " -- " + codFicha + " -- " + objCheck.id + " -- " + $("#" + objCheck.id).data("institucionproyecto"));
    //opcCheck=0 ==>seleccionar
    //opcCheck=1 ==>NO seleccionar
    var FichasSeleccionadas = "";
    var changeSelector = 0;
    
    if (opcCheck == 0) {
        if (arrSeleccionados[0] == null) {
            arrSeleccionados[0] = codFicha;
            arrDatosSeleccionados[0] = $("#" + objCheck.id).data("institucionproyecto");
            changeSelector = 1;

            if ($("#spanFichasSeleccionadas").html() == '<button class="btn btn-default disabled">Seleccionar dos fichas</button>')
                FichasSeleccionadas = "";
            else
                FichasSeleccionadas = $("#spanFichasSeleccionadas").html();
            //alert(FichasSeleccionadas);
            if (FichasSeleccionadas != "") {
                if(codFicha > arrSeleccionados[1])
                    FichasSeleccionadas = FichasSeleccionadas + "&nbsp;<button class='btn btn-primary disabled'>" + codFicha + "</button>";
                else
                    FichasSeleccionadas = "<button class='btn btn-primary disabled'>" + codFicha + "</button>&nbsp;" + FichasSeleccionadas;
            }
            else
                FichasSeleccionadas = "<button class='btn btn-primary disabled'>" + codFicha + "</button>";

            document.getElementById("spanFichasSeleccionadas").innerHTML = FichasSeleccionadas;
        }
        else if (arrSeleccionados[1] == null && arrSeleccionados[0] != codFicha) {
            arrSeleccionados[1] = codFicha;
            arrDatosSeleccionados[1] = $("#" + objCheck.id).data("institucionproyecto");
            changeSelector = 1;
            
            if ($("#spanFichasSeleccionadas").html() == '<button class="btn btn-default disabled">Seleccionar dos fichas</button>')
                FichasSeleccionadas = "";
            else
                FichasSeleccionadas = $("#spanFichasSeleccionadas").html();
            //alert(FichasSeleccionadas);
            if (FichasSeleccionadas != "") {
                if (codFicha > arrSeleccionados[0])
                    FichasSeleccionadas = FichasSeleccionadas + "&nbsp;<button class='btn btn-primary disabled'>" + codFicha + "</button>";
                else
                    FichasSeleccionadas = "<button class='btn btn-primary disabled'>" + codFicha + "</button>&nbsp;" + FichasSeleccionadas;
            }
            else
                FichasSeleccionadas = "<button class='btn btn-primary disabled'>" + codFicha + "</button>";

            document.getElementById("spanFichasSeleccionadas").innerHTML = FichasSeleccionadas;
        }
        else {
            MensajeINFO("<p style='text-align:center;font-size:14px;'>Sólo es posible seleccionar dos fichas para realizar la comparación.</p>");
        }
        if (changeSelector == 1) {
            $("#" + objCheck.id).css("display", "none");
            
            $("#uncheckFR_" + indice).css("display", "none");
            $("#checkFR_" + indice).css("display", "block");
        }
    }
    else {
        if (arrSeleccionados[0] == codFicha) {
            arrSeleccionados[0] = null;
            arrDatosSeleccionados[0] = null;
            changeSelector = 1;

            FichasSeleccionadas = '<button class="btn btn-default disabled">Seleccionar dos fichas</button>';
            if (arrSeleccionados[1] != null) FichasSeleccionadas = " <button class='btn btn-primary disabled'>" + arrSeleccionados[1] + "</button>";

            document.getElementById("spanFichasSeleccionadas").innerHTML = FichasSeleccionadas;

        }
        else if (arrSeleccionados[1] == codFicha) {
            arrSeleccionados[1] = null;
            arrDatosSeleccionados[1] = null;
            changeSelector = 1;

            FichasSeleccionadas = '<button class="btn btn-default disabled">Seleccionar dos fichas</button>';
            if (arrSeleccionados[0] != null) FichasSeleccionadas = " <button class='btn btn-primary disabled'>" + arrSeleccionados[0] + "</button>";

            document.getElementById("spanFichasSeleccionadas").innerHTML = FichasSeleccionadas;
        }
        if (changeSelector == 1) {
            $("#" + objCheck.id).css("display", "none");

            $("#checkFR_" + indice).css("display", "none");
            $("#uncheckFR_" + indice).css("display", "block");
        }
    }
    //alert(arrSeleccionados[0] + " <-->" + arrSeleccionados[1]);
}
function LimpiarSeleccion() {
    document.getElementById("spanFichasSeleccionadas").innerHTML = '<button class="btn btn-default disabled">Seleccionar dos fichas</button>';
    arrSeleccionados[0] = null;
    arrSeleccionados[1] = null;
    arrDatosSeleccionados[0] = null;
    arrDatosSeleccionados[1] = null;

    //TABLA DE RESULTADOS DE BUSQUEDA DE FICHA CON OBSERVACIONES
    var tblDestino = document.getElementById("tbl_listadoFichaCompare");
    var rowCount = tblDestino.rows.length;
    for (var i = 1; i <= rowCount - 1 ; i++) {
        if (document.getElementById("checkFR_" + i).style.display == "block") {
            $("#checkFR_" + i).css("display","none");
            $("#uncheckFR_" + i).css("display","block");
        }
    }
}
function CompararFichasResidenciales() {
    //alert(arrSeleccionados[0] + " <-->" + arrSeleccionados[1]);
    if (arrSeleccionados[0] == null || arrSeleccionados[1] == null) {
        MensajeINFO("<p style='text-align:center;font-size:14px;'>Debe seleccionar dos fichas para realizar la comparación.</p>");
    }
    else {
        ResetearCamposFormDetalleCOmparacion();
        AdminitrarAccesoASeccionesCompare("bloqueo", "FICHA_001");
        AdminitrarAccesoASeccionesCompare("bloqueo", "FICHA_002");
        AdminitrarAccesoASeccionesCompare("bloqueo", "INFORME_COMPARATIVA");

        ReseteaVariablesControlCarga();
        InicializaVarControlZonaDatosComparativas_();

        $("#idcodfichaOBS_comp001").val(arrSeleccionados[0]);
        $("#idcodfichaOBS_comp002").val(arrSeleccionados[1]);

        var datosGlsFicha001 = arrDatosSeleccionados[0].split('|');
        CargaDatosProyectoResidencial($("#cmbProyectoCompare").val(), datosGlsFicha001[0], datosGlsFicha001[1]);

        CargaDatosFichaxCodigo(arrSeleccionados[0], "BLOQUE001");
        CargaDatosFichaxCodigo(arrSeleccionados[1], "BLOQUE002");

        myCTRL_FichaPadre_comp001 = setInterval("AdminitrarAccesoASeccionesCompare('desbloqueo', 'FICHA_001')", 2000);
        myCTRL_FichaPadre_comp002 = setInterval("AdminitrarAccesoASeccionesCompare('desbloqueo', 'FICHA_002')", 2000);
        myCTRL_ComparacionFichas = setInterval("AdminitrarAccesoASeccionesCompare('desbloqueo', 'INFORME_COMPARATIVA')", 2000);

        $("#frmwork7").css("display", "none");
        $("#frmwork8").css("display", "block");
    }
}
function ResetearCamposFormDetalleCOmparacion() {

    //Antecedentes Generales-------------------------------------
    var arrVariablesGenerales = [
    "idcodfichaOBS_comp001",
    "general_000_sel_Institucion_comp001",
    "general_001_sel_proyecto_comp001",
    "general_002_tipoOrganismo_comp001",
    "general_003_modeloIntervencion_comp001",
    "general_004_direccion_comp001",
    "general_005_telefonos_comp001",
    "general_006_region_comp001",
    "general_007_comuna_comp001",
    "general_008_email_comp001",
    "general_009_directorProyecto_comp001",
    "general_010_rut_director_proyecto_comp001",

    "idcodfichaOBS_comp002",
    "general_000_sel_Institucion_comp002",
    "general_001_sel_proyecto_comp002",
    "general_002_tipoOrganismo_comp002",
    "general_003_modeloIntervencion_comp002",
    "general_004_direccion_comp002",
    "general_005_telefonos_comp002",
    "general_006_region_comp002",
    "general_007_comuna_comp002",
    "general_008_email_comp002",
    "general_009_directorProyecto_comp002",
    "general_010_rut_director_proyecto_comp002"
    ];
    arrVariablesGenerales.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    //Antecedentes Población -------------------------------------
    var arrVariablesPoblacionGenerales = [
        "general_012_pobvig_masculina_comp002",
        "general_013_pobvig_femenina_comp002",
        "pobvig_total_comp002",
        "general_014_plazaConv_masculina_comp002",
        "general_015_plazaConv_femenina_comp002",
        "plazaConv_total_comp002",
        "general_016_otrasPlazas_masculina_comp002",
        "general_017_otrasPlazas_femenina_comp002",
        "otrasPlazas_total_comp002",
        "general_018_totalNNApresent_masculina_comp002",
        "general_019_totalNNApresent_femenina_comp002",
        "totalNNApresent_total_comp002",
        "general_020_totalNNAacercFamilia_masculina_comp002",
        "general_021_totalNNAacercFamilia_femenina_comp002",
        "totalNNAacercFamilia_total_comp002",
        "general_022_totalResidenMayor_masculina_comp002",
        "general_023_totalResidenMayor_femenina_comp002",
        "totalResidenMayor_total_comp002",
        "general_024_abandonoSist_masculina_comp002",
        "general_025_abandonoSist_femenina_comp002",
        "abandonoSist_total_comp002",
        "general_026_hospitalizados_masculina_comp002",
        "general_027_hospitalizados_femenina_comp002",
        "hospitalizados_total_comp002",
        "general_028_totalNNAart80bis_masculina_comp002",
        "general_029_totalNNAart80bis_femenina_comp002",
        "totalNNAart80bis_total_comp002",
        "general_030_totalNNAabandono_masculina_comp002",
        "general_031_totalNNAabandono_femenina_comp002",
        "totalNNAabandono_total_comp002",
        "general_038_totalNNA_adoslecente_chijo_masculina_comp002",
        "general_039_totalNNA_adoslecente_chijo_femenina_comp002",
        "totalNNA_adoslecente_chijo_total_comp002",
        "general_032_totalNNA_suscep_adopcion_masculina_comp002",
        "general_033_totalNNA_suscep_adopcion_femenina_comp002",
        "totalNNA_suscep_adopcion_total_comp002",
        "general_034_totalNNA_enlace_adopcion_masculina_comp002",
        "general_035_totalNNA_enlace_adopcion_femenina_comp002",
        "totalNNA_enlace_adopcion_total_comp002",
        "general_036_totalNNA_causaini_adopcion_masculina_comp002",
        "general_037_totalNNA_causaini_adopcion_femenina_comp002",
        "totalNNA_causaini_adopcion_total_comp002",

        "general_012_pobvig_masculina_comp001",
        "general_013_pobvig_femenina_comp001",
        "pobvig_total_comp001",
        "general_014_plazaConv_masculina_comp001",
        "general_015_plazaConv_femenina_comp001",
        "plazaConv_total_comp001",
        "general_016_otrasPlazas_masculina_comp001",
        "general_017_otrasPlazas_femenina_comp001",
        "otrasPlazas_total_comp001",
        "general_018_totalNNApresent_masculina_comp001",
        "general_019_totalNNApresent_femenina_comp001",
        "totalNNApresent_total_comp001",
        "general_020_totalNNAacercFamilia_masculina_comp001",
        "general_021_totalNNAacercFamilia_femenina_comp001",
        "totalNNAacercFamilia_total_comp001",
        "general_022_totalResidenMayor_masculina_comp001",
        "general_023_totalResidenMayor_femenina_comp001",
        "totalResidenMayor_total_comp001",
        "general_024_abandonoSist_masculina_comp001",
        "general_025_abandonoSist_femenina_comp001",
        "abandonoSist_total_comp001",
        "general_026_hospitalizados_masculina_comp001",
        "general_027_hospitalizados_femenina_comp001",
        "hospitalizados_total_comp001",
        "general_028_totalNNAart80bis_masculina_comp001",
        "general_029_totalNNAart80bis_femenina_comp001",
        "totalNNAart80bis_total_comp001",
        "general_030_totalNNAabandono_masculina_comp001",
        "general_031_totalNNAabandono_femenina_comp001",
        "totalNNAabandono_total_comp001",
        "general_038_totalNNA_adoslecente_chijo_masculina_comp001",
        "general_039_totalNNA_adoslecente_chijo_femenina_comp001",
        "totalNNA_adoslecente_chijo_total_comp001",
        "general_032_totalNNA_suscep_adopcion_masculina_comp001",
        "general_033_totalNNA_suscep_adopcion_femenina_comp001",
        "totalNNA_suscep_adopcion_total_comp001",
        "general_034_totalNNA_enlace_adopcion_masculina_comp001",
        "general_035_totalNNA_enlace_adopcion_femenina_comp001",
        "totalNNA_enlace_adopcion_total_comp001",
        "general_036_totalNNA_causaini_adopcion_masculina_comp001",
        "general_037_totalNNA_causaini_adopcion_femenina_comp001",
        "totalNNA_causaini_adopcion_total_comp001"
    ];
    arrVariablesPoblacionGenerales.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    ResetearTBLDatos("tbl_NNA_abandonados_comp002");
    ResetearTBLDatos("tbl_adolescente_con_hijos_comp002");
    ResetearTBLDatos("tbl_NNA_abandonados_comp001");
    ResetearTBLDatos("tbl_adolescente_con_hijos_comp001");
    //Antecedentes Población y Capacidad-------------------------
    var arrVariablesPoblacionCapacidad_1 = [
        "poblacion_001_sel_reside_con_subven_comp002",
        "poblacion_002_sel_sexo_atendidos_comp002",
        "poblacion_003_sel_rango_etareo_predomina_comp002",
        "poblacion_004_poblacion_vigente_comp002",
        "poblacion_006_programa_apadrinimiento_comp002",
        "poblacion_001_sel_reside_con_subven_comp001",
        "poblacion_002_sel_sexo_atendidos_comp001",
        "poblacion_003_sel_rango_etareo_predomina_comp001",
        "poblacion_004_poblacion_vigente_comp001",
        "poblacion_006_programa_apadrinimiento_comp001"
    ];
    arrVariablesPoblacionCapacidad_1.forEach(
        function (currentValue, index) {
            $("#" + currentValue).prop('selectedIndex', 0);
            $("#" + currentValue).attr("disabled", true);
        }
    );
    var arrVariablesPoblacionCapacidad_2 = [
        "poblacion_005_tipo_vulneracion_mas_frecuente_comp002",
        "poblacion_005_tipo_vulneracion_mas_frecuente_comp001"
    ];
    arrVariablesPoblacionCapacidad_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    //Antecedentes Dotación de Personal--------------------------
    var arrVariablesDotacion_Personal_1= [
    "dotacion_001_sel_director_existe_comp002",
    "dotacion_003_sel_director_tipo_jornada_comp002",
    "dotacion_005_sel_asistente_existe_comp002",
    "dotacion_007_sel_asistente_tipo_jornada_comp002",
    "dotacion_009_sel_psicologo_existe_comp002",
    "dotacion_011_sel_psicologo_tipo_jornada_comp002",
    "dotacion_013_sel_enfermero_existe_comp002",
    "dotacion_015_sel_enfermero_tipo_jornada_comp002",
    "dotacion_017_sel_auxenfermero_existe_comp002",
    "dotacion_019_sel_auxenfermero_tipo_jornada_comp002",
    "dotacion_021_sel_medico_existe_comp002",
    "dotacion_023_sel_medico_tipo_jornada_comp002",
    "dotacion_025_sel_psiquiatra_existe_comp002",
    "dotacion_027_sel_psiquiatra_tipo_jornada_comp002",
    "dotacion_029_sel_terapeuta_ocup_existe_comp002",
    "dotacion_031_sel_terapeuta_ocup_tipo_jornada_comp002",
    "dotacion_033_sel_kinesiologo_existe_comp002",
    "dotacion_035_sel_kinesiologo_tipo_jornada_comp002",
    "dotacion_037_sel_nutricionista_existe_comp002",
    "dotacion_039_sel_nutricionista_tipo_jornada_comp002",
    "dotacion_041_sel_fonoaudiologo_existe_comp002",
    "dotacion_043_sel_fonoaudiologo_tipo_jornada_comp002",
    "dotacion_045_sel_profesorEducaFisica_existe_comp002",
    "dotacion_047_sel_profesorEducaFisica_tipo_jornada_comp002",
    "dotacion_049_sel_psicopedagogo_existe_comp002",
    "dotacion_051_sel_psicopedagogo_tipo_jornada_comp002",
    "dotacion_053_sel_educadoraParvulos_existe_comp002",
    "dotacion_055_sel_educadoraParvulos_tipo_jornada_comp002",
    "dotacion_057_sel_educadoraTratoDirecto_existe_comp002",
    "dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_comp002",
    "dotacion_061_sel_manipuladorAlimentos_existe_comp002",
    "dotacion_063_sel_manipuladorAlimentos_tipo_jornada_comp002",
    "dotacion_065_sel_apoyoAdministrativo_existe_comp002",
    "dotacion_067_sel_apoyoAdministrativo_tipo_jornada_comp002",
    "dotacion_069_sel_personalAseo_existe_comp002",
    "dotacion_071_sel_personalAseo_tipo_jornada_comp002",
    "dotacion_073_sel_personalLavanderia_existe_comp002",
    "dotacion_075_sel_personalLavandería_tipo_joranada_comp002",
    "dotacion_077_sel_monitoresTalleristas_existe_comp002",
    "dotacion_079_sel_monitoresTalleristas_tipo_jornada_comp002",
    "dotacion_081_sel_alumnosPractica_existe_comp002",
    "dotacion_083_sel_alumnosPractica_tipo_jornada_comp002",
    "dotacion_085_sel_apoyoVoluntario_existe_comp002",
    "dotacion_087_sel_apoyoVoluntario_tipo_jornada_comp002",
    "dotacion_089_sel_Otros_existe_comp002",
    "dotacion_091_sel_Otros_tipo_jornada_comp002",
    "dotacion_093_sel_PersonalLicenciaMedica_existe_comp002",
    "dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_comp002",
    "dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_comp002",
    "dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_comp002",

    "dotacion_001_sel_director_existe_comp001",
    "dotacion_003_sel_director_tipo_jornada_comp001",
    "dotacion_005_sel_asistente_existe_comp001",
    "dotacion_007_sel_asistente_tipo_jornada_comp001",
    "dotacion_009_sel_psicologo_existe_comp001",
    "dotacion_011_sel_psicologo_tipo_jornada_comp001",
    "dotacion_013_sel_enfermero_existe_comp001",
    "dotacion_015_sel_enfermero_tipo_jornada_comp001",
    "dotacion_017_sel_auxenfermero_existe_comp001",
    "dotacion_019_sel_auxenfermero_tipo_jornada_comp001",
    "dotacion_021_sel_medico_existe_comp001",
    "dotacion_023_sel_medico_tipo_jornada_comp001",
    "dotacion_025_sel_psiquiatra_existe_comp001",
    "dotacion_027_sel_psiquiatra_tipo_jornada_comp001",
    "dotacion_029_sel_terapeuta_ocup_existe_comp001",
    "dotacion_031_sel_terapeuta_ocup_tipo_jornada_comp001",
    "dotacion_033_sel_kinesiologo_existe_comp001",
    "dotacion_035_sel_kinesiologo_tipo_jornada_comp001",
    "dotacion_037_sel_nutricionista_existe_comp001",
    "dotacion_039_sel_nutricionista_tipo_jornada_comp001",
    "dotacion_041_sel_fonoaudiologo_existe_comp001",
    "dotacion_043_sel_fonoaudiologo_tipo_jornada_comp001",
    "dotacion_045_sel_profesorEducaFisica_existe_comp001",
    "dotacion_047_sel_profesorEducaFisica_tipo_jornada_comp001",
    "dotacion_049_sel_psicopedagogo_existe_comp001",
    "dotacion_051_sel_psicopedagogo_tipo_jornada_comp001",
    "dotacion_053_sel_educadoraParvulos_existe_comp001",
    "dotacion_055_sel_educadoraParvulos_tipo_jornada_comp001",
    "dotacion_057_sel_educadoraTratoDirecto_existe_comp001",
    "dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_comp001",
    "dotacion_061_sel_manipuladorAlimentos_existe_comp001",
    "dotacion_063_sel_manipuladorAlimentos_tipo_jornada_comp001",
    "dotacion_065_sel_apoyoAdministrativo_existe_comp001",
    "dotacion_067_sel_apoyoAdministrativo_tipo_jornada_comp001",
    "dotacion_069_sel_personalAseo_existe_comp001",
    "dotacion_071_sel_personalAseo_tipo_jornada_comp001",
    "dotacion_073_sel_personalLavanderia_existe_comp001",
    "dotacion_075_sel_personalLavandería_tipo_joranada_comp001",
    "dotacion_077_sel_monitoresTalleristas_existe_comp001",
    "dotacion_079_sel_monitoresTalleristas_tipo_jornada_comp001",
    "dotacion_081_sel_alumnosPractica_existe_comp001",
    "dotacion_083_sel_alumnosPractica_tipo_jornada_comp001",
    "dotacion_085_sel_apoyoVoluntario_existe_comp001",
    "dotacion_087_sel_apoyoVoluntario_tipo_jornada_comp001",
    "dotacion_089_sel_Otros_existe_comp001",
    "dotacion_091_sel_Otros_tipo_jornada_comp001",
    "dotacion_093_sel_PersonalLicenciaMedica_existe_comp001",
    "dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_comp001",
    "dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_comp001",
    "dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_comp001"
    ];
    arrVariablesDotacion_Personal_1.forEach(
        function (currentValue, index) {
            $("#" + currentValue).prop('selectedIndex', 0);
            $("#" + currentValue).attr("disabled", true);
        }
    );
    var arrVariablesDotacion_Personal_2 = [
    "dotacion_002_sel_director_cantidad_comp002",
    "dotacion_004_sel_director_horas_semanales_comp002",
    "dotacion_006_sel_asistente_cantidad_comp002",
    "dotacion_008_sel_asistente_horas_semanales_comp002",
    "dotacion_010_sel_psicologo_cantidad_comp002",
    "dotacion_012_sel_psicologo_horas_semanales_comp002",
    "dotacion_014_sel_enfermero_cantidad_comp002",
    "dotacion_016_sel_enfermero_horas_semanales_comp002",
    "dotacion_018_sel_auxenfermero_cantidad_comp002",
    "dotacion_020_sel_auxenfermero_horas_semanales_comp002",
    "dotacion_022_sel_medico_cantidad_comp002",
    "dotacion_024_sel_medico_horas_semanales_comp002",
    "dotacion_026_sel_psiquiatra_cantidad_comp002",
    "dotacion_028_sel_psiquiatra_horas_semanales_comp002",
    "dotacion_030_sel_terapeuta_ocup_cantidad_comp002",
    "dotacion_032_sel_terapeuta_ocup_horas_semanales_comp002",
    "dotacion_034_sel_kinesiologo_cantidad_comp002",
    "dotacion_036_sel_kinesiologo_horas_semanales_comp002",
    "dotacion_038_sel_nutricionista_cantidad_comp002",
    "dotacion_040_sel_nutricionista_horas_semanales_comp002",
    "dotacion_042_sel_fonoaudiologo_cantidad_comp002",
    "dotacion_044_sel_fonoaudiologo_horas_semanales_comp002",
    "dotacion_046_sel_profesorEducaFisica_cantidad_comp002",
    "dotacion_048_sel_profesorEducaFisica_horas_semanales_comp002",
    "dotacion_050_sel_psicopedagogo_cantidad_comp002",
    "dotacion_052_sel_psicopedagogo_horas_semanales_comp002",
    "dotacion_054_sel_educadoraParvulos_cantidad_comp002",
    "dotacion_056_sel_educadoraParvulos_horas_semanales_comp002",
    "dotacion_058_sel_educadoraTratoDirecto_cantidad_comp002",
    "dotacion_060_sel_educadoraTratoDirecto_horas_semanales_comp002",
    "dotacion_062_sel_manipuladorAlimentos_cantidad_comp002",
    "dotacion_064_sel_manipuladorAlimentos_horas_semanales_comp002",
    "dotacion_066_sel_apoyoAdministrativo_cantidad_comp002",
    "dotacion_068_sel_apoyoAdministrativo_horas_semanales_comp002",
    "dotacion_070_sel_personalAseo_cantidad_comp002",
    "dotacion_072_sel_personalAseo_horas_semanales_comp002",
    "dotacion_074_sel_personalLavandería_cantidad_comp002",
    "dotacion_076_sel_personalLavandería_horas_semanales_comp002",
    "dotacion_078_sel_monitoresTalleristas_cantidad_comp002",
    "dotacion_080_sel_monitoresTalleristas_horas_semanales_comp002",
    "dotacion_082_sel_alumnosPractica_cantidad_comp002",
    "dotacion_084_sel_alumnosPractica_horas_semanales_comp002",
    "dotacion_086_sel_apoyoVoluntario_cantidad_comp002",
    "dotacion_088_sel_apoyoVoluntario_horas_semanales_comp002",
    "dotacion_090_sel_Otros_cantidad_comp002",
    "dotacion_092_sel_Otros_horas_semanales_comp002",
    "dotacion_094_sel_PersonalLicenciaMedica_cantidad_comp002",
    "dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_comp002",
    "dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_comp002",
    "dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_comp002",
    "dotacion_101_Observaciones_comp002",

    "dotacion_002_sel_director_cantidad_comp001",
    "dotacion_004_sel_director_horas_semanales_comp001",
    "dotacion_006_sel_asistente_cantidad_comp001",
    "dotacion_008_sel_asistente_horas_semanales_comp001",
    "dotacion_010_sel_psicologo_cantidad_comp001",
    "dotacion_012_sel_psicologo_horas_semanales_comp001",
    "dotacion_014_sel_enfermero_cantidad_comp001",
    "dotacion_016_sel_enfermero_horas_semanales_comp001",
    "dotacion_018_sel_auxenfermero_cantidad_comp001",
    "dotacion_020_sel_auxenfermero_horas_semanales_comp001",
    "dotacion_022_sel_medico_cantidad_comp001",
    "dotacion_024_sel_medico_horas_semanales_comp001",
    "dotacion_026_sel_psiquiatra_cantidad_comp001",
    "dotacion_028_sel_psiquiatra_horas_semanales_comp001",
    "dotacion_030_sel_terapeuta_ocup_cantidad_comp001",
    "dotacion_032_sel_terapeuta_ocup_horas_semanales_comp001",
    "dotacion_034_sel_kinesiologo_cantidad_comp001",
    "dotacion_036_sel_kinesiologo_horas_semanales_comp001",
    "dotacion_038_sel_nutricionista_cantidad_comp001",
    "dotacion_040_sel_nutricionista_horas_semanales_comp001",
    "dotacion_042_sel_fonoaudiologo_cantidad_comp001",
    "dotacion_044_sel_fonoaudiologo_horas_semanales_comp001",
    "dotacion_046_sel_profesorEducaFisica_cantidad_comp001",
    "dotacion_048_sel_profesorEducaFisica_horas_semanales_comp001",
    "dotacion_050_sel_psicopedagogo_cantidad_comp001",
    "dotacion_052_sel_psicopedagogo_horas_semanales_comp001",
    "dotacion_054_sel_educadoraParvulos_cantidad_comp001",
    "dotacion_056_sel_educadoraParvulos_horas_semanales_comp001",
    "dotacion_058_sel_educadoraTratoDirecto_cantidad_comp001",
    "dotacion_060_sel_educadoraTratoDirecto_horas_semanales_comp001",
    "dotacion_062_sel_manipuladorAlimentos_cantidad_comp001",
    "dotacion_064_sel_manipuladorAlimentos_horas_semanales_comp001",
    "dotacion_066_sel_apoyoAdministrativo_cantidad_comp001",
    "dotacion_068_sel_apoyoAdministrativo_horas_semanales_comp001",
    "dotacion_070_sel_personalAseo_cantidad_comp001",
    "dotacion_072_sel_personalAseo_horas_semanales_comp001",
    "dotacion_074_sel_personalLavandería_cantidad_comp001",
    "dotacion_076_sel_personalLavandería_horas_semanales_comp001",
    "dotacion_078_sel_monitoresTalleristas_cantidad_comp001",
    "dotacion_080_sel_monitoresTalleristas_horas_semanales_comp001",
    "dotacion_082_sel_alumnosPractica_cantidad_comp001",
    "dotacion_084_sel_alumnosPractica_horas_semanales_comp001",
    "dotacion_086_sel_apoyoVoluntario_cantidad_comp001",
    "dotacion_088_sel_apoyoVoluntario_horas_semanales_comp001",
    "dotacion_090_sel_Otros_cantidad_comp001",
    "dotacion_092_sel_Otros_horas_semanales_comp001",
    "dotacion_094_sel_PersonalLicenciaMedica_cantidad_comp001",
    "dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_comp001",
    "dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_comp001",
    "dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_comp001",
    "dotacion_101_Observaciones_comp001"
    ];
    arrVariablesDotacion_Personal_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    //Antecedentes Infraestructura-------------------------------
    var arrVariablesInfraestructura_1 = [
    "Infraest_001_ofi_admin_existe_comp002",
    "Infraest_003_salaReuniones_existe_comp002",
    "Infraest_005_salaRecepcion_existe_comp002",
    "Infraest_007_espacioVisitas_existe_comp002",
    "Infraest_009_salaMultiuso_existe_comp002",
    "Infraest_011_salaEstar_existe_comp002",
    "Infraest_013_enfermeria_existe_comp002",
    "Infraest_015_espacioRecreacional_existe_comp002",
    "Infraest_019_areasVerdes_existe_comp002",
    "Infraest_021_cocina_existe_comp002",
    "Infraest_023_comedor_existe_comp002",
    "Infraest_025_Lavanderia_existe_comp002",
    "Infraest_027_Dormitorio_existe_comp002",
    "Infraest_029_CamasNNA_existe_comp002",
    "Infraest_031_closetLocker_existe_comp002",
    "Infraest_033_banosPublico_existe_comp002",
    "Infraest_035_banosNNAadecuados_existe_comp002",
    "Infraest_035_banosNNA_Funcionamiento_existe_comp002",
    "Infraest_035_banosNNA_AcuerdoNormativa_existe_comp002",
    "Infraest_035_banosNNA_Hombre_existe_comp002",
    "Infraest_035_banosNNA_Mujer_existe_comp002",
    "Infraest_035_banosNNA_mixto_existe_comp002",
    "Infraest_037_duchasNNA_existe_comp002",
    "Infraest_037_duchasNNA_funcionamiento_existe_comp002",
    "Infraest_037_duchasNNA_normativa_existe_comp002",
    "Infraest_037_duchasNNA_hombres_existe_comp002",
    "Infraest_037_duchasNNA_mujeres_existe_comp002",
    "Infraest_037_duchasNNA_mixtos_existe_comp002",
    "Infraest_039_ambientacionAcorde_existe_comp002",
    "Infraest_040_vestuarioAdecuado_existe_comp002",
    "Infraest_040_vestuarioPersonalizado_existe_comp002",
    "Infraest_041_utilesAseoPersonalNNA_existe_comp002",
    "Infraest_042_aguaCaliente_existe_comp002",
    "Infraest_043_estadoCalefonLlavesGas_existe_comp002",
    "Infraest_043_CumpleNormaCalefon_comp002",
    "Infraest_043_CumpleNormaLlaveGas_comp002",
    "Infraest_044_sistemaCalefaccion_existe_comp002",
    "Infraest_045_ventilacionAdecuada_existe_comp002",
    "Infraest_046_AccesoDiscapacitados_existe_comp002",
    "Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_comp002",

    "Infraest_001_ofi_admin_existe_comp001",
    "Infraest_003_salaReuniones_existe_comp001",
    "Infraest_005_salaRecepcion_existe_comp001",
    "Infraest_007_espacioVisitas_existe_comp001",
    "Infraest_009_salaMultiuso_existe_comp001",
    "Infraest_011_salaEstar_existe_comp001",
    "Infraest_013_enfermeria_existe_comp001",
    "Infraest_015_espacioRecreacional_existe_comp001",
    "Infraest_019_areasVerdes_existe_comp001",
    "Infraest_021_cocina_existe_comp001",
    "Infraest_023_comedor_existe_comp001",
    "Infraest_025_Lavanderia_existe_comp001",
    "Infraest_027_Dormitorio_existe_comp001",
    "Infraest_029_CamasNNA_existe_comp001",
    "Infraest_031_closetLocker_existe_comp001",
    "Infraest_033_banosPublico_existe_comp001",
    "Infraest_035_banosNNAadecuados_existe_comp001",
    "Infraest_035_banosNNA_Funcionamiento_existe_comp001",
    "Infraest_035_banosNNA_AcuerdoNormativa_existe_comp001",
    "Infraest_035_banosNNA_Hombre_existe_comp001",
    "Infraest_035_banosNNA_Mujer_existe_comp001",
    "Infraest_035_banosNNA_mixto_existe_comp001",
    "Infraest_037_duchasNNA_existe_comp001",
    "Infraest_037_duchasNNA_funcionamiento_existe_comp001",
    "Infraest_037_duchasNNA_normativa_existe_comp001",
    "Infraest_037_duchasNNA_hombres_existe_comp001",
    "Infraest_037_duchasNNA_mujeres_existe_comp001",
    "Infraest_037_duchasNNA_mixtos_existe_comp001",
    "Infraest_039_ambientacionAcorde_existe_comp001",
    "Infraest_040_vestuarioAdecuado_existe_comp001",
    "Infraest_040_vestuarioPersonalizado_existe_comp001",
    "Infraest_041_utilesAseoPersonalNNA_existe_comp001",
    "Infraest_042_aguaCaliente_existe_comp001",
    "Infraest_043_estadoCalefonLlavesGas_existe_comp001",
    "Infraest_043_CumpleNormaCalefon_comp001",
    "Infraest_043_CumpleNormaLlaveGas_comp001",
    "Infraest_044_sistemaCalefaccion_existe_comp001",
    "Infraest_045_ventilacionAdecuada_existe_comp001",
    "Infraest_046_AccesoDiscapacitados_existe_comp001",
    "Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_comp001"
    ];
    arrVariablesInfraestructura_1.forEach(
        function (currentValue, index) {
            $("#" + currentValue).prop('selectedIndex', 0);
            $("#" + currentValue).attr("disabled", true);
        }
    );
    var arrVariablesInfraestructura_2 = [
    "Infraest_002_ofi_admin_cantidad_comp002",
    "Infraest_004_salaReuniones_cantidad_comp002",
    "Infraest_006_salaRecepcion_cantidad_comp002",
    "Infraest_008_espacioVisitas_cantidad_comp002",
    "Infraest_010_salaMultiuso_cantidad_comp002",
    "Infraest_012_salaEstar_cantidad_comp002",
    "Infraest_014_enfermeria_cantidad_comp002",
    "Infraest_016_espacioRecreacional_cantidad_comp002",
    "Infraest_020_areasVerdes_cantidad_comp002",
    "Infraest_022_cocina_cantidad_comp002",
    "Infraest_024_comedor_cantidad_comp002",
    "Infraest_026_Lavanderia_cantidad_comp002",
    "Infraest_028_Dormitorio_cantidad_comp002",
    "Infraest_030_CamasNNA_cantidad_comp002",
    "Infraest_032_closetLocker_cantidad_comp002",
    "Infraest_034_banosPublico_cantidad_comp002",
    "Infraest_036_banosNNAadecuados_cantidad_comp002",
    "Infraest_035_banosNNA_Funcionamiento_cant_comp002",
    "Infraest_035_banosNNA_AcuerdoNormativa_cant_comp002",
    "Infraest_035_banosNNA_Hombre_cant_comp002",
    "Infraest_035_banosNNA_Mujer_cant_comp002",
    "Infraest_035_banosNNA_mixto_cant_comp002",
    "Infraest_038_duchasNNA_cantidad_comp002",
    "Infraest_037_duchasNNA_funcionamiento_cant_comp002",
    "Infraest_037_duchasNNA_normativa_cant_comp002",
    "Infraest_037_duchasNNA_hombres_cant_comp002",
    "Infraest_037_duchasNNA_mujeres_cant_comp002",
    "Infraest_037_duchasNNA_mixtos_cant_comp002",
    "Infraest_049_observaciones_comp002",

    "Infraest_002_ofi_admin_cantidad_comp001",
    "Infraest_004_salaReuniones_cantidad_comp001",
    "Infraest_006_salaRecepcion_cantidad_comp001",
    "Infraest_008_espacioVisitas_cantidad_comp001",
    "Infraest_010_salaMultiuso_cantidad_comp001",
    "Infraest_012_salaEstar_cantidad_comp001",
    "Infraest_014_enfermeria_cantidad_comp001",
    "Infraest_016_espacioRecreacional_cantidad_comp001",
    "Infraest_020_areasVerdes_cantidad_comp001",
    "Infraest_022_cocina_cantidad_comp001",
    "Infraest_024_comedor_cantidad_comp001",
    "Infraest_026_Lavanderia_cantidad_comp001",
    "Infraest_028_Dormitorio_cantidad_comp001",
    "Infraest_030_CamasNNA_cantidad_comp001",
    "Infraest_032_closetLocker_cantidad_comp001",
    "Infraest_034_banosPublico_cantidad_comp001",
    "Infraest_036_banosNNAadecuados_cantidad_comp001",
    "Infraest_035_banosNNA_Funcionamiento_cant_comp001",
    "Infraest_035_banosNNA_AcuerdoNormativa_cant_comp001",
    "Infraest_035_banosNNA_Hombre_cant_comp001",
    "Infraest_035_banosNNA_Mujer_cant_comp001",
    "Infraest_035_banosNNA_mixto_cant_comp001",
    "Infraest_038_duchasNNA_cantidad_comp001",
    "Infraest_037_duchasNNA_funcionamiento_cant_comp001",
    "Infraest_037_duchasNNA_normativa_cant_comp001",
    "Infraest_037_duchasNNA_hombres_cant_comp001",
    "Infraest_037_duchasNNA_mujeres_cant_comp001",
    "Infraest_037_duchasNNA_mixtos_cant_comp001",
    "Infraest_049_observaciones_comp001"
    ];
    arrVariablesInfraestructura_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    //Antecedentes Seguridad-------------------------------------
    var arrVariablesSeguridad_1 = [
    "seguridad_001_planEmergencia_existe_comp002",
    "seguridad_002_simulacroEmergencia_existe_comp002",
    "seguridad_003_planEmergenciaVisado_existe_comp002",
    "seguridad_004_extintores_existe_comp002",
    "seguridad_005_senaletica_existe_comp002",
    "seguridad_006_viaEvacuacion_existe_comp002",
    "seguridad_007_capacitacionPersonal_existe_comp002",
    "seguridad_007_capacitacionPersonalemergencia_comp002",
    "seguridad_007_capacitacionPersonalprimerosAux_comp002",
    "seguridad_008_sanitizacion_existe_comp002",
    "seguridad_008_sanitizacion__comp002",
    "seguridad_008_sanitizacion_desratizacion_comp002",
    "seguridad_008_sanitizacion_fumigacion_comp002",
    "seguridad_009_sistemaElectrico_existe_comp002",
    "seguridad_010_zonaSeguridad_existe_comp002",

    "seguridad_001_planEmergencia_existe_comp001",
    "seguridad_002_simulacroEmergencia_existe_comp001",
    "seguridad_003_planEmergenciaVisado_existe_comp001",
    "seguridad_004_extintores_existe_comp001",
    "seguridad_005_senaletica_existe_comp001",
    "seguridad_006_viaEvacuacion_existe_comp001",
    "seguridad_007_capacitacionPersonal_existe_comp001",
    "seguridad_007_capacitacionPersonalemergencia_comp001",
    "seguridad_007_capacitacionPersonalprimerosAux_comp001",
    "seguridad_008_sanitizacion_existe_comp001",
    "seguridad_008_sanitizacion__comp001",
    "seguridad_008_sanitizacion_desratizacion_comp001",
    "seguridad_008_sanitizacion_fumigacion_comp001",
    "seguridad_009_sistemaElectrico_existe_comp001",
    "seguridad_010_zonaSeguridad_existe_comp001"
    ];
    arrVariablesSeguridad_1.forEach(
         function (currentValue, index) {
             $("#" + currentValue).prop('selectedIndex', 0);
             $("#" + currentValue).attr("disabled", true);
         }
     );
    var arrVariablesSeguridad_2 = [
    "seguridad_011_observaciones_comp002",
    "seguridad_011_observaciones_comp001"
    ];
    arrVariablesSeguridad_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    //Antecedentes Salud-----------------------------------------
    var arrVariablesSalud_1 = [
    "salud_001_NNA_inscritosCESFAM_comp002",
    "salud_002_NNA_problematicaSaludMental_comp002",
    "salud_003_NNA_problematicaSaludMentalsinDiag_comp002",
    "salud_004_NNA_inscritosEnferCronica_comp002",
    "salud_015_NNA_EsperaTransplantes_comp002",
    "salud_016_NNA_Transplantados_comp002",
    "salud_005_NNA_Discapacidad_comp002",
    "salud_006_NNA_inscritosProblemSaludRecibeMedica_comp002",
    "salud_007_NNA_problematicaSaludenTratamiento_comp002",
    "salud_008_NNA_consumoDrogas_comp002",
    "salud_008_NNA_consumoAlcohol_comp002",
    "salud_017_consumoDrogasyAlcohol_comp002",
    "salud_015_adolescenteEmbarazadaControlalDia_cantidad_comp002",
    "salud_016_observaciones_comp002",

    "salud_001_NNA_inscritosCESFAM_comp001",
    "salud_002_NNA_problematicaSaludMental_comp001",
    "salud_003_NNA_problematicaSaludMentalsinDiag_comp001",
    "salud_004_NNA_inscritosEnferCronica_comp001",
    "salud_015_NNA_EsperaTransplantes_comp001",
    "salud_016_NNA_Transplantados_comp001",
    "salud_005_NNA_Discapacidad_comp001",
    "salud_006_NNA_inscritosProblemSaludRecibeMedica_comp001",
    "salud_007_NNA_problematicaSaludenTratamiento_comp001",
    "salud_008_NNA_consumoDrogas_comp001",
    "salud_008_NNA_consumoAlcohol_comp001",
    "salud_017_consumoDrogasyAlcohol_comp001",
    "salud_015_adolescenteEmbarazadaControlalDia_cantidad_comp001",
    "salud_016_observaciones_comp001"
    ];
    arrVariablesSalud_1.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    var arrVariablesSalud_2 = [
    "salud_009_sel_resguardoMedicamentos_comp002",
    "salud_009_sel_inventarioMedicamentos_comp002",
    "salud_009_sel_registroMedicamentoAdmin_a_NNA_comp002",
    "salud_010_sel_protocoloAdmin_Medica_a_NNA_comp002",
    "salud_011_sel_control_nino_sano_comp002",
    "salud_011_sel_control_adolescente_sano_comp002",
    "salud_011_sel_control_ginecologicoAdolescente_comp002",
    "salud_012_sel_adolescenteNiegaControlGineco_comp002",
    "salud_013_sel_adolescenteEmbarazada_comp002",
    "salud_014_sel_adolescenteEmbarazadaControlalDia_comp002",

    "salud_009_sel_resguardoMedicamentos_comp001",
    "salud_009_sel_inventarioMedicamentos_comp001",
    "salud_009_sel_registroMedicamentoAdmin_a_NNA_comp001",
    "salud_010_sel_protocoloAdmin_Medica_a_NNA_comp001",
    "salud_011_sel_control_nino_sano_comp001",
    "salud_011_sel_control_adolescente_sano_comp001",
    "salud_011_sel_control_ginecologicoAdolescente_comp001",
    "salud_012_sel_adolescenteNiegaControlGineco_comp001",
    "salud_013_sel_adolescenteEmbarazada_comp001",
    "salud_014_sel_adolescenteEmbarazadaControlalDia_comp001"
    ];
    arrVariablesSalud_2.forEach(
         function (currentValue, index) {
             $("#" + currentValue).prop('selectedIndex', 0);
             $("#" + currentValue).attr("disabled", true);
         }
     );
    //Antecedentes Educación-------------------------------------
    var arrVariablesEducacion_1 = [
    "educacion_001_NNA_matriculados_comp002",
    "educacion_001_NNA_asisten_colegio_cantidad_comp002",
    "educacion_002_NNA_NO_asisten_colegio_cantidad_comp002",
    "educacion_003_NNA_retrasoEscolar_cantidad_comp002",
    "educacion_004_NNA_matriculaCancelada_cantidad_comp002",
    "educacion_005_NNA_asisten_colegioDiferencial_cantidad_comp002",
    "educacion_006_NNA_asisten_colegioNivelacion_cantidad_comp002",
    "educacion_006_NNA_examenesLibres_cantidad_comp002",
    "educacion_007_sel_EspacioEstudio_y_Tareas_existe_comp002",
    "educacion_011_observaciones_comp002",

    "educacion_001_NNA_matriculados_comp001",
    "educacion_001_NNA_asisten_colegio_cantidad_comp001",
    "educacion_002_NNA_NO_asisten_colegio_cantidad_comp001",
    "educacion_003_NNA_retrasoEscolar_cantidad_comp001",
    "educacion_004_NNA_matriculaCancelada_cantidad_comp001",
    "educacion_005_NNA_asisten_colegioDiferencial_cantidad_comp001",
    "educacion_006_NNA_asisten_colegioNivelacion_cantidad_comp001",
    "educacion_006_NNA_examenesLibres_cantidad_comp001",
    "educacion_007_sel_EspacioEstudio_y_Tareas_existe_comp001",
    "educacion_011_observaciones_comp001"
    ];
    arrVariablesEducacion_1.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    var arrVariablesEducacion_2 = [
    "educacion_002_NNA_NO_asisten_colegio_cantidad_motivo_comp002",
    "educacion_008_sel_materialBibliiografico_existe_comp002",
    "educacion_009_sel_computadores_existe_comp002",
    "educacion_010_sel_AccesoControladoInternet_existe_comp002",

    "educacion_002_NNA_NO_asisten_colegio_cantidad_motivo_comp001",
    "educacion_008_sel_materialBibliiografico_existe_comp001",
    "educacion_009_sel_computadores_existe_comp001",
    "educacion_010_sel_AccesoControladoInternet_existe_comp001"
    ];
    arrVariablesEducacion_2.forEach(
         function (currentValue, index) {
             $("#" + currentValue).prop('selectedIndex', 0);
             $("#" + currentValue).attr("disabled", true);
         }
     );
    //Antecedentes Alimentación----------------------------------
    var arrVariablesAlimentacion_1 = [
    "alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_comp002",
    "alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_comp002",
    "alimentacion_003_sel_menuEspeciales_existe_comp002",
    "alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_comp002",
    "alimentacion_005_sel_certifSanitarioManipuladores_existe_comp002",
    "alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_comp002",
    "alimentacion_006_sel_AlmacenaAlimento_existe_comp002",
    "alimentacion_006_sel_EstadoConserva_existe_comp002",

    "alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_comp001",
    "alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_comp001",
    "alimentacion_003_sel_menuEspeciales_existe_comp001",
    "alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_comp001",
    "alimentacion_005_sel_certifSanitarioManipuladores_existe_comp001",
    "alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_comp001",
    "alimentacion_006_sel_AlmacenaAlimento_existe_comp001",
    "alimentacion_006_sel_EstadoConserva_existe_comp001"
    ];
    arrVariablesAlimentacion_1.forEach(
         function (currentValue, index) {
             $("#" + currentValue).prop('selectedIndex', 0);
             $("#" + currentValue).attr("disabled", true);
         }
     );
    var arrVariablesAlimentacion_2 = [
    "alimentacion_007_comidas_lunes_a_viernes_cantidad_comp002",
    "alimentacion_008_comidas_sabado_domingo_fest_cantidad_comp002",
    "alimentacion_009_observacion_comp002",

    "alimentacion_007_comidas_lunes_a_viernes_cantidad_comp001",
    "alimentacion_008_comidas_sabado_domingo_fest_cantidad_comp001",
    "alimentacion_009_observacion_comp001"
    ];
    arrVariablesAlimentacion_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
    //Antecedentes Gestión de Residencia-------------------------
    var arrVariablesGestionResidencia_1 = [
    "gestionResid_001_sel_catastroRedes_existe_comp002",
    "gestionResid_002_sel_protocoloVisitas_existe_comp002",
    "gestionResid_002_sel_protoVisitas_existe_comp002",
    "gestionResid_002_sel_regisVisitas_existe_comp002",
    "gestionResid_003_sel_protocoloAcogida_NNA_existe_comp002",
    "gestionResid_004_sel_activi_autocuidadoEquipo_existe_comp002",
    "gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_comp002",
    "gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_comp002",
    "gestionResid_007_sel_protocoloConvivencia_existe_comp002",
    "gestionResid_008_sel_protocolo_PresentaReclamo_existe_comp002",
    "gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_comp002",
    "gestionResid_010_sel_vinculacionResidencias_existe_comp002",
    "gestionResid_011_sel_ProcesoFormacion_existe_comp002",
    "gestionResid_012_sel_protocoloApadrinamiento_existe_comp002",
    "gestionResid_013_sel_protocoloTrasladoResid_existe_comp002",
    "gestionResid_014_sel_protocoloEgreso_NNA_existe_comp002",
    "gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_comp002",
    "gestionResid_016_sel_activi_habilitacionLaboral_existe_comp002",
    "gestionResid_016_sel_activi_habilitaLaboral_comp002",
    "gestionResid_016_sel_activi_vidaInpendiente_comp002",

    "gestionResid_001_sel_catastroRedes_existe_comp001",
    "gestionResid_002_sel_protocoloVisitas_existe_comp001",
    "gestionResid_002_sel_protoVisitas_existe_comp001",
    "gestionResid_002_sel_regisVisitas_existe_comp001",
    "gestionResid_003_sel_protocoloAcogida_NNA_existe_comp001",
    "gestionResid_004_sel_activi_autocuidadoEquipo_existe_comp001",
    "gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_comp001",
    "gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_comp001",
    "gestionResid_007_sel_protocoloConvivencia_existe_comp001",
    "gestionResid_008_sel_protocolo_PresentaReclamo_existe_comp001",
    "gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_comp001",
    "gestionResid_010_sel_vinculacionResidencias_existe_comp001",
    "gestionResid_011_sel_ProcesoFormacion_existe_comp001",
    "gestionResid_012_sel_protocoloApadrinamiento_existe_comp001",
    "gestionResid_013_sel_protocoloTrasladoResid_existe_comp001",
    "gestionResid_014_sel_protocoloEgreso_NNA_existe_comp001",
    "gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_comp001",
    "gestionResid_016_sel_activi_habilitacionLaboral_existe_comp001",
    "gestionResid_016_sel_activi_habilitaLaboral_comp001",
    "gestionResid_016_sel_activi_vidaInpendiente_comp001"
    ];
    arrVariablesGestionResidencia_1.forEach(
         function (currentValue, index) {
             $("#" + currentValue).prop('selectedIndex', 0);
             $("#" + currentValue).attr("disabled", true);
         }
     );
    var arrVariablesGestionResidencia_2 = [
    "gestionResid_017_observaciones_comp002",
    "gestionResid_017_observaciones_comp001"
    ];
    arrVariablesGestionResidencia_2.forEach(
        function (currentValue, index) {
            $("#" + currentValue).val("");
            $("#" + currentValue).attr("disabled", true);
        }
    );
}
function ResetearTBLDatos(idtablaHTML) {
    var tblDestino = document.getElementById(idtablaHTML);
    var rowCount = tblDestino.rows.length;
    for (var i = rowCount - 1; i >= 2 ; i--) {
        tblDestino.deleteRow(i);
    }
}

function CargaDatosProyectoResidencial(CodProyecto, glsinstitucion, glsproyecto) {
    var CodFichaAUX;
    var CodFicha2;

    if (CodProyecto != "0") {
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

            var proyecto = $("#general_001_sel_proyecto");

            //alert(tokensUsr);

            $.each(r.d,
                function () {
                    $("#general_000_sel_Institucion_comp001").val(glsinstitucion);
                    $("#general_001_sel_proyecto_comp001").val(glsproyecto);
                    $("#general_002_tipoOrganismo_comp001").val(this.TipoProyecto);
                    $("#general_003_modeloIntervencion_comp001").val(this.NombreModeloIntervencion);
                    $("#general_004_direccion_comp001").val(this.Direccion);
                    $("#general_005_telefonos_comp001").val(this.Telefono);
                    $("#general_006_region_comp001").val(this.Region);
                    $("#general_007_comuna_comp001").val(this.Comuna);
                    $("#general_008_email_comp001").val(this.Mail);
                    $("#general_009_directorProyecto_comp001").val(this.NombreDirector);
                    $("#general_010_rut_director_proyecto_comp001").val(this.RutDirector);

                    $("#general_000_sel_Institucion_comp002").val(glsinstitucion);
                    $("#general_001_sel_proyecto_comp002").val(glsproyecto);
                    $("#general_002_tipoOrganismo_comp002").val(this.TipoProyecto);
                    $("#general_003_modeloIntervencion_comp002").val(this.NombreModeloIntervencion);
                    $("#general_004_direccion_comp002").val(this.Direccion);
                    $("#general_005_telefonos_comp002").val(this.Telefono);
                    $("#general_006_region_comp002").val(this.Region);
                    $("#general_007_comuna_comp002").val(this.Comuna);
                    $("#general_008_email_comp002").val(this.Mail);
                    $("#general_009_directorProyecto_comp002").val(this.NombreDirector);
                    $("#general_010_rut_director_proyecto_comp002").val(this.RutDirector);

                    $("#spanInstitucionGBL_compare").html(glsinstitucion);
                    $("#spanProyectoGBL_compare").html(glsproyecto);
                    $("#tblDatosGBL_Compare").css("display", "block");
                }
            );
        });
    }
}
function CargaDatosFichaxCodigo(codFichaPadre, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#spanTITULO_FICHA" + sufijo).html("<b>VER DETALLE REGISTRO DE FICHA RESIDENCIAL FOLIO NÚMERO <span style='color:#337AB7;'>" + codFichaPadre + "</span></b>");

    ObtenerAntecedentesGenerales_Compare(codFichaPadre, bloqueDatos);
    ObtenerNnaAbandonoDetalle_Compare(codFichaPadre, bloqueDatos);
    ObtenerNnaAdolescenteConHijosDetalle_Compare(codFichaPadre, bloqueDatos);

    ObtenerAntecedentesPoblacionCapacidad_Compare(codFichaPadre, bloqueDatos);
    ObtenerAntecedentesDotacionPersonal_Compare(codFichaPadre, bloqueDatos);
    ObtenerAntecedentesInfraestructura_Compare(codFichaPadre, bloqueDatos);

    ObtenerAntecedentesSeguridad_Compare(codFichaPadre, bloqueDatos);
    ObtenerAntecedentesSalud_Compare(codFichaPadre, bloqueDatos);
    ObtenerAntecedentesEducacion_Compare(codFichaPadre, bloqueDatos);
    ObtenerAntecedentesAlimentacion_Compare(codFichaPadre, bloqueDatos);
    ObtenerAntecedentesGestionResidencia_Compare(codFichaPadre, bloqueDatos);

}
function FormateaPeriodo(periodo) {
    
    var year = periodo.substring(0, 4);
    var mes = replaceAll(periodo, year, "");

    var periodoGlobal = "";
    switch (mes) {
        case "01":
            periodoGlobal = "ENERO " + year;
            break;
        case "02":
            periodoGlobal = "FEBRERO " + year;
            break;
        case "03":
            periodoGlobal = "MARZO " + year;
            break;
        case "04":
            periodoGlobal = "ABRIL " + year;
            break;
        case "05":
            periodoGlobal = "MAYO " + year;
            break;
        case "06":
            periodoGlobal = "JUNIO " + year;
            break;
        case "07":
            periodoGlobal = "JULIO " + year;
            break;
        case "08":
            periodoGlobal = "AGOSTO " + year;
            break;
        case "09":
            periodoGlobal = "SEPTIEMBRE " + year;
            break;
        case "10":
            periodoGlobal = "OCTUBRE " + year;
            break;
        case "11":
            periodoGlobal = "NOVIEMBRE " + year;
            break;
        case "12":
            periodoGlobal = "DICIEMBRE " + year;
            break;
    }
    return periodoGlobal;
}
function VolverSeleccionFichasAcomparar() {
    $("#frmwork8").css("display", "none");
    $("#frmwork7").css("display", "block");
    $("#tblDatosGBL_Compare").css("display", "none");
}
function SeleccionaPaginaHistorial(numpagina) {
    $("#paginadorFichaResCompare").html("");
    var paginasLink = "";
    var controlPrev = "";
    var controlNext = "";
    var opcionLimite = "";

    paginaActualBSQ = numpagina;

    if (paginaActualBSQ == 1) {
        controlPrev = "disabled";
        controlNext = "";
    }
    else {
        controlPrev = "";
        if (paginaActualBSQ == totalPaginasBSQ)
            controlNext = "disabled";
        else
            controlNext = "";
    }


    for (var k = 1; k <= totalPaginasBSQ; k++) {
        if (k == numpagina)
            valActive = "active";
        else
            valActive = "";
        paginasLink = paginasLink + '<li class="paginate_button ' + valActive + '"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="1" tabindex="0" onclick="SeleccionaPaginaHistorial(' + k + ')">' + k + '</a></li>';
    }

    paginasLink = '<ul class="pagination">' +
                  '<li class="paginate_button previous ' + controlPrev + '" id="prev_listadoFichaResOBS" style="cursor:pointer;"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="' + k + '" tabindex="0" onclick="SeleccionaPrevNextHistorial(0);">Anterior</a></li>' +
                    paginasLink +
                  '<li class="paginate_button next ' + controlNext + '" id="next_listadoFichaResOBS"><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="' + (k + 1) + '" tabindex="0" onclick="SeleccionaPrevNextHistorial(1);">Siguiente</a></li>' +
                  '</ul>';
    $("#paginadorFichaResCompare").html(paginasLink);
    BuscarFichasResidencialesHistorial(numpagina, "BSQPAG");
}
function SeleccionaPrevNextHistorial(op) {
    //alert(paginaActualBSQ + "-- " +totalPaginasBSQ);
    if (op == 0) {
        if ((paginaActualBSQ - 1) > 0)
            paginaActualBSQ = paginaActualBSQ - 1;
        else
            return;
    }
    else {
        if ((paginaActualBSQ + 1) <= totalPaginasBSQ)
            paginaActualBSQ = paginaActualBSQ + 1;
        else
            return;
    }
    //alert(paginaActualBSQ + "-- " + totalPaginasBSQ);
    $("#paginadorFichaResCompare").html("");
    var paginasLink = "";
    var controlPrev = "";
    var controlNext = "";

    if (paginaActualBSQ == 1) {
        controlPrev = 'disabled"';
        controlNext = '" style="cursor:pointer;"';
    }
    else {
        controlPrev = "";
        if (paginaActualBSQ == totalPaginasBSQ)
            controlNext = 'disabled"';
        else
            controlNext = '" style="cursor:pointer;"';
    }

    for (var k = 1; k <= totalPaginasBSQ; k++) {
        if (k == paginaActualBSQ)
            valActive = "active";
        else
            valActive = "";
        paginasLink = paginasLink + '<li class="paginate_button ' + valActive + '" ><a href="#" aria-controls="listadoFichaResOBS" data-dt-idx="1" tabindex="0" onclick="SeleccionaPaginaHistorial(' + k + ')">' + k + '</a></li>';
    }

    paginasLink = '<ul class="pagination">' +
                  '<li class="paginate_button previous ' + controlPrev + ' id="prev_listadoFichaResOBS" style="cursor:pointer;"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + k + '" tabindex="0" onclick="SeleccionaPrevNextHistorial(0);">Anterior</a></li>' +
                    paginasLink +
                  '<li class="paginate_button next ' + controlNext + ' id="next_listadoFichaResOBS"><a aria-controls="listadoFichaResOBS" data-dt-idx="' + (k + 1) + '" tabindex="0" onclick="SeleccionaPrevNextHistorial(1);">Siguiente</a></li>' +
                  '</ul>';
    $("#paginadorFichaResCompare").html(paginasLink);
    BuscarFichasResidencialesHistorial(paginaActualBSQ, "BSQPAG");
}
var numpaginaSel = 1;
function BuscarFichasResidencialesHistorial(numpagina, opcbsq) {

    var CodProyecto = $("#cmbProyecto").val();
    var CantidadPag = 10;
    var totalRegistros = 0;
    var CodProyecto2;
    var CodFichaFinal = 0;
    numpaginaSel = numpagina;

    document.getElementById("divMensajeBusquedaVaciaCompare").style.display = "none";
    if (opcbsq == "BSQGRAL") document.getElementById("paginadorFichaResCompare").style.display = "none";


    if (document.getElementById("divlistadoFichasCompareCtrl").style.display != "none") {
        CantidadPag = $("#cantListaFichaResidencialCompare").val();
    }

    ResetearIndicadoresBusquedaFichasCompare();

    var CodInstitucion = $("#cmbInstitucion").val();

    var parametros1 = "{" +
                        "'CodProyecto':'" + CodProyecto + "'," +
                        "'CantidadPag':'" + CantidadPag + "'," +
                        "'IdUsuarioSenainfo':'" + IdUsuarioActualizacion + "'," +
                        "'CodInstitucion':'" + CodInstitucion + "'," +
                        "'numpagina':'" + numpagina + "'" +
                      "}";

    var parametros2 = "{" +
                        "'CodProyecto':'" + CodProyecto + "'," +
                        "'IdUsuarioSenainfo':'" + IdUsuarioActualizacion + "'," +
                        "'CodInstitucion':'" + CodInstitucion + "'" +
                      "}";
  
    //Consulto el total de registros que se obtienen de la consulta y
    //rescato los registros por página de acuerdo al filtro indicado por el usuario, 
    //esto se ejecuta desde la función siguiente
    CalculaRegistrosTotalesFichaCompare(parametros1, parametros2, CantidadPag, opcbsq);
}
function AnalizaEstadoHabilitacionCompare(opc) {
    var htmldiag = "";
    switch (opc) {
        case "FICHA_001":
            if (document.getElementById("A28").disabled == true) document.getElementById("lblmsgA28").style.display = "block";
            break;
        case "FICHA_002":
            if (document.getElementById("A29").disabled == true) document.getElementById("lblmsgA29").style.display = "block";
            break;
        case "INFORME_COMPARATIVA":
            if (document.getElementById("A30").disabled == true) document.getElementById("lblmsgA30").style.display = "block";
            break;
    }
}

function AdminitrarAccesoASeccionesCompare(opc, seccion) {
    switch (seccion) {
        case "FICHA_001":
            if (opc == "bloqueo") {
                document.getElementById("imgSeccion_Ficha001").style.display = "block";
                document.getElementById("A28").disabled = true;
            }
            else {
                if (AnalizaCargaCompletaDatosFichas_Compare("_comp001") == true) {
                    document.getElementById("imgSeccion_Ficha001").style.display = "none";
                    document.getElementById("A28").disabled = false;
                    document.getElementById("lblmsgA28").style.display = "none";
                }
            }
            break;
        case "FICHA_002":
            if (opc == "bloqueo") {
                document.getElementById("imgSeccion_Ficha002").style.display = "block";
                document.getElementById("A29").disabled = true;
            }
            else {
                if (AnalizaCargaCompletaDatosFichas_Compare("_comp002") == true) {
                    document.getElementById("imgSeccion_Ficha002").style.display = "none";
                    document.getElementById("A29").disabled = false;
                    document.getElementById("lblmsgA29").style.display = "none";
                }
            }
            break;
        case "INFORME_COMPARATIVA":
            if (opc == "bloqueo") {
                document.getElementById("imgSeccion_CompFichas").style.display = "block";
                document.getElementById("A30").disabled = true;
            }
            else {
                if (AnalizaCargaCompletaDatosComparaFichas()) {
                    document.getElementById("imgSeccion_CompFichas").style.display = "none";
                    document.getElementById("A30").disabled = false;
                    document.getElementById("lblmsgA30").style.display = "none";
                }
            }
            break;
    }
}
var myCTRL_FichaPadre_comp001;
var myCTRL_FichaPadre_comp002;
var myCTRL_ComparacionFichas;
var ctrl_ObtenerAntecedentesGenerales_comp001 = false;
var ctrl_ObtenerNnaAbandonoDetalle_comp001 = false;
var ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp001 = false;
var ctrl_ObtenerAntecedentesPoblacionCapacidad_comp001 = false;
var ctrl_ObtenerAntecedentesDotacionPersonal_comp001 = false;
var ctrl_ObtenerAntecedentesInfraestructura_comp001 = false;
var ctrl_ObtenerAntecedentesSeguridad_comp001 = false;
var ctrl_ObtenerAntecedentesSalud_comp001 = false;
var ctrl_ObtenerAntecedentesEducacion_comp001 = false;
var ctrl_ObtenerAntecedentesAlimentacion_comp001 = false;
var ctrl_ObtenerAntecedentesGestionResidencia_comp001 = false;

var ctrl_ObtenerAntecedentesGenerales_comp002 = false;
var ctrl_ObtenerNnaAbandonoDetalle_comp002 = false;
var ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp002 = false;
var ctrl_ObtenerAntecedentesPoblacionCapacidad_comp002 = false;
var ctrl_ObtenerAntecedentesDotacionPersonal_comp002 = false;
var ctrl_ObtenerAntecedentesInfraestructura_comp002 = false;
var ctrl_ObtenerAntecedentesSeguridad_comp002 = false;
var ctrl_ObtenerAntecedentesSalud_comp002 = false;
var ctrl_ObtenerAntecedentesEducacion_comp002 = false;
var ctrl_ObtenerAntecedentesAlimentacion_comp002 = false;
var ctrl_ObtenerAntecedentesGestionResidencia_comp002 = false;

var generalresidencia_comp001 = false;
var generalresidencia_comp002 = false;
var poblacionCapacidad_residencia_comp001 = false;
var poblacionCapacidad_residencia_comp002 = false;
var dotacion_residencia_comp001 = false;
var dotacion_residencia_comp002 = false;
var infraestructura_residencia_comp001 = false;
var infraestructura_residencia_comp002 = false;
var seguridad_residencia_comp001 = false;
var seguridad_residencia_comp002 = false;
var salud_residencia_comp001 = false;
var salud_residencia_comp002 = false;
var educacion_residencia_comp001 = false;
var educacion_residencia_comp002 = false;
var alimentacion_residencia_comp001 = false;
var alimentacion_residencia_comp002 = false;
var gestion_residencia_comp001 = false;
var gestion_residencia_comp002 = false;
var generalresidenciaNNAAbandono_comp001 = false;
var generalresidenciaNNAAbandono_comp002 = false;
var generalresidenciaNNAadolescHijo_comp001 = false;
var generalresidenciaNNAadolescHijo_comp002 = false;
var nombres_NNA_abandono_comp001 = "";
var nombres_NNA_abandono_comp002 = "";
var nombres_NNA_adolescHijo_comp001 = "";
var nombres_NNA_adolescHijo_comp002 = "";

function AnalizaCargaCompletaDatosFichas_Compare(sufijo) {
    var output = false;
    if (sufijo == "_comp001") {
        if (ctrl_ObtenerAntecedentesGenerales_comp001 == true &&
            ctrl_ObtenerNnaAbandonoDetalle_comp001 == true &&
            ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp001 == true &&
            ctrl_ObtenerAntecedentesPoblacionCapacidad_comp001 == true &&
            ctrl_ObtenerAntecedentesDotacionPersonal_comp001 == true &&
            ctrl_ObtenerAntecedentesInfraestructura_comp001 == true &&
            ctrl_ObtenerAntecedentesSeguridad_comp001 == true &&
            ctrl_ObtenerAntecedentesSalud_comp001 == true &&
            ctrl_ObtenerAntecedentesEducacion_comp001 == true &&
            ctrl_ObtenerAntecedentesAlimentacion_comp001 == true &&
            ctrl_ObtenerAntecedentesGestionResidencia_comp001 == true)
            output = true;

        if (output) {
            clearInterval(myCTRL_FichaPadre_comp001);
        }
    }
    else if (sufijo == "_comp002") {
        if (ctrl_ObtenerAntecedentesGenerales_comp002 == true &&
            ctrl_ObtenerNnaAbandonoDetalle_comp002 == true &&
            ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp002 == true &&
            ctrl_ObtenerAntecedentesPoblacionCapacidad_comp002 == true &&
            ctrl_ObtenerAntecedentesDotacionPersonal_comp002 == true &&
            ctrl_ObtenerAntecedentesInfraestructura_comp002 == true &&
            ctrl_ObtenerAntecedentesSeguridad_comp002 == true &&
            ctrl_ObtenerAntecedentesSalud_comp002 == true &&
            ctrl_ObtenerAntecedentesEducacion_comp002 == true &&
            ctrl_ObtenerAntecedentesAlimentacion_comp002 == true &&
            ctrl_ObtenerAntecedentesGestionResidencia_comp002 == true)
            output = true;

        if (output) {
            clearInterval(myCTRL_FichaPadre_comp002);
        }
    }
    return output;
}
function AnalizaCargaCompletaDatosComparaFichas() {
    var output = false;

    if (
        (generalresidencia_comp001 && generalresidencia_comp002) &&
        (generalresidenciaNNAAbandono_comp001 && generalresidenciaNNAAbandono_comp002) &&
        (generalresidenciaNNAadolescHijo_comp001 && generalresidenciaNNAadolescHijo_comp002) &&
        (poblacionCapacidad_residencia_comp001 && poblacionCapacidad_residencia_comp002) &&
        (dotacion_residencia_comp001 && dotacion_residencia_comp002) &&
        (infraestructura_residencia_comp001 && infraestructura_residencia_comp002) &&
        (seguridad_residencia_comp001 && seguridad_residencia_comp002) &&
        (salud_residencia_comp001 && salud_residencia_comp002) &&
        (educacion_residencia_comp001 && educacion_residencia_comp002) &&
        (alimentacion_residencia_comp001 && alimentacion_residencia_comp002) &&
        (gestion_residencia_comp001 && gestion_residencia_comp002)
    ) output = true;

    if (output) {
        clearInterval(myCTRL_ComparacionFichas);
    }
    return output;
}
function ReseteaVariablesControlCarga() {
    ctrl_ObtenerAntecedentesGenerales_comp001 = false;
    ctrl_ObtenerNnaAbandonoDetalle_comp001 = false;
    ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp001 = false;
    ctrl_ObtenerAntecedentesPoblacionCapacidad_comp001 = false;
    ctrl_ObtenerAntecedentesDotacionPersonal_comp001 = false;
    ctrl_ObtenerAntecedentesInfraestructura_comp001 = false;
    ctrl_ObtenerAntecedentesSeguridad_comp001 = false;
    ctrl_ObtenerAntecedentesSalud_comp001 = false;
    ctrl_ObtenerAntecedentesEducacion_comp001 = false;
    ctrl_ObtenerAntecedentesAlimentacion_comp001 = false;
    ctrl_ObtenerAntecedentesGestionResidencia_comp001 = false;

    ctrl_ObtenerAntecedentesGenerales_comp002 = false;
    ctrl_ObtenerNnaAbandonoDetalle_comp002 = false;
    ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp002 = false;
    ctrl_ObtenerAntecedentesPoblacionCapacidad_comp002 = false;
    ctrl_ObtenerAntecedentesDotacionPersonal_comp002 = false;
    ctrl_ObtenerAntecedentesInfraestructura_comp002 = false;
    ctrl_ObtenerAntecedentesSeguridad_comp002 = false;
    ctrl_ObtenerAntecedentesSalud_comp002 = false;
    ctrl_ObtenerAntecedentesEducacion_comp002 = false;
    ctrl_ObtenerAntecedentesAlimentacion_comp002 = false;
    ctrl_ObtenerAntecedentesGestionResidencia_comp002 = false;
}