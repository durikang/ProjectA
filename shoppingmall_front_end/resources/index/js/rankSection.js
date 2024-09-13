document.addEventListener('DOMContentLoaded', function() {
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    const offset = -slideIndex * 600; // 슬라이드 너비만큼 이동
    document.querySelector('.ranking-slides').style.transform = `translateX(${offset}px)`;
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// 자동 슬라이드 (3초마다 실행)
setInterval(() => {
    moveSlide(1);
}, 5000);

// 초기 슬라이드 표시
showSlide(slideIndex);
});