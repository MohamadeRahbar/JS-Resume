//                              In The Name Of Allah                             //

// here is my notes and exercises for learning JS

// based on MDN / W3Schools and SabzLearn Websites

// Goal >> become an expert

// Target >> 2 Month for 0-100 of Vanilla JS (include review and learn)


// ----------------- first practice : 4 function calculator --------------------

// var firstNumber = +prompt("اولین عدد را وارد نمایید");
// var secondNumber = +prompt("دومین عدد را وارد نمایید");

// var plus = firstNumber + secondNumber;
// var multiply = firstNumber * secondNumber;

// if( firstNumber > secondNumber){
//   var minus = firstNumber - secondNumber;
//   var division = firstNumber / secondNumber;

// }else {
//   var minus = secondNumber - firstNumber;
//   var division = secondNumber / firstNumber;
// }

// alert(
// ` first number : ${firstNumber} `+
// "\n" + ` second number : ${secondNumber}`+
// "\n" + `plus result is : ${plus}` +
// "\n" + `minus result is : ${minus}` +
// "\n" + `multiply result is : ${multiply}` +
// "\n" + `devide result is : ${division}` )


// ------------------------------------- What is Exactly NaN

// NaN => Not A Number for exp :

// var exp = "alpha";
// var num1 = 50;
// var num2 = "12";

// alert(num1 % num2)  => NaN error exceptet

// typeof NaN => number : because it happens on a math operation




/*------------ isNaN Method ------------*/

// show result of isNaN as a boolean
// alert(isNaN(exp1+exp2));
// depend of exps value show true or false



/*------------Comparative Operators------------*/

// var num1 = 12;
// var num2 = 3;
// var num3 = 4;
// var str2 = "2"
// var str3 = "3"

// equal to ==> (==)

// alert(num2 == num3) // 3 == 4 => false
// alert(num2 * num3 == num1) // 3 * 4 == 12 => true
// alert(num1 / num3 == num2) // 3 == 4 => false
// alert(num3 < num2) // 4 < 3 => false
// alert(num2 * num3 > num1) // 12 > 12 => false


// strict equality ==> (===)

// // alert(num2 == str2) // 3 == "3" => true
// // alert(num2 === str2) // 3 === "3" => false // number != String

// not equal to (!=)
// greater than (>)
// less than (<)
// greater than or equal to (>=)
// less than or equal to (<=)



/*------------if statement------------*/

// if (condition){scope};

// var userNumber = +prompt("Enter a number" , "عدد را وارد کنید")

// if (userNumber % 2 != 0) {
//   alert("Odd  Number")
// }else {
//   alert("Even Number")
// };



/*------------average exercise------------*/


// var firstNumber = +prompt("اولین عدد را وارد نمایید");
// var secondNumber = +prompt("دومین عدد را وارد نمایید");
// var thirdNumber = +prompt("سومین عدد را وارد نمایید");

// var numAverages = (firstNumber + secondNumber + thirdNumber)/3;

// alert(numAverages);



/*------------age restriction exercise------------*/

// var userAge = +prompt("سن خود را وارد نمایید");

// if (userAge < 18) {
//   alert(" شما مجاز به ورود نیستید5")
// }else {
//   alert("ورود به پنل")
// }


/*------------power calculation exercise------------*/

// var firstNumber = +prompt("اولین عدد را وارد نمایید");
// var secondNumber = +prompt("دومین عدد را وارد نمایید");

// var numPower = firstNumber ** secondNumber;

// alert("power result is: " + numPower);




/*------------Age Calculator exercise------------*/

// var userBirthYear = +prompt("سال تولد خود را وارد نمایید" , 1376);
// var userAge = 1402 - userBirthYear;

// if (isNaN(userAge) || userAge < 1){
//   alert("تاریخ وارد شده صحیح نمیباشد")
// }else{
//   alert("your are " + userAge + " year old");
// }




/*------------Minutes to Hour Calculator exercise------------*/

// var minutes = +prompt("دقیقه را وارد نمایید")
// if (minutes < 1 || isNaN(minutes)){
//   alert("عدد صحیح وارد نمایید")
//   var minutes = +prompt("دقیقه را وارد نمایید")

// }else{
//   var hour = (minutes / 60);

// }

// alert(hour);


/*------------ Using else if ------------*/

// with "else if" we can set more "terms"

/* exp :

if (x/y==z){
  ...
}else if (z*y==x) {
  ...
} else if (x+z==y) {
  ....
}else {
  ....
}

*/


/*------------ OR (||) Bitwise Operators ------------*/


// Bitwise operators are used to manipulate the bits of a number.

// Or || یا

// true || true => true
// true || false => true
// false || false => false

/*------------ Access Level exercise ------------*/

//  var userAge = +prompt("سن خودرا وارد نمایید", 18)
//  var userSex = prompt("شما زن هستید یا مرد؟")

//  if(userSex==="زن" || userAge<18){
//   alert("شما مجاز به ورود نیستید")
//  }else {
//   alert("وارد شوید :)")
//  }

/*------------ AND (&&) Bitwise Operators ------------*/

// And && و

// true || true => true
// true || false => false
// false || false => false

/*========== logical not ==========*/

// var myBool = true

// alert("myBool = " + myBool) // true

// alert("!myBool = " + !myBool) // false

// alert("!!myBool = " + !!myBool) // true


/*------------ Ternary Operator | شرط خطی ------------*/

// syntax : var/let/const result = condition ? value1 : value2;

// var num1 = 4
// var num2 = 3

// if (num1*num2===12){
//   alert("حاصل برابر دوازده است")
// }else {
//   alert("حاصل برابر دوازده نیست")
// }

// var haselZarb = num1*num2===12 ? alert("حاصل برابر دوازده است")
// : alert("حاصل برابر دوازده نیست")


/*------------ Switch Statement------------*/

// var num1 = 4;
// var num2 = 3;

// var res = num1 * num2;

// switch(res){
//   case 10 :
//     alert("حاصل برابر 10 است")
//     break
//   case 11 :
//     alert("حاصل برابر 11 است")
//   case 12 :
//     alert("حاصل برابر 12 است")
//   case 13 :
//     alert("حاصل برابر 13 است")


// }

// switche bala barabar ast ba :

// if (res===10){
//   alert("حاصل برابر 10 است")
// }else if (res===11) {
//   alert("حاصل برابر 11 است")
// }else if (res===12){
//   alert("حاصل برابر 12 است")
// }else if (res===13){
//   alert("حاصل برابر 13 است")
// }


/*------------ Switch Statement------------*/

// var userAverage = +prompt("معدل خود را وارد نمایید" , 16)

// switch (userAverage){
//   case 18 :
//   case 19 :
//   case 20 :
//     alert("Grade A")
//     break

//   case 15 :
//   case 16 :
//   case 17 :
//     alert("Grade B")
//     break

