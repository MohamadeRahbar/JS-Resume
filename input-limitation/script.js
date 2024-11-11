// holders
const $ = document;

const UI = {
    input: $.querySelector("form input"),
    counter: $.querySelector(".counter"),
}

const maxLength = UI.input.getAttribute("maxlength")


UI.input.addEventListener('keyup', function () {
    UI.counter.innerText = maxLength - UI.input.value.length
})
