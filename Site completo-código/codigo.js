alert("Feliz aniversário, Gael!!");

var data = new Date();
var hora = data.getHours();
if (hora >= 1 && hora <= 12) {
    alert("Bom dia!");
} else if (hora >= 13 && hora <= 18) {
    alert("Boa tarde!");
} else {
    alert("Boa noite!");
}

function msg() {
    alert("Você confirmou sua presença");
}

let currentSlide = 0;
function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-container img');
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}