//   case 12 :
//   case 13 :
//   case 14 :
//     alert("Grade C")
//     break

//   default :
//   alert("You Are Dropped")
//   }

// solving by if :

// if (userAverage >= 18 && userAverage <= 20){
//   alert("Grade A")
// } else if (userAverage >= 15 && userAverage < 18) {
//   alert("Grade B")
// } else if (userAverage >= 12 && userAverage <15) {
//   alert("Grade C")
// } else if (userAverage > 20 || userAverage < 1 ) {
//   alert("Put a real average")
// } else {
//   alert("You Are Dropped")
// }


/*------------ Declaration functions ------------*/

// - first define function
// - then just call the function!

// syntax : function name(params){scope}:

/* exp :

function sumResult () {
  var num1 = 2;
  var num2 = 8;
  var resValue = num1 + num2;
  alert("Result : " + resValue)
} // here you can't see anything until call it!

sumResult(); // now , function will executed

*/


/*------------ Expression functions ------------*/


// - first set a variable and then assign the function

// syntax : var name = function (params){scope};

// exp :
// var sumResult = function () {
//   var num1 = 2;
//   var num2 = 8;
//   var resValue = num1 + num2;
//   alert("Result : " + resValue)
// }

// sumResult(); // sumResult function will be executed



/*------------ functions parameters control  ------------*/


// // to write a dynamic code , we have to give value and data from
// // clients and we just write functions !
// // for handle and control them and give parameters from users :

// exmp 1 :

// function showText (userText) {
//   alert("Your Param is : " + userText)
// }

// // till we don't call function with set value of (userText) ,it will not be executed

// // so we have do this :
// showText("mr.Alpha") // browser will alert ( Your Param is : mr.Alpha)

//

// exmp 2 :

//  function showTwoNums (firstNum , secondNum) {
//   alert("first param : " + firstNum)
//   alert("second param : " + secondNum)
//  }

//  //as i said before we have to call function and set value of params to replacement :
//  showTwoNums(85,69)


/*------------ even odd exercise  ------------*/

// var userNum = +prompt("put a number")

// function numParity (x) {
//   if (x%2==0){
//     alert("Even Numvber")
//   }else if (isNaN(x)){
//     alert("insert a valid number")
//   }else {
//     alert("Odd Number")
//   }
// }

// numParity(userNum)


/*------------ average of nums exercise  ------------*/

// var firstNum = +prompt("put first number")
// var secondNum = +prompt("put second number")
// var thirdNum = +prompt("put third number")

// function numAverage (first,second,third) {
//   var aveResult = (first+second+third)/3
//   alert("first num is : " + first + " || " +
//   "second num is : " + second + " || " +
//   "third num is : " + third + "                 " + "and Average of them is : " +
//   aveResult)
// }

// numAverage(firstNum,secondNum,thirdNum)


/*------------ Set Default Value of params  ------------*/


// function sumValue (num1 = 1 , num2 = 2)  {

// 	// if (num1 == undefined) {
// 	// 	num1 = 1
// 	// }
// 	// if (num2 == undefined) {
// 	// 	num2 = 2
// 	// }
//   // // instead of using some if , just set default values in param section ( exmp : num1 = 1 / num2 = 2 >> these are default values to prevent undefined or NaN)
// 	var result = num1 + num2
// 	alert("Result= " + result)
// }

// sumValue(10)

/*------------ Return in functions  ------------*/

// // return the result of function and then can be used everywhere as a value
// // Return can be used only once in each function and after using that , function will no more be executed.


// function sumNumbers (num1, num2) {
// 	var result = num1 + num2
// 	// alert("Result = " + result)
// 	return result // without this , we will have undifined error , because of the value can't be store after calling.
// }

// var sumResult = sumNumbers(2, 8)

// alert("sumResult = " + sumResult)

////////// exmp 2 :

// var number1 = +prompt('Enter First Number ...')
// var number2 = +prompt('Enter Second Number ...')


// function showPower (num1, num2) {

//   var numPower = num1**num2;
//   alert("Power result is : " + numPower)
// 	alert("num1 = " + num1)
// 	return num1 ** num2
// }

// var powerResult = showPower(number1, number2)

// alert('powerResult = ' + powerResult)



// ------------- String Structure & Methods  ------------

// each character have specific index , starts from 0

// for access to a character of a word use [index]

// exp :

// var userName = 'AlphaloverZ'
// alert(userName[10])  >> will alert 'Z'


// .................

// Length Method : returns number of characters

// var userName = 'sky'
// exp : alert(userName.length) >> will alert 3

// usage exp : user or password length check or selection

// ------------- Registration Exercise  ------------


// var userName = prompt('نام خود را وارد نمایید')
// var password = prompt('رمز خود را وارد نمایید')

// if (userName.length < 3 || password.length < 8) {
//   alert("نام کاربری حداقل باید 3 کارکتر و پسورد باید حداقل 8 کارکتر داشته باشد")
// } else {
//   alert('خوش آمدید')
// }


// ================================ String Methods  ================================

// var text = "I Love JavaScript"

// alert(text[0]) >> Returns 'I' || alert(text.charAt(0)) >> Returns 'I'

// alert(text.charCodeAt(0)) >> Returns Ascii Code / ascii code uppercase and lowercase is different

// concat method >> alert(text.concat("& React")) >> will show : "I Love JavaScript & React"

// alert(text.trim()) >> will show text without first and last spaces

// alert(text.toLowerCase()) >> will change letters to lowercase

// alert(text.toUpperCase()) >> will change letters to uppercase

// alert(text.search("Java")) >> will search word and returns index of first character of text
// if searched text not found >> returns -1

// alert(text.indexOf('Love')) >> returns 2 / same as search method ,  it will search and return index but wider

// alert(text.includes('Love')) >> returns boolean , for this expm = True


// ------------- String Methods exercise ------------

// var userName = prompt('Enter Your User name')
// var password = prompt('Enter Your Password')

// if (userName.toLowerCase() == 'ali') {
//   alert('welcome back ali')
// }else {
//   alert("access denied!")
// }

// ------------40 - String Methods exercise ------------

// var text = "I Love JavaScript & React"

//  slice : returns from index / to index
//  alert(text.slice(7)) >> JavaScript & React
//  alert(text.slice(7 , 17)) >> JavaScript

// substr : index + x (length)
// alert(text.slice(7 , 10)) = from index 7 to (7+10=17) >> JavaScript

// substring : same as slice
// alert(text.substring(7 , 17)) >> JavaScript



// ================================ Math Method  ================================

