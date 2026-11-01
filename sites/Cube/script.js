document.addEventListener("mousemove", e => {
    const prism = document.getElementByld("prism");
    let x = (window.innerWidth / 2 - e.clientX) / 40;
    let y = (window.innerHeight / 2 - e.clientY) / 40;
    prism.style.transform = 'rotateX(${20 - y}deg) rotateY(${20 - x}deg)';
});