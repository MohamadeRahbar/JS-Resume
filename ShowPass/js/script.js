// Holders & Functions for select elems with id & class 
let $ = document;
let hintParent = $.querySelector('.form-element')

function _id(id_name) {
  return $.getElementById(id_name);
}

function _class(class_name) {
  return $.getElementsByClassName(class_name);
}

let togglePassword = _class("toggle-password");
let passwordField = _id("password-field");


// Fire click event on eye icon
togglePassword[0].addEventListener("click", function () {
  if (passwordField.type == "text") {
    passwordField.type = "password";
    togglePassword[0].classList.remove("active");
  } else {
    passwordField.type = "text";
    togglePassword[0].classList.add("active");
  }

})


hintParent.addEventListener("keypress", function () {
  hintParent.classList.add('hint')
})