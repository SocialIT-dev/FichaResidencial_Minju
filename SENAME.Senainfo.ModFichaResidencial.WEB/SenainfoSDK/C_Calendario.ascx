<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="C_Calendario.ascx.cs" Inherits="SenainfoSdk.UI.C_Calendario" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajax" %>
<asp:TextBox ID="txt1" OnKeyPress="return false;" runat="server" MaxLength="10" placeholder="dd-mm-aaaa" OnTextChanged="txt1_TextChanged" AutoPostBack="true"/>
<ajax:CalendarExtender PopupButtonID="imagen1" FirstDayOfWeek="Monday" ID="Calendar1" runat="server" Enabled="true" Format="dd-MM-yyyy" TargetControlID="txt1" ValidateRequestMode="Enabled" ViewStateMode="Enabled" />