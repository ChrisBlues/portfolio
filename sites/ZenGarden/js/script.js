const btn = document.querySelector('.breath-btn');
const circle = document.querySelector('.circle');

if (btn && circle) {
    btn.addEventListener('click', () => {
        circle.style.transform = 'scale(12)';
        setTimeout(() => circle.style.transform = 'scale(1)', 4000);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
});


// Hamburger
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const navbar = document.querySelector(".navbar");

  function openMenu() {
    navbar.classList.add("open");
    menuBtn.classList.add("open");
    closeBtn.classList.add("open");
  }

  function closeMenu() {
    navbar.classList.remove("open");
    menuBtn.classList.remove("open");
    closeBtn.classList.remove("open");
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
});