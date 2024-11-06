/* 
delete

*/

// holders 
const $ = document;
const todos = $.getElementById("todos")
const addTodo = $.getElementById("addTodo")
let newTodo;

addTodo.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        newTodo = addTodo.value
        let newLi = $.createElement("li")
        let newSpan = $.createElement("span")
        let trash = $.createElement("i")

        newLi.appendChild(newSpan)
        newLi.appendChild(trash)
        console.log(newLi);

        addTodo.value = ""
        // i class="fa fa-trash-o delete

    }
})