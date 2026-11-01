const cakesChris = [
  { src: "imgs/chris/c1.jpg", title: "Vanilla Snow", slogan: "A radiance, a softness.", price: 425 },
  { src: "imgs/chris/c2.jpg", title: "Multicolored Escape", slogan: "The color can be tasted here.", price: 475 },
  { src: "imgs/chris/c3.jpg", title: "Cracking Amazonia", slogan: "Gluttony becomes a painting.", price: 520 },
  { src: "imgs/chris/c4.jpg", title: "Gourmet Christmas", slogan: "The heat becomes tasteful.", price: 750 },
  { src: "imgs/chris/c5.jpg", title: "Lemon Whipped Cream", slogan: "This cake, a work to be celebrated.", price: 419 },
  { src: "imgs/chris/c6.jpg", title: "Chocolate Velvet", slogan: "One slice, one emotion.", price: 499 },
  { src: "imgs/chris/c7.jpg", title: "Caramel Butter", slogan: "Savor the art of flavors.", price: 480 },
  { src: "imgs/chris/c8.jpg", title: "Red Berries", slogan: "To taste is to be thrilled.", price: 469 },
  { src: "imgs/chris/c9.jpg", title: "Golden Mirage", slogan: "A shimmer of sweetness.", price: 419 },
  { src: "imgs/chris/c10.jpg", title: "Strawberries Frost", slogan: "Tender red, genuine flavor.", price: 445 },
  { src: "imgs/chris/c11.jpg", title: "Tropical Whisper", slogan: "A breeze from distant shores.", price: 515 },
  { src: "imgs/chris/c12.jpg", title: "Midnight Cocoa", slogan: "Darkness melts into delight.", price: 487 },
  { src: "imgs/chris/c13.jpg", title: "Citrus Spell", slogan: "The zest awakens the senses.", price: 429 },
  { src: "imgs/chris/c14.jpg", title: "Delicious drift", slogan: "Soft as a breeze, bold as a bloom.", price: 437 },
  { src: "imgs/chris/c15.jpg", title: "Pearl Delight", slogan: "Elegance you can savor.", price: 510 },
  { src: "imgs/chris/c16.jpg", title: "Sparkling Balance", slogan: "Warmth wrapped in wonder.", price: 399 }

];

// Paramètres
const itemsPerPage = 8;
const gallery = document.getElementById("gallery2");
const paginationButtons = document.querySelectorAll(".pagination button");

function renderPage(pageIndex) {
  gallery.innerHTML = "";
  const start = pageIndex * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = cakesChris.slice(start, end);

  pageItems.forEach(cake => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${cake.src}" alt="${cake.title}">
      <h3>${cake.title}</h3>
      <p>${cake.slogan}</p>
      <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
      </div>
      <div class="card-footer">
        <span class="price">₹ ${cake.price}</span>
        <button class="cart-btn" aria-label="Add to cart">
          <svg class="cart-icon" viewBox="0 0 24 24">
            <path d="M3 3h2l2.2 10.5a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6l1.2-6.5H7.6" />
            <circle cx="9" cy="19" r="1.5" />
            <circle cx="17" cy="19" r="1.5" />
          </svg>
        </button>
      </div>
    `;
    gallery.appendChild(card);
  });

  // mise à jour des boutons actifs
  paginationButtons.forEach(btn => btn.classList.remove("active"));
  paginationButtons[pageIndex].classList.add("active");
}

// initialisation
renderPage(0);

// écoute des clics
paginationButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const pageIndex = parseInt(btn.dataset.page);
    renderPage(pageIndex);
  });
});
