/* 
Coded By Mr-Alpha
it can be better
and i will do it soon :)
mind that, its a training! 
*/

// holders 
const $ = document;
const todos = $.getElementById("todos")
const addTodo = $.getElementById("addTodo")

addTodo.addEventListener("keydown", function (e) {
    // remove to add blank spaces by trim()
    let getTodo = e.target.value.trim()
    if (e.key === "Enter" && getTodo !== "") {
        newTodo(getTodo)
        todos.style.display = "block";
        addTodo.value = ""
    }
})

function newTodo(getTodo) {
    // create row 
    let newLi = $.createElement("li")

    // create <span>
    let newSpan = $.createElement("span")
    newSpan.innerText = addTodo.value

    // create <i>
    let trash = $.createElement("i")
    trash.classList.add("fa", "fa-trash-o", "delete")

    newLi.appendChild(newSpan)
    newLi.appendChild(trash)
    // functionality of trash 
    trash.addEventListener("click", function () {
        if (todos.children.length < 2) {
            todos.style.display = "none";
        } else {
            trash.parentElement.remove();
        }
    })

    todos.appendChild(newLi)

}
