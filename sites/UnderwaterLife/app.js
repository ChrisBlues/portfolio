const swiper = new Swiper(".swiper", {
    grabCursor: true,
    speed: 800,
    loop: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    allowTouchMove: true,
    mousewheel: {
        invert: false,
        thresholdDelta: 50,
        sensivity: 1,
    },
    autoplay:{
        delay:3500,
    },
    on: {
        slideChangeTransitionStart: function () {
            animateSlide(this.slides[this.activeIndex]);
        },
    },
});

function animateSlide(slide) {
    const wrapper = slide.querySelector(".img-wrapper");
    if (!wrapper) return;

    wrapper.setAttribute("data-splitting", "cells");
    wrapper.setAttribute("data-columns", "8");
    wrapper.setAttribute("data-rows", "8");
    wrapper.setAttribute("data-image", "true");

    Splitting({ target: wrapper });

    const cells = wrapper.querySelectorAll(".cell");

    let indexes = [];
    for (let i = 0; i < cells.length; i++) {
        indexes.push(i);
    }

    indexes.sort(() => Math.random() - 0.5);

    cells.forEach((cell, i) => {
        cell.style.setProperty("--cell-index", indexes[i]);
    });
}

animateSlide(swiper.slides[swiper.activeIndex]);

