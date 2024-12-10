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

/* ============= menuger of nav =======================

$.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".menuger");
    const menu = document.querySelector(".nav-main-menu-md");


    hamburgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
*/

// scroll to top
$.onscroll = function () {
    let scrollTopBtn = $.getElementById("scroll-Top");

    if ($.body.scrollTop > 300 || $.documentElement.scrollTop > 300) {
        scrollTopBtn.classList.add("visible");

    } else {
        scrollTopBtn.classList.remove("visible");
    }

};

function subscribed() {
    alert("ایمیل شما در باشگاه مشتریان ذخیره شد!")
}


// pagination btns
function goPrev() {
    alert("صفحات به هم متصل نیستند!")
}

function goNext() {
    alert("صفحات به هم متصل نیستند!")
}


// about counter #TODO
window.onload = function () {
    $.querySelectorAll('.counter-target').forEach(element => {

        let currentNumber = element.innerHTML || 0;
        const targetNumber = element.getAttribute('data-target');
        const speed = element.getAttribute('data-speed') / 200 || 0.05;

        const interval = setInterval(() => {
            if (currentNumber < targetNumber) {
                currentNumber = currentNumber + 20;
                element.textContent = "+" + currentNumber;
            } else {
                clearInterval(interval);
            }
        }, speed);

    });

};


