//NOTA: 
//Cuando se realicen cambios en esta librería revisar las referencias a la carpeta de las imágenes
//estas debería quedar indicadas del siguiente modo:  src="images/[ruta + nombre de imagen]", 
//donde [ruta + nombre de imagen] es la ruta final más el archivo referenciado.
var cabObservacionTramite = '<br/>' +
'<span style="font-size:13px;color:#1071c3 !important;">OBSERVACI&Oacute;N</span>'+
'<div class="formcontrolDIVOBS">[observacion_antecedentes_]</div>'+
'<img src="images/nextstep.png" style="float:left;"/>';

var cuerpoRespuesta = '<div id="div2" class="formcontrolDIVResp">' +
'FECHA: [fecha_]<br />'+
'HORA: [hora_]<br />'+
'USUARIO: [usuario_]<br /><br />'+
'[mensaje]<br /><br />'+
'<hr class="style-one" />'+
'[listado_adjuntos]'+
'<br />'+
'</div>'+
'<img src="images/nextstep.png" style="float:left;"/>';

var formatoadjunto = '<img src="images/[tipo_imagen]" class="imgAdjunto"  onclick="VerDoc(this);" id="[id_doc]" data-url="[url_doc]"/>&nbsp;[nombre_archivo_adjunto]<hr class="style-one"/>';

var ingresoNuevaRespuesta = '[tramitacion]<textarea id="text_respuesta_actual00[indexseccion]" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;" maxlength="4000" onkeyup="return ContadorCaracter2(this);" data-labelcount="labelCaracteres_respuesta00[indexseccion]"></textarea>';
var bloqueTXFinalizada = '<input type="text" class="form-control textCampo3" style="width:99%;height:60px;text-align:center;font-size:32px;color:#3C83BF;pading:auto;max-height:60px;scrolling:no;" readonly="readonly" value="TRAMITACIÓN FINALIZADA">';
var bloqueTXPendiente= '<input type="text" class="form-control textCampo3" style="width:99%;height:60px;text-align:center;font-size:32px;color:#3C83BF;pading:auto;max-height:60px;scrolling:no;" readonly="readonly" value="TRAMITACIÓN PENDIENTE">';


function CargaTramitacionObservaciones(textoObs, divtramitacion, CodFicha, opc) {
    var strformatotextoObs = cabObservacionTramite.mapReplace({ "[observacion_antecedentes_]": textoObs });



    if (opcioncarga == "GESTIONOBSERVACIONES") {
        //Posibilidad de ingreso de nueva tramitaciones
        strformatotextoObs = strformatotextoObs + ingresoNuevaRespuesta.mapReplace({ "[indexseccion]": opc });
    }
    else {
        //Sólo despliegue de tramitaciones realizadas
        strformatotextoObs = strformatotextoObs + "[tramitacion]";
    }

    $("#" + divtramitacion).html(strformatotextoObs);
}

