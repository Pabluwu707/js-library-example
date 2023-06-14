import { helloWorld, addToArray, removeLastFromArray, getRandomFrom0To10 } from "./examplesLibrary.js";
import IdentityManager from "./identityManager.es.js";


// Usando funciones de ejemplo library.js
let string = helloWorld();
console.log(string);

let string2 = helloWorld("DE LUJO!!!");
console.log(string2);


let arrayExample = [1, 2, 3];
console.log("Tengo este array: " + arrayExample.toString() + ". Le añado un número aleatorio y luego se lo quito.")

addToArray(arrayExample, getRandomFrom0To10());
console.log(arrayExample.toString())

removeLastFromArray(arrayExample);
console.log(arrayExample.toString())


// Usando funciones de identityManager.js
let persona = new IdentityManager("Pabluwu", "24", {lang: "ES"});
let edad = persona.getAge();
console.log("Edad para asegurarme: " + edad);
persona.setName("Pablo Vallejo");
console.log("Le cambié el nombre y ahora se llama " + persona.getName());

let persona2 = new IdentityManager("Pavro", "22");
let comparacion = persona.olderOrYounger(persona2.getAge());
console.log(comparacion);