document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider"); // Get all sliders
    let currentIndexes = Array(sliders.length).fill(0); // Track index for each slider

    function updateSlide(sliderIndex) {
        sliders[sliderIndex].style.transform = `translateX(-${currentIndexes[sliderIndex] * 100}%)`;
    }

    window.nextSlide = function (sliderIndex) {
        const totalSlides = sliders[sliderIndex].children.length;
        currentIndexes[sliderIndex] = (currentIndexes[sliderIndex] + 1) % totalSlides;
        updateSlide(sliderIndex);
    };

    window.prevSlide = function (sliderIndex) {
        const totalSlides = sliders[sliderIndex].children.length;
        currentIndexes[sliderIndex] = (currentIndexes[sliderIndex] - 1 + totalSlides) % totalSlides;
        updateSlide(sliderIndex);
    };

    // Auto-slide every 5 seconds for each slider
    // sliders.forEach((_, index) => {
    //     setInterval(() => nextSlide(index), 5000);
    // });
});