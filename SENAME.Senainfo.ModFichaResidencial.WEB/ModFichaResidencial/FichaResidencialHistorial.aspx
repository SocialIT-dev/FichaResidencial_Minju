<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FichaResidencialHistorial.aspx.cs" Inherits="SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial.FichaResidencialHistorial" %>
<%-- DESCOMENTAR ESTA DOS LINEAS PARA SU VERSIÓN EN SENAINFO
    
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
        <script src="../Scripts/jquery-3.2.1.min.js"></script>

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
        <script src="../Scripts/jquery.fileupload.js"></script>

        <script src="../Scripts/highcharts/highcharts.js"></script>
        <script src="../Scripts/highcharts/modules/data.js"></script>
        <script src="../Scripts/highcharts/modules/series-label.js"></script>
        <script src="../Scripts/highcharts/modules/exporting.js"></script>
        <script src="../Scripts/highcharts/modules/export-data.js"></script>

        <!-- PRODUCCIÓN
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
        <script src="scripts/jquery.fileupload.js"></script>            

        <script src="scripts/highcharts/highcharts.js"></script>
        <script src="scripts/highcharts/modules/data.js"></script>
        <script src="scripts/highcharts/modules/series-label.js"></script>
        <script src="scripts/highcharts/modules/exporting.js"></script>
        <script src="scripts/highcharts/modules/export-data.js"></script>
        -->
    </head>
<body>
<div class="container">
    <form id="form2" runat="server">
        <%--DESCOMENTAR SIGUIENTE LINEA PARA SU VERSIÓN EN SENAINFO --%>
        <%--<uc2:menu_colgante runat="server" ID="menu_colgante" />--%>
        <asp:HiddenField ID="idusuario_conect_obs" runat="server" />
        <asp:HiddenField ID="tokensUsr_obs" runat="server" />
        <asp:HiddenField ID="iisadjuntos" runat="server" />
        <asp:HiddenField ID="tipoArchivoPermitido" runat="server" />
        <asp:HiddenField ID="maximoTamanoCarpeta" runat="server" />
         
        <input type="hidden" id="IdRespuesta" value="0"/>
        <input type="hidden" id="nombreusuariogls" value=""/>
        <input type="hidden" id="codfichahijoTramites" value=""/>

        <input type="hidden" id="rutarepositorio" value=""/>

    </form>

    <h3 class="titsec" onclick="InicializaKey();">FICHA RESIDENCIAL - HISTORIAL<span id="glsTimpoPromedio"></span></h3>
    <div id="divListadoFichasXResponder" class="well">
        <h4 class="subtitulo-form">Filtros de Búsqueda Fichas Residenciales</h4>
        <span style="color:#808080;font-size:10px;"><i>Mediante esta búsqueda se puede acceder al detalle de cada ficha residencial</i></span>
        <hr />

        <a id="collapse" data-toggle="collapse" data-parent="#accordion" href="#collapse_Form" aria-expanded="true" aria-controls="collapse_Form">
            <span id="lbl_acordeon">Ocultar Detalles de la Búsqueda</span>
            
            <span id="icon-collapse" class="glyphicon glyphicon-triangle-top"></span>         
        </a>

        <div id="collapse_Form" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse ">
            <div class="row">
                <div class="col-md-9">
                    <table class="table table-borderless table-condensed table-col-fix">
                        <tbody>
                        <tr>
                            <th>
                                <label for="">Institución:</label>
                            </th>
                            <td>
                                <!--<div class="input-group">-->
                                    <select name="cmbInstitucion" id="cmbInstitucion" onchange="CargaProyectosInstitucion(this.value);"  class="form-control textCampoSel2" style="width:100%;">
                                        <option value="0"> Seleccionar </option>
                                    </select>
                                    <!--<a onclick="return MostrarModalInstitucion();" id="imb_lupa_institucion" class="input-group-addon btn btn-info btn-sm" href="javascript:"><span class="glyphicon glyphicon-question-sign"></span></a>-->
                                <!--</div>-->

                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="">Proyecto:</label>
                            </th>
                            <td>
                                <!--<div class="input-group">-->
                                    <select name="cmbProyecto" id="cmbProyecto" onchange=""  class="form-control textCampoSel2" style="width:100%;" disabled="disabled">
                                        <option value="0"> Seleccionar</option>
                                    </select>
                                    <!--<a onclick="return MostrarModalProyecto();" id="imb_lupaproyecto" class="input-group-addon btn btn-info btn-sm" href="javascript:"><span class="glyphicon glyphicon-question-sign"></span></a>-->
                                <!--</div>-->
                            </td>

                        </tr>
                        <tr>
                            <th>
                                <label for="">Estatus:</label>
                            </th>
                            <td>
                                <div class="input-group"> 
                                    <span class="button-checkbox">
                                        <button type="button" class="btn" data-color="success" onclick="ActualizaEstadoVarEstatus(1);">PENDIENTE</button>
                                        <input id="chkPendiente" type="checkbox" class="hidden" />
                                    </span> 
                                    <span class="button-checkbox">
                                        <button type="button" class="btn" data-color="success" onclick="ActualizaEstadoVarEstatus(2);">EN PROCESO</button>
                                        <input id="chkEnProceso" type="checkbox" class="hidden" />
                                    </span>
                                    <span class="button-checkbox">
                                        <button type="button" class="btn" data-color="success" onclick="ActualizaEstadoVarEstatus(3);">FINALIZADO</button>
                                        <input id="chkFinalizado" type="checkbox" class="hidden" />
                                    </span>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                                
                            </td>
                            <td>
                                                
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div>
                                    <!--<a onclick="BuscarFichasResidencialesOBS(1, 'BSQGRAL');" id="btnbuscar" class="btn btn-danger btn-sm fixed-width-button pull-right"  href="javascript:">

                                        <span class="glyphicon glyphicon-zoom-in"></span>&nbsp;Buscar
                                    </a>
                                    -->
                                    <button id="Button1" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" onclick="BuscarFichasResidencialesOBS(1, 'BSQGRAL');"><span class="glyphicon glyphicon-zoom-in"></span>&nbsp;Buscar</button>
                                    <!--
                                    <a onclick="limpiarDocumentacion(); return true;" id="btnlimpiar" class="btn btn-info btn-sm fixed-width-button pull-right" href="javascript:">
                                        <span class="glyphicon glyphicon-remove-sign"></span>&nbsp;Limpiar
                                    </a>
                                    -->
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

            <div id="listadoFichaResOBS_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">

                <div id="divMensajeBusquedaVacia" class="well" style="display:none;text-align:center;">
                    <h4 class="subtitulo-form">No existen registros para el filtro de búsqueda aplicado.</h4>
                </div>
                <div class="row" id="divlistCanFichasConObsLbl" style="display:none;">   
                    <h4> <span id="lbl_cantidadFichaResOBS" class="subtitulo-form" style="padding-left:15px;">Fichas Residenciales con Observaciones :</span></h4>
                </div>
                
                <div class="row" id="divlistadoFichasConObsCtrl" style="display:none;">      
                    <div class="col-sm-6">
                        <div class="dataTables_length">
                            <label>Mostrando 
                                <select id="cantListaFichaResidencial" name="cantListaFichaResidencial" aria-controls="tbl_listadoFichaResOBS" class="form-control input-sm" >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                </select> registros por página
                            </label>
                        </div>
                    </div> 
                </div>
                
                <div class="row" id="divlistadoFichasConObsTBL" style="display:none;">
                    <div id="divlistadoFichasConObs" class="col-sm-12">
                        <!---->
                        <table class="table table-bordered table-hover dataTable no-footer"   id="tbl_listadoFichaResOBS" style="width: 100%; border-collapse: collapse;" role="grid"  border="1">
		                    <thead>
			                    <tr class="Rut titulo-tabla" role="row">
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 43px;">Instituci&oacute;n</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 43px;">Proyecto</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 59px;">Folio Ficha</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 68px;">Fecha Registro Ficha</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 68px;">Fecha Ingreso Obs. PJUD</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 68px;">Corte Apelaci&oacute;n / Tribunal</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 68px;">Juez</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 64px;">Estado Gesti&oacute;n</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 62px;">D&iacute;as Tr&aacute;mite</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 62px;"></th>
			                    </tr>
		                    </thead>
                            <tbody></tbody>
	                    </table>
                        <div class="dataTables_paginate paging_simple_numbers" id="paginadorFichaResOBS" style="display:none;">
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>                                       
    <button id="btnVolverListado" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:none;" onclick="VolverListado();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
    <table id="tblDatosGBL" style="display:none;">
        <tr><td><span class="datocabSetObs">INSTITUCIÓN</span></td><td>:&nbsp;<b><span  class="datocabSetObs" id="spanInstitucionGBL"></span></b></td></tr>
        <tr><td><span class="datocabSetObs">PROYECTO</span></td><td>:&nbsp;<b><span  class="datocabSetObs" id="spanProyectoGBL"></span></b></td></tr>
        <tr><td><span class="datocabSetObs">PERÍODO</span></td><td>:&nbsp;<b><span  class="datocabSetObs" id="spanPeriodoGBL"></span></b></td></tr>
        <tr><td colspan="2"><br/><br/></td></tr>
    </table>

    <div id="divFuncionesEstadisticasFicha" class="well">
        <h4 class="subtitulo-form">Análisis Histórico de Fichas Residenciales</h4>
        <span style="color:#808080;font-size:10px;"><i></i></span>
        <hr />

        <button class="btn btn-primary btn-lg" style="vertical-align:middle;text-align:center;width:245px;margin-top:5px;" onclick="VerTiemposPromedio();"><i class="fa fa-clock-o" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="font-size:16px;">&nbsp;TIEMPOS PROMEDIO<br />POR ETAPA</span></button>
        <button class="btn btn-primary btn-lg" style="vertical-align:middle;text-align:center;width:245px;margin-top:5px;" onclick="VerSelectoresSeccion();"><i class="fa fa-line-chart" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="font-size:16px;">&nbsp;EVOLUCIÓN DE<br />INDICADORES</span></button>
        <button class="btn btn-primary btn-lg" style="vertical-align:middle;text-align:center;width:245px;margin-top:5px;" onclick="VerComparacionFichas();"><i class="fa fa-clone" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="font-size:16px;">&nbsp;COMPARACIÓN<br />ENTRE FICHAS</span></button>
    </div>

<div id="frmwork2" style="display:none;">
<button id="btnVolverListado2" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:none;" onclick="PrincipalHistorial();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<button id="btnVolverListado4" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:none;" onclick="VolverDetalleResidenciasxEtapa();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<div class="container well">
    <div id="divglosadetalle"></div>
    <ul class="timeline">
        <li style="cursor:pointer;" onclick="VerDetalleTiempoPromedio('T0');" title="Ir al detalle de la etapa">
          <div id="divT0_point" class="timeline-badge success"><i id="chkT0_01" class="glyphicon glyphicon-check"></i><i id="chkT0_02" class="glyphicon glyphicon-unchecked" style="display:none;"  ></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title" style="font-size:20px;color:#0168B3;">REGISTRO DE FICHA RESIDENCIAL</h4>
              <p style="font-size:32px;vertical-align:middle;cursor:pointer;"><i class="glyphicon glyphicon-time"></i><span  id="T0"></span></p>
            </div>
            <div class="timeline-body">
              <p>Tiempo desde que se comienza a llenar una ficha residencial hasta que se finaliza el ingreso por parte del director o responsable de la Residencia.</p>
            </div>
          </div>
        </li>

        <li class="timeline-inverted" style="cursor:pointer;" onclick="VerDetalleTiempoPromedio('T1');" title="Ir al detalle de la etapa">
          <div id="divT1_point" class="timeline-badge success"><i id="chkT1_01" class="glyphicon glyphicon-check"></i><i id="chkT1_02" class="glyphicon glyphicon-unchecked" style="display:none;"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title" style="font-size:20px;color:#0168B3;">CONSUMO SERVICIO WEB DE FICHA RESIDENCIAL DESDE PJUD</h4>
              <p style="font-size:32px;vertical-align:middle;cursor:pointer;"><i class="glyphicon glyphicon-time"></i><span  id="T1"></span></p>
            </div>
            <div class="timeline-body">
              <p>Tiempo que el Poder Judicial demora en consumir los datos de la Ficha Residencial finalizada.<br /> 
                 Una vez finalizada la ficha, podemos calcular un tiempo por ficha finalizada y el promedio del mismo, que toma el PJUD en consumir por primera vez los datos de las fichas.</p>
            </div>
          </div>
        </li>

        <li style="cursor:pointer;" onclick="VerDetalleTiempoPromedio('T2');" title="Ir al detalle de la etapa">
          <div id="divT2_point" class="timeline-badge success"><i id="chkT2_01" class="glyphicon glyphicon-check"></i><i id="chkT2_02" class="glyphicon glyphicon-unchecked" style="display:none;"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title" style="font-size:20px;color:#0168B3;">ENVÍO DE OBSERVACIONES DESDE PJUD</h4>
              <p style="font-size:32px;vertical-align:middle;cursor:pointer;"><i class="glyphicon glyphicon-time"></i><span  id="T2"></span></p>
            </div>
            <div class="timeline-body">
              <p>Tiempo que el Poder Judicial demora en enviar las observaciones a la Ficha Residencial.<br />
                 Este se calculará desde el primer consumo que realice el PJUD de la ficha residencial finalizada, hasta la recepción (carga) en la base de SENAINFO de las observaciones correspondientes.</p>
            </div>
          </div>
        </li>

        <li class="timeline-inverted" style="cursor:pointer;" onclick="VerDetalleTiempoPromedio('T3');" title="Ir al detalle de la etapa">
          <div id="divT3_point" class="timeline-badge success"><i id="chkT3_01" class="glyphicon glyphicon-check"></i><i id="chkT3_02" class="glyphicon glyphicon-unchecked" style="display:none;"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title" style="font-size:20px;color:#0168B3;">TRAMITACIÓN DE OBSERVACIONES</h4>
              <p style="font-size:32px;vertical-align:middle;cursor:pointer;"><i class="glyphicon glyphicon-time"></i><span  id="T3"></span></p>
            </div>
            <div class="timeline-body">
              <p>Tiempo que los usuarios de SENAME demoran en dar respuesta a las observaciones de la Ficha Residencial.<br />
                 Este tiempo se calcula desde que se recepcionan las observaciones a la ficha residencial hasta que se dan por resueltas todas estas. Este tiempo, podrá detallarse en las tramitaciones efectuadas por cada una de las observaciones, siendo el tiempo T3 total, aquel correspondiente a la observación que tardó más en resolverse.</p>
            </div>
          </div>
        </li>

        <li style="cursor:pointer;" onclick="VerDetalleTiempoPromedio('T4');" title="Ir al detalle de la etapa">
          <div id="divT4_point" class="timeline-badge success"><i id="chkT4_01" class="glyphicon glyphicon-check"></i><i id="chkT4_02" class="glyphicon glyphicon-unchecked" style="display:none;"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title" style="font-size:20px;color:#0168B3;">CONSUMO SERVICIO WEB DE RESPUESTAS DESDE PJUD</h4>
              <p style="font-size:32px;vertical-align:middle;cursor:pointer;"><i class="glyphicon glyphicon-time"></i><span id="T4"></span></p>
            </div>
            <div class="timeline-body">
              <p>Tiempo que demora el Poder Judicial en consumir los datos de respuesta a las observaciones de la Ficha Residencial.<br />
                 Este tiempo se calcula desde que se da por finalizada la resolución a cada una de las observaciones a la ficha residencial, hasta que PJUD consume por primera vez el servicio WEB que le proporciona las respuestas.</p>
            </div>
          </div>
        </li>

    </ul>
</div><!--div class=container-->
</div><!--div id=frmwork2-->

<div id="frmwork3" style="display:none;">
<!--TABLA DE PROMEDIO POR RESIDENCIA / UNIDAD: DÍAS-->
<button id="btnVolverListado3" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:none;" onclick="VolverTimeLine1();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<div class="container well">
    <div class="dataTables_wrapper form-inline dt-bootstrap no-footer">

        <div id="div_tiempoAvgPromedio_SinDatos" class="well" style="display:none;text-align:center;">
            <h4 class="subtitulo-form">No existen registros para el filtro de búsqueda aplicado.</h4>
        </div>

        <div class="row" id="div_tiempoAvgPromedio_ConDatos2" style="display:block;">
            <div class="col-sm-12">
                <!---->
                <span id="tiempoAvgPromedio_" style="color:#000;"></span>
                <table class="table table-bordered table-hover dataTable no-footer"   id="tblTiempoAvgXResidencia" style="width: 100%; border-collapse: collapse;" role="grid"  border="1">
		            <thead>
			            <tr class="Rut titulo-tabla" role="row">
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="">Instituci&oacute;n</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="">Proyecto</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 10px;">Cantidad<br />fichas</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 10px;">Promedio [días]</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 10px;"><span id="spanConsumo"></span></th>
			            </tr>
		            </thead>
                    <tbody></tbody>
	            </table>
                <span id="spanCanFichas" ></span><br /> 
                <span id="spanSumaTiemposFichas" ></span><br />
                <span id="spanAvgFichas" ></span>
            </div>
        </div>
        <div id="divMensajeFichaConsumoPjud" style="display:none;">
        <i style='color:#A4A4A4;font-size:16px;' class='fa fa-asterisk' aria-hidden='true'></i>&nbsp;<span style='color:#A4A4A4;font-size:11px;'>Aquellos casos en los cuales un proyecto presente más de una ocurrencia en el listado, indicará que la residencia presenta dos grupos de ficha: (1) un grupo con una o más fichas en espera de ser consumidas y (2) otro grupo con una o más fichas consumidas por PJUD.</span>
        </div>

    </div>
</div><!--div class=container-->
</div><!--div id=frmwork3-->

<div id="frmwork4" style="display:none;"> 
<!--TABLA DE PROMEDIO POR FICHA DE UNA RESIDENCIA / UNIDAD: DÍAS-->
<button id="btnVolverListado5" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:none;" onclick="VolverTimeLine2();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<div class="container well">
    <div class="dataTables_wrapper form-inline dt-bootstrap no-footer">

        <div id="div3" class="well" style="display:none;text-align:center;">
            <h4 class="subtitulo-form">No existen registros para el filtro de búsqueda aplicado.</h4>
        </div>

        <div class="row" id="div4" style="display:block;">
            <div class="col-sm-12">
                <!---->
                <span id="tiempoAvgPromedioPorFichas_" style="color:#000;"></span>
                <table class="table table-bordered table-hover dataTable no-footer"   id="tblTiempoAvgXFicha" style="width: 100%; border-collapse: collapse;" role="grid"  border="1">
		            <thead>
			            <tr class="Rut titulo-tabla" role="row">
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width:90px;" title="Folio de la ficha residencial">Código Ficha</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="">Corte Apelación/<br />Tribunal</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="">Juez</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="font-size:11px;width:90px;cursor:pointer;" title="Tiempo (días) que tarda el llenado de la ficha residencial por parte de las residencias">Registro</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="font-size:11px;width:90px;cursor:pointer;" title="Tiempo (días) que tarda en ser consumido por primera vez el servicio WEB de ficha residencial desde PJUD">Consumo WS<br />ficha</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="font-size:11px;width:90px;cursor:pointer;" title="Tiempo (días) que tarda el envío de observaciones desde PJUD">Envío<br />Observaciones</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="font-size:11px;width:90px;cursor:pointer;" title="Tiempo (días) que tarda en ser iniciada la tramitación de las observaciones enviadas desde PJUD">En espera<br />de tramitación </th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="font-size:11px;width:90px;cursor:pointer;" title="Tiempo (días) que tardan los responsables del SENAME en responder a las observaciones que realiza el PJUD a la ficha residencial">Tramitación</th>
                            <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="font-size:11px;width:90px;cursor:pointer;" title="Tiempo (días) que tarda en ser consumido por primera vez el servicio WEB de respuestas desde PJUD">Consumo WS<br />de respuestas</th>
			            </tr>
		            </thead>
                    <tbody></tbody>
	            </table>
            </div>
        </div>

    </div>
