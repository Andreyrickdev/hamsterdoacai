const slides = document.querySelectorAll('.background');
const dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide () {
    counter += 1;
    slidefun(counter);
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer () {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function slidefun (n) {
    
}