// alert(Math.pow(2,3)) >> 8 | (2 ** 3)  =  2 * 2 * 2 = 8
// alert(Math.sqrt(64)) >> 8 | 8 * 8 = 64
// alert(Math.abs(-10)) >> |-10| = 10 >> negative to positive
// alert(Math.min(20 , 54 ,32 ,2 ,1,43 ,32)) >> 1 | returns minimum number
// alert(Math.max(20 , 54 ,32 ,2 ,1,43 ,32)) >> 54 | returns maximum number
// alert(Math.floor(110.49)) >> returns 110
// alert(Math.trunc(110.49)) >> same as floor returns 110
// alert(Math.round(110.49)) >> 110
// alert(Math.round(110.50)) >> 111
// alert(Math.ceil(110.49)) >> 111 | round to upper number
// alert(Math.random()) >> Returns a pseudorandom number between 0 and 1


// exercise

// var randNum = Math.random() * 100000
// var captchaCode = Math.round(randNum)
// alert(`Captcha Code is ${captchaCode}`)



// ------------- Assignment Operators ------------

// (+ - ++ --  * ** / += -= *= **= /= )


// ------------- Difference between ++X & X++  ------------

// ++number
// number++

// number1 = 1
// var number2 = number1++ >> number2 = 1 / number1 = 2
// var number2 = ++number1 >> number2 = 2 / number1 = 2


// ------------- Repeat Loops  ------------

//  for (begin; condition; step ) {
//     code here
//  }

// step : i++ / i-- / i+= / i-= / ...

// number = 0
// for (var i = 0 ; i < 5 ; i++) {
// number++
// alert("alert" +' '+ number )
// alert(i + "alert" )
// console.log(i, 'Person')
// }

// ================================ for Loop Tips  ================================

// var username = "Mohamad Rahbar"
// for (var i =0 ; i < username.length ; i++ ){
//   console.log("index",i, "=>" , username[i])
// }


// ------------ for loop exercise (Show-Odd-Nums) ------------

// for (var i = 0 ; i < 100 ; i++){
//   if (i % 2 == 0 ){
//     console.log(i)
//   }
// }

// for (var i = 0 ; i < 100 ; i += 2){
//     console.log(i)
// }

// ------------ for loop exercise 2 (Basket-Price)  ------------

// var totalCost = 0

// for (var i = 0 ; i < 5 ; i++ ){
//   var totalCost = totalCost + +(prompt("Enter Number"))
// }

// alert(totalCost)

// ------------50 - for loop exercise 3  (Average) ------------

// var userNumber = null

// for (var i = 0 ; i < 5 ; i++ ){
//   var userNumber = userNumber + +(prompt("Enter The Number " + (i + 1) ))
// }

// var numAverage = userNumber / 5 ;

// alert(userNumber)


// ------------ for loop exercise 4 (Sum-NumDigits)  ------------

// var userNum = +(prompt("Enter Your Number" , 0))
// var numSum = 0

// for (var i = 0 ; (userNum / 10) != 0  ; i++){

//   numSum += (userNum % 10)
//   userNum = Math.floor(userNum / 10)

// }

// console.log(numSum , "user Number was : " + userNum)

// exp : 142 >> 1 + 4 + 2 = 7  ||  100000001 >> 2

// ------------ for loop exercise 5 (Digit-Counter)   ------------


// var userNum = +(prompt("Enter Your Number"))
// var numDigits = 0

//   if (isNaN(userNum) == true ) {
//     userNum = +(prompt(" Please Enter a Number"))
//     if ( userNum == 0){
//       numDigits = 1
//     }

//   } else if ( userNum == 0){
//     numDigits = 1

//   }

// for (var i = 0 ; (userNum / 10) != 0  ; i++){
//       userNum = Math.floor(userNum / 10)
//       numDigits++
// }
// alert(numDigits)



// ================================  while Loop Tips   ================================

// Syntax :

// while (condition) {
//   code
//   so-called "loop body"
// }

// Infinity loop :

// var i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
// }
//  >> untill i = 0 >> condition is true so it will alert infinite 0  >> infinity loop


// for prevent infinity loop >> put counter (i++/i+=2/...) into loop body , exp :

// var i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// ------------ while loop exercise (Show-Even/Odd-Nums) ------------

// var i = 0
// while (i < 100){
//   if ((i % 2)==1 ){
//     console.log('odd number' + ' '+ i);
//   i++
// }

//................................
// var i = 0
// while (i < 100){

//   console.log( i )
//   i+=2

// }

// ------------- while loop exercise 2 (Numbers-Average) ------------


// var userNum = 0
// var numAverage = 0
// var i = 0

// while (i < 3){
//  userNum += +(prompt("Enter Your Number"))
//  numAverage = Math.round(userNum / 3)
//  i++
// }

// console.log(userNum , numAverage)


// ------------ while loop exercise 3 (Sum-NumDigits & Digit-Counter)  ------------

// var userNum = +(prompt("Enter Your Number"))
// var sumDigits = 0
// var numDigits = 0

// while ((userNum / 10) != 0){
//   sumDigits += (userNum % 10)
//   userNum = Math.floor(userNum / 10)
//   numDigits++

// }

// alert("Sum of digits result is : " + sumDigits + '\n' + "Digits of number is : " + numDigits)

// "\n " New Line , same as <br> "\n\n" >> 2 Enter


// -------------55- while loop exercise 4 (Show Even Numbers Between 2 point) ------------

// var startNum = +(prompt("Enter Start Number"))
// var endNum = +(prompt("Enter End Number"))

// if (startNum>endNum) {
//   var startNum = +(prompt("first Number should be smaller"))
//   var endNum = +(prompt("second Number should be bigger"))
// }else {

//   while (startNum <= endNum ){
//   if (startNum % 2 == 0){
//     console.log('Even Nums : ' + startNum)}
//     startNum++
//   }

// }



// -------------- while loop exercise 5 (Unlimited Number Average) ------------

// at this exercise we have to set a condition by own

// var userNum = 0
// var userNumSum = 0
// var counter = 0
// var numAverage = 0


// while (userNum != -1){
//  userNumSum += userNum
//  userNum = +(prompt(" Enter Your Numbers \n For Break , Please Enter -1 "))
//  if (userNum != -1){
//   counter++
//  }

// }

// numAverage = Math.round(userNumSum / counter )

// console.log("user num sum : "+ userNumSum + "\n" + "level counter : " + counter + "\n" + "num average : " + numAverage)



// ================================  do while Loop Tips   ================================

// syntax :
// do {
//   loop body
// } while (condition);

// At least execute once whithout any condition (executes loop body)

// exp :

// var i = 0

// do {
//   console.log(i)
//   i++
// } while (i > 1) // false condition

// but it will log 0

// not very usefull

// ========================  power exervise with loops   ============================



// var firstNum = +prompt("Enter First Number")
// var secondNum = +prompt("Enter Second Number")
// var numPower = 1
// var i = 0

// do {

//   numPower *=  firstNum
//   i++

// }while (i < secondNum);


// ---- with while loop ---

// while (i < secondNum){
//   numPower *=  firstNum;
//   i++
// }

// ---- with for loop ---

