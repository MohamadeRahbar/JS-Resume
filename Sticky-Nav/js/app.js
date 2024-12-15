const $ = document;

const mainNav = $.getElementById("mainNav")

$.addEventListener("scroll", function () {
    if ($.documentElement.scrollTop > 100) {
        mainNav.classList.add("fixed")
    } else {
        mainNav.classList.remove("fixed")
    }

})