const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

// Ferme le menu dès l'appui sur une des options.
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// SCROLLREVEAL
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// NB : "S" majuscule INDISPENSABLE pour "ScrollReveal" !
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".hotel__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".steps__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".property__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".trip__card", {
    ...scrollRevealOption,
    interval: 500,
});


// Déplacement inspiration
const inspiration=document.querySelector(".inspiration__wrapper");
const inspirationImages=Array.from(inspiration.children);

inspirationImages.forEach((item) =>{
    const duplicateNode=item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden",true);
    inspiration.appendChild(duplicateNode);
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




