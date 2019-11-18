<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_DescargaArchivo.ascx.cs" Inherits="SenainfoSdk.UI.C_DescargaArchivo" %>
<%@ Register Src="C_modalPopUp.ascx" TagPrefix="uc1" TagName="C_modalPopUp" %>

<uc1:C_modalPopUp runat="server" ID="C_modalPopUp1" />

 <asp:Label ID="lblMensaje" runat="server" OnResultadoPopup="C_modalPopUp_ResultadoPopup"></asp:Label>
<br />
<asp:Repeater ID="rptArchivos" runat="server" OnItemDataBound="rptArchivos_ItemDataBound" OnItemCommand="rptArchivos_ItemCommand">
    <HeaderTemplate>
        <table class="table table-bordered table-hover" border="1" style="border-collapse:collapse;">
            <tr class="titulo-tabla table-borderless" runat="server" id="trCabecera">
                <th scope="col">Nombre
                </th>
                <th runat="server" id="tdCodigo" scope="col">Código
                </th>
                <th runat="server" id="tdFormato" scope="col">Formato
                </th>
                <th runat="server" id="tdTamano" scope="col">Tamaño (Kb)
                </th>
                <th runat="server" id="tdDescripcion" scope="col">Descripción
                </th>
                <th runat="server" id="tdAlmacenado" scope="col">Almacenado
                </th>
                <th runat="server" id="tdEliminaArchivo" scope="col" style="width:1%;">
                </th>
            </tr>
    </HeaderTemplate>
    <ItemTemplate>
        <asp:Label ID="Mensaje" runat="server" Text="No se encontraron registros."></asp:Label>
        <tr class="caja-tabla table-bordered">           
            <td>
                <asp:HyperLink ID="lnkBtnNombre" runat="server" NavigateUrl='<%# Eval("CodGuid", "~/SenainfoSdk/H_DescargaArchivo.ashx?id={0}") %>'
            Text='<%# DataBinder.Eval(Container.DataItem, "NombreReal") %>'></asp:HyperLink>
               <%-- <asp:LinkButton ID="lnkBtnNombre" runat="server" Text='<%# DataBinder.Eval(Container.DataItem, "NombreReal") %>' CommandArgument='<%# DataBinder.Eval(Container.DataItem, "CodArchivo") %>'  CommandName="MuestraArchivo" />--%>
            </td>
            <td  runat="server" id="tdCodigoField" >
                <%# DataBinder.Eval(Container.DataItem, "IdentificadorOrigen") %>
            </td>       
           
            <td  runat="server" id="tdFormatoField" >
                <%# DataBinder.Eval(Container.DataItem, "Formato") %>
            </td>
            <td  runat="server" id="tdTamanoField">
                <%# DataBinder.Eval(Container.DataItem, "Tamano", "{0:F0}") %>
            </td>
            <td  runat="server" id="tdDescripcionField">
                <%# DataBinder.Eval(Container.DataItem, "Descripcion") %>
            </td>
             <td  runat="server" id="tdAlmacenadoField">
                 <%# DataBinder.Eval(Container.DataItem, "FechaCreacion", "{0:dd/MM/yyyy}") %>            
            </td>
               <td  runat="server" id="tdEliminaArchivoField">

                <asp:LinkButton ID="lnkBtnEliminar" runat="server" Text='<%# GetEliminar(DataBinder.Eval(Container.DataItem, "CodArchivo")) %>' CommandArgument='<%# DataBinder.Eval(Container.DataItem, "CodArchivo") %>'  CommandName="EliminaArchivo"
                    CssClass='<%# GetEliminarStyle(DataBinder.Eval(Container.DataItem, "CodArchivo")) %>' />
            </td>
        </tr>
    </ItemTemplate>
    <FooterTemplate>
        </table>
    </FooterTemplate>
</asp:Repeater>
