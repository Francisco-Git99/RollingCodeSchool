/* Inteligencia Artificial en un Hospital
Un hospital quiere que le hagamos una aplicacion inteligente donde
el paciente ponga sus datos, su dolencia y se determine que tipo de
estudio debe realizarse, ejemplo Dolencia: Dolor Abdominal

A tener en cuenta: las mujeres embarazadas no se les puede hacer una
tomografia o una placa porque puede tener efectos teratogenicos.
*/

alert('Ingresar datos del paciente:\n*Nombre\n*edad\n*dolencia');
let nombre = prompt('Nombre Completo del paciente:');
let edad = prompt('Edad del paciente:');
let dolencia = prompt('Dolencia/Malestar:');
let embarazo = confirm('¿Esta embarazada?');

if(dolencia == 'dolor abdominal' && embarazo == true){
    alert('No puede realizarse Tomografias ni placas');
}else if(dolencia == 'dolor abdominal' && embarazo == false){
    alert('Puede realizarse Tomografias y placas');
}else{
    alert('pude realizarse una tomografia y placas')
}


