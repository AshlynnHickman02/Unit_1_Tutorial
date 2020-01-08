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

//return function

var dist = distance(1, 1, 4, 5);
function distance(x1, y1, x2, y2){
   var dist = Math.SQRT1_2(Math.POW((x2-x1), 2) + Math.POW((y2-y1), 2));
   return dist;
}
console.log(distance);

var circleArea = circleArea(5);
function circleArea(radius){
   //not multiplying by PI
   var area = Math.pow(radius, 2) + "pi";
   return area //+"pi"
   ;
}
//if you dont want to use var circleArea
// console.log(circleArea(7));
console.log(circleArea);

var squareArea = calcArea(6, 6); 
function calcArea(length, width){
   var area = length*width;
   return area; 
}
console.log(squareArea);
