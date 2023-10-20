class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, aniodenacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.aniodenacimiento = aniodenacimiento;
    }

    mostrarGeneracion(){
        if(this.aniodenacimiento >= 1994 && this.aniodenacimiento <= 2010){
            alert('Perteneces a la Generación Z, tu rasgo caracteristico es IRREVERENCIA');
        }else if(this.aniodenacimiento >= 1981 && this.aniodenacimiento <= 1993){
            alert('Perteneces a la Generación Y eres un millennials, tu rasgo caracteristico es FRUSTRACIÓN');
        }else if(this.aniodenacimiento >= 1969 && this.aniodenacimiento <= 1980){
            alert('Perteneces a la Generación X, tu rasgo caracteristo es OBSESION POR EL EXITO');
        }else if(this.aniodenacimiento >= 1949 && this.aniodenacimiento <= 1968){
            alert('Perteneces a la Generación Baby Boom, tu rasgo caracteristo es AMBICIÓN');
        }else if(this.aniodenacimiento >= 1930 && this.aniodenacimiento <= 1948){
            alert('Perteneces a la Generación Silent Generation(los niños de la posguerra), tu rasgo caracteristo es AUSTERIDAD');
        }else{
            alert('...');
        }
    }

    esMayorDeEdad(){
        if(this.edad >= 18){
            alert('es mayor de edad');
        }else{
            alert('no es mayor de edad');
        }
    }
    

    mostrarDatos(){
        document.write(`Nombre: ${this.nombre}<br>`);
        document.write(`Edad: ${this.edad}<br>`);
        document.write(`DNI: ${this.dni}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
        document.write(`Peso: ${this.peso}<br>`);
        document.write(`Altura: ${this.altura}<br>`);
        document.write(`Año de nacimiento: ${this.aniodenacimiento}<br>`);
    }
    
    
    generaDNI() {
        let numero = Math.floor(Math.random() * 100000000);
        while(numero.toString().length !== 8) {
          numero = Math.floor(Math.random() * 100000000);
        }
        return numero;
      }
      
}

const people1 = new Persona('Roman', 23, new Persona().generaDNI(), 'H', '76kg', '173cm', 2000);
const people2 = new Persona('Nadia', 49, new Persona().generaDNI(), 'M', '64kg', '158cm', 1973);