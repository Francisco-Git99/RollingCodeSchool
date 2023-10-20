/*
Eres el líder de una tripulación pequeña de piratas y tienes un plan. Con la ayuda de POO tienes que hacer una función para identificar barcos con un botín pesado a bordo.
Por desgracia, la gente perdió mucho estos días, entonces, cómo sabes si un barco está lleno de oro y no de personas?

Cada vez que tus espias vean un barco nuevo entrando al muelle, van a crear un nuevo objeto de barco basado en sus observaciones:

Draft: Un estimado del peso del barco basado en qué tan bajo está en el agua
Crew: La cantidad de tripulantes a bordo
Tienes acceso al "Draft" y la "Crew" del barco. "Draft" es el peso total del barco y "Crew" es el número de personas en el barco.

Cada miembro añade 1.5kg al peso del barco. Si luego de remover el peso de las personas, el peso del barco sigue siendo más de 20kg, significa que el botín es bueno.

Añade el método "botinBueno" para decidir si vale la pena saquear el barco.
 */
class Barco {
    constructor(draft, crew) {
      this.draft = draft;
      this.crew = crew;
    }
  
    botinBueno() {
      return (this.draft - (this.crew * 1.5)) > 20;
    }
}

let continuar = true;

while(continuar){
    const draft = prompt("Ingrese el peso del barco:");
    const crew = prompt("Ingrese la numero de tripulantes:");

    const barco = new Barco(draft, crew);

    if(barco.botinBueno()){
        alert("El botin es bueno, robar botin");
    }else{
        alert("El botin no es bueno");
    }

    const respuesta = prompt("¿continuar ingresando barcos? (s/n)").toLowerCase();

    if (respuesta === "n") {
        continuar = false;
    }
}
  
  
  
  
  