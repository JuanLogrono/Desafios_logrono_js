let carritoProv= []
let valorTotal=0
document.getElementById("modificarCompra").disabled=true;
document.getElementById("enviarPedido").style=`display:none`;


// constructor de productos del carrito
class carritoCompra{
    constructor(producto, cant, valor){
        this.producto = producto;
        this.cant = cant;
        this.valor = valor;
    }
    
}
//funcion que para mostrar el carrito en el html
//productos ofrecidos
class ConstProductos{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}


const producto1 =new ConstProductos ("Prod1",100,15);
const producto2 =new ConstProductos ("prod2", 500,5);
const producto3 =new ConstProductos ("prod3",50,20);
const producto4 =new ConstProductos ("prod4", 150,10);
const producto5 = new ConstProductos ("prod5",200,12);

const stock = [producto1,producto2,producto3,producto4,producto5];

//crear lista de productos en el html con sus cantidades

for (const indice in stock){
    
    const listadoDeProductos= document.getElementById("listadoDeProductos");

    let productos= `${stock[indice].nombre} <div>Precio: $${stock[indice].precio}</div> <input type="number" min="0" max= ${stock[indice].cantidad} id="ingresoCantidad${indice}"></input>`
    let listaProductos=document.createElement("li");
    listaProductos.innerHTML= productos; 
    listadoDeProductos.appendChild(listaProductos);
}
//funcion que arma el array para cargar los productos y los vuelca en el html.
function Armar(){
  for (let i=0;i < stock.length;i++){
    var cantidad = document.getElementById(`ingresoCantidad${i}`).value;
    if (cantidad == 0 || cantidad == ""){
        continue;
    }else{
        const producto = stock[i].nombre;
             const cant = cantidad
             const precioVenta = cantidad * stock[i].precio; 
             const nuevoArt = new carritoCompra(producto,cant,precioVenta);
             carritoProv.push(nuevoArt);
             
            }
            
        }
        for (let prod in carritoProv){
            let productosCarrito = `<td>${carritoProv[prod].producto}</td> <td>${carritoProv[prod].cant}un</td><td> $${carritoProv[prod].valor}</td>`;
            
            let tbCarrito =document.getElementById("tbCarrito");
            const sobreEscribir = document.createElement("tr");
            sobreEscribir.innerHTML=productosCarrito;
            tbCarrito.appendChild(sobreEscribir);
            
            valorTotal+=parseFloat(carritoProv[prod].valor); 
            
                
        }
        const divTotal = document.getElementById("divTotal");
        let total=document.createElement("p");
        total.innerHTML=`TOTAL $${valorTotal}`;
        divTotal.appendChild(total);
        carritoProv=[];
        
        document.getElementById("armarCarrito").disabled=true;
        document.getElementById("modificarCompra").disabled=false;
        document.getElementById("enviarPedido").style=`display:flex`;
        } 
    
    
        
//boton para cargar los productos en el carrito
  let armarCarrito = document.getElementById("armarCarrito");
  armarCarrito.onclick=()=> Armar();
  //boton para modificar lo cargado (por ahora recarga la pagina)
  let modificarCompra = document.getElementById("modificarCompra");
  modificarCompra.onclick=()=> location.reload();
  
 //mensaje de salida y vuelta al principio 
const mensaje=()=>{alert("El Pedido a sido enviado \n\n GRACIAS POR SU COMPRA");
                            location.reload();}
  let enviarPedido = document.getElementById("enviarPedido");
  enviarPedido.onclick=()=> mensaje ()
  
  
