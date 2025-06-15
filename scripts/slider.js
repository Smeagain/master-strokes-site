// scripts/slider.js

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll("img");
    const nav = document.querySelector(".slider-nav");
    let current = 0;

    // Create navigation dots
    slides.forEach((img, idx) => {
        const btn = document.createElement("button");
        btn.onclick = () => showSlide(idx);
        if (idx === 0) btn.classList.add("active");
        nav.appendChild(btn);
    });

    function showSlide(idx) {
        slides[current].classList.remove("active");
        nav.children[current].classList.remove("active");
        current = idx;
        slides[current].classList.add("active");
        nav.children[current].classList.add("active");
    }

    // Initial state
    slides[0].classList.add("active");
    let timer = setInterval(() => {
        showSlide((current + 1) % slides.length);
    }, 4000);

    // Pause on hover
    slider.onmouseenter = () => clearInterval(timer);
    slider.onmouseleave = () => {
        timer = setInterval(() => {
            showSlide((current + 1) % slides.length);
        }, 4000);
    };
});
