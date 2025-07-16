let currentImageIndex;
let galleryImages = [];

function openLightbox(element) {
    const gallery = element.closest('.gallery-grid');
    galleryImages = Array.from(gallery.querySelectorAll('.gallery-thumb'));
    currentImageIndex = galleryImages.indexOf(element);
    
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox-modal');
    lightbox.innerHTML = `
        <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
        <span class="lightbox-prev" onclick="changeImage(-1)">&#10094;</span>
        <img src="${element.src}" class="lightbox-content">
        <span class="lightbox-next" onclick="changeImage(1)">&#10095;</span>
    `;
    document.body.appendChild(lightbox);
    document.addEventListener('keydown', handleKeydown);
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox-modal');
    if (lightbox) {
        lightbox.remove();
        document.removeEventListener('keydown', handleKeydown);
    }
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    const lightboxImage = document.querySelector('.lightbox-content');
    if (lightboxImage) {
        lightboxImage.src = galleryImages[currentImageIndex].src;
    }
}

function handleKeydown(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    }
    if (event.key === 'ArrowRight') {
        changeImage(1);
    }
}