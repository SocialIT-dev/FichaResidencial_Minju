<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_asignaRol.ascx.cs" Inherits="SenainfoSdk.UI.C_asignaRol" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Src="C_msgAlerta.ascx" TagPrefix="uc1" TagName="C_msgAlerta" %>


<asp:LinkButton ID="lbn_buscar_roles" runat="server" CssClass="btn btn-info btn-sm fixed-width-button" OnClick="lbn_buscar_roles_Click">
          <span class="glyphicon glyphicon-lock"></span>  Roles
</asp:LinkButton>


<cc1:ModalPopupExtender ID="mpe" runat="server"
    PopupControlID="Panel1"
    DropShadow="true"
    TargetControlID="lbn_buscar_roles"
    CancelControlID="lnb_close_buscar_roles"
    BackgroundCssClass="modalBackground">
</cc1:ModalPopupExtender>

<asp:Panel ID="Panel1" runat="server" align="center" Style="display: none">
<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">ROLES</a></li>
  <li id="menuToken" class="hide"><a data-toggle="tab" href="#menu1">TOKENS</a></li>
</ul>
    <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
            <p> <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <div class="popupConfirmation" id="modal_trabajador">
                <div class="modal-header header-modal">
                    <asp:LinkButton ID="lnb_close_buscar_roles" CssClass="close" aria-label="Close" runat="server" Text="Cerrar" CausesValidation="false">
                                                                <span aria-hidden="true">&times;</span>
                    </asp:LinkButton>
                    <h4 class="modal-title">Mantenedor Relación Roles Tokens</h4>
                </div>
                <h4>
                    <uc1:C_msgAlerta runat="server" ID="C_msgAlerta" />
                    <asp:Label ID="lblMensaje" runat="server" CssClass="subtitulo-form" Text="Coincidencias" Visible="False"></asp:Label></h4>
                <div class="container">

                    <div class="row">
                        <div class="col-md-5">
                            <div class="table-bordered table-hover">
                                <div id="tableHeader" class="fixed-header"></div>
                                <div class="fixed-header-table-container">
                                    <asp:ListBox ID="lstbRolesDisp" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="25" multiple="multiple"></asp:ListBox>
                                    Cantidad:
                                <asp:Label ID="lblCantRolesDisp" runat="server" Text="0"></asp:Label>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="text-center">


                                <asp:LinkButton ID="lnkbAddRol" runat="server" CssClass="btn btn-success btn-sm fixed-width-button" OnClick="lnkbAddRol_Click"> > </asp:LinkButton>
                                <br />
                                <br />
                                <asp:LinkButton ID="lnkbDelRol" runat="server" CssClass="btn btn-danger btn-sm fixed-width-button" OnClick="lnkbDelRol_Click"> < </asp:LinkButton>
                                <br />
                                <br />
                                <asp:LinkButton ID="lnb_agregar_todos" runat="server" CssClass="btn btn-success btn-sm fixed-width-button" Visible="false"> >> </asp:LinkButton>
                                <br />
                                <br />
                                <asp:LinkButton ID="lnb_quitar_todos" runat="server" CssClass="btn btn-danger btn-sm fixed-width-button" Visible="false"> << </asp:LinkButton>


                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="table-bordered table-hover">
                                <div id="Div2" class="fixed-header"></div>
                                <div class="fixed-header-table-container">

                                    <asp:ListBox ID="lstbRolAsig" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="25" multiple="multiple"></asp:ListBox>

                                    Cantidad:
                                <asp:Label ID="lblCantRolAsig" runat="server" Text="0"></asp:Label>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="botonera pull-right">

                            <asp:LinkButton CssClass="btn btn-success btn-sm fixed-width-button" ID="lnb_actualizar" runat="server" Text="Actualizar" AutoPostback="false" OnClick="lnb_actualizar_Click">
                                              <span class="glyphicon glyphicon-log-in"></span>&nbsp;Actualizar
                            </asp:LinkButton>
                            <asp:LinkButton CssClass="btn btn-primary btn-sm fixed-width-button" ID="btnCerrarRoles" runat="server" OnClick="btnCerrarRoles_Click" CausesValidation="False">
                            <span class="glyphicon glyphicon-remove"></span>&nbsp;Cerrar
                            </asp:LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel></p>
        </div>
        <div id="menu1" class="tab-pane fade">
            <p>  <asp:UpdatePanel ID="UpdatePanel2" runat="server">
        <ContentTemplate>
            <div class="popupConfirmation" id="Div1">
                <div class="modal-header header-modal">

                    <h4 class="modal-title">Mantenedor Relación Tokens Usuarios</h4>
                </div>
                <h4>
                    <uc1:C_msgAlerta runat="server" ID="C_msgAlerta1" />
                    <asp:Label ID="Label1" runat="server" CssClass="subtitulo-form" Text="Coincidencias" Visible="False"></asp:Label></h4>
                <div class="container">

                    <div class="row">
                        <div class="col-md-5">
                            <div class="table-bordered table-hover">
                                <div id="Div3" class="fixed-header"></div>
                                <div class="fixed-header-table-container">
                                    <asp:ListBox ID="lsbTokensDisp" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="25" multiple="multiple"></asp:ListBox>
                                    Cantidad:
                                <asp:Label ID="lblCantDisp" runat="server" Text="0"></asp:Label>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="text-center">


                                <asp:LinkButton ID="lnkbAddToken" runat="server" CssClass="btn btn-success btn-sm fixed-width-button" OnClick="lnkbAddToken_Click"> > </asp:LinkButton>
                                <br />
                                <br />
                                <asp:LinkButton ID="lnkbDelToken" runat="server" CssClass="btn btn-danger btn-sm fixed-width-button" OnClick="lnkbDelToken_Click"> < </asp:LinkButton>
                                <br />
                                <br />
                                <asp:LinkButton ID="lnkbAddTokens" runat="server" CssClass="btn btn-success btn-sm fixed-width-button" Visible="false"> >> </asp:LinkButton>
                                <br />
                                <br />
                                <asp:LinkButton ID="lnkbDelTokens" runat="server" CssClass="btn btn-danger btn-sm fixed-width-button" Visible="false"> << </asp:LinkButton>


                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="table-bordered table-hover">
                                <div id="Div4" class="fixed-header"></div>
                                <div class="fixed-header-table-container">

                                    <asp:ListBox ID="lstbTokensAsign" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="25" multiple="multiple"></asp:ListBox>

                                    Cantidad:
                                <asp:Label ID="lblCantAsign" runat="server" Text="0"></asp:Label>

                                </div>
                            </div>



                            <div class="row">
                                <div class="botonera pull-right">

                                    <asp:LinkButton CssClass="btn btn-success btn-sm fixed-width-button" ID="lnkbActualizarToken" runat="server" Text="Actualizar" AutoPostback="false" OnClick="lnbActualizarTokens_Click">
                                              <span class="glyphicon glyphicon-log-in"></span>&nbsp;Actualizar
                                    </asp:LinkButton>
                                    <asp:LinkButton CssClass="btn btn-primary btn-sm fixed-width-button" ID="btnCerrar" runat="server" OnClick="btnCerrar_Click" CausesValidation="False">
                            <span class="glyphicon glyphicon-remove"></span>&nbsp;Cerrar
                                    </asp:LinkButton>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel></p>
        </div>
       
    </div>

</asp:Panel>

<script>
    function mostrar() {
        $("#menuToken").removeClass('hide');
        $("#menuToken").addClass('show');
        
    }
</script>