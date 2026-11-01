const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// information
ScrollReveal().reveal(".information__card", {
    ...scrollRevealOption,
    interval: 500,
});

// testimonial
ScrollReveal().reveal(".testimonial__card", {
    ...scrollRevealOption,
    interval: 500,
});

// instructor
ScrollReveal().reveal(".instructor__card", {
    ...scrollRevealOption,
    interval: 500,
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

