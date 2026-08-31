let header = document.querySelector('.header');
let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-xmark');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-xmark');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      header.classList.add('active');
   }else{
      header.classList.remove('active');
   }

}


// reviews
let slides=document.querySelectorAll('.reviews .row .slider-container .slide');
let index=0;

function next(){
   slides[index].classList.remove('active');
   index=(index+1)%slides.length;
   slides[index].classList.add('active');
}

function prev(){
   slides[index].classList.remove('active');
   index=(index-1+slides.length)%slides.length;
   slides[index].classList.add('active');
}