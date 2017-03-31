(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

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

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.removeClass("module");
            el.addClass("come-in");
        }
        else {
            el.addClass("module");
            el.removeClass("come-in");
        }
    });

});


var allMod = $(".module-side");

allMod.each(function (i, al) {
    var al = $(al);
    if (al.visible(true)) {
        al.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMod.each(function (i, al) {
        var al = $(al);
        if (al.visible(true)) {
            al.removeClass("module");
            al.addClass("come-side");
        }
    });

});


var alMods = $(".module-one-time");

alMods.each(function (i, ol) {
    var ol = $(ol);
    if (ol.visible(true)) {
        ol.addClass("already-visible");
    }
});

win.scroll(function (event) {

    alMods.each(function (i, ol) {
        var ol = $(ol);
        if (ol.visible(true)) {
            ol.removeClass("module");
            ol.addClass("come-in");
        }
    });

});