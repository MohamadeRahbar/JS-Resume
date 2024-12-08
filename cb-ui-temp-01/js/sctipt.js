/* 
============= fixed nav =======================
*/
const $ = document;
const navbar = document.querySelector('.a-navbar');
$.addEventListener('scroll', function () {
    if ($.documentElement.scrollTop > 100 && $.documentElement.scrollTop < 250) {
        navbar.classList.add('prefixed');

    } else if ($.documentElement.scrollTop >= 250) {
        navbar.classList.add('fixed');
        navbar.classList.remove('prefixed');

    } else {
        navbar.classList.remove('fixed');
        navbar.classList.remove('prefixed');
    }
});

/* 
============= menuger of nav =======================
*/
$.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".menuger");
    const menu = document.querySelector(".nav-main-menu-md");


    hamburgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});







// pagination btns
function goPrev() {
    alert("صفحات به هم متصل نیستند!")
}



function goNext() {
    alert("صفحات به هم متصل نیستند!")
}