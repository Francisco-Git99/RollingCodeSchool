class Peliculas {
    constructor(titulo, genero, año, sipnosis) {
        this.titulo = titulo;
        this.genero = genero;
        this.año = año;
        this.sipnosis = sipnosis;
      }

    static listar(peliculas){
        for(let movie of peliculas){
            console.log(movie.titulo);
            console.log(movie.genero);
            console.log(movie.año);
            console.log(movie.sipnosis);
        }
    }
}

let peliculas = [
    new Peliculas("titulo: El señor de los anillos: La comunidad del anillo", "genero: Fantasía", `año: 2001`, "sipnosis: Un joven hobbit emprende un peligroso viaje para destruir un anillo mágico y salvar al mundo de la oscuridad."),
    new Peliculas("titulo: La La Land", "genero: Musical", `año: 2016`, "sipnosis: Un pianista de jazz y una actriz aspirante se enamoran mientras intentan hacer realidad sus sueños en Los Ángeles."),
    new Peliculas("titulo: El Padrino", "genero: Drama", `año: 1972`, "sipnosis: El líder de una poderosa familia mafiosa lucha por mantener su posición y proteger a su familia en medio de una guerra de bandas.")
];


  
  
  
  