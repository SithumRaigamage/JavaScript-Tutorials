//running an example
/*
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello JavaScript";
}
//display in varoius ways

//document.getElementById("text").innerHTML =5+6;
//document.write(5+6);
//window.alert(5+6);
//alert(11);
//console.log(11)

// java script statements
/*
let x,y,z ;
x=5;
y=6;
z=x+y;

document.getElementById("textone").innerHTML = "Heloo Dolly";

let person = "Hege";
//prints out error if we make the same name
//let person ="Hege";

function functionOne(){
    document.getElementById("textone").innerHTML = "Hello Dolly";
    document.getElementById("texttwo").innerHTML = "How are You ?";
}
//javaScript keywords
/*
var defines the variable
let defines the bloc
const defines the constant
if for condition
switch multiple if statements
for loop for iterating
function to make a method
return exits a function
try for file handling



//javaScript syntax

//var b;
//let a;

a=7;
b=8;
//let c=a+b;

//js literals 

10.50
1001

"Hello John Doe"

let sum =(5+6*10);

"John" + " " + "Doe"

//creating variables with var
var d=6;
var e=4;

let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";

// js comments

//single line comments ==//

//multiline comments in js

/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";


//js variables

// we can use var, let, and const to create variables

// Using simple assignment
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("demo1").innerHTML = "The value of z is: " + z;

// Using var
var a = 5;
var b = 6;
var c = a + b;
document.getElementById("demo2").innerHTML = "The value of c is: " + c;

// Using const
const p = 5;
const q = 6;
const r = p + q;
document.getElementById("demo3").innerHTML = "The value of r is: " + r;

// Using let
let m = 5;
let n = 6;
let o = m + n;
document.getElementById("demo4").innerHTML = "The value of o is: " + o;

//mixed example 

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo1").innerHTML = "The value of total is: " + total;


//variables global and local

 //let - local scope and var is global scope


 //const - assigning a variable that cnnot be changed
 const PI = 3.14159265359;

 // operators

/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
==    Equal to


let text1 = "A";
let text2 = "B";
let result = text1 < text2;

let text3 = "John";
let text4 = "Doe";
let text5 = text1 + " " + text2;

//functions

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello Dolly";
}

//calling a function
myFunction();

function myFunctionOne(p1,p2) {
    let sum = p1+p2;
    return sum;
    
}

var sumOne = myFunctionOne(4,3);
console.log(x);

function toCelsuis(farenheit){
    return (5/9) * (farenheit - 32);
}
let value1 = toCelsuis();

let value = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

//objects

let personTwo = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
personTwo.fullName;
personTwo.age;

//objects can be let ,var and const they are in a list {} with variables and attributes

//js events

/*

onchange -	An HTML element has been changed
onclick -	The user clicks an HTML element
onmouseover -	The user moves the mouse over an HTML element
onmouseout -	The user moves the mouse away from an HTML element
onkeydown -	The user pushes a keyboard key
onload -	The browser has finished loading the page



//js strings

let text9 = "Hello Dolly";
let result2 = text.length;

let textr = "Hello Dolly";
let result8 = text.toUpperCase();
*/

/*
//array
// Create an Array:
var cars =["BMW","Toyota","Honda"]

// Change an element:
cars[0] = "Audi";

// Add an element:
cars.push("BMW");

cars.pop("BMW")

// Display the Array:
document.getElementById("array").innerHTML = cars; 
*/
/*
// You can create a const object:
const car ={Model:"Honda",color:"yellow",owner:"Sithum"}

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

document.getElementById("array").innerHTML = car.owner; 

//comparison operators

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("demo").innerHTML = "Is A less than B? " + result;


let variable ="String";
let variables;
document.getElementById("demo").innerHTML = 'This is "Sithum"';

if(condition){
    var condition=true;
    console.log(condition)
}
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  if(hour>18){
    greeting="good night"
  }
  else{
    greeting=" good morning"
  }

*/
  //switch case

  switch(condition){
    case  "apple":
        break;
    case "grapes":
        break;
    default:
    
  }
let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    
}
document.getElementById("day").innerHTML = "Today is " + day;

//for loop
for (i=0;i<9;i++){
    console.log("I am running for the "+(i+1)+" time");
}

//while loop
while(i<9){
    console.log("Value of i is "+i);
    i++;
}

//for exception handling use try and catch
try {
    //Block of code to try
}
catch(err) {
    //Block of code to handle errors
}
finally {
    //Block of code to be executed regardless of the try / catch result
}

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x.trim() == "") throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10) throw "is too high";
      if(x < 5) throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Error: " + err + ".";
    }
    finally {
      document.getElementById("demo").value = "";
    }
}