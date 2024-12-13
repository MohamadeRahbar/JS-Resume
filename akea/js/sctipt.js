/* 
============= fixed nav =======================
*/
const $ = document;
const navbar = $.querySelector('.a-navbar');
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


//============= nav orange underline =======================
// #TODO This is v01 & it can be optimized with help of mr-abooali or my later knowledge :)

const menuItems = $.querySelectorAll('.nav-main-menu > li > a');
const navBorder = $.querySelector('.nav-border-bottom');

// set span position to the active item on page load
function setActivePosition() {
    const activeItem = $.querySelector('.nav-main-menu > li > a.active');
    if (activeItem) {
        const activeRect = activeItem.getBoundingClientRect();
        //  navigate from child to document to get position
        const menuRect = activeItem.parentElement.parentElement.getBoundingClientRect();
        navBorder.style.width = `${(activeRect.width) / 3}px`;
        navBorder.style.right = `${(menuRect.right - activeRect.right) + 10}px`;
    }
}

// move span to the hovered item
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const itemRect = item.getBoundingClientRect();
        const menuRect = item.parentElement.parentElement.getBoundingClientRect();
        navBorder.style.width = `${(itemRect.width) / 3}px`;
        navBorder.style.right = `${(menuRect.right - itemRect.right) + 10}px`;
    });

    // reset span to the active item when mouseleave from main menu
    item.parentElement.parentElement.addEventListener('mouseleave', () => {
        setActivePosition();
    });

});

// initiallize span position 
window.addEventListener('DOMContentLoaded', setActivePosition);
window.addEventListener('resize', setActivePosition);


// ============= scroll to top =======================

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


// ============= pagination btns =======================
function goPrev() {
    alert("صفحات به هم متصل نیستند!")
}

function goNext() {
    alert("صفحات به هم متصل نیستند!")
}


// ============= about counter =======================
window.onload = function () {
    $.querySelectorAll('.counter-target').forEach(element => {

        let currentNumber = element.innerHTML || 0;
        const targetNumber = element.getAttribute('data-target');
        const speed = element.getAttribute('data-speed') / 200 || 0.05;

        const interval = setInterval(() => {
            if (currentNumber < targetNumber) {

                currentNumber += 20;

                element.textContent = "+" + currentNumber;
            } else {
                clearInterval(interval);
            }
        }, speed);

    });

};


// ============= form comment  =======================

function addComment() {
    alert("نظر شما پس از بررسی توسط ادمین، اضافه خواهد شد!")
}


