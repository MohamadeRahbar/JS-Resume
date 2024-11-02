// holders 
let countriesData = {
    IR : ["Tehran" , "Mashad" , "Shiraz" , "Tabriz" , "Isfahan" ],
    US : ["New York" , "Los Angeles" , "Texas" , "California" , "New Jersey" ],
    IRQ : ["Najaf" , "Baqdad" , "Basrah"],
    Ger : ["Munich" , "Koln" , "Hamburg" , "Berlin" , "Frankfurt" ],
    CN : ["Ottawa" , "Toronto" , "Vancouver" , "Victoria" , "Quebec"],
    TUR : ["Istanbul" , "Antalya" , "Ankara" , "Izmir"]
}
let countrySelection = document.getElementById('countries');
let citySelection = document.getElementById('cities');
let reserveButton = document.getElementById('reserve');
let isBooked = false;

// add event listener to selection boxes
countrySelection.addEventListener('change' , function (){
    
    // return array of cities of selected country
    let selectedCountry = countriesData[countrySelection.value]; 
    // city value reset
    citySelection.innerHTML = '-- Select City --'

    if (selectedCountry === undefined){
        citySelection.innerHTML = ''
        citySelection.innerHTML = `<option>-- Select City --</option>`
    
    } else {
    selectedCountry.forEach(function(city){
        citySelection.innerHTML += `<option value="${city}" >${city}</option>`
        isBooked = true;
    })}
})

// add event listener to button
reserveButton.addEventListener('click' , function bookedFunc() {
    if (isBooked === false) {
        alert("Please Fill The Boxes!")
    } else {
        alert("Your Ticket Has Been Reserved!")
    }
} )
