<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_region.ascx.cs" Inherits="SenainfoSdk.UI.C_region" %>


<%@ Register Src="I_Proyecto.ascx" TagPrefix="uc1" TagName="I_Proyecto" %>
<%@ Register Src="I_Region.ascx" TagPrefix="uc1" TagName="I_Region" %>
<%@ Register Src="I_Institucion.ascx" TagPrefix="uc1" TagName="I_Institucion" %>





<ContentTemplate>
        <% if (this.UsarTabla) { %>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered table-condensed">
        <% } %>

                    <tr>
                        <th class="titulo-tabla col-md-1">Región *</th>
                        <td class="col-md-4">
                            <uc1:I_Region id="I_Region" runat="server" PermitirSinInformacion="false" OnCodRegionSeleccionadoCambio="I_Region_CodRegionSeleccionadoCambio"  TextoDefault="Seleccione Region" UsarAllInOne="false"  />
                        </td>
                    </tr>

                    <tr>
                        <th class="titulo-tabla col-md-1">Institución *</th>
                        <td class="col-md-4">
                            <uc1:I_Institucion runat="server" id="I_Institucion" RegionControlID="I_Region" OnCodInstitucionSeleccionadoCambio="I_Institucion_CodInstitucionSeleccionadoCambio" UsarAllInOne="false" />
                        </td>
                    </tr>

                    <tr>
                        <th class="titulo-tabla col-md-1">Proyecto *</th>
                        <td class="col-md-4">
                            <uc1:I_Proyecto runat="server" id="I_Proyecto" UsarAllInOne="false" RegionControlID="I_Region" InstitucionControlID="I_Institucion" OnCodProyectoSeleccionadoCambio="I_Proyecto_CodProyectoSeleccionadoCambio" />
                        </td>
                    </tr>
        <% if (this.UsarTabla) { %>
                </table>
            </div>
        </div>
        <% } %>

    </ContentTemplate>
</asp:UpdatePanel>
