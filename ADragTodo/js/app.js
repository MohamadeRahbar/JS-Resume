// holders

const $ = document;
const UI = {
    overlay: $.getElementById("overlay"),
    modal: $.getElementById("todo_form"),
    input: $.getElementById("todo_input"),
    addBtn: $.getElementById("todo_submit"),
    todosPlace: $.getElementById("no_status"),
}

// flag for ESC function
let isModalOn = false;

UI.input.addEventListener("keyup", function (e) {
    if (e.key === "Enter" && UI.input.value !== "") {
        createTodo()
    }

})

UI.addBtn.addEventListener("click", function () {
    if (UI.input.value !== "") {
        createTodo()
    }

})

function createTodo() {
    let todo = UI.input.value;
    let newDiv = $.createElement("div");
    newDiv.classList.add("todo");
    newDiv.setAttribute("draggable", "true")
    newDiv.innerHTML = `${todo} <span class="close">&times;</span>`;
    UI.todosPlace.appendChild(newDiv)
    clearUI()
    closeModal()
}

// open modal + close modal with ESC
function openModal() {
    UI.modal.classList.add("active");
    UI.overlay.classList.add("active");
    isModalOn = true;
    if (isModalOn) {
        $.addEventListener("keydown", function (e) {
            if (e.key === 'Escape') {
                closeModal()
            }
        })
    }
}

// close modal
function closeModal() {
    UI.modal.classList.remove("active")
    UI.overlay.classList.remove("active")
    isModalOn = false;
}

// remove todo by click on X btn
UI.todosPlace.addEventListener("click", function (event) {
    if (event.target.classList.contains("close")) {
        event.target.parentElement.remove();
    }
});

// clear after add todo
function clearUI() {
    UI.input.value = ""
}


// Handle drag start
document.addEventListener("dragstart", function (event) {
    event.target.classList.add("dragging");
    event.dataTransfer.setData("text/plain", event.target.id);
});

// Handle drag over (to allow dropping)
document.addEventListener("dragover", function (event) {
    event.preventDefault(); // To allow drop
    const closestStatus = event.target.closest(".status");
    if (closestStatus) {
        closestStatus.classList.add("drag-over");
    }
});

// Handle drag leave (optional, to clean up)
document.addEventListener("dragleave", function (event) {
    const closestStatus = event.target.closest(".status");
    if (closestStatus) {
        closestStatus.classList.remove("drag-over");
    }
});

// Handle drop
document.addEventListener("drop", function (event) {
    event.preventDefault();
    const draggedElement = document.querySelector(".dragging");
    const closestStatus = event.target.closest(".status");

    if (closestStatus && draggedElement) {
        closestStatus.appendChild(draggedElement);
    }

    // Clean up classes
    if (draggedElement) {
        draggedElement.classList.remove("dragging");
    }
    if (closestStatus) {
        closestStatus.classList.remove("drag-over");
    }
});
