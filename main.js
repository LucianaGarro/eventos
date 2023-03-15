//Eventos: son la manera que tenemos en JS de controlar las acciones de los usuarios, y definir un comportamiento dado cuando este se produzca. 

//¿Cómo funciona? Utilizamos una herramienta que se denomina "manejador de eventos"

// Hay varios métodos  o formas de trabajarlos. 

//1) forma 1: 
 const btn = document.getElementById ("btn");
 btn.addEventListener("click", ()=> {
    alert("El campeón del mundo, vive como quiere");
 })

 //el evento "click" se dispara cuando cliqueamos el mouse sobre un elemento determinado.
//Usamos una función flecha para asociar un comportamiento a ese evento. 

const boton = document.getElementById ("boton");
boton.addEventListener("click", ()=> {
   alert("messsssssi");
})

//2) Utilizando las propiedades del NODO (HTML) también disparar un evento.

const btnDos = document.getElementById ("btnDos");
btnDos.onclick = () =>{
    alert("Segunda forma");
}

//3) Escribiendo la función en el HTML: 

function jsEnHtml (){
    console.log("Estoy llamando a la función desde el HTML")
}

//Eventos más comunes: mouse, teclado, formulario. 
//Eventos con el mouse: se producen con la interacción del usuario con el mouse. 

//mouseover - mouseout: el puntero del mouse se mueve o sale del elemento. 

const caja = document.getElementById("caja");
caja.onmouseover = () => {
    console.log ("ingresó o salio el puntero de la caja");
}

// const caja = document.getElementById("caja");
// caja.onmouseout = () => {
//     console.log ("ingresó o salio el puntero de la caja");
// }

//mousemove: registra el movimiento del mouse sobre el elemento (no es necesario hacer click sobre el elemento) Recordar que no anda en versión mobile. 

caja.mousemove = ()=> {
    console.log("estoy pasando el mouse por la caja");
}

//Eventos en el teclado: son los que producen con la interacción del usuario con el teclado. 
//onkeydown: evento cuando se presiona la tecla
//onkeyup: evento cuando se SUELTA la tecla

const campoTexto = document.getElementById("campoTexto");
campoTexto.onkeydown = () =>{
    console.log ("presionaste una teclillaaaaa");
}

campoTexto.onkeyup = () =>{
    console.log("soltaste la teclita");
}

//Evento change: se activa cuando cambia el valor de un elemento;

const texto = document.getElementById("texto");
texto.addEventListener("change", ()=>{
    alert("Ingresaste un texto");
})

//EVENTO INPUT: me permite ejecutar una función cada vez que se ingrese texto en un campo.
texto.addEventListener("input", ()=>{
    console.log(texto.value);
})

//la propiedad value me va a permitir acceder al texto ingresado por el usuario. 

//Eevento SUBMIT: se activa cuando un formulario es enviado. 
//Voy a crear una clase que se denomine cliente para instanciar objetos, que voy a tomar del formulario.

class Cliente {
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

//Vamos a crear un array vacío que almacene los datos de los clientes ingresados por medio de un push. 
const arrayClientes = [];

//Vamos a vincular el formulario

const formulario = document.getElementById("formulario");

//Vamos a trabajar con el formulario, tomar sus datos, crear un objeto y luego almacenamos esos datos en el array vacío. 

formulario.addEventListener("submit", (e)=>{

    //evitamos el comportamiento por default del formulario
    e.preventDefault();

    const nombre = document.getElementById("nombre");

    const apellido = document.getElementById ("apellido");

    //Crear el objeto cliente:

    const cliente = new Cliente (nombre.value, apellido.value);

    arrayClientes.push(cliente);
    console.log(arrayClientes);

    //Resetear el formulario:
    formulario.reset();
})
