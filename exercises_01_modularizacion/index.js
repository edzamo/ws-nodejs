//La desestructuración es una característica de ES6 que permite extraer valores de arreglos o propiedades de objetos y asignarlos a variables de manera más concisa y legible.
// JavaScript Destructuring (desestructuración en JavaScript).
//const operations = require("./operations");
const {
  multiplication,
  addition,
  anotherNameDivision,
} = require("./operations"); //destructuring

const Person = require("./person");

const sum = addition(3, 8);
const multi = multiplication(5, 8);
const division = anotherNameDivision(10, 2);

console.log(sum, multi, division);

const person = new Person("Edwin", "Zamora", "42");
console.log('Date Person:', person)
