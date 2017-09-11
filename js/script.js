$(document).ready(function () {

$(".content li").mouseover(function(){
    $(".main .active").removeClass("active");
    $(".main .image").eq($(this).index()).addClass("active");

})
$(".content img").mouseover(function(){
    $(".content .nactive").removeClass("nactive");
    $(this).addClass("nactive");

});
});