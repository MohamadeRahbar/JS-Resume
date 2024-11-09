const $ = document;
const ccm = $.getElementById("context-menu")

// add ccm
$.addEventListener("contextmenu", function (e) {
    e.preventDefault()
    ccm.style.top = `${e.pageY}px`
    ccm.style.left = `${e.pageX}px`
    ccm.style.display = "flex"
})

// close ccm by click
$.addEventListener("click", function (e) {
    ccm.style.display = "none"
})

// close ccm by ESC
$.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        ccm.style.display = "none"
    }
})
