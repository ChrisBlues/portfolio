var textSlider = new Swiper(".text-slider", {
    direction: "vertical",
    speed: 900,
    mousewheel: {
        forceToAxis: true,
        sensitivity: 0.5,
        thresholdDelta: 30,
    },
    allowTouchMove: false,
});

var imageSlider = new Swiper(".image-slider", {
    grabCursor: true,
    speed: 900,
    slidesPerView: "auto",
    centeredSlides: true,
    mousewheel: true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        260: {
            spaceBetween: 20,
        },
        760: {
            spaceBetween: 40,
        },
    },
});

imageSlider.controller.control = textSlider;
textSlider.controller.control = imageSlider;