// JavaScript for the slider functionality

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");

console.log("Total slides:", totalSlides);

function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
