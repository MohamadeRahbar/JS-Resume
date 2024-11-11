//                              In The Name Of Allah                             //

// Welcome to my interemediate JS training section

// started in 1403/07 || 2024/09

// ========================= #1 | What is DOM | ==========================

// HTML DOM Tree of Objects:

// Document
// <doctype>
//   <html> Root Element
//    <head></head>
//    <body></body>
//   </html>

// Document Object Model

// manipulating html tag and css properties

// every works on a webpage like a call to action, button functionalities and .. is on DOM

// let h2Elem = document.getElementById("coursTitle");

// console.log(h2Elem); // will log html element that have "coursTitle" id.

// ======================== #2 | html element selector methods | ==========================


// getElementByID: specific selection of only one element


// getElementsByClassName: selection of many elements with specific class name >> return Array contains of wanted elements >> access with array methods [index]


// getElementsByTagName: select elements by tag name / getElementsByTagName("h2") >> returns all h2 tags in an array


// querySelector(""): returns the first element that matches to selector (.class, #id or tag) and then break


// querySelectorAll(""): it's will returns an array with all elements matches to selector 


// ================= #3 | Access to attributes getAtt.. and setAtt.. | ====================

// #getAttribute

// use . after (selector) to access elements attributes  // .getAttribute("attr")

// let ulElem = document.getElementById("myList").getAttribute()

// console.log(ulElem.getAttribute("")); // will show all Ul element attributes

// #setAttribute

// set an attribute to an element  // .setAttribute("attr","value")

// ulElem.setAttribute("class", "center") // will append a class with center value to ulElem

// ========================= #4 | access style of an element | ==========================

//  let h1Elem = document.getElementById("coursTitle");

//  h1Elem.style.color = '#f0f' // >> h1 color will change 

//  h1Elem.style.fontSize = '30px' // >> h1 size will increase

//  let liElems = document.getElementsByClassName("listItem")

//  liElems[3].style.fontWeight = "bold" // will bold Products

// ======================= #5 | access content of html elements | =========================

// let h1Elem = document.getElementById('coursTitle')

// let listItems = document.querySelectorAll('.listItem')

// let input = document.getElementById('input')

// let selectBox = document.getElementById('selectBox')

// console.log(h1Elem.innerHTML); // >> span with content
// console.log(h1Elem.innerText); // >> content
// console.log(h1Elem.textContent); // >> simillar to innerText but will rturn complete text content including hidden text


// listItems[3].innerHTML = ' محصولات ما ' // will change value of third list item

// to access a radio box or button, check box, select box, input : use .value

// input.value = "your current location" // change input value 

// selectBox.value = "iraq" // will change value to iraq

// console.log(selectBox.value); 

// ========================= #6 | build html element | ==========================

// to make an element by JS >> use .createElement('')

// let newDiv = document.createElement('div')

// console.log(newDiv); // it will log <hr>

// exp:

// let userName = prompt("Enter Your Name")

// let newH1Elem = document.createElement('h1')

// newH1Elem.innerText = userName;

// newH1Elem.setAttribute('id','userName');
// newH1Elem.setAttribute('class','users');
// newH1Elem.style.fontWeight = "bold";

// console.log(newH1Elem.innerText); // now will log but not append to html!

// ========================= #7 | append elements in DOM | ==========================

// to add a created element to DOM >> 

// let ulElem = document.getElementById("myList");

// let newlistItem = document.createElement('li');

// let secondlistItem = document.createElement('li');

// newlistItem.innerText = 'Services'

// secondlistItem.innerText = 'Jobs'

// ulElem.append(newlistItem) // >> will append <li>Services</li> to the end of ul contents

// ulElem.appendChild(secondlistItem) // >> will append <li>Jobs</li> 

// console.log(newlistItem);


// ========================= #8 | Events | ==========================

// Each user events such as click, Hit a key, Type or Scroll on DOM

let h2Elem = document.getElementById('h2ColorChange');

function firstFunc() {

    h2Elem.style.color = "#f11"
}

// ========================= #9 | Turn On/Off Light Exercise | ==========================

let bulbImg = document.getElementById("bulb");
let bulbCondition = document.getElementById("bulb-btn")

let isOff = true;

function lightControl() {

    if (isOff) {
        bulbImg.setAttribute("src", "Images/bulbon.gif")
        bulbCondition.innerText = "Turn Off"
        isOff = false;
    } else {
        bulbImg.setAttribute("src", "Images/bulboff.gif")
        bulbCondition.innerText = "Turn On"
        isOff = true;
    }

    // console.log(isOff);
}