function ConfiguraUploadX_(opc) {
    
    if (existedirRespuesta == "") {
        $.ajax({
            type: "POST",
            url: "FichaResidencialObservaciones.aspx/ObtenerDirectorioAdjunto",
            data: "{'rutarepositorio':'" + $("#rutarepositorio").val() + "'}",
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
                        if (this.mensaje_error != "") {
                            MensajeERROR(this.mensaje_error);
                            return;
                        }
                        else {
                            existedirRespuesta = this.directorio_adjunto;
                            existePathRespuesta = this.path_adjunto;
                            //alert(existedirRespuesta);
                            document.getElementById('filesX00' + opc).addEventListener('change', handleFileSelect, false);
                        }
                    }
                );
            }
        });
    }
    else {
        document.getElementById('filesX00' + opc).addEventListener('change', handleFileSelect, false);
    }
}
var existedirRespuesta = "";
var existePathRespuesta = "";
var sobreescribirAdjunto_ = "NO";
var files;
function handleFileSelect(evt) {
    files = evt.target.files; // FileList object
    var archivosRechazados = "";

    ConfiguraCargando();

    var id = this.id.mapReplace({"filesX00":""});

    numeroArchivosel = files.length;
    
    // files is a FileList of File objects. List some properties.
    var output = [];

    //alert($("#rutarepositorio").val());

    for (var i = 0, f; f = files[i]; i++) {
    
        //f.name 
        //f.type 
        //f.size bytes
        //f.lastModified
        var peso = f.size / 1024;
        if (ExtensionPermitida(f.name) && peso <= parseInt($("#maximoTamanoCarpeta").val(), 10)) {
            var formData = new FormData();
            formData.append("file[]", f)
            formData.append("folderinput", existedirRespuesta);
            formData.append("rutarepositorio", $("#rutarepositorio").val());
            formData.append("sobreescribir", sobreescribirAdjunto_);
            
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "FichaResidencialupload.aspx");

            xhr.onload = function (e) {
                if (this.readyState == 4 && this.status == 200) {

                    //alert(this.response);
                    var jsondata = JSON.parse(this.response);

                    if (jsondata.upload == "OK" || jsondata.upload == "OK_OVERWRITE") {
                        //Si la carga se realizó correctamente, muestra en listado archivos adjunto que se registrarán junto con la respuesta: 
                        if (jsondata.upload == "OK"){
                            var archivo = jsondata.data.toUpperCase();
                            var tblOBJ = 'tbl00' + id;
                            var opc = id;

                            //si el archivo ya se cargo no se incorpora al listado
                            if (!RevisaEnDocLista(opc, jsondata.nombre_original)) {
                                var tbl = document.getElementById(tblOBJ);
                                var rowCount = tbl.rows.length;
                                var row = tbl.insertRow(rowCount);
                                var cell1 = row.insertCell(0);
                                var type = jsondata.ContentType;
                                var size = jsondata.ContentLength + " Bytes";
                                existedirRespuesta = jsondata.folderinput;
                                cell1.dataset.archivo = jsondata.data;
                                cell1.dataset.linkarchivo = jsondata.linkarchivo;
                                cell1.dataset.codarchivo = jsondata.codarchivo;
                                cell1.innerHTML = '<div style="vertical-align:middle;padding:auto;font-size:13px;"><i class="glyphicon glyphicon-remove" style="cursor:pointer;color:red;font-size:16px;float:left;" title="Eliminar adjunto" onclick="EliminarAdjunto(this,' + opc + ');" id="fila_' + rowCount + '" data-rowsel="' + rowCount + '" data-archivo="' + archivo + '" data-codarchivo="' + jsondata.codarchivo + '" data-linkarchivo="' + jsondata.linkarchivo + '" data-type="' + type + '" data-size="' + size + '"></i>&nbsp;<b>' + jsondata.nombre_original + '</b> <span style="color:#BDBDBD;">(' + type + ', ' + size + ')</span></div>';
                            }
                            numeroArchivosel--;
                            ConfiguraCargando();
                        }
                        else{
                            MensajeINFO2_V2("El archivo que trata de subir ya existe en el servidor. ¿Desea sobreescribirlo?", "SobreEscribirAdjunto('" + id + "');");
                            numeroArchivosel--;
                            ConfiguraCargando();
                        }
                    }
                    else {
                        //Si la carga NO se realizó correctamente despliega mensaje de error:
                        DesplegarExcepcionCriticaApp(jsondata.data);
                    }
                }
            };
            xhr.send(formData);
        }
        else {
            archivosRechazados = archivosRechazados + "<br />-" + f.name + " (" + peso + " KB)";
        }
    }
    if (archivosRechazados != "") {
        numeroArchivosel = 0;
        MensajeINFO("<p style='text-align:justify;font-size:14px;'>Los siguientes archivos no fueron cargados por no estar autorizada la carga de ese tipo de archivos por razones de seguridad o por que su tamaño excede el máximo permitido: <br / >" + archivosRechazados + "</p>");
        ConfiguraCargando();
    }
}
function SobreEscribirAdjunto(id) {
    var archivosRechazados = "";
    ConfiguraCargando();

    var id = id.mapReplace({ "filesX00": "" });

    numeroArchivosel = files.length;

    // files is a FileList of File objects. List some properties.
    var output = [];
    

    for (var i = 0, f; f = files[i]; i++) {

        //alert("files.length= " + files.length + " >>> f.name=" + f.name + " >>> f.size=" + f.size);
        //f.name 
        //f.type 
        //f.size bytes
        //f.lastModified
        var peso = f.size / 1024;
        if (ExtensionPermitida(f.name) && peso <= parseInt($("#maximoTamanoCarpeta").val(), 10)) {
            var formData = new FormData();
            formData.append("file[]", f)
            formData.append("folderinput", existedirRespuesta);
            formData.append("rutarepositorio", $("#rutarepositorio").val());
            formData.append("sobreescribir", "SI");

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "FichaResidencialupload.aspx");

            xhr.onload = function (e) {
                if (this.readyState == 4 && this.status == 200) {

                    //alert(this.response);
                    var jsondata = JSON.parse(this.response);

                    if (jsondata.upload == "OK") {
                        //Si la carga se realizó correctamente, muestra en listado archivos adjunto que se registrarán junto con la respuesta: 
                            var archivo = jsondata.data.toUpperCase();
                            var tblOBJ = 'tbl00' + id;
                            var opc = id;

                            //si el archivo ya se cargo no se incorpora al listado
                            if (!RevisaEnDocLista(opc, jsondata.nombre_original)) {
                                var tbl = document.getElementById(tblOBJ);
                                var rowCount = tbl.rows.length;
                                var row = tbl.insertRow(rowCount);
                                var cell1 = row.insertCell(0);
                                var type = jsondata.ContentType;
                                var size = jsondata.ContentLength + " Bytes";
                                existedirRespuesta = jsondata.folderinput;
                                cell1.dataset.archivo = jsondata.data;
                                cell1.dataset.linkarchivo = jsondata.linkarchivo;
                                cell1.dataset.codarchivo = jsondata.codarchivo;
                                cell1.innerHTML = '<div style="vertical-align:middle;padding:auto;font-size:13px;"><i class="glyphicon glyphicon-remove" style="cursor:pointer;color:red;font-size:16px;float:left;" title="Eliminar adjunto" onclick="EliminarAdjunto(this,' + opc + ');" id="fila_' + rowCount + '" data-rowsel="' + rowCount + '" data-archivo="' + archivo + '" data-codarchivo="' + jsondata.codarchivo + '" data-linkarchivo="' + jsondata.linkarchivo + '" data-type="' + type + '" data-size="' + size + '"></i>&nbsp;<b>' + jsondata.nombre_original + '</b> <span style="color:#BDBDBD;">(' + type + ', ' + size + ')</span></div>';
                            }
                            numeroArchivosel--;
                            ConfiguraCargando();
                    }
                    else {
                        //Si la carga NO se realizó correctamente despliega mensaje de error:
                        DesplegarExcepcionCriticaApp(jsondata.data);
                    }
                }
            };
            xhr.send(formData);
        }
        else {
            archivosRechazados = archivosRechazados + "<br />-" + f.name + " (" + peso + " KB)";
        }
    }
    if (archivosRechazados != "") {
        numeroArchivosel = 0;
        MensajeINFO("<p style='text-align:justify;font-size:14px;'>Los siguientes archivos no fueron cargados por no estar autorizada la carga de ese tipo de archivos por razones de seguridad o por que su tamaño excede el máximo permitido: <br / >" + archivosRechazados + "</p>");
        ConfiguraCargando();
    }
}

