document.addEventListener("turbo:load", function () {
    console.log("Turbo Drive has loaded the page");

    document.querySelectorAll(".slider-container").forEach((sliderContainer, index) => {
        let currentIndex = 0;
        const slides = sliderContainer.querySelectorAll(".slide");
        const totalSlides = slides.length;
        const slider = sliderContainer.querySelector(".slider");

        if (!slider || slides.length === 0) {
            console.warn(`Slider ${index + 1} not found. Skipping initialization.`);
            return;
        }

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

        // Find buttons within the same slider-container
        const nextButton = sliderContainer.querySelector(".slider-btn.next");
        const prevButton = sliderContainer.querySelector(".slider-btn.prev");

        if (nextButton) nextButton.addEventListener("click", nextSlide);
        if (prevButton) prevButton.addEventListener("click", prevSlide);

        // Auto-slide every 5 seconds
        //setInterval(nextSlide, 5000);
    });
});