</div><!--div class=container-->
</div><!--div id=frmwork3-->

<div id="frmwork5" style="display:none;">
<!--Panel de acceso a estadísticas de evolución de indicadores por sección -->
<button id="btnVolverListado6" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:none;" onclick="VolverTimeLine3();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<div class="container well">
    <div class="dataTables_wrapper form-inline dt-bootstrap no-footer">

        <div class="row">
            <div class="col-sm-4">
                <button class="btn btn-primary btn-lg" style="vertical-align:middle;width:280px;" onclick="VerEvolucionIndicadores(1);"><i class="fa fa-line-chart" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="margin:auto;font-size:14px;">&nbsp;ANTECEDENTES<br />GENERALES</span></button>
                <br /><br />
            </div>
            <div class="col-sm-4">
                <button class="btn btn-primary btn-lg" style="vertical-align:middle;width:280px;" onclick="VerEvolucionIndicadores(2);"><i class="fa fa-line-chart" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="margin:auto;font-size:14px;">&nbsp;ANTECEDENTES<br />DOTACIÓN DE PERSONAL</span></button>
                <br /><br />
            </div>
            <div class="col-sm-4">
                <button class="btn btn-primary btn-lg" style="vertical-align:middle;width:280px;" onclick="VerEvolucionIndicadores(3);"><i class="fa fa-line-chart" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="margin:auto;font-size:14px;">&nbsp;ANTECEDENTES<br />INFRAESTRUCTURA</span></button>
                <br /><br />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <button class="btn btn-primary btn-lg" style="vertical-align:middle;width:280px;" onclick="VerEvolucionIndicadores(4);"><i class="fa fa-line-chart" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="margin:auto;font-size:14px;">&nbsp;ANTECEDENTES<br />DE SALUD</span></button>
                <br /><br />
            </div>
            <div class="col-sm-4">
                <button class="btn btn-primary btn-lg" style="vertical-align:middle;width:280px;" onclick="VerEvolucionIndicadores(5);"><i class="fa fa-line-chart" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="margin:auto;font-size:14px;">&nbsp;ANTECEDENTES<br />DE EDUCACIÓN</span></button>
                <br /><br />
            </div>
            <div class="col-sm-4">
                <button class="btn btn-primary btn-lg" style="vertical-align:middle;width:280px;" onclick="VerEvolucionIndicadores(6);"><i class="fa fa-line-chart" aria-hidden="true" style="font-size:48px;float:left;font-weight:lighter;"></i><span style="margin:auto;font-size:14px;">&nbsp;ANTECEDENTES<br />DE ALIMENTACIÓN</span></button>
                <br /><br />
            </div>
        </div>
    </div>
</div><!--div class=container-->
</div><!--div id=frmwork5-->

<div id="frmwork6" style="display:none;">
<!--Panel de despliegue de gráficas-->
<button id="btnVolverListado7" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:block;" onclick="VolverPanelSelectorEvolucion();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<div class="container well">
    <h4 class="subtitulo-form"><span id="spanTitEvolSeleccionada"></span></h4>
    <hr />

        <h4 class="subtitulo-form">Filtros para cálculos</h4>
      
        <div id="Div2" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse ">
            <div class="row">
                <div class="col-md-9">
                    <table class="table table-borderless table-condensed table-col-fix">
                        <tbody>
                        <tr>
                            <th>
                                <label for="">Año de registro:</label>
                            </th>
                            <td>
                                <select name="cmbYearRegistro" id="cmbYearRegistro" class="form-control textCampoSel2" style="width:120px;">
                                    <option value="2018" selected="selected">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="">Institución:</label>
                            </th>
                            <td>
                                <select name="cmbInstitucion2" id="cmbInstitucion2" onchange="CargaProyectosInstitucion2(this.value);"  class="form-control textCampoSel2" style="width:100%;">
                                    <option value="0"> Seleccionar </option>
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="">Proyecto:</label>
                            </th>
                            <td>
                                <select name="cmbProyecto2" id="cmbProyecto2" onchange=""  class="form-control textCampoSel2" style="width:100%;" disabled="disabled">
                                    <option value="0"> Seleccionar</option>
                                </select>
                            </td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div>
                                    <button id="BtnGenEstadistica" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="Actualizar estadísticas de acuerdo a los parámetros seleccionados" onclick="GenerarEstadisticas();"><i class="fa fa-line-chart" aria-hidden="true"></i>&nbsp;Generar estadísticas</button>
                                </div>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    <div id="TBL_antecedentes_generales"></div>

</div><!--div class=container-->
</div><!--div id=frmwork6-->

<div id="frmwork7" style="display:none;">
<!--Panel de acceso a COMPARACIÓN DE FICHAS RESIDENCIALES -->
<button id="btnVolverListado8" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:none;" onclick="VolverFuncionesModuloStat();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<div id="divParametrosBSQComparar" class="well">
        <h4 class="subtitulo-form">Filtros de Búsqueda Fichas Residenciales</h4>
        <span style="color:#808080;font-size:10px;"><i>Ejecute la búsqueda y selecciones dos de las fichas residenciales para proceder a compararlas. Las fichas se ordenan en forma descendentes, desde la más reciente a la más antigua.</i></span>
        <hr />

        <a id="A26" data-toggle="collapse" data-parent="#accordion" href="#DivResultCompare" aria-expanded="true" aria-controls="DivResultCompare">
            <span id="Span73">Ocultar Detalles de la Búsqueda</span>
            
            <span id="Span74" class="glyphicon glyphicon-triangle-top"></span>         
        </a>

        <div id="DivResultCompare" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse ">
            <div class="row">
                <div class="col-md-9">
                    <table class="table table-borderless table-condensed table-col-fix">
                        <tbody>
                        <tr>
                            <th>
                                <label for="">Institución:</label>
                            </th>
                            <td>
                                <select name="cmbInstitucionCompare" id="cmbInstitucionCompare" onchange="CargaProyectosInstitucion3(this.value);"  class="form-control textCampoSel2" style="width:100%;">
                                    <option value="0"> Seleccionar </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="">Proyecto:</label>
                            </th>
                            <td>
                                <select name="cmbProyectoCompare" id="cmbProyectoCompare" onchange="LimpiaBusquedaFichas();"  class="form-control textCampoSel2" style="width:100%;" disabled="disabled">
                                    <option value="0"> Seleccionar</option>
                                </select>
                            </td>

                        </tr>
                        <tr>
                            <th>
                                <label for="">Fichas seleccionadas:</label>
                            </th>
                            <td>
                                <span id="spanFichasSeleccionadas"><button class="btn btn-default disabled">Seleccionar dos fichas</button></span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <div>
                                    <button id="BTNLimpiarSeleccion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" onclick="LimpiarSeleccion();"><span class="glyphicon glyphicon-erase"></span>&nbsp;Limpiar selección</button>
                                    <button id="BTNBsqComparar" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" onclick="BuscarFichasResidencialesCompare(1, 'BSQGRAL0');"><i class="fa fa-search" aria-hidden="true"></i>&nbsp;Buscar</button>
                                    <button id="BTNComparar" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" onclick="CompararFichasResidenciales();"><i class="fa fa-clone" aria-hidden="true"></i>&nbsp;Comparar</button>
                                </div>

                            </td>
                        </tr>
                    </tbody></table>
                </div>
                <input name="CurrentPageCompare" id="CurrentPageCompare" type="hidden" />

                <div class="col-md-3">
                    <div class="panel-info panel-primary-info">
                        <div class="panel-heading">
                            Información
                        </div>
                        <div class="panel-footer">
                            <span id="Span75" class="subtitulo-form-info">El Tiempo de Carga de la información dependerá de la cantidad de registros.</span>
                        </div>
                    </div>

                    <p></p>
                    <div class="caja-despliegue">
                        <div>
                                            
                        </div>
                        <div>
                            <a id="A27" href="#" style="display:inline-block;width:1px;"></a>
                        </div>
                        <div>
                                            
                        </div>
                        <div>
                                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="listadoFichaResCompare_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                  
                <div id="divMensajeBusquedaVaciaCompare" class="well" style="display:none;text-align:center;">
                    <h4 class="subtitulo-form">No existen registros para el filtro de búsqueda aplicado.</h4>
                </div>
                <div class="row" id="divlistCanFichasCompareLbl" style="display:none;">   
                    <h4> <span id="lbl_cantidadFichaResCompare" class="subtitulo-form" style="padding-left:15px;">Fichas Residenciales:</span></h4>
                </div>
                
                <div class="row" id="divlistadoFichasCompareCtrl" style="display:none;">             
                    <div class="col-sm-6">
                        <div class="dataTables_length" >
                            <label>Mostrando 
                                <select id="cantListaFichaResidencialCompare" name="cantListaFichaResidencialCompare" aria-controls="tbl_listadoFichaCompare" class="form-control input-sm" >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                </select> registros por página
                            </label>
                        </div>
                    </div> 
                </div>

                <div class="row" id="divlistadoFichasCompareTBL" style="display:none;">
                    <div id="div14" class="col-sm-12">
                        <!---->
                        <table class="table table-bordered table-hover dataTable no-footer"   id="tbl_listadoFichaCompare" style="width: 100%; border-collapse: collapse;" role="grid"  border="1">
		                    <thead>
			                    <tr class="Rut titulo-tabla" role="row">
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 43px;">Instituci&oacute;n</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 43px;">Proyecto</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 59px;">Folio Ficha</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 68px;">Fecha Registro Ficha</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 68px;">Usuario registro</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 64px;">Estado Gesti&oacute;n</th>
                                    <th scope="col" class="sorting_disabled text-center" rowspan="1" colspan="1" style="width: 62px;"></th>
			                    </tr>
		                    </thead>
                            <tbody></tbody>
	                    </table>
                        <div class="dataTables_paginate paging_simple_numbers" id="paginadorFichaResCompare" style="display:none;">
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</div><!--div id=frmwork7-->

<div id="frmwork8" style="display:none;">
<button id="btnVolverListadoFichaComp" class="btn btn-primary" style="cursor: pointer;font-weight:normal;margin-bottom:10px;display:block;" onclick="VolverSeleccionFichasAcomparar();"><span class="glyphicon glyphicon-arrow-left"></span>&nbsp;Volver</button>
<table id="tblDatosGBL_Compare" style="display:none;">
    <tr><td><span class="datocabSetObs">INSTITUCIÓN</span></td><td>:&nbsp;<b><span  class="datocabSetObs" id="spanInstitucionGBL_compare"></span></b></td></tr>
    <tr><td><span class="datocabSetObs">PROYECTO</span></td><td>:&nbsp;<b><span  class="datocabSetObs" id="spanProyectoGBL_compare"></span></b></td></tr>
    <tr><td colspan="2"><br/><br/></td></tr>
</table>
<div class="well"> <!--INI DIV COLAPSABLE FICHA PADRE COMPARA001-->
<a id="A28" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaPadre_comp001" aria-expanded="false" aria-controls="DivFichaPadre_comp001" onclick="AnalizaEstadoHabilitacionCompare('FICHA_001');">
    <span id="spanTITULO_FICHA_comp001"><b>VER DETALLE REGISTRO DE FICHA RESIDENCIAL</b></span>
    <span id="Span77" class="glyphicon glyphicon-triangle-top"></span>  
    <img id="imgSeccion_Ficha001" src="../images/loader_ficharesidencial.gif" style="float:right;width:30px;display:none;" />
