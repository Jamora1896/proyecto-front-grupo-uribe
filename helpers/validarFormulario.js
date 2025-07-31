import { REGEX_PATTERNS } from "./expresionesRegulares.js"; 
validarFormulario();
export function validarFormulario () {
let inputs = document.querySelectorAll("form input"); 
inputs.forEach((input)=> {
  input.addEventListener("keyup", (e) => {
   
   switch (e.target.name) 
   {
    case "nombre":
     if(REGEX_PATTERNS.nombre.test(e.target.value)) {
     document.getElementById("nombre").classList.remove("incorrecto");
     } else{
        document.getElementById("nombre").classList.add("incorrecto");
    
      }
     break;
     case "apellido":
      if(REGEX_PATTERNS.apellido.test(e.target.value)){
        document.getElementById("apellido").classList.remove("incorrecto");
      }
      else{
        document.getElementById("apellido").classList.add("incorrecto");
      }
     break;
     case "documento":
      if(REGEX_PATTERNS.documento.test(e.target.value)){
        document.getElementById("documento").classList.remove("incorrecto");
      }
      else{
        document.getElementById("documento").classList.add("incorrecto");
      }
     break;
     case "telefono":
      if(REGEX_PATTERNS.telefono.test(e.target.value)){
        document.getElementById("telefono").classList.remove("incorrecto");
      }
      else{
        document.getElementById("telefono").classList.add("incorrecto");
      }
     break;
}
});
});
 }
