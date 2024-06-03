// Create an Array:
const names = ["Sithum", "Udana", "Tisal","Pooh"];

// Change an element:
names[4] = "Toyota";

// Add an element:
names.push("Gayana");

// Display the Array:
document.getElementById("Names").innerHTML = names; 


// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
  
document.getElementById("object").innerHTML = person.name + "," + person.age + "," + person.city;

// Stringify Object
let myString = JSON.stringify(person);

// Display String
document.getElementById("objectTwo").innerHTML = myString;