// for (var i = 0 ; i < secondNum ; i++){
//   numPower *=  firstNum;

// }

// console.log(firstNum + " power " + secondNum + " = " + numPower)


// ================================  Arrays   ================================

// 1- var arr = new Array();
// 2- var arr = [] >> we use it

// var oddNums = [5,485,585,31,1897,13]

// console.log(oddNums) //  will log  > (6) [5, 485, 585, 31, 1897, 13]
// // if click on > shows this list bellow :
// // 0: 5
// // 1: 485
// // 2: 585
// // 3: 31
// // 4: 1897
// // 5: 13
// // length: 6
// // [[Prototype]]: Array(0)

// console.log(oddNums.length) // will log length
// console.log(oddNums[3]) // will log 31
// console.log(oddNums[7]) // will log undefined (more than length and index)

// ================================  Arrays Methods  ================================

// push pop shift unshift

// var nums = [10,20,30,40,50] // length = 5 (0-4 indexes)

// console.log(nums) // (5) [10, 20, 30, 40, 50]

// // 2 ways for add an index to array :

// // first way :

// nums[5] = 60

// console.log(nums) // (6) [10, 20, 30, 40, 50, 60]

// // push Method :

// nums.push(70)

// console.log(nums) // (7) [10, 20, 30, 40, 50, 60, 70]

// nums.push(80 , 90 , 100)

// console.log(nums) // (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


// // for delete index :

// nums.pop()

// console.log(nums) // (9) [10, 20, 30, 40, 50, 60, 70, 80, 90]


// ----- unshift and shift Methods -----

// shift and unshift is same as pop & push but its starts from first index

// var nums = [10,20,30,40,50]
// console.log(nums) // (5) [10, 20, 30, 40, 50]

// nums.shift()

// console.log(nums) // (4) [20, 30, 40, 50]

// nums.unshift(0 , 5)

// console.log(nums) // (6) [0, 5, 20, 30, 40, 50]


// ============================= Arrays Exercise  ==============================
// var userNum = 0
// var numArr = []
// var numberSum = 0

// while (userNum != -1){
//   userNum = +prompt("Enter your Numbers For Break Enter -1")

//   if (userNum != -1){
//     numArr.push(userNum)
//   }

// }

// for (var i = 0 ; i < numArr.length ; i++){
//   numberSum += numArr[i]

// }

// var numAverage = numberSum / numArr.length


// console.log("Average of " + numArr + " = " + numAverage )

// ============================ #62 | Objects |  ===============================

// object uses for store data's by {Key = value} method

// array :

// var cars = ["bmw" , "benz" , "porsche" , "audi"];
// console.log(cars[0]) >> bmw

// simple object example :

// var bmw330 = {
//   "color" : "red",
//   "Power" : "500hp" ,
//   "price" : "$30K"
// }
// console.log(bmw330.price) >> $30k

// object inside an array :

// var cars = [
//   {
//     "brand" : "bmw",
//     "color" : "red" ,
//     "power" : "500hp" ,
//     "price" : "$30k"
//   } ,
//   {
//     brand : "Audi" ,
//     color : "black" ,
//     "power" : "485hp" ,
//     "price" : "$35k"
//   }
// ]
// console.log(cars[1].brand) >> audi

// ===================== | User Registration Exercise |  ==========================

// var users = [
//   {id : 1 , name : "mohamad" , lastName : "rahbar" , age : 27 , mail : "mohamaderahbar@yahoo.com" } ,
//   {id : 2 , name : "pegah" , lastName : "ashtari" , age : 26 , mail : "pegahashtari@yahoo.com" } ,
//   {id : 3 , name : "ali" , lastName : "afshari" , age : 35 , mail : "aliafshari@yahoo.com" }
// ]

// var newUserName = prompt("نام خود را وارد نمایید");
// var newUserLastName = prompt("نام خانوادگی خود را وارد نمایید");
// var newUserAge = +prompt("سن خود را وارد نمایید");
// var newUserMail = prompt("ایمیل خود را وارد نمایید");

// if ( newUserName.length < 2 || newUserName.length > 10 ) {
//   alert("نام نمی تواند کمتر از 2 حرف یا بیشتر از 10 حرف باشد")
// } else if (newUserLastName.length < 3 || newUserLastName.length > 15 ) {
//   alert("نام خانوادگی نمی تواند کمتر از 3 حرف یا بیشتر از 15 حرف باشد")
// } else if (newUserAge.length > 3 || isNaN(newUserAge) ) {
//   alert("سن باید حتما عدد و نهایتا 3 رقمی باشد")
// } else {
//   var newUser = {
//     id: 4 , name : newUserName , lastName : newUserLastName , age : newUserAge , mail : newUserMail
//   }
//   users.push(newUser);
// }

// console.log(users)


// ============================ #64 | forEach loop |  ===============================

// calls a function per each array elements or object values

// [array].forEach(function())

//  var users = [
//     'ali' ,
//     'mohamad' ,
//     'hasan' ,
//     'hosein' ,
//   ]

// users.forEach(function(user){
//  console.log(user)           >>  will show users elements (ali,mohamad,hasan,hosein)
// })

// ============================ | forEach exercise |  ===============================

// var usersInfo = [
//   {
//     id : 1 ,
//     name : "ali" ,
//     lastName : "emami" ,
//     age : 21
//   },
//   {
//     id : 2 ,
//     name : "mohamad" ,
//     lastName : "eshghi" ,
//     age : 28
//   },
//   {
//     id : 3 ,
//     name : "hosein" ,
//     lastName : "azizi" ,
//     age : 35
//   }]

// usersInfo.forEach(function(userInfo){
//   console.log("user name: " + userInfo.name  + " | last name: " + userInfo.lastName + " | age: " + userInfo.age)
// })

// =========================== #66 | includes Method |  ==============================

// check if an array includes(something , 0 (default)) then returns true or false.

// second element (0) is about from which index start to checking array.

// #cleanCode >> start naming of logical variables with "is" for ex : isNan, isLogin, ...

// ===========================  | includes exercise |  ==============================

// var newUser = prompt("enter Your Name");

// var usersName = ["ali","pegah","mohamad","hasan"]

// var isUserLogin = usersName.includes(newUser)

// if (isUserLogin === true) {
//   alert("welcome " + newUser)
// }else {
//   alert("please SingUp dear " + newUser)
// }

// ===========================  | Some Method |  ==============================

//  simmilar to forEach Method but executed until first true, then will break, not per
//  each elements. | very usefull for filtering

//  var userData = [
//   {id:1, name:"ali" , age:26},
//   {id:2, name:"hasan" , age:28},
//   {id:3, name:"hosein" , age:30},
//  ]
/*   console.log(userData.includes({id:1, name:"ali" , age:26})) >> false
because includes can't accept object models */

//  var newUserName = prompt('enter name');

