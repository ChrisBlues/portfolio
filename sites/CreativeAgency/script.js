// On/Off du formulaire de Login
let myform = document.querySelector(".myform")
let login = document.querySelector("#login-form")
let menubar = document.querySelector("#menu-bars")
let mynav = document.querySelector(".navbar")


login.onclick = () => {
    myform.classList.toggle('active');
}

menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active');
}

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
