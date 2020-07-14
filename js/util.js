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

var smoothScroll = function () {
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
};
