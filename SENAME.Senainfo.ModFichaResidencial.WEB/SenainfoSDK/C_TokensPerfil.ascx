<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_TokensPerfil.ascx.cs" Inherits="SenainfoSdk.UI.C_TokensPerfil" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>


<script type="text/javascript">
    function ShowModalPopupTokens() {
        $find("mpet").show();
        return false;
    }
    function HideModalPopupTokens() {
        $find("mpet").hide();
        return false;
    }
</script>

<asp:LinkButton ID="lnkDummyToken" runat="server"></asp:LinkButton>
<asp:LinkButton ID="lnkToken" runat="server" CssClass="btn btn-info btn-sm fixed-width-button" OnClientClick="return ShowModalPopupTokens()">
    <span class="glyphicon glyphicon-lock"></span>  Tokens
</asp:LinkButton>

<cc1:ModalPopupExtender ID="mpeTokens" runat="server"
                        PopupControlID="PanelTokens"
                        DropShadow="true"
                        TargetControlID="lnkDummyToken"
                        BehaviorID="mpet"
                        BackgroundCssClass="modalBackground">
</cc1:ModalPopupExtender>

<asp:Panel ID="PanelTokens" runat="server" align="center" Style="display: none">

    <div class="modal-content">
        <div id="home" class="tab-pane fade in active">
            <p>
                <div class="popupConfirmation" id="modal_trabajador">
                    <div class="modal-header header-modal">
                        <asp:LinkButton ID="lnkCloseTokens" CssClass="close" aria-label="Close" runat="server" Text="Cerrar" CausesValidation="false" OnClientClick="return HideModalPopupTokens()">
                            <span aria-hidden="true">&times;</span>
                        </asp:LinkButton>
                        <h4 class="modal-title">Asignación Tokens Disponibles</h4>
                    </div>
                    <h4>
                        <asp:Label ID="lblMensajeTokens" runat="server" CssClass="subtitulo-form" Text="Coincidencias" Visible="False"></asp:Label>
                    </h4>
                    <div class="container">
                                
                        <div class="row">
                            <div class="col-md-5">
                                <div class="text-center">
                                    Tokens Disponibles
                                </div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <div class="text-center">
                                    Tokens Asignados
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-5">
                                <div class="table-bordered table-hover">
                                    <div id="tableHeader" class="fixed-header"></div>
                                    <div class="fixed-header-table-container">
                                        <asp:ListBox ID="lstbTokensDisp" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="20" multiple="multiple"></asp:ListBox>
                                        Cantidad:
                                        <asp:Label ID="lblCantTokensDisp" runat="server" Text="0"></asp:Label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="text-center">
                                    <asp:LinkButton ID="lnkbAddToken" runat="server" CssClass="btn btn-success btn-sm fixed-width-button" OnClick="lnkbAddToken_OnClick"> > </asp:LinkButton>
                                    <br />
                                    <br />
                                    <asp:LinkButton ID="lnkbDelToken" runat="server" CssClass="btn btn-danger btn-sm fixed-width-button" OnClick="lnkbDelToken_OnClick"> < </asp:LinkButton>
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div class="col-md-5">
                                <div class="table-bordered table-hover">
                                    <div id="Div2" class="fixed-header"></div>
                                    <div class="fixed-header-table-container">
                                        <asp:ListBox ID="lstbTokenAsig" runat="server" AutoPostBack="false" CssClass="form-control input-sm" Rows="20" multiple="multiple"></asp:ListBox>
                                        Cantidad:
                                        <asp:Label ID="lblCantTokenAsig" runat="server" Text="0"></asp:Label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="botonera pull-right">
                                <asp:LinkButton ID="lnkCloseFooterTokens" CssClass="btn btn-danger btn-sm fixed-width-button" aria-label="Close" runat="server" CausesValidation="false" OnClientClick="return HideModalPopupTokens()">
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