let number = parseInt(prompt("¿Cuántos números quieres introducir?"));
let mayor = Number.NEGATIVE_INFINITY; /*tambien se puede utilizar Number.MIN_VALUE en el mayor*/
let menor = Number.POSITIVE_INFINITY; /*tambien se puede utilizar Number.MAX_VALUE en el menor*/
let suma = 0;

for (i = 0; i < number; i++){
    const num = parseInt(prompt(`introduce el número ${i + 1}:`));
    mayor = Math.max(mayor, num);
    menor = Math.min(menor, num);  
    suma += num;
}

let mediaArit = suma/number;

console.log('El número mayor introducido es: '+ mayor);
console.log('El número menor introducido es ' + menor);
console.log('La media aritmética de los números introducido es: '+ mediaArit);

