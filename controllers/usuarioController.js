import {Usuarios} from "../models/UsuarioModel.js"
let btnRegistro = document.getElementById("btnRegistro")
export function registrarUsuario(){
  let formulario = document.querySelector("form")
  console.log(formulario);
  
  let data = new FormData(formulario)
  let objeto = Object.fromEntries(data);  
  objeto.hobbies = data.getAll("hobbies") 
  let camposVacios = Object.values(objeto).some((valor)=> {
    return (
      valor === null || valor === undefined || valor.toString().trim() === ""
    );
  }); 
  if(camposVacios){
    let mensajeError = "No se permiten campos vacios, revise nuevamente...."
    let error = document.getElementById("error");
    error.textContent = mensajeError;
    error.classList.add("mensajeError");
    return;
  }

let error = document.getElementById("error");
error.classList.remove("mensajeError");
error.textContent = "";

Usuarios.push(objeto);
localStorage.setItem("usuarios", JSON.stringify(Usuarios));


}
btnRegistro.addEventListener("click", registrarUsuario)












