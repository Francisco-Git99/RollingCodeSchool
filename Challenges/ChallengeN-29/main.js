let products = ["gaseosa", "agua", "cerveza", "fernet", "gin", "vodka", "vino"];
let carrito = [];

// function para agregar productos al array vacio de carrito
const agregarProductos = () => {
  const productoAgregado = prompt("Que producto deseas agregar al carrito:").toLowerCase();
  if (products.includes(productoAgregado)) {
    carrito.push(productoAgregado);
    alert("producto agregado!");
  } else {
    alert("no vendemos ese producto, volve la proxima semana");
  }
}

// function para mostrar el carrito si tiene o no productos
const mostrarCarrito = () => {
  alert(`tus productos seleccionados son: ${carrito.join(", ")}`);
}

// function para buscar un producto en el carrito
function buscarUnProducto() {
  const buscarProducto = prompt("ingresar el producto que busca").toLowerCase();
  const productoEncontrado = carrito.find(bebidas => bebidas == buscarProducto);
  alert("Productos Encontrado");
}

// function que buscar un producto que coincida con una palabra, letra, o parte de una palabra
const buscarCoindidencias = function () {
  const buscar = prompt("buscar").toLowerCase();
  const resultado = products.filter(producto => producto.includes(buscar));
  alert(resultado);
}

// function para eliminar un producto agregado al carrito
const eliminarProducto = () => {
  const productoAEliminar = prompt("Ingrese el producto a eliminar:").toLowerCase();
  const borrar = carrito.indexOf(productoAEliminar);
  if (borrar !== -1) {
    carrito.splice(borrar, 1);
    alert("Producto eliminado del carrito");
  } else {
    alert("El producto no está en el carrito");
  }
  if (carrito.length === 0) {
    alert("El carrito está vacío");
  }
}
