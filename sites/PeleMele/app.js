const container = document.querySelector(".container");
const likeBtns = document.querySelector(".like-btn");

let swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    loop: true,
    speed: 6000,
    freeMode: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
    },

});
// Arrêt du défilement lors du survol de la souris sur les diapos.
function stopAutoplay() {
    const swiperTranslate = swiper.getTranslate();
    swiper.setTranslate(swiperTranslate);
    swiper.autoplay.stop()
}

// Reprise de la lecture automatique à partir de la diapo sur laquelle elle se trouvait.
function startAutoplay() {
    swiper.slideTo(swiper.activeIndex, 3000, false);
    swiper.autoplay.start();
}

// Ajout d'écouteurs d'événements
// - pour mettre le défilement en pause lors du survol
container.addEventListener("mouseenter", () => stopAutoplay());
// - en reprise lorsque la souris sort de la zone de survol.
container.addEventListener("mouseleave", () => startAutoplay());

// Ajout de fonctions aux boutons "J'aime" (coeur) :
// - lors d'un click sur le coeur, il devient rouge et clignote, indiquant que la diapo est appréciée.
likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("active");
        likeBtn.classList.toggle("pulse");
    });
});