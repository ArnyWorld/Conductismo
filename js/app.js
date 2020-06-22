AOS.init();
$(".subir").click(function(e) {
    e.preventDefault();
    console.log("Hiciste click");
    $("html, body").animate({
        scrollTop: 0
    }, 2500);
    return false;
});