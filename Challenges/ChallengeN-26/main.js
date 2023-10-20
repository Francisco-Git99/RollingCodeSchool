//La app pide números hasta que pida cancelar.
//Cuando se cancela se deben mostrar todos los números ingresados juntos.
//y si se ingresa algo que no sea válido se debe mostrar un alert y seguir
//pidiendo un número.
//concatenen los numeros con un “-” y los espacios sean inválidos.

let numbers = [];

while (true) { 
  let input = prompt("Ingrese un número:");
  if (input === null) { 
    break; 
  } else if (isNaN(input) || input === " "){
    alert("Por favor, ingrese solamente números.");
  } else {
    numbers.push(parseInt(input));
  }
}

alert(`Los números ingresados son: ${numbers.join("-")}`);


