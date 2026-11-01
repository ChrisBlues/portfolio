burger = document.querySelector('.burger');
navbarItems = document.querySelector('.navbar');
nav = document.querySelector('.items');

burger.addEventListener('click', () => {
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
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
