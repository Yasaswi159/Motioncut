// script.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const captions = [
    "Rafting",
    "Trekking",
    "Paragliding"
];

document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPreviousSlide);

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
    updateCaption();
}

function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    updateCaption();
}

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function updateCaption() {
    document.querySelector('.caption').textContent = captions[currentIndex];
}

// Initialize the first slide and caption
updateSlidePosition();
updateCaption();
