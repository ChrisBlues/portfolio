// navbar Search_Bar
const navSearch = document.getElementById('nav-search')
const searchIcon = document.getElementById('search-icon')

searchIcon.addEventListener('click', (e)=> {
    e.stopPropagation();
    navSearch.classList.toggle('active')
});

document.addEventListener('click',(e)=>{
    if(!navSearch.contains(e.target)){
        navSearch.classList.remove('active')
    }
})

//navbar scroll
window.addEventListener('scroll', ()=>{
    let navbar = document.querySelector('.navbar');
    if(window.scrollY > 20) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});

//Scroll_top
document.querySelector('#to-top').addEventListener('click',()=>{
    let TopInterval = setInterval(()=>{
        let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

        if(ArrowTop.scrollTop > 0) {
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50 ;
        }
        if(ArrowTop.scrollTop < 1) {
            clearInterval(TopInterval);
        }
    }, 10)
}, false);

function showscroll() {
    let TopButton = document.getElementById('to-top');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        TopButton.classList.add('show')
    } else {
        TopButton.classList.remove('show')
    }
}
window.onscroll = () => {
        showscroll();
    }

// sidebar
    let burger = document.querySelector('.burger');
    let NavbarItems = document.querySelector('.navbar-items');
    let nav = document.querySelector('.nav');

    burger.addEventListener('click',()=>{
        NavbarItems.classList.toggle('.v-class')
        nav.classList.toggle('.h-class')
    });


// scrollRevealAnimation
ScrollReveal().reveal('.icons i', {
    duration:1000,
    origin:'bottom',
    distance:'50px',
    interval:200,
    reset:true
});

ScrollReveal().reveal('.A_img img', {
    duration:1000,
    origin:'bottom',
    distance:'100px',
    interval:200,
    reset:true
});

ScrollReveal().reveal('.About_box', {
    duration:1000,
    origin:'bottom',
    distance:'100px',
    interval:200,
    reset:true
});

ScrollReveal().reveal('.b_box', {
    duration:1000,
    origin:'bottom',
    distance:'100px',
    interval:200,
    reset:true
});

ScrollReveal().reveal('.box', {
    duration:1000,
    origin:'bottom',
    distance:'100px',
    interval:200,
});

ScrollReveal().reveal('.col', {
    duration:1000,
    origin:'bottom',
    distance:'100px',
    interval:200,
    reset:true
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