// var isUserTrue = userData.some(function(user){
//   return user.name == newUserName
// })

// console.log(isUserTrue) >> check if user is in list >> true / false

// ===========================  | Some Method exercise |  ==============================

// var alphaProducts = [
//   {id : 1 , name : "Glass" , price : 120 },
//   {id : 2 , name : "Pc" , price : 600 },
//   {id : 3 , name : "Iphone 15" , price : 820 },
//   {id : 4 , name : "Laptop" , price : 1100 },
//   {id : 5 , name : "Monitor" , price : 899 },
// ]

// var userShoppingCart = [
//   {id : 1 , name : "Shoe" , price : 549},
//   {id : 2 , name : "Graphic Card" , price : 1700},
//   {id : 3 , name : "EarPods" , price : 987},
// ];

// var userProduct = prompt("enter product name");

// // save user order to Cart as an array for feature acceess
// var userOrder;

// var isProductAvailable = alphaProducts.some(function(product){
//   if (product.name === userProduct){
//     userOrder = product
//     return true;
//   }
// });

// if (isProductAvailable === true) {
//   var newOrder =
//     {id:4,
//      name : userOrder.name ,
//      price : userOrder.price
//     }

//   userShoppingCart.push(newOrder)

//   var finalCost = 0;

//   userShoppingCart.forEach(function(product){
//     finalCost += product.price;
//   })
//   alert("Your Total Cost : $" + finalCost )
// } else {

//   alert('(' + userProduct  + ')' + " is not availble now!")
// }

// =========================== #69 | Array every Method |  ==============================

// check if all the value of an array follows the condition to return boolean answer

// simmilar to forEach and some method, execute per each elements of array

// at first false will break

//  var ages = [19,20,35,48,24,18]

//  var allAdults = ages.every(function(age){
//   return age > 18
//  })
// console.log(allAdults)  >> false because of last value (18)

// ===========================  | every Eexercise |  ==============================

// var groupUsers = [
//   {id:1 , name: "mohamad" , age:35 },
//   {id:2 , name: "ali" , age: 30  },
//   {id:3 , name: "hasan" , age: 28 },
//   {id:4 , name: "hosein" , age: 25 },
//   {id:5 , name: "sajad" , age: 19 },
// ];

// var ageChecker = groupUsers.every(function(user){
//   return user.age > 18
// })

// switch (ageChecker) {
//   case true :
//     console.log("all users are adult")
//   break;

//   case false :
//     console.log("all users are not adult!")
//   break
// }

// =========================== #71 | splice Method |  ==============================

// simmilar to pop & push and shift and unshift

// by this method we can add, replace or remove items at first, between and end of an array

// splice mutates the original array with adding, removing or replacing elements to it.

// based on index

// [array].splice(start point(by index), number of element after start point to delete , replacement values) for exp

// var number = [13, 434, 65, 23, 64, 243, 12, 1];

// var numberSplice = number.splice(2, 2, 10);

// alert(numberSplice) >> start from third index (65) and 2 item with start item [65, 23]

// alert(number) >> after removing [65, 23], [10] will add between [434] and [64]

// number = [13, 434, 10, 64, 243, 12, 1]

// =========================== #72 | findIndex Method |  ==============================

// use for find index of an item inside an array

// var users = [
//   {id:1 , name: "ali" , age: 23 },
//   {id:2 , name: "hasan" , age: 43 },
//   {id:3 , name: "hosein" , age: 34 },
// ]

// var userIndex = users.findIndex(function(user){
//   console.log(user) // >> log until find equal value of "hasan"
//   return user.name == "hasan"
// })

// console.log(userIndex) // >> will return 1 as index

// =========================== | findIndex exercise | ==============================

// var allProducts = [
//   {id:1 , name: "pc", price: 900 } ,
//   {id:2 , name: "phone", price: 700 } ,
//   {id:3 , name: "water", price: 10 } ,
//   {id:4 , name: "glass", price: 120 } ,
// ];

// var shopingCart = [
//   {id:5 , name: "laptop", price: 539 },
//   {id:6 , name: "monitor", price: 269 },
//   {id:7 , name: "shoe", price: 110 },
// ];

// var userChoice = prompt("1 for Add / 2 for Remove?");

// switch (userChoice) {

//   case "1":

//     var newOrder = prompt("Enter new product");
//     var addOrder;
//     var isAvailble = allProducts.some(function (product) {
//       if (newOrder === product.name) {
//         addOrder = product ;
//         console.log(newOrder)
//         return true;
//       }
//     });
//     if (isAvailble == true){
//         shopingCart.push(addOrder);
//         console.log(shopingCart);
//     } else {
//         alert(newOrder + " is Not Available Now!");
//       };
//     break;

//   case "2":

//     // get product to remove
//     var ordRemove = prompt("Enter product");

//     var removeItem;

//     // check is in cart
//     var isInCart = shopingCart.some(function(product){
//       if (ordRemove === product.name){
//         removeItem = product
//         return true;
//       };
//     });

//     var remIndex;

//     if (isInCart === true) {
//       // get index of item
//       remIndex = shopingCart.findIndex(function(products){
//         return products.name == ordRemove;
//       });
//     } else {
//       alert(ordRemove + " is Not in Your Bag!");
//     }

//     // remove item from cart
//     shopingCart.splice(remIndex , 1)

//     console.log(ordRemove + " has been deleted from bag!");

//   break;
// default:
//   alert("back to menu")
// };


// ============================= #74 | Map Method | ==============================

// execute a function per each array simmilar to perEach, some, every and iclude then return an array of results

// var allNums = [1, 2, 3, 4, 5, 6];

// var powerOfNums = allNums.map(function (nums) {
//   return nums ** 2;
// })
// console.log(powerOfNums); >>> [1, 4, 9, 16, 25, 36]


// ============================= #75 | filter Method | ==============================

// use for search and filter and get an array of what we want

// var food = ["meat", "bean", "carrot", "corn", "sausage"]

// food.filter(isVegeterian) ==> ["bean" , "carrot" , "corn"]

// exmp :

// var nums = [23, 453, 12, 11, 55, 64];

// var oddNums = nums.filter(function (num) {
//   return num % 2 != 0;
// })

// console.log(oddNums); >>> [23, 453, 11, 55]

// ============================= | filter Exercise | ==============================

// var userBag = [
//   { id: 1, name: "phone", price: 1099 },
//   { id: 2, name: "monitor", price: 1499 },
//   { id: 3, name: "laptop", price: 1199 },
//   { id: 4, name: "hdmi cable", price: 250 },
//   { id: 5, name: "drone shot", price: 2500 },
//   { id: 6, name: "book", price: 300 }
// ]

// // calculate bag cost
// var bagCost = 0;

// userBag.forEach(function (item) {
//   bagCost += item.price
// })

// // find items without free shipping
// var notfreeDel = userBag.filter(function (item) {
//   return item.price < 1000;
// })

