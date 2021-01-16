$(document).ready(function() {

    // start mixitup

    $("#con").mixItUp(function(event) {
        event.preventDefault();
    });
    // 


    // start counter 

    $(".num").counterUp({
        delay: 10,
        time: 2000
    });
    // 

    // start slick

    $(".slick").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // 

    // start type


    var typed = new Typed('.type-text', {
        // Waits 1000ms after typing "First"
        typeSpeed: 100,
        loop: true,
        cursorChar: '|',
        backDelay: 1500,
        backSpeed: 30,
        strings: ['UI Developer', " Freelancer"]
    });
    var typed = new Typed('.type-text-2', {
        // Waits 1000ms after typing "First"
        typeSpeed: 90,
        loop: true,
        backDelay: 2500,
        backSpeed: 20,
        cursorChar: '|',
        strings: ['UI Developer', ]
    });

    // 

    // start scroll-to-top
    var scrollToTop = $(".scroll-to-top i")

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
            scrollToTop.fadeIn(500)
        } else {
            scrollToTop.fadeOut(500)
        }
    })




    $(".scroll-to-top i").click(function(e) {
        e.preventDefault()

        $("html,body").animate({
            scrollTop: 0,
        }, 1000)
    })



    // 


    // fisrt scroll


    $(".sahm i").click(function(e) {
        e.preventDefault()

        $("html,body").animate({
            scrollTop: "1000px",
        }, 700)
    })


    // 

    // start main scroll to section

    $(".step-2 li a").click(function(e) {

        e.preventDefault()

        $(this).addClass("active").parent().siblings().find("a").removeClass("active")
    })





    $(".step-2 li a").click(function() {

        $("html,body").animate({

            scrollTop: $("#" + $(this).data("value")).offset().top + 1

        }, 1000)
    })




    $(window).scroll(function() {

        $(".block").each(function() {

            if ($(window).scrollTop() > $(this).offset().top) {


                var blockID = $(this).attr("id");

                $(".step-2 li a").removeClass("active");

                $('.step-2 li a[data-value="' + blockID + '"]').addClass("active")
            }
        })
    })



    // 

    // start ripples effect
    // $(".back").ripples({
    //     // dropRadius: 100,
    //     // perturbance: 0.7,

    // });




    // 


    // start icon nav
    $(".icon-mop i").click(function() {
        $(".lon").addClass("click")

        $(".icon-mop i").fadeOut()

    })


    $(".icon-left i").click(function() {
        $(".lon").removeClass("click")

        $(".icon-mop i").fadeIn()
    })




    // 


})