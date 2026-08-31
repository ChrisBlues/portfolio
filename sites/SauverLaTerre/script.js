// Script scrollspy
const sections = document.querySelectorAll("section");
const navDots = document.querySelectorAll(".onglet-side a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 4) {
            current = section.getAttribute("id");
        }
    });

    // Cas spécial : si on est tout en bas, forcer la dernière section
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        current = sections[sections.length - 1].getAttribute("id");
    }

    navDots.forEach(dot => {
        dot.classList.remove("active");
        if (dot.getAttribute("href") === "#" + current) {
            dot.classList.add("active");
        }
    });
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
