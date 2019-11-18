<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="I_ProyectoCodigo.ascx.cs" Inherits="SenainfoSdk.UI.I_ProyectoCodigo" %>
<%@ Register Src="C_buscar_proyecto.ascx" TagPrefix="uc1" TagName="C_buscar_proyecto" %>

<table class="borderless">
    <tr>
        <td style="width: 15%">
            <asp:TextBox AutoPostBack="true" runat="server" ID="txtCodigo" OnTextChange="txtCodigoChange" CssClass="form-control input-sm"></asp:TextBox>
        </td>
        <td style="width: 85%">
            <asp:DropDownList ID="ddl_proyecto" runat="server" AutoPostBack="True" CssClass="form-control input-sm" OnSelectedIndexChanged="ddl_proyecto_SelectedIndexChanged">
            </asp:DropDownList></td>
        <td>
            <uc1:C_buscar_proyecto runat="server" ID="C_buscar_proyecto" OnProyectoSeleccionado="C_buscar_proyecto_ProyectoSeleccionado" />
        </td>
    </tr>
</table>