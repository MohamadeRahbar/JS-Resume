// onScroll Menu 
const $ = document
const navbar = document.querySelector('.a-navbar');
$.addEventListener('scroll', function () {
    console.log("scroll");
    if ($.documentElement.scrollTop > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

// menuger of nav
$.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".menuger");
    const menu = document.querySelector(".a-navbar .menu");

    hamburgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


// slider
const slider = {
    ui: $.querySelector('#a-slider'),
    slides: $.querySelectorAll('#slide'),
    prevBtn: $.querySelector('.prev-btn'),
    nxtBtn: $.querySelector('.next-btn')
}
let currentIndex = 0;
let isMouseInside = false;

// // show specific slide
// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active', 'previous', 'next');
//         if (i === index) {
//             slide.classList.add('active');
//         } else if (i === (index - 1 + slides.length) % slides.length) {
//             slide.classList.add('previous');
//         } else if (i === (index + 1) % slides.length) {
//             slide.classList.add('next');
//         }
//     });
// }

// // click on prev btn
// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// });

// //  click on next btn
// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// });

// // flag for keyboard event
// slider.addEventListener('mouseenter', () => {
//     isMouseOverSlider = true;
// });

// slider.addEventListener('mouseleave', () => {
//     isMouseOverSlider = false;
// });

// // check flag and then keyboard event
// document.addEventListener('keydown', (event) => {
//     if (isMouseOverSlider) {
//         if (event.key === 'ArrowRight') {
//             currentIndex = (currentIndex + 1) % slides.length;
//             showSlide(currentIndex);
//         } else if (event.key === 'ArrowLeft') {
//             currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//             showSlide(currentIndex);
//         }
//     }
// });

// // show default slide
// showSlide(currentIndex);
