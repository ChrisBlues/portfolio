const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle menu visibility
  document.body.classList.toggle("show-mobile-menu");
})

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// ================================================================================

// Agrandit l'image dans la partie "Our menu" au click
document.addEventListener("DOMContentLoaded", function () {
  const popImages = document.querySelectorAll(".pop");
  const modal = new bootstrap.Modal(document.getElementById("imagemodal"));
  const modalImg = document.querySelector(".modal-image");

  // Clic sur image agrandie pour fermer + retour en haut
  modalImg.addEventListener("click", function () {
    modal.hide();

    // Retour inutile, gardé au cas où...
    // const gallerySection = document.getElementById("menu");
    // if (gallerySection) {
    //   gallerySection.scrollIntoView({ behavior: "smooth" });
    // }
  });

  // Clic sur miniature pour ouvrir
  popImages.forEach(function (img) {
    img.addEventListener("click", function (e) {
      e.preventDefault();
      const src = img.getAttribute("src");
      modalImg.setAttribute("src", src);
      modal.show();
    });
  });
});

// ================================================================================

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// ================================================================================

// Clic pour voir les attributions des couleurs des textes dans la 2e modale
function openModal() {
  document.getElementById('modal2').classList.remove('hidden');
}

// Clic pour fermer la modale
function closeModal() {
  document.getElementById('modal2').classList.add('hidden');
}
