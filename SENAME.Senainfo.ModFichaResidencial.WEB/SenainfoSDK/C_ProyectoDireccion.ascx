<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_ProyectoDireccion.ascx.cs" Inherits="SenainfoSdk.UI.C_ProyectoDireccion" %>

<%@ Register Src="I_Institucion.ascx" TagPrefix="uc1" TagName="I_Institucion" %>
<%@ Register Src="I_Proyecto.ascx" TagPrefix="uc1" TagName="I_Proyecto" %>
<%@ Register Src="I_Direccion.ascx" TagPrefix="uc1" TagName="I_Direccion" %>

<asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
    <ContentTemplate>
        <% if (this.UsarTabla) { %>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered table-condensed">
        <% } %>
                    <div id="div_asociar" runat="server" >
                    <tr>
                        <th class="titulo-tabla col-md-1">Asociar a </th>
                        <td class="col-md-4">
                            <asp:RadioButton id="rb_Proyecto" runat="server" AutoPostBack="true" GroupName="ProyectoDireccion" Text=" Proyecto " CssClass="radio-inline" OnCheckedChanged="Asociar_CheckedChanged"></asp:RadioButton>
                            <asp:RadioButton id="rb_Direccion" runat="server" AutoPostBack="true" GroupName="ProyectoDireccion" Text=" Dirección " CssClass="radio-inline" OnCheckedChanged="Asociar_CheckedChanged"></asp:RadioButton>
                        </td>
                    </tr>
                    </div>
                    <div id="div_direccion" runat="server" Visible="false">
                    <tr>
                        <th class="titulo-tabla col-md-1">Direccion  Regional *</th>
                        <td class="col-md-4">
                            <uc1:I_Direccion runat="server" ID="I_Direccion" UsarAllInOne="True"/>
                            
                        </td>
                    </tr>
                    </div>
                    <div id="div_proyecto" runat="server" Visible="false">
                    <tr>
                        <th class="titulo-tabla col-md-1">Institución *</th>
                        <td class="col-md-4">
                            <uc1:I_Institucion runat="server" id="I_Institucion" UsarAllInOne="True" />
                        </td>
                    </tr>
                    <tr>
                        <th class="titulo-tabla col-md-1">Proyecto *</th>
                        <td class="col-md-4">
                            <uc1:I_Proyecto runat="server" id="I_Proyecto" UsarAllInOne="True" InstitucionControlID="I_Institucion" OnCodProyectoSeleccionadoCambio="I_Proyecto_CodProyectoSeleccionadoCambio" />
                        </td>
                    </tr>
                    </div>
        <% if (this.UsarTabla) { %>
                </table>
            </div>
        </div>
        <% } %>

    </ContentTemplate>
   <%-- <Triggers>
        <asp:AsyncPostBackTrigger ControlID="rb_Proyecto" />
        <asp:AsyncPostBackTrigger ControlID="rb_Direccion" />       
    </Triggers>--%>
</asp:UpdatePanel>
<asp:Label ID="lblStatus" runat="server"></asp:Label>
