// holders

const $ = document;
const UI = {
    input: $.getElementById("input-field"),
    notes: $.getElementById("listed"),
    colors: $.querySelectorAll(".color-box")
}

UI.input.addEventListener("keyup", addNote)

function addNote(e) {
    if (e.key === "Enter") {
        createNote()
    }
}

function createNote() {
    if (UI.input.value !== '') {
        let note = UI.input.value;
        let newDiv = $.createElement("div");
        newDiv.classList.add("card", "shadow-sm", "rounded");
        newDiv.innerHTML = `<p class="card-text p-3">${note}</p>`
        newDiv.style.backgroundColor = UI.input.style.backgroundColor;
        UI.notes.appendChild(newDiv)
        clearUI()
        UI.input.style.backgroundColor = "#fff"
        // remove when click on note
        newDiv.addEventListener("click", function () {
            newDiv.remove()
        })

    } else {
        UI.input.classList.add("redAlert")
        setTimeout(function () {
            UI.input.classList.remove("redAlert")
        }, 1500)
    }
}

function clearUI() {
    UI.input.value = ""
}


// get color
UI.colors.forEach(function (colorBtn) {
    colorBtn.addEventListener('click', function (e) {
        UI.input.style.backgroundColor = e.target.style.backgroundColor
    })
})