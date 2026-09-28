'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


/**
 * MOBILE NAV
 */
const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelectorAll("[data-overlay]");

const togglerNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);

const closeNav =function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNav);

/**
 * HEADER
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    backTopBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active");
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


