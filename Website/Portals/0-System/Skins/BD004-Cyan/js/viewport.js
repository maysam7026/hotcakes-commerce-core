jQuery(document).ready(function($) {
								
  

  // Mobile Menu

$(".menu_box").click(function () {
            if (!$(this).hasClass("active")) {
                $(".MobileMenu").slideDown().addClass("menu_hidden");
                $(this).addClass("active");
            }
            else {
                $(".MobileMenu").slideUp("normal",function(){
                   $(this).removeAttr("style").removeClass("menu_hidden");
                });
                $(this).removeClass("active");
            }
        });

  // Search
  // =======================

$(".icon-search").click(function () {
            if ($(".search_bg").css("display") == "none") {
                $(".search_bg").slideDown();
                $(this).addClass("active");
            }
            else {
                $(".search_bg").slideUp();
                $(this).removeClass("active");
            }
        });
    //START dnnsoftware.ir
    if ($('html').attr("lang") == 'fa-IR') {
        var s = "جستجو...";
    } else {
        var s = "search...";
    }
        //END dnnsoftware.ir
	$("#dnn_dnnSEARCH_txtSearch").val(s).click(function(){
	var ss=$(this).val();if(ss==s)$(this).val("") })
	.blur(function(){
	var ss=$(this).val();if(ss=="")$(this).val(s) });

});
  // Mobile View
  // =======================

$('head').append('<meta name="viewport" content="width=device-width,minimum-scale=1.0, maximum-scale=2.0"/>');





// Dropdown

$('.fa-user').hover(function () {
  $(this).addClass('magictime puffIn');
});

