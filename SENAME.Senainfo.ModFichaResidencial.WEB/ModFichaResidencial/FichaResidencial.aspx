<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FichaResidencial.aspx.cs" Inherits="SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial.FichaResidencial" %>

<%-- DESCOMENTAR ESTA DOS LINEAS PARA SU VERSIÓN EN SENAINFO
    
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajax" %>
<%@ Register Src="~/menu_colgante.ascx" TagPrefix="uc2" TagName="menu_colgante" %>
    
--%>

<!--
Autor: Luis Danilo Espinoza, SOCIAL-IT
07/11/2019
Spint 2.1
-->

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>FICHA RESIDENCIAL  :: Senainfo :: Servicio Nacional de Menores</title>


        <!-- DESARROLLO-->
        <script src="../Scripts/jquery-3.2.1.min.js"></script>
       
        <link href="../Content/bootstrap.min.css" rel="stylesheet" />
        <link href="../Content/theme.css" rel="stylesheet" />
        <link href="../Scripts/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
        <link href="../Content/select2-bootstrap.min.css" rel="stylesheet" />
        <link href="../Content/ficha_residencia.css" rel="stylesheet" />
        
        <script src="../Scripts/bootstrap.min.js"></script>
        <script src="../Scripts/select2.min.js"></script>
   
        <script src="../Scripts/sweetalert2/sweetalert2.all.min.js"></script>

        <script src="../Scripts/ficha/progressbar.min.js"></script>

        <link href="../Content/font-awesome.min.css" rel="stylesheet" />
        <script src='../Scripts/pdfmake/pdfmake.min.js'></script>
 	    <script src='../Scripts/pdfmake/vfs_fonts.js'></script>

        <link href="../Scripts/icheck/skins/all.css" rel="stylesheet" />
        <script src="../Scripts/icheck/icheck.min.js"></script>

        <link rel="stylesheet" href="../Scripts/datepicker/datepicker.css" />
        <script src="../Scripts/datepicker/datepicker.js"></script>
        <script src="../Scripts/datepicker/datepicker.es-ES.js"></script>
      

      <!-- PRODUCCION
        <script src="../js/jquery-3.2.1.min.js"></script>

        <link href="../css/bootstrap.min.css" rel="stylesheet" />
        <link href="../css/theme.css" rel="stylesheet" />
        <link href="scripts/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
        <link href="css/select2-bootstrap.min.css" rel="stylesheet" />
        <link href="css/ficha_residencia.css" rel="stylesheet" />

        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/select2.min.js"></script>

        <script src="scripts/sweetalert2/sweetalert2.all.min.js"></script>

        <script src="scripts/ficha/progressbar.min.js"></script>       
        <script src='scripts/pdfmake/pdfmake.min.js'></script>
 	    <script src='scripts/pdfmake/vfs_fonts.js'></script>

        <link href="scripts/icheck/skins/all.css" rel="stylesheet" />
        <script src="scripts/icheck/icheck.min.js"></script>

        <link rel="stylesheet" href="scripts/datepicker/datepicker.css" />
        <script src="scripts/datepicker/datepicker.js"></script>
        <script src="scripts/datepicker/datepicker.es-ES.js"></script>
      -->
    </head>
<body>