function ObtenerExtension(nombreArchivo) {
    var arrPartofFile = nombreArchivo.split('.')
    return(arrPartofFile[arrPartofFile.length - 1]);
}
function ExtensionPermitida(file) {
    //var output = true;
    //var allowedExtensions = /(.jpg|.jpeg|.png|.gif|.doc|.docx|.xls|.xlsx|.mp4|.mp3|.txt|.pdf|.zip|.rar|.ppt|.pptx)$/i;
    //if (!allowedExtensions.exec(file)) {
    //    output = false;
    //}
    var output = false;
    file = file.reverse();
    var posPoint = file.indexOf(".");
    var extension = file.substring(0, posPoint+1);
    extension = extension.reverse();
    //alert(extension);
    var arrTipo = $("#tipoArchivoPermitido").val().split(',');
    for (var k = 0; k <= arrTipo.length - 1; k++) {
        if(extension == arrTipo[k]){
            output = true;
            break;
        }
    }
    return output;
}
var strHTML_restoAdjuntos = "";
function EliminarAdjunto(objSel, opc) {
    var obj = $("#" + objSel.id);

    var indextbl = parseInt(obj.data("rowsel"),10);
    var archivo, codarchivo, linkarchivo, type, size;
    var tbl = document.getElementById("tbl00" + opc);
    var divtbl = document.getElementById("files00" + opc);
    var rowcount = tbl.rows.length;
    var filasnew = "";
    var indexnew = 0;
    var archivoDelete = "";
    var codarchivoDelete = 0;
    var eliminaDir = "NO";
    //alert(indextbl + "-->" + archivo + "-->" + rowcount);

    for (k = 0; k <= rowcount -1; k++) {
        if (k != indextbl) {
            //alert('tbl.rows[k].dataset.archivo= ' + tbl.rows[k].cells[0].dataset.archivo);
            archivo = tbl.rows[k].cells[0].dataset.archivo;
            codarchivo = tbl.rows[k].cells[0].dataset.codarchivo;
            linkarchivo = tbl.rows[k].cells[0].dataset.linkarchivo;
            type= tbl.rows[k].cells[0].dataset.type;
            size = tbl.rows[k].cells[0].dataset.size;
            filasnew = filasnew + '<tr><td data-archivo="' + archivo + '" data-codarchivo="' + codarchivo + '" data-linkarchivo="' + linkarchivo + '"><div style="vertical-align:middle;padding:auto;font-size:13px;"><i class="glyphicon glyphicon-remove" style="cursor:pointer;color:red;font-size:16px;float:left;" title="Eliminar adjunto" onclick="EliminarAdjunto(this,' + opc + ');" id="fila_' + indexnew + '" data-rowsel="' + indexnew + '" data-archivo="' + archivo + ' data-codarchivo="' + codarchivo + '" data-linkarchivo="' + linkarchivo + '"></i>&nbsp;<b>' + archivo + '</b> <span style="color:#BDBDBD;">(' + type + ', ' + size + ')</span></div></td></tr>';
            indexnew++;
        }
        else {
            archivo = tbl.rows[k].cells[0].dataset.archivo;
            codarchivoDelete = tbl.rows[k].cells[0].dataset.codarchivo;
            archivoDelete = codarchivoDelete + "_" + $("#idusuario_conect_obs").val() + "_" + archivo;
        }
    }
    //alert("archivoDelete= " + archivoDelete);
    strHTML_restoAdjuntos = "<table id='tbl00" + opc + "'>" + filasnew + "</table>";
    //$("#files00" + opc).html("<table id='tbl00" + opc + "'>" + filasnew + "</table>");
    if (filasnew == "") {
        eliminaDir = "SI";
    }

    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/EliminaDocumentoAdjunto",
        data: "{" +
              "'archivoDelete': '" + archivoDelete + "'," +
              "'dirRespuesta': '" + existedirRespuesta + "'," +
              "'eliminaDir': '" + eliminaDir + "'," +
              "'rutarepositorio': '" + $("#rutarepositorio").val() + "'," +
              "'codarchivoDelete': '" + codarchivoDelete + "'" +
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
                    

                    if (this.resultado_operacion.indexOf("OK") != -1) {
                        //alert(this.resultado_operacion);
                        $("#files00" + opc).html(strHTML_restoAdjuntos);
                        if (eliminaDir == "SI") {
                            existedirRespuesta = "";
                        }
                        strHTML_restoAdjuntos = "";
                    }
                    else {
                        MensajeERROR(this.mensaje_error);
                    }
                }
            );
        }
    });
}

