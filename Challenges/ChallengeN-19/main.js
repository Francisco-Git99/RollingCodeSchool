let personajeVida = Math.floor(Math.random() * 100) + 1;
const pocionGrande = 50;
const pocionChica = 25;

if (personajeVida < 50){
    document.write(`La vida del personaje es: ${personajeVida}, curar con una pocion grande,
                    vida del pesonaje tras ser curado ${personajeVida + pocionGrande}`);
}else if (personajeVida > 50 && personajeVida < 75){
    document.write(`La vida del personaje es : ${personajeVida}, curar con una pocion chica,
                    vida del personaje tras ser curado ${personajeVida + pocionChica}`);
}else if (personajeVida >=75){
    document.write(`La vida del personaje es : ${personajeVida}, no necesita ser curado`);
}