const cakesChris = [
  { src: "imgs/chris/c1.jpg", title: "Vanilla Snow", slogan: "A radiance, a softness.", price: 425 },
  { src: "imgs/chris/c2.jpg", title: "Multicolored Escape", slogan: "The color can be tasted here.", price: 475 },
  { src: "imgs/chris/c3.jpg", title: "Cracking Amazonia", slogan: "Gluttony becomes a painting.", price: 520 },
  { src: "imgs/chris/c4.jpg", title: "Gourmet Christmas", slogan: "The heat becomes tasteful.", price: 750 },
  { src: "imgs/chris/c5.jpg", title: "Lemon Whipped Cream", slogan: "This cake, a work to be celebrated.", price: 419 },
  { src: "imgs/chris/c6.jpg", title: "Chocolate Velvet", slogan: "One slice, one emotion.", price: 499 },
  { src: "imgs/chris/c7.jpg", title: "Caramel Butter", slogan: "Savor the art of flavors.", price: 480 },
  { src: "imgs/chris/c8.jpg", title: "Red Berries", slogan: "To taste is to be thrilled.", price: 469 }
];

// Sélection de la galerie
const gallery = document.getElementById("gallery2");

cakesChris.forEach(cake => {
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
      <svg class="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3h2l2.2 10.5a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6l1.2-6.5H7.6" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
      </button>
    </div>
  `;
  gallery.appendChild(card);
});