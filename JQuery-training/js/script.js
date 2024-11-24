// First 
// syntax >> $(selector).action();

// $ is JQuery Symbol

// Read Suntax By This Way, Mr.Jquery Go and Select elements that i need (selector) and then do (some) actions 

// ================================================== ex-1:

$("#Text").fadeOut(1500);


// Mr.Jquery Select Document And after onLoad it do this func: go and select That Element With Text Id and do a fadeOut effect on it

// ================================================== :
// #selectors are similar to Vanilla >> use class, id, tag name or all (*) 

$("#button-1").click(function () {
    $("#first").fadeOut(500) // id selector

})

$("#button-2").click(function () {
    $(".well").fadeOut(500) // class selector

})

$("#button-2").click(function () {
    $(".well").fadeOut(500) // class selector

})

$("#button-3").click(function () {
    $("*").fadeOut(500) // class selector

})

$("#button-4").click(function () {
    $("[testAttr*='firstAttr']").fadeOut(500) // contains word in defined attr
})

$("#button-5").click(function () {
    $("[wordAttr~='secAttr']").fadeOut(500) // should be exact word in defined attr

})

$("#button-6").click(function () {
    $("[endWord$='ad']").fadeOut(500) //  predefined attr contains word at end in value

})


$("#button-7").click(function () {
    $("[equal='ali']").fadeOut(500) // exact equal with value of a defined attr

})

$("#button-8").click(function () {
    $("[startWord^='hey']").fadeOut(500) // start with specific word in defined attr

})

$("#button-9").click(function () {
    $(":button").fadeOut(500) //  select button type elements

})

$("#button-10").click(function () {
    $(":checkbox").fadeOut(500) //  select check box type elements

})

$("#button-11").click(function () {
    $("#parent > p").fadeOut(500) //  access to children of a parent by >

})

$("#button-12").click(function () {
    $("#anotherParent:contains('hey')").fadeOut(500) //  go to #id and if contains 'specific text' do fade out

})

$("#button-13").click(function () {
    $("#descendantID p").fadeOut(500) // Similar to parent > child selector but if put > , will select first gen of children, without > will select all p elements
})

$("#button-14").click(function () {
    $("#desInp input:disabled").fadeOut(500) // based on css selectors >> :disabled/enabled
})

$("#button-15").click(function () {
    $("#enInp input:enabled").fadeOut(500)
})

$("#button-16").click(function () {
    $("#emptySelector :empty").fadeOut(500) // inner empty value 
})

$("#button-17").click(function () {
    $("#indexSelector p:eq(2)").fadeOut(500) // will remove  p with index of 2
})

$("#button-18").click(function () {
    $("#evenSelector p:even").fadeOut(500) // will remove  elements with even index 
})

$("#button-19").click(function () {
    $("#fileSelector :file").fadeOut(500) // input with file type will selected
})

$("#button-20").click(function () {
    $("#childSelector p:first-child").fadeOut(500) // will select first child of p elems
})

$("#button-21").click(function () {
    $("#firstType p:first-of-type").fadeOut(500) // will select first element with type of p at each sub parent
})

$("#button-22").click(function () {
    $("#firstSel p:first").fadeOut(500) // will select first p in children
})

$("#button-23").click(function () {
    $("#greaterThan p:gt(1)").fadeOut(500) // will select all children after index 1
})







// reload btn
$("#reload").click(function () {
    location.reload()

})