<div class="container">
    <form id="form1" runat="server">
        <%--DESCOMENTAR SIGUIENTE LINEA PARA SU VERSIÓN EN SENAINFO --%>
        <%--<uc2:menu_colgante runat="server" ID="menu_colgante" />--%>
        <asp:HiddenField ID="idusuario_conect" runat="server" />
        <asp:HiddenField ID="tokensUsr" runat="server" />
    </form>
    <div>

        <h3 class="titsec" onclick="InicializaKey();">FICHA RESIDENCIAL</h3>
        <div id="frmwork" style="display:block;">
        <span id="folio_pendiente" style="font-size:11px;font-weight:600;color:#3b3939;">&nbsp;</span><span id="periodo_ficha" style="font-size:11px;font-weight:600;color:#3b3939;"></span>
        <ul class="nav nav-tabs tab-fixed-height nav-justified">
            <li class="active"><a data-toggle="tab" href="#generales">Antecedentes Generales</a></li>
            <li><a data-toggle="tab" href="#poblacion">Antecedentes de Población y Capacidad</a></li>
            <li><a data-toggle="tab" href="#dotacion">Antecedentes de Dotación de Personal</a></li>
            <li><a data-toggle="tab" href="#infraestructura">Antecedentes Infraestructura</a></li>
            <li><a data-toggle="tab" href="#seguridad">Antecedentes de Seguridad</a></li>
            <li><a data-toggle="tab" href="#salud">Antecedentes de Salud</a></li>
            <li><a data-toggle="tab" href="#educacion">Antecedentes de Educación</a></li>
            <li><a data-toggle="tab" href="#alimentacion">Antecedentes de Alimentación</a></li>
            <li><a data-toggle="tab" href="#gestion_residencia">Antecedentes de Gestión de Residencia</a></li>
        </ul>

        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="generales">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Antecedentes Generales</span></td>
                        
                        </tr>


                                                <!-- Spint 2.1 NEW Start-->
                        <tr>
                            <td class="etiqCampo" ">Fecha de aplicación de Ficha Residencial</td>
                        <td>
                                <input style="border-bottom: 1px #B2B2B2 solid;width:100px;cursor:pointer;float:left;" type='text' class="form-control textCampo" id='ifechaaplicacionRegistro' title="Para modificar has clic y selecciona una nueva fecha" disabled="disabled"/>
                            </td>
                        </tr>

                        <script type="text/javascript"> 
                                var d = new Date();
                                var dia = d.getDate();
                                var mes = d.getMonth() + 1;
                                if (dia < 10) dia = "0" + dia;
                                if (mes < 10) mes = "0" + mes;
                                var diaActual = dia + '/' + mes + '/' + d.getFullYear();
                                var tokensUsr = document.getElementById("tokensUsr").value;
                               
                                if (tokensUsr.indexOf("D5CF4DE5-5EFA-4EDD-AD65-5BED3AD9482A") != -1) {
                                    $('#ifechaaplicacionRegistro').datepicker({
                                        autoHide: true,
                                        zIndex: 2048,
                                        language: 'es-ES',
                                        format: 'dd/mm/yyyy',
                                        endDate: diaActual
                                    });
                                    }

                            document.getElementById("ifechaaplicacionRegistro").setAttribute('value', diaActual);
                         </script>

                        <!-- Spint 2.1 NEW End-->

                        <!-- Spint 2.1 OLD Start
                        <tr >
                            <td class="etiqCampo" ">Fecha de aplicación de Ficha Residencial</td>
                            
                            <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <span class="form-control" style="width:100px;cursor:pointer;float:left;" title="Para modificar has clic y selecciona una nueva fecha" id="fechaaplicacionRegistro"> </span>
                                
                           </td>

                        </tr>

                        <script>
                            $(document).ready(function () {
                                var d = new Date();
                                var dia = d.getDate();
                                var mes = d.getMonth() + 1;
                                if (dia < 10) dia = "0" + dia;
                                if (mes < 10) mes = "0" + mes;
                                var diaActual = dia + '/' + mes + '/' + d.getFullYear();
                                var tokensUsr = document.getElementById("tokensUsr").value;
                               
                                if (tokensUsr.indexOf("D5CF4DE5-5EFA-4EDD-AD65-5BED3AD9482A") != -1) {
                                    $('#fechaaplicacionRegistro').datepicker({
                                        autoHide: true,
                                        zIndex: 2048,
                                        language: 'es-ES',
                                        format: 'dd/mm/yyyy',
                                        endDate: diaActual
                                    });
                                }
                                $('#fechaaplicacionRegistro').html(diaActual);                       


                            });

                        </script>
                        Spint 2.1 OLD End-->

                        <tr >
                            <td class="etiqCampo" >Institución</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="general_000_sel_Institucion" disabled="disabled" class="form-control textCampoSel2" style="width:95%" onchange="CargaProyectosInstitucion(this.value); CargaBotonFormularioPDF();"><option value="0">Selecciona una institución</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Proyecto</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="general_001_sel_proyecto" disabled="disabled" class="form-control textCampoSel2" style="width:95%" onchange="CargaDatosGeneralesDDL2(this.value);CargaBotonFormularioPDF();"></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo">Tipo de organismo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_002_tipoOrganismo" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Modelo de Intervención</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_003_modeloIntervencion" class="form-control textCampo" placeholder="Modelo de Intervención" style="width:95%" readonly="true" /></td>
                        </tr>     
                        <tr>
                            <td class="etiqCampo">Dirección</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_004_direccion" type="text" class="form-control textCampo" placeholder="Dirección de residencia" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Teléfonos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_005_telefonos" type="text" class=" form-control textCampo" placeholder="Teléfonos" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Región</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_006_region" class="form-control textCampo" placeholder="Región" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Comuna</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_007_comuna" class="form-control textCampo" placeholder="Comuna" style="width:95%" readonly="true"/></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Correo electrónico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_008_email" type="text" class="form-control textCampo" placeholder="Correo electrónico" readonly="true"/></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Director(a) Proyecto</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_009_directorProyecto" type="text" class="form-control textCampo" placeholder="Director(a) Proyecto" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">RUT Director(a) Proyecto</td>
                            <td style="border-bottom: 1px #fff solid;"><input id="general_010_rut_director_proyecto" type="text" class="form-control textCampoRut" placeholder="RUT Director(a)" readonly="true" /> <!---<input type="text" id="general_010_dv_rut_director_proyecto" class="textCampoDvRut" placeholder="9" onblur="AnalizaRUT(1);" onkeypress="return ValidaIngresoDV(this.value, event);" />--></td>
                        </tr> 
                        <tr><td colspan="2"><span id="spanRUTerroneoGral" style="color:red;font-size:12px;text-align:left;"></span></td></tr>
                    </table>
                    <div id="divbotonImprimePDF" style="text-align:center;display:none;">



                      <input tabindex="1" type="radio" name="formatoGenFormulario" id="input-1" checked="checked" onclick=""/>
                      <label for="input-1" style="cursor:pointer;">Sin datos</label>&nbsp;
                      <input tabindex="2" type="radio" name="formatoGenFormulario" id="input-2"  onclick="MarcaTipoFormularioPDF(1);"/>
                      <label for="input-2" style="cursor:pointer;">Con datos base</label>&nbsp;
                      <input tabindex="3" type="radio" name="formatoGenFormulario" id="input-3" onclick="MarcaTipoFormularioPDF(2);"/>
                      <label for="input-3">Con datos ficha</label>&nbsp;
                      
                      <input tabindex="4" type="checkbox" id="chkConFecha" />
                      <label for="chkConFecha" style="cursor:pointer;">Incluir Fecha</label>&nbsp;

                        <button class="btn btn-primary" style="margin-bottom:10px;" onclick="GenerarFormularioPDF_FR(0);"><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp;GENERAR FORMULARIO PDF</button>
                    </div>

                    <script>
                        $(document).ready(function () {
                            //$('#input-3, #input-2, #input-1, #chkConFecha').iCheck({
                            $('#input-3, #input-2, #input-1, #chkConFecha').iCheck({
                                checkboxClass: 'icheckbox_square-blue',
                                radioClass: 'iradio_square-blue',
                                increaseArea: '20%'
                            });

                            $('#input-3').on('ifChecked', function (event) {
                                MarcaTipoFormularioPDF(2);
                            });
                            $('#input-2').on('ifChecked', function (event) {
                                MarcaTipoFormularioPDF(1);
                            });
                            $('#input-1').on('ifChecked', function (event) {
                                MarcaTipoFormularioPDF(0);
                            });
                            $('#chkConFecha').on('ifClicked', function (event) {
                                MarcaImprimeFechaPDF();
                            });
                        });

                    </script>

                    <table class="table">
                        <tr>
                            <td colspan="4" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Antecedentes Población</span></td>
                        
                        </tr>  
                        <tr>
                            <td></td>
                            <td class="etiqCampo2">MASCULINO</td>
                            <td class="etiqCampo2">FEMENINO</td>
                            <td class="etiqCampo2">TOTAL</td>
                        </tr>                        
                        <tr>
                            <td class="etiqCampo3">Población Vigente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_012_pobvig_masculina" type="text" class="form-control textCampo3"  maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_013_pobvig_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="pobvig_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>      
                        <tr>
                            <td class="etiqCampo3">Plazas Convenidas con SENAME (En caso de tener subvención)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_014_plazaConv_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_015_plazaConv_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="plazaConv_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Otras Plazas no subvencionadas por Sename</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_016_otrasPlazas_masculina" type="text" class="form-control textCampo3" maxlength="3"  placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_017_otrasPlazas_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="otrasPlazas_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA Presentes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_018_totalNNApresent_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_019_totalNNApresent_femenina"type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNApresent_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA en Acercamiento Familar</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_020_totalNNAacercFamilia_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_021_totalNNAacercFamilia_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAacercFamilia_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total de Residentes Mayores de Edad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_022_totalResidenMayor_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_023_totalResidenMayor_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalResidenMayor_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Abandono de Sistema</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_024_abandonoSist_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_025_abandonoSist_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="abandonoSist_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Hospitalizados</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_026_hospitalizados_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_027_hospitalizados_femenina"type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="hospitalizados_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA ingresados con Artículo 80 Bis</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_028_totalNNAart80bis_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_029_totalNNAart80bis_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAart80bis_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA en completo abandono decretado por el o la  Juez(a) (especificar)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_030_totalNNAabandono_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_031_totalNNAabandono_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAabandono_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total de adolescentes con hijos recién nacidos o lactantes (especificar)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_038_totalNNA_adoslecente_chijo_masculina" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_039_totalNNA_adoslecente_chijo_femenina" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_adoslecente_chijo_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>                                                                                                                                                                                                                                            
                    </table>
                    <table id="tbl_NNA_abandonados" class="table">
                        <tr><td colspan="6" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de NNA en Completo Abandono</span></td></tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                            <td class="etiqCampo2" style="width:40px;">&nbsp;</td>
                        </tr>  
                    </table>
                    <div style="text-align:center;">
                        <button id="btn_AgregarNNAabandono" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para agregar detalle de NNA en abandono" onclick="AgregarNNA_en_Residencia(1);">Agregar</button>
                        <button id="btn_EliminarAllNNAabandono" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para eliminar todo el detalle de NNA en abandono" onclick="EliminarTodoDetalleNNA(1);">Eliminar todo</button>
                    </div>

                    <table id="tbl_adolescente_con_hijos" class="table">
                        <tr>
                            <td colspan="6" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de Adolescente con Hijos Lactantes</span></td>
                        
                        </tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                            <td class="etiqCampo2" style="width:40px;">&nbsp;</td>
                        </tr>
                    </table>
                    <div style="text-align:center;">
                        <button id="btn_AgregarNNAadolescenteConHijo" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para agregar detalle de NNA en abandono" onclick="AgregarNNA_en_Residencia(2);">Agregar</button>
                        <button id="btn_EliminaAllNNAadolescenteConHijo" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para eliminar todo el detalle de NNA adolescente con hijos" onclick="EliminarTodoDetalleNNA(2);">Eliminar todo</button>
                    </div>
                    <br />
                    <table class="table">
                        <tr>
                            <td colspan="4" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Antecedentes Adopción de NNA</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="etiqCampo2">MASCULINO</td>
                            <td class="etiqCampo2">FEMENINO</td>
                            <td class="etiqCampo2">TOTAL</td>
                        </tr>                        
                        <tr>
                            <td class="etiqCampo3">Total de NNA declarados susceptibles de ser adoptados (con sentencia)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_032_totalNNA_suscep_adopcion_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_033_totalNNA_suscep_adopcion_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_suscep_adopcion_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>   
                        <tr>
                            <td class="etiqCampo3">Total de NNA con enlace de adopción (considerar sólo población de NNA declarados susceptible de ser adoptados)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_034_totalNNA_enlace_adopcion_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_035_totalNNA_enlace_adopcion_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_enlace_adopcion_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Total de NNA con causa iniciada por susceptibilidad de adopción (sin sentencia)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_036_totalNNA_causaini_adopcion_masculina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_037_totalNNA_causaini_adopcion_femenina" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_causaini_adopcion_total" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>
                    </table>
                    <br />
                    <div style="text-align:center;"><button id="btn_antecedentesGenerales" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes generales " onclick="GrabarAntecedentes(1);">Grabar Antecedente Generales</button>&nbsp;<button id="btn_FichaGenera_01" disabled="disabled" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></div><br />
            </div>

            <div role="tabpanel" class="tab-pane fade in" id="poblacion">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Población y Capacidad</span></td>
                            </tr>
                        <tr>
                            <td class="etiqCampo">Residencia con Subvención SENAME</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_001_sel_reside_con_subven" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Sexo que atiende la Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_002_sel_sexo_atendidos" class="form-control textCampo"><option value="0"></option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Mixto</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Rango etáreo de Atención</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_003_sel_rango_etareo_predomina" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">0 a 18</option><option value="3">6 a 12</option><option value="4">6 a 18</option><option value="5">12 a 18</option><option value="6">Más de 18</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Rango etáreo Predominante</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_004_poblacion_vigente" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">6 a 12</option><option value="3">12 a 18</option><option value="4">Más de 18</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Tipo de Vulneración más Frecuente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="poblacion_005_tipo_vulneracion_mas_frecuente" type="text" class="form-control textCampo" placeholder="" /></td>
                        </tr> 
                        <tr style="display:none;">
                            <td class="etiqCampo">Programa de Apadrinamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_006_programa_apadrinimiento" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0" selected="selected">NO</option></select></td>
                        </tr> 
                        <tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesPoblacionCapacidad" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Poblacion y Capacidad " onclick="GrabarAntecedentes(2);">Grabar Antecedente de Poblacion y Capacidad</button>&nbsp;<button id="btn_FichaGenera_02" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>
                    </table>
            </div>
             <div role="tabpanel" class="tab-pane fade in" id="dotacion">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes de Dotación de Personal</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="etiqCampo2"></td>
                                <td class="etiqCampo2">CANTIDAD</td>
                                <td class="etiqCampo5">TIPO JORNADA</td>
                                <td class="etiqCampo2">HORAS SEMANALES</td>
                            </tr>                        
                            <tr>
                                <td class="etiqCampo3">Director(a)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_001_sel_director_existe" class="form-control textCampoSel1" disabled="disabled"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_002_sel_director_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(1);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_003_sel_director_tipo_jornada" class="form-control textCampoSel1" disabled="disabled"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_004_sel_director_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Asistente Social:</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_005_sel_asistente_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_006_sel_asistente_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(2);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_007_sel_asistente_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_008_sel_asistente_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Psicólogo</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_009_sel_psicologo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_010_sel_psicologo_cantidad" class ="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(3);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_011_sel_psicologo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_012_sel_psicologo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Enfermero(a)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_013_sel_enfermero_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_014_sel_enfermero_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(4);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_015_sel_enfermero_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_016_sel_enfermero_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Auxiliar de Enfermería</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_017_sel_auxenfermero_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_018_sel_auxenfermero_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(5);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_019_sel_auxenfermero_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_020_sel_auxenfermero_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Médico</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_021_sel_medico_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_022_sel_medico_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(6);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_023_sel_medico_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_024_sel_medico_horas_semanales"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Psiquiatra</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_025_sel_psiquiatra_existe"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_026_sel_psiquiatra_cantidad"class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(7);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_027_sel_psiquiatra_tipo_jornada"class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_028_sel_psiquiatra_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Terapeuta Ocupacional</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_029_sel_terapeuta_ocup_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_030_sel_terapeuta_ocup_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(8);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_031_sel_terapeuta_ocup_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_032_sel_terapeuta_ocup_horas_semanales"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Kinesiólogo</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_033_sel_kinesiologo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_034_sel_kinesiologo_cantidad"class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(9);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_035_sel_kinesiologo_tipo_jornada"class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_036_sel_kinesiologo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Nutricionista</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_037_sel_nutricionista_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_038_sel_nutricionista_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(10);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_039_sel_nutricionista_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_040_sel_nutricionista_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Fonoaudiólogo</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_041_sel_fonoaudiologo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_042_sel_fonoaudiologo_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(11);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_043_sel_fonoaudiologo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_044_sel_fonoaudiologo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Profesor(a) de Educación Física</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_045_sel_profesorEducaFisica_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_046_sel_profesorEducaFisica_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(12);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_047_sel_profesorEducaFisica_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_048_sel_profesorEducaFisica_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Psicopedagogo(a)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_049_sel_psicopedagogo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_050_sel_psicopedagogo_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(13);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_051_sel_psicopedagogo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_052_sel_psicopedagogo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Educador(a) de Párvulos</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_053_sel_educadoraParvulos_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_054_sel_educadoraParvulos_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(14);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_055_sel_educadoraParvulos_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_056_sel_educadoraParvulos_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Educador(a) de trato directo</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_057_sel_educadoraTratoDirecto_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_058_sel_educadoraTratoDirecto_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(15);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_059_sel_educadoraTratoDirecto_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_060_sel_educadoraTratoDirecto_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Manipulador(a) de Alimentos</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_061_sel_manipuladorAlimentos_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_062_sel_manipuladorAlimentos_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(16);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_063_sel_manipuladorAlimentos_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_064_sel_manipuladorAlimentos_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Apoyo Administrativo</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_065_sel_apoyoAdministrativo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_066_sel_apoyoAdministrativo_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(17);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_067_sel_apoyoAdministrativo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_068_sel_apoyoAdministrativo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Personal de Aseo</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_069_sel_personalAseo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_070_sel_personalAseo_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(18);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_071_sel_personalAseo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_072_sel_personalAseo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Personal de Lavandería</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_073_sel_personalLavanderia_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_074_sel_personalLavandería_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(19);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_075_sel_personalLavandería_tipo_joranada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_076_sel_personalLavandería_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Monitores Talleristas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_077_sel_monitoresTalleristas_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_078_sel_monitoresTalleristas_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(20);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_079_sel_monitoresTalleristas_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_080_sel_monitoresTalleristas_horas_semanales"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Alumnos en Práctica (Especificar en Observación)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_081_sel_alumnosPractica_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_082_sel_alumnosPractica_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(21);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_083_sel_alumnosPractica_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_084_sel_alumnosPractica_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Apoyo Voluntario (Especificar en Observación)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_085_sel_apoyoVoluntario_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_086_sel_apoyoVoluntario_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(22);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_087_sel_apoyoVoluntario_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_088_sel_apoyoVoluntario_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Otros (Especificar en Observaciones)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_089_sel_Otros_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_090_sel_Otros_cantidad"class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(23);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_091_sel_Otros_tipo_jornada"class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_092_sel_Otros_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">¿Personal con Licencia Médica?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_093_sel_PersonalLicenciaMedica_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_094_sel_PersonalLicenciaMedica_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(24);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_096_sel_PersonalLicenciaMedica_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Personal con Licencia ¿Cuenta con Suplente?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad" class="form-control textCampoSel2" onkeyup="HabilitaDotacionPersonal(25);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td colspan="5" class="etiqCampo3">Observaciones</td>
                            </tr>
                            <tr>
                                <td colspan="5" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="dotacion_101_Observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;" onkeyup="return ContadorCaracter(this,'labelCaracteres_ObsDotacion');" maxlength="4000"></textarea>
                                    <span id="labelCaracteres_ObsDotacion" class="lblrestoIngreso"></span><br />
                                    <span class="lblrestoIngreso" style="color:blue;">* Recuerde incorporar en las observaciones la especificación correspondiente si declara existencia de: Alumno en Práctica, Apoyo Voluntario, o bien Otros.</span>
                                </td>
                            </tr>
                            <tr><td colspan="5" style="text-align:center;"><button id="btn_antecedentesDotacionPersonal" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Dotación Personal " onclick="GrabarAntecedentes(3);">Grabar Antecedente Dotación Personal</button>&nbsp;<button id="btn_FichaGenera_03" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>
                        </table>
            </div>

             <div role="tabpanel" class="tab-pane fade in" id="infraestructura">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Recursos Materiales, Infraestructura y Equipamiento</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="etiqCampo2"></td>
                                <td class="etiqCampo2">CANTIDAD</td>
                            </tr>                        
                            <tr>
                                <td class="etiqCampo3">Oficinas Administrativas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_001_ofi_admin_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                    </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_002_ofi_admin_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(1);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Sala de Reuniones</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_003_salaReuniones_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_004_salaReuniones_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(2);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Sala de Recepción</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_005_salaRecepcion_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_006_salaRecepcion_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(3);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Espacio de Visitas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_007_espacioVisitas_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_008_espacioVisitas_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(4);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Sala Multiuso para Talleres</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_009_salaMultiuso_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                    </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_010_salaMultiuso_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(5);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Sala de Estar/Living</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_011_salaEstar_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_012_salaEstar_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(6);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Unidad de Salud</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_013_enfermeria_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_014_enfermeria_cantidad" class="form-control textCampoSel1"  onkeyup="HabilitaInfraestructura(7);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Espacios Recreacionales</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_015_espacioRecreacional_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_016_espacioRecreacional_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(8);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Áreas Verdes</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_019_areasVerdes_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_020_areasVerdes_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(9);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Cocina</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_021_cocina_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_022_cocina_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(10);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Comedor</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_023_comedor_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_024_comedor_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(11);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Lavandería</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_025_Lavanderia_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_026_Lavanderia_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(12);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Dormitorio NNA</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_027_Dormitorio_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_028_Dormitorio_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(13);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Camas NNA</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_029_CamasNNA_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_030_CamasNNA_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(14);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Closet, Lockers</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_031_closetLocker_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_032_closetLocker_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(15);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Baños para Público</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_033_banosPublico_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_034_banosPublico_cantidad" class="form-control textCampoSel1" onkeyup="HabilitaInfraestructura(16);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" maxlength="4"/></td>
                            </tr>

                            <tr style="display:none;">
                                <td class="etiqCampo3">Baños NNA Adecuados y Suficientes</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_035_banosNNAadecuados_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                       </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_036_banosNNAadecuados_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(17);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Baños NNA en Funcionamiento</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_035_banosNNA_Funcionamiento_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_035_banosNNA_Funcionamiento_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(19);" onblur="ValidaSumaDependientesbanosNNAFunc();" maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Baños NNA de acuerdo a Normativa</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_035_banosNNA_AcuerdoNormativa_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_035_banosNNA_AcuerdoNormativa_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(20);"  maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Baños NNA de hombres</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_035_banosNNA_Hombre_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                       </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_035_banosNNA_Hombre_cant" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(21);"  maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Baños NNA de mujeres</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_035_banosNNA_Mujer_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_035_banosNNA_Mujer_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(22);"  maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Baños NNA mixtos</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_035_banosNNA_mixto_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_035_banosNNA_mixto_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(23);"  maxlength="4"/></td>
                            </tr> 

                            <tr style="display:none;">
                                <td class="etiqCampo3">Duchas para NNA</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_037_duchasNNA_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                       </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_038_duchasNNA_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(18);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            </tr> 
                            <tr> 
                                <td class="etiqCampo3">Duchas para NNA en Funcionamiento</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_037_duchasNNA_funcionamiento_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_037_duchasNNA_funcionamiento_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(24);" onblur="ValidaSumaDependecniasDuchaNNAFunc();"  maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Duchas para  NNA de acuerdo a Normativa</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_037_duchasNNA_normativa_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_037_duchasNNA_normativa_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(25);"  maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Duchas para NNA de hombres</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_037_duchasNNA_hombres_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                       </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <input id="Infraest_037_duchasNNA_hombres_cant" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(26);"  maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Duchas para NNA de mujeres</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_037_duchasNNA_mujeres_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        
                                    </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mujeres_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(27);"  maxlength="4"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Duchas para NNA mixtas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_037_duchasNNA_mixtos_existe" disabled="disabled" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mixtos_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(28);"  maxlength="4"/></td>
                            </tr> 

                            <tr>
                                <td class="etiqCampo3">Ambientación Acorde a la Población</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_039_ambientacionAcorde_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Vestuario adecuado de acuerdo a estación</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_040_vestuarioAdecuado_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Vestuario personalizado para el NNA</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_040_vestuarioPersonalizado_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Útiles de Aseo Personal para los NNA</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_041_utilesAseoPersonalNNA_existe" class="form-control textCampoSel1 dllSiNo">
                                       </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Agua Caliente</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_042_aguaCaliente_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr style="display:none;">
                                <td class="etiqCampo3">Estado Calefón y Llaves de Gas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_043_estadoCalefonLlavesGas_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>

                            <tr>
                                <td class="etiqCampo3">Cumple Normativa Calefón</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_043_CumpleNormaCalefon" class="form-control textCampoSel1 dllSiNo" onchange="EvaluaCumpleNormaCalefonLlaveGas();">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Cumple Normativa llave de gas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_043_CumpleNormaLlaveGas" class="form-control textCampoSel1 dllSiNo" onchange="EvaluaCumpleNormaCalefonLlaveGas();">
                                       </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>

                            <tr>
                                <td class="etiqCampo3">Sistema de calefacción (Especificar en Observación)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_044_sistemaCalefaccion_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Ventilación adecuada del inmueble</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_045_ventilacionAdecuada_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Acceso para personas con situación de Discapacidad</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_046_AccesoDiscapacitados_existe" class="form-control textCampoSel1 dllSiNo">
                                       </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Instalaciones Habilitadas para Discapacitados (Baños, ramplas, etc.)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;">
                                    <select id="Infraest_047_InstalacionesHabilitadasDiscapacitados_existe" class="form-control textCampoSel1 dllSiNo">
                                        </select></td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            </tr>
                            <tr>
                                <td colspan="3" class="etiqCampo3">Observaciones</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="Infraest_049_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;" onkeyup="return ContadorCaracter(this,'labelCaracteres_ObsInfra');" maxlength="4000"></textarea>
                                    <span id="labelCaracteres_ObsInfra" class="lblrestoIngreso"></span><br />
                                    <span class="lblrestoIngreso" style="color:blue;">* Recuerde incorporar en las observaciones la especificación correspondiente si declara existencia de Sistema de Calefacción.</span>
                                </td>
                            </tr>
                            <tr><td colspan="3" style="text-align:center;"><button id="btn_antecedentesInfraestructura" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Recursos Materiales, Infraestructura y Equipamiento" onclick="GrabarAntecedentes(4);">Grabar Antecedente de Recursos Materiales, Infraestructura y Equipamiento</button>&nbsp;<button id="btn_FichaGenera_04" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>
                        </table>
            </div>         

             <div role="tabpanel" class="tab-pane fade in" id="seguridad">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Seguridad</span></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3" style="width:100%">Plan de Emergencia</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_001_planEmergencia_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Simulacro Emergencia (Último Cuatrimestre)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_002_simulacroEmergencia_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Plan de Emergencia ¿Visado por personal calificado?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_003_planEmergenciaVisado_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Extintores</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_004_extintores_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Señalética</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_005_senaletica_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Vías de Evacuación</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_006_viaEvacuacion_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr style="display:none;">
                                <td class="etiqCampo3">Capacitación Personal en Emergencia y Primeros Auxilios</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonal_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Capacitación Personal en Emergencia</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonalemergencia" class="form-control textCampoSel1" onchange="EvaluaCapacitacionPersonalEmergenciaPrimerAux();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Capacitación Personal en Primeros Auxilios</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonalprimerosAux" class="form-control textCampoSel1" onchange="EvaluaCapacitacionPersonalEmergenciaPrimerAux();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            
                            <tr style="display:none;">
                                <td class="etiqCampo3">Sanitización, Desratización y Fumigación</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Sanitización</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Desratización</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_desratizacion" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Fumigación</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_fumigacion" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>

                            <tr>
                                <td class="etiqCampo3">Sistema Eléctrico</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_009_sistemaElectrico_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Zona de Seguridad Demarcada</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_010_zonaSeguridad_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="etiqCampo3">Observaciones</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="seguridad_011_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;" onkeyup="return ContadorCaracter(this,'labelCaracteres_ObsSeguridad');" maxlength="4000"></textarea>
                                    <span id="labelCaracteres_ObsSeguridad" class="lblrestoIngreso"></span>
                                </td>
                            </tr>
                            <tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSeguridad" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Seguridad" onclick="GrabarAntecedentes(5);">Grabar Antecedente de Seguridad</button>&nbsp;<button id="btn_FichaGenera_05" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>
                        </table>
            </div>   

             <div role="tabpanel" class="tab-pane fade in" id="salud">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Salud</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="etiqCampo2">ESPECIFICAR</td>
                            </tr>                        
                            <tr>
                                <td class="etiqCampo3">N° de NNA Inscritos en CESFAM</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_001_NNA_inscritosCESFAM" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental con Diagnóstico</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_002_NNA_problematicaSaludMental" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental sin Diagnóstico</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_003_NNA_problematicaSaludMentalsinDiag" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA Inscritos con Enfermedad Crónica</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_004_NNA_inscritosEnferCronica" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA a la espera de Trasplante</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_015_NNA_EsperaTransplantes" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA Trasplantados</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_016_NNA_Transplantados" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>

                            <tr>
                                <td class="etiqCampo3">N° de NNA Inscritos con Situación de Discapacidad</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_005_NNA_Discapacidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA recibiendo tratamiento farmacológico</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_006_NNA_inscritosProblemSaludRecibeMedica" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA con Problemática de Salud en Tratamiento</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_007_NNA_problematicaSaludenTratamiento" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA con Consumo sólo de Drogas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_008_NNA_consumoDrogas" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA con consumo sólo de Alcohol</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_008_NNA_consumoAlcohol" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA con consumo de Alcohol y Drogas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_017_consumoDrogasyAlcohol" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                                                        
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con espacio adecuado para el resguardo de medicamentos?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_resguardoMedicamentos" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>                    
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con inventario de medicamentos?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_inventarioMedicamentos" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con Registro de Medicamentos Administrados a los NNA?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_registroMedicamentoAdmin_a_NNA" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con Protocolo para la Administración de Medicamentos a los NNA?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_010_sel_protocoloAdmin_Medica_a_NNA"class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con control al día de Niño Sano?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_nino_sano"class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con control al día de Adolescente Sano?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_adolescente_sano"class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>

                            <tr>
                                <td class="etiqCampo3">¿Existe Control Anual Ginecológico en los Adolescentes?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_ginecologicoAdolescente" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">¿Existen adolescentes que se hayan negado a Control Ginecológico?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_012_sel_adolescenteNiegaControlGineco" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Adolescentes Embarazadas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_013_sel_adolescenteEmbarazada" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid; white-space: nowrap;"><select id="salud_014_sel_adolescenteEmbarazadaControlalDia" disabled="disabled" class="textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0" selected="selected">NO</option></select> - CU&Aacute;NTAS:&nbsp;<input id="salud_015_adolescenteEmbarazadaControlalDia_cantidad" type="text" class="textCampo3" maxlength="3" placeholder="" onkeyup="EvaluaCuantasAdolescentesControlAldia(this);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="etiqCampo3">Observaciones</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="salud_016_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;" maxlength="4000" onkeyup="return ContadorCaracter(this,'labelCaracteres_ObsSalud');"></textarea>
                                    <span id="labelCaracteres_ObsSalud" class="lblrestoIngreso"></span>
                                </td>
                            </tr>
                            <tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSalud" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Salud" onclick="GrabarAntecedentes(6);">Grabar Antecedente de Salud</button>&nbsp;<button id="btn_FichaGenera_06" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>
                        </table>
            </div>           

             <div role="tabpanel" class="tab-pane fade in" id="educacion">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Educación</span></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="etiqCampo2">CANTIDAD</td>
                            </tr>      
                            <tr>
                                <td class="etiqCampo3">N° de NNA matriculados</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_001_NNA_matriculados" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>                                              
                            <tr>
                                <td class="etiqCampo3">N° de NNA que si asisten a Establecimiento Educacional</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_001_NNA_asisten_colegio_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA que no asisten a Establecimiento Educacional</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_002_NNA_NO_asisten_colegio_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="RevisaValorInasistenciaaClases(this);"/></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Motivo de inasistencia de NNA a Establecimiento Educacional</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_002_NNA_NO_asisten_colegio_cantidad_motivo" class="form-control textCampoSel1" onchange="MotivoInasistencia(this);" disabled="disabled"><option value="-1"></option><option value="1">Salud</option><option value="2">Rechazo</option><option value="3">Suspensión</option><option value="4">Otro</option></select></td>
                            </tr>

                            <tr>
                                <td class="etiqCampo3">N° de NNA con Retraso o Rezago Escolar</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_003_NNA_retrasoEscolar_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA con Matrícula Cancelada</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_004_NNA_matriculaCancelada_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA que Asiste a Educación Diferencial</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_005_NNA_asisten_colegioDiferencial_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA que Asiste a Educación de Nivelación de Estudios</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_006_NNA_asisten_colegioNivelacion_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de NNA inscritos para exámenes libres</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_006_NNA_examenesLibres_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Espacios Destinados a Estudios y Desarrolo de Tareas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_007_sel_EspacioEstudio_y_Tareas_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Material Bibliográfico</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_008_sel_materialBibliiografico_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Computadores</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_009_sel_computadores_existe"class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Acceso Controlado a Internet</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_010_sel_AccesoControladoInternet_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>                                                                                              
                            <tr>
                                <td colspan="2" class="etiqCampo3">Observaciones</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="educacion_011_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;" onkeyup ="return ContadorCaracter(this,'labelCaracteres_ObsEducacion');" maxlength="4000"></textarea>
                                    <span id="labelCaracteres_ObsEducacion" class="lblrestoIngreso"></span>
                                </td>
                            </tr>
                            <tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesEducacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Educación" onclick="GrabarAntecedentes(7);">Grabar Antecedente de Educación</button>&nbsp;<button id="btn_FichaGenera_07" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>
                        </table>
            </div>   

             <div role="tabpanel" class="tab-pane fade in" id="alimentacion">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Alimentación</span></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">Cuenta con Registro de Horarios de Entrega de Alimentos</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_001_sel_registroHonorarioEntregaAlimento_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con minuta alimentaria?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">Existencia de Menús Especiales</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_003_sel_menuEspeciales_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">¿Cuenta con minuta alimentaria aprobada?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">Existen Certificados Sanitarios de las Manipuladoras</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_005_sel_certifSanitarioManipuladores_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr style="display:none;">
                                <td class="etiqCampo3">Almacenamiento de Alimentos y Estado de Conservación</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">Almacenamiento de Alimentos</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_AlmacenaAlimento_existe" class="form-control textCampoSel1" onchange="EvaluaAlmacenaAlimentoEstadoConserva();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Estado de Conservación</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_EstadoConserva_existe" class="form-control textCampoSel1" onchange="EvaluaAlmacenaAlimentoEstadoConserva();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 

                            <tr>
                                <td></td>
                                <td class="etiqCampo2">ESPECIFIQUE</td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">N° de Comidas Entregadas de Lunes a Viernes</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_007_comidas_lunes_a_viernes_cantidad" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">N° de Comidas Entregadas Sábado, Domingo y Festivos</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_008_comidas_sabado_domingo_fest_cantidad" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            </tr>
                            <tr>
                                <td colspan="2" class="etiqCampo3">Observaciones</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="alimentacion_009_observacion" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;" onkeyup="return ContadorCaracter(this,'labelCaracteres_ObsAlimentacion');" maxlength="4000"></textarea>
                                    <span id="labelCaracteres_ObsAlimentacion" class="lblrestoIngreso"></span>
                                </td>
                            </tr>
                            <tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesAlimentacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Alimentación" onclick="GrabarAntecedentes(8);">Grabar Antecedente de Alimentación</button>&nbsp;<button id="btn_FichaGenera_08" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>
                        </table>
            </div>   

             <div role="tabpanel" class="tab-pane fade in" id="gestion_residencia">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes de Gestión de Residencia</span></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3" style="width:100%;">Cuenta con catastro de redes</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_001_sel_catastroRedes_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr style="display:none;">
                                <td class="etiqCampo3">Existe Protocolo y/o Registro de Visitas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_protocoloVisitas_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo de Visitas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_protoVisitas_existe" class="form-control textCampoSel1" onchange="EvaluaProtocoloyRegistroVisitas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">Existe Registro de Visitas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_regisVisitas_existe" class="form-control textCampoSel1" onchange="EvaluaProtocoloyRegistroVisitas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            
                            <tr>
                                <td class="etiqCampo3">Cuenta con Protocolo de Acogida del NNA</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_003_sel_protocoloAcogida_NNA_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">Existen Actividades de Autocuidado para el Equipo</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_004_sel_activi_autocuidadoEquipo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  
                            <tr>
                                <td class="etiqCampo3">Cuenta con Protocolo de Actuación de Intervención en Crisis</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_005_sel_protocoloActua_intervencionCrisis_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>  

                            <tr>
                                <td class="etiqCampo3">Existe Protocolo de Información para NNA sobre la Normativa de Residencia</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo de Convivencia</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_007_sel_protocoloConvivencia_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo de Presentación de Reclamos y Quejas</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_008_sel_protocolo_PresentaReclamo_existe"class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo y Espacios para la escucha de los NNA</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Vinculación entre Residencias (para hermanos)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_010_sel_vinculacionResidencias_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Cuenta con Proceso de Formación Permanente para el personal</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_011_sel_ProcesoFormacion_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo de Apadrinamiento</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_012_sel_protocoloApadrinamiento_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo de Derivación o Traslado a Residencia</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_013_sel_protocoloTrasladoResid_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo de para el Egreso del NNA (Sistema Residencial)</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_014_sel_protocoloEgreso_NNA_existe"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Existe Protocolo para Derivación a Red Salud</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_015_sel_protocolo_derivacion_RedSalud_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr style="display:none;">
                                <td class="etiqCampo3">Actividades de Habilitación Laboral y Preparación para la Vida Independiente</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_habilitacionLaboral_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            <tr>
                                <td class="etiqCampo3">¿Existen Actividades de Habilitación Laboral?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_habilitaLaboral" class="form-control textCampoSel1" onchange="EvaluaActividadHabilitaLaboralyVidaIndependiente();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">¿Existe proceso para la vida independiente?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_vidaInpendiente" class="form-control textCampoSel1" onchange="EvaluaActividadHabilitaLaboralyVidaIndependiente();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 

                            <tr>
                                <td colspan="2" class="etiqCampo3">Observaciones</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_017_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;" onkeyup="return ContadorCaracter(this,'labelCaracteres_ObsGestionRes');" maxlength="4000"></textarea>
                                    <span id="labelCaracteres_ObsGestionRes" class="lblrestoIngreso"></span>
                                </td>
                            </tr>
                            <!--
                            <tr>
                                <td colspan="2" class="etiqCampo3">Observación Población de NNA que se encontraba  a la hora de la visita</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_018_observaciones_pobla_NNA_visita" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;"></textarea></td>
                            </tr>    
                        
                            <tr>
                                <td class="etiqCampo3">¿Algún NNA manifestó voluntad de conversar con juez?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr> 
                            <tr>
                                <td class="etiqCampo3">Se entrevistó a NNA de forma reservada?</td>
                                <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_020_sel_entrevisto_NNA_reservada_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            </tr>
                            -->
                        </table>
                        <!--
                        <table id="tbl_detalle_NNA_entrevistados" class="table">
                            <tr>
                                <td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de NNA Entrevistados</span></td>
                        
                            </tr> 
                            <tr>
                                <td class="etiqCampo2" style="width: 20px;">N°</td>
                                <td class="etiqCampo2" style="width: 50px;">RUT</td>
                                <td class="etiqCampo2">NNA</td>
                                <td class="etiqCampo2">RIT</td>
                                <td class="etiqCampo2">TRIBUNAL</td>
                            </tr>  
                        </table>
                        <div style="text-align:center;"><button class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para agregar detalle de NNA en abandono" onclick="AgregarNNA_en_Residencia(3);">Agregar</button></div><br />
                        -->
                        <div style="text-align:center;"><button id="btn_antecedentesGestionResidencia" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Gestión de Residencia" onclick="GrabarAntecedentes(9);">Grabar Antecedente de Gestión de Residencia</button>&nbsp;<button id="btn_FichaGenera_09" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></div><br />
            </div>   
        </div>

        </div>
        <div id="frmMsg" style="display:none;">
            <h4 class="page-header2">AVISO</h4>
            <a href="#" class="list-group-item">La ficha residencial aún no está habilitada para su región. Desde ya se agradece su comprensión.<br /><br /><div style="text-align:right;">SENAINFO</div></a>
        </div>
        </div>
    </div>
    <br /><br />
    <div id="divconfig" style="display:none;" onclick="InicializaKey();"></div>
    <script>
        function importarScript(nombre) {
            var s = document.createElement("script");
            s.src = nombre;
            document.querySelector("head").appendChild(s);
        }
        $(document).ready(function () {
            var d = new Date();

            importarScript("../Scripts/ficha/antecedentes_generales.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_poblacion_capacidad.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_dotacion_personal.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_infraestructura.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_seguridad.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_salud.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_educacion.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_alimentacion.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_alimentacion.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_gestion_residencia.js?" + d.getTime());
            importarScript("../Scripts/ficha/residencia1.js?" + d.getTime());
        });

        /*
        NOTA: cuando se integra en SENAINFO la ruta de las librería javascript deben comenzar con:
        
        scripts/ficha/
        
        Y no como se utilizan en el ambiente de desarrolo local => ../Scripts/ficha/:
        
        //DESARROLLO
            importarScript("../Scripts/ficha/antecedentes_generales.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_poblacion_capacidad.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_dotacion_personal.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_infraestructura.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_seguridad.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_salud.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_educacion.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_alimentacion.js?" + d.getTime());
            importarScript("../Scripts/ficha/antecedentes_gestion_residencia.js?" + d.getTime());
            importarScript("../Scripts/ficha/residencia1.js?" + d.getTime());
        
        //PRODUCCION
            importarScript("scripts/ficha/antecedentes_generales.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_poblacion_capacidad.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_dotacion_personal.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_infraestructura.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_seguridad.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_salud.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_educacion.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_alimentacion.js?" + d.getTime());
            importarScript("scripts/ficha/antecedentes_gestion_residencia.js?" + d.getTime());
            importarScript("scripts/ficha/residencia1.js?" + d.getTime());
        */
    </script>
</body>
</html>
