const square = (number) => {
    return number * number;
};
console.log(square(2));
// Anotacion de tipos primitivos
let user = "John";
let num = 11;
let isActive = true;
//Tipicacion inferida
let hello = "World";
//Anotacion de tipos de array
const heroes = ["Thor", "Hulk", "Iron Man", "Doctor Stange"];
const numbers = [1, 2, 3];
//Anotacion de tipos de funcion
let sayHello;
sayHello = greet => `Hello ${greet}`;
