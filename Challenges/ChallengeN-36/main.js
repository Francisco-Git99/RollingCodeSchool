class Agenda{
    constructor(duenio){
        this.duenio = duenio;
        this.agenda = [];
    }

    añadirContacto(nuevoContacto){
        if(this.agenda.length <= 9){
            this.agenda.push(nuevoContacto);
            alert("contacto añadido correctamente");
        }else{
            alert("No puedes agregar mas contactos, agenda llena");
        }
    }

    existeContacto(contactoExistente){
        if(this.agenda.find(contacto => contacto == contactoExistente)){
            alert('El contacto ya existe');
        }else{
            alert('El contacto no existe');
        }
    }

    listarContacto(){
        let ocupados = 0;
        this.agenda.forEach(function(lugar){
            if(lugar){
                ocupados++;
            }
        });
        const disponibles = 10 - ocupados;
        alert(`Hay ${ocupados} contactos agendados y ${disponibles} lugares disponibles`);

        for(let i = 0; i < this.agenda.length; i++){
            console.log(this.agenda[i]);
        }
    }

    buscarContacto(nombre){
        let contacto = this.agenda.find(contacto => contacto.nombre === nombre);
        
        if(contacto){
            console.log(contacto.telefono);
        } else {
            alert("No se encontró el contacto");
        }
    }

    eliminarContacto(name){
        let contactoEliminar = this.agenda.find(contacto => contacto.nombre === name);
        if(contactoEliminar !== undefined){
            let posicion = this.agenda.indexOf(contactoEliminar);
            this.agenda.splice(posicion, 1);
            alert('Contacto eliminado correctamente');
        }else{
            alert('Contacto no registrado o no encontrado');
        }
    }
}

class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

// let agendaFrancisco = new Agenda("Francisco");
// let francisco = new Contacto("Francisco", 678954432);
// let patricio = new Contacto("Patricio", 123456789);
// let leticia = new Contacto("Leticia", 123456789);
// let federico = new Contacto("Federico", 123456789);
// agendaFrancisco.añadirContacto(francisco);
// agendaFrancisco.añadirContacto(patricio);
// agendaFrancisco.añadirContacto(leticia);
// agendaFrancisco.añadirContacto(federico);

