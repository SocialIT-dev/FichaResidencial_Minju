////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function CargaDatosGeneralesDDL2(CodProyecto) {
    ResetearFormulario();
    // Sprint 3 - 20191113 - gcastro
    CargaParValores1();
    var CodFichaAUX;
    var CodFicha2;
    var tokensUsr = document.getElementById("tokensUsr").value;

    if (CodProyecto != "0" && CodProyecto != null) {

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

            //alert(r.d[0].error);
            if (r.d[0].error == "") {
                //alert(tokensUsr);

                $.each(r.d,
                    function () {

                        $("#general_002_tipoOrganismo").val(this.TipoProyecto);
                        $("#general_003_modeloIntervencion").val(this.NombreModeloIntervencion);
                        $("#general_004_direccion").val(this.Direccion);
                        $("#general_005_telefonos").val(this.Telefono);
                        $("#general_006_region").val(this.Region);
                        $("#general_007_comuna").val(this.Comuna);
                        $("#general_008_email").val(this.Mail);
                        $("#general_009_directorProyecto").val(this.NombreDirector);
                        $("#general_010_rut_director_proyecto").val(this.RutDirector);
                        CodFicha = this.CodFicha;
                        CodFicha2 = this.CodFicha2;

                        if (CodFicha != "0" || CodFicha2 != "0") {

                            if (CodFicha != "0") {
                                MensajeINFO("<span style='font-weight:500;'>¡Atención! Existe una ficha residencial en estado parcial asociada al proyecto seleccionado, su número de folio es <b>" + CodFicha + "</b>. Por favor, complete los datos restantes y haga clic en<br /> <b>Grabar Ficha Residencial</b>.");
                            }

                            if (CodFicha2 != "0") {
                                MensajeINFO("<span>¡Atención! Se cargará la información de la ficha residencial más reciente registrada en el sistema, quedará con estado parcial para su revisión. (código de ficha " + CodFicha2 + ").");
                            }

                            if (CodFicha != "0") {
                                document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;
                                document.getElementById("periodo_ficha").innerHTML = "&nbsp;-&nbsp;PERIODO: " + this.Periodo;
                            }
                            else {
                                document.getElementById("folio_pendiente").innerHTML = "&nbsp;";
                                document.getElementById("periodo_ficha").innerHTML = "&nbsp;";
                            }


                            if (CodFicha != "0")
                                CodFichaAUX = CodFicha;
                            else
                                if (CodFicha2 != "0")
                                    CodFichaAUX = CodFicha2;
                        
                            //alert("- CodFichaAUX=" + CodFichaAUX + " =>> " + "\n- CodFicha=" + CodFicha + "\n- CodFicha2=" + CodFicha2);

                            //Obtengo fecha aplicación de ficha residencial
                            ObtenerFechaAplicacionFicha(CodFichaAUX);

                            ObtenerAntecedentesGenerales(CodFichaAUX);
                            ObtenerNnaAbandonoDetalle(CodFichaAUX);
                            ObtenerNnaAdolescenteConHijosDetalle(CodFichaAUX);
                            /* Sprint 3 - 20191120  - se agrega la llamada a function CargaRangoEtareoAtencion1(); */
                            CargaRangoEtareoAtencion1();
                            ObtenerAntecedentesPoblacionCapacidad(CodFichaAUX);
                            ObtenerAntecedentesDotacionPersonal(CodFichaAUX);

                            CargaParInfraestructura();
                            ObtenerAntecedentesInfraestructura(CodFichaAUX);
                            
                            ObtenerAntecedentesSeguridad(CodFichaAUX);
                            ObtenerAntecedentesSalud(CodFichaAUX);
                            ObtenerAntecedentesEducacion(CodFichaAUX);

                            CargaParAlimentacion();
                            ObtenerAntecedentesAlimentacion(CodFichaAUX);

                            CargaParGestionResidencia(); 
                            ObtenerAntecedentesGestionResidencia(CodFichaAUX);

                            //alert(tokensUsr);
                        }
                        else {
                            document.getElementById("folio_pendiente").innerHTML = "&nbsp;";
                            document.getElementById("periodo_ficha").innerHTML = "&nbsp;";
                        }
                    }
                );
                //SI EL USUARIO TIENE EN SUS TOKEN EL INDICADO EN EL SIGUIENTE IF 
                //PODRÁ EDITAR LA FICHA MÁS RECIENTE DE LA RESIDENCIA
                if (tokensUsr.indexOf("D5CF4DE5-5EFA-4EDD-AD65-5BED3AD9482A") != -1) {
                    ActivaBotonesBusquedaNNAResidenciaXProyecto(CodProyecto);
                    ActivaCamposFichaResidenciaXProyecto(CodProyecto);           
                }

            }
            else {

                DesplegarExcepcionCriticaApp(r.d[0].error);
            }
        });


    }
}
function ObtenerAntecedentesGenerales(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesGenerales",
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

                    $("#general_012_pobvig_masculina").val(this.PoblacionHombres);
                    $("#general_013_pobvig_femenina").val(this.PoblacionMujeres);
                    $("#general_014_plazaConv_masculina").val(this.PlazasSenameHombres);
                    $("#general_015_plazaConv_femenina").val(this.PlazasSenameMujeres);
                    $("#general_016_otrasPlazas_masculina").val(this.OtrasPlazasHombres);
                    $("#general_017_otrasPlazas_femenina").val(this.OtrasPlazasMujeres);
                    $("#general_018_totalNNApresent_masculina").val(this.TotalNnaHombres);
                    $("#general_019_totalNNApresent_femenina").val(this.TotalNnaMujeres);
                    $("#general_020_totalNNAacercFamilia_masculina").val(this.TotalAcercamientoHombres);
                    $("#general_021_totalNNAacercFamilia_femenina").val(this.TotalAcercamientoMujeres);
                    $("#general_022_totalResidenMayor_masculina").val(this.TotalMayoresHombres);
                    $("#general_023_totalResidenMayor_femenina").val(this.TotalMayoresMujeres);
                    $("#general_024_abandonoSist_masculina").val(this.FugaHombres);
                    $("#general_025_abandonoSist_femenina").val(this.FugaMujeres);
                    $("#general_026_hospitalizados_masculina").val(this.HospitalizadosHombres);
                    $("#general_027_hospitalizados_femenina").val(this.HosptitalizadosMujeres);
                    $("#general_028_totalNNAart80bis_masculina").val(this.Art80Hombres);
                    $("#general_029_totalNNAart80bis_femenina").val(this.Art80Mujeres);
                    $("#general_030_totalNNAabandono_masculina").val(this.AbandonoHombres);
                    $("#general_031_totalNNAabandono_femenina").val(this.AbandonoMujeres);
                    $("#general_032_totalNNA_suscep_adopcion_masculina").val(this.SentenciaAdopcionHombres);
                    $("#general_033_totalNNA_suscep_adopcion_femenina").val(this.SentenciaAdopcionMujeres);
                    $("#general_034_totalNNA_enlace_adopcion_masculina").val(this.EnlaceAdopcionHombres);
                    $("#general_035_totalNNA_enlace_adopcion_femenina").val(this.EnlaceAdopcionMujeres);
                    $("#general_036_totalNNA_causaini_adopcion_masculina").val(this.SinSentenciaHombres);
                    $("#general_037_totalNNA_causaini_adopcion_femenina").val(this.SinSentenciaMujeres);
                    $("#general_038_totalNNA_adoslecente_chijo_masculina").val(this.AdolecentesHijosHombres);
                    $("#general_039_totalNNA_adoslecente_chijo_femenina").val(this.AdolecentesHijosMujeres);

                }
            );
            for (var k = 1; k <= 14; k++) {
                Sumar(k);
                if (k == 14) {
                    //CONTROL DESBLOQUEO ZONA CARGA
                    if (opcioncarga == "GESTIONOBSERVACIONES" || opcioncarga == "GESTIONHISTORIAL") {
                        ctrl_ObtenerAntecedentesGenerales = true;
                        AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");
                
                        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
                        generalresidencia = true;
                        CargaCamposComparativa();
                    }
                }
            }
        }
        else {

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }
    });    
}
function ObtenerNnaAbandonoDetalle(CodFicha) {

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
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        var tblDestino = document.getElementById("tbl_NNA_abandonados");

        if ((r.d[0].error) == "") {
            $.each(r.d, function () {
                rut = this.Rut;
                nna = this.ApellidoPaterno + " " + this.ApellidoMaterno  + ", " + this.Nombres;
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
                var cell6 = row.insertCell(5);

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

                //
                //<img src='./images/quitar.png' style='cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(1," + rut_identificador + ")' />
                cell6.innerHTML = "<div style='text-align:center'><i class='glyphicon glyphicon-remove' style='color:red;cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(1," + rut_identificador + ")'></i></div>";
                cell6.dataset.identificador = rut_identificador;
                cell6.className = "td_registro_NNA";

                agregados++;

            });
            //CalcularNNA_EnAbandonoDesdeTBL();
        }
        else {

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }


    });
}
function ObtenerNnaAdolescenteConHijosDetalle(CodFicha) {

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

        if ((r.d[0].error) == "") {
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
                var cell6 = row.insertCell(5);

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

                //<img src='./images/quitar.png' style='cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(2," + rut_identificador + ")' />
                cell6.innerHTML = "<div style='text-align:center'><i class='glyphicon glyphicon-remove' style='color:red;cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(2," + rut_identificador + ")'></i></div>";
                cell6.dataset.identificador = rut_identificador;
                cell6.className = "td_registro_NNA";

                agregados++;

            });
            //CalcularNNA_AdolescenteConHijosDesdeTBL();
        }
        else {

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }

    });
}
function CargaListadoNNA_VigentesResidencia(opcDetalleTabla) {

    var CodProyecto = document.getElementById("general_001_sel_proyecto").value;
    var femenino = 0, masculino = 0;
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerNiñosVigentes",
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
        //alert(ruts_en_detalle);


        if ((r.d[0].error) == "") {
            //SI HAY DATOS CARGAMOS EL LISTADO DE NNA VIGENTES PARA LA RESIDENCIA
            if (r.d != "") {

                //UNA VEZ DESPLEGADA LA VENTANA MODAL, CARGAMOS 
                //EL LISTADO DE NNA CONSULTADO EN LA BASE DE DATOS
                //NNA= Niño Niña Adolescente
                swal({
                    title: "<span class='titsec3' >REGISTRO DE NNA EN RESIDENCIA</span>",
                    html: "<div class='scrollbar' id='style-11'><div class='force-overflow'>" +
                           "<table id='tbl_registro_NNA_residencia' class='' style='width:100%;background: #ffffff;'>" +
                           "<tr>" +
                           "<td class='titulo-tabla' style='width: 40px;'>N°</td>" +
                           "<td class='titulo-tabla' style='width: 90px;'>RUT</td>" +
                           "<td class='titulo-tabla'>NNA</td>" +
                           "<td class='titulo-tabla' style='width: 90px;'>RIT</td>" +
                           "<td class='titulo-tabla'>TRIBUNAL</td>" +
                           "<td class='titulo-tabla' style='width:40px;'>&nbsp;</td>" +
                           "</tr>" +
                           "</table>" +
                           "</div></div>" +
                           "<div style='text-align:center;'>" +
                           "<br />" +
                           "<button id='btnagregar001' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title='haga clic para agregar detalle de NNA en abandono'><i class='fa fa-thumbs-up'></i>&nbsp;Agregar</button>&nbsp;<button id='btncerrar' class='btn ' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;background:#A4A4A4;color:#FFF;' title='haga clic para agregar detalle de NNA en abandono'><i class='fa fa-times'></i>&nbsp;Cerrar</button>" +
                           "</div>",
                    allowOutsideClick: false,
                    showCloseButton: false,
                    showCancelButton: false,
                    showConfirmButton: false,
                    focusConfirm: false,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> agregar',
                    cancelButtonText: '<i class="fa fa-times"></i> cerrar',
                    background: "#ffffff",
                    width: "900px",
                    padding: 20
                });
                jQuery('#btncerrar').bind('click', function () {
                    swal.clickCancel();
                })
                jQuery('#btnagregar001').bind('click', function () {
                    AgregarDatosNNA(opcDetalleTabla);
                })

                var tbl = document.getElementById("tbl_registro_NNA_residencia");
                var k = 1;

                ruts_en_detalle = RevisaRutCargadosEnDetalleTabla(opcDetalleTabla);

                $.each(r.d,
                    function () {

                        if (ruts_en_detalle.indexOf("|" + this.Rut + "|") == -1) {
                            var rowCount = tbl.rows.length;
                            var row = tbl.insertRow(rowCount);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            var cell5 = row.insertCell(4);
                            var cell6 = row.insertCell(5);

                            cell1.innerHTML = k;
                            cell1.className = "td_registro_NNA";
                            cell1.style.width = "20px;";

                            cell2.innerHTML = this.Rut;
                            cell2.className = "td_registro_NNA";
                            cell2.style.width = "50px;";
                            cell2.dataset.codnino = this.CodNino;
                            cell2.dataset.sexo = this.Sexo;

                            cell3.innerHTML = this.ApellidoPaterno + " " + this.ApellidoMaterno + ", " + this.Nombres;
                            cell3.className = "td_registro_NNA";
                            cell3.dataset.nombres = this.Nombres;
                            cell3.dataset.apellidopaterno = this.ApellidoPaterno;
                            cell3.dataset.apellidomaterno = this.ApellidoMaterno;


                            cell4.innerHTML = this.Rit;
                            cell4.className = "td_registro_NNA";

                            cell5.innerHTML = this.NombreTribunal;
                            cell5.id = "codtribunal_" + k;
                            cell5.dataset.codtribunal = this.CodTribunal;

                            cell5.className = "td_registro_NNA";

                            cell6.innerHTML = "<input type='checkbox' />";
                            cell6.className = "td_registro_NNA2";

                            k++;
                        }
                    }
                );

            }
            else {
                MensajeINFO("No existe listado de NNA Vigentes para el proyecto seleccionado.");
            }

        }
        else {

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }

    });
}
function GrabarAntecedentesGenerales() {
    var CodEstadoFicha = 1;

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;
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
 
    if (PoblacionHombres == "") PoblacionHombres = "0";
    if (PoblacionMujeres == "") PoblacionMujeres = "0";
    if (PlazasSenameHombres == "") PlazasSenameHombres = "0";
    if (PlazasSenameMujeres == "") PlazasSenameMujeres = "0";
    if (OtrasPlazasHombres == "") OtrasPlazasHombres = "0";
    if (OtrasPlazasMujeres == "") OtrasPlazasMujeres = "0";
    if (TotalNnaHombres == "") TotalNnaHombres = "0";
    if (TotalNnaMujeres == "") TotalNnaMujeres = "0";
    if (TotalAcercamientoHombres == "") TotalAcercamientoHombres = "0";
    if (TotalAcercamientoMujeres == "") TotalAcercamientoMujeres = "0";
    if (TotalMayoresHombres == "") TotalMayoresHombres = "0";
    if (TotalMayoresMujeres == "") TotalMayoresMujeres = "0";
    if (FugaHombres == "") FugaHombres = "0";
    if (FugaMujeres == "") FugaMujeres = "0";
    if (HospitalizadosHombres == "") HospitalizadosHombres = "0";
    if (HosptitalizadosMujeres == "") HosptitalizadosMujeres = "0";
    if (Art80Hombres == "") Art80Hombres = "0";
    if (Art80Mujeres == "") Art80Mujeres = "0";
    if (AbandonoHombres == "") AbandonoHombres = "0";
    if (AbandonoMujeres == "") AbandonoMujeres = "0";
    if (SentenciaAdopcionHombres == "") SentenciaAdopcionHombres = "0";
    if (SentenciaAdopcionMujeres == "") SentenciaAdopcionMujeres = "0";
    if (EnlaceAdopcionHombres == "") EnlaceAdopcionHombres = "0";
    if (EnlaceAdopcionMujeres == "") EnlaceAdopcionMujeres = "0";
    if (SinSentenciaHombres == "") SinSentenciaHombres = "0";
    if (SinSentenciaMujeres == "") SinSentenciaMujeres = "0";
    if (AdolecentesHijosHombres == "") AdolecentesHijosHombres = "0";
    if (AdolecentesHijosMujeres == "") AdolecentesHijosMujeres = "0";


    var arrDetalle_NNA_abandono = RetornaArregloTablaDetalleNNA("tbl_NNA_abandonados");
    //alert(arrDetalle_NNA_abandono);

    var arrDetalle_NNA_adolescente_sinHijos = RetornaArregloTablaDetalleNNA("tbl_adolescente_con_hijos");
    //alert(arrDetalle_NNA_adolescente_sinHijos);

    var dataParametros = 
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "',"+
        "'PoblacionHombres': '" + PoblacionHombres + "',"+
        "'PoblacionMujeres': '" + PoblacionMujeres + "',"+
        "'PlazasSenameHombres': '" + PlazasSenameHombres + "',"+
        "'PlazasSenameMujeres': '" + PlazasSenameMujeres + "',"+
        "'OtrasPlazasHombres': '" + OtrasPlazasHombres + "',"+
        "'OtrasPlazasMujeres': '" + OtrasPlazasMujeres + "',"+
        "'TotalNnaHombres': '" + TotalNnaHombres + "',"+
        "'TotalNnaMujeres': '" + TotalNnaMujeres + "',"+
        "'TotalAcercamientoHombres': '" + TotalAcercamientoHombres + "',"+
        "'TotalAcercamientoMujeres': '" + TotalAcercamientoMujeres + "',"+
        "'TotalMayoresHombres': '" + TotalMayoresHombres + "',"+
        "'TotalMayoresMujeres': '" + TotalMayoresMujeres + "',"+
        "'FugaHombres': '" + FugaHombres + "',"+
        "'FugaMujeres': '" + FugaMujeres + "',"+
        "'HospitalizadosHombres': '" + HospitalizadosHombres + "',"+
        "'HosptitalizadosMujeres': '" + HosptitalizadosMujeres + "',"+
        "'Art80Hombres': '" + Art80Hombres + "',"+
        "'Art80Mujeres': '" + Art80Mujeres + "',"+
        "'AbandonoHombres': '" + AbandonoHombres + "',"+
        "'AbandonoMujeres': '" + AbandonoMujeres + "',"+
        "'SentenciaAdopcionHombres': '" + SentenciaAdopcionHombres + "',"+
        "'SentenciaAdopcionMujeres': '" + SentenciaAdopcionMujeres + "',"+
        "'EnlaceAdopcionHombres': '" + EnlaceAdopcionHombres + "',"+
        "'EnlaceAdopcionMujeres': '" + EnlaceAdopcionMujeres + "',"+
        "'SinSentenciaHombres': '" + SinSentenciaHombres + "',"+
        "'SinSentenciaMujeres': '" + SinSentenciaMujeres + "',"+
        "'AdolecentesHijosHombres': '" + AdolecentesHijosHombres + "',"+
        "'AdolecentesHijosMujeres': '" + AdolecentesHijosMujeres + "',"+
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +
        "'DetalleNNA_Abandono': '" + arrDetalle_NNA_abandono + "'," +
        "'DetalleNNA_AdolescenteConHijos': '" + arrDetalle_NNA_adolescente_sinHijos +
        "'}";

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesGenerales",
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


        if ((r.d[0].error) == "") {
            $.each(r.d,
                function () {
                    var strError = "";
                    if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                        //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);

                        MessageSucess("Se ha registrado exitosamente los datos de Antecedentes Generales.");
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
                    ActivarDesactivarBotonesGrabar(1, false);
                }
            );
        }
        else {

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }
    });

}

