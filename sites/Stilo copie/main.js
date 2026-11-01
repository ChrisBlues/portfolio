// Menu  Hamburger
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');

hamburger.addEventListener("click", ()=>{
    navlinks.classList.toggle("navlinks-active");
})

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector('.section-four-container');
    const overlay = section.querySelector('.fade-overlay');
    const content = section.querySelector('.content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                overlay.classList.add('visible');
                content.classList.add('visible');
                observer.unobserve(section); // empêche de rejouer trop tôt
            }
        });
    }, { 
        threshold: 0.01, 
        rootMargin: "-10% 0px -10% 0px" 
    });

    observer.observe(section);
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

