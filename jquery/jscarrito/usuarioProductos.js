//ingreso y cambio de usuario
let nombreIngreso = "";

$("#ingresoDeUsuario").change(function () {
  nombreIngreso = $("#ingresoDeUsuario").val();
  $("#saludo").empty(` `);
  $("#saludo").append(`Hola ${nombreIngreso} `);
  $("#ingresoDeUsuario").hide();
  $("#ingresoDeUsuario").val(``);
});

$("#cambiarUsuario").click(() => {
  $("#ingresoDeUsuario").show();
  saludo.textContent = "Ingrese el nuevo usuario";
});

//productos en html
//productos ofrecidos
class ConstProductos {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}
const producto1 = new ConstProductos("prod1", 100, 15);
const producto2 = new ConstProductos("prod2", 500, 5);
const producto3 = new ConstProductos("prod3", 50, 20);
const producto4 = new ConstProductos("prod4", 150, 10);
const producto5 = new ConstProductos("prod5", 200, 12);
const producto6 = new ConstProductos("prod6", 300, 50);
//productos ofrecidos
const stock = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];
//crear tarjetas de productos en el html con sus cantidades
for (const indice in stock) {
  $(`#listadoDeProductos`)
    .append(`<div class="ordenarProductos"><img class= "imagenProducto" src="./assets/${stock[indice].nombre}.webp" alt="Producto">
                                    <h3>${stock[indice].nombre}</h3> 
                                    <span>Precio: $${stock[indice].precio}</span> 
                                    <div class="ordenFooterTarjetas"><input type="number" min="0" max= ${stock[indice].cantidad}  id="ingresoCantidad${indice}" placeholder ="cantidad"></input>
                                    <button class="botonCarrito" value="${indice}" type="button"><img class="sizeBotonCarrito" src="./assets/carrito.png" alt="Agregar compra" title = "agregar al carrito"></button> </div></div>`);
}
