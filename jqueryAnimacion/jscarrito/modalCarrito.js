let valor = ""
let sumaTotal = 0;
let guardarJson = []
class carritoCompra {
    constructor(producto, cant, valor) {
        this.producto = producto;
        this.cant = cant;
        this.valor = valor;
    }
}
//armar carrito
let arrayCarrito = [];

//Armar array carrito
function Armar() {
    var cantidad =$(`#ingresoCantidad${valor}`).val();
        if (cantidad == 0 || cantidad == "cantidad") {
            $(`#ingresoCantidad${valor}`).val(``);
        } else {
            var producto = stock[valor].nombre;
            var cant = cantidad
            var precioVenta = cantidad * stock[valor].precio;
            var nuevoArt = new carritoCompra(producto, cant, precioVenta);
            arrayCarrito.push(nuevoArt);
            $(`#ingresoCantidad${valor}`).val(``);
        }
        crear(arrayCarrito);    
        $(`#borrarSuma`).remove();
        $(`#contenidoModal`).append(`<b id="borrarSuma" class="borrarPedido">Precio Final: $${sumaTotal}</b>`);
   
        guardarJson = arrayCarrito.concat(guardarJson);
        arrayCarrito=[];
}
//crear carrito en el modal
function crear (arreglo){
    for (let x in arreglo) {
        $(`#listaComprados`).append(`<li class="borrarPedido"> ${arreglo[x].producto} -------- ${arreglo[x].cant}--------- $${arreglo[x].valor}</li>`);
        sumaTotal += parseFloat(arreglo[x].valor); 
    }
}


