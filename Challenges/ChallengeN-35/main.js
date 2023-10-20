class ListaLibros{
    constructor(duenio){
        this.duenio = duenio; 
        this.libros = [];
        this.librosTerminados = [];
        this.librosNoLeidos = [];
        this.libroActual = [];
        this.ultimoLibroLeido = null;
        this.sgteLibroPorLeer = null;
    }
    agregarLibro(libro){
        this.libros.push(libro);
        if(this.libros.length > 0){
            this.librosNoLeidos.push(libro);
        }
    }
    empezarLibro(libro) {
        this.libroActual.push(libro);
        this.sgteLibroPorLeer = null;
        const index = this.librosNoLeidos.indexOf(libro);
        if (index !== -1) {
          this.librosNoLeidos.splice(index, 1);
        }
      }      
    
    finalizarLibro(libro){
        this.librosTerminados = this.libroActual;
        this.ultimoLibroLeido = this.libroActual;
        if(this.ultimoLibroLeido ==  this.libroActual){
            this.libroActual = [];
        }
    }
    siguienteLibro(libro){
        const index = this.libros.indexOf(libro);
        if(index !== -1){
            this.sgteLibroPorLeer = libro;
        }
    }
}

class Libro{
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
}

const libroCesar = new ListaLibros('cesar');
const harrypotter = new Libro('harry potter', 'fantasia', 'Jk Rowlig', false);
const elprincipito = new Libro('el principito', 'fantasia', 'exupery', true);
const elsenioranillo = new Libro('El señor de los anillos', 'fantasia', 'Tolkien', true);