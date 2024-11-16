const $ = document;
// holders 
const modal = $.getElementById("modal-container")
const modalBtn = $.getElementById("modal-btn")
const closeModal = $.querySelector("#close-modal")
const section = $.querySelector("section")

modalBtn.addEventListener("click", function (e) {
    modal.style.display = "block"
    setTimeout(() => {
        modal.classList.add("show");
    }, 100);
    section.style.filter = "blur(15px)"
})


$.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none"
        }, 200);
        section.style.filter = "blur(0)"
    }
})


closeModal.addEventListener("click", function (param) {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none"
    }, 200);
    section.style.filter = "blur(0)"
})
