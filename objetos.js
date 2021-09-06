const iva= 1.21;
let porcentajeGanancia = 1;

class Producto {
    constructor (nombre,precioCompra,cantidad){
        this.nombre = nombre;
        this.precioCompra = parseFloat(precioCompra).toFixed(2);
        this.cantidad = parseInt(cantidad);
    } 
    calculoIva(){
        this.precioConIva= this.precioCompra * iva;
    }
    calculoVenta(){
        this.PrecioVenta=parseFloat(this.precioConIva * porcentajeGanancia).toFixed(2);
    }
    mostrar(){
        alert("Articulo comprado: " +this.nombre+ "\nPrecio unitario: $" +this.precioCompra+ "\nPrecio de venta sugerido: $" +this.PrecioVenta);
    }
}


let articulo = prompt("Ingrese el numero del articulo Comprado \n 1 Remera \n 2 Jean \n 3 Buzo")
let precioSinImpuestos = parseFloat(prompt("ingrese Monto de compra"))
let cantidadComprada = prompt("Ingrese Cantidad comprada")
let precioUnitario = precioSinImpuestos/cantidadComprada;

const p001 = new Producto("remera",[precioUnitario],[cantidadComprada]);
const p002 = new Producto("Jean",[precioUnitario],[cantidadComprada]);
const p003 = new Producto("Buzo",[precioUnitario],[cantidadComprada]);

switch (articulo){
case "1" :
porcentajeGanancia= 1.20;
p001.calculoIva ();
p001.calculoVenta();
console.log(p001);
p001.mostrar();
break;
case "2" :
porcentajeGanancia = 1.30;
p002.calculoIva ();
p002.calculoVenta();
console.log(p002);
p002.mostrar();
break;
case "3" :
porcentajeGanancia = 1.25
p003.calculoIva ();
p003.calculoVenta();
console.log(p003);
p003.mostrar();
break;
}
