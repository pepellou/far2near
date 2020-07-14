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

    /*
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
    */

    var menu = $('#menu');
    var converters = $('#converters');

    var capitalize = (str) => str.replace(/^./, str[0].toUpperCase());

    var setRangeControl = function(ctrlSelector, fromSelector, toSelector, convert) {
        var theControl = $(ctrlSelector);
        var fromLabel = $(fromSelector);
        var toLabel = $(toSelector);
        theControl.on('input', function() {
            var fromValue = parseInt(theControl.val());
            var toValue = convert(fromValue);
            fromLabel.text(fromValue);
            toLabel.text(toValue);
        });
    };

    for (var i = 0; i < conversionsCategories.length; i++) {
        var category = conversionsCategories[i];
        menu.append(
            '<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#' + category.name + '">'
                + '<i class="fa ' + category.icon + '" aria-hidden="true"></i> '
                + category.name + '</a></li>'
        );
        converters.append(
            '<h2 id="' + category.name + '"><i class="fa '
                + category.icon + '" aria-hidden="true"></i> '
                + capitalize(category.name) + '</h2>'
        );
        for (var j = 0; j < category.conversions.length; j++) {
            var conversion = category.conversions[j];
            var controlRangeName = 'controlRange_' + i + '_' + j;
            var fromId = controlRangeName + '_from';
            var toId = controlRangeName + '_to';
            var fromUnits = conversion.from;
            var toUnits = conversion.to;
            var fromValue = conversion.value;
            var toValue = conversion.convert(conversion.value);
            var min = conversion.min;
            var max = conversion.max;
            var step = conversion.step;
            converters.append(
                '<div class="container"><form><div class="form-group">'
                    + '<label for="' + controlRangeName + '"><span id="' + fromId + '">' + fromValue + '</span> ' + fromUnits + '</label>'
                    + '<label style="text-align: right; width: 100%; display: block; margin-top: -36px;" for="' + controlRangeName + '"><span id="' + toId + '">' + toValue + '</span> ' + toUnits + '</label>'
                    + '<input type="range" class="form-control-range" id="' + controlRangeName + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + fromValue + '">'
                    + '</div>'
                    + '</form>'
                    + '</div>'
            );
            setRangeControl(
                '#' + controlRangeName,
                '#' + fromId,
                '#' + toId,
                conversion.convert
            );
        }
    }

})(jQuery); // End of use strict
