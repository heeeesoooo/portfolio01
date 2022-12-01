$(function () {


    //--------------- topBanner-------------->
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    })

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,

    });

    $('.main_pro_slide').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false
    })

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })
})