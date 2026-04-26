// feito por IA

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carrosel");
    if (!carousel) {
        return;
    }

    const images = Array.from(carousel.querySelectorAll(".imagem"));
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");

    if (!images.length || !prevButton || !nextButton) {
        return;
    }

    let currentIndex = images.findIndex((image) => image.classList.contains("ativa"));
    if (currentIndex < 0) {
        currentIndex = 0;
        images[0].classList.add("ativa");
    }

    const showImage = (index) => {
        images[currentIndex].classList.remove("ativa");
        currentIndex = (index + images.length) % images.length;
        images[currentIndex].classList.add("ativa");
    };

    prevButton.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });
});
