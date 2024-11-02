/* i will do this exercise by 2 way, it's  */

// first way: #object-dataBase 

// holders

let citiesSheet = {
    tehran : {city: 'Tehran', temp: 16, weather: 'Sunny' , humidity: 22, windSpeed: 7} ,
    isfahan : {city: 'Isfahan', temp: 3, weather: 'Snowy' , humidity: 7, windSpeed: 25} ,
    mashhad : {city: 'Mashhad', temp: 10, weather: 'Rainy' , humidity:60 , windSpeed:11 } ,
    mashad : {city: 'Mashhad', temp: 10, weather: 'Rainy' , humidity:60 , windSpeed:11 } ,
    tabriz : {city: 'Tabriz', temp: 20, weather: 'Clear' , humidity:15 , windSpeed:14 } ,
    karbala : {city: 'Karbala', temp: 30, weather: 'Rainy' , humidity: 73, windSpeed: 6} ,
    najaf : {city: 'Najaf', temp: 32, weather: 'Cloudy' , humidity: 69, windSpeed: 10} ,
    kish : {city: 'Kish', temp: 35 , weather: 'Sunny' , humidity: 80, windSpeed: 9} ,
}

let $ = document;
let searchedCity = $.querySelector('#city-search')
let searchBtn = $.querySelector('#search-btn')

// event
searchBtn.addEventListener('click' , function (){

    // get city as key to access values 
    let cityKey = searchedCity.value
    let cityData = citiesSheet[cityKey]
    
    // control i/o / cityData === undefiend === false
    if (cityData){
        $.querySelector('#city-name').innerHTML = `Weather Of ${cityData.city}`
        $.querySelector('#temp-p').innerHTML = `${cityData.temp}°C`
        $.querySelector('#condition-p').innerHTML = `${cityData.weather}`
        $.querySelector('#humidity-p').innerHTML = `Humidity: ${cityData.humidity}%`
        $.querySelector('#wind-speed').innerHTML = `Wind Speed: ${cityData.windSpeed} Km/h`
        $.querySelector('.results-field').classList.remove('loading')
    } else {
        alert("Please Enter Another City")
    }
})


// second way: #Array-dataBase

// let citiesSheet = [
//     {name: 'tehran', temp: 16, weather: 'Sunny' , humidity: 22, windSpeed: 7} ,
//     {name: 'isfahan', temp: 3, weather: 'Snowy' , humidity: 7, windSpeed: 25} ,
//     {name: 'mashhad', temp: 10, weather: 'Rainy' , humidity:60 , windSpeed:11 } ,
//     {name: 'mashhad', temp: 10, weather: 'Rainy' , humidity:60 , windSpeed:11 } ,
//     {name: 'tabriz', temp: 20, weather: 'Clear' , humidity:15 , windSpeed:14 } ,
//     {name: 'karbala', temp: 30, weather: 'Rainy' , humidity: 73, windSpeed: 6} ,
//     {name: 'najaf', temp: 32, weather: 'Cloudy' , humidity: 69, windSpeed: 10} ,
//     {name: 'kish', temp: 35 , weather: 'Sunny' , humidity: 80, windSpeed: 9} ,
// ]

// let $ = document;
// let searchedCity = $.querySelector('#city-search') // input
// let searchBtn = $.querySelector('#search-btn') // btn

// searchBtn.addEventListener('click' , function (){

//     // get city as key to access values 
//     let cityName = searchedCity.value
//     let cityData = citiesSheet.find(function(city){return city.name === cityName})
   
//     // control i/o / cityData === undefiend === false
//     if (cityData){
//         $.querySelector('#city-name').innerHTML = `Weather of ${cityData.name}`
//         $.querySelector('#temp-p').innerHTML = `${cityData.temp}°C`
//         $.querySelector('#condition-p').innerHTML = `${cityData.weather}`
//         $.querySelector('#humidity-p').innerHTML = `Humidity: ${cityData.humidity}%`
//         $.querySelector('#wind-speed').innerHTML = `Wind Speed: ${cityData.windSpeed} Km/h`
//         $.querySelector('.results-field').classList.remove('loading')
//     } else {
//         alert("Please Enter Another City")
//     }
// })
