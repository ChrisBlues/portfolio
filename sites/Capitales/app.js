/* 2'53" */
var textSlider = new Swiper(".text-slider", {
    effect: "slide",
    direction: "vertical",
    speed: 1000,
    longSwipesRatio: 0.01,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var imageSlider = new Swiper(".image-slider", {
    effect: "fade",
    allowTouchMove: false,
});

textSlider.controller.control = imageSlider;

/* Particles */
particlesJS("particles-js", 
    {
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 800,
      },
    },
    "color": {
      "value": ["#ffe4de", "#80b112", "#ffc35d", "#5e4b87", "#dd4a56"],
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.45,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 6,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "none",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble",
      },
      "onclick": {
        "enable": false,
      },
      "resize": false,
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 10,
        "duration": 2,
        "opacity": 0.5,
        "speed": 3
      },
    }
  },
  "retina_detect": true
}
)
