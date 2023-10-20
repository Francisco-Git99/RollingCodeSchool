window.addEventListener('load', () => { /* con esta linea estamos diciendo que el js se va a ejecutar cuando se carge todo el html primero */
    // creamos dos constantes y guardamos los elementos que necesitamos
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button'); // HTMLCollection 
    
    // creamos otra constante para convertir el HTMLCollection a Array para poder iterarlo
    const keypadButtonsArray = Array.from(keypadButtons); 

    // iteramos por nuestro array de botones 
    keypadButtonsArray.forEach( (button) => {
        // a cada boton le agregamos un listener que escucha cuando el usuario hace click
        button.addEventListener('click', () => {
            calculadora(button, display);
        });
    });
});

function calculadora(button, display){
    switch(button.innerHTML){
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
        
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML) // toma el string del display, lo resuelve y lo guarda en el innetHTML del display
}

function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    if(display.innerHTML != 0) {
        display.innerHTML = 0;
    }
}
