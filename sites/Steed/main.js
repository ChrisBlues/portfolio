const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Fermeture du menu déroulant en cas de clic sur l'une des options
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__link", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".shop__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
});
ScrollReveal().reveal(".about__stats", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".banner__container p", {
    duration: 1000,
    interval: 500,
});

// Swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
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


