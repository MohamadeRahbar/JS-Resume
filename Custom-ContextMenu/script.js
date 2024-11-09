const $ = document;

const ccm = $.getElementById("context-menu")
let x;
let y;



$.addEventListener("contextmenu", function (e) {
    e.preventDefault()
    x = e.pageX
    y = e.pageY
    ccm.style.top = `${y}px`
    ccm.style.left = `${x}px`
    ccm.style.display = "flex"
})

$.addEventListener("click", function (e) {
    ccm.style.display = "none"
})

$.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        ccm.style.display = "none"
    }
})
