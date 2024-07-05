$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/up__arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/down__arrow.png" alt=""></button>',
        fade: true
    });

});

$(function(){
$('.product__content-names').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content-items',
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product_up_arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product_down_arrow.png" alt=""></button>',
  });
  $('.product__content-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__content-names',
    fade: true,
    arrows: false
  });
});