// ======================= #10 | Login Form Validation Exercise | =========================

let formUserName = document.getElementById("formUserName");
let formPassWord = document.getElementById("formPassWord");

function checkFormInputs() {

    let userNameValue = formUserName.value;
    let passWordValue = formPassWord.value;

    if (userNameValue.length < 12) {
        alert("نام کاربری حداقل باید 12 کارکتر باشد")
    } else if (passWordValue.length < 8) {
        alert("رمز عبور حداقل باید 8 کارکتر باشد")
    } else {
        alert("!خوش آمدید")
    }
}

// ========================= #11 | KeyBoard Events | ==========================

// keyboard events : keyPress , keyDown , keyUp

// function keyLog() {
//     console.log("Typed!");
// }

// onkeypress support numbers and words
// onkeydown support Tab, esc more than onkeypress ...

// ========================= #12 | sign Up input check | ==========================

// let nameMessage = document.getElementById("nameMessage");
// let passMessage = document.getElementById("passMessage");

// let userName = document.getElementById("userName");
// let passWord = document.getElementById("passWord");

// function checkName () {
//     let userNameValue = userName.value;

//     if (userNameValue.length < 12) {
//         nameMessage.style.display = "inline"
//         nameMessage.style.color = "#f00"

//     } else {
//         nameMessage.style.display = "none"
//     }
// }

// function checkPass () {
//     let passWordValue = passWord.value;

//     if (passWordValue.length < 8) {
//         passMessage.style.display = "inline"
//         passMessage.style.color = "#f00"

//     } else {
//         passMessage.style.display = "none"
//     }
// }

// ========================= #13 | focus and blur event | ==========================

// onfocus >> when user selected a specified input or field 

// onblur >> go after and to the next input or field by click or Tab 

function nameFocus() {
    console.log("name focus"); // after exit from userName field 
}

function nameBlur() {
    console.log("name blur"); // when enter to userName field
}

function passFocus() {
    console.log("pass Focus"); // when enter to pass field
}

function passBlur() {
    console.log("pass blur"); // when exit to pass field
}


// ====================== #15 | ondblclick Event | =======================

// another mouse Method

// add ondblclick as an element attribute >> Run function or any task after dblclick!

// ========================= #15 | add event listener | ==========================

// to set up an event without using html "on/off" attributes

// first select element and store it in a variable 

// then use (var).addEventListener("event without on","function or task").

// exp : 

// let spnElemnt = document.querySelector(".newTitle");

// // #1
// // spnElemnt.addEventListener("click" , function(){
// //     if (spnElemnt.style.color === "red") {
// //         spnElemnt.style.color = "black"
// //     } else {
// //         spnElemnt.style.color = "red"
// //     }
// // })

// // #2
// spnElemnt.addEventListener("click" , changeColor) 

//     function changeColor () {
//         if (spnElemnt.style.color === "red") {
//             spnElemnt.style.color = "black"
//         } else {
//             spnElemnt.style.color = "red"
//         }
//     };

// never put () in addEventListener function section, because it will execute at first! 

// don't use // (var).addEventListener("e" , f())  

// ========================= #16 | classList Methods | ==========================

// to set or remove attributes and set a toggle use classlist.add / .remove / .toggle

let spnElemnt = document.querySelector(".newTitle")

spnElemnt.addEventListener('click', colorChanger)

function colorChanger() {

    // spnElemnt.setAttribute('class' , "red") //  will change color of span to red

    // spnElemnt.classList.add('red') //  simmilar to setAtt but shorter and faster!

    // spnElemnt.classList.remove("blue") // wil remove blue class 

    spnElemnt.classList.toggle('red') // by first click > red , second > blue and ...

}

// ========================= #19 | onChange() event | ==========================

// call onChange() in <select> element and <input> but most useful for select

// exp:

let carModels = document.getElementById("cars")

function carModel() {
    console.log(carModels.value);
}


// =========================== #25 |  append VS appendChild | =========================== 

let services = document.querySelector("#services")

