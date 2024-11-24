// holders

const $ = document;
const UI = {
    input: $.getElementById("input-field"),
    notes: $.getElementById("listed"),
    colors: $.getElementsByClassName("color-box")
}

UI.input.addEventListener("keyup", addNote)


// colors foreach >> add event click e.target change UI.input bg and bg == true, if UI.inputs e.key == enter && bg == true >> note bg == e bg color 

// add btn
function addNote(e) {
    // TODO Add UI.input.value to notes 
    if (e.key === "Enter") {
        let note = UI.input.value
        console.log(note);
    }
}

// erase btn 
function clearDisplay() {
    //TODO clear UI.input.value
}
