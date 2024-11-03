// today time
nowRoozCounter = () => {
  var today = new Date().getTime();

  // nowrooz time , can change every years 
  var nowrooz = new Date(2025, 2, 20, 12, 31, 30).getTime();

  // time difference
  var difference = nowrooz - today;

  // calculating each seconds minutes hours and days 
  var days = Math.trunc(difference / (3600000 * 24));
  var hours = Math.floor((difference % (3600000 * 24)) / 3600000);
  var minutes = Math.floor((difference % 3600000) / 60000);
  var seconds = Math.trunc((difference % 60000) / 1000);

  // finall 
  document.getElementById("count-down").innerHTML = `${days} روز و ${hours} ساعت و ${minutes} دقیقه و ${seconds} ثانیه مانده است`;

  // prevent over timing and discard counting after due date
  if (difference < 0) {
    document.getElementById("count-down").innerHTML = `سال نو مبارک`;
  }
}
// for repeat & update per each seconds 
setInterval(function () {
  nowRoozCounter();
}, 1000)


// this count-down was made by {Mr.Alpha}
// follow for more on github : @mohamadeRahbar