function addNewLi() {
    let newLi = document.createElement('li')
    newLi.innerHTML = 'Service !'

    let secondNewLi = document.createElement('li')
    secondNewLi.innerHTML = 'Service Pro'

    // #Similarity
    // services.append(newLi) // will append li>Service !</li
    // services.appendChild(newLi) // also will append li>Service !</li

    // ------------------------

    // #First difference : append will accept node and string but appCh just accept nodes!
    // exp :

    // services.append('New String') // will append 'Service !' as a child 
    // services.appendChild('New String') // can't append strings! just accept nodes!

    // ------------------------

    // #Second difference : append will accept many nodes and string but appCh just accept one node!
    // exp :

    // services.append(newLi , secondNewLi) // will append both of them 
    // services.appendChild(newLi , secondNewLi) // will append first and then it breaks!

    // ------------------------

    // #Third difference : append will not return any value but appCh will return all value
    // exp :

    let appendResult = services.append(newLi)
    let appendChildResult = services.appendChild(newLi)

    console.log(appendResult); // undefined
    console.log(appendChildResult); // will return new li with inner html
}


// ===================== #26 | onKeyUp vs OnKeyDown vs onKeyPress | ===================== 

// #First Difference

function keyDownHandler() {
    console.log("Key Down"); // log at first of pressing each key 
}

function keyPressHandler() {
    console.log("Key Press"); // log when key completely pressed
}

function keyUpHandler() {
    console.log("Key Up"); // log after we decide to stop pressing key and leave it so when a key holds, just log onDown and onPress because key doesn't pushed up until we get of it!
}

// #Second Difference

// onKeyPress just support keys that enter a word or a number or a line! not support on special keys such as: tab , ctrl , shift , esc , back space and F(x)s 


// ===================== #31 | Difference between props and attrs | ===================== 

// access attributes of elements by attr's and prop's methods because each html node is an object >> . or getAtt('')

let h1Elem31 = document.getElementById('Js-31')

// console.log(h1Elem31.getAttribute('class')); // will log 
// console.log(h1Elem31.className);  // also will log 

// // we can set new attr's for it!

// // but we can access to custom attr's just by getAtt("") not . !

// console.log(h1Elem31.getAttribute('location')); // >> iran
// console.log(h1Elem31.location); // >> undefined

// // also we can set new props for each element!
let input31 = document.getElementById('input-31')

input31.userType = 'admin' // add property 

// console.log(input31.userType) // >> admin
// console.log(input31.getAttribute("userType")); // >> null, because it declared in JS as a property and getAtt will, return value of an existed Attrbute in Html!

// ================= #32 | hasAttribute & removeAttribute | ================= 

//hasAttribute >> boolean

let input32 = document.getElementById('input-32')

// console.log(input32.hasAttribute('class')); // true
// console.log(input32.hasAttribute('value')); // false

// removeAttribute >> will removes attribute and not return anything (void)

input32.removeAttribute('class'); // remove class
// console.log(input32.hasAttribute('class')); // after remove >> false

function removeAttr() {
    input32.removeAttribute('placeholder'); // remove placeholder by click button

}

// ================= #33 | Third Way to set event | ================= 

// #1 add event by set on(click) in html as an attribute 
function showLog() {
    console.log("Clicked By First Way");
}

// #2 add event by .addEventListener in js

let btn33 = document.getElementById('btn-33')

btn33.addEventListener('click', function () {
    console.log('Clicked by second way');
})

// #3 add event by setAttr to element

let btn33b = document.getElementById("btn-33b")

btn33b.onclick = function () {
    console.log('Clicked by third way');
}

// best way is #2

// ================= #34 | onSubmit | ================= 

// same as other events, we can do anything onSubmit!

let loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function () {
    console.log('Submitted'); // will log Sumbitted but because of web refresh after click on login button, will desappeared very fast 
})

// ================= #35 | event object | ================= 

let btn35 = document.getElementById('btn-35')
let Inp35 = document.getElementById('inp-35')

Inp35.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    if (e.key === 'Enter') {
        console.log("Enter!");
    } else if (e.keyCode === 65) {
        console.log("a, entered!");
    }
})


btn35.addEventListener('click', function (e) {
    console.log(e.clientX);
})

// ================= #36 | preventDefault | ================= 

// to prevent default event actions same as inputs, a tags and ...
// check .cancelable for availablity of preventDef

let login36 = document.getElementById('form-36')
let user36 = document.getElementById('user-36')

login36.addEventListener('submit', function (e) {
    // e.preventDefault(); // now page will not refresh after submit!
    console.log(e);

})

user36.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault()

    }
    console.log(e.key);
})


// ================= #39 | node | ================= 

// are 12 types

// element , text , attribute , comment ...

