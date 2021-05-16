/* window.addEventListener("load", function(){
    let formulario = document.querySelector("form-reservation");
    formulario.addEventListener("submit", function(e){
        let errores = [];
        let campoNombre = document.querySelector("input.first_name");
        if (campoNombre.value == "") {
            errores.push("El campo nombre debe estar completo");
            
            
            let campoApellido = document.querySelector("input.last_name");
            if (campoApellido.value == ""){
                errores.push("El campo apellido debe tener al menos 8 carácteres");
            }
            if(errores.length > 0){
                e.preventDefault();

                let ulErrores = document.querySelector("div.errores ul");
                for(let i = 0; i <errores.length; i++){
                    ulErrores.innerHTML += "<li>" + errores[i] + "</li>" 
                }
            }
        }

    });
})
 */

let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let email = document.querySelector("#email");
let telephone = document.querySelector("#telephone");
let avatar = document.querySelector("#avatar");
let password = document.querySelector("#password");

first_name.addEventListener("keyup", function (e) {
  if (this.value.length < 2 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});

last_name.addEventListener("keyup", function (e) {
  if (this.value.length < 2 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});

email.addEventListener("keyup", function (e) {
  if (this.value.length < 8 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});

//-->


password.addEventListener("keyup", function (e) {
  if (this.value.length < 8 && this.value.length > 0) {
    validacionIncorrecta(this);
  } else {
    validacionCorrecta(this);
  }
});



let validacionCorrecta = (elemento) => {
  elemento.classList.remove("validation-bad");
  elemento.classList.add("validation-success");
  let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`);
  feedbackDiv.classList.add("hidden");
};
let validacionIncorrecta = (elemento) => {
  elemento.classList.add("validation-bad");
  elemento.classList.remove("validation-success");
  let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`);
  feedbackDiv.classList.remove("hidden");
};
let limpiarValidaciones = (elemento) => {
  let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`);
  feedbackDiv.classList.add("hidden");
};