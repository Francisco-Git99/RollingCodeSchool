// -------- PuntoN°1 --------

let number1 = parseInt(prompt("Ingrese un número:"));
let number2 = parseInt(prompt("Ingrese un segundo número:"));

document.write("La resta de los numeros ingresados es: ", number1-number2);
document.write("<br>");
document.write("La multiplicacion de los numeros ingresados es: ", number1*number2);

// -------- PuntoN°2 --------

let nameAndLastName = prompt("Ingrese un nombre y apellido");

let buscarA = nameAndLastName.includes("a");
let buscarM = nameAndLastName.includes("m");

buscarA || buscarM ? console.log("el nombre y apellido ingresados contiene la letra a o m") 
                   : console.log("el nombre y apellido ingresados no contiene la letra a o m");

// -------- PuntoN°3 --------
let text = ('Pablito-clavo-un-clavito');
console.log(text);
let replaceText = text.replaceAll("-", " ");
console.log(replaceText);
