const $ = document;
// holders 
const modal = $.getElementById("modal-container")
const modalBtn = $.getElementById("modal-btn")
const closeModal = $.querySelector("#close-modal")
const section = $.querySelector("section")

modalBtn.addEventListener("click", showModal)
closeModal.addEventListener("click", hideModal)
$.addEventListener("keydown", hideWithESC)

// functions
function showModal() {
    modal.style.display = "block"
    setTimeout(() => {
        modal.classList.add("show");
    }, 100);
    section.style.filter = "blur(15px)"
    //prevent focus after press esc to remove border
    modalBtn.blur()
}

function hideModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none"
    }, 200);
    section.style.filter = "blur(0)"
}

function hideWithESC(e) {
    if (e.key === "Escape") {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none"
        }, 200);
        section.style.filter = "blur(0)"
    }
}