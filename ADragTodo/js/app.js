// holders

// holders

const $ = document;
const UI = {
    container: $.getElementById("status-container"),
    overlay: $.getElementById("overlay"),
    modal: $.getElementById("todo_form"),
    input: $.getElementById("todo_input"),
    addBtn: $.getElementById("todo_submit"),
    todosPlace: $.getElementById("no_status"),
    todoStage: $.querySelectorAll(".status"),
    todos: $.querySelectorAll(".todo")
}


// flag for ESC function
let isModalOn = false;

// open modal + close modal with ESC
function openModal() {
    UI.modal.classList.add("active");
    UI.overlay.classList.add("active");
    UI.input.focus()
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
// close modal
function closeModal() {
    UI.modal.classList.remove("active")
    UI.overlay.classList.remove("active")
    isModalOn = false;
}


// add todo 
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


// create todo
function createTodo() {

    let userTodo = UI.input.value;

    // make todo div
    let newTodo = $.createElement("div");
    newTodo.classList.add("todo");
    newTodo.setAttribute("draggable", "true")
    newTodo.innerHTML = `${userTodo} <span class="close">&times;</span>`;

    // append todo to No Status Section
    UI.todosPlace.appendChild(newTodo)

    // event listener foreach todo
    UI.todos.forEach(function (todo) {
        todo.addEventListener("dragstart", dragIt)
        todo.addEventListener("dragend", dropIt)
    })

    // clear input and close modal
    clearUI()
    closeModal()
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


// dragging events


function dragIt(e) {
    // e.dataTransfer.setData("todo", e.target)
    UI.container.classList.add("drop")
}

function dropIt(e) {
    // e.dataTransfer.setData("todo", e.target)
    UI.container.classList.remove("drop")
}

// dropping events

UI.todoStage.forEach(function (stage) {
    stageDragOver(stage);
    stageDragEnter(stage);
    stageDragLeave(stage);
    stageDrop(stage);
})


function stageDragOver(stage) {
    stage.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
}

function stageDragEnter(stage) {
    stage.addEventListener("dragleave", function (e) {
        console.log("Leaved!");
    })
}

function stageDragLeave(stage) {
    stage.addEventListener("dragenter", function (e) {
        console.log("Entered!");
    })
}

function stageDrop(stage) {
    stage.addEventListener("drop", function (e) {
        console.log("Dropped!");
    })
}