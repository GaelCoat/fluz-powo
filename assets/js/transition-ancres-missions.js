// Transition pour les ancres missions
$(document).ready(function () {
    $(".categorie-missions").bind('mouseover', function () {
        var id = $(this).data('article');
        $(".article-info").removeClass("missions-active");
        $("#" + id).addClass("missions-active")

    });
    $(".categorie-missions").hover(function () {
        $("li.categorie-missions").removeClass("active");
        $(this).addClass("active")
    })
});
