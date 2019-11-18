<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="I_Calendario.ascx.cs" Inherits="SenainfoSdk.UI.I_Calendario" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajax" %>

<asp:TextBox runat="server" ID="Calendario" CssClass="form-control text-center" onkeypress="return false;"></asp:TextBox>
<ajax:CalendarExtender  runat="server" ID="CalendarExtender" TargetControlID="Calendario" Animated="true" />
