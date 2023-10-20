const elegir = parseInt(prompt('presione 1:Piedra, 2:Papel, 3:tijera'));
let piedra = 1;
let papel = 2;
let tijera = 3;

let cpu = Math.floor(Math.random()*3)+1;

if(elegir === cpu){
    alert('empate');

}else if( elegir === piedra && cpu === tijera ||
          elegir === papel && cpu === piedra ||
          elegir === tijera && cpu === papel){
            alert('ganaste');
}else{
    alert('perdiste');
}