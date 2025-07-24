// VALIDACIONES

/*  1. FRONT: SE VALIDA DESDE : HTML, CSS O JS 
      HTML: REQUIRED, TYPE DEL INPUT
      CSS: APLICAR CONDICIONES O ESTILOS ADICIONALES CON PSEUDO CLASE, PSEUDO ELEMENTOS, SELECTORES POR TIPO 
      JS: EXPRESIONES REGULARES, SE UTILIZA PARA ASEGURARNOS LO QUE ESTEMOS INGRESANDO SI ESTE CORRECTO 

    2. BACK 
    3. DATOS
*/ 

// DEFINIR PROYECTO MODEL VIEW CONTROLLER 

/* SE SEPARA EL MODEL EN 3 CAPAS 
MODEL: HACE REFERENCIA A TODO LO RELACIONADO CON LOS DATOS DE BASE DE DATOS Y OPERACION CRUD, SIMULACION DE 
BASE DE DATOS POR MEDIO DE ARREGLOS Y JSON 
VIEW: HACE REFERENCIA A TODO LO RELACIONADO CON EL UX/UI
CONTROLLER: HACE REFERENCIA A LA LÓGICA Y COMUNICACIÓN ENTRE EL MODELO Y LA VISTA
TYPE MODULE SIEMPRE LO DEBE TENER PARA LA EXPORTACION E IMPORTACION  */

/* PRODUCTO MINIMO VIABLE MVP 1 : VALIDAR FORMULARIO:
-
-

MVP 2: REGISTRAR USUARIO */

import { REGEX_PATTERNS } from "./helpers/expresionesRegulares.js";  //importante agregar el .js
let inputs = document.querySelectorAll("form input"); // selecionar todos los inputs del formulario
// y almacenar por lo tanto se crea una variable para poder modificar mas adelante 
inputs.forEach((input)=> {
  input.addEventListener("keyup", (e) => {
   //console.log(e.target.value); // para mostrar en la consola del navegador el valor actual del elemento que generó el evento. 
   //console.log(e.target.name )
   switch (e.target.name) // nombre del input que estoy capturando 
   {
    case "nombre":
     if(REGEX_PATTERNS.nombre.test(e.target.value)) {
      console.log("Cumple la expresión regular ");
      document.getElementById("nombre").style.background="green"

     } else{
       console.log("No cumple con la expresión regular")
       document.getElementById("nombre").style.background="red"
      }
     break;
     case "apellido":
     console.log("Este es el input apellido");
     break;

   }
  }) // se agregar al input un evento 

  /*input.addEventListener("blur", () => {
   console.log("mas puntos"); 
  })*/

}) // iterar cada uno de los elementos del arreglo y le va agregar lo que yo quiera con funcion anonima que siempre 
// recibe un parametro, normalmente se utiliza el singular del arreglo, o element, item, index.

//evento de usuario siempre desencadena un evento documento
// toda funcion en un evento puede ingresar a un evento documento normalmente se identifica (e)

// identificar en que input esta el evento se hace con el name por que es el mas directo 


// la comparacion de la expresion regular :  expresion y luego el valor y retorna un true or false 
// .test compara letra por letra para definir si cumple o no con la expresion regular 
