//PJUD
function ObtenerAntecedentesGenerales_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesGenerales",
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

        //alert("ObtenerAntecedentesGenerales_PJUD: " + r.d[0].error);
        if ((r.d[0].error) == "") {
            $.each(r.d,
                function () {

                    $("#general_012_pobvig_masculina_pjud").val(this.PoblacionHombres);
                    $("#general_013_pobvig_femenina_pjud").val(this.PoblacionMujeres);
                    $("#general_014_plazaConv_masculina_pjud").val(this.PlazasSenameHombres);
                    $("#general_015_plazaConv_femenina_pjud").val(this.PlazasSenameMujeres);
                    $("#general_016_otrasPlazas_masculina_pjud").val(this.OtrasPlazasHombres);
                    $("#general_017_otrasPlazas_femenina_pjud").val(this.OtrasPlazasMujeres);
                    $("#general_018_totalNNApresent_masculina_pjud").val(this.TotalNnaHombres);
                    $("#general_019_totalNNApresent_femenina_pjud").val(this.TotalNnaMujeres);
                    $("#general_020_totalNNAacercFamilia_masculina_pjud").val(this.TotalAcercamientoHombres);
                    $("#general_021_totalNNAacercFamilia_femenina_pjud").val(this.TotalAcercamientoMujeres);
                    $("#general_022_totalResidenMayor_masculina_pjud").val(this.TotalMayoresHombres);
                    $("#general_023_totalResidenMayor_femenina_pjud").val(this.TotalMayoresMujeres);
                    $("#general_024_abandonoSist_masculina_pjud").val(this.FugaHombres);
                    $("#general_025_abandonoSist_femenina_pjud").val(this.FugaMujeres);
                    $("#general_026_hospitalizados_masculina_pjud").val(this.HospitalizadosHombres);
                    $("#general_027_hospitalizados_femenina_pjud").val(this.HosptitalizadosMujeres);
                    $("#general_028_totalNNAart80bis_masculina_pjud").val(this.Art80Hombres);
                    $("#general_029_totalNNAart80bis_femenina_pjud").val(this.Art80Mujeres);
                    $("#general_030_totalNNAabandono_masculina_pjud").val(this.AbandonoHombres);
                    $("#general_031_totalNNAabandono_femenina_pjud").val(this.AbandonoMujeres);

                    $("#general_032_totalNNA_suscep_adopcion_masculina_pjud").val(this.SentenciaAdopcionHombres);
                    $("#general_033_totalNNA_suscep_adopcion_femenina_pjud").val(this.SentenciaAdopcionMujeres);
                    $("#general_034_totalNNA_enlace_adopcion_masculina_pjud").val(this.EnlaceAdopcionHombres);
                    $("#general_035_totalNNA_enlace_adopcion_femenina_pjud").val(this.EnlaceAdopcionMujeres);
                    $("#general_036_totalNNA_causaini_adopcion_masculina_pjud").val(this.SinSentenciaHombres);
                    $("#general_037_totalNNA_causaini_adopcion_femenina_pjud").val(this.SinSentenciaMujeres);
                    $("#general_038_totalNNA_adoslecente_chijo_masculina_pjud").val(this.AdolecentesHijosHombres);
                    $("#general_039_totalNNA_adoslecente_chijo_femenina_pjud").val(this.AdolecentesHijosMujeres);           
                }

            );
            for (var k = 1; k <= 14; k++) {
                SumarPJUD(k);
                if (k == 14) {

                    //CONTROL DESBLOQUEO ZONA CARGA
                    ctrl_ObtenerAntecedentesGenerales_PJUD = true;
                    AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

                    //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
                    generalpjud = true;
                    CargaCamposComparativa();
                }
            }
        }
        else {

            DesplegarExcepcionCriticaApp(r.d[0].error);
        }

    });
}
function ObtenerNnaAbandonoDetalleOBS_PJUD(CodFicha) {

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
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        var tblDestino = document.getElementById("tbl_NNA_abandonados_pjud");

        //alert(JSON.stringify(r));
        //if (r.d!= "") alert("ObtenerNnaAbandonoDetalleOBS_PJUD: " + r.d[0].error);
        //
        //if (r.d != "") {
        //    if (r.d[0].error == "") {
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

                    nombres_NNA_abandono_pjud = apellidoPaterno + "|" + apellidoMaterno + "|," + nombres + "~" + nombres_NNA_abandono_pjud;

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
                ctrl_ObtenerNnaAbandonoDetalleOBS_PJUD = true;
                AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

                //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
                generalpjudNNAAbandono = true;
                CargaCamposComparativa();

        //    }
        //    else {

        //        DesplegarExcepcionCriticaApp(r.d[0].error);
        //    }
        //}
        //else {
        //    generalpjudNNAAbandono = true;
        //}

    });
}
function ObtenerNnaAdolescenteConHijosDetalleOBS_PJUD(CodFicha) {

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
        var tblDestino = document.getElementById("tbl_adolescente_con_hijos_pjud");

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

            nombres_NNA_adolescHijo_pjud = apellidoPaterno + "|" + apellidoMaterno + "|," + nombres + "~" + nombres_NNA_adolescHijo_pjud;

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
        ctrl_ObtenerNnaAdolescenteConHijosDetalleOBS_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        generalpjudNNAadolescHijo = true;
        CargaCamposComparativa();
    });
}