function RevisaEnDocLista(opc, nombre) {
    var output = false;
    var tbl = document.getElementById("tbl00" + opc);
    var rowcount = tbl.rows.length;
    for (k = 0; k <= rowcount - 1; k++) {
        var row = tbl.rows[k];
        if (row.cells[0].dataset.archivo.toUpperCase() == nombre.toUpperCase()) {
            output = true;
            break;
        }
    }
    return output;
}
var numeroArchivosel = 0;
function ConfiguraCargando() {
    if (numeroArchivosel == 0) {
        if (document.getElementById("preloading").style.display == "none") {
            document.getElementById("preloading").style.display = "";
            document.getElementById("onloading").style.display = "none";
        }
        else {
            document.getElementById("preloading").style.display = "none";
            document.getElementById("onloading").style.display = "";
        }
    }
}
var correlativoIdDetalle = 1;
function GrabarRespuestaActual(opc) {
    var textoResp = EliminaEspacios($("#text_respuesta_actual00" + opc).val());
    var listadoArchivos = "";
    var linkarchivos = "";
    var codarchivos = "";

    if (textoResp == "") {
        MensajeINFO2_V3("Para enviar una respuesta de tramitación debe ingresar el texto de esta", '$("#text_respuesta_actual00' + opc + '").focus();');
        return;
    }
    else {
        var tbl = document.getElementById("tbl00" + opc);
        if (tbl.rows.length > 0) {
            for (k = 0; k <= tbl.rows.length - 1; k++) {
                //alert(tbl.rows[k].cells[0].dataset.archivo);
                listadoArchivos = listadoArchivos + tbl.rows[k].cells[0].dataset.archivo + ";";
                linkarchivos = linkarchivos + tbl.rows[k].cells[0].dataset.linkarchivo + ";";
                codarchivos = codarchivos + tbl.rows[k].cells[0].dataset.codarchivo + ";";
            }
            listadoArchivos = listadoArchivos.substring(0, listadoArchivos.length - 1);
            linkarchivos = linkarchivos.substring(0, linkarchivos.length - 1);
            codarchivos = codarchivos.substring(0, codarchivos.length - 1);
        }
    }

	//@IdUsuarioActualizacion   INT,
    //@CodFicha                 INT,
    //@CodEstado                INT,            ==> 2 respuesta parcial x seccion
	//@IdTipoRespuesta          INT,            ==> opc
    //@CodEstadoDetalle         INT,            ==> 2 respuesta parcial x seccion
    //@Respuesta                NVARCHAR(MAX),  ==> textoResp
	//@IdRespuesta              INT,            ==> Sin respuesta existente , envío 0 de lo contrario debo cargar el id respuesta asociado al codficha
    //@NombreArchivos           NVARCHAR(MAX)   ==> listadoArchivos

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
    ActivaDesactivaBotonResponder(opc, true);
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/GrabarRespuestaObservacionesFicha",
        data: '{' +
                '"CodFicha":"' + $("#idcodfichaOBS_pjud ").val() + '",' +
                '"IdUsuarioActualizacion":"' + $("#idusuario_conect_obs").val() + '",'+
                '"CodEstado":"' + 2 + '",'+
                '"IdTipoRespuesta":"' + opc + '",'+
                '"CodEstadoDetalle":"' + 2 + '",'+
                '"Respuesta":"' + textoResp + '",' +
                '"IdRespuesta":"' + $("#IdRespuesta").val() + '",'+
                '"NombreArchivos":"' + listadoArchivos + '",' +
                '"FolderAdjuntos":"' + linkarchivos + '",' +
                '"rutarepositorio":"' + $("#rutarepositorio").val() + '",' +
                '"codarchivos":"' + codarchivos + '",' +
                '"dirRespuesta":"' + existedirRespuesta + '"' +
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
                    var strError = "";
                    //alert(this.REGISTRO_ACTUALIZADO + " <==> " + this.ETAPAS_PROCESADAS);
                    if (this.REGISTRO_ACTUALIZADO != "-1" && this.ETAPAS_PROCESADAS == "TODAS" && this.REGISTRO_ACTUALIZADO != null) {

                        //Actualizo valor de id de respuesta asocioado a la ficha de observaciones PJUD
                        $("#IdRespuesta").val(this.REGISTRO_ACTUALIZADO);
                        //reseteo mensaje de respuesta
                        $("#text_respuesta_actual00" + opc).val("");
                        //reseteo listado de documentos adjuntos
                        $("#files00" + opc).html("<table id='tbl00" + opc + "'></table>");
                        MessageSucess("Se ha ingresado exitosamente una respuesta a la tramitación de observaciones de ficha residencial seleccionada.");

                        switch (opc) {
                            case 1://antecedentes generales

                                GeneraNuevaEntradadeRespuesta("#div_tramitacion001", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 9://antecedentes población capacidad
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion009", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 2://antecedentes dotación personal
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion002", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 3://antecedentes infraestructura
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion003", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 4://antecedentes seguridad
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion004", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 5://antecedentes salud
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion005", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 6://antecedentes educacion
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion006", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 7://antecedentes alimentacion
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion007", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 8://antecedentes gestión residencia
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion008", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                        }
                        arrUltimosIdDetalle[opc - 1] = this.ID_DETALLE;
                        arrUltimosIdDetalleGls[opc - 1] = textoResp;
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
                }
            );
        }
        ActivaDesactivaBotonResponder(opc, false);

    });

}
function ActivaDesactivaBotonResponder(opc, bactive) {
    switch (opc) {
        case 1:
            document.getElementById("ButtonResponder001").disabled = bactive;
            break;
        case 9:
            document.getElementById("ButtonResponder009").disabled = bactive;
            break;
        case 2:
            document.getElementById("ButtonResponder002").disabled = bactive;
            break;
        case 3:
            document.getElementById("ButtonResponder003").disabled = bactive;
            break;
        case 4:
            document.getElementById("ButtonResponder004").disabled = bactive;
            break;
        case 5:
            document.getElementById("ButtonResponder005").disabled = bactive;
            break;
        case 6:
            document.getElementById("ButtonResponder006").disabled = bactive;
            break;
        case 7:
            document.getElementById("ButtonResponder007").disabled = bactive;
            break;
        case 8:
            document.getElementById("ButtonResponder008").disabled = bactive;
            break;
    }
}
function GeneraNuevaEntradadeRespuesta(div_tramitacion00n, listadoArchivos, textoResp, opc, linkarchivos, codarchivos) {
    var extension;
    var calculaImagen;
    var adjuntos = "";

    var fila_resp = ingresoNuevaRespuesta.mapReplace({ "[tramitacion]": "", "[indexseccion]": opc });
    var strHTML_ = $(div_tramitacion00n).html();

    strHTML_ = replaceAll(strHTML_, fila_resp, "");

    if (listadoArchivos.indexOf(';') != -1) {
        var arrAdjuntos = listadoArchivos.split(';');
        var arrLink = linkarchivos.split(';');
        var arrCode = codarchivos.split(';');

        for (var k = 0; k <= arrAdjuntos.length - 1; k++) {
            extension = ObtenerExtension(arrAdjuntos[k]);
            calculaImagen = ObtenerTipoImagen(extension);

            adjuntos = adjuntos + formatoadjunto.mapReplace({ "[nombre_archivo_adjunto]": arrAdjuntos[k], "[tipo_imagen]": calculaImagen, "[url_doc]": arrCode[k], "[id_doc]": "tmpid_detalle" + "_" + correlativoIdDetalle });
            correlativoIdDetalle++;
        }
    }
    else {

        if (listadoArchivos != "") {
            extension = ObtenerExtension(listadoArchivos);
            calculaImagen = ObtenerTipoImagen(extension);
            adjuntos = formatoadjunto.mapReplace({ "[nombre_archivo_adjunto]": listadoArchivos, "[tipo_imagen]": calculaImagen, "[url_doc]": codarchivos, "[id_doc]": "tmpid_detalle" + "_" + correlativoIdDetalle });
            correlativoIdDetalle++;
        }
    }

    var d = new Date();
    var mm = d.getMonth();
    var dd = d.getDay();
    var yy = d.getFullYear();
    var hh = d.getHours();
    var mi = d.getMinutes();
    var ss = d.getSeconds();
    if ((mm + 1) < 10) mm = "0" + (mm + 1); else mm = (mm + 1);
    if (dd < 10) dd = "0" + dd;
    if (hh < 10) hh = "0" + hh;
    if (mi < 10) mi = "0" + mi;
    if (ss < 10) ss = "0" + ss;
    var fecha = dd + "-" + mm + "-" + yy;
    var hora = hh + ":" + mi + ":" + ss;

    var strtramitacion_ = cuerpoRespuesta.mapReplace({
        "[fecha_]": fecha,
        "[hora_]": hora,
        "[usuario_]": $("#nombreusuariogls").val(),
        "[mensaje]": textoResp,
        "[listado_adjuntos]": adjuntos
    });

    $(div_tramitacion00n).html(strHTML_ + strtramitacion_ + fila_resp);
    $("#labelCaracteres_respuesta00" + opc).html("");
}

