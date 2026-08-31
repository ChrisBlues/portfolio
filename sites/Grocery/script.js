// Let's add slider for that

$('.item-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '<button class="slick-prev"><svg width="20" height="20"><path d="M12 4 L6 10 L12 16" stroke="white" stroke-width="2" fill="none"/></svg></button>',
  nextArrow: '<button class="slick-next"><svg width="20" height="20"><path d="M8 4 L14 10 L8 16" stroke="white" stroke-width="2" fill="none"/></svg></button>',
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.product-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: '<button class="slick-prev"><svg width="20" height="20"><path d="M12 4 L6 10 L12 16" stroke="white" stroke-width="2" fill="none"/></svg></button>',
  nextArrow: '<button class="slick-next"><svg width="20" height="20"><path d="M8 4 L14 10 L8 16" stroke="white" stroke-width="2" fill="none"/></svg></button>',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Détection du bas de page pour les remerciements au concepteur
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const footer = document.getElementById('thank-you-footer');

  if (scrollPosition >= pageHeight - 50) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});
