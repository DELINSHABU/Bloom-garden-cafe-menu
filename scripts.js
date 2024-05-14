//* Event code 

const sliderContainer = document.getElementById('slider-container');
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let startTouchX = 0;
    const intervalTime = 5000; // 3 seconds

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + offset + ')';
        updateDots();
    }

    function currentSlide(index) {
        showSlide(index);
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    sliderContainer.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - startTouchX;
        const percentageDeltaX = (deltaX / sliderContainer.offsetWidth) * 100;
        slider.style.transform = `translateX(calc(-${currentIndex * 100}% + ${percentageDeltaX}px))`;
    });

    sliderContainer.addEventListener('touchend', (e) => {
        const touchX = e.changedTouches[0].clientX;
        const deltaX = touchX - startTouchX;
        const threshold = sliderContainer.offsetWidth / 5;

        if (deltaX > threshold) {
            showSlide(currentIndex - 1);
        } else if (deltaX < -threshold) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(currentIndex);
        }
    });

    setInterval(() => showSlide(currentIndex + 1), intervalTime);



    //* menu code 
    function toggleMenuPage() {
        var redirectTo = "menu.html";
        window.location.href = redirectTo;
    }

    //* menu  section
    // Simple function to show/hide the bar on button click (optional)
function toggleBar() {
    const bar = document.getElementById('floating-bar');
    bar.style.display = bar.style.display === 'none' ? 'flex' : 'none';
  }