const $ = document;
// holders 
const modal = $.getElementById("modal-container")
const modalBtn = $.getElementById("modal-btn")
const closeModal = $.querySelector("#close-modal")
const section = $.querySelector("section")

modalBtn.addEventListener("click", function (e) {
    modal.style.display = "block"
    modal.style.transform = "translateY(0vh)"
    section.style.filter = "blur(15px)"
})

$.addEventListener("load", function () {
})


$.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        modal.style.transform = "translateY(-101vh)"
        modal.style.display = "none"
        section.style.filter = "blur(0)"
    }
})


closeModal.addEventListener("click", function (param) {
    modal.style.transform = "translateY(-101vh)"
    modal.style.display = "none"
    section.style.filter = "blur(0)"
})