// node.nodeName, nodeType, nodeValue 


// ================= #40 | DOM Navigation | ================= 

// ==================
// Parent Navigation 
// ==================

//Access to parent node of an element 

// .parentNode 
// .parentElement


// =======================
//   #Siblings Navigation
// =======================

//Access to previous sibling element node of an element :

//  .previousElementSibling.(...)

// --------------------

//Access to next sibling element node of an element :

//  .nextElementSibling.(...)

// --------------------

//Access to previous or next sibling of a node : such as text, element, comment or ... :

// .nextSibling.(...) 
// .previousSibling.(...)


// =================
// Child Navigation
// =================

// To count quantity of first childs of an element:

// .childElementCount >> will return a number

// --------------------

// get element childs of an element node as an array:

// .children >> access to specific child by [index] >> .children[3]

// --------------------

// get childs with any node type for an element as an array:

// .childNode 

// --------------------

// to check is any child availble in an element or not

// .hasChildNodes() >> return boolean

// --------------------

// to selct first or last child of an element

// .firstChild 
// .lastChild

// --------------------

// to selct first or last element child of an element

// .firstElementChild 
// .lastElementChild

// ================= #43 | remove element from DOM | ================= 
let $ = document;
let items43 = $.querySelectorAll(".item43")

items43.forEach(function (item) {
    item.addEventListener("click", function (e) {
        item.parentElement.remove()
    })
})

// function to refresh page
function refreshPage() {
    window.location.reload();
}

// ================= #47 | onContextMenu | =================

// context-menu = menu that appears upon user interactions such as right click

// its about clients right click in DOM

function clickBtn47(e) {
    console.log("clicked!");
}

// now is return false and it will not log!
function cntxtMen() {
    console.log("Righ Clicked!");
}

// ================= #48 | clipBoard | =================

let textBox48 = $.getElementById('textBox48')

textBox48.addEventListener("copy", copyHandler)
textBox48.addEventListener("cut", cutHandler)
textBox48.addEventListener("paste", pasteHandler)

function copyHandler(ev) {
    console.log('Visually Copied, But Not in Real :)');
    ev.preventDefault()
}

function cutHandler(ev) {
    console.log('Visually Cuted, But Not in Real :)');
    ev.preventDefault()
}

function pasteHandler(ev) {
    console.log('Visually Pasted, But Not in Real :)');
    ev.preventDefault()
}


// ================= #49 | pageX and pageY  | =================

let btn49 = $.getElementById('btn49')

btn49.addEventListener('click', clickBtn49)

function clickBtn49(e) {
    console.log("pageX: " + e.pageX + "\n" + "pageY: " + e.pageY);
}


// ================= #52 | onLoad Event | =================

// do a function after load whole page such as css and js files and also DOM
// mostly used for body
// onLoad="" attr or addEventListener
// useful for preloaders 

window.addEventListener("load", function () {
    console.log("Welcome To My JS Resume!" + '\n' + "This Message Will Appeared When Page Loads!" + '\n' + "To Remove It, Just Comment 673th Line Of JS Code")
})

// ================= #53 |  DOMContentLoaded Event | =================

// simmilar to onLoad
// but doesn't wait for css and js and will execute immediately when DOM Loaded!

// window.addEventListener("DOMContentLoaded", function () {
//     console.log("This Message Is Show When DOMContentLoaded " + '\n' + "To Remove It, Just Comment 681th Line Of JS Code")
// })

// ================= #54 |  | =================

const loader = document.querySelector(".loader")

window.addEventListener("load", function () {
    // loader.classList.add("loaderOff")
    loader.className += " loaderOff"
})

// ================= #58 | onunload and onbeforeunload event | =================

// very useless events

// onunload occurs when page has unload (close page, click on link or submitting a form)

// onbeforeunload is when page is about to be unload (before unload)

// ================= #59 | removeEventListener | =================

// to prevent event listening



// ================= #60 | onSelect Event | =================

// useless event

// when user select a text on input or textarea elements will execute function

// ================= #61 | Touch event | =================

// usefull on touchpad screen devices like phone, tablet and etc..

// ontouchstart >> when the user touches on an element (like onkeydown)

// ontouchmove >> simmilar to mousemove (like onkeypress)

// ontouchend >> oposite of ontouchstart, Executes when the user releases the touch (like onkeyup)

// ontouchcancel >> when a touch is interrupted


// ================= #62 | Touch event | =================

// --------------------

// =================================