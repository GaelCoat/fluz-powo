(function ($){
    $('.header-icon').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-activation');
        $('.header-icon').toggleClass('menu-active');
    });

    $('#menu ul li a').click(function (e){
        $('body').removeClass('menu-activation');
        $('.header-icon').removeClass('menu-active');
    });
})(jQuery);