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
sayHello = (greet) => `Hello ${greet}`;
//Anotacion de tipo objeto
let hero;
hero = {
    character: "Thor",
    powers: [
        "Uru-forged hammer Mjolnir",
        "superhuman strength",
        " speed",
        "endurance and resistance to injury",
    ],
};
const Hulk = {
    character: "Bruce Banner",
    powers: ["Incredible super human strenght", "durability", "Healing factor"],
};
const series1 = {
    title: "Mr Robot",
    mainCharacter: "Elliot Alderson",
    seasons: 4,
};
const series2 = {
    title: "Peaky Blinders",
    mainCharacter: "Tommy Shelby",
    seasons: 6,
};
let user1 = {
    user: "John",
    password: "abcd",
};
let user2 = {
    user: "John",
    password: 1234,
};
//Tipos enumerados
var Sizes;
(function (Sizes) {
    Sizes[Sizes["SMALL"] = 0] = "SMALL";
    Sizes[Sizes["MEDIUM"] = 1] = "MEDIUM";
    Sizes[Sizes["LARGE"] = 2] = "LARGE";
    Sizes[Sizes["X_LARGE"] = 3] = "X_LARGE";
})(Sizes || (Sizes = {}));
let pulloverSize = Sizes.MEDIUM;
//Tipado dinamico
let password = "abcd";
password = 1234;
password = [];
let password2 = true;
password2 = 1234;
//let password3 = password2 + 123
let password3 = password2 + "true";
console.log(typeof password3);
console.log(password3);
let word;
word = 1234;
word = "abcd";
let animal = {
    weight: 200,
    color: "white",
};
let animal2;
animal2 = {
    weight: 250,
    speed: 50,
};
animal2 = {
    weight: 150,
    speed: 50,
    color: "pink",
};
let animal3;
animal3 = {
    weight: 300,
    color: "brown",
    speed: 150,
};
hello = undefined;
console.log(typeof hello);
hello = null;
console.log(hello);
const sayHello2 = (greet = "Luis") => {
    console.log("Hello " + greet);
};
sayHello2();
sayHello2("Dani");
