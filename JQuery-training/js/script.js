// First 
// syntax >> $(selector).action();

// $ is JQuery Symbol

// Read Suntax By This Way, Mr.Jquery Go and Select elements that i need (selector) and then do (some) actions 

// ================================================== ex-1:

$("#Text").fadeOut(1000);


// Mr.Jquery Select Document And after onLoad it do this func: go and select That Element With Text Id and do a fadeOut effect on it

// ================================================== :
// #selectors are similar to Vanilla >> use class, id, tag name or all (*) 

$("#button-1").click(function () {
    $("#first").fadeOut(1000) // id selector

})

$("#button-2").click(function () {
    $(".well").fadeOut(1000) // class selector

})

$("#button-2").click(function () {
    $(".well").fadeOut(1000) // class selector

})

$("#button-3").click(function () {
    $("*").fadeOut(1000) // class selector

})

$("#button-4").click(function () {
    $("[testAttr*='firstAttr']").fadeOut(1000) // contains word 
})

$("#button-5").click(function () {
    $("[wordAttr~='secAttr']").fadeOut(1000) // should be exact word  

})

$("#button-6").click(function () {
    $("[endWord$='ad']").fadeOut(1000) // contains word at end  

})


$("#button-7").click(function () {
    $("[equal='ali']").fadeOut(1000) // exact equal 

})

$("#button-8").click(function () {
    $("[startWord^='hey']").fadeOut(1000) // start with specific word 

})


$("#reload").click(function () {
    location.reload()

})
