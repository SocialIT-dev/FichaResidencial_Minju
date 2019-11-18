<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_CargaArchivo.ascx.cs" Inherits="SenainfoSdk.UI.C_CargaArchivo" %>

<script type="text/javascript">
 

    function AddRowToTable(btn) {
        var id = btn.id;
        var lastChar = id.substr(id.length - 1);
        var btnName = id.substr(id.length - 7, 6);
        if (btnName == "btnMas") {
            var trMas = $("#tr" + (parseInt(lastChar) + 1))
            if (trMas != null) {
                trMas.show();
                id.visible = false;
            }
        }
        else {
            var lastChar1 = id.substr(id.length - 1);
            var btnName1 = id.substr(id.length - 9, 8);
            if (btnName1 == "btnMenos") {
                var trMenos = $("#tr" + lastChar1)
                if (trMenos != null)
                { trMenos.hide(); }
            };
        };
        return;

    }


</script>
<style>
    /*.yourBtn {
        -moz-appearance: textfield-multiline;
        -webkit-appearance: textarea;
        border: 1px solid gray;
        font: medium -moz-fixed;
        font: -webkit-small-control;
        height: 28px;
        overflow: auto;
        padding: 2px;
        resize: both;
        width: 400px;
        background: white;
    }*/
    .form-control {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }

    .file-caption-name {
        display: inline-block;
        overflow: hidden;
        height: 20px;
        word-break: break-all;
    }

    /*.input-group {
        position: relative;
        display: table;
        border-collapse: separate;
    }*/

    .input-group .form-control, .input-group-addon, .input-group-btn {
        display: table-cell;
    }

    .input-group .form-control {
        position: relative;
        z-index: 2;
        float: left;
        width: 100%;
        margin-bottom: 0;
    }

    .input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group {
        z-index: 2;
        margin-left: -1px;
    }

    .input-group-btn > .btn + .btn {
        margin-left: -1px;
    }

    .input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:first-child > .btn-group:not(:first-child) > .btn, .input-group-btn:first-child > .btn:not(:first-child), .input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group > .btn, .input-group-btn:last-child > .dropdown-toggle {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .input-group-btn > .btn {
        position: relative;
    }

    .btn-file {
        position: relative;
        overflow: hidden;
    }

    .btn-file input[type=file] {
        position: absolute;
        top: 0;
        right: 0;
        min-width: 100%;
        min-height: 100%;
        text-align: right;
        opacity: 0;
        background: none;
        cursor: inherit;
        display: block;
    }

    .btn.disabled, .btn[disabled], fieldset[disabled] .btn {
        cursor: not-allowed;
        filter: alpha(opacity=65);
        -webkit-box-shadow: none;
        box-shadow: none;
        opacity: .65;
    }
    .file-caption-disabled {
        background-color: #EEE;
        cursor: not-allowed;
        opacity: 1;
    }
</style>
<asp:UpdatePanel runat="server" ID="UpdatePanel1" ChildrenAsTriggers="true">
    <ContentTemplate>

        <div class="file-input">
            <div class="input-group file-caption-main">
                <div id="fileCaption" runat="server" tabindex="500" class="form-control file-caption  kv-fileinput-caption">
                    <div id="FileCaptionName" runat="server" class="file-caption-name">
                    </div>
                </div>

                <div class="input-group-btn">
                    <div id="btnFile" runat="server" tabindex="500" class="btn btn-primary btn-file">
                        <div id="yourBtn" runat="server"></div>
                        <i class="glyphicon glyphicon-folder-open"></i>&nbsp;  
                                                <span class="hidden-xs">Seleccionar Archivo …</span>
                        <input type="file" id="archivo1" multiple name="archivo1" runat="server" enableviewstate="true"
                            class="file" data-show-preview="false" />
                    </div>
                    <asp:LinkButton ID="btnCarga"
                        runat="server"
                        OnClick="btnCargaClick"
                        TabIndex="500" title="Subir Archivo Seleccionado"
                        class="btn btn-warning fileinput-upload fileinput-upload-button">
                                            <span aria-hidden="true" class="glyphicon glyphicon-upload"></span>
                                            Subir Archivo
                    </asp:LinkButton>
                </div>
            </div>
        </div>


        <asp:Label Font-Size="13px" ID="lblMensaje" runat="server"></asp:Label>
        <%-- 
        <div tabindex="500" class="btn btn-primary btn-file">
            <i class="glyphicon glyphicon-folder-open"></i>&nbsp;  
            <span class="hidden-xs">Seleccionar Archivo …</span>
            <div id="yourBtn" runat="server" class="yourBtn">Haga click aquí para seleccionar un archivo</div>
            <div style='height: 0px; width: 0px; overflow: hidden;'>
                <input type="file" id="archivo1" multiple name="archivo1" runat="server" enableviewstate="true" class="file" />
            </div>
        </div>
                                
        <div>
            <div id="yourBtn" runat="server" class="yourBtn">Haga click para cargar un archivo</div>
            <div style='height: 0px; width: 0px; overflow: hidden;'>
                <input type="file" id="archivo1" multiple name="archivo1" runat="server" enableviewstate="true" class="file" />
            </div>
        </div>
        <asp:UpdateProgress ID="UpdateProgress1" runat="server" AssociatedUpdatePanelID="pnlArchivo">
                    <ProgressTemplate>
                        El archivo esta siendo almacenado...
                    </ProgressTemplate>
                </asp:UpdateProgress>--%>
    </ContentTemplate>
</asp:UpdatePanel>
