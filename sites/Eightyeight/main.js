const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");
})

// Fermeture du menu déroulant en cas d'appui sur une des options du menu.
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

// ScrollReveal
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".service__container .section__subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".service__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service__row:nth-child(2n-1) img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".service__row:nth-child(2) img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".service__details h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service__details p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".service__btn", {
    ...scrollRevealOption,
    delay: 1500,
});


// Swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
        rotate: 0,
        depth: 0,
        modifier: 1,
        scale: 0.9,
        stretch: 0,
    },
});

// Instagram
const instagram = document.querySelector(".instagram__images");

const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    instagram.appendChild(duplicateNode);
}))

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



