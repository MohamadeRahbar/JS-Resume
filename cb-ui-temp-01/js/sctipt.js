/* 
============= fixed nav =======================
*/
const $ = document
const navbar = document.querySelector('.a-navbar');
$.addEventListener('scroll', function () {
    if ($.documentElement.scrollTop > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

/* 
============= menuger of nav =======================
*/
$.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".menuger");
    const menu = document.querySelector(".a-navbar .menu");

    hamburgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

/* 
============= slider =======================
*/
const slider = {
    ui: $.querySelector('#a-slider'),
    slides: $.querySelectorAll('.slide'),
    prevBtn: $.querySelector('.prev-btn'),
    nxtBtn: $.querySelector('.next-btn')
}
let currentIndex = 0;
let isMouseInside = false;

// set flag for check mouse position
slider.ui.addEventListener('mouseenter', () => {
    isMouseInside = true;
});

slider.ui.addEventListener('mouseleave', () => {
    isMouseInside = false;
});

// event for next button
slider.nxtBtn.addEventListener('click', nextSlide);

// event for prev button
slider.prevBtn.addEventListener('click', prevSlide);

// keyboard event with flag checking
$.addEventListener('keydown', function (event) {
    if (isMouseInside) {
        if (event.key === 'ArrowRight') {
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            prevSlide();
        }
    }
});

// move to the next slide
function nextSlide() {
    const totalSlides = slider.slides.length;

    slider.slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % totalSlides;
    console.log("next" + currentIndex);

    slider.slides[currentIndex].classList.add('active');
}

// move to the previous slide
function prevSlide() {
    const totalSlides = slider.slides.length;

    slider.slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    console.log("prev" + currentIndex);

    slider.slides[currentIndex].classList.add('active');
}

/* 
=============  =======================
*/