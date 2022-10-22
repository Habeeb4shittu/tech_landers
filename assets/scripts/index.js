$("#bars").click(function () {
    $(".mobile-links").toggleClass("active")
    $("#close").click(function () {
        $(".mobile-links").removeClass("active")
    })
})
ScrollReveal().reveal('.brand', { delay: 500, origin: 'left', distance: '200%' })
ScrollReveal().reveal('.toggler', { delay: 500, origin: 'right', distance: '200%' })
ScrollReveal().reveal('.home-link', { delay: 600, origin: 'top', distance: '200%', ease: 'ease-in' })
ScrollReveal().reveal('.about-link', { delay: 700, origin: 'top', distance: '200%' })
ScrollReveal().reveal('.services-link', { delay: 750, origin: 'left', distance: '200%' })
ScrollReveal().reveal('.contact-link', { delay: 800, origin: 'bottom', distance: '200%' })