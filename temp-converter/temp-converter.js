// Js by mrAlpha

// holders 
let $ = document;
let unitFlag = true; /* to check is on F or C */

const buttons = {
    convert : $.querySelector('#convert-btn') , 
    reset : $.querySelector('#reset-btn') , 
    change : $.querySelector('#change-btn') 
};

const uiValues = {
    inputSection : $.querySelector('#input') ,
    heading : $.querySelector('#heading') ,
    result : $.querySelector('#result')
};


// Events 
buttons.convert.addEventListener('click' ,function (){

    // get value of input section as input
    let tempNum = parseInt(uiValues.inputSection.value);

    // control valid input 
    if (isNaN(tempNum)) {
        uiValues.result.innerHTML = `Please Enter a Number!`
        uiValues.result.setAttribute('style', 'display: inline-block')
        uiValues.result.style.backgroundColor = 'Red'
        
    } else{
        // control F or C and process
        if (unitFlag){
            // °C
            let fahrenheit = (tempNum*9/5)+32
            uiValues.result.innerHTML = `(${tempNum}°C × 9/5) + 32 = ${fahrenheit}°F`
            
        } else {
            // °F
            let celsius = (tempNum-32)*5/9
            uiValues.result.innerHTML =  `(${tempNum}°F − 32) × 5/9 = ${celsius}°C`
        }
        uiValues.result.setAttribute('style', 'display: inline-block')
    }  

});


buttons.change.addEventListener('click' ,function (){
    
    // change docTitle to current based on flag
    if (!unitFlag){
        $.title = 'Alpha-Converter | °C to °F'
        uiValues.inputSection.setAttribute('placeholder' , '°C')
        uiValues.heading.innerHTML = 'Converter °C to °F'
        unitFlag = true;

    } else {
        unitFlag = false;
        $.title = 'Alpha-Converter | °F to °C'
        uiValues.inputSection.setAttribute('placeholder' , '°F') 
        uiValues.heading.innerHTML = 'Converter °F to °C'
    }
    
    console.log(unitFlag);
});

buttons.reset.addEventListener('click' ,function (){
    // reset input section value
    uiValues.inputSection.value = ''
    // reset result by d none or remove class
    uiValues.result.setAttribute('style', 'display: none')
});





