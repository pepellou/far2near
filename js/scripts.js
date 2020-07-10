/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $.get("http://wttr.in/Eagan?format=j1", function(data) {
        var d = JSON.parse(data);
        console.log('Eagan temp in C: ' + d.current_condition[0].temp_C);
        console.log('Eagan temp in F: ' + d.current_condition[0].temp_F);
    });

    $.get("http://wttr.in/Santiago+de+Compostela?format=j1", function(data) {
        var d = JSON.parse(data);
        console.log('Santiago de Compostela temp in C: ' + d.current_condition[0].temp_C);
        console.log('Santiago de Compostela temp in F: ' + d.current_condition[0].temp_F);
    });
})(jQuery); // End of use strict
