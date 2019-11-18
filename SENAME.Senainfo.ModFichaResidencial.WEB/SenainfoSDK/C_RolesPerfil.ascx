<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_RolesPerfil.ascx.cs" Inherits="SenainfoSdk.UI.C_RolesPerfil" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>


<script type="text/javascript">
    function ShowModalPopupRoles() {
        $find("mper").show();
        return false;
    }
    function HideModalPopupRoles() {
        $find("mper").hide();
        return false;
    }
</script>

<asp:LinkButton ID="lnkDummyRoles" runat="server"></asp:LinkButton>
<asp:LinkButton ID="lnkRoles" runat="server" CssClass="btn btn-info btn-sm fixed-width-button" OnClientClick="return ShowModalPopupRoles()">
    <span class="glyphicon glyphicon-lock"></span>  Roles
</asp:LinkButton>

<cc1:ModalPopupExtender ID="mpeRoles" runat="server"
    PopupControlID="PanelRoles"
    DropShadow="true"
    TargetControlID="lnkDummyRoles"
    BehaviorID="mper"
    BackgroundCssClass="modalBackground">
</cc1:ModalPopupExtender>

<asp:Panel ID="PanelRoles" runat="server" align="center" Style="display: none">

    <div class="modal-content">
        <div id="home" class="tab-pane fade in active">
            <p>
                        <div class="popupConfirmation" id="modal_trabajador">
                            <div class="modal-header header-modal">
                                <asp:LinkButton ID="lnkClose" CssClass="close" aria-label="Close" runat="server" Text="Cerrar" CausesValidation="false" OnClientClick="return HideModalPopupRoles()">
                                <span aria-hidden="true">&times;</span>
                                </asp:LinkButton>
                                <h4 class="modal-title">Asignación Roles Disponibles</h4>
                            </div>
                            <h4>
                                <asp:Label ID="lblMensaje" runat="server" CssClass="subtitulo-form" Text="Coincidencias" Visible="False"></asp:Label>
                            </h4>
                            <div class="container">
                                
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="text-center">
                                            Roles Disponibles
                                        </div>
                                    </div>
                                    <div class="col-md-2"></div>
                                    <div class="col-md-5">
                                        <div class="text-center">
                                            Roles Adicionales
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="table-bordered table-hover">
                                            <div id="tableHeader" class="fixed-header"></div>
                                            <div class="fixed-header-table-container">
                                                <asp:ListBox ID="lstbRolesDisp" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="20" multiple="multiple"></asp:ListBox>
                                                Cantidad:
                                            <asp:Label ID="lblCantRolesDisp" runat="server" Text="0"></asp:Label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="text-center">
                                            <asp:LinkButton ID="lnkbAddRol" runat="server" CssClass="btn btn-success btn-sm fixed-width-button" OnClick="lnkbAddRol_OnClick"> > </asp:LinkButton>
                                            <br />
                                            <br />
                                            <asp:LinkButton ID="lnkbDelRol" runat="server" CssClass="btn btn-danger btn-sm fixed-width-button" OnClick="lnkbDelRol_OnClick"> < </asp:LinkButton>
                                            <br />
                                            <br />
                                        </div>
                                    </div>

                                    <div class="col-md-5">
                                        <div class="table-bordered table-hover">
                                            <div id="Div2" class="fixed-header"></div>
                                            <div class="fixed-header-table-container">
                                                <asp:ListBox ID="lstbRolAsig" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="20" multiple="multiple" OnDataBound="lstbRolAsig_OnDataBound"></asp:ListBox>
                                                Cantidad:
                                            <asp:Label ID="lblCantRolAsig" runat="server" Text="0"></asp:Label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="botonera pull-right">
                                        <asp:LinkButton ID="lnkCloseFooterRoles" CssClass="btn btn-danger btn-sm fixed-width-button" aria-label="Close" runat="server" CausesValidation="false" OnClientClick="return HideModalPopupRoles()">
                                        <span class="glyphicon glyphicon-remove"></span>&nbsp;Agregar
                                        </asp:LinkButton>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                   
            </p>
        </div>


    </div>

</asp:Panel>
