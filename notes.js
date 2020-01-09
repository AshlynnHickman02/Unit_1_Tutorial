console.log("Hello World! Using console.log makes this text show up in the console log in the inspect element.");
console.log("3+4");
console.log(4+"ex");

window.alert("Welcome to Tulsa");
 
Window.Alert("you a poopie");

document.getElementById("dateNow");
//class  method          attribute 
//object1                parameters

document.getSelection.name("Jeff");
//class               method
//object1                   parameters
 

//creating variables
         var //variable

         var x=7; //numeric value/variable

         var str = "string"; //string variable

         var peterParker = new Student('very', "slightly", .894); //object variable
         
         var garfield = new Cat("lazy", "fat", "hates Mondays");

         var r = 3; 
         var circumference = 2*Math.PI*r; //2 times Pi times radius 
         console.log(circumference); //go to inspect to find this answer 
//

6 + 5 = x; //variable first
x = 6 + 5; 

var x = 7; 
x += 3; //x = x + 3 == x = 7 + 3 ==             x = 10
const GRAVITY_EARTH = 9.8; //constants are CAPITALIZED and THEY_ARE_UNDERSCORED
const GRAVITY_MOON = 3.2;

//return function 
var squareArea = calcArea(6, 6); 
function calcArea(length, width){
   var area = length*width;
   return area; 
}
console.log(squareArea);


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

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
if (number > Number.MAX_SAFE_INTEGER){
   number = 0;
}


//return function

var randy = Math.random()*10;
console.log(Math.ceil(randy)); //random number rounded up between 1 and 10



function calcArea(){
   var height = Math.ceil(Math.random()*10);
   var length = Math.ceil(Math.random()*10);
   var testHeight = height; 
   var testLength = length;
   var area = length*height;
   console.log ("The height is " + height + " and the length is " + length + ", therefore the area of the rectangle is " + area);
}
setInterval('calcArea()', 1000);