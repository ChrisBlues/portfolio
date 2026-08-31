// Menu - Hamburger
const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navlist");

hamburger.addEventListener('click', ()=>{

    list.classList.toggle("list-active");
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
