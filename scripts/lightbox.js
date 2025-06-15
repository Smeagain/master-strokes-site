// scripts/lightbox.js

// Create lightbox modal elements if not already in HTML
(function() {
    if (!document.getElementById('lightbox-modal')) {
        let modal = document.createElement('div');
        modal.id = 'lightbox-modal';
        modal.className = 'lightbox-modal';
        modal.style.display = 'none';
        modal.innerHTML = `
            <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
            <img class="lightbox-content" id="lightbox-img" src="#" alt="Gallery Large" />
            <span class="lightbox-prev" onclick="prevLightbox()">&lsaquo;</span>
            <span class="lightbox-next" onclick="nextLightbox()">&rsaquo;</span>
        `;
        document.body.appendChild(modal);
    }
})();

let galleryImages = [];
let currentIndex = 0;

function openLightbox(el) {
    galleryImages = Array.from(document.querySelectorAll('.gallery-thumb'));
    currentIndex = galleryImages.indexOf(el);
    let modal = document.getElementById("lightbox-modal");
    let img = document.getElementById("lightbox-img");
    img.src = el.src;
    modal.style.display = "flex";
}

function closeLightbox() {
    let modal = document.getElementById("lightbox-modal");
    modal.style.display = "none";
}

function prevLightbox() {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}
function nextLightbox() {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex + 1) % galleryImages.length;
    document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

// Keyboard navigation
document.addEventListener("keydown", function(e) {
    let modal = document.getElementById("lightbox-modal");
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") prevLightbox();
        if (e.key === "ArrowRight") nextLightbox();
        if (e.key === "Escape") closeLightbox();
    }
});
