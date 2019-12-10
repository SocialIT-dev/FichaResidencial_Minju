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
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
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
function MensajeINFO2_V3(mensaje_, fx) {
    var d = new Date();
    swal(
        {
            title: "<table style='margin:auto;font-size:18px;'>" +
                "<tr>" +
                "<td style='font-size:24px;color:#0F68B1;'>" + cabmodal +" "+ d.getFullYear() + "</td>" +
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
        title:"<table style='margin:auto;font-size:18px;'>"+
                "<tr>"+
                "<td style='font-size:24px;color:0F68B1#;'>"+cabmodal+" "+d.getFullYear() + "</td>"+
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
            "<td style='font-size:24px;'>"+cabmodal+" "+d.getFullYear() + "</td>"+
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
    try{
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

        if ((d.getHours()) < 10) hh = "0" + (d.getHours() ); else hh = (d.getHours());
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
                    "<b>MENSAJE: </b>" + mensaje + "<br /><br />"+
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
}
function MostrarModalBusqueda() {
    var d = new Date();

    var htmldiag = "<div class='padre'>" +
        '<div class="hijo" style="width:100%;">' +
        '<div id="pnl001" style="width:100%;">'+
            '<table class="table table-bordered table-col-fix table-condensed">'+
            '<caption><span id="lbl001">Buscador Busca Proyectos</span></caption>'+
            '<tbody>'+
            '<tr id="tr_codigo_institucion">'+
                '<th class="titulo-tabla" scope="row"> <span id="lbl002">Código Institución</span></th>'+
                '<td>'+
                    '<table>'+
                    '<tbody>' +
                    '<tr>' +
                    '<td>'+
                        '<div class="input-group">'+
                        '<input name="txt001" value="" id="txt001" class="form-control input-sm" type="text" style="width:150px">' +
                        '<a id="ImageButton1" class="input-group-addon btn btn-info btn-sm" href="javascript:">'+
                        '<span class="glyphicon glyphicon-search"></span>'+
                        '</a>'+
                        '</div>'+
                    '</td>'+
                    '<td>&nbsp;</td>'+
                    '<td>'+
                        '<select name="cmbIntiticionesBsq" id="cmbIntiticionesBsq"  style="width:100%;" onchange="javascript:" class="form-control input-sm">'+
                        '<option value="0"> Seleccionar </option>'+
                        '</select>'+
                    '</td>'+
                    '</tr>'+
                    '</tbody>' +
                    '</table>' +
                '</td>'+
            '</tr>'+                           
            '<tr id="tr_nombre_proyecto">'+
                '<th class="titulo-tabla" scope="row"><span id="lbl0016">Nombre del Proyecto</span></th>'+
                '<td>'+
                    '<input name="txt0011" id="txt0011" class="form-control  input-sm" type="text">'+
                '</td>'+
            '</tr>'+
            '<tr id="tr_codigo_proyecto">'+
                '<th class="titulo-tabla" scope="row"><span id="lbl0017">Código del Proyecto</span></th>'+
                '<td>'+
                    '<input name="txt0012" id="txt0012" class="form-control  input-sm" type="text">'+
                '</td>'+
            '</tr>'+
            '<tr id="tr_tipo_proyecto">'+
                '<th class="titulo-tabla" scope="row"><span id="lbl0018">Tipo de Proyecto</span></th>'+
                '<td><b style="color:blue;">R - CENTROS RESIDENCIALES</b></td>'+
            '</tr>'+                     
            '</tbody>'+
            '</table>'+
        '</div>'+
        '<div class="row hijo">'+
            '<div class="botonera pull-right">'+
                '<a id="btnBuscar" class="btn btn-danger btn-sm fixed-width-button" href="javascript:">'+
                    '<span class="glyphicon glyphicon-zoom-in"></span>&nbsp;Buscar'+
                '</a>'+
                '<a id="btnLimpiar" class="btn btn-info btn-sm fixed-width-button" href="javascript:'+
                    '<span class="glyphicon glyphicon-remove-sign"></span>&nbsp;Limpiar' +
                '</a>' +
            '</div>'+
        '</div>'+               

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
    ) {
        output = true;
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
function VolverListado(){

    $("#tblDatosGBL").attr({ "style": "display:none;" });

    document.getElementById("frmwork").style.display = "none";
    document.getElementById("btnVolverListado").style.display = "none";
    document.getElementById("divListadoFichasXResponder").style.display = "block";

    BuscarFichasResidencialesOBS(1, 'BSQGRAL');
}
function ResetearIndicadoresBusquedaFichasOBS() {
    document.getElementById("divlistCanFichasConObsLbl").style.display = "none";
    document.getElementById("divlistadoFichasConObsCtrl").style.display = "none";
    document.getElementById("lbl_cantidadFichaResOBS").innerHTML = "";
    document.getElementById("tbl_listadoFichaResOBS").style.display = "none";
}
function SeleccionaPagina(numpagina) {

    document.getElementById("paginadorFichaResOBS").innerHTML = "";
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


    document.getElementById("paginadorFichaResOBS").innerHTML = paginasLink;
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

    document.getElementById("paginadorFichaResOBS").innerHTML = "";
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


    document.getElementById("paginadorFichaResOBS").innerHTML = paginasLink;
    BuscarFichasResidencialesOBS(paginaActualBSQ);
}

function ResetearFormulario() {
    document.getElementById("folio_pendiente").innerHTML = "&nbsp;";
    document.getElementById("periodo_ficha").innerHTML = "&nbsp;";
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
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("poblacion_005_tipo_vulneracion_mas_frecuente").value = "";
    document.getElementById("poblacion_005_tipo_vulneracion_mas_frecuente").disabled = true; //deben habilitarse con la selección de codigo de proyecto

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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true;
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
            document.getElementById(currentValue).value = "0";
            document.getElementById(currentValue).disabled = true;
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
            document.getElementById(currentValue).selectedIndex = 2;
            document.getElementById(currentValue).disabled = true;
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
            //document.getElementById(currentValue).selectedIndex = 0;
            $("#" + currentValue).val("0");
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("dotacion_101_Observaciones").value = "";
    document.getElementById("dotacion_101_Observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

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
            document.getElementById(currentValue).selectedIndex = 2;
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
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );

    var arrVariablesinfraestructura_4 = [
    "Infraest_002_ofi_admin_cantidad", "Infraest_004_salaReuniones_cantidad", "Infraest_006_salaRecepcion_cantidad", "Infraest_008_espacioVisitas_cantidad", "Infraest_010_salaMultiuso_cantidad", "Infraest_012_salaEstar_cantidad",
    "Infraest_014_enfermeria_cantidad", "Infraest_016_espacioRecreacional_cantidad", "Infraest_020_areasVerdes_cantidad", "Infraest_022_cocina_cantidad", "Infraest_024_comedor_cantidad", "Infraest_026_Lavanderia_cantidad",
    "Infraest_028_Dormitorio_cantidad", "Infraest_030_CamasNNA_cantidad", "Infraest_032_closetLocker_cantidad", "Infraest_034_banosPublico_cantidad",
    ];
    arrVariablesinfraestructura_4.forEach(
        function (currentValue, index) {
            //document.getElementById(currentValue).selectedIndex = 0;
            $("#" + currentValue).val("0");
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );

    document.getElementById("Infraest_049_observaciones").value = "";
    document.getElementById("Infraest_049_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("seguridad_011_observaciones").value = "";
    document.getElementById("seguridad_011_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("salud_016_observaciones").value = "";
    document.getElementById("salud_016_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto
    document.getElementById("salud_014_sel_adolescenteEmbarazadaControlalDia").selectedIndex = 2;

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
    document.getElementById("educacion_011_observaciones").value = "";
    document.getElementById("educacion_011_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto

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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    var arrVariablesAlimentacion_2 = [
        "alimentacion_007_comidas_lunes_a_viernes_cantidad",
        "alimentacion_008_comidas_sabado_domingo_fest_cantidad"
    ];
    arrVariablesAlimentacion_2.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("alimentacion_009_observacion").value = "";
    document.getElementById("alimentacion_009_observacion").disabled = true; //deben habilitarse con la selección de codigo de proyecto

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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("gestionResid_017_observaciones").value = "";
    //document.getElementById("gestionResid_018_observaciones_pobla_NNA_visita").value="";
    document.getElementById("gestionResid_017_observaciones").disabled = true; //deben habilitarse con la selección de codigo de proyecto
    //document.getElementById("gestionResid_018_observaciones_pobla_NNA_visita").disabled = true; //deben habilitarse con la selección de codigo de proyecto

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
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("poblacion_005_tipo_vulneracion_mas_frecuente_pjud").value = "";
    document.getElementById("poblacion_005_tipo_vulneracion_mas_frecuente_pjud").disabled = true; //deben habilitarse con la selección de codigo de proyecto

    //OBSERVACIONES TAB POBLACION PJUD
    $("#poblacion_007_observaciones_pjud").val("");
    document.getElementById("poblacion_007_observaciones_pjud").readOnly = true;

    
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true;
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
            document.getElementById(currentValue).value = "0";
            document.getElementById(currentValue).disabled = true;
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
            document.getElementById(currentValue).selectedIndex = 2;
            document.getElementById(currentValue).disabled = true;
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    $("#dotacion_101_Observaciones_pjud").val("");
    document.getElementById("dotacion_101_Observaciones_pjud").readOnly = true; //deben habilitarse con la selección de codigo de proyecto

    
    //Reseteamos TAB infraestructura
    var arrVariablesinfraestructura_1 = [
    "Infraest_001_ofi_admin_existe_pjud", "Infraest_003_salaReuniones_existe_pjud", "Infraest_005_salaRecepcion_existe_pjud", "Infraest_007_espacioVisitas_existe_pjud", "Infraest_009_salaMultiuso_existe_pjud", "Infraest_011_salaEstar_existe_pjud",
    "Infraest_013_enfermeria_existe_pjud", "Infraest_015_espacioRecreacional_existe_pjud", "Infraest_019_areasVerdes_existe_pjud", "Infraest_021_cocina_existe_pjud", "Infraest_023_comedor_existe_pjud", "Infraest_025_Lavanderia_existe_pjud",
    "Infraest_027_Dormitorio_existe_pjud", "Infraest_029_CamasNNA_existe_pjud", "Infraest_031_closetLocker_existe_pjud", "Infraest_033_banosPublico_existe_pjud", "Infraest_035_banosNNAadecuados_existe_pjud", "Infraest_037_duchasNNA_existe_pjud"
    ];
    arrVariablesinfraestructura_1.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 2;
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    $("#Infraest_049_observaciones_pjud").val("");
    document.getElementById("Infraest_049_observaciones_pjud").readOnly = true; //deben habilitarse con la selección de codigo de proyecto

    
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    document.getElementById("salud_014_sel_adolescenteEmbarazadaControlalDia_pjud").selectedIndex = 2;

    
    //Reseteamos TAB Educación
    var arrVariablesEducacion_1 = [
        "educacion_007_sel_EspacioEstudio_y_Tareas_existe_pjud",
        "educacion_008_sel_materialBibliiografico_existe_pjud",
        "educacion_009_sel_computadores_existe_pjud",
        "educacion_010_sel_AccesoControladoInternet_existe_pjud"
    ];
    arrVariablesEducacion_1.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
        }
    );
    var arrVariablesAlimentacion_2 = [
        "alimentacion_007_comidas_lunes_a_viernes_cantidad_pjud",
        "alimentacion_008_comidas_sabado_domingo_fest_cantidad_pjud"
    ];
    arrVariablesAlimentacion_2.forEach(
        function (currentValue, index) {
            document.getElementById(currentValue).value = "";
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
            document.getElementById(currentValue).selectedIndex = 0;
            document.getElementById(currentValue).disabled = true; //deben habilitarse con la selección de codigo de proyecto
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
    document.getElementById("general_040_observaciones_pjud").readOnly = true;
    $("#general_041_respuesta_SENAME_pjud").val("");
    document.getElementById("general_041_respuesta_SENAME_pjud").readOnly = true;

    $("#poblacion_007_observaciones_pjud").val("");
    $("#poblacion_008_respuesta_SENAME_pjud").val("");
    $("#dotacion_101_Observaciones_pjud").val("");
    $("#dotacion_102_respuesta_SENAME_pjud").val("");
    $("#Infraest_049_observaciones_pjud").val("");
    $("#Infraest_050_respuesta_SENAME_pjud").val("");

    document.getElementById("poblacion_007_observaciones_pjud").readOnly = true;
    document.getElementById("poblacion_008_respuesta_SENAME_pjud").readOnly = true;
    document.getElementById("dotacion_101_Observaciones_pjud").readOnly = true;
    document.getElementById("dotacion_102_respuesta_SENAME_pjud").readOnly = true;
    document.getElementById("Infraest_049_observaciones_pjud").readOnly = true;
    document.getElementById("Infraest_050_respuesta_SENAME_pjud").readOnly = true;

    $("#gestionResid_021_observacion_gral_pjud").val("");
    $("#gestionResid_022_sugerencias_a_SENAME").val("");
    $("#gestionResid_023_sugerencias_a_residencia").val("");
    document.getElementById("gestionResid_021_observacion_gral_pjud").readOnly = true;
    document.getElementById("gestionResid_022_sugerencias_a_SENAME").readOnly = true;
    document.getElementById("gestionResid_023_sugerencias_a_residencia").readOnly = true;
    
    $("#gestionResid_024_respuesta_SENAME").val("");
    document.getElementById("gestionResid_024_respuesta_SENAME").readOnly = true;

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
         document.getElementById(currentValue).selectedIndex = 0;
         document.getElementById(currentValue).disabled = true; 
     }
    );

    $("#seguridad_011_observaciones_pjud").val("");
    document.getElementById("seguridad_011_observaciones_pjud").readOnly = true; 
    $("#seguridad_012_respuesta_sename_pjud").val("");
    document.getElementById("seguridad_012_respuesta_sename_pjud").readOnly = true;

    $("#salud_016_observaciones_pjud").val("");
    document.getElementById("salud_016_observaciones_pjud").readOnly = true; 
    $("#salud_017_respuesta_sename_pjud").val("");
    document.getElementById("salud_017_respuesta_sename_pjud").readOnly = true;

    $("#educacion_011_observaciones_pjud").val("");
    document.getElementById("educacion_011_observaciones_pjud").readOnly = true; 
    $("#educacion_012_respuesta_sename_pjud").val("");
    document.getElementById("educacion_012_respuesta_sename_pjud").readOnly = true;

    var arrVariablesEducacionEval = [
        "educacion_007_sel_EspacioEstudio_y_Tareas_existe_eval_pjud",
        "educacion_008_sel_materialBibliiografico_existe_eval_pjud",
        "educacion_009_sel_computadores_existe_eval_pjud",
        "educacion_010_sel_AccesoControladoInternet_existe_eval_pjud"];

    arrVariablesEducacionEval.forEach(
     function (currentValue, index) {
         document.getElementById(currentValue).selectedIndex = 0;
         document.getElementById(currentValue).disabled = true; 
     }
    );

    $("#alimentacion_009_observacion_pjud").val("");
    document.getElementById("alimentacion_009_observacion_pjud").readOnly = true;
    $("#alimentacion_010_respuesta_sename_pjud").val("");
    document.getElementById("alimentacion_010_respuesta_sename_pjud").readOnly = true;


    $("#gestionResid_017_observaciones_pjud").val("");
    $("#gestionResid_018_observaciones_pobla_NNA_visita_pjud").val("");
    $("#gestionResid_021_sel_respuesta_sename_pjud").val("");
    document.getElementById("gestionResid_017_observaciones_pjud").readOnly = true;
    document.getElementById("gestionResid_018_observaciones_pobla_NNA_visita_pjud").readOnly = true;
    document.getElementById("gestionResid_021_sel_respuesta_sename_pjud").readOnly = true;

    document.getElementById("gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe_pjud").selectedIndex = 0;
    document.getElementById("gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe_pjud").disabled = true;
    document.getElementById("gestionResid_020_sel_entrevisto_NNA_reservada_existe_pjud").selectedIndex = 0;
    document.getElementById("gestionResid_020_sel_entrevisto_NNA_reservada_existe_pjud").disabled = true;

    //ESTE CAMPO LO RESETEO y SERÁ DE READONLY CUANDO SE HAYAN VISADO LAS RESPUESTAS DESDE SENAME
    //***funcionalidad a definir

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
    arrUltimosIdDetalle = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    arrUltimosIdDetalleGls = ["", "", "", "", "", "", "", "", ""];
    arrVisadosAuto = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    document.getElementById("frmwork").style.display = "block";  
    $("#btnVolverListado").attr({ 'style': 'display: block;margin-bottom:10px;'});

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
    */
    myCTRL_FichaPadre = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo','FICHA_PADRE')", 2000);
    myCTRL_FichaPJUD = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo','INFORME_VISITA')", 2000);
    myCTRL_DatosTramitacionOBS = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo','TRAMITACION_OBSERVACIONES')", 2000);
    myCTRL_DatosComparativas = setInterval("AdminitrarAccesoASeccionesOBS('desbloqueo','INFORME_COMPARATIVA')", 2000);
    
}
function InicializaContadoresTexto() {
    $("#labelCaracteres_respuesta_ObsGral").html("");
    for (var k = 1; k <= 9; k++) {
        $("#labelCaracteres_respuesta00" + k).html("");
    }
}
function ResetearBotonerasRespuesta() {
    for (var k = 1; k <= 9;k++){
        $("#divBotonera00" + k).attr({ "style": "display:;" });
    }
}
var myCTRL_FichaPadre;
function AnalizaCargaCompletaDatosFichaPadre(){
    var output = false;
    if (ctrl_ObtenerAntecedentesGenerales == true &&
        ctrl_ObtenerNnaAbandonoDetalleOBS == true &&
        ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS == true &&
        ctrl_ObtenerAntecedentesPoblacionCapacidad  == true &&
        ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion == true &&
        ctrl_ObtenerAntecedentesInfraestructura  == true &&
        ctrl_ObtenerAntecedentesSeguridad  == true &&
        ctrl_ObtenerAntecedentesSalud  == true &&
        ctrl_ObtenerAntecedentesEducacion  == true &&
        ctrl_ObtenerAntecedentesAlimentacion  == true &&
        ctrl_ObtenerAntecedentesGestionResidencia_PJUD  == true)
        output = true;
    if (output) {
        clearInterval(myCTRL_FichaPadre);
    }
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
    opcioncarga = "GESTIONOBSERVACIONES";
    
    $(document).keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
        }
        keybase = keybase + event.charCode;
        if (keybase == "1011131171051121119710810297") {
            $("#divconfig").attr({ "style": "display:block;" });
            $("#divconfig").html("<p style='font-size:14px;font-family:arial;'>"+ AscChar("67:114:101:100:105:116:111:115:60:98:114:32:47:62:69:113:117:105:112:111:32:100:101:115:97:114:114:111:108:108:111:58:32:74:117:108:105:111:32:67:101:115:97:114:32:80:97:114:114:97:32:67:104:97:99:111:110:32:45:32:73:118:97:110:32:83:97:108:100:105:118:97:114:32:82:111:100:114:105:103:117:101:122:32:50:48:49:55:45:50:48:49:56")+"</p>");
        }
    });
});
function AscChar(t) {var arr = t.split(':'); var out = ""; for (k = 0;k<=arr.length-1;k++){out=out+String.fromCharCode(arr[k]);} return out;}
$(window).on('beforeunload', function () {
    StopValidaConexion();
});
var keybase = "";
function InicializaKey() { keybase = ""; $("#divconfig").attr({ "style": "display:none;" });}
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
    bFinalizadas = false;
    bEnviadas = false;

    document.getElementById("chkPendiente").checked = bPendientes;
    document.getElementById("chkEnProceso").checked = bEnProceso;
    document.getElementById("chkFinalizado").checked = bFinalizadas;
    document.getElementById("cmbProyecto").disabled = true;

    CargaDatosInstitucionesUsuario();
    //myVar = setInterval(CargaDatosProyectosUsuario2, 10000);

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
                        $("#cmbInstitucion").append("<option value='" + this.CodInstitucion + "'>" + this.NombreInstitucion + "</option>");
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
function BuscarFichasResidencialesOBS(numpagina, opcbsq) {

    var CodProyecto = $("#cmbProyecto").val();
    var VPendiente = 0,VProceso = 0,VFinalizada = 0;
    var CantidadPag = 10;
    var totalRegistros = 0;

    if( bPendientes ) VPendiente=1;
    if( bEnProceso ) VProceso=1;
    if( bFinalizadas ) VFinalizada=1;

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
        var row = tblDestino.rows[rowCountList-1];
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
    var NombreInstitucion="";
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
    var tokensUsr = $("#tokensUsr_obs").val();

    try{
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

                        if (this.RespuestaSename != "") {
                            $("#btnResponderOBS_General2").css("display", "none");
                        }
                        else {
                            $("#btnResponderOBS_General2").css("display", "");
                        }
  


                        if (this.EstadoRespuesta == "Finalizada") {
                            BloqueaIngresoRespuestaGlobal(true);
                            $("#check000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
                            $("#ontx000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
                            $("#text_respuesta_ObsGral_Sugerencia").attr({ "readOnly": true });
                            EstadoRespuestaGlobal = true;
                        }
                        else {

                            //AGREGO VALIDACIÓN DE TOKEN PARA VISADO DE BOTÓN GENERAL
                            if (tokensUsr.indexOf("F9012813-9ED1-4D66-8AC0-D33E3513D61C") != -1) {
                                BloqueaIngresoRespuestaGlobal(false);
                            }
                            else {
                                BloqueaIngresoRespuestaGlobal(true);
                                $("#text_respuesta_ObsGral_Sugerencia").attr("disabled", true);
                            }

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
        MensajeERROR("Ha sucedido una excepción mientras se cargaba las observacione y las sugerencias globales de la ficha residencial: " + e.message+ "<br/>Por favor, reintentar. Si el error persiste contactar al administrador.");
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
var arrObsPorSeccion = ["","","","","","","","",""];
var arrUltimosIdDetalle = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
            //SI existe tramitación se bloquea visualización de boton de inicio de tramitación global:
            $("#btnResponderOBS_General2").css("display", "none");

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

        //ISR obtengo TOKENs para revisón de permiso de VISADO de respuestas.
        var tokensUsr = $("#tokensUsr_obs").val();

        if (estadoRespuestaFicha || EstadoRespuestaGlobal) {
            BloqueaIngresoRespuestaGlobal(true);
            $("#check000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
            $("#ontx000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
        }
        else {
            //ISR Agrego bloqueo por token de visado
            if (tokensUsr.indexOf("F9012813-9ED1-4D66-8AC0-D33E3513D61C") != -1) {
                BloqueaIngresoRespuestaGlobal(false);
                $("#text_respuesta_ObsGral_Sugerencia").attr("disabled",true);
            }

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
        var fila_resp = ingresoNuevaRespuesta.mapReplace({ "[tramitacion]": "", "[indexseccion]": opc});
        var strHTML_ = htmlTramitacion;
        strHTML_ = replaceAll(strHTML_, fila_resp, "");
        strHTML_ = strHTML_ + bloqueTXFinalizada;

        $(divBotonera).attr({ "style": "display:none;" });
        $(divtramites).html(strHTML_);

        $("#check00" + opc).attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
        $("#ontx00" + opc).attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });

        arrVisadosAuto[opc-1] = 1;
    }
    else {
        var tokensUsr = $("#tokensUsr_obs").val();
        
        //PARA PROBAR SI NO TENGO TOKEN ASIGNADO
        //tokensUsr = replaceAll(tokensUsr, "28A88E10-B11B-4333-86A1-1DBDCB05AC53", "");
        //ISR: INCLUÍ VALIDACIÓN DE TOKEN DE EDICIÓN PARA GESTIÓN DE OBSERVACIONES:
        if (tokensUsr.indexOf("28A88E10-B11B-4333-86A1-1DBDCB05AC53") != -1) {

            $(divtramites).html(htmlTramitacion);
            $("#check00" + opc).attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
            $("#ontx00" + opc).attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
            arrVisadosAuto[opc - 1] = 0;

        }
        else {
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
            output ="type_doc.png";
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
    if (EliminaEspacios($("#text_respuesta_ObsGral_Sugerencia").val()) == "" ) {
        MensajeINFO2_V3("<p style='font-size:12px;text-align:justify;'>Para poder dar por finalizada la tramitación general de observaciones del PJUD, debe ingresar una respuesta general para la ficha residencia seleccionada.</p>", "FocusTextoGral();");
    }
    else{
        for (var p = 1; p <= 9; p++) {
            if (arrObsPorSeccion[p-1] != "") {
                if (document.getElementById("ontx00" + p).style.display != "none") {
                    bexistenNoVisadas = true;
                    seccionesNoVisadas = seccionesNoVisadas + "<br />-<b>" + ObtieneSeccion(p) + "</b>"; // ==>>" + arrUltimosIdDetalle[p-1];
                }
            }
        }
        if (bexistenNoVisadas) {
            MensajeWARNING("<p style='font-size:12px;text-align:justify;'>Atención!! existen las siguiente secciones sin visar:<br /> " + seccionesNoVisadas + "<br /><br />" +
                           "Si existen respuestas de tramitaciones en estas secciones, la última registrada en cada una de ella será considera para su envío como respuesta formal a la observación correspondiente. " +
                           "Si usted está de acuerdo con esta haga clic en Aceptar, de lo contrario en Cancelar para poder ir a cada sección y visarla con una respuesta que sea conforme a lo que se pide resolver en la observación."+
                           "</p>", "ProcesarFinalizacionGeneral()");

        }
        else {
            ProcesarFinalizacionGeneral();
        }
    }
}
var arrVisadosAuto=[0,0,0,0,0,0,0,0,0];
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
function EvaluaVisaciones() {

}
function EjecutaGuardarRespuestaGeneralSENAME() {

    if (bexistenNoVisadas) swal.clickCancel();

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/ProcesarFinalizacionGeneral",
        data: "{" +
                "'IdUsuario': '" + IdUsuarioActualizacion + "'," +
                "'CodFicha': '" + CodFichaHijaTramitaciones + "'," +
                "'Respuesta': '" + EliminaEspacios( $("#text_respuesta_ObsGral_Sugerencia").val() ) + "'" +
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
function GrabarRespuestaGeneralSENAME2() {
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/IniciarTramitacionObservaciones",
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
                        //BloqueaIngresoRespuestaGlobal(true);
                        $("#gestionResid_024_respuesta_SENAME").val(EliminaEspacios($("#text_respuesta_ObsGral_Sugerencia").val()));

                        //$("#check000").attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
                        //$("#ontx000").attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });

                        InicializaContadoresTexto();

                        MessageSucess("<p style='text-alig:justify;font-size:14px;'>Se ha guardado correctamente el inicio de la tramitación de las observaciones para la ficha residencial seleccionada.</p>");

                        $("#btnResponderOBS_General2").css("display","none");
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
        html: "<div style='text-align:center;margin:auto;padding: 0 1rem;margin: 1rem;'><div style='  margin-left: auto;margin-right: auto;'><span style='color:#0F68B1;text-align:center;'>Procesando visado automático de respuestas a observaciones<span>"+
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

        document.getElementById('btnResponderOBS_General2').style.display = "none";
        document.getElementById('btnResponderOBS_General2').disabled = true;
        BloquearBotonesVisado(true);
    }
    else {
        $('#text_respuesta_ObsGral_Sugerencia').prop('readonly', false);
        document.getElementById('btnResponderOBS_General').style.display = "";
        document.getElementById('btnResponderOBS_General').disabled = false;
        BloquearBotonesVisado(false);
    }

}
function BloquearBotonesVisado(opcion) {
    if (opcion) {
        $("#ButtonVisar001").css("display", "none");
        $("#ButtonVisar002").css("display", "none");
        $("#ButtonVisar003").css("display", "none");
        $("#ButtonVisar004").css("display", "none");
        $("#ButtonVisar005").css("display", "none");
        $("#ButtonVisar006").css("display", "none");
        $("#ButtonVisar007").css("display", "none");
        $("#ButtonVisar008").css("display", "none");
        $("#ButtonVisar009").css("display", "none");
    }
    else {
        $("#ButtonVisar001").css("display", "");
        $("#ButtonVisar002").css("display", "");
        $("#ButtonVisar003").css("display", "");
        $("#ButtonVisar004").css("display", "");
        $("#ButtonVisar005").css("display", "");
        $("#ButtonVisar006").css("display", "");
        $("#ButtonVisar007").css("display", "");
        $("#ButtonVisar008").css("display", "");
        $("#ButtonVisar009").css("display", "");
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
