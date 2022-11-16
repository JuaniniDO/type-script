const square = (number: number) => {
  return number * number;
};
console.log(square(2));

// Anotacion de tipos primitivos
let user: string = "John";
let num: number = 11;
let isActive: boolean = true;
//Tipicacion inferida
let hello = "World";
//Anotacion de tipos de array
const heroes: string[] = ["Thor", "Hulk", "Iron Man", "Doctor Stange"];
const numbers: number[] = [1, 2, 3];

//Anotacion de tipos de funcion
let sayHello: (greet: string) => string;
sayHello = (greet) => `Hello ${greet}`;

//Anotacion de tipo objeto
let hero: {
  character: string;
  powers: string[];
};

hero = {
  character: "Thor",
  powers: [
    "Uru-forged hammer Mjolnir",
    "superhuman strength",
    " speed",
    "endurance and resistance to injury",
  ],
};
