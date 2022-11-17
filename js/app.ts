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

//Interfaces
interface heroInterface {
  character: string;
  powers: string[];
}

const Hulk: heroInterface = {
  character: "Bruce Banner",
  powers: ["Incredible super human strenght", "durability", "Healing factor"],
};

//Alias de tipo
type seriesType = {
  title: string;
  mainCharacter: string;
  seasons: number;
};
const series1: seriesType = {
  title: "Mr Robot",
  mainCharacter: "Elliot Alderson",
  seasons: 4,
};
const series2: seriesType = {
  title: "Peaky Blinders",
  mainCharacter: "Tommy Shelby",
  seasons: 6,
};

//Interfaces como tipos
interface Login<U, P> {
  user: U;
  password: P;
}
let user1: Login<string, string> = {
  user: "John",
  password: "abcd",
};
let user2: Login<string, number> = {
  user: "John",
  password: 1234,
};

//Tipos enumerados
enum Sizes {
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
}
let pulloverSize = Sizes.MEDIUM;

//Tipado dinamico
let password: any = "abcd";
password = 1234;
password = [];

let password2: unknown = true;
password2 = 1234;
//let password3 = password2 + 123
let password3 = password2 + "true";
console.log(typeof password3);
console.log(password3);

//Uniones, intercepciones, tipos literales
interface Bear {
  weight: number;
  color: string;
}
interface Tiger {
  weight: number;
  speed: number;
}
interface Lion {
  strenght: string;
  speed: number;
}

let word: number | string;
word = 1234;
word = "abcd";

let animal: Bear = {
  weight: 200,
  color: "white",
};

let animal2: Bear | Tiger;
animal2 = {
  weight: 250,
  speed: 50,
};

animal2 = {
  weight: 150,
  speed: 50,
  color: "pink",
};

let animal3: Bear | (Tiger & Lion);

animal3 = {
  weight: 300,
  color: "brown",
  speed: 150,
};

hello = undefined;
console.log(typeof hello);
hello = null;
console.log(hello);

const sayHello2 = (greet: string = "Luis"): void => {
  console.log("Hello " + greet);
};

sayHello2();
sayHello2("Dani");

const retornoInalcanzable = (): never => {
  throw TypeError("Something went wrong");
};

const retornoInalcanzable2 = (number:number): never => {
  while(true){
    console.log(number++);
    
  }
};