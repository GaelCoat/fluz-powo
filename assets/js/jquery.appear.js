(function ($) {
    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    if($(window).width() > 768){
        var win = $(window);

        var allMods = $(".module");

        allMods.each(function (i, el) {
            el = $(el);
            if (el.visible(true)) {
                el.addClass("already-visible");
            }
        });

        win.scroll(function (event) {

            allMods.each(function (i, el) {
                el = $(el);
                if (el.visible(true)) {
                    el.removeClass("module");
                    el.addClass("come-in");
                }
                else {
                    el.addClass("module");
                    el.removeClass("come-in");
                }
            });


            var alMods = $(".module-one-time");

            alMods.each(function (i, ol) {
                ol = $(ol);
                if (ol.visible(true)) {
                    ol.addClass("already-visible");
                }
            });

            win.scroll(function (event) {

                alMods.each(function (i, ol) {
                    ol = $(ol);
                    if (ol.visible(true)) {
                        ol.removeClass("module");
                        ol.addClass("come-in");
                    }
                });
            });
        });
    }
})(jQuery);