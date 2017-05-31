/**
 *
 * @author    Benoit Asselin <contact(at)ab-d(dot)fr>
 * @version    javascript.js, 2012/12/31
 *
 */
$(document).ready(function() {
    $.pageLoader();
});

(function ($) {

    /**
     * Loader de page
     */
    $.pageLoader = function () {
        // Selection des images en src="
        var $elements = $('body').find('img[src]');
        // Selection des images en background-image
        $('body [style]').each(function () {
            var src = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            if (src && src != 'none') {
                $elements = $elements.add($('<img src="' + src + '"/>'));
            }
        });

        var $chargement = $('#chargement');
        var $chargementInfos = $('#chargement-infos');
        var $barLoader = $('#bar-loader');
        var elementsCharges = 0;
        var dureeMs = 1000;

        function animateStep(now, fx) {
            $chargementInfos.text(parseInt(now) + '%');
        }

        function chargementEnCours() {

            $('body').addClass('loading');
            $('#us').css({
                display: 'none'
            });
            $('#works').css({
                display: 'none'
            });
            $('#missions').css({
                display: 'none'
            });
            $('#gradient').css({
                display: 'none'
            });

            var pourcentage = 0;
            if ($elements.length) {
                pourcentage = parseInt((elementsCharges / $elements.length) * 100);
            }

            // Affichage du pourcentage
            $chargement
                .stop() // stop les anciennes animations
                .animate({pourcentage: pourcentage}, {
                    duration: dureeMs,
                    step: animateStep
                });
            $barLoader
                .stop() // stop les anciennes animations
                .animate({width: pourcentage + '%'});
        }

        function chargementTermine() {

            var pourcentage = 100;

            // Affichage du pourcentage
            $chargement
                .stop() // stop les anciennes animations
                .animate({pourcentage: pourcentage}, {
                    duration: (dureeMs / 2),
                    step: animateStep
                })
                // Disparition du chargement et affichage de la page
                .css({opacity: 1})
                .animate({opacity : 1}, function () {
                    // La page est prete
                    $chargement.css({
                        transform: 'translateX(-100%)'
                    });
                    $('.title-h1').css({
                        opacity: 1,
                        transform: 'translateY(0px)'
                    });
                    $('.title-h2').css({
                        opacity: 1,
                        transform: 'translateY(0px)'
                    });
                    $('body').removeClass('loading');

                    $('#us').css({
                        display: 'block'
                    });
                    $('#works').css({
                        display: 'block'
                    });
                    $('#missions').css({
                        display: 'block'
                    });
                    $('#gradient').css({
                        display: 'block'
                    });
                });
            $barLoader
                .stop() // stop les anciennes animations
                .animate({width: pourcentage + '%'}).css({width: pourcentage + '%'});
        }

        // La page contient des elements permettant d'afficher une barre de progression
        if ($elements.length) {
            chargementEnCours();

            $elements.load(function () {
                $(this).off('load');
                elementsCharges++;
                chargementEnCours();
            });
        }

        $(window).load(function () {
            // La page est integralement chargee
            chargementTermine();
        });
    };
})(jQuery);

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
