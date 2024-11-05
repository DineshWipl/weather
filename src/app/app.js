import 'swiper/swiper-bundle.min.css';


$(window).scroll(function(){
    if ($(window).scrollTop() >= 1) {
        $('nav').addClass('fixed-header');
        
    }
    else {
        $('nav').removeClass('fixed-header');
        }
});

