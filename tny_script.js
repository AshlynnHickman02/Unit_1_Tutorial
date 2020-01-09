"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/

//creating our own function and running it
runClock();
setInterval("runClock()", 100);

runClock();

function runClock(){
   // document.getElementById("dateNow").innerHTML="m/d/y<br/>h:m:s";

   //created a variable for today's date
   var currentYear = new Date();

   //changed today's date
   var dateStr = currentYear.toDateString(); //this date == 1/7/2020
   var timeStr = currentYear.toLocaleTimeString(); //thisTime ==4:46:39 PM

   document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

   var newYear = new Date("January 1, 2021");
   var nextYear = currentYear.getFullYear()+1;
   newYear.setFullYear(nextYear);

   var daysLeft = (newYear - currentYear)/(1000*60*60*24);
   var hoursLeft = (daysLeft - Math.floor(daysLeft))*24;
   var minutesLeft = (hoursLeft - Math.floor(hoursLeft))*60;
   var secondsLeft = (minutesLeft - Math.floor(minutesLeft))*60;

   //changed the Countdown Clock
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hoursLeft);
   document.getElementById("mins").textContent = Math.floor(minutesLeft);
   document.getElementById("secs").textContent = Math.ceil(secondsLeft);
}



