<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FichaResidencialReportes.aspx.cs" Inherits="SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial.FichaResidencialReportes" %>

<%-- DESCOMENTAR ESTA DOS LINEAS PARA SU VERSIÓN EN SENAINFO--%>
    <%--
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajax" %>
<%@ Register Src="~/menu_colgante.ascx" TagPrefix="uc2" TagName="menu_colgante" %>
    
        --%>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>FICHA RESIDENCIAL  :: Senainfo :: Servicio Nacional de Menores</title>

        <!-- DESARROLLO -->
<%--        <script src="../Scripts/jquery-3.2.1.min.js"></script>

        <link href="../Content/bootstrap.min.css" rel="stylesheet" />
        <link href="../Content/theme.css" rel="stylesheet" />
        <link href="../Scripts/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
        <link href="../Content/select2-bootstrap.min.css" rel="stylesheet" />

        <link href="../Content/ficha_residencia.css" rel="stylesheet" />

        <link href="../Content/timelineficha.css" rel="stylesheet" />
        <link href="../Scripts/jquery.fileupload.css" rel="stylesheet" />
        <link href="../Content/font-awesome.min.css" rel="stylesheet" />

            

        <script src="../Scripts/bootstrap.min.js"></script>
        <script src="../Scripts/jquery.floatThead.js"></script>
        <script src="../Scripts/jquery.dataTables.js"></script>
        <script src="../Scripts/dataTables.bootstrap.js"></script>

        <script src="../Scripts/select2.min.js"></script>

        <script src="../Scripts/sweetalert2/sweetalert2.all.min.js"></script>
        <script src="../Scripts/ficha/progressbar.min.js"></script>
        <script src="../Scripts/jquery.ui.widget.js"></script>
        <script src="../Scripts/jquery.iframe-transport.js"></script>

    <link rel="stylesheet" href="../Scripts/datepicker/datepicker.css" />
        <script src="../Scripts/datepicker/datepicker.js"></script>
        <script src="../Scripts/datepicker/datepicker.es-ES.js"></script>--%>

        <%--PRODUCCIÓN--%>
       
        <script src="../js/jquery-3.2.1.min.js"></script>

        <link href="../css/bootstrap.min.css" rel="stylesheet" />
        <link href="../css/theme.css" rel="stylesheet" />
        <link href="scripts/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
        <link href="../css/select2-bootstrap.min.css" rel="stylesheet" />
        <link href="css/ficha_residencia.css" rel="stylesheet" />
        <link href="css/timelineficha.css" rel="stylesheet" />
        <link href="scripts/jquery.fileupload.css" rel="stylesheet" />
        <link href="../css/font-awesome.min.css" rel="stylesheet" />

        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/jquery.floatThead.js"></script>
        <script src="../js/jquery.dataTables.js"></script>
        <script src="../js/dataTables.bootstrap.js"></script>

        <script src="../js/select2.min.js"></script>

        <script src="scripts/sweetalert2/sweetalert2.all.min.js"></script>

        <script src="scripts/ficha/progressbar.min.js"></script>
        <script src="scripts/jquery.ui.widget.js"></script>
        <script src="scripts/jquery.iframe-transport.js"></script>       
          
         <link rel="stylesheet" href="../Scripts/datepicker/datepicker.css" />
        <script src="Scripts/datepicker/datepicker.js"></script>
        <script src="Scripts/datepicker/datepicker.es-ES.js"></script>
    </head>
