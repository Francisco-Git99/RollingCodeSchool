/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/ 

class Producto{
    constructor(code, name, price){
        this.code = code;
        this.name = name;
        this.price = price;
    }

    static mostrarDatos(productos){
        let informacion = "";
        for(let products of productos){
            informacion += `<p>Codigo: ${products.code}, nombre: ${products.name}, precio: $${products.price}</p>`;
        }
        document.getElementById("informacion").innerHTML = informacion;
    }
}

let productos = [
    new Producto('b1', 'arroz', 235), 
    new Producto('b7', 'magdalenas', 330), 
    new Producto('b31', 'queso cremoso', 1640) 
]

// Producto.mostrarDatos(productos);