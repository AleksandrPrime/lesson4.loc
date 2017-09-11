$('.slider').slick({
    speed: 900
});

var nav = $('.category__nav');

$('.category__btn').click(function () {

    $(nav).slideToggle(400);

});