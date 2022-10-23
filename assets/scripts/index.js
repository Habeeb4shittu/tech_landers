$(".toggler").click(function () {
    $("nav").toggleClass("active")
    if ($("nav").hasClass("active")) {
        $(".toggler .bar #three-bar").removeClass("fa fa-bars").addClass("fas fa-times")
        $(".toggler .bar #three-bar").addClass("close")
    } else {

        $(".toggler .bar #three-bar").removeClass("fas fa-times").addClass("fa fa-bars")
    }
})
