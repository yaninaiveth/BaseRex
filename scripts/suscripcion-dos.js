let button3 = document.querySelectorAll(".butSusc3");
console.log(button3);

let form3 = document.getElementById("form-3");
console.log(form3);

function mostrarMail(formulario){
    formulario.style.display = "block";
}

button3[0].addEventListener("click", ()=>{
    mostrarMail(form3);
});