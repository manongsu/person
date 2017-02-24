var $ = jQuery.noConflict();
$(function() {
    $('#activator').click(function(){
        $('#box').animate({'top':'0px'},900);
    });
    $('#boxclose').click(function(){
        $('#box').animate({'top':'-1000px'},900);
    });
});
$(document).ready(function(){
    $(".toggle_container").hide();
    $(".trigger").click(function(){
        $(this).toggleClass("active").next().slideToggle("slow");
        return false; //Prevent the browser jump to the link anchor
    });
});