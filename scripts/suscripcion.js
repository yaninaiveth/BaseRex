
let buttons = document.querySelectorAll(".butSusc");
console.log(buttons);

let formInicio1 = document.getElementById("form-susc1");
console.log(formInicio1);
let formInicio2 = document.getElementById("form-susc2");
console.log(formInicio2);

function mostrarMail(formulario){
  formulario.style.display = "block";
}

buttons[0].addEventListener("click", ()=>{
  mostrarMail(formInicio1);
});
buttons[1].addEventListener("click", ()=>{
  mostrarMail(formInicio2);
});