function VisarUltimaRespuesta(opc) {
    var tipoAntecedentes = "";
    var objinput = "#text_respuesta_actual00" + opc;
    if ($(objinput).val() != "") {
        switch (opc) {
            case 1:
                tipoAntecedentes = " generales";
                break;
            case 2:
                tipoAntecedentes = " dotación personal";
                break;
            case 3:
                tipoAntecedentes = "  de infraestructura";
                break;
            case 4:
                tipoAntecedentes = " de seguridad";
                break;
            case 5:
                tipoAntecedentes = " de salud";
                break;
            case 6:
                tipoAntecedentes = " de educación";
                break;
            case 7:
                tipoAntecedentes = " de alimentación";
                break;
            case 8:
                tipoAntecedentes = " de gestión residencia";
                break;
            case 9:
                tipoAntecedentes = " de población y capacidad";
                break;
        }
        MensajeWARNING("<p style='text-alig:justify;font-size:12px;'>Atención! esta operación cierra la tramitación de la observación informada por PJUD correspondiente a los antecedentes " + tipoAntecedentes + ".<br />La respuesta que visará, será la que se informe a través de servicio WEB correspondiente como respuesta resolutoria, por lo tanto, su redacción debe argumentar en detalle las acciones ejecutadas para dar solución a la observación.<br /> Si la respuesta cumple estas condiciones haha clic en Aceptar, de lo contrario en Cancelar.</p>", "VisarUltimaRespuestaX(" + opc + ");");
    }
    else {
        MensajeINFO("<p style='text-alig:justify;font-size:14px;'>Para visar una respuesta resolutoria a la observación que está tramitando, debe agregar el texto de la respuesta. Esta respuesta será la que se informe a través de servicio WEB correspondiente como respuesta final, por lo tanto, su redacción debe argumentar en detalle las acciones ejecutadas para dar solución a la observación.</p>")
    }
}
function VisarUltimaRespuestaX(opc) {
    var textoResp = EliminaEspacios($("#text_respuesta_actual00" + opc).val());
    var listadoArchivos = "";
    var linkarchivos = "";
    var codarchivos = "";

    if (textoResp == "") {
        MensajeINFO2_V3("Para enviar una respuesta de tramitación debe ingresar el texto de esta", '$("#text_respuesta_actual00' + opc + '").focus();');
        return;
    }
    else {
        var tbl = document.getElementById("tbl00" + opc);
        if (tbl.rows.length > 0) {
            for (k = 0; k <= tbl.rows.length - 1; k++) {
                //alert(tbl.rows[k].cells[0].dataset.archivo);
                listadoArchivos = listadoArchivos + tbl.rows[k].cells[0].dataset.archivo + ";";
                linkarchivos = linkarchivos + tbl.rows[k].cells[0].dataset.linkarchivo + ";";
                codarchivos = codarchivos + tbl.rows[k].cells[0].dataset.codarchivo + ";";
            }
            listadoArchivos = listadoArchivos.substring(0, listadoArchivos.length - 1);
            linkarchivos = linkarchivos.substring(0, linkarchivos.length - 1);
            codarchivos = codarchivos.substring(0, codarchivos.length - 1);
        }
    }

    //@IdUsuarioActualizacion   INT,
    //@CodFicha                 INT,
    //@CodEstado                INT,            ==> 2 respuesta parcial x seccion
    //@IdTipoRespuesta          INT,            ==> opc
    //@CodEstadoDetalle         INT,            ==> 2 respuesta parcial x seccion
    //@Respuesta                NVARCHAR(MAX),  ==> textoResp
    //@IdRespuesta              INT,            ==> Sin respuesta existente , envío 0 de lo contrario debo cargar el id respuesta asociado al codficha
    //@NombreArchivos           NVARCHAR(MAX)   ==> listadoArchivos

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
    ActivaDesactivaBotonResponder(opc, true);
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/GrabarRespuestaObservacionesFicha",
        data: '{' +
                '"CodFicha":"' + $("#idcodfichaOBS_pjud ").val() + '",' +
                '"IdUsuarioActualizacion":"' + $("#idusuario_conect_obs").val() + '",' +
                '"CodEstado":"' + 2 + '",' +
                '"IdTipoRespuesta":"' + opc + '",' +
                '"CodEstadoDetalle":"' + 2 + '",' +
                '"Respuesta":"' + textoResp + '",' +
                '"IdRespuesta":"' + $("#IdRespuesta").val() + '",' +
                '"NombreArchivos":"' + listadoArchivos + '",' +
                '"FolderAdjuntos":"' + existedirRespuesta + '",' +
                '"rutarepositorio":"' + $("#rutarepositorio").val() + '",' +
                '"codarchivos":"' + codarchivos + '",' +
                '"dirRespuesta":"' + existedirRespuesta + '"' +
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
                    //alert(this.REGISTRO_ACTUALIZADO + " <==> " + this.ETAPAS_PROCESADAS);
                    if (this.REGISTRO_ACTUALIZADO != "-1" && this.ETAPAS_PROCESADAS == "TODAS") {

                        //Actualizo valor de id de respuesta asocioado a la ficha de observaciones PJUD
                        $("#IdRespuesta").val(this.REGISTRO_ACTUALIZADO);
                        //reseteo mensaje de respuesta
                        $("#text_respuesta_actual00" + opc).val("");
                        //reseteo listado de documentos adjuntos
                        $("#files00" + opc).html("<table id='tbl00" + opc + "'></table>");
                        MessageSucess("Se ha ingresado exitosamente una respuesta a la tramitación de observaciones de ficha residencial seleccionada.");

                        switch (opc) {
                            case 1://antecedentes generales
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion001", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 9://antecedentes población capacidad
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion009", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 2://antecedentes dotación personal
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion002", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 3://antecedentes infraestructura
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion003", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 4://antecedentes seguridad
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion004", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 5://antecedentes salud
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion005", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 6://antecedentes educacion
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion006", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 7://antecedentes alimentacion
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion007", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                            case 8://antecedentes gestión residencia
                                GeneraNuevaEntradadeRespuesta("#div_tramitacion008", listadoArchivos, textoResp, opc, linkarchivos, codarchivos);
                                existedirRespuesta = "";
                                break;
                        }
                        //Llamar a operación de visado de respuesta
                        arrUltimosIdDetalle[opc - 1] = this.ID_DETALLE;
                        arrUltimosIdDetalleGls[opc - 1] = textoResp;
                        VisarFinalizarTramitacion(opc, this.ID_DETALLE, false, textoResp);
                        
                    }
                }
            );
        }
        ActivaDesactivaBotonResponder(opc, false);
    });
}
function VisarFinalizarTramitacion(opc, IdDetalle, bAutomatic, textoResp) {
    //alert("IdDetalle=" + IdDetalle + " ==>>> textoResp=" + textoResp);

    switch (opc) {
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
    $.ajax({
        type: "POST",
        url: "FichaResidencialObservaciones.aspx/VisarFinalizarTramitacionObservacion",
        data: "{"+
              "'IdRespuesta':'"+ $("#IdRespuesta").val() + "'," +
	          "'IdDetalle':'" + IdDetalle + "',"+
              "'IdUsuarioActualizacion':'" + IdUsuarioActualizacion + "'," +
	          "'IdTipoRespuesta':'" + opc + "'" +
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
                    if (this.REGISTRO_ACTUALIZADO != "-1") {
                        IndicaFinTramitacionOBS2(opc);
                        CargaRespuestaVisadaEnBloquePJUD(opc, textoResp);
                        arrVisadosAuto[opc - 1] = 1;
                        if (!bAutomatic){ MessageSucess("<p style='text-alig:justify;font-size:14px;'>Se ha visado y finalizado correctamente la respuesta que da término a la tramitación de la observación en " + tipoAntecedentes + ".</p>");}
                        if (bAutomatic) { ValidaOkProcesoVisadosAuto(); }
                    }
                }
            );
        }
    });
}
function ValidaOkProcesoVisadosAuto() {
    var output = true;
    for (var k = 0; k <= 8; k++) {
        if (arrVisadosAuto[k] == 0) {
            output = false;
            break;
        }
    }
    //alert(output);
    if (output) {

        EjecutaGuardarRespuestaGeneralSENAME();
    }
}
function IndicaFinTramitacionOBS2(opc) {
    var htmlTramitacion = document.getElementById ("div_tramitacion00" + opc).innerHTML;
    var fila_resp = ingresoNuevaRespuesta.mapReplace({ "[tramitacion]": "", "[indexseccion]": opc });
    var strHTML_ = htmlTramitacion;
    strHTML_ = replaceAll(strHTML_, fila_resp, "");
    strHTML_ = strHTML_ + bloqueTXFinalizada;
    $("#divBotonera00"+opc).attr({ "style": "display:none;" });
    $("#div_tramitacion00" + opc).html(strHTML_);
    $("#check00" + opc).attr({ "style": "display:block;width:32px;float:left;margin-top:-5px;" });
    $("#ontx00" + opc).attr({ "style": "display:none;width:32px;float:left;margin-top:-5px;" });
}
function CargaRespuestaVisadaEnBloquePJUD(opc, textoRespuesta) {
    //alert(textoRespuesta);
    var textAreaSalida
    switch (opc) {
        case 1:
            textAreaSalida = "#general_041_respuesta_SENAME_pjud";
            break;
        case 2:
            textAreaSalida = "#dotacion_102_respuesta_SENAME_pjud";
            break;
        case 3:
            textAreaSalida = "#Infraest_050_respuesta_SENAME_pjud";
            break;
        case 4:
            textAreaSalida = "#seguridad_012_respuesta_sename_pjud";
            break;
        case 5:
            textAreaSalida = "#salud_017_respuesta_sename_pjud";
            break;
        case 6:
            textAreaSalida = "#educacion_012_respuesta_sename_pjud";
            break;
        case 7:
            textAreaSalida = "#alimentacion_010_respuesta_sename_pjud";
            break;
        case 8:
            textAreaSalida = "#gestionResid_021_sel_respuesta_sename_pjud";
            break;
        case 9:
            textAreaSalida = "#poblacion_008_respuesta_SENAME_pjud";
            break;
    }
    $(textAreaSalida).val(textoRespuesta);
}