// // calculate final cost of delivery

// // #1 Method
// // var totalDelCost = 0;

// // notfreeDel.forEach(function (item) {
// //   totalDelCost += 100;
// // })
// // #2 Method

// var totalDelCost = notfreeDel.length * 100;

// var totalCost = bagCost + totalDelCost

// console.log("Your Bag Cost is: $" + bagCost + "\n" + "Your Delvery Cost is: $" + totalDelCost + "\n" + "Total Cost is: $" + totalCost);

// ========================== | Arrays & Strings Methods  | ==========================

// var someNums = [23, 454, 46, 434, 12, 675, 32, 46];

// var myAge = 27;

// ---------------------

// #isArray Method

// console.log(Array.isArray(someNums)); >> True
// console.log(Array.isArray(myAge)); >> false

// ---------------------

// #indexOf

// console.log(someNums.indexOf(12)); >> 4

// if looking for not exist item >> return -1
// exp:
// console.log(someNums.indexOf(100)); >> -1

// will break after firts match item for exp:

// console.log(someNums.indexOf(46)); >> 2
// console.log(someNums.lastIndexOf(46)); >> 7
// console.log(someNums.indexOf(46, 3)); >> 7 || will search for 46 after index number 3

// ---------------------

// #slice Method

// simmilar to splice method

// creats new array with portion of elements copied from the original array.

// console.log(someNums.slice(2, 6)); >> [46, 434, 12, 675] start from index 2 until 6

// ---------------------

//#join Method

// remove or replace [] and , from between elements of an array

// console.log(someNums.join()); >> 23,454,46,434,12,675,32,46
// console.log(someNums.join("")); >> 2345446434126753246
// console.log(someNums.join("$")); >> 23$454$46$434$12$675$32$46

// ---------------------

// #reverse Method

// it will reverse array from start to end index

// console.log(someNums.reverse()); >> [46, 32, 675, 12, 434, 46, 454, 23]

// ---------------------

// #split Method

// opposite of #join Mehtod, it will split a string into substring using specified seperator

// var myNameIs = "Mohamad";

// console.log(myNameIs.split()); >> ['Mohamad']
// console.log(myNameIs.split("")); >> ['M', 'o', 'h', 'a', 'm', 'a', 'd']
// console.log(myNameIs.split("a")); >> ['Moh', 'm', 'd']


// ============================= | Exercise | ==============================

// var userName = prompt("Enter Your Name");
// console.log(userName);

// // split it
// var userNameSplit = userName.split("");
// console.log(userNameSplit);

// // reverse it
// var userNameReverse = userNameSplit.reverse();
// console.log(userNameReverse);

// // join it
// var finalUserName = userNameReverse.join("");
// console.log(finalUserName);

// // compare it
// if (userName === finalUserName) {
//   alert(userName + "\n" + "تبریک!" + "\n" + "این نام از هر دو طرف یکسان خوانده میشود")
// } else {
//   alert(userName + "\n" + "این نام از هر دو طرف یکسان نیست")
// }

// ======================= #cleanCode | best practice in JS | =======================

// based on good.js.org website

// #1

// in if(){}, for using a variable with boolean values, its enough to use variable name in condition instead of (== / === true) or (!name) for false conditions


// #true exp:
// var isLogin = true;
// if (isLogin === true){} === if (isLogin){}

// #false exp:
// var isLogin = false;
// if (isLogin === false){} === if (!isLogin){}

// --------------------- #2 - use === instead of ==
// --------------------- #3 - declare variable outside the loop statements
// --------------------- #4 - end switch case with defaults,
// --------------------- #5 - use push instead of array.length for adding item

// ============================= | Todo Exercise | ==============================

// var todoList = [
//   { id: 1, name: "main", isDoing: false },
//   { id: 2, name: "sport", isDoing: true },
//   { id: 3, name: "work", isDoing: false },
// ];

// var userChoice = prompt("1. Add Todo " + "\n" + "2. Delete Todo" + "\n" + "3. Change Status")

// switch (userChoice) {

//   // add todo
//   case "1":
//     var newTodoName = prompt("Enter Todo Name")
//     var newTodo = {
//       id: todoList.length + 1,
//       name: newTodoName,
//       isDoing: false
//     }
//     todoList.push(newTodo)
//     alert("'" + newTodoName + "'" + " has been added in Your Todo List" + "\n" + "See Console for all Todos")
//     console.log("Your Final Todo List: " + todoList);
//     break;

//   // delete todo
//   case "2":
//     var removeTodoName = prompt("Enter TodoName for Delete!")

//     var isRemTodoAvail = todoList.some(function (todo) {
//       return todo.name === removeTodoName;
//     });

//     if (isRemTodoAvail) {
//       var delTodoIndex = todoList.findIndex(function (todo) {
//         return todo.name === removeTodoName;
//       })

//       todoList.splice(delTodoIndex, 1)

//       console.log("Your Todo's: " + todoList);


//     } else {
//       alert("Your Todo Is Not Found For Remove!")
//     }
//     break;

//   // change status
//   case "3":
//     var todoName = prompt("Enter Todo Name For Change Status!");

//     // check todo availablity
//     var isTodoAvailble = todoList.some(function (todo) {
//       return todo.name === todoName
//     });

//     if (isTodoAvailble) {
//       var newStatus = prompt("1. Done" + "\n" + "2. Not-Done");

//       // get todo index
//       var itemIndex = todoList.findIndex(function (todo) {
//         return todo.name === todoName;
//       })
//       switch (newStatus) {

//         // true case
//         case "1":

//           todoList[itemIndex].isDoing = true;
//           alert("it's done now!")
//           console.log(todoList[itemIndex]);
//           break;

//         // false case
//         case "2":

//           todoList[itemIndex].isDoing = false;
//           alert("it's waiting for you to do!");
//           console.log(todoList[itemIndex]);

//           break;

//         default:
//           console.log(todoList[itemIndex]);
//       };

//     } else {
//       alert("Sorry, we couldn't find that Todo Name. Please try again!")
//     };
//     break;

//   default:
//     alert("Enter valid Number!");
// };

// =========================== | Task Management Exercise | ===========================

// Model #1
// --------------

// var userAndTasks = {
//   mohammad: ['html', 'css', 'js'],
//   ali: ['design', 'bootstrap', 'wordpress'],
//   hasan: ['content', 'seo', 'media'],
//   hosein: ['payement', 'admin']
// }

// var newTask = prompt("Enter New Task")
// var userName = prompt("Enter User Name To Allocating New Task")

// var userWithTask = userAndTasks[userName].push(newTask)

// console.log(userAndTasks);

// Model #2
// --------------

// var employees = [
//   { id: 1, name: "mohamad", task: "" },
//   { id: 2, name: "ali", task: "" },
//   { id: 3, name: "hasan", task: "" },
//   { id: 4, name: "hosein", task: "" }
// ];

