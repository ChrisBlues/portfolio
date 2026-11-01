const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

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

ScrollReveal().reveal(".about__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500
});
ScrollReveal().reveal(".about__container img", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".service__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".service__card", {
    duration: 1000,
    delay: 1000,
    interval: 500,
});
ScrollReveal().reveal(".blog__content .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
    ...scrollRevealOption,
    delay: 500
});
ScrollReveal().reveal(".blog__content p", {
    ...scrollRevealOption,
    delay: 1000
});
ScrollReveal().reveal(".blog__content .blog__btn", {
    ...scrollRevealOption,
    delay: 1500
});


// Swiper Testimonials
const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Instagram
const instagram = document.querySelector(".instagram__flex")

Array.from(instagram.children).forEach(item => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    instagram.appendChild(duplicateNode);
})

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

