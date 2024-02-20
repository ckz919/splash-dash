document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
});