//HSITORIAL: COMPARACIÓN FICHAS
function ObtenerAntecedentesGenerales_Compare(CodFichaCompare, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesGenerales",
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

                $("#general_012_pobvig_masculina" + sufijo).val(this.PoblacionHombres);
                $("#general_013_pobvig_femenina" + sufijo).val(this.PoblacionMujeres);
                $("#general_014_plazaConv_masculina" + sufijo).val(this.PlazasSenameHombres);
                $("#general_015_plazaConv_femenina" + sufijo).val(this.PlazasSenameMujeres);
                $("#general_016_otrasPlazas_masculina" + sufijo).val(this.OtrasPlazasHombres);
                $("#general_017_otrasPlazas_femenina" + sufijo).val(this.OtrasPlazasMujeres);
                $("#general_018_totalNNApresent_masculina" + sufijo).val(this.TotalNnaHombres);
                $("#general_019_totalNNApresent_femenina" + sufijo).val(this.TotalNnaMujeres);
                $("#general_020_totalNNAacercFamilia_masculina" + sufijo).val(this.TotalAcercamientoHombres);
                $("#general_021_totalNNAacercFamilia_femenina" + sufijo).val(this.TotalAcercamientoMujeres);
                $("#general_022_totalResidenMayor_masculina" + sufijo).val(this.TotalMayoresHombres);
                $("#general_023_totalResidenMayor_femenina" + sufijo).val(this.TotalMayoresMujeres);
                $("#general_024_abandonoSist_masculina" + sufijo).val(this.FugaHombres);
                $("#general_025_abandonoSist_femenina" + sufijo).val(this.FugaMujeres);
                $("#general_026_hospitalizados_masculina" + sufijo).val(this.HospitalizadosHombres);
                $("#general_027_hospitalizados_femenina" + sufijo).val(this.HosptitalizadosMujeres);
                $("#general_028_totalNNAart80bis_masculina" + sufijo).val(this.Art80Hombres);
                $("#general_029_totalNNAart80bis_femenina" + sufijo).val(this.Art80Mujeres);
                $("#general_030_totalNNAabandono_masculina" + sufijo).val(this.AbandonoHombres);
                $("#general_031_totalNNAabandono_femenina" + sufijo).val(this.AbandonoMujeres);
                $("#general_032_totalNNA_suscep_adopcion_masculina" + sufijo).val(this.SentenciaAdopcionHombres);
                $("#general_033_totalNNA_suscep_adopcion_femenina" + sufijo).val(this.SentenciaAdopcionMujeres);
                $("#general_034_totalNNA_enlace_adopcion_masculina" + sufijo).val(this.EnlaceAdopcionHombres);
                $("#general_035_totalNNA_enlace_adopcion_femenina" + sufijo).val(this.EnlaceAdopcionMujeres);
                $("#general_036_totalNNA_causaini_adopcion_masculina" + sufijo).val(this.SinSentenciaHombres);
                $("#general_037_totalNNA_causaini_adopcion_femenina" + sufijo).val(this.SinSentenciaMujeres);
                $("#general_038_totalNNA_adoslecente_chijo_masculina" + sufijo).val(this.AdolecentesHijosHombres);
                $("#general_039_totalNNA_adoslecente_chijo_femenina" + sufijo).val(this.AdolecentesHijosMujeres);

                var periodoGlobal = FormateaPeriodo(this.Periodo.toString());
                $("#spanTITULO_FICHA" + sufijo).html("<b>VER DETALLE REGISTRO DE FICHA RESIDENCIAL FOLIO NÚMERO <span style='color:#337AB7;'>" + CodFichaCompare + "</span> - PERÍODO <span style='color:#337AB7;'>" + periodoGlobal + "</span></b>");


            }
        );
        for (var k = 1; k <= 14; k++) {
            SumarCompare(k, sufijo);
            if (k == 14) {
                //CONTROL DESBLOQUEO ZONA CARGA
                if (bloqueDatos == "BLOQUE001") {
                    ctrl_ObtenerAntecedentesGenerales_comp001 = true;
                    AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
                    //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
                    generalresidencia_comp001 = true;
                }
                if (bloqueDatos == "BLOQUE002") {
                    ctrl_ObtenerAntecedentesGenerales_comp002 = true;
                    AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
                    //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
                    generalresidencia_comp002 = true;
                }
                CargaCamposComparativa_();
            }
        }
    });
}
function ObtenerNnaAbandonoDetalle_Compare(CodFichaCompare, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    var femenino = 0, masculino = 0;
    var agregados = 1;

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerNnaAbandono",
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
        var tblDestino = document.getElementById("tbl_NNA_abandonados" + sufijo);

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
            //var cell6 = row.insertCell(5);

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

            if(bloqueDatos == "BLOQUE001")
                nombres_NNA_abandono_comp001 = apellidoPaterno + "|" + apellidoMaterno + "|," + nombres + "~" + nombres_NNA_abandono_comp001;
            else if (bloqueDatos == "BLOQUE002")
                nombres_NNA_abandono_comp002 = apellidoPaterno + "|" + apellidoMaterno + "|," + nombres + "~" + nombres_NNA_abandono_comp002;

            cell4.innerHTML = rit;
            cell4.className = "td_registro_NNA";

            cell5.innerHTML = tribunal;
            cell5.id = "codtribunal_" + agregados;
            cell5.dataset.codtribunal = codigotribunal;
            cell5.className = "td_registro_NNA";

            var largo = rut.length;
            var rut_identificador = rut.substring(0, largo - 2);

            //
            //<img src='./images/quitar.png' style='cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(1," + rut_identificador + ")' />
            //cell6.innerHTML = "<div style='text-align:center'><i class='glyphicon glyphicon-remove' style='color:red;cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(1," + rut_identificador + ")'></i></div>";
            //cell6.dataset.identificador = rut_identificador;
            //cell6.className = "td_registro_NNA";

            agregados++;

        });
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerNnaAbandonoDetalle_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            generalresidenciaNNAAbandono_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerNnaAbandonoDetalle_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            generalresidenciaNNAAbandono_comp002 = true;
        }
        CargaCamposComparativa_();
    });
}
function ObtenerNnaAdolescenteConHijosDetalle_Compare(CodFichaCompare, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    var femenino = 0, masculino = 0;
    var agregados = 1;

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAdolecentesConHijos",
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
        var tblDestino = document.getElementById("tbl_adolescente_con_hijos" + sufijo);

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

            if (bloqueDatos == "BLOQUE001")
                nombres_NNA_adolescHijo_comp001 = apellidoPaterno + "|" + apellidoMaterno + "|," + nombres + "~" + nombres_NNA_adolescHijo_comp001;
            else if (bloqueDatos == "BLOQUE002")
                nombres_NNA_adolescHijo_comp002 = apellidoPaterno + "|" + apellidoMaterno + "|," + nombres + "~" + nombres_NNA_adolescHijo_comp002;

            var rowCount2 = tblDestino.rows.length;
            var row = tblDestino.insertRow(rowCount2);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            //var cell6 = row.insertCell(5);

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

            //<img src='./images/quitar.png' style='cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(2," + rut_identificador + ")' />
            //cell6.innerHTML = "<div style='text-align:center'><i class='glyphicon glyphicon-remove' style='color:red;cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(2," + rut_identificador + ")'></i></div>";
            //cell6.dataset.identificador = rut_identificador;
            //cell6.className = "td_registro_NNA";

            agregados++;

        });
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            generalresidenciaNNAadolescHijo_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerNnaAdolescenteConHijosDetalle_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            generalresidenciaNNAadolescHijo_comp002 = true;
        }
        CargaCamposComparativa_();
    });
}

