let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let divisionResto;
let dniNumero = parseInt(prompt('ingrese su DNI:'));

if(dniNumero > 0 && dniNumero < 99999999){
    divisionResto = dniNumero%23;
    document.write('la letra de su dni es: ' + letras[divisionResto]);
} else {
    alert('error dni');
    while(isNaN(dniNumero) == true || dniNumero > 99999999){
        dniNumero = parseInt(prompt('Ingrese un DNI válido:'));  
    }
    divisionResto = dniNumero%23;
    document.write('la letra de su dni es: ' + letras[divisionResto]);
}