const $ = document;
// holders 
const modal = $.querySelector(".modal-origin")
const modalBtn = $.getElementById("modal-btn")
const closeModal = $.querySelector("#close-modal")


modalBtn.addEventListener("click", function (e) {
    console.log(e);
    // TODO

    //if click, modal-origin d-block

    // add transform : translateY(0)

    // add filter blur to section
})



modal.addEventListener("keydown", function (param) {
    console.log(param);
})


closeModal.addEventListener("click", function (param) {

    // TODO
    // if click, modal-origin d-none
})