////++++++++++++++++++++++
//FUNCIONES FRONTEND
//Este parámetro es importante porque permite determinar el tipo 
//de edición o de acceso en los formularios:
var opcioncarga = "";

function Sumar(opc) {
    var val_1 = 0;
    var val_2 = 0;

    switch (opc) {
        case 1:
            if ($.isNumeric($("#general_012_pobvig_masculina").val()))
                val_1 = $("#general_012_pobvig_masculina").val();
            if ($.isNumeric($("#general_013_pobvig_femenina").val()))
                val_2 = $("#general_013_pobvig_femenina").val();
            $("#pobvig_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 2:
            if ($.isNumeric($("#general_014_plazaConv_masculina").val()))
                val_1 = $("#general_014_plazaConv_masculina").val();
            if ($.isNumeric($("#general_015_plazaConv_femenina").val()))
                val_2 = $("#general_015_plazaConv_femenina").val();
            $("#plazaConv_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 3:
            if ($.isNumeric($("#general_016_otrasPlazas_masculina").val()))
                val_1 = $("#general_016_otrasPlazas_masculina").val();
            if ($.isNumeric($("#general_017_otrasPlazas_femenina").val()))
                val_2 = $("#general_017_otrasPlazas_femenina").val();
            $("#otrasPlazas_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 4:
            if ($.isNumeric($("#general_018_totalNNApresent_masculina").val()))
                val_1 = $("#general_018_totalNNApresent_masculina").val();
            if ($.isNumeric($("#general_019_totalNNApresent_femenina").val()))
                val_2 = $("#general_019_totalNNApresent_femenina").val();
            $("#totalNNApresent_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 5:
            if ($.isNumeric($("#general_020_totalNNAacercFamilia_masculina").val()))
                val_1 = $("#general_020_totalNNAacercFamilia_masculina").val();
            if ($.isNumeric($("#general_021_totalNNAacercFamilia_femenina").val()))
                val_2 = $("#general_021_totalNNAacercFamilia_femenina").val();
            $("#totalNNAacercFamilia_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 6:
            if ($.isNumeric($("#general_022_totalResidenMayor_masculina").val()))
                val_1 = $("#general_022_totalResidenMayor_masculina").val();
            if ($.isNumeric($("#general_023_totalResidenMayor_femenina").val()))
                val_2 = $("#general_023_totalResidenMayor_femenina").val();
            $("#totalResidenMayor_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 7:
            if ($.isNumeric($("#general_024_abandonoSist_masculina").val()))
                val_1 = $("#general_024_abandonoSist_masculina").val();
            if ($.isNumeric($("#general_025_abandonoSist_femenina").val()))
                val_2 = $("#general_025_abandonoSist_femenina").val();
            $("#abandonoSist_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 8:
            if ($.isNumeric($("#general_026_hospitalizados_masculina").val()))
                val_1 = $("#general_026_hospitalizados_masculina").val();
            if ($.isNumeric($("#general_027_hospitalizados_femenina").val()))
                val_2 = $("#general_027_hospitalizados_femenina").val();
            $("#hospitalizados_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 9:
            if ($.isNumeric($("#general_028_totalNNAart80bis_masculina").val()))
                val_1 = $("#general_028_totalNNAart80bis_masculina").val();
            if ($.isNumeric($("#general_029_totalNNAart80bis_femenina").val()))
                val_2 = $("#general_029_totalNNAart80bis_femenina").val();
            $("#totalNNAart80bis_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 10:
            if ($.isNumeric($("#general_030_totalNNAabandono_masculina").val())) 
                val_1 = $("#general_030_totalNNAabandono_masculina").val();
            if ($.isNumeric($("#general_031_totalNNAabandono_femenina").val()))
                val_2 = $("#general_031_totalNNAabandono_femenina").val();
            $("#totalNNAabandono_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );

            if ((parseInt(val_1, 10) + parseInt(val_2, 10)) > 0) {
                $("#btn_AgregarNNAabandono").disabled = false;
                $("#btn_EliminarAllNNAabandono").disabled = false;
            }
            break;
        case 11:
            if ($.isNumeric($("#general_032_totalNNA_suscep_adopcion_masculina").val()))
                val_1 = $("#general_032_totalNNA_suscep_adopcion_masculina").val();
            if ($.isNumeric($("#general_033_totalNNA_suscep_adopcion_femenina").val()))
                val_2 = $("#general_033_totalNNA_suscep_adopcion_femenina").val();
            $("#totalNNA_suscep_adopcion_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 12:
            if ($.isNumeric($("#general_034_totalNNA_enlace_adopcion_masculina").val()))
                val_1 = $("#general_034_totalNNA_enlace_adopcion_masculina").val();
            if ($.isNumeric($("#general_035_totalNNA_enlace_adopcion_femenina").val()))
                val_2 = $("#general_035_totalNNA_enlace_adopcion_femenina").val();
            $("#totalNNA_enlace_adopcion_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 13:
            if ($.isNumeric($("#general_036_totalNNA_causaini_adopcion_masculina").val()))
                val_1 = $("#general_036_totalNNA_causaini_adopcion_masculina").val();
            if ($.isNumeric($("#general_037_totalNNA_causaini_adopcion_femenina").val()))
                val_2 = $("#general_037_totalNNA_causaini_adopcion_femenina").val();
            $("#totalNNA_causaini_adopcion_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
            break;
        case 14:
            if ($.isNumeric($("#general_038_totalNNA_adoslecente_chijo_masculina").val()))
                val_1 = $("#general_038_totalNNA_adoslecente_chijo_masculina").val();
            if ($.isNumeric($("#general_039_totalNNA_adoslecente_chijo_femenina").val()))
                val_2 = $("#general_039_totalNNA_adoslecente_chijo_femenina").val();
            $("#totalNNA_adoslecente_chijo_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
    }
}

function MensajeWARNING_NNA_EnAbandono(mensaje_) {
    var d = new Date();
    swal({
        title: "<table style='margin:auto;font-size:18px;'>" +
            "<tr>" +
            "<td style='color:#0F68B1;font-size:24px;'>" + cabmodal + " " + d.getFullYear() + "</td>" +
            "</tr>" +
            "</table>",
        html: "<span style='color:#0F68B1;text-align:left;'>" + mensaje_ + "<span>" +
              "<br /><br />" +
              "<button id='btn_NNA_Abandono_001_aceptar' class='btn btn-primary' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;' title='haga clic para agregar detalle de NNA en abandono'><i class='fa fa-thumbs-up'></i>&nbsp;Aceptar</button>&nbsp;<button id='btn_NNA_Abandono_002_cancelar' class='btn ' style='cursor: pointer;font-size:15px;font-weight:normal;width:150px;background:#A4A4A4;color:#FFF;' title='haga clic para agregar detalle de NNA en abandono'><i class='fa fa-times'></i>&nbsp;Cancelar</button>",
        type: "warning",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        cancelButtonText: "cancelar",
        confirmButtonText: "aceptar",
        confirmButtonColor: "#0F68B1",
        cancelButtonColor: "#A4A4A4"
    });
    jQuery('#btn_NNA_Abandono_001_aceptar').bind('click', function () {
        swal.clickCancel();
        EliminarDetalleNNA_Abandono();
    })
    jQuery('#btn_NNA_Abandono_002_cancelar').bind('click', function () {
        swal.clickCancel();
        CalcularNNA_EnAbandonoDesdeTBL();
    })
}
function EliminarDetalleNNA_Abandono() {
    EliminarTodoDetalleNNA(1);
    //document.getElementById("btn_AgregarNNAabandono").disabled = true;
    //document.getElementById("btn_EliminarAllNNAabandono").disabled = true;
}

function CalcularNNA_EnAbandonoDesdeTBL() {
    var masculino = 0, femenino = 0;
    var val_1 = 0;
    var val_2 = 0;

    $("#general_030_totalNNAabandono_masculina").val("");
    $("#general_031_totalNNAabandono_femenina").val("");

    var tblDestino = document.getElementById("tbl_NNA_abandonados");
    var rowCount = tblDestino.rows.length;
    if (rowCount > 2) {
        for (var i = 2; i <= rowCount - 1; i++) {
            var row = tblDestino.rows[i];
            var sexo = row.cells[1].dataset.sexo;

            if(sexo == "F")
                femenino++;
            else
                masculino++;
        }

        $("#general_031_totalNNAabandono_femenina").val(femenino);
        $("#general_030_totalNNAabandono_masculina").val(masculino);
    }

    if ($.isNumeric($("#general_030_totalNNAabandono_masculina").val()) )
        val_1 = $("#general_030_totalNNAabandono_masculina").val();
    if ($.isNumeric($("#general_031_totalNNAabandono_femenina").val()) )
        val_2 = $("#general_031_totalNNAabandono_femenina").val();

    $("#totalNNAabandono_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );

}
function CalcularNNA_AdolescenteConHijosDesdeTBL() {
    var masculino = 0, femenino = 0;
    var val_1 = 0;
    var val_2 = 0;

    $("#general_039_totalNNA_adoslecente_chijo_femenina").val("");
    $("#general_038_totalNNA_adoslecente_chijo_masculina").val("");

    var tblDestino = document.getElementById("tbl_adolescente_con_hijos");
    var rowCount = tblDestino.rows.length;
    if (rowCount > 2) {
        for (var i = 2; i <= rowCount - 1; i++) {
            var row = tblDestino.rows[i];
            var sexo = row.cells[1].dataset.sexo;

            if (sexo == "F")
                femenino++;
            else
                masculino++;
        }

        $("#general_039_totalNNA_adoslecente_chijo_femenina").val(femenino);
        $("#general_038_totalNNA_adoslecente_chijo_masculina").val(masculino);
    }

    if ($.isNumeric($("#general_038_totalNNA_adoslecente_chijo_masculina").val()) )
        val_1 = $("#general_038_totalNNA_adoslecente_chijo_masculina").val();
    if ($.isNumeric($("#general_039_totalNNA_adoslecente_chijo_femenina").val()) )
        val_2 = $("#general_039_totalNNA_adoslecente_chijo_femenina").val();

    $("#totalNNA_adoslecente_chijo_total").val( parseInt(val_1, 10) + parseInt(val_2, 10) );
}
function AgregarNNA_en_Residencia(opc) {
    
    if ($("#general_001_sel_proyecto").val() != "0") {
        CargaListadoNNA_VigentesResidencia(opc);
    }
    else {
        MensajeINFO("Debe seleccionar el proyecto de la Ficha Residencial para poder buscar el listado de NNA vigentes.");
    }
}
function EliminarTodoDetalleNNA(opc) {
    var tablaDetalleNNA = "";
    switch (opc) {
        case 1:
            tipo_antecedentes = "NNA en abadono.";
            tablaDetalleNNA = "tbl_NNA_abandonados";
            break;
        case 2:
            tipo_antecedentes = "NNA adolescentes con hijo.";
            tablaDetalleNNA = "tbl_adolescente_con_hijos";
            break;
        case 3:
            tipo_antecedentes = "NNA entrevistado por juez en visita.";
            tablaDetalleNNA = "tbl_detalle_NNA_entrevistados";
            break;
    }
    var tblDestino = document.getElementById(tablaDetalleNNA);
    var rowCount = tblDestino.rows.length;
    if (rowCount > 2) {
        for (var i = rowCount - 1; i >= 2; i--) {
            tblDestino.deleteRow(i);
        }

        if (opc == 1) {
            $("#general_031_totalNNAabandono_femenina").val("");
            $("#general_030_totalNNAabandono_masculina").val("");
        }
        else if (opc == 2) {
            $("#general_039_totalNNA_adoslecente_chijo_femenina").val("");
            $("#general_038_totalNNA_adoslecente_chijo_masculina").val("");
        }
    }
    else {
        MensajeINFO("No existen registros seleccionados en ficha residencial para el detalle de " + tipo_antecedentes);
    }
    //RECALCULAMOS EL DETALLE DE NNA EN ABANDONO
    if (opc == 1) {
        CalcularNNA_EnAbandonoDesdeTBL();
    }
    else if (opc == 2) {
        CalcularNNA_AdolescenteConHijosDesdeTBL();
    }
}
function AgregarDatosNNA(opc) {
    var tablaDetalleNNA="";
    var tipo_antecedentes = "";
    var agregados = 1;
    var largo;
    var rut_identificador;
    var rut, nna, rit, tribunal, codigotribunal, codnino, sexo, nombres, apellidoPaterno, apellidoMaterno;

    switch (opc) {
        case 1:
            tipo_antecedentes = "NNA EN ABANDONO";
            tablaDetalleNNA = "tbl_NNA_abandonados";
            break;
        case 2:
            tipo_antecedentes = "NNA ADOLESCENTE CON HIJOS";
            tablaDetalleNNA = "tbl_adolescente_con_hijos";
            break;
        case 3:
            tipo_antecedentes = "NNA ENTREVISTADO POR JUEZ EN VISITA";
            tablaDetalleNNA = "tbl_detalle_NNA_entrevistados";
            break;
    }

    var tbl = document.getElementById("tbl_registro_NNA_residencia");
    var rowCount = tbl.rows.length;
    var tblDestino = document.getElementById(tablaDetalleNNA);

    var ruts_en_detalle = RevisaRutCargadosEnDetalleTabla(opc);
    //alert(ruts_en_detalle);

    for (var k = 1; k <= rowCount - 1; k++) {
        var row = tbl.rows[k];
        var chk = row.cells[5].childNodes[0];

        //SI EL CHECKBOX ESTA CHEQUEADO SE AGREGA EL REGISTRO A LA TABLA DE DETALLE
        //SE DEBE CORROBORAR SI YA EXISTE EN LA TABLA DESTINO
        if (chk.checked == true) {
            
            rut = row.cells[1].innerHTML;
            nna = row.cells[2].innerHTML;
            rit = row.cells[3].innerHTML;
            tribunal = row.cells[4].innerHTML;
            codigotribunal = row.cells[4].dataset.codtribunal;
            codnino = row.cells[1].dataset.codnino;
            sexo = row.cells[1].dataset.sexo;
            nombres = row.cells[2].dataset.nombres;
            apellidoPaterno = row.cells[2].dataset.apellidopaterno;
            apellidoMaterno = row.cells[2].dataset.apellidomaterno;

            //REVISAMOS SI YA SE AGREGO EL NNA AL DETALLE
            if (ruts_en_detalle.indexOf("|" + rut + "|") == -1) {
 
                var rowCount2 = tblDestino.rows.length;
                var row = tblDestino.insertRow(rowCount2);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
            
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
                cell5.id = "codtribunal_" + k;
                cell5.dataset.codtribunal = codigotribunal;
                cell5.className = "td_registro_NNA";

                var largo = rut.length;
                var rut_identificador = rut.substring(0,largo-2);

                //<img src='./images/quitar.png' style='cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(" + opc + "," + rut_identificador + ")' />
                cell6.innerHTML = "<div style='text-align:center'><i class='glyphicon glyphicon-remove' style='color:red;cursor:pointer;' title='Quitar NNA del listado' onclick='QuitarNNAdeListado(" + opc + "," + rut_identificador + ")'></i></div>";
                cell6.dataset.identificador = rut_identificador;
                cell6.className = "td_registro_NNA";

                agregados++;
            }
        }
    }

    //RECALCULAMOS LA ETIQUETA DE ENUMERACION
    var rowCount2 = tblDestino.rows.length;
    var enumerador = 1;
    if (rowCount > 2) {
        for (var i = 2; i <= rowCount2 - 1; i++) {

            var row = tblDestino.rows[i];

            row.cells[0].innerHTML = enumerador;
            enumerador++;
        }
    }
    //RECALCULAMOS EL DETALLE DE NNA
    if (opc == 1) {
        CalcularNNA_EnAbandonoDesdeTBL();
    }
    else if (opc == 2) {
        CalcularNNA_AdolescenteConHijosDesdeTBL();
    }
}
function RevisaRutCargadosEnDetalleTabla(opcDetalleTabla) {

    var tablaDetalleNNA = "";
    switch (opcDetalleTabla) {
        case 1:
            tipo_antecedentes = "NNA EN ABANDONO";
            tablaDetalleNNA = "tbl_NNA_abandonados";
            break;
        case 2:
            tipo_antecedentes = "NNA ADOLESCENTE CON HIJOS";
            tablaDetalleNNA = "tbl_adolescente_con_hijos";
            break;
        case 3:
            tipo_antecedentes = "NNA ENTREVISTADO POR JUEZ EN VISITA";
            tablaDetalleNNA = "tbl_detalle_NNA_entrevistados";
            break;
    }
    var tblDestino = document.getElementById(tablaDetalleNNA);
    var rowCount = tblDestino.rows.length;
    var ruts = "";

    for (var i = 2; i <= rowCount - 1; i++) {

        var row = tblDestino.rows[i];
        var rut = row.cells[1].innerHTML;
        ruts = ruts + "|" + rut + "|";
    }

    return ruts;
}
function QuitarNNAdeListado(opcTabla, identificadorFila) {
    var tablaDetalleNNA = "";

    switch (opcTabla) {
        case 1:
            tipo_antecedentes = "NNA EN ABANDONO";
            tablaDetalleNNA = "tbl_NNA_abandonados";
            break;
        case 2:
            tipo_antecedentes = "NNA ADOLESCENTE CON HIJOS";
            tablaDetalleNNA = "tbl_adolescente_con_hijos";
            break;
        case 3:
            tipo_antecedentes = "NNA ENTREVISTADO POR JUEZ EN VISITA";
            tablaDetalleNNA = "tbl_detalle_NNA_entrevistados";
            break;
    }

    var tblDestino = document.getElementById(tablaDetalleNNA);
    var rowCount = tblDestino.rows.length;

    for (var i = 2; i <= rowCount - 1; i++) {

        var row = tblDestino.rows[i];
        var id = row.cells[5].dataset.identificador;
        if (id == identificadorFila) {

            tblDestino.deleteRow(i);
            rowCount--;
        }
    }

    var rowCount = tblDestino.rows.length;
    var enumerador = 1;
    if (rowCount > 2) {
        for (var i = 2; i <= rowCount - 1; i++) {

            var row = tblDestino.rows[i];

            row.cells[0].innerHTML = enumerador;
            enumerador++;
        }
    }

    //RECALCULAMOS EL DETALLE DE NNA EN ABANDONO
    if (opcTabla == 1) {
        CalcularNNA_EnAbandonoDesdeTBL();
    }
    else if (opcTabla == 2) {
        CalcularNNA_AdolescenteConHijosDesdeTBL();
    }
}
function RetornaArregloTablaDetalleNNA(tbl_detalle_) {
    var posArr, codNinoArr, rutArr, nombresArr, paternoArr, maternoArr, ritArr, tribunalArr, codtribunalArr;
    var arrDetalle_NNA = ''; 

    var tblNNA_Abandono = document.getElementById(tbl_detalle_);
    var rowCount = tblNNA_Abandono.rows.length;

    if (rowCount > 2) {
        for (var i = 2; i <= rowCount - 1; i++) {

            var row = tblNNA_Abandono.rows[i];

            //ORDEN DE INDICES:
            //0:posicion
            //1:CodNino
            //2:Rut
            //3:Nombres
            //4:ApellidoPaterno
            //5:ApellidoMaterno
            //6:Rit
            //7:Tribunal
            //8:CodTribunal

            arrDetalle_NNA = arrDetalle_NNA +
                        EliminaEspacios(row.cells[0].innerHTML) + '[' +
                        EliminaEspacios(row.cells[1].dataset.codnino) +'['+
                        EliminaEspacios(row.cells[1].innerHTML)+'['+
                        EliminaEspacios(row.cells[2].dataset.nombres) +'['+
                        EliminaEspacios(row.cells[2].dataset.apellidopaterno)+'['+
                        EliminaEspacios(row.cells[2].dataset.apellidomaterno)+'['+
                        EliminaEspacios(row.cells[3].innerHTML)+ '['+
                        EliminaEspacios(row.cells[4].innerHTML)+ '['+
                        EliminaEspacios(row.cells[4].dataset.codtribunal)+ '|';


        }
    }    
    return arrDetalle_NNA;
}

function ContadorCaracter(objtxt, objLblid) {
    var maximo = parseInt($("#" + objtxt.id).attr('maxlength'), 10);
    var ingresado = parseInt($("#" + objtxt.id).val().length, 10);
    var resto = maximo - ingresado;

    if (resto < maximo)
        $("#" + objLblid).html("Máximo caracteres: " + maximo + ". Quedan " + resto + " por ingresar.");
    else
        $("#" + objLblid).html("Máximo caracteres: " + maximo + ". Quedan " + maximo + " por ingresar.");
}
function ContadorCaracter2(objtxt) {

    var maximo = parseInt($("#" + objtxt.id).attr('maxlength'), 10);
    var ingresado = parseInt($("#" + objtxt.id).val().length, 10);
    var resto = maximo - ingresado;
    objLblid = $("#" + objtxt.id).data("labelcount");
    if (resto < maximo)
        $("#" + objLblid).html("Máximo caracteres: " + maximo + ". Quedan " + resto + " por ingresar.");
    else
        $("#" + objLblid).html("Máximo caracteres: " + maximo + ". Quedan " + maximo + " por ingresar.");
}

//PJUD
function SumarPJUD(opc) {
    var val_1 = 0;
    var val_2 = 0;

    switch (opc) {
        case 1:
            if ($.isNumeric($("#general_012_pobvig_masculina_pjud").val()))
                val_1 = $("#general_012_pobvig_masculina_pjud").val();
            if ($.isNumeric($("#general_013_pobvig_femenina_pjud").val()))
                val_2 = $("#general_013_pobvig_femenina_pjud").val();
            $("#pobvig_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 2:
            if ($.isNumeric($("#general_014_plazaConv_masculina_pjud").val()))
                val_1 = $("#general_014_plazaConv_masculina_pjud").val();
            if ($.isNumeric($("#general_015_plazaConv_femenina_pjud").val()))
                val_2 = $("#general_015_plazaConv_femenina_pjud").val();
            $("#plazaConv_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 3:
            if ($.isNumeric($("#general_016_otrasPlazas_masculina_pjud").val()))
                val_1 = $("#general_016_otrasPlazas_masculina_pjud").val();
            if ($.isNumeric($("#general_017_otrasPlazas_femenina_pjud").val()))
                val_2 = $("#general_017_otrasPlazas_femenina_pjud").val();
            $("#otrasPlazas_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 4:
            if ($.isNumeric($("#general_018_totalNNApresent_masculina_pjud").val()))
                val_1 = $("#general_018_totalNNApresent_masculina_pjud").val();
            if ($.isNumeric($("#general_019_totalNNApresent_femenina_pjud").val()))
                val_2 = $("#general_019_totalNNApresent_femenina_pjud").val();
            $("#totalNNApresent_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 5:
            if ($.isNumeric($("#general_020_totalNNAacercFamilia_masculina_pjud").val()))
                val_1 = $("#general_020_totalNNAacercFamilia_masculina_pjud").val();
            if ($.isNumeric($("#general_021_totalNNAacercFamilia_femenina_pjud").val()))
                val_2 = $("#general_021_totalNNAacercFamilia_femenina_pjud").val();
            $("#totalNNAacercFamilia_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 6:
            if ($.isNumeric($("#general_022_totalResidenMayor_masculina_pjud").val()))
                val_1 = $("#general_022_totalResidenMayor_masculina_pjud").val();
            if ($.isNumeric($("#general_023_totalResidenMayor_femenina_pjud").val()))
                val_2 = $("#general_023_totalResidenMayor_femenina_pjud").val();
            $("#totalResidenMayor_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 7:
            if ($.isNumeric($("#general_024_abandonoSist_masculina_pjud").val()))
                val_1 = $("#general_024_abandonoSist_masculina_pjud").val();
            if ($.isNumeric($("#general_025_abandonoSist_femenina_pjud").val()))
                val_2 = $("#general_025_abandonoSist_femenina_pjud").val();
            $("#abandonoSist_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 8:
            if ($.isNumeric($("#general_026_hospitalizados_masculina_pjud").val()))
                val_1 = $("#general_026_hospitalizados_masculina_pjud").val();
            if ($.isNumeric($("#general_027_hospitalizados_femenina_pjud").val()))
                val_2 = $("#general_027_hospitalizados_femenina_pjud").val();
            $("#hospitalizados_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 9:
            if ($.isNumeric($("#general_028_totalNNAart80bis_masculina_pjud").val()))
                val_1 = $("#general_028_totalNNAart80bis_masculina_pjud").val();
            if ($.isNumeric($("#general_029_totalNNAart80bis_femenina_pjud").val()))
                val_2 = $("#general_029_totalNNAart80bis_femenina_pjud").val();
            $("#totalNNAart80bis_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 10:
            if ($.isNumeric($("#general_030_totalNNAabandono_masculina_pjud").val()))
                val_1 = $("#general_030_totalNNAabandono_masculina_pjud").val();
            if ($.isNumeric($("#general_031_totalNNAabandono_femenina_pjud").val()))
                val_2 = $("#general_031_totalNNAabandono_femenina_pjud").val();
            $("#totalNNAabandono_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));

            break;
        case 11:
            if ($.isNumeric($("#general_032_totalNNA_suscep_adopcion_masculina_pjud").val()))
                val_1 = $("#general_032_totalNNA_suscep_adopcion_masculina_pjud").val();
            if ($.isNumeric($("#general_033_totalNNA_suscep_adopcion_femenina_pjud").val()))
                val_2 = $("#general_033_totalNNA_suscep_adopcion_femenina_pjud").val();
            $("#totalNNA_suscep_adopcion_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 12:
            if ($.isNumeric($("#general_034_totalNNA_enlace_adopcion_masculina_pjud").val()))
                val_1 = $("#general_034_totalNNA_enlace_adopcion_masculina_pjud").val();
            if ($.isNumeric($("#general_035_totalNNA_enlace_adopcion_femenina_pjud").val()))
                val_2 = $("#general_035_totalNNA_enlace_adopcion_femenina_pjud").val();
            $("#totalNNA_enlace_adopcion_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 13:
            if ($.isNumeric($("#general_036_totalNNA_causaini_adopcion_masculina_pjud").val()))
                val_1 = $("#general_036_totalNNA_causaini_adopcion_masculina_pjud").val();
            if ($.isNumeric($("#general_037_totalNNA_causaini_adopcion_femenina_pjud").val()))
                val_2 = $("#general_037_totalNNA_causaini_adopcion_femenina_pjud").val();
            $("#totalNNA_causaini_adopcion_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 14:
            if ($.isNumeric($("#general_038_totalNNA_adoslecente_chijo_masculina_pjud").val()))
                val_1 = $("#general_038_totalNNA_adoslecente_chijo_masculina_pjud").val();
            if ($.isNumeric($("#general_039_totalNNA_adoslecente_chijo_femenina_pjud").val()))
                val_2 = $("#general_039_totalNNA_adoslecente_chijo_femenina_pjud").val();
            $("#totalNNA_adoslecente_chijo_total_pjud").val(parseInt(val_1, 10) + parseInt(val_2, 10));
    }
}

//COMPARACION DE FICHAS - HISTORIAL
function SumarCompare(opc, sufijo) {
    var val_1 = 0;
    var val_2 = 0;
    switch (opc) {
        case 1:
            if ($.isNumeric($("#general_012_pobvig_masculina" + sufijo).val()))
                val_1 = $("#general_012_pobvig_masculina" + sufijo).val();
            if ($.isNumeric($("#general_013_pobvig_femenina" + sufijo).val()))
                val_2 = $("#general_013_pobvig_femenina" + sufijo).val();
            $("#pobvig_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 2:
            if ($.isNumeric($("#general_014_plazaConv_masculina" + sufijo).val()))
                val_1 = $("#general_014_plazaConv_masculina" + sufijo).val();
            if ($.isNumeric($("#general_015_plazaConv_femenina" + sufijo).val()))
                val_2 = $("#general_015_plazaConv_femenina" + sufijo).val();
            $("#plazaConv_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 3:
            if ($.isNumeric($("#general_016_otrasPlazas_masculina" + sufijo).val()))
                val_1 = $("#general_016_otrasPlazas_masculina" + sufijo).val();
            if ($.isNumeric($("#general_017_otrasPlazas_femenina" + sufijo).val()))
                val_2 = $("#general_017_otrasPlazas_femenina" + sufijo).val();
            $("#otrasPlazas_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 4:
            if ($.isNumeric($("#general_018_totalNNApresent_masculina" + sufijo).val()))
                val_1 = $("#general_018_totalNNApresent_masculina" + sufijo).val();
            if ($.isNumeric($("#general_019_totalNNApresent_femenina" + sufijo).val()))
                val_2 = $("#general_019_totalNNApresent_femenina" + sufijo).val();
            $("#totalNNApresent_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 5:
            if ($.isNumeric($("#general_020_totalNNAacercFamilia_masculina" + sufijo).val()))
                val_1 = $("#general_020_totalNNAacercFamilia_masculina" + sufijo).val();
            if ($.isNumeric($("#general_021_totalNNAacercFamilia_femenina" + sufijo).val()))
                val_2 = $("#general_021_totalNNAacercFamilia_femenina" + sufijo).val();
            $("#totalNNAacercFamilia_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 6:
            if ($.isNumeric($("#general_022_totalResidenMayor_masculina" + sufijo).val()))
                val_1 = $("#general_022_totalResidenMayor_masculina" + sufijo).val();
            if ($.isNumeric($("#general_023_totalResidenMayor_femenina" + sufijo).val()))
                val_2 = $("#general_023_totalResidenMayor_femenina" + sufijo).val();
            $("#totalResidenMayor_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 7:
            if ($.isNumeric($("#general_024_abandonoSist_masculina" + sufijo).val()))
                val_1 = $("#general_024_abandonoSist_masculina" + sufijo).val();
            if ($.isNumeric($("#general_025_abandonoSist_femenina" + sufijo).val()))
                val_2 = $("#general_025_abandonoSist_femenina" + sufijo).val();
            $("#abandonoSist_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 8:
            if ($.isNumeric($("#general_026_hospitalizados_masculina" + sufijo).val()))
                val_1 = $("#general_026_hospitalizados_masculina" + sufijo).val();
            if ($.isNumeric($("#general_027_hospitalizados_femenina" + sufijo).val()))
                val_2 = $("#general_027_hospitalizados_femenina" + sufijo).val();
            $("#hospitalizados_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 9:
            if ($.isNumeric($("#general_028_totalNNAart80bis_masculina" + sufijo).val()))
                val_1 = $("#general_028_totalNNAart80bis_masculina" + sufijo).val();
            if ($.isNumeric($("#general_029_totalNNAart80bis_femenina" + sufijo).val()))
                val_2 = $("#general_029_totalNNAart80bis_femenina" + sufijo).val();
            $("#totalNNAart80bis_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 10:
            if ($.isNumeric($("#general_030_totalNNAabandono_masculina" + sufijo).val()))
                val_1 = $("#general_030_totalNNAabandono_masculina" + sufijo).val();
            if ($.isNumeric($("#general_031_totalNNAabandono_femenina" + sufijo).val()))
                val_2 = $("#general_031_totalNNAabandono_femenina" + sufijo).val();
            $("#totalNNAabandono_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));

            break;
        case 11:
            if ($.isNumeric($("#general_032_totalNNA_suscep_adopcion_masculina" + sufijo).val()))
                val_1 = $("#general_032_totalNNA_suscep_adopcion_masculina" + sufijo).val();
            if ($.isNumeric($("#general_033_totalNNA_suscep_adopcion_femenina" + sufijo).val()))
                val_2 = $("#general_033_totalNNA_suscep_adopcion_femenina" + sufijo).val();
            $("#totalNNA_suscep_adopcion_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 12:
            if ($.isNumeric($("#general_034_totalNNA_enlace_adopcion_masculina" + sufijo).val()))
                val_1 = $("#general_034_totalNNA_enlace_adopcion_masculina" + sufijo).val();
            if ($.isNumeric($("#general_035_totalNNA_enlace_adopcion_femenina" + sufijo).val()))
                val_2 = $("#general_035_totalNNA_enlace_adopcion_femenina" + sufijo).val();
            $("#totalNNA_enlace_adopcion_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 13:
            if ($.isNumeric($("#general_036_totalNNA_causaini_adopcion_masculina" + sufijo).val()))
                val_1 = $("#general_036_totalNNA_causaini_adopcion_masculina" + sufijo).val();
            if ($.isNumeric($("#general_037_totalNNA_causaini_adopcion_femenina" + sufijo).val()))
                val_2 = $("#general_037_totalNNA_causaini_adopcion_femenina" + sufijo).val();
            $("#totalNNA_causaini_adopcion_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
            break;
        case 14:
            if ($.isNumeric($("#general_038_totalNNA_adoslecente_chijo_masculina" + sufijo).val()))
                val_1 = $("#general_038_totalNNA_adoslecente_chijo_masculina" + sufijo).val();
            if ($.isNumeric($("#general_039_totalNNA_adoslecente_chijo_femenina" + sufijo).val()))
                val_2 = $("#general_039_totalNNA_adoslecente_chijo_femenina" + sufijo).val();
            $("#totalNNA_adoslecente_chijo_total" + sufijo).val(parseInt(val_1, 10) + parseInt(val_2, 10));
    }
}
