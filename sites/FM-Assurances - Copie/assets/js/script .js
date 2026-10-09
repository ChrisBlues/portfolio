const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active'); // hamburger → croix
    menu.classList.toggle('active');      // slide du menu
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