
function initializeMainSlider() {
    let slideIndex = 0;
    const slides = document.querySelector('.slider .slides');
    const totalSlides = document.querySelectorAll('.slider .slides img').length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        }
        const offset = -slideIndex * 100; // 슬라이드 이동 값 계산
        slides.style.transform = `translateX(${offset}vw)`; 
    }

    function moveSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
    }

    // 자동 슬라이드 (3초마다 실행)
    setInterval(function() {
        moveSlide(1); // 오른쪽으로 이동
    }, 3000);

    // 좌우 버튼 이벤트
    document.querySelector('.main-prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.main-next').addEventListener('click', function() {
        moveSlide(1);
    });

    // 초기 슬라이드 표시
    showSlide(slideIndex);
}

function initializeNewProductsSlider() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.new-products-slides .slide');
    const totalSlides = slides.length;
    const slidesToShow = 4;
    const slideWidth = 280;
    const containerWidth = (slideWidth + 15) * slidesToShow;
    let autoSlideInterval;

    document.querySelector('.new-products-slides-container').style.width = `${containerWidth}px`;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - slidesToShow;
        }
        const offset = -slideIndex * (slideWidth + 15);
        document.querySelector('.new-products-slides').style.transform = `translateX(${offset}px)`;
    }

    function moveSlide(step) {
        slideIndex += step;
        if (slideIndex > totalSlides - slidesToShow) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = totalSlides - slidesToShow;
        }
        showSlide(slideIndex);
    }

    document.querySelector('.new-products-prev').addEventListener('click', function() {
        moveSlide(-1);
        resetAutoSlide();
    });

    document.querySelector('.new-products-next').addEventListener('click', function() {
        moveSlide(1);
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            moveSlide(1);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    showSlide(slideIndex);
    startAutoSlide();

    document.querySelector('.new-products-slides-container').addEventListener('mouseover', stopAutoSlide);
    document.querySelector('.new-products-slides-container').addEventListener('mouseout', startAutoSlide);
}

function initializeEventSlider() {
    let slideIndex = 0;
    const slideWidth = 1400; // 슬라이드의 고정 너비 (px)
    const slides = document.querySelector('.event-slider .event-slides');
    const totalSlides = document.querySelectorAll('.event-slider .event-slides img').length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        }
        const offset = -slideIndex * slideWidth; // 슬라이드 이동 값 계산 (px 단위)
        slides.style.transform = `translateX(${offset}px)`; 
    }

    function moveSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
    }

    // 자동 슬라이드 (3초마다 실행)
    setInterval(function() {
        moveSlide(1); // 오른쪽으로 이동
    }, 3000);

    // 좌우 버튼 이벤트
    document.querySelector('.event-prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.event-next').addEventListener('click', function() {
        moveSlide(1);
    });

    // 초기 슬라이드 표시
    showSlide(slideIndex);
}


function initializeTabButton(){
        // 탭 기능
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
    
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
    
                btn.classList.add('active');
                document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
            });
        });
    
        // 페이징 기능 (기본적으로는 작동하지 않지만, 나중에 페이지 이동 처리 가능)
        const pageNumbers = document.querySelectorAll('.page-number');
    
        pageNumbers.forEach(page => {
            page.addEventListener('click', function() {
                pageNumbers.forEach(p => p.classList.remove('active'));
                page.classList.add('active');
                // 페이지 변경 시 데이터 업데이트 로직 추가 필요
            });
        });
}


document.addEventListener('DOMContentLoaded', function() {
   
    initializeMainSlider();   // 메인 슬라이드 초기화
    initializeNewProductsSlider(); // 신상품 슬라이드 초기화
    initializeEventSlider(); // 이벤트 슬라이드 초기화
    initializeTabButton(); // 탭 버튼 초기화

    // 돋보기 버튼 클릭 시 검색창 토글
    document.getElementById('search-icon').addEventListener('click', function() {
        const searchArea = document.querySelector('.search-area');
        const searchInput = document.getElementById('search-input');
        
        if (searchInput.classList.contains('hidden')) {
            searchInput.classList.remove('hidden');
            searchArea.classList.add('show');
        } else {
            searchInput.classList.add('hidden');
            searchArea.classList.remove('show');
        }
    });
    




// 상품을 동적으로 렌더링하는 함수
function renderProducts(productList) {
    const productContainer = document.querySelector('.products');
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <p>${product.name}</p>
            <p>₩${product.price}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}


});