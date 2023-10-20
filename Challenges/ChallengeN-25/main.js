let golpesAleatorios = [];

for(i=0; i<10; i++){
    golpesAleatorios.push(Math.floor(Math.random()*100));
}

document.write(`Golpes: ${golpesAleatorios}`);
document.write('<br>');


let golpeMayor = 0;
for(let i = 0; i<10; i++){
    if(golpesAleatorios[i] > golpeMayor){
        golpeMayor = golpesAleatorios[i];
    }
}
document.write(`Golpe mas fuerte: ${golpeMayor} de daño`);




