$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfset = $(window).scrollTop();

    checkScroll(scrollOfset);

    $(window).on("scroll", function () {

        scrollOfset = $(this).scrollTop();
        checkScroll(scrollOfset);

    })

    function checkScroll(scrollOfset) {
        if (scrollOfset >= introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }
    
})