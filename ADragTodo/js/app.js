const $ = document;

function openModal() {
    $.getElementById("todo_form").classList.add("active")
}

function closeModal() {
    $.getElementById("todo_form").classList.remove("active")
}