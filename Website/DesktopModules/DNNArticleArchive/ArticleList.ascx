<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ArticleList.ascx.cs" Inherits="ZLDNN.Modules.DNNArticleArchive.ArticleList" %>
<%@ Register TagPrefix="zldnn" TagName="list" Src="~/desktopmodules/DNNArticle/ctlArticleListBase.ascx" %>
<zldnn:list id="myArticleList" runat="server"  /><asp:LinkButton ID="cmdArchiveList" runat="server" resourcekey="cmdArchiveList"  OnClick="cmdArchiveList_Click" CssClass="CommandButton"></asp:LinkButton>