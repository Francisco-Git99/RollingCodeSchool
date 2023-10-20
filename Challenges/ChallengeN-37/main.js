let numeroRandom = Math.floor(Math.random()*10)+1;
let button = document.getElementById("boton");
let confirmation = confirm('Empezar Juego?, tiene que adivinar un numero del 1 al 10');

if(confirmation){
    button.addEventListener("click", function(){
        let formNumber = parseInt(document.getElementById('formulario').value);
        if(formNumber === numeroRandom){
            alert('bien!! adivinaste el numero');
            setTimeout(function(){
                location.reload();
            }, 3000);
        }else if(numeroRandom > formNumber){
            alert('El numero que ingresaste es menor al numero a adivinar, intentalo de nuevo')
        }else{
            alert('El numero que ingresaste es meyor al numero a adivinar, intentalo de nuevo')
        }
    });
}

