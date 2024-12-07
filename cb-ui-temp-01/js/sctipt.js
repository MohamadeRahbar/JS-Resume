/* 
============= fixed nav =======================
*/
const $ = document;
const navbar = document.querySelector('.a-navbar');
$.addEventListener('scroll', function () {
    if ($.documentElement.scrollTop > 85 && $.documentElement.scrollTop < 250) {
        navbar.classList.add('prefixed');

    } else if ($.documentElement.scrollTop >= 250) {
        navbar.classList.add('fixed');

    } else {
        navbar.classList.remove('prefixed');
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
