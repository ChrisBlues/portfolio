let next=document.querySelector('.next');
let pre=document.querySelector('.pre');

next.addEventListener('click',function(){
    let items=document.querySelectorAll('.item');
    document.querySelector('.slider').appendChild(items[0]); 
})
pre.addEventListener('click',function(){
    let items=document.querySelectorAll('.item');
    document.querySelector('.slider').prepend(items[items.length - 1]); 
})
