let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function setSlide(index) {
    if (!slides.length || !dots.length) return;
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    if (!slides.length) return;
    let nextIndex = currentSlide + direction;
    if (nextIndex < 0) nextIndex = slides.length - 1;
    if (nextIndex >= slides.length) nextIndex = 0;
    setSlide(nextIndex);
}
