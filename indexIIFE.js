// Usando funciones de ejemplo
let string = library.helloWorld();
console.log(string);

let string2 = library.helloWorld("DE LUJO");
console.log(string2);


let arrayExample = [1, 2, 3];
console.log("Tengo este array: " + arrayExample.toString() + ". Le añado un número aleatorio y luego se lo quito.")

library.addToArray(arrayExample, library.getRandomFrom0To10());
console.log(arrayExample.toString())

library.removeLastFromArray(arrayExample);
console.log(arrayExample.toString())