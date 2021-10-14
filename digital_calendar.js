var date = new Date();
    let dayEl = document.querySelectorAll('li');
    let currentDay = date.getDay();
    for(let i=0; i<dayEl.length; i++) {
        dayEl[currentDay].className = 'say_day';
    }
    let currentDate = date.getDate();
    let currentYear = date.getFullYear();
    let arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dispInfo = document.querySelector('h2');
    dispInfo.textContent = `Today is day ${currentDate} in the month of ${arrMonth[date.getMonth()]}, year ${currentYear}.`;
    
    function insertSec() {
    let date = new Date(), currentHr = date.getHours(), currentMin = date.getMinutes(), currentSec = date.getSeconds();
    let dispHr = document.querySelector(".set_hr"),
    dispMin = document.querySelector(".set_min"),
    dispSec = document.querySelector(".set_sec"),
    header = document.querySelector("h1");
    dispHr.textContent = currentHr, dispMin.textContent = currentMin, dispSec.textContent = currentSec;
    if ((currentHr > 12) && (currentMin > 30)) {
      header.textContent = `The time says ${60 - currentMin} minutes to ${currentHr - 12 + 1}`;
    } else if ((currentHr <= 12) && (0 < currentMin < 30)) {
      header.textContent = `The time says ${currentMin} minutes past ${currentHr}`;
    } else if ((currentHr <= 12) && (currentMin >= 30)) {
      header.textContent = `The time says ${60 - currentMin} minutes to ${currentHr + 1}`;
    } else if ((currentHr > 12) && (0 < currentMin < 30)) {
      header.textContent = `The time says ${currentMin} minutes past ${currentHr - 12}`;
    } else if ((currentHr > 12) && (currentMin == 0)) {
      header.textContent = `The time says ${currentHr - 12}O'clock!`;
    } else {
      header.textContent = `The time says ${currentHr}O'clock!`;
    }
}
let result = setInterval(insertSec, 1000);