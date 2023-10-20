/* 
Realizar una web con un cronómetro, que tenga las opciones de iniciar,
 reset(volver el cronómetro a 0) y pausar.
*/ 

let contador = 0;
let actualizable;

function iniciarContador(){
    actualizable = setInterval(actualizarContador, 1000);
}

function pausarContador(){
    clearInterval(actualizable);
}

function resetearContador(){
    contador = 0;
    document.getElementById("contador").textContent = contador;
}

function actualizarContador(){
    contador++;
    document.getElementById("contador").textContent = contador;
}


