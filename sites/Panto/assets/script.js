// Initialize AOS
AOS.init();

// Product Tabs
const tabBtns = document.querySelectorAll(".tab-btn")
const productsContainer = document.getElementById('products-container');

// Mock Data for Products to Simulate Different Categories
const productsData = {
    chair: [
        {name: 'Sahkarias Armchair', price: '$392', img: 'assets/Images/sakarias-armchair.png', category: 'Chair'},
        {name: 'Balstsar Chair', price: '$299', img: 'assets/Images/balstar-chair.png', category: 'Chair'},
        {name: 'Anjay Chair', price: '$519', img: 'assets/Images/anjay-chair.png', category: 'Chair'},
        {name: 'Nyantuy Chair', price: '$921', img: 'assets/Images/nyantuy-chair.png', category: 'Chair'}
    ],
    beds: [
        {name: 'Comfort Bed', price: '$500', img: 'assets/Images/bed-comfort.jpg', category: 'Beds'},
        {name: 'Luxury Bed', price: '$800', img: 'assets/Images/bed-luxury.jpg', category: 'Beds'},
        {name: 'King Size Bed', price: '$1200', img: 'assets/Images/bed-king-size.jpg', category: 'Beds'},
        {name: 'Queen Bed', price: '$950', img: 'assets/Images/bed-queen.jpg', category: 'Beds'}     
    ],
    sofa: [
        {name: 'Modern Sofa', price: '$600', img: 'assets/Images/sofa-modern.jpg', category: 'Sofa'},
        {name: 'Leather Sofa', price: '$1000', img: 'assets/Images/sofa-leather.jpg', category: 'Sofa'},
        {name: 'L-Shape Sofa', price: '$1500', img: 'assets/Images/sofa-LShape.jpg', category: 'Sofa'},
        {name: 'Cozy Sofa', price: '$450', img: 'assets/Images/sofa-cozy.jpg', category: 'Sofa'}     
    ],
    lamp: [
        {name: 'Table Lamp', price: '$50', img: 'assets/Images/lamp-table.png', category: 'Lamp'},
        {name: 'Floor Lamp', price: '$120', img: 'assets/Images/lamp-floor.jpg', category: 'Lamp'},
        {name: 'Desk Lamp', price: '$80', img: 'assets/Images/lamp-desk.jpg', category: 'Lamp'},
        {name: 'Wall Lamp', price: '$60', img: 'assets/Images/lamp-wall.jpg', category: 'Lamp'}     
    ]
};

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // to remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // to add active class to clicked button
        btn.classList.add('active');

        const category = btn.getAttribute('data-tab');
        renderProducts(category)
    });
});

function renderProducts(category) {
    productsContainer.innerHTML ='';
    const products = productsData[category] || [];

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');
        // Add AOS attributes dynamically 
        productCard.setAttribute('data-aos', 'zoom-in');
        productCard.setAttribute('data-aos-delay', (index + 1) * 100)

        productCard.innerHTML = `<div class="product-img-wrapper">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="category">${product.category}</span>
                    <h3>${product.name}</h3>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price-row">
                        <span class="price">${product.price}</span>
                        <button class="add-btn"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>`;
                productsContainer.appendChild(productCard)
    })
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(0,0,0,0.5)';
            navLinks.style.padding = '20px';
            navLinks.style.textAlign = 'center';
        }
    })
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
