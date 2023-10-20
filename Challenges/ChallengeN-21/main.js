let life = Math.floor(Math.random() * 100) + 1;

//Sin conectores logicos 
if (life <= 20){
    console.log(`la vida es ${life}, huir ahora!!!`);
}if(life >=21){
    if(life <= 50){
        console.log(`la vida es ${life}, Modo Defensivo Activado`);
    }
}if(life>=51){
    if(life<=80){
        console.log(`la vida es ${life}, Modo Moderado Activado`);
    }
}if(life >= 81){
    if(life <= 100){
        console.log(`la vida es ${life}, Modo Ofensivo Activado`);
    }
}

//Con conectores logicos
if (life <= 20){
    console.log(`la vida es ${life}, huir ahora!!!`);
}else if (life >= 21 && life <= 50){
    console.log(`la vida es ${life}, Modo Defensivo Activado`);
}else if (life >= 51 && life <= 80){
    console.log(`la vida es ${life}, Modo Moderado Activado`);
}else{
    console.log(`la vida es ${life}, Modo Ofensivo Activado`);
}