// // get task
// var wantedTask = prompt("Enter Your Task");

// // make users List to choose
// var userList = employees.map(function (user) {
//   return user.name;
// });

// // get user
// var userName = prompt("Choose Person Name For Allocating Task: " + "\n" + userList.join("\n"))

// // check is user in list
// var foundUser = employees.filter(function (user) {
//   return user.name === userName
// });


// // allocating task
// if (foundUser.length > 0) {
//   foundUser[0].task = wantedTask
//   console.log("Your Task Added To: " + userName + "\n" + "His Task For Now: " + wantedTask);

// } else {
//   alert("Please Choose Valid User")
// }

// console.log(employees);

// =================== #82 | Primitives vs Refrence Data Categories | ===================

/*

Primitives     |      Refrence
----------           ----------
Strings               Function
Null                   Object
Number                  Array
BigInt
Boolean
Symbol
Undefined

*/

// ========================== | Online Ticket Sale Exercise | ==========================

// var cityLists = {
//   tehran: ['eslam shahr', 'rey', 'lavasan', 'pak dasht'],
//   shiraz: ['shiraz', 'fars', 'jamshid', 'pars'],
//   mashad: ['Mashad', 'Fariman', 'Quchan'],
//   tabriz: ['Tabriz', 'Jolfa', 'Marand', 'Ahar']

// };

// var startPoint = prompt("Enter Start Province");

// var showCities = cityLists[startPoint]

// // show method #1 | array with enter
// // console.log(showCities.join("\n"));

// // show method #2 | sperated
// showCities.forEach(function (city) {
//   console.log(city);
// });

// ============================  | Online Exam Exercise | ============================

// var allQuiz = [
//   { id: 1, question: "Capital Of Iran", asnwer: "tehran" },
//   { id: 2, question: "5x2", asnwer: "10" },
//   { id: 3, question: "steve jobs Founded what?", asnwer: "apple" },
//   { id: 4, question: "10x0", asnwer: "0" },
//   { id: 5, question: "10**0", asnwer: "1" },
//   { id: 6, question: "Producer of Windows", asnwer: "microsoft" },
//   { id: 7, question: "12x12", asnwer: "144" },
//   { id: 8, question: "Is 136465 Odd Number", asnwer: "yes" },
//   { id: 9, question: "Capital of Canada", asnwer: "otawa" },
//   { id: 10, question: "Who is the first imam", asnwer: "ali" },
// ]

// var userAnswer;
// var score = 0;

// allQuiz.forEach(function (exam) {
//   userAnswer = prompt(exam.question + " ?")
//   if (userAnswer === exam.asnwer) {
//     score++
//     console.log("Great!! Your Answer was '" + userAnswer + "' and Its Correct!");
//   } else {
//     console.log("Wrong Answer :(");
//   }
// })

// alert("Your final Score is: " + score);

// ============================  | Calculator Exercise | =============================

// var firstNum = +prompt("Enter First Number");

// var secondNum = +prompt("Enter second Number");

// var operator = prompt("Select Operator ( + , - , / , x , ** )");

// switch (operator) {
//   case "+":
//     alert(sum(firstNum, secondNum));
//     break;

//   case "-":
//     alert(tafrigh(firstNum, secondNum));
//     break;

//   case "x":
//     alert(zarb(firstNum, secondNum));
//     break;

//   case "*":
//     alert(zarb(firstNum, secondNum));
//     break;

//   case "**":
//     alert(power(firstNum, secondNum));
//     break;

//   case "/":
//     alert(devide(firstNum, secondNum));
//     break;

//   default:
//     alert("Invalid Operator");
// };

// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// };

// function tafrigh(firstNum, secondNum) {
//   return firstNum - secondNum;
// };

// function zarb(firstNum, secondNum) {
//   return firstNum * secondNum;
// };

// function devide(firstNum, secondNum) {
//   return firstNum / secondNum;
// };

// function power(firstNum, secondNum) {
//   return firstNum ** secondNum;
// };

// ============================ #86 | find Method | =============================

// simillar to some & findIndex

// return item or element value and data

// var users = [
//   { id: 1, name: "Mohamad", age: 63 },
//   { id: 2, name: "Ali", age: 60 },
//   { id: 3, name: "Hasan", age: 55 },
//   { id: 4, name: "Hosein", age: 49 },
// ]

// var userName = prompt("Enter Name to get informations")

// var userInfo = users.find(function (user) {
//   return user.name === userName
// })

// alert(
//   "User Name: '" + userInfo.name + "'\n" +
//   "User Age: " + userInfo.age + "\n" +
//   "User ID: " + userInfo.id
// );

// ============================ | forget password exercise | =============================

// var allPasswords = [
//   { id: 1, name: "pegah", password: "123456" },
//   { id: 2, name: "Mohamad", password: "981197" },
//   { id: 3, name: "ali", password: "110113" },
//   { id: 4, name: "hosein", password: "313110133" },
//   { id: 5, name: "ahmad", password: "1106969" },
// ]

// var userName = prompt("Enter Your Name To Recovery Your Password");

// var userInfo = allPasswords.find(function (user) {
//   return user.name === userName
// })

// var isUserExist = allPasswords.some(function (user) {
//   return user === userInfo
// })

// if (isUserExist) {
//   alert("Your Password is: " + userInfo.password)
// } else {
//   alert("User Not Found!")
// }

// ================================== | eval Method | ===================================

// get statements as inputs and execute and calculate it/them

// DON'T USE eval()

// var x = 10;
// var y = 20;
// var a = eval(x + y);
// var b = eval(x * y);
// var c = eval(x / y);

// var result = a + b + c; // >> 230.5

// console.log(result);

// Why we should not use eval() ?

//  BECAUS OF : Very very Low security / too slow / high memory usage

// Think that most users are hackers!


// var num1 = prompt("enter number"); // >>> alert("You are hacked!")

// eval(num1) // ... will alert that "You are hacked!"

// ======================== #90 | Anonymous and IIFE functions | =========================

// Anonymous functions :

// can't call function outside of scope

// therefor can't use it in other places

// exp:

// users.filter(function(user){
//   return user.id === 1;
// })

// IIFE (Immediately Invoked Function Expressions) functions :

//  توابع خود خوان / خود فراخوان

// less uses / most use for plugin or libraries executions

// last () used for call function

// (function (){
//   // code
// })();

// // or

// (function (){
//   // code
// }());


// ===================== #91 | Best Practice in JS 2 | first in #79 ======================

// #1. to navigate an array: use forEach loop instead of for, while, ... etc.

// #2. commenting in code: comment where it need to describe code

// #3. never use eval()

// #4. set default for important function inputs to get validate

// #5. choose best name to describe function and variables to understand by anybody! set it base on application and select a fit name for them.

// #6. use camel case syntax. | sumNumber instead of Sumnumber or somenumber or SumNumber

