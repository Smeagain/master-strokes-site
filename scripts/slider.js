document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider img");
    const nav = document.querySelector(".slider-nav");
    let currentSlide = 0;

    if (slides.length > 0) {
        // Create nav buttons
        for (let i = 0; i < slides.length; i++) {
            const btn = document.createElement("button");
            btn.addEventListener("click", () => {
                goToSlide(i);
            });
            nav.appendChild(btn);
        }

        const navButtons = document.querySelectorAll(".slider-nav button");

        function goToSlide(n) {
            slides[currentSlide].classList.remove("active");
            navButtons[currentSlide].classList.remove("active");
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add("active");
            navButtons[currentSlide].classList.add("active");
        }

        // Initial setup
        slides[0].classList.add("active");
        navButtons[0].classList.add("active");

        // Auto-play
        setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }
});