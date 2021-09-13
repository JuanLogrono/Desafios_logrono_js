
class Empleados{
    constructor( nombre, edad, fechaIngreso){
        this.nombre = nombre;
        this.edad= parseInt(edad);
        this.fechaIngreso = fechaIngreso;
    }
}
function temporarios(){
    const nuevoNombre = prompt("Ingrese nombre completo")
    const nuevaEdad=parseInt(prompt("Ingrese Edad"));
    const nuevo = new Empleados (nuevoNombre,nuevaEdad);
    listaEmpleados.push(nuevo)
}
const leg0001 =new Empleados("Minerva Giraldo",31);
const leg0004 =new Empleados("Miguel Bareas",37);
const leg0006 =new Empleados("Yolanda Villaverde",23);
const leg0005 =new Empleados("María Valero",41);
const leg0002 =new Empleados("Tamara Valle",30);
const leg0003 =new Empleados("Gabriel Arana",25);

const listaEmpleados = [leg0001,leg0002,leg0003,leg0004,leg0005,leg0006];

let salida = true;
 prompt("Listado de empleados:")
do{
let ordenar = prompt("Hay "+listaEmpleados.length+" empleados desea ordenarlos por:\n\nA)nombre \n\nB)Edad").toUpperCase();
if (ordenar == "A"){
    const alfabetico = listaEmpleados.sort(((a,b)=> a.nombre > b.nombre))
    console.log(alfabetico)
}else if (ordenar == "B"){
    const porEdad = listaEmpleados.sort (((a,b)=> a.edad>b.edad))
    console.log(porEdad);
}
let agregar = prompt("¿Desea agregar algun empleado temporario? \n\nSi \n\nNo").toLowerCase();
if (agregar ==="si" || agregar === "s"){
temporarios()
}else if (!(agregar ==="si" || agregar === "s")){
          salida= false
}
}while (salida) 