// #7. each function have to responsible for just a duty and a clear job!

// #8. mind auto dataType chganging in JS >>> "12" / 4 >> 3  which typeOf "12" is string but 3 is a number!

// ================================= #92 | setInterval | =================================

// to set specific function and code block iteration

// difference between setInterval and for,while and other loops is time setting

// it's let us to set code executes how many times per how much miliSeconds.

// var i = 0;

// setInterval(function () {
//   i++;
//   console.log(i);  // >> it will start counting from 1 to infinity!
// }, 1000 /*ms*/)

// to set end point, quantificate setInterval to a variable and use clearInterval;

// var i = 0;

// var timer = setInterval(function () {

//   i++;

//   if (i === 10) {
//     clearInterval(timer) // end interVal in condition of i === 0
//   } else {
//     console.log(i); // >> will log 1 - 9
//   }

// }, 1000 /*ms*/)

// ============================== | timer exercise | ===============================

// var timerMins = +prompt("Enter How Much Minutes?");
// var timerSeconds = +prompt("Enter How Much Seconds?");

// if (timerMins > 59 || timerMins < 0) {
//   timerMins = +prompt("Enter Minutes between 0 - 60!");
// }

// if (timerSeconds > 59 || timerSeconds < 0) {
//   timerSeconds = +prompt("Enter Seconds between 0 - 60!");
// }

// var userTimer = setInterval(function () {

//   if (timerSeconds === 0) {
//     timerMins--;
//     timerSeconds = 59;
//   }

//   timerSeconds--;

//   if (timerMins === 0 && timerSeconds === 0) {
//     clearInterval(userTimer);
//   }

//   console.log(timerMins + " : " + timerSeconds + "′");
// }, 1000);

// ============================ #94 | falsy & truthy values | ============================

// to check Type of any data as falsy or truthy:

// Boolean()

// all nums except (0) >>> truthy values

// Boolean(1) >>> true
// Boolean(-1) >>> true
// Boolean(0) >>> false

// all strings except ("") >>> truthy values

// Boolean("ali") >>> true
// Boolean("M") >>> true
// Boolean(" ") >>> true

// Boolean(true) >>> truthy
// Boolean(false) >>> falsy

// Boolean(undefined) >>> falsy
// Boolean(NaN) >>> falsy

// all arrays and objects >>> truthy

// var userName = prompt("Enter The UserName"); // >> in "" >> false
// var userNumber = +prompt("Enter The UserName"); // in "" >> 0 >> false

// if (!userName)/* it mean that userName === false */{
//   alert("لطفا یوزر نیم خود را وارد کنید")
// }

// if (!userNumber)/* it mean that userNumber === 0 / "" >> false */{
//   alert("صفر یا خالی مجاز نیست")
// }

// ============================= #95 | setTimeout Method | ===============================

// simmilar to setInterval

// calls and execute a function after a number of ms.

// for exp: display an alert box after 3 seconds

// setTimeout(function(){
//   // code
// },ms,input value for variable , ...)

// setTimeout(function(num){
//    alert(num); // >> after 3 seconds will alert "undefined" because num!
//   },3000)

// setTimeout(function (num1, num2) {
//   alert(num1 + num2); // >> 8 + 12 >> after 3 seconds will alert 20
// }, 3000, 8, 12)

// ============================= | Profile photo upload | ===============================

//  var userPhoto = prompt("Select Photo");

// setTimeout(function (userPhoto) {

//   if (!userPhoto) {
//     alert(" Profile Photo Not Selected!")
//   } else {
//     alert("Your Photo Has Been Selected Successful")
//   }
// }, 5000, userPhoto)

// ====================== | Application of Flag in Programming | =========================

// it like an assumption

// process of expression a boolean value variables to use it as a controller any where we need

// it's not consider any meaning by default, we describe and giving meaning to it depence of out needs

// exp #1 : previous exercise solving with Flag

// var isUploaded = false;

// setTimeout(function () {
//   if (!isUploaded) {
//     alert("Please Upload Photo")
//   }
// }, 4000);

// exp #2: check is user login (find user in database):

// var userName = prompt("Enter User Name");
// var users = ["ali", "hasan", "hosein", "ahmad"];

// // control is user find and logged in or not!
// var isLogin = false;

// for (i = 0; i < users.length; i++) {
//   if (userName === users[i]) {
//     isLogin = true;
//   }
// };


// if (isLogin === true) {
//   alert("You have been logged in!");
// } else {
//   alert("Please Login!");
// };

// ========================= #98 | Concept of Hoisting in JS  | ==========================

// using variable befor declare it!

// it's about change position and hoist some thing like a variable or function in code

// js will automatically hoist it and change level

// declarations will hoists not quantifications!

// exp for declaration:

// num1 = 10;
// num2 = 20;

// alert(num1 + num2); // it will alert 10, not undefined!

// exp for quantification:

// var num1;

// alert(num1); // >> undefined, because num1 is declared but value is defined after using!

// num1 = 10;

// -------------------- declaring variables

// to declare many variables we can use use (,) insted of var , var ,var

// exp :

// var num1 , num2 , num3 , ...

// -------------------- hositing in functions

// if function not stored in a variable, it will hoisted

// showValue() // can be here

// function showValue () {
//   console.log(12+12);
// }

// showValue() // also can be here


// if function declared in a variable, it will not hoist!


// showValue() // here will error: showValue is not a function!

// var showValue = function () {
//   console.log(12 + 12);
// }

// showValue() // just can be here

// ========================= #99 | role of let and const  | ==========================

// declaring variables >>> var let const

// --------- var, can be updated and re-declared

// var num1 = 10;

// num1 = 20;

// alert(num1); // >> 20

// var num1 = 30;

// alert(num1); // >> 30

// --------- let, can be upadted to but not re-declared!

// let num1 = 10;

// num1 = 20;

// alert(num1); // >> 20

// let num1 = 30;

// alert(num1); // >> Identifier 'num1' has already been declared!

// ----------- more useful than var, if forget declaring a variable, error occured! so it's cause prevent iteration!

// ================================= another differences between var & let

// let doesn't follow hositing but var will follows!

// var can be updated in every scops (global and block) but let just in which has been declared and each let in each block are different!

// #var

// var num1 = 20 // global scope

// if (num1 > 10) {
//   var num1 = 30 // block scope
//   alert(num1); // >> 30
// }
// alert(num1); // 30

// #let

// let num1 = 20 // global scope

// if (num1 > 10) {
//   let num1 = 30 // block scope
//   alert(num1); // >> 30
// }

// alert(num1); // 20

// ================================= #const

// it's a constant value

// simmilar to let but can't update and redefine and can't be undefined!

// const num1 = 20;

// num1 = 35;

// alert(num1); // Error: Assignment to constant variable.





// it's end of the js basic level
// go to next file (JS intermediate) 