<body>
<div class="container">
    <form id="form2" runat="server">
        <%--DESCOMENTAR SIGUIENTE LINEA PARA SU VERSIÓN EN SENAINFO --%>
        <%--<uc2:menu_colgante runat="server" ID="menu_colgante" />--%>
        <asp:HiddenField ID="idusuario_conect" runat="server" />
        <asp:HiddenField ID="tokensUsr" runat="server" />
        
        <input type="hidden" id ="hfCodProyecto" name="CodProyecto" />
        <input type="hidden" id ="hfCodReporte" name="CodReporte" />
    </form>

    <h3 class="titsec" onclick="InicializaKey();">FICHA RESIDENCIAL - REPORTES<span id="glsTimpoPromedio"></span></h3>
    <div id="divListadoFichasXResponder" class="well">
        <h4 class="subtitulo-form">Filtros de Búsqueda Reportería</h4>
        <span style="color:#808080;font-size:10px;"><i>Mediante estas opciones puedes acceder a la reportería de Ficha Residencial</i></span>
        <hr />
        
        <div id="panelOpciones" role="tabpanel" aria-labelledby="headingOne" >
            <div class="row">
                <div class="col-md-9">
                    <table class="table table-borderless table-condensed table-col-fix">
                        <tbody>
                        <tr>
                            <th>
                                <label for="">Institución:</label>
                            </th>
                            <td>
                                    <select name="cmbInstitucion" id="cmbInstitucion" onchange="CargaProyectosInstitucion(this.value);"  class="form-control textCampoSel2" style="width:100%;">
                                        <option value="0"> Seleccionar </option>
                                    </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="">Proyecto:</label>
                            </th>
                            <td>
                                    <select name="cmbProyecto" id="cmbProyecto" onchange=""  class="form-control textCampoSel2" style="width:100%;" disabled="disabled" >
                                        <option value="0"> Seleccionar</option>
                                    </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="">Reporte:</label>
                            </th>
                            <td>
                                <select name="cmbReporte" id="cmbReporte" onchange="" class="form-control textCampoSel2" style="width:100%;" >
                                    <option value="0"> Seleccionar</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="">Periodo:</label>
                            </th>
                             <td style="border-bottom: 1px #B2B2B2 solid;">
                                <span class="form-control" style="width:100px;cursor:pointer;float:left;" 
                                    title="Para modificar has clic y selecciona una nueva fecha" id="fechaaplicacionRegistro"> </span>
                            </td>
                        </tr>
                            <!-- Spring 4 - 20191115 - gcastro -->
                             <script>
                            $(document).ready(function () {
                                var d = new Date();
                                var dia = d.getDate();
                                var mes = d.getMonth() + 1;
                                if (dia < 10) dia = "0" + dia;
                                if (mes < 10) mes = "0" + mes;
                                var diaActual = dia + '/' + mes + '/' + d.getFullYear();
                                var tokensUsr = document.getElementById("tokensUsr").value;
                               
                              //  if (tokensUsr.indexOf("D5CF4DE5-5EFA-4EDD-AD65-5BED3AD9482A") != -1) {
                                    $('#fechaaplicacionRegistro').datepicker({
                                        autoHide: true,
                                        zIndex: 2048,
                                        language: 'es-ES',
                                        format: 'dd/mm/yyyy',
                                        endDate: diaActual
                                    });
                             //   }
                                $('#fechaaplicacionRegistro').html(diaActual);                       


                            });

                        </script>   
                        <tr>
                            <td></td>
                            <td>
                                <div>
                                    <button id="btnGenerarReporte" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" ><span class="glyphicon glyphicon-zoom-in"></span>&nbsp;Generar</button>
                                    <button id="btnLimpiar" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" ><span class="	glyphicon glyphicon-trash"></span>&nbsp;Limpiar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
                <input name="CurrentPage" id="CurrentPage" type="hidden" />

                <div class="col-md-3">
                    <div class="panel-info panel-primary-info">
                        <div class="panel-heading">
                            Información
                        </div>
                        <div class="panel-footer">
                            <span id="lbl001F2" class="subtitulo-form-info">El Tiempo de Carga de la información dependerá de la cantidad de registros.</span>
                        </div>
                    </div>

                    <p></p>
                    <div class="caja-despliegue">
                        <div>
                                            
                        </div>
                        <div>
                            <a id="lnk001" href="#" style="display:inline-block;width:1px;"></a>
                        </div>
                        <div>
                                            
                        </div>
                        <div>
                                            
                        </div>
                    </div>
                </div>
            </div>
            

        </div>

    </div>                                       
   

</div>
<div id="divconfig" style="display:none;" onclick="InicializaKey();"></div>


<script>
    function importarScript(nombre) {
        var s = document.createElement("script");
        s.src = nombre;
        document.querySelector("head").appendChild(s);
    }
    $(document).ready(function () {
        var d = new Date();
        importarScript("../Scripts/ficha/reportes.js?" + d.getTime());

        //importarScript("scripts/ficha/reportes.js?" + d.getTime());   
    });
    /*
    NOTA: cuando se integra en SENAINFO la ruta de las librería javascript deben comenzar con:
    
    scripts/ficha/
    
    Y no como se utilizan en el ambiente de desarrolo local => ../Scripts/ficha/:
    
    //DESARROLLO      
        importarScript("../Scripts/ficha/reportes.js?" + d.getTime());
           
    //PRODUCCION        
        importarScript("../Scripts/ficha/reportes.js?" + d.getTime());        
    */
</script>

     
</body>
</html>