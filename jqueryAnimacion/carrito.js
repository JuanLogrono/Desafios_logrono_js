//boton de cada card 
$(".botonCarrito").click(function () {
  valor = this.value  
Armar()
})

//mostrar modal con carrito
$(`#mostrarCarrito`).click(() => {
  $(`#modalCarrito`).slideToggle("slow");
});
//ocultar modal
$(`#cerrar`).click(() => $(`#modalCarrito`).slideUp());

//enviar compra (guardar en storage)
$(`#confirmar`).click(() =>{
  let compra = JSON.stringify(guardarJson);
  localStorage.setItem(nombreIngreso, compra);
  $(`#eliminar`).trigger(`click`);
  $(`#cerrar`).trigger(`click`);
  guardarJson = []
});

//borrar contenido del modal
$(`#eliminar`).click(() =>  {
  $(`.borrarPedido`).remove();
  sumaTotal=0
} );

//recuperar compra
$(`#recuperarCompra`).click(() => {
  let carritoRecuperado = localStorage.getItem(`${nombreIngreso}`);
  let nuevoCarrito = JSON.parse(carritoRecuperado);
  crear(nuevoCarrito);
});
//borrar storage
$(`#borrarAlmacenado`).click(() =>{
  localStorage.removeItem(nombreIngreso);
});
//cambiar usuario
$("#cambiarUsuario").click(() => {
  $("#ingresoDeUsuario").show();
  saludo.textContent = "Ingrese el nuevo usuario";
});
