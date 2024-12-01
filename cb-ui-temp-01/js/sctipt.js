// holders
const $ = document
const navbar = document.querySelector('.a-navbar');

// onScroll Menu 
$.addEventListener('scroll', function () {
    console.log("scroll");
    if ($.documentElement.scrollTop > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

$.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".menuger");
    const menu = document.querySelector(".a-navbar .menu");

    hamburgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});