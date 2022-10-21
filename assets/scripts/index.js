$("#bars").click(function () {
    $(".nav-links").toggleClass("mobile-links")
    $("#close").click(function () {
        $(".nav-links").removeClass("mobile-links")
    })
    if ($(".nav-links").hasClass("mobile-links")) {
        $(".nav-links #close").empty().prepend(`
        <i class="fa fa-times" aria-hidden="true" id="times"></i>
        `)
    }
})
$("button").click(function () {
    console.log("Yeah");
})
console.log($("#bars"));