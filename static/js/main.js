function sticky_relocate() {
    let window_top = $(window).scrollTop();
    let footer_top = $(".footer").offset().top;
    let div_top = $('#sticky-anchor').offset().top;
    let div_height = $(".sidebar").height();

    let padding = 20;

    if (window_top + div_height > footer_top - padding)
        $('.sidebar').css({top: (window_top + div_height - footer_top + padding) * -1})
    else if (window_top > div_top) {
        $('.sidebar').addClass('stick').css({top: 0});
    } else {
        $('.sidebar').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});