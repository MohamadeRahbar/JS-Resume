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
    if (e.key === "Enter" && addTodo.value !== "") {

        let newLi = $.createElement("li")

        let newSpan = $.createElement("span")
        newSpan.innerText = addTodo.value

        let trash = $.createElement("i")
        trash.classList.add("fa", "fa-trash-o", "delete")

        newLi.appendChild(newSpan)
        newLi.appendChild(trash)

        todos.appendChild(newLi)

        todos.style.display = "block";
        addTodo.value = ""

        trash.addEventListener("click", function (e) {
            if (todos.children.length < 2) {
                todos.style.display = "none";
            } else {
                trash.parentElement.remove();
            }
        })

    }
})


