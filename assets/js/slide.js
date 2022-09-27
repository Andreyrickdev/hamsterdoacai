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

    let i;
    for (i = 0; i < dot.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }

    if (n > slides.length) {
        
    }
}