</a>
<span id="lblmsgA28" style="font-size:12px;display:none;">Por favor espere la carga de datos&nbsp;&nbsp;</span>
<div id="DivFichaPadre_comp001" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse">

        <span id="folio_pendiente_comp001" style="font-size:11px;font-weight:600;color:#3b3939;"></span><span id="periodo_ficha_comp001" style="font-size:11px;font-weight:600;color:#3b3939;"></span>
        <ul class="nav nav-tabs tab-fixed-height nav-justified">
            <li class="active"><a id="LI_general_comp001" data-toggle="tab" href="#generales_comp001">Antecedentes Generales</a></li>
            <li><a data-toggle="tab" href="#poblacion_comp001">Antecedentes de Población y Capacidad</a></li>
            <li><a data-toggle="tab" href="#dotacion_comp001">Antecedentes de Dotación de Personal</a></li>
            <li><a data-toggle="tab" href="#infraestructura_comp001">Antecedentes Infraestructura</a></li>
            <li><a data-toggle="tab" href="#seguridad_comp001">Antecedentes de Seguridad</a></li>
            <li><a data-toggle="tab" href="#salud_comp001">Antecedentes de Salud</a></li>
            <li><a data-toggle="tab" href="#educacion_comp001">Antecedentes de Educación</a></li>
            <li><a data-toggle="tab" href="#alimentacion_comp001">Antecedentes de Alimentación</a></li>
            <li><a data-toggle="tab" href="#gestion_residencia_comp001">Antecedentes de Gestión de Residencia</a></li>
        </ul>

        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="generales_comp001">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Antecedentes Generales</span></td>
                        
                        </tr>
                        <tr >
                            <td class="etiqCampo" >FOLIO FICHA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="idcodfichaOBS_comp001" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr >
                            <td class="etiqCampo" >Institución</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_000_sel_Institucion_comp001" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Proyecto</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_001_sel_proyecto_comp001" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo">Tipo de organismo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_002_tipoOrganismo_comp001" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Modelo de Intervención</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_003_modeloIntervencion_comp001" class="form-control textCampo" placeholder="Modelo de Intervención" style="width:95%" readonly="true" /></td>
                        </tr>     
                        <tr>
                            <td class="etiqCampo">Dirección</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_004_direccion_comp001" type="text" class="form-control textCampo" placeholder="Dirección de residencia" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Teléfonos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_005_telefonos_comp001" type="text" class=" form-control textCampo" placeholder="Teléfonos" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Región</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_006_region_comp001" class="form-control textCampo" placeholder="Región" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Comuna</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_007_comuna_comp001" class="form-control textCampo" placeholder="Comuna" style="width:95%" readonly="true"/></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Correo electrónico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_008_email_comp001" type="text" class="form-control textCampo" placeholder="Correo electrónico" readonly="true"/></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Director(a) Proyecto</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_009_directorProyecto_comp001" type="text" class="form-control textCampo" placeholder="Director(a) Proyecto" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">RUT Director(a) Proyecto</td>
                            <td style="border-bottom: 1px #fff solid;"><input id="general_010_rut_director_proyecto_comp001" type="text" class="form-control textCampoRut" placeholder="RUT Director(a)" readonly="true" /></td>
                        </tr> 
                        <tr><td colspan="2"><span id="spanRUTerroneoGral_comp001" style="color:red;font-size:12px;text-align:left;"></span></td></tr>
                    </table>
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_012_pobvig_masculina_comp001" type="text" class="form-control textCampo3"  maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_013_pobvig_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="pobvig_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>      
                        <tr>
                            <td class="etiqCampo3">Plazas Convenidas con SENAME (En caso de tener subvención)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_014_plazaConv_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_015_plazaConv_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="plazaConv_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Otras Plazas no subvencionadas por Sename</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_016_otrasPlazas_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3"  placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_017_otrasPlazas_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="otrasPlazas_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA Presentes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_018_totalNNApresent_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_019_totalNNApresent_femenina_comp001"type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNApresent_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA en Acercamiento Familar</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_020_totalNNAacercFamilia_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_021_totalNNAacercFamilia_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAacercFamilia_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total de Residentes Mayores de Edad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_022_totalResidenMayor_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_023_totalResidenMayor_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalResidenMayor_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Abandono de Sistema</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_024_abandonoSist_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_025_abandonoSist_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="abandonoSist_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Hospitalizados</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_026_hospitalizados_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_027_hospitalizados_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="hospitalizados_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA ingresados con Artículo 80 Bis</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_028_totalNNAart80bis_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_029_totalNNAart80bis_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAart80bis_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA en completo abandono decretado por el o la  Juez(a) (especificar)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_030_totalNNAabandono_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_031_totalNNAabandono_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAabandono_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>     
                        <tr>
                            <td class="etiqCampo3">Total de adolescentes con hijos recién nacidos o lactantes (especificar)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_038_totalNNA_adoslecente_chijo_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_039_totalNNA_adoslecente_chijo_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_adoslecente_chijo_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>                                                                                                                                                                                                                                          
                    </table>
                    <table id="tbl_NNA_abandonados_comp001" class="table" style="width:100%;">
                        <tr><td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de NNA en Completo Abandono</span></td></tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                        </tr>  
                    </table>
                    <table id="tbl_adolescente_con_hijos_comp001" class="table">
                        <tr>
                            <td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de Adolescente con Hijos Lactantes</span></td>
                        
                        </tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                        </tr>
                    </table>
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_032_totalNNA_suscep_adopcion_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_033_totalNNA_suscep_adopcion_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_suscep_adopcion_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>   
                        <tr>
                            <td class="etiqCampo3">Total de NNA con enlace de adopción (considerar sólo población de NNA declarados susceptible de ser adoptados)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_034_totalNNA_enlace_adopcion_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_035_totalNNA_enlace_adopcion_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_enlace_adopcion_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Total de NNA con causa iniciada por susceptibilidad de adopción (sin sentencia)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_036_totalNNA_causaini_adopcion_masculina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_037_totalNNA_causaini_adopcion_femenina_comp001" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_causaini_adopcion_total_comp001" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>                    
                   
                    </table>

            </div>

            <div role="tabpanel" class="tab-pane fade in" id="poblacion_comp001">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Población y Capacidad</span></td>
                            </tr>
                        <tr>
                            <td class="etiqCampo">Residencia con Subvención SENAME</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_001_sel_reside_con_subven_comp001" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Sexo que atiende la Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_002_sel_sexo_atendidos_comp001" class="form-control textCampo"><option value="0"></option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Mixto</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Rango etáreo de Atención</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_003_sel_rango_etareo_predomina_comp001" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">0 a 18</option><option value="3">6 a 12</option><option value="4">6 a 18</option><option value="5">12 a 18</option><option value="6">Más de 18</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Rango etáreo Predominante</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_004_poblacion_vigente_comp001" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">6 a 12</option><option value="3">12 a 18</option><option value="4">Más de 18</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Tipo de Vulneración más Frecuente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="poblacion_005_tipo_vulneracion_mas_frecuente_comp001" type="text" class="form-control textCampo" placeholder="" /></td>
                        </tr> 
                        <tr style="display:none;">
                            <td class="etiqCampo">Programa de Apadrinamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_006_programa_apadrinimiento_comp001" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                    </table>
            </div>
     
            <div role="tabpanel" class="tab-pane fade in" id="dotacion_comp001">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_001_sel_director_existe_comp001" class="form-control textCampoSel1" disabled="disabled"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_002_sel_director_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_003_sel_director_tipo_jornada_comp001" class="form-control textCampoSel1" disabled="disabled"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_004_sel_director_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Asistente Social:</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_005_sel_asistente_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_006_sel_asistente_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_007_sel_asistente_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_008_sel_asistente_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_009_sel_psicologo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_010_sel_psicologo_cantidad_comp001" class ="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_011_sel_psicologo_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_012_sel_psicologo_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Enfermero(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_013_sel_enfermero_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_014_sel_enfermero_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_015_sel_enfermero_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_016_sel_enfermero_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Auxiliar de Enfermería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_017_sel_auxenfermero_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_018_sel_auxenfermero_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_019_sel_auxenfermero_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_020_sel_auxenfermero_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Médico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_021_sel_medico_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_022_sel_medico_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_023_sel_medico_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_024_sel_medico_horas_semanales_comp001"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psiquiatra</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_025_sel_psiquiatra_existe_comp001"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_026_sel_psiquiatra_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_027_sel_psiquiatra_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_028_sel_psiquiatra_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Terapeuta Ocupacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_029_sel_terapeuta_ocup_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_030_sel_terapeuta_ocup_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_031_sel_terapeuta_ocup_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_032_sel_terapeuta_ocup_horas_semanales_comp001"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Kinesiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_033_sel_kinesiologo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_034_sel_kinesiologo_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_035_sel_kinesiologo_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_036_sel_kinesiologo_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Nutricionista</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_037_sel_nutricionista_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_038_sel_nutricionista_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_039_sel_nutricionista_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_040_sel_nutricionista_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Fonoaudiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_041_sel_fonoaudiologo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_042_sel_fonoaudiologo_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_043_sel_fonoaudiologo_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_044_sel_fonoaudiologo_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Profesor(a) de Educación Física</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_045_sel_profesorEducaFisica_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_046_sel_profesorEducaFisica_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_047_sel_profesorEducaFisica_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_048_sel_profesorEducaFisica_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicopedagogo(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_049_sel_psicopedagogo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_050_sel_psicopedagogo_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_051_sel_psicopedagogo_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_052_sel_psicopedagogo_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de Párvulos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_053_sel_educadoraParvulos_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_054_sel_educadoraParvulos_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_055_sel_educadoraParvulos_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_056_sel_educadoraParvulos_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de trato directo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_057_sel_educadoraTratoDirecto_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_058_sel_educadoraTratoDirecto_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_060_sel_educadoraTratoDirecto_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Manipulador(a) de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_061_sel_manipuladorAlimentos_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_062_sel_manipuladorAlimentos_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_063_sel_manipuladorAlimentos_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_064_sel_manipuladorAlimentos_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Administrativo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_065_sel_apoyoAdministrativo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_066_sel_apoyoAdministrativo_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_067_sel_apoyoAdministrativo_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_068_sel_apoyoAdministrativo_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Aseo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_069_sel_personalAseo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_070_sel_personalAseo_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_071_sel_personalAseo_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_072_sel_personalAseo_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_073_sel_personalLavanderia_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_074_sel_personalLavandería_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_075_sel_personalLavandería_tipo_joranada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_076_sel_personalLavandería_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Monitores Talleristas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_077_sel_monitoresTalleristas_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_078_sel_monitoresTalleristas_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_079_sel_monitoresTalleristas_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_080_sel_monitoresTalleristas_horas_semanales_comp001"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Alumnos en Práctica (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_081_sel_alumnosPractica_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_082_sel_alumnosPractica_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_083_sel_alumnosPractica_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_084_sel_alumnosPractica_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Voluntario (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_085_sel_apoyoVoluntario_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_086_sel_apoyoVoluntario_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_087_sel_apoyoVoluntario_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_088_sel_apoyoVoluntario_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Otros (Especificar en Observaciones)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_089_sel_Otros_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_090_sel_Otros_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_091_sel_Otros_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_092_sel_Otros_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Personal con Licencia Médica?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_093_sel_PersonalLicenciaMedica_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_094_sel_PersonalLicenciaMedica_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal con Licencia ¿Cuenta con Suplente?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_comp001" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_comp001" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="5" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="dotacion_101_Observaciones_comp001" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                    </table>
            </div>

            <div role="tabpanel" class="tab-pane fade in" id="infraestructura_comp001">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_001_ofi_admin_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_002_ofi_admin_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(1);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Reuniones</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_003_salaReuniones_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_004_salaReuniones_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(2);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Recepción</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_005_salaRecepcion_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_006_salaRecepcion_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(3);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacio de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_007_espacioVisitas_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_008_espacioVisitas_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(4);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala Multiuso para Talleres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_009_salaMultiuso_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_010_salaMultiuso_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(5);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Estar/Living</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_011_salaEstar_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_012_salaEstar_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(6);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Unidad de Salud</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_013_enfermeria_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_014_enfermeria_cantidad_comp001" class="form-control textCampoSel1"  onchange="HabilitaInfraestructura(7);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacios Recreacionales</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_015_espacioRecreacional_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_016_espacioRecreacional_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(8);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Áreas Verdes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_019_areasVerdes_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_020_areasVerdes_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(9);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cocina</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_021_cocina_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_022_cocina_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(10);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Comedor</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_023_comedor_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_024_comedor_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(11);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_025_Lavanderia_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_026_Lavanderia_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(12);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Dormitorio NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_027_Dormitorio_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_028_Dormitorio_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(13);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Camas NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_029_CamasNNA_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_030_CamasNNA_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(14);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Closet, Lockers</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_031_closetLocker_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_032_closetLocker_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(15);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños para Público</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_033_banosPublico_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_034_banosPublico_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(16);" /></td>
                        </tr>

                        <tr style="display:none;">
                            <td class="etiqCampo3">Baños NNA Adecuados y Suficientes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNAadecuados_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_036_banosNNAadecuados_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(17);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA en Funcionamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Funcionamiento_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Funcionamiento_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(19);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de acuerdo a Normativa</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_AcuerdoNormativa_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_AcuerdoNormativa_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(20);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de hombres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Hombre_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Hombre_cant_comp001" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(21);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de mujeres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Mujer_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Mujer_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(22);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA mixtos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_mixto_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_mixto_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(23);" /></td>
                        </tr> 

                        <tr style="display:none;">
                            <td class="etiqCampo3">Duchas para NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_038_duchasNNA_cantidad_comp001" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(18);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                        </tr>
                        <tr> 
                            <td class="etiqCampo3">Duchas para NNA en Funcionamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_funcionamiento_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_funcionamiento_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(24);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para  NNA de acuerdo a Normativa</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_normativa_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_normativa_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(25);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA de hombres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_hombres_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_hombres_cant_comp001" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(26);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA de mujeres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_mujeres_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mujeres_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(27);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA mixtas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_mixtos_existe_comp001" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mixtos_cant_comp001" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(28);" /></td>
                        </tr> 

                        <tr>
                            <td class="etiqCampo3">Ambientación Acorde a la Población</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_039_ambientacionAcorde_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vestuario adecuado de acuerdo a estación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioAdecuado_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vestuario personalizado para el NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioPersonalizado_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Útiles de Aseo Personal para los NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_041_utilesAseoPersonalNNA_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Agua Caliente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_042_aguaCaliente_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr style="display:none;">
                            <td class="etiqCampo3">Estado Calefón y Llaves de Gas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_estadoCalefonLlavesGas_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cumple Normativa Calefón</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_CumpleNormaCalefon_comp001" class="form-control textCampoSel1" onchange="EvaluaCumpleNormaCalefonLlaveGas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cumple Normativa llave de gas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_CumpleNormaLlaveGas_comp001" class="form-control textCampoSel1" onchange="EvaluaCumpleNormaCalefonLlaveGas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Sistema de calefacción (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_044_sistemaCalefaccion_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Ventilación adecuada del inmueble</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_045_ventilacionAdecuada_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso para personas con situación de Discapacidad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_046_AccesoDiscapacitados_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Instalaciones Habilitadas para Discapacitados (Baños, ramplas, etc.)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="Infraest_049_observaciones_comp001" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="3" style="text-align:center;"><button id="btn_antecedentesInfraestructura" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Recursos Materiales, Infraetructura y Equipamiento" onclick="GrabarAntecedentes(4);">Grabar Antecedente de Recursos Materiales, Infraetructura y Equipamiento</button>&nbsp;<button id="btn_FichaGenera_04" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>         

            <div role="tabpanel" class="tab-pane fade in" id="seguridad_comp001">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Seguridad</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3" style="width:100%">Plan de Emergencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_001_planEmergencia_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Simulacro Emergencia (Último Cuatrimestre)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_002_simulacroEmergencia_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Plan de Emergencia ¿Visado por personal calificado?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_003_planEmergenciaVisado_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Extintores</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_004_extintores_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Señalética</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_005_senaletica_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vías de Evacuación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_006_viaEvacuacion_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr style="display:none;">
                            <td class="etiqCampo3">Capacitación Personal en Emergencia y Primeros Auxilios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonal_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Capacitación Personal en Emergencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonalemergencia_comp001" class="form-control textCampoSel1" onchange="EvaluaCapacitacionPersonalEmergenciaPrimerAux();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Capacitación Personal en Primeros Auxilios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonalprimerosAux_comp001" class="form-control textCampoSel1" onchange="EvaluaCapacitacionPersonalEmergenciaPrimerAux();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr style="display:none;">
                            <td class="etiqCampo3">Sanitización, Desratización y Fumigación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sanitización</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion__comp001" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Desratización</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_desratizacion_comp001" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Fumigación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_fumigacion_comp001" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Sistema Eléctrico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_009_sistemaElectrico_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Zona de Seguridad Demarcada</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_010_zonaSeguridad_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="seguridad_011_observaciones_comp001" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                    </table>
            </div>   

            <div role="tabpanel" class="tab-pane fade in" id="salud_comp001">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_001_NNA_inscritosCESFAM_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental con Diagnóstico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_002_NNA_problematicaSaludMental_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental sin Diagnóstico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_003_NNA_problematicaSaludMentalsinDiag_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA Inscritos con Enfermedad Crónica</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_004_NNA_inscritosEnferCronica_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA a la espera de Trasplante</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_015_NNA_EsperaTransplantes_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA Trasplantados</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_016_NNA_Transplantados_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">N° de NNA Inscritos con Situación de Discapacidad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_005_NNA_Discapacidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA recibiendo tratamiento farmacológico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_006_NNA_inscritosProblemSaludRecibeMedica_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud en Tratamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_007_NNA_problematicaSaludenTratamiento_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Consumo sólo de Drogas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_008_NNA_consumoDrogas_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con consumo sólo de Alcohol</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_008_NNA_consumoAlcohol_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con consumo de Alcohol y Drogas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_017_consumoDrogasyAlcohol_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>


                        <tr>
                            <td class="etiqCampo3">¿Cuenta con espacio adecuado para el resguardo de medicamentos?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_resguardoMedicamentos_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>                    
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con inventario de medicamentos?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_inventarioMedicamentos_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">¿Cuenta con Registro de Medicamentos Administrados a los NNA?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_registroMedicamentoAdmin_a_NNA_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con Protocolo para la Administración de Medicamentos a los NNA?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_010_sel_protocoloAdmin_Medica_a_NNA_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con control al día de Niño Sano?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_nino_sano_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con control al día de Adolescente Sano?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_adolescente_sano_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">¿Existe Control Anual Ginecológico en los Adolescentes?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_ginecologicoAdolescente_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Existen adolescentes que se hayan negado a Control Ginecológico?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_012_sel_adolescenteNiegaControlGineco_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Adolescentes Embarazadas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_013_sel_adolescenteEmbarazada_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid; white-space: nowrap;"><select id="salud_014_sel_adolescenteEmbarazadaControlalDia_comp001" disabled="disabled" class="textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0" selected="selected">NO</option></select> - CU&Aacute;NTAS:&nbsp;<input id="salud_015_adolescenteEmbarazadaControlalDia_cantidad_comp001" type="text" class="textCampo3" maxlength="3" placeholder="" onkeyup="EvaluaCuantasAdolescentesControlAldia(this);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="salud_016_observaciones_comp001" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSalud" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Salud" onclick="GrabarAntecedentes(6);">Grabar Antecedente de Salud</button>&nbsp;<button id="btn_FichaGenera_06" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>           

            <div role="tabpanel" class="tab-pane fade in" id="educacion_comp001">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_001_NNA_matriculados_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">N° de NNA que si asisten a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_001_NNA_asisten_colegio_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que no asisten a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_002_NNA_NO_asisten_colegio_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Motivo de inasistencia de NNA a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_002_NNA_NO_asisten_colegio_cantidad_motivo_comp001" class="form-control textCampoSel1" onchange="MotivoInasistencia(this);"><option value="-1"></option><option value="1">Salud</option><option value="2">Rechazo</option><option value="3">Suspensión</option><option value="4">Otro</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">N° de NNA con Retraso o Rezago Escolar</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_003_NNA_retrasoEscolar_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Matrícula Cancelada</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_004_NNA_matriculaCancelada_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que Asiste a Educación Diferencial</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_005_NNA_asisten_colegioDiferencial_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que Asiste a Educación de Nivelación de Estudios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_006_NNA_asisten_colegioNivelacion_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA inscritos para exámenes libres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_006_NNA_examenesLibres_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Espacios Destinados a Estudios y Desarrolo de Tareas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_007_sel_EspacioEstudio_y_Tareas_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Material Bibliográfico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_008_sel_materialBibliiografico_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Computadores</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_009_sel_computadores_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso Controlado a Internet</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_010_sel_AccesoControladoInternet_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>                                                                                              
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="educacion_011_observaciones_comp001" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesEducacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Educación" onclick="GrabarAntecedentes(7);">Grabar Antecedente de Educación</button>&nbsp;<button id="btn_FichaGenera_07" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>   

            <div role="tabpanel" class="tab-pane fade in" id="alimentacion_comp001">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Alimentación</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cuenta con Registro de Honorarios de Entrega de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">“¿Cuenta con minuta alimentaria?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existencia de Menús Especiales</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_003_sel_menuEspeciales_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con minuta alimentaria aprobada?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existen Certificados Sanitarios de las Manipuladoras</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_005_sel_certifSanitarioManipuladores_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr style="display:none;">
                            <td class="etiqCampo3">Almacenamiento de Alimentos y Estado de Conservación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Almacenamiento de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_AlmacenaAlimento_existe_comp001" class="form-control textCampoSel1" onchange="EvaluaAlmacenaAlimentoEstadoConserva();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Estado de Conservación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_EstadoConserva_existe_comp001" class="form-control textCampoSel1" onchange="EvaluaAlmacenaAlimentoEstadoConserva();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td></td>
                            <td class="etiqCampo2">ESPECIFIQUE</td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">N° de Comidas Entregadas de Lunes a Viernes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_007_comidas_lunes_a_viernes_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de Comidas Entregadas Sábado, Domingo y Festivos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_008_comidas_sabado_domingo_fest_cantidad_comp001" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="alimentacion_009_observacion_comp001" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesAlimentacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Alimentación" onclick="GrabarAntecedentes(8);">Grabar Antecedente de Alimentación</button>&nbsp;<button id="btn_FichaGenera_08" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>   

            <div role="tabpanel" class="tab-pane fade in" id="gestion_residencia_comp001">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes de Gestión de Residencia</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3" style="width:100%;">Cuenta con catastro de redes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_001_sel_catastroRedes_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr style="display:none;">
                            <td class="etiqCampo3">Existe Protocolo y/o Registro de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_protocoloVisitas_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_protoVisitas_existe_comp001" class="form-control textCampoSel1" onchange="EvaluaProtocoloyRegistroVisitas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existe Registro de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_regisVisitas_existe_comp001" class="form-control textCampoSel1" onchange="EvaluaProtocoloyRegistroVisitas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 

                        <tr>
                            <td class="etiqCampo3">Cuenta con Protocolo de Acogida del NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_003_sel_protocoloAcogida_NNA_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existen Actividades de Autocuidado para el Equipo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_004_sel_activi_autocuidadoEquipo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Cuenta con Protocolo de Actuación de Intervención en Crisis</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  

                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Información para NNA sobre la Normativa de Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Convivencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_007_sel_protocoloConvivencia_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Presentación de Reclamos y Quejas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_008_sel_protocolo_PresentaReclamo_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo y Espacios para la escucha de los NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Vinculación entre Residencias (para hermanos)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_010_sel_vinculacionResidencias_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Cuenta con Proceso de Formación Permanente para el personal</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_011_sel_ProcesoFormacion_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Apadrinamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_012_sel_protocoloApadrinamiento_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Derivación o Traslado a Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_013_sel_protocoloTrasladoResid_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de para el Egreso del NNA (Sistema Residencial)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_014_sel_protocoloEgreso_NNA_existe_comp001"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo para Derivación a Red Salud</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr style="display:none;">
                            <td class="etiqCampo3">Actividades de Habilitación Laboral y Preparación para la Vida Independiente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_habilitacionLaboral_existe_comp001" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Existen Actividades de Habilitación Laboral?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_habilitaLaboral_comp001" class="form-control textCampoSel1" onchange="EvaluaActividadHabilitaLaboralyVidaIndependiente();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">¿Existe proceso para la vida independiente?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_vidaInpendiente_comp001" class="form-control textCampoSel1" onchange="EvaluaActividadHabilitaLaboralyVidaIndependiente();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_017_observaciones_comp001" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                    </table>
                <br />
            </div>   
        </div>
</div>
</div><!--FIN DIV COLAPSABLE FICHA PADRE COMPARA001-->

<div class="well"> <!--INI DIV COLAPSABLE FICHA PADRE COMPARA002-->
<a id="A29" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaPadre_comp002" aria-expanded="false" aria-controls="DivFichaPadre_comp002" onclick="AnalizaEstadoHabilitacionCompare('FICHA_002');">
    <span id="spanTITULO_FICHA_comp002"><b>VER DETALLE REGISTRO DE FICHA RESIDENCIAL</b></span>
    <span id="Span76" class="glyphicon glyphicon-triangle-top"></span>  
    <img id="imgSeccion_Ficha002" src="../images/loader_ficharesidencial.gif" style="float:right;width:30px;display:none;" />
</a>
<span id="lblmsgA29" style="font-size:12px;display:none;">Por favor espere la carga de datos&nbsp;&nbsp;</span>
<div id="DivFichaPadre_comp002" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse">

        <span id="folio_pendiente_comp002" style="font-size:11px;font-weight:600;color:#3b3939;"></span><span id="periodo_ficha_comp002" style="font-size:11px;font-weight:600;color:#3b3939;"></span>
        <ul class="nav nav-tabs tab-fixed-height nav-justified">
            <li class="active"><a id="LI_general_comp002" data-toggle="tab" href="#generales_comp002">Antecedentes Generales</a></li>
            <li><a data-toggle="tab" href="#poblacion_comp002">Antecedentes de Población y Capacidad</a></li>
            <li><a data-toggle="tab" href="#dotacion_comp002">Antecedentes de Dotación de Personal</a></li>
            <li><a data-toggle="tab" href="#infraestructura_comp002">Antecedentes Infraestructura</a></li>
            <li><a data-toggle="tab" href="#seguridad_comp002">Antecedentes de Seguridad</a></li>
            <li><a data-toggle="tab" href="#salud_comp002">Antecedentes de Salud</a></li>
            <li><a data-toggle="tab" href="#educacion_comp002">Antecedentes de Educación</a></li>
            <li><a data-toggle="tab" href="#alimentacion_comp002">Antecedentes de Alimentación</a></li>
            <li><a data-toggle="tab" href="#gestion_residencia_comp002">Antecedentes de Gestión de Residencia</a></li>
        </ul>

        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="generales_comp002">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Antecedentes Generales</span></td>
                        
                        </tr>
                        <tr >
                            <td class="etiqCampo" >FOLIO FICHA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="idcodfichaOBS_comp002" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr >
                            <td class="etiqCampo" >Institución</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_000_sel_Institucion_comp002" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Proyecto</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_001_sel_proyecto_comp002" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo">Tipo de organismo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_002_tipoOrganismo_comp002" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Modelo de Intervención</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_003_modeloIntervencion_comp002" class="form-control textCampo" placeholder="Modelo de Intervención" style="width:95%" readonly="true" /></td>
                        </tr>     
                        <tr>
                            <td class="etiqCampo">Dirección</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_004_direccion_comp002" type="text" class="form-control textCampo" placeholder="Dirección de residencia" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Teléfonos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_005_telefonos_comp002" type="text" class=" form-control textCampo" placeholder="Teléfonos" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Región</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_006_region_comp002" class="form-control textCampo" placeholder="Región" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Comuna</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_007_comuna_comp002" class="form-control textCampo" placeholder="Comuna" style="width:95%" readonly="true"/></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Correo electrónico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_008_email_comp002" type="text" class="form-control textCampo" placeholder="Correo electrónico" readonly="true"/></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Director(a) Proyecto</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_009_directorProyecto_comp002" type="text" class="form-control textCampo" placeholder="Director(a) Proyecto" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">RUT Director(a) Proyecto</td>
                            <td style="border-bottom: 1px #fff solid;"><input id="general_010_rut_director_proyecto_comp002" type="text" class="form-control textCampoRut" placeholder="RUT Director(a)" readonly="true" /></td>
                        </tr> 
                        <tr><td colspan="2"><span id="spanRUTerroneoGral_comp002" style="color:red;font-size:12px;text-align:left;"></span></td></tr>
                    </table>
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_012_pobvig_masculina_comp002" type="text" class="form-control textCampo3"  maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_013_pobvig_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="pobvig_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>      
                        <tr>
                            <td class="etiqCampo3">Plazas Convenidas con SENAME (En caso de tener subvención)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_014_plazaConv_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_015_plazaConv_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="plazaConv_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Otras Plazas no subvencionadas por Sename</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_016_otrasPlazas_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3"  placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_017_otrasPlazas_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="otrasPlazas_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA Presentes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_018_totalNNApresent_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_019_totalNNApresent_femenina_comp002"type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNApresent_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA en Acercamiento Familar</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_020_totalNNAacercFamilia_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_021_totalNNAacercFamilia_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAacercFamilia_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total de Residentes Mayores de Edad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_022_totalResidenMayor_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_023_totalResidenMayor_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalResidenMayor_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Abandono de Sistema</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_024_abandonoSist_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_025_abandonoSist_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="abandonoSist_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Hospitalizados</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_026_hospitalizados_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_027_hospitalizados_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="hospitalizados_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA ingresados con Artículo 80 Bis</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_028_totalNNAart80bis_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_029_totalNNAart80bis_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAart80bis_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total NNA en completo abandono decretado por el o la  Juez(a) (especificar)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_030_totalNNAabandono_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_031_totalNNAabandono_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAabandono_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                        </tr>     
                        <tr>
                            <td class="etiqCampo3">Total de adolescentes con hijos recién nacidos o lactantes (especificar)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_038_totalNNA_adoslecente_chijo_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_039_totalNNA_adoslecente_chijo_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_adoslecente_chijo_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>                                                                                                                                                                                                                                          
                    </table>
                    <table id="tbl_NNA_abandonados_comp002" class="table" style="width:100%;">
                        <tr><td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de NNA en Completo Abandono</span></td></tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                        </tr>  
                    </table>
                    <table id="tbl_adolescente_con_hijos_comp002" class="table">
                        <tr>
                            <td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de Adolescente con Hijos Lactantes</span></td>
                        
                        </tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                        </tr>
                    </table>
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_032_totalNNA_suscep_adopcion_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_033_totalNNA_suscep_adopcion_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_suscep_adopcion_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total de NNA con enlace de adopción (considerar sólo población de NNA declarados susceptible de ser adoptados)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_034_totalNNA_enlace_adopcion_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_035_totalNNA_enlace_adopcion_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_enlace_adopcion_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Total de NNA con causa iniciada por susceptibilidad de adopción (sin sentencia)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_036_totalNNA_causaini_adopcion_masculina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_037_totalNNA_causaini_adopcion_femenina_comp002" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);"/></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_causaini_adopcion_total_comp002" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                        </tr>                    
                   
                    </table>

            </div>

            <div role="tabpanel" class="tab-pane fade in" id="poblacion_comp002">
                        <table class="table">
                            <tr>
                                <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Población y Capacidad</span></td>
                            </tr>
                        <tr>
                            <td class="etiqCampo">Residencia con Subvención SENAME</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_001_sel_reside_con_subven_comp002" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Sexo que atiende la Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_002_sel_sexo_atendidos_comp002" class="form-control textCampo"><option value="0"></option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Mixto</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Rango etáreo de Atención</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_003_sel_rango_etareo_predomina_comp002" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">0 a 18</option><option value="3">6 a 12</option><option value="4">6 a 18</option><option value="5">12 a 18</option><option value="6">Más de 18</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Rango etáreo Predominante</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_004_poblacion_vigente_comp002" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">6 a 12</option><option value="3">12 a 18</option><option value="4">Más de 18</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo">Tipo de Vulneración más Frecuente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="poblacion_005_tipo_vulneracion_mas_frecuente_comp002" type="text" class="form-control textCampo" placeholder="" /></td>
                        </tr> 
                        <tr style="display:none;">
                            <td class="etiqCampo">Programa de Apadrinamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_006_programa_apadrinimiento_comp002" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                    </table>
            </div>
     
            <div role="tabpanel" class="tab-pane fade in" id="dotacion_comp002">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_001_sel_director_existe_comp002" class="form-control textCampoSel1" disabled="disabled"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_002_sel_director_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_003_sel_director_tipo_jornada_comp002" class="form-control textCampoSel1" disabled="disabled"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_004_sel_director_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Asistente Social:</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_005_sel_asistente_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_006_sel_asistente_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_007_sel_asistente_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_008_sel_asistente_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_009_sel_psicologo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_010_sel_psicologo_cantidad_comp002" class ="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_011_sel_psicologo_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_012_sel_psicologo_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Enfermero(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_013_sel_enfermero_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_014_sel_enfermero_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_015_sel_enfermero_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_016_sel_enfermero_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Auxiliar de Enfermería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_017_sel_auxenfermero_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_018_sel_auxenfermero_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_019_sel_auxenfermero_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_020_sel_auxenfermero_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Médico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_021_sel_medico_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_022_sel_medico_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_023_sel_medico_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_024_sel_medico_horas_semanales_comp002"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psiquiatra</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_025_sel_psiquiatra_existe_comp002"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_026_sel_psiquiatra_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_027_sel_psiquiatra_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_028_sel_psiquiatra_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Terapeuta Ocupacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_029_sel_terapeuta_ocup_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_030_sel_terapeuta_ocup_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_031_sel_terapeuta_ocup_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_032_sel_terapeuta_ocup_horas_semanales_comp002"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Kinesiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_033_sel_kinesiologo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_034_sel_kinesiologo_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_035_sel_kinesiologo_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_036_sel_kinesiologo_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Nutricionista</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_037_sel_nutricionista_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_038_sel_nutricionista_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_039_sel_nutricionista_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_040_sel_nutricionista_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Fonoaudiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_041_sel_fonoaudiologo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_042_sel_fonoaudiologo_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_043_sel_fonoaudiologo_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_044_sel_fonoaudiologo_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Profesor(a) de Educación Física</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_045_sel_profesorEducaFisica_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_046_sel_profesorEducaFisica_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_047_sel_profesorEducaFisica_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_048_sel_profesorEducaFisica_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicopedagogo(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_049_sel_psicopedagogo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_050_sel_psicopedagogo_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_051_sel_psicopedagogo_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_052_sel_psicopedagogo_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de Párvulos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_053_sel_educadoraParvulos_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_054_sel_educadoraParvulos_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_055_sel_educadoraParvulos_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_056_sel_educadoraParvulos_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de trato directo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_057_sel_educadoraTratoDirecto_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_058_sel_educadoraTratoDirecto_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_060_sel_educadoraTratoDirecto_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Manipulador(a) de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_061_sel_manipuladorAlimentos_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_062_sel_manipuladorAlimentos_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_063_sel_manipuladorAlimentos_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_064_sel_manipuladorAlimentos_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Administrativo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_065_sel_apoyoAdministrativo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_066_sel_apoyoAdministrativo_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_067_sel_apoyoAdministrativo_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_068_sel_apoyoAdministrativo_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Aseo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_069_sel_personalAseo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_070_sel_personalAseo_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_071_sel_personalAseo_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_072_sel_personalAseo_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_073_sel_personalLavanderia_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_074_sel_personalLavandería_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_075_sel_personalLavandería_tipo_joranada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_076_sel_personalLavandería_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Monitores Talleristas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_077_sel_monitoresTalleristas_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_078_sel_monitoresTalleristas_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_079_sel_monitoresTalleristas_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_080_sel_monitoresTalleristas_horas_semanales_comp002"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Alumnos en Práctica (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_081_sel_alumnosPractica_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_082_sel_alumnosPractica_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_083_sel_alumnosPractica_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_084_sel_alumnosPractica_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Voluntario (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_085_sel_apoyoVoluntario_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_086_sel_apoyoVoluntario_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_087_sel_apoyoVoluntario_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_088_sel_apoyoVoluntario_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Otros (Especificar en Observaciones)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_089_sel_Otros_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_090_sel_Otros_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_091_sel_Otros_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_092_sel_Otros_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Personal con Licencia Médica?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_093_sel_PersonalLicenciaMedica_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_094_sel_PersonalLicenciaMedica_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal con Licencia ¿Cuenta con Suplente?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_comp002" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_comp002" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="5" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="dotacion_101_Observaciones_comp002" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                    </table>
            </div>

            <div role="tabpanel" class="tab-pane fade in" id="infraestructura_comp002">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_001_ofi_admin_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_002_ofi_admin_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(1);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Reuniones</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_003_salaReuniones_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_004_salaReuniones_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(2);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Recepción</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_005_salaRecepcion_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_006_salaRecepcion_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(3);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacio de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_007_espacioVisitas_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_008_espacioVisitas_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(4);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala Multiuso para Talleres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_009_salaMultiuso_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_010_salaMultiuso_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(5);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Estar/Living</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_011_salaEstar_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_012_salaEstar_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(6);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Unidad de Salud</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_013_enfermeria_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_014_enfermeria_cantidad_comp002" class="form-control textCampoSel1"  onchange="HabilitaInfraestructura(7);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacios Recreacionales</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_015_espacioRecreacional_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_016_espacioRecreacional_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(8);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Áreas Verdes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_019_areasVerdes_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_020_areasVerdes_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(9);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cocina</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_021_cocina_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_022_cocina_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(10);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Comedor</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_023_comedor_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_024_comedor_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(11);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_025_Lavanderia_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_026_Lavanderia_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(12);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Dormitorio NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_027_Dormitorio_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_028_Dormitorio_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(13);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Camas NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_029_CamasNNA_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_030_CamasNNA_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(14);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Closet, Lockers</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_031_closetLocker_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_032_closetLocker_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(15);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños para Público</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_033_banosPublico_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_034_banosPublico_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(16);" /></td>
                        </tr>

                        <tr style="display:none;">
                            <td class="etiqCampo3">Baños NNA Adecuados y Suficientes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNAadecuados_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_036_banosNNAadecuados_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(17);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA en Funcionamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Funcionamiento_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Funcionamiento_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(19);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de acuerdo a Normativa</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_AcuerdoNormativa_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_AcuerdoNormativa_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(20);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de hombres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Hombre_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Hombre_cant_comp002" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(21);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de mujeres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Mujer_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Mujer_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(22);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA mixtos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_mixto_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_mixto_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(23);" /></td>
                        </tr> 

                        <tr style="display:none;">
                            <td class="etiqCampo3">Duchas para NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_038_duchasNNA_cantidad_comp002" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(18);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                        </tr>
                        <tr> 
                            <td class="etiqCampo3">Duchas para NNA en Funcionamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_funcionamiento_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_funcionamiento_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(24);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para  NNA de acuerdo a Normativa</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_normativa_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_normativa_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(25);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA de hombres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_hombres_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_hombres_cant_comp002" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(26);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA de mujeres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_mujeres_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mujeres_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(27);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA mixtas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_mixtos_existe_comp002" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mixtos_cant_comp002" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(28);" /></td>
                        </tr> 

                        <tr>
                            <td class="etiqCampo3">Ambientación Acorde a la Población</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_039_ambientacionAcorde_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vestuario adecuado de acuerdo a estación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioAdecuado_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vestuario personalizado para el NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioPersonalizado_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Útiles de Aseo Personal para los NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_041_utilesAseoPersonalNNA_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Agua Caliente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_042_aguaCaliente_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr style="display:none;">
                            <td class="etiqCampo3">Estado Calefón y Llaves de Gas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_estadoCalefonLlavesGas_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cumple Normativa Calefón</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_CumpleNormaCalefon_comp002" class="form-control textCampoSel1" onchange="EvaluaCumpleNormaCalefonLlaveGas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cumple Normativa llave de gas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_CumpleNormaLlaveGas_comp002" class="form-control textCampoSel1" onchange="EvaluaCumpleNormaCalefonLlaveGas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Sistema de calefacción (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_044_sistemaCalefaccion_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Ventilación adecuada del inmueble</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_045_ventilacionAdecuada_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso para personas con situación de Discapacidad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_046_AccesoDiscapacitados_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Instalaciones Habilitadas para Discapacitados (Baños, ramplas, etc.)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="Infraest_049_observaciones_comp002" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="3" style="text-align:center;"><button id="btn_antecedentesInfraestructura" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Recursos Materiales, Infraetructura y Equipamiento" onclick="GrabarAntecedentes(4);">Grabar Antecedente de Recursos Materiales, Infraetructura y Equipamiento</button>&nbsp;<button id="btn_FichaGenera_04" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>         

            <div role="tabpanel" class="tab-pane fade in" id="seguridad_comp002">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Seguridad</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3" style="width:100%">Plan de Emergencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_001_planEmergencia_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Simulacro Emergencia (Último Cuatrimestre)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_002_simulacroEmergencia_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Plan de Emergencia ¿Visado por personal calificado?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_003_planEmergenciaVisado_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Extintores</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_004_extintores_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Señalética</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_005_senaletica_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vías de Evacuación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_006_viaEvacuacion_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr style="display:none;">
                            <td class="etiqCampo3">Capacitación Personal en Emergencia y Primeros Auxilios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonal_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Capacitación Personal en Emergencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonalemergencia_comp002" class="form-control textCampoSel1" onchange="EvaluaCapacitacionPersonalEmergenciaPrimerAux();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Capacitación Personal en Primeros Auxilios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonalprimerosAux_comp002" class="form-control textCampoSel1" onchange="EvaluaCapacitacionPersonalEmergenciaPrimerAux();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr style="display:none;">
                            <td class="etiqCampo3">Sanitización, Desratización y Fumigación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sanitización</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion__comp002" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Desratización</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_desratizacion_comp002" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Fumigación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_fumigacion_comp002" class="form-control textCampoSel1" onchange="EvaluaSanitizacion();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Sistema Eléctrico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_009_sistemaElectrico_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Zona de Seguridad Demarcada</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_010_zonaSeguridad_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="seguridad_011_observaciones_comp002" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                    </table>
            </div>   

            <div role="tabpanel" class="tab-pane fade in" id="salud_comp002">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_001_NNA_inscritosCESFAM_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental con Diagnóstico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_002_NNA_problematicaSaludMental_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental sin Diagnóstico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_003_NNA_problematicaSaludMentalsinDiag_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA Inscritos con Enfermedad Crónica</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_004_NNA_inscritosEnferCronica_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA a la espera de Trasplante</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_015_NNA_EsperaTransplantes_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA Trasplantados</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_016_NNA_Transplantados_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">N° de NNA Inscritos con Situación de Discapacidad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_005_NNA_Discapacidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA recibiendo tratamiento farmacológico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_006_NNA_inscritosProblemSaludRecibeMedica_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud en Tratamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_007_NNA_problematicaSaludenTratamiento_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Consumo sólo de Drogas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_008_NNA_consumoDrogas_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con consumo sólo de Alcohol</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_008_NNA_consumoAlcohol_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con consumo de Alcohol y Drogas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_017_consumoDrogasyAlcohol_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>


                        <tr>
                            <td class="etiqCampo3">¿Cuenta con espacio adecuado para el resguardo de medicamentos?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_resguardoMedicamentos_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>                    
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con inventario de medicamentos?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_inventarioMedicamentos_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">¿Cuenta con Registro de Medicamentos Administrados a los NNA?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_registroMedicamentoAdmin_a_NNA_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con Protocolo para la Administración de Medicamentos a los NNA?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_010_sel_protocoloAdmin_Medica_a_NNA_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con control al día de Niño Sano?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_nino_sano_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con control al día de Adolescente Sano?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_adolescente_sano_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">¿Existe Control Anual Ginecológico en los Adolescentes?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_ginecologicoAdolescente_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Existen adolescentes que se hayan negado a Control Ginecológico?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_012_sel_adolescenteNiegaControlGineco_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Adolescentes Embarazadas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_013_sel_adolescenteEmbarazada_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid; white-space: nowrap;"><select id="salud_014_sel_adolescenteEmbarazadaControlalDia_comp002" disabled="disabled" class="textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0" selected="selected">NO</option></select> - CU&Aacute;NTAS:&nbsp;<input id="salud_015_adolescenteEmbarazadaControlalDia_cantidad_comp002" type="text" class="textCampo3" maxlength="3" placeholder="" onkeyup="EvaluaCuantasAdolescentesControlAldia(this);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="salud_016_observaciones_comp002" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSalud" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Salud" onclick="GrabarAntecedentes(6);">Grabar Antecedente de Salud</button>&nbsp;<button id="btn_FichaGenera_06" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>           

            <div role="tabpanel" class="tab-pane fade in" id="educacion_comp002">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_001_NNA_matriculados_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">N° de NNA que si asisten a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_001_NNA_asisten_colegio_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que no asisten a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_002_NNA_NO_asisten_colegio_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Motivo de inasistencia de NNA a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_002_NNA_NO_asisten_colegio_cantidad_motivo_comp002" class="form-control textCampoSel1" onchange="MotivoInasistencia(this);"><option value="-1"></option><option value="1">Salud</option><option value="2">Rechazo</option><option value="3">Suspensión</option><option value="4">Otro</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">N° de NNA con Retraso o Rezago Escolar</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_003_NNA_retrasoEscolar_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Matrícula Cancelada</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_004_NNA_matriculaCancelada_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que Asiste a Educación Diferencial</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_005_NNA_asisten_colegioDiferencial_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que Asiste a Educación de Nivelación de Estudios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_006_NNA_asisten_colegioNivelacion_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA inscritos para exámenes libres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_006_NNA_examenesLibres_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Espacios Destinados a Estudios y Desarrolo de Tareas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_007_sel_EspacioEstudio_y_Tareas_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Material Bibliográfico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_008_sel_materialBibliiografico_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Computadores</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_009_sel_computadores_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso Controlado a Internet</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_010_sel_AccesoControladoInternet_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>                                                                                              
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="educacion_011_observaciones_comp002" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesEducacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Educación" onclick="GrabarAntecedentes(7);">Grabar Antecedente de Educación</button>&nbsp;<button id="btn_FichaGenera_07" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>   

            <div role="tabpanel" class="tab-pane fade in" id="alimentacion_comp002">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Alimentación</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cuenta con Registro de Honorarios de Entrega de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">“¿Cuenta con minuta alimentaria?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existencia de Menús Especiales</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_003_sel_menuEspeciales_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con minuta alimentaria aprobada?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existen Certificados Sanitarios de las Manipuladoras</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_005_sel_certifSanitarioManipuladores_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr style="display:none;">
                            <td class="etiqCampo3">Almacenamiento de Alimentos y Estado de Conservación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Almacenamiento de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_AlmacenaAlimento_existe_comp002" class="form-control textCampoSel1" onchange="EvaluaAlmacenaAlimentoEstadoConserva();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Estado de Conservación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_EstadoConserva_existe_comp002" class="form-control textCampoSel1" onchange="EvaluaAlmacenaAlimentoEstadoConserva();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td></td>
                            <td class="etiqCampo2">ESPECIFIQUE</td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">N° de Comidas Entregadas de Lunes a Viernes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_007_comidas_lunes_a_viernes_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de Comidas Entregadas Sábado, Domingo y Festivos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_008_comidas_sabado_domingo_fest_cantidad_comp002" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="alimentacion_009_observacion_comp002" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesAlimentacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Alimentación" onclick="GrabarAntecedentes(8);">Grabar Antecedente de Alimentación</button>&nbsp;<button id="btn_FichaGenera_08" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>   

            <div role="tabpanel" class="tab-pane fade in" id="gestion_residencia_comp002">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes de Gestión de Residencia</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3" style="width:100%;">Cuenta con catastro de redes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_001_sel_catastroRedes_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr style="display:none;">
                            <td class="etiqCampo3">Existe Protocolo y/o Registro de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_protocoloVisitas_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_protoVisitas_existe_comp002" class="form-control textCampoSel1" onchange="EvaluaProtocoloyRegistroVisitas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existe Registro de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_regisVisitas_existe_comp002" class="form-control textCampoSel1" onchange="EvaluaProtocoloyRegistroVisitas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 

                        <tr>
                            <td class="etiqCampo3">Cuenta con Protocolo de Acogida del NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_003_sel_protocoloAcogida_NNA_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Existen Actividades de Autocuidado para el Equipo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_004_sel_activi_autocuidadoEquipo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">Cuenta con Protocolo de Actuación de Intervención en Crisis</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  

                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Información para NNA sobre la Normativa de Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Convivencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_007_sel_protocoloConvivencia_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Presentación de Reclamos y Quejas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_008_sel_protocolo_PresentaReclamo_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo y Espacios para la escucha de los NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Vinculación entre Residencias (para hermanos)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_010_sel_vinculacionResidencias_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Cuenta con Proceso de Formación Permanente para el personal</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_011_sel_ProcesoFormacion_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Apadrinamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_012_sel_protocoloApadrinamiento_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Derivación o Traslado a Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_013_sel_protocoloTrasladoResid_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de para el Egreso del NNA (Sistema Residencial)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_014_sel_protocoloEgreso_NNA_existe_comp002"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo para Derivación a Red Salud</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr style="display:none;">
                            <td class="etiqCampo3">Actividades de Habilitación Laboral y Preparación para la Vida Independiente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_habilitacionLaboral_existe_comp002" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Existen Actividades de Habilitación Laboral?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_habilitaLaboral_comp002" class="form-control textCampoSel1" onchange="EvaluaActividadHabilitaLaboralyVidaIndependiente();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <tr>
                            <td class="etiqCampo3">¿Existe proceso para la vida independiente?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_vidaInpendiente_comp002" class="form-control textCampoSel1" onchange="EvaluaActividadHabilitaLaboralyVidaIndependiente();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_017_observaciones_comp002" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                    </table>
                <br />
            </div>   
        </div>
</div>
</div><!--FIN DIV COLAPSABLE FICHA PADRE COMPARA002-->

<!--DIV COLAPSABLE COMPARATIVAS INGRESO RESIDENCIA vs PJUD-->
<div class="well">
<a id="A30" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivComparativoFichas" aria-expanded="false" aria-controls="DivComparativoFichas" onclick="AnalizaEstadoHabilitacionCompare('INFORME_COMPARATIVA');" >
    <span id="Span78"><b>VER DETALLE COMPARATIVO ENTRE FICHAS SELECCIONADAS</b></span>
    <span id="Span79" class="glyphicon glyphicon-triangle-top"></span>
    <img id="imgSeccion_CompFichas" src="../images/loader_ficharesidencial.gif" style="float:right;width:30px;display:none;" />
</a>
<span id="lblmsgA30" style="font-size:12px;display:none;">Por favor espere la carga de datos&nbsp;&nbsp;</span>
<div id="DivComparativoFichas" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
    <br />
    <span style="font-size:13px;color:#1071c3 !important;">NOTA: Sólo se despliegan los datos con diferencias entre las fichas seleccionadas.</span>
    <br /><br />

    <div class="well" id="div_compara_antecedentes_generales_" style="display:none;">
        <a id="A31" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo01_" aria-expanded="false" aria-controls="DivFichaComparativo01_">
            <span id="Span81" class="titseccion">ANTECEDENTES GENERALES</span>
            <span id="Span82" class="glyphicon glyphicon-triangle-top"></span>
        </a>
        <div id="DivFichaComparativo01_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>

    </div>

    <div class="well" id="div_compara_antecedentes_poblacion_capacidad_" style="display:none;">
        <a id="A32" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo02_" aria-expanded="false" aria-controls="DivFichaComparativo02_">
            <span id="Span83" class="titseccion">ANTECEDENTE POBLACIÓN  Y CAPACIDAD</span>
            <span id="Span84" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo02_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_dotacion_" style="display:none;">
        <a id="A33" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo03_" aria-expanded="false" aria-controls="DivFichaComparativo03_">
            <span id="Span85" class="titseccion">ANTECEDENTE DOTACIÓN DE PERSONAL</span>
            <span id="Span86" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo03_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_infraestructura_" style="display:none;">
        <a id="A34" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo04_" aria-expanded="false" aria-controls="DivFichaComparativo04_">
            <span id="Span87" class="titseccion">ANTECEDENTE INFRAESTRUCTURA</span>
            <span id="Span88" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo04_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_seguridad_" style="display:none;">
        <a id="A35" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo05_" aria-expanded="false" aria-controls="DivFichaComparativo05_">
            <span id="Span89" class="titseccion">ANTECEDENTE SEGURIDAD</span>
            <span id="Span90" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo05_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_salud_" style="display:none;">
        <a id="A36" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo06_" aria-expanded="false" aria-controls="DivFichaComparativo06_">
            <span id="Span91" class="titseccion">ANTECEDENTE SALUD</span>
            <span id="Span92" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo06_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_educacion_" style="display:none;">
        <a id="A37" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo07_" aria-expanded="false" aria-controls="DivFichaComparativo07_">
            <span id="Span93" class="titseccion">ANTECEDENTE EDUCACIÓN</span>
            <span id="Span94" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo07_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_alimentacion_" style="display:none;">
        <a id="A38" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo08_" aria-expanded="false" aria-controls="DivFichaComparativo08_">
            <span id="Span95" class="titseccion">ANTECEDENTE ALIMENTACIÓN</span>
            <span id="Span96" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo08_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_gestionresidencia_" style="display:none;">
        <a id="A39" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo09_" aria-expanded="false" aria-controls="DivFichaComparativo09_">
            <span id="Span97" class="titseccion">ANTECEDENTE GESTIÓN RESIDENCIA</span>
            <span id="Span98" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo09_" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>
</div>        
</div>
</div>

<div id="frmwork" style="display:none;">

<!--DIV COLAPSABLE FICHA PADRE -->
<div class="well">
<a id="A1" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaPadre" aria-expanded="false" aria-controls="DivFichaPadre" onclick="AnalizaEstadoHabilitacion('FICHA_PADRE');">
    <span id="Span1"><b>VER DETALLE REGISTRO DE FICHA RESIDENCIAL</b></span>
    <span id="Span2" class="glyphicon glyphicon-triangle-top"></span>  
    <img id="imgSeccionObs001" src="../images/loader_ficharesidencial.gif" style="float:right;width:30px;display:none;" />
</a>
<span id="lblmsgA1" style="font-size:12px;display:none;">Por favor espere la carga de datos&nbsp;&nbsp;</span>
<div id="DivFichaPadre" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse">

        <span id="folio_pendiente" style="font-size:11px;font-weight:600;color:#3b3939;"></span><span id="periodo_ficha" style="font-size:11px;font-weight:600;color:#3b3939;"></span>
        <ul class="nav nav-tabs tab-fixed-height nav-justified">
            <li class="active"><a id="LI_general" data-toggle="tab" href="#generales">Antecedentes Generales</a></li>
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
                        <tr >
                            <td class="etiqCampo" >FOLIO FICHA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="idcodfichaOBS" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr >
                            <td class="etiqCampo" >Institución</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_000_sel_Institucion" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo">Proyecto</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_001_sel_proyecto" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
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
                    <table id="tbl_NNA_abandonados" class="table" style="width:100%;">
                        <tr><td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de NNA en Completo Abandono</span></td></tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                        </tr>  
                    </table>
                    <table id="tbl_adolescente_con_hijos" class="table">
                        <tr>
                            <td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de Adolescente con Hijos Lactantes</span></td>
                        
                        </tr> 
                        <tr>
                            <td class="etiqCampo2" style="width: 20px;">N°</td>
                            <td class="etiqCampo2" style="width: 50px;">RUT</td>
                            <td class="etiqCampo2">NNA</td>
                            <td class="etiqCampo2">RIT</td>
                            <td class="etiqCampo2">TRIBUNAL</td>
                        </tr>
                    </table>
                    <!--
                    <div style="text-align:center;">
                        <button id="btn_AgregarNNAabandono" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para agregar detalle de NNA en abandono" onclick="AgregarNNA_en_Residencia(1);">Agregar</button>
                        <button id="btn_EliminarAllNNAabandono" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para eliminar todo el detalle de NNA en abandono" onclick="EliminarTodoDetalleNNA(1);">Eliminar todo</button>
                    </div>
                    -->
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

                    <!--
                    <div style="text-align:center;">
                        <button id="btn_AgregarNNAadolescenteConHijo" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para agregar detalle de NNA en abandono" onclick="AgregarNNA_en_Residencia(2);">Agregar</button>
                        <button id="btn_EliminaAllNNAadolescenteConHijo" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para eliminar todo el detalle de NNA adolescente con hijos" onclick="EliminarTodoDetalleNNA(2);">Eliminar todo</button>
                    </div><br />
                    <div style="text-align:center;"><button id="btn_antecedentesGenerales" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes generales " onclick="GrabarAntecedentes(1);">Grabar Antecedente Generales</button>&nbsp;<button id="btn_FichaGenera_01" disabled="disabled" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></div><br />
                    -->
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_006_programa_apadrinimiento" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr> 
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesPoblacionCapacidad" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Poblacion y Capacidad " onclick="GrabarAntecedentes(2);">Grabar Antecedente de Poblacion y Capacidad</button>&nbsp;<button id="btn_FichaGenera_02" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_002_sel_director_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_003_sel_director_tipo_jornada" class="form-control textCampoSel1" disabled="disabled"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_004_sel_director_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Asistente Social:</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_005_sel_asistente_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_006_sel_asistente_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_007_sel_asistente_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_008_sel_asistente_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_009_sel_psicologo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_010_sel_psicologo_cantidad" class ="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_011_sel_psicologo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_012_sel_psicologo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Enfermero(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_013_sel_enfermero_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_014_sel_enfermero_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_015_sel_enfermero_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_016_sel_enfermero_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Auxiliar de Enfermería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_017_sel_auxenfermero_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_018_sel_auxenfermero_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_019_sel_auxenfermero_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_020_sel_auxenfermero_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Médico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_021_sel_medico_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_022_sel_medico_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_023_sel_medico_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_024_sel_medico_horas_semanales"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psiquiatra</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_025_sel_psiquiatra_existe"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_026_sel_psiquiatra_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_027_sel_psiquiatra_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_028_sel_psiquiatra_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Terapeuta Ocupacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_029_sel_terapeuta_ocup_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_030_sel_terapeuta_ocup_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_031_sel_terapeuta_ocup_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_032_sel_terapeuta_ocup_horas_semanales"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Kinesiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_033_sel_kinesiologo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_034_sel_kinesiologo_cantidad"class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_035_sel_kinesiologo_tipo_jornada"class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_036_sel_kinesiologo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Nutricionista</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_037_sel_nutricionista_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_038_sel_nutricionista_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_039_sel_nutricionista_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_040_sel_nutricionista_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Fonoaudiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_041_sel_fonoaudiologo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_042_sel_fonoaudiologo_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_043_sel_fonoaudiologo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_044_sel_fonoaudiologo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Profesor(a) de Educación Física</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_045_sel_profesorEducaFisica_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_046_sel_profesorEducaFisica_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_047_sel_profesorEducaFisica_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_048_sel_profesorEducaFisica_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicopedagogo(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_049_sel_psicopedagogo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_050_sel_psicopedagogo_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_051_sel_psicopedagogo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_052_sel_psicopedagogo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de Párvulos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_053_sel_educadoraParvulos_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_054_sel_educadoraParvulos_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_055_sel_educadoraParvulos_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_056_sel_educadoraParvulos_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de trato directo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_057_sel_educadoraTratoDirecto_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_058_sel_educadoraTratoDirecto_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_059_sel_educadoraTratoDirecto_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_060_sel_educadoraTratoDirecto_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Manipulador(a) de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_061_sel_manipuladorAlimentos_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_062_sel_manipuladorAlimentos_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_063_sel_manipuladorAlimentos_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_064_sel_manipuladorAlimentos_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Administrativo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_065_sel_apoyoAdministrativo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_066_sel_apoyoAdministrativo_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_067_sel_apoyoAdministrativo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_068_sel_apoyoAdministrativo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Aseo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_069_sel_personalAseo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_070_sel_personalAseo_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_071_sel_personalAseo_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_072_sel_personalAseo_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_073_sel_personalLavanderia_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_074_sel_personalLavandería_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_075_sel_personalLavandería_tipo_joranada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_076_sel_personalLavandería_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Monitores Talleristas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_077_sel_monitoresTalleristas_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_078_sel_monitoresTalleristas_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_079_sel_monitoresTalleristas_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_080_sel_monitoresTalleristas_horas_semanales"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Alumnos en Práctica (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_081_sel_alumnosPractica_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_082_sel_alumnosPractica_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_083_sel_alumnosPractica_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_084_sel_alumnosPractica_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Voluntario (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_085_sel_apoyoVoluntario_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_086_sel_apoyoVoluntario_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_087_sel_apoyoVoluntario_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_088_sel_apoyoVoluntario_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Otros (Especificar en Observaciones)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_089_sel_Otros_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_090_sel_Otros_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_091_sel_Otros_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_092_sel_Otros_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Personal con Licencia Médica?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_093_sel_PersonalLicenciaMedica_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_094_sel_PersonalLicenciaMedica_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_096_sel_PersonalLicenciaMedica_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal con Licencia ¿Cuenta con Suplente?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad" class="form-control textCampoSel2" /></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="5" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="dotacion_101_Observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_001_ofi_admin_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_002_ofi_admin_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(1);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Reuniones</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_003_salaReuniones_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_004_salaReuniones_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(2);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Recepción</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_005_salaRecepcion_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_006_salaRecepcion_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(3);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacio de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_007_espacioVisitas_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_008_espacioVisitas_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(4);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala Multiuso para Talleres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_009_salaMultiuso_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_010_salaMultiuso_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(5);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Estar/Living</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_011_salaEstar_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_012_salaEstar_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(6);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Unidad de Salud</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_013_enfermeria_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_014_enfermeria_cantidad" class="form-control textCampoSel1"  onchange="HabilitaInfraestructura(7);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacios Recreacionales</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_015_espacioRecreacional_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_016_espacioRecreacional_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(8);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Áreas Verdes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_019_areasVerdes_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_020_areasVerdes_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(9);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cocina</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_021_cocina_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_022_cocina_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(10);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Comedor</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_023_comedor_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_024_comedor_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(11);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_025_Lavanderia_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_026_Lavanderia_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(12);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Dormitorio NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_027_Dormitorio_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_028_Dormitorio_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(13);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Camas NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_029_CamasNNA_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_030_CamasNNA_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(14);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Closet, Lockers</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_031_closetLocker_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_032_closetLocker_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(15);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños para Público</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_033_banosPublico_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_034_banosPublico_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(16);" /></td>
                        </tr>

                        <tr style="display:none;">
                            <td class="etiqCampo3">Baños NNA Adecuados y Suficientes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNAadecuados_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_036_banosNNAadecuados_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(17);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA en Funcionamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Funcionamiento_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Funcionamiento_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(19);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de acuerdo a Normativa</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_AcuerdoNormativa_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_AcuerdoNormativa_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(20);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de hombres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Hombre_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Hombre_cant" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(21);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA de mujeres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_Mujer_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_Mujer_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(22);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA mixtos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNA_mixto_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_035_banosNNA_mixto_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(23);" /></td>
                        </tr> 

                        <tr style="display:none;">
                            <td class="etiqCampo3">Duchas para NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_038_duchasNNA_cantidad" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(18);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                        </tr>
                        <tr> 
                            <td class="etiqCampo3">Duchas para NNA en Funcionamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_funcionamiento_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_funcionamiento_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(24);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para  NNA de acuerdo a Normativa</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_normativa_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_normativa_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(25);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA de hombres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_hombres_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_hombres_cant" class="form-control textCampoSel1"onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"  onkeyup="HabilitaInfraestructura(26);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA de mujeres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_mujeres_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mujeres_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(27);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA mixtas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_mixtos_existe" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="Infraest_037_duchasNNA_mixtos_cant" class="form-control textCampoSel1" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="HabilitaInfraestructura(28);" /></td>
                        </tr> 

                        <tr>
                            <td class="etiqCampo3">Ambientación Acorde a la Población</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_039_ambientacionAcorde_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vestuario adecuado de acuerdo a estación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioAdecuado_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vestuario personalizado para el NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioPersonalizado_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Útiles de Aseo Personal para los NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_041_utilesAseoPersonalNNA_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Agua Caliente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_042_aguaCaliente_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr style="display:none;">
                            <td class="etiqCampo3">Estado Calefón y Llaves de Gas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_estadoCalefonLlavesGas_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cumple Normativa Calefón</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_CumpleNormaCalefon" class="form-control textCampoSel1" onchange="EvaluaCumpleNormaCalefonLlaveGas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cumple Normativa llave de gas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_CumpleNormaLlaveGas" class="form-control textCampoSel1" onchange="EvaluaCumpleNormaCalefonLlaveGas();"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Sistema de calefacción (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_044_sistemaCalefaccion_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Ventilación adecuada del inmueble</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_045_ventilacionAdecuada_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso para personas con situación de Discapacidad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_046_AccesoDiscapacitados_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Instalaciones Habilitadas para Discapacitados (Baños, ramplas, etc.)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_047_InstalacionesHabilitadasDiscapacitados_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="Infraest_049_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="3" style="text-align:center;"><button id="btn_antecedentesInfraestructura" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Recursos Materiales, Infraetructura y Equipamiento" onclick="GrabarAntecedentes(4);">Grabar Antecedente de Recursos Materiales, Infraetructura y Equipamiento</button>&nbsp;<button id="btn_FichaGenera_04" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
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
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="seguridad_011_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSeguridad" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Seguridad" onclick="GrabarAntecedentes(5);">Grabar Antecedente de Seguridad</button>&nbsp;<button id="btn_FichaGenera_05" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_010_sel_protocoloAdmin_Medica_a_NNA" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
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
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="salud_016_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSalud" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Salud" onclick="GrabarAntecedentes(6);">Grabar Antecedente de Salud</button>&nbsp;<button id="btn_FichaGenera_06" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_002_NNA_NO_asisten_colegio_cantidad" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Motivo de inasistencia de NNA a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_002_NNA_NO_asisten_colegio_cantidad_motivo" class="form-control textCampoSel1" onchange="MotivoInasistencia(this);"><option value="-1"></option><option value="1">Salud</option><option value="2">Rechazo</option><option value="3">Suspensión</option><option value="4">Otro</option></select></td>
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_009_sel_computadores_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso Controlado a Internet</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_010_sel_AccesoControladoInternet_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>                                                                                              
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="educacion_011_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesEducacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Educación" onclick="GrabarAntecedentes(7);">Grabar Antecedente de Educación</button>&nbsp;<button id="btn_FichaGenera_07" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
            </div>   

            <div role="tabpanel" class="tab-pane fade in" id="alimentacion">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Alimentación</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cuenta con Registro de Honorarios de Entrega de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_001_sel_registroHonorarioEntregaAlimento_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>  
                        <tr>
                            <td class="etiqCampo3">“¿Cuenta con minuta alimentaria?</td>
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
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="alimentacion_009_observacion" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesAlimentacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Alimentación" onclick="GrabarAntecedentes(8);">Grabar Antecedente de Alimentación</button>&nbsp;<button id="btn_FichaGenera_08" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_008_sel_protocolo_PresentaReclamo_existe" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
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
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_017_observaciones" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
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
                    <!--<div style="text-align:center;"><button id="btn_antecedentesGestionResidencia" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Gestión de Residencia" onclick="GrabarAntecedentes(9);">Grabar Antecedente de Gestión de Residencia</button>&nbsp;<button id="btn_FichaGenera_09" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></div>-->
                <br />
            </div>   
        </div>


</div>
</div><!--FIN DIV COLAPSABLE FICHA PADRE -->

<!--DIV COLAPSABLE FICHA HIJA PJUD-->
<div class="well">

<a id="A2" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaHijo" aria-expanded="false" aria-controls="DivFichaHijo" onclick="AnalizaEstadoHabilitacion('INFORME_VISITA');">
    <span id="Span3"><b>VER DETALLE INFORME DE VISITA DE JUEZ A CENTRO RESIDENCIAL (FICHA RESIDENCIAL PJUD)</b></span>
    <span id="Span4" class="glyphicon glyphicon-triangle-top"></span>
    <img id="imgSeccionObs002" src="../images/loader_ficharesidencial.gif" style="float:right;width:30px;display:none;" />
</a>
<span id="lblmsgA2" style="font-size:12px;display:none;">Por favor espere la carga de datos&nbsp;&nbsp;</span>
<div id="DivFichaHijo" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">

    <span id="Span9" style="font-size:11px;font-weight:600;color:#3b3939;">&nbsp;</span>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade in active" id="generales_visita_pjud">
                <table class="table">
                    <tr>
                        <td colspan="2" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Antecedentes Visita</span></td>

                    </tr>
                    <tr >
                        <td class="etiqCampo" >Juez Visitante</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_001_juez_visita_pjud" class="form-control textCampo" placeholder="" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr >
                        <td class="etiqCampo" >Consejero visita</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_002_consejero_visita_pjud" class="form-control textCampo" placeholder="" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Corte de apelaciones</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_003_corte_apelaciones_pjud" class="form-control textCampo" placeholder="" style="width:95%" readonly="true" /></td>
                    </tr>

                    <tr>
                        <td class="etiqCampo">Tribunal de familia</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_004_tribunal_familia_pjud" class="form-control textCampo" placeholder="" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Persona 1 residencia</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_005_persona1_residencia_pjud" class="form-control textCampo" placeholder="" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Persona 2 residencia</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_006_persona2_residencia_pjud" type="text" class="form-control textCampo" placeholder="" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Fecha visita anterior</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_007_fecha_visita_anterior_pjud" type="text" class=" form-control textCampo" placeholder="" readonly="true" style="width:100px" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Fecha visita actual</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_008_fecha_visita_actual_pjud" class="form-control textCampo" placeholder="" readonly="true" style="width:100px" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Hora inicio visita (formato hh:mm)</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_009_hora_inicio_visita_pjud" class="form-control textCampo" placeholder="" readonly="true" style="width:100px;" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Hora t&eacute;rmino visita (formato hh:mm)</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_010_hora_termino_visita_pjud" type="text" class="form-control textCampo" placeholder="" readonly="true" style="width:100px" /></td>
                    </tr>
                    <tr><td colspan="2"><span id="span8" style="color:red;font-size:12px;text-align:left;"></span></td></tr>
                </table>
        </div>
    </div>

    <br/>
    <a id="A6" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#divFicha_PJUD_Detalle" aria-expanded="false" aria-controls="divFicha_PJUD_Detalle">
    <span id="Span12">VER INFORME DE VISITA (FICHA RESIDENCIAL PJUD)</span>
    <span id="Span13" class="glyphicon glyphicon-triangle-top"></span>
    </a>
    <span id="Span14" style="font-size:11px;font-weight:600;color:#3b3939;">&nbsp;</span>
    <div id="divFicha_PJUD_Detalle" class="panel-collapse collapse"  aria-expanded="false">

    <span id="Span7" style="font-size:11px;font-weight:600;color:#3b3939;">&nbsp;</span>
    <ul class="nav nav-tabs tab-fixed-height nav-justified">
    <li class="active"><a id="LI_general_2" data-toggle="tab" href="#generales_pjud">Antecedentes Generales</a></li>
    <li><a data-toggle="tab" href="#poblacion_pjud">Antecedentes de Población y Capacidad</a></li>
    <li><a data-toggle="tab" href="#dotacion_pjud">Antecedentes de Dotación de Personal</a></li>
    <li><a data-toggle="tab" href="#infraestructura_pjud">Antecedentes Infraestructura</a></li>
    <li><a data-toggle="tab" href="#seguridad_pjud">Antecedentes de Seguridad</a></li>
    <li><a data-toggle="tab" href="#salud_pjud">Antecedentes de Salud</a></li>
    <li><a data-toggle="tab" href="#educacion_pjud">Antecedentes de Educación</a></li>
    <li><a data-toggle="tab" href="#alimentacion_pjud">Antecedentes de Alimentación</a></li>
    <li><a data-toggle="tab" href="#gestion_residencia_pjud">Antecedentes de Gestión de Residencia</a></li>
    </ul>



    <div class="tab-content" >
        <div role="tabpanel" class="tab-pane fade in active" id="generales_pjud">
                <table class="table">
                    <tr>
                        <td colspan="2" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Antecedentes Generales</span></td>

                    </tr>
                    <tr >
                        <td class="etiqCampo" >FOLIO FICHA ASOCIADA PJUD</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="idcodfichaOBS_pjud" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr >
                        <td class="etiqCampo" >Institución</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_000_sel_Institucion_pjud" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Proyecto</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_001_sel_proyecto_pjud" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                    </tr>

                    <tr>
                        <td class="etiqCampo">Tipo de organismo</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_002_tipoOrganismo_pjud" class="form-control textCampo" placeholder="Tipo de organismo" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Modelo de Intervención</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_003_modeloIntervencion_pjud" class="form-control textCampo" placeholder="Modelo de Intervención" style="width:95%" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Dirección</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_004_direccion_pjud" type="text" class="form-control textCampo" placeholder="Dirección de residencia" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Teléfonos</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_005_telefonos_pjud" type="text" class=" form-control textCampo" placeholder="Teléfonos" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Región</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_006_region_pjud" class="form-control textCampo" placeholder="Región" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Comuna</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_007_comuna_pjud" class="form-control textCampo" placeholder="Comuna" style="width:95%" readonly="true"/></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Correo electrónico</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_008_email_pjud" type="text" class="form-control textCampo" placeholder="Correo electrónico" readonly="true"/></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Director(a) Proyecto</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_009_directorProyecto_pjud" type="text" class="form-control textCampo" placeholder="Director(a) Proyecto" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">RUT Director(a) Proyecto</td>
                        <td style="border-bottom: 1px #fff solid;"><input id="general_010_rut_director_proyecto_pjud" type="text" class="form-control textCampoRut" placeholder="RUT Director(a)" readonly="true" /> <!---<input type="text" id="general_010_dv_rut_director_proyecto" class="textCampoDvRut" placeholder="9" onblur="AnalizaRUT(1);" onkeypress="return ValidaIngresoDV(this.value, event);" />--></td>
                    </tr>
                    <tr><td colspan="2"><span id="spanRUTerroneoGral_pjud" style="color:red;font-size:12px;text-align:left;"></span></td></tr>
                </table>
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
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_012_pobvig_masculina_pjud" type="text" class="form-control textCampo3"  maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_013_pobvig_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(1);"/></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="pobvig_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Plazas Convenidas con SENAME (En caso de tener subvención)</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_014_plazaConv_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_015_plazaConv_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(2);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="plazaConv_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Otras Plazas no subvencionadas por Sename</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_016_otrasPlazas_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3"  placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_017_otrasPlazas_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(3);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="otrasPlazas_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total NNA Presentes</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_018_totalNNApresent_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_019_totalNNApresent_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(4);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNApresent_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total NNA en Acercamiento Familar</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_020_totalNNAacercFamilia_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_021_totalNNAacercFamilia_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(5);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAacercFamilia_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total de Residentes Mayores de Edad</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_022_totalResidenMayor_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_023_totalResidenMayor_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(6);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalResidenMayor_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Abandono de Sistema</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_024_abandonoSist_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_025_abandonoSist_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(7);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="abandonoSist_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Hospitalizados</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_026_hospitalizados_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_027_hospitalizados_femenina_pjud"type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(8);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="hospitalizados_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total NNA ingresados con Artículo 80 Bis</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_028_totalNNAart80bis_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_029_totalNNAart80bis_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(9);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAart80bis_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total NNA en completo abandono decretado por el o la  Juez(a) (especificar)</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_030_totalNNAabandono_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_031_totalNNAabandono_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" readonly="true" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(10);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNAabandono_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true" /></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total de adolescentes con hijos recién nacidos o lactantes (especificar)</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_038_totalNNA_adoslecente_chijo_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_039_totalNNA_adoslecente_chijo_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" readonly="true" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(14);"/></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_adoslecente_chijo_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                    </tr>
                </table>
                <table id="tbl_NNA_abandonados_pjud" class="table" style="width:100%;">
                    <tr><td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de NNA en Completo Abandono</span></td></tr>
                    <tr>
                        <td class="etiqCampo2" style="width: 20px;">N°</td>
                        <td class="etiqCampo2" style="width: 50px;">RUT</td>
                        <td class="etiqCampo2">NNA</td>
                        <td class="etiqCampo2">RIT</td>
                        <td class="etiqCampo2">TRIBUNAL</td>
                    </tr>
                </table>
                <table id="tbl_adolescente_con_hijos_pjud" class="table">
                    <tr>
                        <td colspan="5" style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Detalle de Adolescente con Hijos Lactantes</span></td>

                    </tr>
                    <tr>
                        <td class="etiqCampo2" style="width: 20px;">N°</td>
                        <td class="etiqCampo2" style="width: 50px;">RUT</td>
                        <td class="etiqCampo2">NNA</td>
                        <td class="etiqCampo2">RIT</td>
                        <td class="etiqCampo2">TRIBUNAL</td>
                    </tr>
                </table>
                <!--
                <div style="text-align:center;">
                    <button id="btn_AgregarNNAabandono" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para agregar detalle de NNA en abandono" onclick="AgregarNNA_en_Residencia(1);">Agregar</button>
                    <button id="btn_EliminarAllNNAabandono" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para eliminar todo el detalle de NNA en abandono" onclick="EliminarTodoDetalleNNA(1);">Eliminar todo</button>
                </div>
                -->
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
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_032_totalNNA_suscep_adopcion_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_033_totalNNA_suscep_adopcion_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(11);"/></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_suscep_adopcion_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total de NNA con enlace de adopción (considerar sólo población de NNA declarados susceptible de ser adoptados)</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_034_totalNNA_enlace_adopcion_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_035_totalNNA_enlace_adopcion_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(12);"/></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_enlace_adopcion_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Total de NNA con causa iniciada por susceptibilidad de adopción (sin sentencia)</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_036_totalNNA_causaini_adopcion_masculina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);" /></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="general_037_totalNNA_causaini_adopcion_femenina_pjud" type="text" class="form-control textCampo3" maxlength="3" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" onkeyup="Sumar(13);"/></td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="totalNNA_causaini_adopcion_total_pjud" type="text" class="form-control textCampo3" placeholder="0" readonly="true"/></td>
                    </tr>

                </table>

                <table class="table">
                    <tr>
                        <td class="etiqCampo3">Observaciones</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="general_040_observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>
                </table>
                <table class="table">
                    <tr>
                        <td class="etiqCampo3">Respuesta SENAME</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="general_041_respuesta_SENAME_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>
                </table>
                <!--
                <div style="text-align:center;">
                    <button id="btn_AgregarNNAadolescenteConHijo" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para agregar detalle de NNA en abandono" onclick="AgregarNNA_en_Residencia(2);">Agregar</button>
                    <button id="btn_EliminaAllNNAadolescenteConHijo" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para eliminar todo el detalle de NNA adolescente con hijos" onclick="EliminarTodoDetalleNNA(2);">Eliminar todo</button>
                </div><br />
                <div style="text-align:center;"><button id="btn_antecedentesGenerales" disabled="disabled" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes generales " onclick="GrabarAntecedentes(1);">Grabar Antecedente Generales</button>&nbsp;<button id="btn_FichaGenera_01" disabled="disabled" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></div><br />
                -->
        </div>

        <div role="tabpanel" class="tab-pane fade in" id="poblacion_pjud">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Población y Capacidad</span></td>
                        </tr>
                    <tr>
                        <td class="etiqCampo">Residencia con Subvención SENAME</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_001_sel_reside_con_subven_pjud" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Sexo que atiende la Residencia</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_002_sel_sexo_atendidos_pjud" class="form-control textCampo"><option value="0"></option><option value="1">Femenino</option><option value="2">Masculino</option><option value="3">Mixto</option></select></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Rango etáreo de Atención</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_003_sel_rango_etareo_predomina_pjud" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">0 a 18</option><option value="3">6 a 12</option><option value="4">6 a 18</option><option value="5">12 a 18</option><option value="6">Más de 18</option></select></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Rango etáreo Predominante</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_004_poblacion_vigente_pjud" class="form-control textCampo"><option value="0"></option><option value="1">0 a 6</option><option value="2">6 a 12</option><option value="3">12 a 18</option><option value="4">Más de 18</option></select></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo">Tipo de Vulneración más Frecuente</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><input id="poblacion_005_tipo_vulneracion_mas_frecuente_pjud" type="text" class="form-control textCampo" placeholder="" /></td>
                    </tr>
                    <tr style="display:none;">
                        <td class="etiqCampo">Programa de Apadrinamiento</td>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><select id="poblacion_006_programa_apadrinimiento_pjud" class="form-control textCampo"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                    </tr>
                    <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesPoblacionCapacidad" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Poblacion y Capacidad " onclick="GrabarAntecedentes(2);">Grabar Antecedente de Poblacion y Capacidad</button>&nbsp;<button id="btn_FichaGenera_02" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                </table>
                <table class="table">
                    <tr>
                        <td class="etiqCampo3">Observaciones</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="poblacion_007_observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>
                </table>
                <table class="table">
                    <tr>
                        <td class="etiqCampo3">Respuesta SENAME</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="poblacion_008_respuesta_SENAME_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>
                </table>
        </div>

         <div role="tabpanel" class="tab-pane fade in" id="dotacion_pjud">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_001_sel_director_existe_pjud" class="form-control textCampoSel1" disabled="disabled"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_002_sel_director_cantidad_pjud" class="form-control textCampoSel2" ><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_003_sel_director_tipo_jornada_pjud" class="form-control textCampoSel1" disabled="disabled"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_004_sel_director_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Asistente Social:</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_005_sel_asistente_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_006_sel_asistente_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_007_sel_asistente_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_008_sel_asistente_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_009_sel_psicologo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_010_sel_psicologo_cantidad_pjud" class ="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_011_sel_psicologo_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_012_sel_psicologo_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Enfermero(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_013_sel_enfermero_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_014_sel_enfermero_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_015_sel_enfermero_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_016_sel_enfermero_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Auxiliar de Enfermería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_017_sel_auxenfermero_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_018_sel_auxenfermero_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_019_sel_auxenfermero_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_020_sel_auxenfermero_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Médico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_021_sel_medico_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_022_sel_medico_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_023_sel_medico_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_024_sel_medico_horas_semanales_pjud"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psiquiatra</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_025_sel_psiquiatra_existe_pjud"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_026_sel_psiquiatra_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_027_sel_psiquiatra_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_028_sel_psiquiatra_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Terapeuta Ocupacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_029_sel_terapeuta_ocup_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_030_sel_terapeuta_ocup_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_031_sel_terapeuta_ocup_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_032_sel_terapeuta_ocup_horas_semanales_pjud"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Kinesiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_033_sel_kinesiologo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_034_sel_kinesiologo_cantidad_pjud"class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_035_sel_kinesiologo_tipo_jornada_pjud"class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_036_sel_kinesiologo_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Nutricionista</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_037_sel_nutricionista_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_038_sel_nutricionista_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_039_sel_nutricionista_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_040_sel_nutricionista_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Fonoaudiólogo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_041_sel_fonoaudiologo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_042_sel_fonoaudiologo_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_043_sel_fonoaudiologo_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_044_sel_fonoaudiologo_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Profesor(a) de Educación Física</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_045_sel_profesorEducaFisica_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_046_sel_profesorEducaFisica_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_047_sel_profesorEducaFisica_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_048_sel_profesorEducaFisica_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Psicopedagogo(a)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_049_sel_psicopedagogo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_050_sel_psicopedagogo_cantidad_pjud" class="form-control textCampoSel2" ><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_051_sel_psicopedagogo_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_052_sel_psicopedagogo_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de Párvulos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_053_sel_educadoraParvulos_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_054_sel_educadoraParvulos_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_055_sel_educadoraParvulos_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_056_sel_educadoraParvulos_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Educador(a) de trato directo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_057_sel_educadoraTratoDirecto_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_058_sel_educadoraTratoDirecto_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_060_sel_educadoraTratoDirecto_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Manipulador(a) de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_061_sel_manipuladorAlimentos_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_062_sel_manipuladorAlimentos_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_063_sel_manipuladorAlimentos_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_064_sel_manipuladorAlimentos_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Administrativo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_065_sel_apoyoAdministrativo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_066_sel_apoyoAdministrativo_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_067_sel_apoyoAdministrativo_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_068_sel_apoyoAdministrativo_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Aseo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_069_sel_personalAseo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_070_sel_personalAseo_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_071_sel_personalAseo_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_072_sel_personalAseo_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal de Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_073_sel_personalLavanderia_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_074_sel_personalLavandería_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_075_sel_personalLavandería_tipo_joranada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_076_sel_personalLavandería_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Monitores Talleristas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_077_sel_monitoresTalleristas_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_078_sel_monitoresTalleristas_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_079_sel_monitoresTalleristas_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_080_sel_monitoresTalleristas_horas_semanales_pjud"  type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Alumnos en Práctica (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_081_sel_alumnosPractica_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_082_sel_alumnosPractica_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_083_sel_alumnosPractica_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_084_sel_alumnosPractica_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Apoyo Voluntario (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_085_sel_apoyoVoluntario_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_086_sel_apoyoVoluntario_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_087_sel_apoyoVoluntario_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_088_sel_apoyoVoluntario_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Otros (Especificar en Observaciones)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_089_sel_Otros_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_090_sel_Otros_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_091_sel_Otros_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_092_sel_Otros_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Personal con Licencia Médica?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_093_sel_PersonalLicenciaMedica_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_094_sel_PersonalLicenciaMedica_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Personal con Licencia ¿Cuenta con Suplente?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_pjud" class="form-control textCampoSel2"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_pjud" class="form-control textCampoSel1"><option value="0"></option><option value="1">Completa</option><option value="2">Parcial</option><option value="3">Otra</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td colspan="5" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="5" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="dotacion_101_Observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="5" style="text-align:center;"><button id="btn_antecedentesDotacionPersonal" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Dotación Personal " onclick="GrabarAntecedentes(3);">Grabar Antecedente Dotación Personal</button>&nbsp;<button id="btn_FichaGenera_03" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
                    <table class="table">
                        <tr>
                            <td colspan="5" class="etiqCampo3">Respuesta SENAME</td>
                        </tr>
                        <tr>
                            <td colspan="5" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="dotacion_102_respuesta_SENAME_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="5" style="text-align:center;"><button id="btn_antecedentesDotacionPersonal" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Dotación Personal " onclick="GrabarAntecedentes(3);">Grabar Antecedente Dotación Personal</button>&nbsp;<button id="btn_FichaGenera_03" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
        </div>

         <div role="tabpanel" class="tab-pane fade in" id="infraestructura_pjud">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Recursos Materiales, Infraestructura y Equipamiento</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="etiqCampo2"></td>
                            <td class="etiqCampo2">CANTIDAD</td>
                            <td class="etiqCampo2">EVALUACI&Oacute;N</td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Oficinas Administrativas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_001_ofi_admin_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_002_ofi_admin_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(1);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_001_ofi_admin_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Reuniones</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_003_salaReuniones_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_004_salaReuniones_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(2);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_003_salaReuniones_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Recepción</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_005_salaRecepcion_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_006_salaRecepcion_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(3);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_005_salaRecepcion_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacio de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_007_espacioVisitas_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_008_espacioVisitas_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(4);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_007_espacioVisitas_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala Multiuso para Talleres</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_009_salaMultiuso_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_010_salaMultiuso_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(5);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_009_salaMultiuso_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sala de Estar/Living</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_011_salaEstar_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_012_salaEstar_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(6);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_011_salaEstar_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Unidad de Salud</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_013_enfermeria_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_014_enfermeria_cantidad_pjud" class="form-control textCampoSel1"  onchange="HabilitaInfraestructura(7);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_013_enfermeria_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Espacios Recreacionales</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_015_espacioRecreacional_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_016_espacioRecreacional_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(8);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_015_espacioRecreacional_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Áreas Verdes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_019_areasVerdes_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_020_areasVerdes_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(9);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_019_areasVerdes_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cocina</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_021_cocina_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_022_cocina_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(10);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_021_cocina_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Comedor</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_023_comedor_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_024_comedor_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(11);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_023_comedor_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Lavandería</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_025_Lavanderia_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_026_Lavanderia_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(12);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_025_Lavanderia_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Dormitorio NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_027_Dormitorio_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_028_Dormitorio_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(13);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_027_Dormitorio_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Camas NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_029_CamasNNA_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_030_CamasNNA_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(14);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_029_CamasNNA_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Closet, Lockers</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_031_closetLocker_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_032_closetLocker_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(15);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_031_closetLocker_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños para Público</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_033_banosPublico_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_034_banosPublico_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(16);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_033_banosPublico_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Baños NNA Adecuados y Suficientes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNAadecuados_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_036_banosNNAadecuados_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(17);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_035_banosNNAadecuados_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Duchas para NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_existe_pjud" disabled="disabled" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_038_duchasNNA_cantidad_pjud" class="form-control textCampoSel1" onchange="HabilitaInfraestructura(18);"><option value="0"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">+5</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_037_duchasNNA_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Ambientación Acorde a la Población</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_039_ambientacionAcorde_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_039_ambientacionAcorde_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vestuario adecuado de acuerdo a estación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioAdecuado_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_040_vestuarioAdecuado_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Útiles de Aseo Personal para los NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_041_utilesAseoPersonalNNA_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_041_utilesAseoPersonalNNA_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Agua Caliente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_042_aguaCaliente_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_042_aguaCaliente_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Estado Calefón y Llaves de Gas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_estadoCalefonLlavesGas_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_043_estadoCalefonLlavesGas_existe_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sistema de calefacción (Especificar en Observación)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_044_sistemaCalefaccion_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_044_sistemaCalefaccion_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Ventilación adecuada del inmueble</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_045_ventilacionAdecuada_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_045_ventilacionAdecuada_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso para personas con situación de Discapacidad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_046_AccesoDiscapacitados_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_046_AccesoDiscapacitados_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Instalaciones Habilitadas para Discapacitados (Baños, ramplas, etc.)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="Infraest_047_InstalacionesHabilitadasDiscapacitados_existe_pjud_eval" class="form-control textCampoSel1"><option value="0"></option><option value="5">Muy bueno</option><option value="4">Bueno</option><option value="3">Regular</option><option value="2">Malo</option><option value="1">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td colspan="4" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="4" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="Infraest_049_observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="3" style="text-align:center;"><button id="btn_antecedentesInfraestructura" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Recursos Materiales, Infraetructura y Equipamiento" onclick="GrabarAntecedentes(4);">Grabar Antecedente de Recursos Materiales, Infraetructura y Equipamiento</button>&nbsp;<button id="btn_FichaGenera_04" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
                    <table class="table">
                        <tr>
                            <td colspan="4" class="etiqCampo3">Respuesta SENAME</td>
                        </tr>
                        <tr>
                            <td colspan="4" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="Infraest_050_respuesta_SENAME_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="3" style="text-align:center;"><button id="btn_antecedentesInfraestructura" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Recursos Materiales, Infraetructura y Equipamiento" onclick="GrabarAntecedentes(4);">Grabar Antecedente de Recursos Materiales, Infraetructura y Equipamiento</button>&nbsp;<button id="btn_FichaGenera_04" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
        </div>

         <div role="tabpanel" class="tab-pane fade in" id="seguridad_pjud">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Seguridad</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3" style="width:100%">Plan de Emergencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_001_planEmergencia_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Simulacro Emergencia (Último Cuatrimestre)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_002_simulacroEmergencia_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Plan de Emergencia ¿Visado por personal calificado?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_003_planEmergenciaVisado_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Extintores</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_004_extintores_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Señalética</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_005_senaletica_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vías de Evacuación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_006_viaEvacuacion_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Capacitación Personal en Emergencia y Primeros Auxilios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_007_capacitacionPersonal_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sanitización, Desratización y Fumigación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_008_sanitizacion_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Sistema Eléctrico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_009_sistemaElectrico_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Zona de Seguridad Demarcada</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="seguridad_010_zonaSeguridad_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="seguridad_011_observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Respuesta SENAME</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="seguridad_012_respuesta_sename_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSeguridad" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Seguridad" onclick="GrabarAntecedentes(5);">Grabar Antecedente de Seguridad</button>&nbsp;<button id="btn_FichaGenera_05" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
        </div>

         <div role="tabpanel" class="tab-pane fade in" id="salud_pjud">
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
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_001_NNA_inscritosCESFAM_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental con Diagnóstico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_002_NNA_problematicaSaludMental_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud Mental sin Diagnóstico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_003_NNA_problematicaSaludMentalsinDiag_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA Inscritos con Enfermedad Crónica</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_004_NNA_inscritosEnferCronica_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA Inscritos con Situación de Discapacidad</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_005_NNA_Discapacidad_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA recibiendo tratamiento farmacológico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_006_NNA_inscritosProblemSaludRecibeMedica_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Problemática de Salud en Tratamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_007_NNA_problematicaSaludenTratamiento_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Consumo de Drogas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="salud_008_NNA_consumoDrogas_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">¿Cuenta con Registro de Medicamentos Administrados a los NNA?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_009_sel_registroMedicamentoAdmin_a_NNA_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con Protocolo para la Administración de Medicamentos a los NNA?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_010_sel_protocoloAdmin_Medica_a_NNA_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Existe Control Anual Ginecológico en los Adolescentes?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_011_sel_control_ginecologicoAdolescente_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Existen adolescentes que se hayan negado a Control Ginecológico?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_012_sel_adolescenteNiegaControlGineco_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Adolescentes Embarazadas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="salud_013_sel_adolescenteEmbarazada_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">En caso de Pertenecer a Residencia Adolescentes Embarazadas, ¿Tienen controles médicos al día?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid; white-space: nowrap;"><select id="salud_014_sel_adolescenteEmbarazadaControlalDia_pjud" disabled="disabled" class="textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0" selected="selected">NO</option></select> - CU&Aacute;NTAS:&nbsp;<input id="salud_015_adolescenteEmbarazadaControlalDia_cantidad_pjud" type="text" class="textCampo3" maxlength="3" placeholder="" onkeyup="EvaluaCuantasAdolescentesControlAldia(this);" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);"/></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="salud_016_observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Respuesta SENAME</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="salud_017_respuesta_sename_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesSalud" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Salud" onclick="GrabarAntecedentes(6);">Grabar Antecedente de Salud</button>&nbsp;<button id="btn_FichaGenera_06" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
        </div>

         <div role="tabpanel" class="tab-pane fade in" id="educacion_pjud">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Educación</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="etiqCampo2">CANTIDAD</td>
                            <td class="etiqCampo2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que si asisten a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_001_NNA_asisten_colegio_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que no asisten a Establecimiento Educacional</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_002_NNA_NO_asisten_colegio_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">N° de NNA con Retraso o Rezago Escolar</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_003_NNA_retrasoEscolar_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA con Matrícula Cancelada</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_004_NNA_matriculaCancelada_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que Asiste a Educación Diferencial</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_005_NNA_asisten_colegioDiferencial_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de NNA que Asiste a Educación de Nivelación de Estudios</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="educacion_006_NNA_asisten_colegioNivelacion_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="4" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td class="etiqCampo2">CANTIDAD</td>
                            <td class="etiqCampo2">EVALUACI&Oacute;N</td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Espacios Destinados a Estudios y Desarrolo de Tareas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_007_sel_EspacioEstudio_y_Tareas_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_007_sel_EspacioEstudio_y_Tareas_existe_eval_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">Excelente</option><option value="2">Bueno</option><option value="3">Regular</option><option value="4">Malo</option><option value="5">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Material Bibliográfico</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_008_sel_materialBibliiografico_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_008_sel_materialBibliiografico_existe_eval_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">Excelente</option><option value="2">Bueno</option><option value="3">Regular</option><option value="4">Malo</option><option value="5">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Computadores</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_009_sel_computadores_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_009_sel_computadores_existe_eval_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">Excelente</option><option value="2">Bueno</option><option value="3">Regular</option><option value="4">Malo</option><option value="5">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Acceso Controlado a Internet</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_010_sel_AccesoControladoInternet_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="educacion_010_sel_AccesoControladoInternet_existe_eval_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">Excelente</option><option value="2">Bueno</option><option value="3">Regular</option><option value="4">Malo</option><option value="5">Muy malo</option></select></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="educacion_011_observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="etiqCampo3">Respuesta SENAME</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="educacion_012_respuesta_sename_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesEducacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Educación" onclick="GrabarAntecedentes(7);">Grabar Antecedente de Educación</button>&nbsp;<button id="btn_FichaGenera_07" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
        </div>

         <div role="tabpanel" class="tab-pane fade in" id="alimentacion_pjud">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes Alimentación</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cuenta con Registro de Honorarios de Entrega de Alimentos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_001_sel_registroHonorarioEntregaAlimento_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">“¿Cuenta con minuta alimentaria?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_002_sel_registroPlanificacionMenuBalanceado_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existencia de Menús Especiales</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_003_sel_menuEspeciales_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">¿Cuenta con minuta alimentaria aprobada?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_004_sel_asesoriaNutricionistaPlanMenu_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existen Certificados Sanitarios de las Manipuladoras</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_005_sel_certifSanitarioManipuladores_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Almacenamiento de Alimentos y Estado de Conservación</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="alimentacion_006_sel_AlmacenaAlimentoEstadoConserva_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td class="etiqCampo2">ESPECIFIQUE</td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de Comidas Entregadas de Lunes a Viernes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_007_comidas_lunes_a_viernes_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">N° de Comidas Entregadas Sábado, Domingo y Festivos</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><input id="alimentacion_008_comidas_sabado_domingo_fest_cantidad_pjud" type="text" class="form-control textCampo3" maxlength="2" placeholder="" onkeypress="return ValidaIngresoSoloNumeros(this.value, event);" /></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="alimentacion_009_observacion_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="alimentacion_010_respuesta_sename_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <!--<tr><td colspan="2" style="text-align:center;"><button id="btn_antecedentesAlimentacion" class="btn btn-primary" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar los antecedentes de Alimentación" onclick="GrabarAntecedentes(8);">Grabar Antecedente de Alimentación</button>&nbsp;<button id="btn_FichaGenera_08" class="btn btn-warning" style="cursor: pointer;font-weight:normal;" title="haga clic para grabar la ficha residencial completa" onclick="GrabarAntecedentes(0);">Grabar Ficha Residencial</button></td></tr>-->
                    </table>
        </div>

         <div role="tabpanel" class="tab-pane fade in" id="gestion_residencia_pjud">
                    <table class="table">
                        <tr>
                            <td colspan="2" style="padding: 10px;"><span class="titsec2">Antecedentes de Gestión de Residencia</span></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3" style="width:100%;">Cuenta con catastro de redes</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_001_sel_catastroRedes_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo y/o Registro de Visitas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_002_sel_protocoloVisitas_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cuenta con Protocolo de Acogida del NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_003_sel_protocoloAcogida_NNA_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existen Actividades de Autocuidado para el Equipo</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_004_sel_activi_autocuidadoEquipo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cuenta con Protocolo de Actuación de Intervención en Crisis</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_005_sel_protocoloActua_intervencionCrisis_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Información para NNA sobre la Normativa de Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_006_sel_activi_protocolo_InfoNormativa_x_NNA_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Convivencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_007_sel_protocoloConvivencia_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Presentación de Reclamos y Quejas</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_008_sel_protocolo_PresentaReclamo_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo y Espacios para la escucha de los NNA</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_009_sel_protocoloEspacioEscucha_NNA_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Vinculación entre Residencias (para hermanos)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_010_sel_vinculacionResidencias_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Cuenta con Proceso de Formación Permanente para el personal</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_011_sel_ProcesoFormacion_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Apadrinamiento</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_012_sel_protocoloApadrinamiento_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de Derivación o Traslado a Residencia</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_013_sel_protocoloTrasladoResid_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo de para el Egreso del NNA (Sistema Residencial)</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_014_sel_protocoloEgreso_NNA_existe_pjud"  class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Existe Protocolo para Derivación a Red Salud</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_015_sel_protocolo_derivacion_RedSalud_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Actividades de Habilitación Laboral y Preparación para la Vida Independiente</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_016_sel_activi_habilitacionLaboral_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observaciones</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_017_observaciones_pjud" class="form-control textCampo3" placeholder="Sin observaciones." style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="etiqCampo3">Observación Población de NNA que se encontraba  a la hora de la visita</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_018_observaciones_pobla_NNA_visita_pjud" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>

                        <tr>
                            <td class="etiqCampo3">¿Algún NNA manifestó voluntad de conversar con juez?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_019_sel_manifiesta_NNA_conversarJuez_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                        <tr>
                            <td class="etiqCampo3">Se entrevistó a NNA de forma reservada?</td>
                            <td style="border-bottom: 1px #B2B2B2 solid;"><select id="gestionResid_020_sel_entrevisto_NNA_reservada_existe_pjud" class="form-control textCampoSel1"><option value="-1"></option><option value="1">SI</option><option value="0">NO</option></select></td>
                        </tr>
                    </table>

                    <table id="tbl_detalle_NNA_entrevistados_pjud" class="table">
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
                
                    <table class="table">
                        <tr>
                            <td colspan="2" class="etiqCampo3">Respuesta SENAME</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_021_sel_respuesta_sename_pjud" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;"></textarea></td>
                        </tr>
                    </table>
    </div>
    </div>

    </div>

    <br/><br/>
    <a id="A7" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#diV_OBS_SUGERENCIAS_PJUD_Detalle" aria-expanded="false" aria-controls="diV_OBS_SUGERENCIAS_PJUD_Detalle">
    <span id="Span16">VER OBSERVACIONES GENERALES Y SUGERENCIAS (FICHA RESIDENCIAL PJUD)</span>
    <span id="Span17" class="glyphicon glyphicon-triangle-top"></span>
    </a>
    <span id="Span18" style="font-size:11px;font-weight:600;color:#3b3939;">&nbsp;</span>
    <div id="diV_OBS_SUGERENCIAS_PJUD_Detalle" class="panel-collapse collapse"  aria-expanded="false">

    <span id="Span15" style="font-size:11px;font-weight:600;color:#3b3939;">&nbsp;</span>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade in active" id="Div1">
                <table class="table">
                    <tr>
                        <td style="padding: 10px;border-bottom: 1px #B2B2B2 solid;"><span class="titsec2">Observaciones Generales y Sugerencias</span></td>
                    </tr>
                    <tr>
                        <td class="etiqCampo3">Observaciones generales y aspectos a destacar</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_021_observacion_gral_pjud" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>

                    <tr>
                        <td class="etiqCampo3">Sugerencias a SENAME</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_022_sugerencias_a_SENAME" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>

                    <tr>
                        <td class="etiqCampo3">Sugerencias a residencia</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_023_sugerencias_a_residencia" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>

                    <tr>
                        <td class="etiqCampo3">Respuesta SENAME</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px #B2B2B2 solid;"><textarea id="gestionResid_024_respuesta_SENAME" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;"></textarea></td>
                    </tr>              
                </table>
                
        </div>
    </div>

    </div>


</div>
</div><!--FIN DIV COLAPSABLE FICHA HIJA PJUD-->

<!--DIV COLAPSABLE COMPARATIVAS INGRESO RESIDENCIA vs PJUD-->
<div class="well">
<a id="A3" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo" aria-expanded="false" aria-controls="DivFichaComparativo" onclick="AnalizaEstadoHabilitacion('INFORME_COMPARATIVA');" >
    <span id="Span5"><b>VER DETALLE COMPARATIVO REGISTRO DE FICHA RESIDENCIAL VERSUS INFORME DE VISITA DE JUEZ</b></span>
    <span id="Span6" class="glyphicon glyphicon-triangle-top"></span>
    <img id="imgSeccionObs003" src="../images/loader_ficharesidencial.gif" style="float:right;width:30px;display:none;" />
</a>
<span id="lblmsgA3" style="font-size:12px;display:none;">Por favor espere la carga de datos&nbsp;&nbsp;</span>
<div id="DivFichaComparativo" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
    <br />
    <span style="font-size:13px;color:#1071c3 !important;">NOTA: Sólo se despliegan los datos con diferencias entre el registro de ficha realizado por el responsable de residencia y lo informado por visita PJUD.</span>
    <br /><br />

    <div class="well" id="div_compara_antecedentes_generales" style="display:none;">
        <a id="A4" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo01" aria-expanded="false" aria-controls="DivFichaComparativo01">
            <span id="Span19" class="titseccion">ANTECEDENTES GENERALES</span>
            <span id="Span20" class="glyphicon glyphicon-triangle-top"></span>
        </a>
        <div id="DivFichaComparativo01" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>

    </div>

    <div class="well" id="div_compara_antecedentes_poblacion_capacidad" style="display:none;">
        <a id="A8" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo02" aria-expanded="false" aria-controls="DivFichaComparativo02">
            <span id="Span21" class="titseccion">ANTECEDENTE POBLACIÓN  Y CAPACIDAD</span>
            <span id="Span22" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo02" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_dotacion" style="display:none;">
        <a id="A10" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo03" aria-expanded="false" aria-controls="DivFichaComparativo03">
            <span id="Span25" class="titseccion">ANTECEDENTE DOTACIÓN DE PERSONAL</span>
            <span id="Span26" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo03" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_infraestructura" style="display:none;">
        <a id="A9" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo04" aria-expanded="false" aria-controls="DivFichaComparativo04">
            <span id="Span23" class="titseccion">ANTECEDENTE INFRAESTRUCTURA</span>
            <span id="Span24" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo04" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_seguridad" style="display:none;">
        <a id="A13" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo05" aria-expanded="false" aria-controls="DivFichaComparativo05">
            <span id="Span31" class="titseccion">ANTECEDENTE SEGURIDAD</span>
            <span id="Span32" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo05" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_salud" style="display:none;">
        <a id="A11" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo06" aria-expanded="false" aria-controls="DivFichaComparativo06">
            <span id="Span27" class="titseccion">ANTECEDENTE SALUD</span>
            <span id="Span28" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo06" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_educacion" style="display:none;">
        <a id="A12" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo07" aria-expanded="false" aria-controls="DivFichaComparativo07">
            <span id="Span29" class="titseccion">ANTECEDENTE EDUCACIÓN</span>
            <span id="Span30" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo07" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_alimentacion" style="display:none;">
        <a id="A14" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo08" aria-expanded="false" aria-controls="DivFichaComparativo08">
            <span id="Span33" class="titseccion">ANTECEDENTE ALIMENTACIÓN</span>
            <span id="Span34" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo08" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>

    <div class="well" id="div_compara_antecedentes_gestionresidencia" style="display:none;">
        <a id="A15" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaComparativo09" aria-expanded="false" aria-controls="DivFichaComparativo09">
            <span id="Span35" class="titseccion">ANTECEDENTE GESTIÓN RESIDENCIA</span>
            <span id="Span36" class="glyphicon glyphicon-triangle-top"></span>         
        </a>
        <div id="DivFichaComparativo09" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false"></div>
    </div>
</div>        
</div><!--FIN DIV COLAPSABLE COMPARATIVAS INGRESO RESIDENCIS vs PJUD-->

<!--DIV COLAPSABLE TRAMITACION OBSERVACIONES -->
<div class="well">
<a id="A5" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaTramitacionOBS" aria-expanded="false" aria-controls="DivFichaTramitacionOBS" onclick="AnalizaEstadoHabilitacion('TRAMITACION_OBSERVACIONES');">
    <span id="Span10"><b>TRAMITACI&Oacute;N DE OBSERVACIONES DE INFORME DE VISITA DE JUEZ A CENTRO RESIDENCIAL</b></span>
    <span id="Span11" class="glyphicon glyphicon-triangle-top"></span>         
    <img id="imgSeccionObs004" src="../images/loader_ficharesidencial.gif" style="float:right;width:30px;display:none;" />
</a>
<span id="lblmsgA4" style="font-size:12px;display:none;">Por favor espere la carga de datos&nbsp;&nbsp;</span>

<div id="DivFichaTramitacionOBS" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
    <br />
    <span style="font-size:13px;color:#1071c3 !important;">NOTA: Sólo se despliegan las secciones con observaciones informadas por PJUD.</span>
    <br />
    <br />

    <div class="well" id="div_respuestas_General_OBS">
        <div style="vertical-align:middle;">
        <img src="../images/check-mark.png" id="check000" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
        <img src="../images/speech-bubble.png" id="ontx000" style="display:block;width:32px;" title="Observación en trámite"/>
        &nbsp;
        <a id="A25" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp010" aria-expanded="false" aria-controls="DivFichaResp010">
            <span id="Span71" class="titseccion">OBSERVACIONES GENERALES Y SUGERENCIAS</span>
            <span id="Span72" class="glyphicon glyphicon-triangle-top"></span>
        </a>
        </div>
        <div id="DivFichaResp010" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion010" style="margin-top:10px;">
                <div>
                <span style="font-size:13px;color:#1071c3 !important;">Observaciones generales y aspectos a destacar</span>
                <div id="div001_ObsGral_Sugerencia" class="formcontrolDIVOBS"></div>
                </div>
                <div>
                <span style="font-size:13px;color:#1071c3 !important;">Sugerencias a SENAME</span>
                <div id="div002_ObsGral_Sugerencia" class="formcontrolDIVOBS"></div>
                </div>
                <div>
                <span style="font-size:13px;color:#1071c3 !important;">Sugerencias a residencia</span>
                <div id="div003_ObsGral_Sugerencia" class="formcontrolDIVOBS"></div>
                </div>
                <div>
                <span style="font-size:13px;color:#1071c3 !important;font-weight:bold;">RESPUESTA SENAME</span>
                <textarea id="text_respuesta_ObsGral_Sugerencia" class="form-control textCampo3" placeholder="" style="width:99%;height:150px;text-align:left;" maxlength="4000" onkeyup="return ContadorCaracter(this,'labelCaracteres_respuesta_ObsGral');"></textarea>
                <span id="labelCaracteres_respuesta_ObsGral" class="lblrestoIngreso"></span>
                </div>
                
            </div>
            <div id="div6" style="width:100%;">
                <button id="btnResponderOBS_General" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para grabar respuesta y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="GrabarRespuestaGeneralSENAME();"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder y Finalizar Tramitación de Observaciones PJUD</button>
            </div>
         </div>
    </div>


    <div class="well" id="div_respuestas_obs_general">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check001" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx001" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A16" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp001" aria-expanded="false" aria-controls="DivFichaResp001">   
                <span id="Span37" class="titseccion">ANTECEDENTES GENERALES</span>
                <span id="Span39" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp001" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion001"></div>
            <span id="labelCaracteres_respuesta001" class="lblrestoIngreso2"></span>
            <div id="divBotonera001" style="width:100%;">
                <button id="ButtonResponder001" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(1);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar001" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(1);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
            

                <span id="preloading" onclick="ConfiguraUploadX_(1);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX001" name="files[]" />
                </span>
                <span id="onloading" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files001" class="files" style="margin-top:10px;"><table id="tbl001"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_poblacionCapacidad">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check009" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx009" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A17" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp009" aria-expanded="false" aria-controls="DivFichaResp009">
                <span id="Span38" class="titseccion">ANTECEDENTES POBLACIÓN Y CAPACIDAD</span>
                <span id="Span40" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp009" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion009"></div>
            <span id="labelCaracteres_respuesta009" class="lblrestoIngreso2"></span>
            <div id="divBotonera009" style="width:100%;">
                <button id="ButtonResponder009" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(9);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar009" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(9);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
                <span id="Span41" onclick="ConfiguraUploadX_(9);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX009" name="files[]" />
                </span>
                <span id="Span42" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files009" class="files" style="margin-top:10px;"><table id="tbl009"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_dotacionPersonal">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check002" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx002" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A18" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp002" aria-expanded="false" aria-controls="DivFichaResp002">
                <span id="Span43" class="titseccion">ANTECEDENTES DE DOTACIÓN DE PERSONAL</span>
                <span id="Span44" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp002" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion002"></div>
            <span id="labelCaracteres_respuesta002" class="lblrestoIngreso2"></span>
            <div id="divBotonera002" style="width:100%;">
                <button id="ButtonResponder002" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(2);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar002" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(2);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
            

                <span id="Span45" onclick="ConfiguraUploadX_(2);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX002" name="files[]" />
                </span>
                <span id="Span46" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files002" class="files" style="margin-top:10px;"><table id="tbl002"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_infraestructura">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check003" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx003" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A19" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp003" aria-expanded="false" aria-controls="DivFichaResp003">
                <span id="Span47" class="titseccion">ANTECEDENTES INFRAESTRUCTURA</span>
                <span id="Span48" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp003" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion003"></div>
            <span id="labelCaracteres_respuesta003" class="lblrestoIngreso2"></span>
            <div id="divBotonera003" style="width:100%;">
                <button id="ButtonResponder003" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(3);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar003" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(3);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
            

                <span id="Span49" onclick="ConfiguraUploadX_(3);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX003" name="files[]" />
                </span>
                <span id="Span50" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files003" class="files" style="margin-top:10px;"><table id="tbl003"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_seguridad">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check004" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx004" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A20" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp004" aria-expanded="false" aria-controls="DivFichaResp004">
                <span id="Span51" class="titseccion">ANTECEDENTES SEGURIDAD</span>
                <span id="Span52" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp004" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion004"></div>
            <span id="labelCaracteres_respuesta004" class="lblrestoIngreso2"></span>
            <div id="divBotonera004" style="width:100%;">
                <button id="ButtonResponder004" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(4);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar004" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(4);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
            

                <span id="Span53" onclick="ConfiguraUploadX_(4);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX004" name="files[]" />
                </span>
                <span id="Span54" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files004" class="files" style="margin-top:10px;"><table id="tbl004"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_salud">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check005" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx005" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A21" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp005" aria-expanded="false" aria-controls="DivFichaResp005">
                <span id="Span55" class="titseccion">ANTECEDENTES SALUD</span>
                <span id="Span56" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp005" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion005"></div>
            <span id="labelCaracteres_respuesta005" class="lblrestoIngreso2"></span>
            <div id="divBotonera005" style="width:100%;">
                <button id="ButtonResponder005" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(5);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar005" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(5);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
            

                <span id="Span57" onclick="ConfiguraUploadX_(5);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX005" name="files[]" />
                </span>
                <span id="Span58" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files005" class="files" style="margin-top:10px;"><table id="tbl005"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_educacion">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check006" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx006" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A22" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp006" aria-expanded="false" aria-controls="DivFichaResp006">
                <span id="Span59" class="titseccion">ANTECEDENTES EDUCACION</span>
                <span id="Span60" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp006" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion006"></div>
            <span id="labelCaracteres_respuesta006" class="lblrestoIngreso2"></span>
            <div id="divBotonera006" style="width:100%;">
                <button id="ButtonResponder006" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(6);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar006" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(6);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
            

                <span id="Span61" onclick="ConfiguraUploadX_(6);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX006" name="files[]" />
                </span>
                <span id="Span62" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files006" class="files" style="margin-top:10px;"><table id="tbl006"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_alimentacion">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check007" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx007" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A23" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp007" aria-expanded="false" aria-controls="DivFichaResp007">
                <span id="Span63" class="titseccion">ANTECEDENTES ALIMENTACION</span>
                <span id="Span64" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp007" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion007"></div>
            <span id="labelCaracteres_respuesta007" class="lblrestoIngreso2"></span>
            <div id="divBotonera007" style="width:100%;">
                <button id="ButtonResponder007" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(7);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar007" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(7);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
            

                <span id="Span65" onclick="ConfiguraUploadX_(7);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX007" name="files[]" />
                </span>
                <span id="Span66" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files007" class="files" style="margin-top:10px;"><table id="tbl007"></table></div>            
         </div>
    </div>

    <div class="well" id="div_respuestas_obs_gestion_residencia">
        <div style="vertical-align:middle;">
            <img src="../images/check-mark.png" id="check008" style="display:none;width:32px;" title="Tramitación de observación finalizada"/>
            <img src="../images/speech-bubble.png" id="ontx008" style="display:none;width:32px;" title="Observación en trámite"/>
            &nbsp;
            <a id="A24" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#DivFichaResp008" aria-expanded="false" aria-controls="DivFichaResp008">
                <span id="Span67" class="titseccion">ANTECEDENTES GESTIÓN RESIDENCIA</span>
                <span id="Span68" class="glyphicon glyphicon-triangle-top"></span>
            </a>
        </div>
        <div id="DivFichaResp008" role="tabpanel" aria-labelledby="headingOne" class="panel-collapse collapse" aria-expanded="false">
            <div id="div_tramitacion008"></div>
            <span id="labelCaracteres_respuesta008" class="lblrestoIngreso2"></span>
            <div id="divBotonera008" style="width:100%;">
                <button id="ButtonResponder008" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder a registro previo de tramitación u observación" onclick="GrabarRespuestaActual(8);"><span class="glyphicon glyphicon-comment"></span>&nbsp;Responder</button>
                <button id="ButtonVisar008" class="btn btn-warning" style="cursor: pointer;font-weight:normal;margin-top:10px;" title="Clic para responder y finalizar la tramitación de las a observaciones PJUD a ficha residencial" onclick="VisarUltimaRespuesta(8);"><span class="glyphicon glyphicon-ok"></span>&nbsp;Visar</button>
                <span id="Span69" onclick="ConfiguraUploadX_(8);" class="btn btn-primary fileinput-button" style="font-weight:normal;margin-top:10px;" title="Clic para adjuntar archivos a respuesta (si no hace clic en Responder luego de adjuntar los archivos, estos no se considerarán en la tramitación por no registrar respuesta asociada.">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Adjuntar archivo</span>
                    <!-- The file input field used as target for the file upload widget -->
                    <input type="file" id="filesX008" name="files[]" />
                </span>
                <span id="Span70" class="btn btn-default" style="font-weight:normal;margin-top:10px;display:none;">
                     <i class="glyphicon glyphicon-paperclip"></i>
                    <span>Cargando archivo(s) ...</span>
                </span>
            </div>
            <div id="files008" class="files" style="margin-top:10px;"><table id="tbl008"></table></div>            
         </div>
    </div>
</div>
</div><!--FIN DIV COLAPSABLE TRAMITACION OBSERVACIONES-->

    <div id="frmMsg" style="display:none;">
        <h4 class="page-header2">AVISO</h4>
        <a href="#" class="list-group-item">La ficha residencial aún no está habilitada para su región. Desde ya se agradece su comprensión.<br /><br /><div style="text-align:right;">SENAINFO</div></a>
    </div>
</div>
<div id="divconfig" style="display:none;" onclick="InicializaKey();"></div>

</div>
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
        importarScript("../Scripts/ficha/antecedentes_gestion_residencia.js?" + d.getTime());
        importarScript("../Scripts/ficha/antecedentes_comparativas.js?" + d.getTime());
        importarScript("../Scripts/ficha/respuesta_observaciones.js?" + d.getTime());
        importarScript("../Scripts/ficha/antecedentes_comparativas2.js?" + d.getTime());
        importarScript("../Scripts/ficha/residencia1historial.js?" + d.getTime());

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
        importarScript("../Scripts/ficha/antecedentes_comparativas.js?" + d.getTime());
        importarScript("../Scripts/ficha/respuesta_observaciones.js?" + d.getTime());
        importarScript("../Scripts/ficha/antecedentes_comparativas2.js?" + d.getTime());
        importarScript("../Scripts/ficha/residencia1historial.js?" + d.getTime());
    
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
        importarScript("scripts/ficha/antecedentes_comparativas.js?" + d.getTime());
        importarScript("scripts/ficha/respuesta_observaciones.js?" + d.getTime());
        importarScript("scripts/ficha/antecedentes_comparativas2.js?" + d.getTime());
        importarScript("scripts/ficha/residencia1historial.js?" + d.getTime());
    */
</script>
</body>
</html>