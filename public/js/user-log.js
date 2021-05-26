
const form = document.querySelector("#form-login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");
const errorMensaje = document.querySelectorAll(".error-mensaje");



function resetErrors(){
    errorMensaje.forEach(error =>{
        error.style.display ="none"
    })
}

form.addEventListener("submit", function(e){
console.log("prueba", e)
    let errors = false
    resetErrors()
    
    if (email.value.length == 0){
        errorEmail.innerText = "Por favor, complete su email"
        errorEmail.style.display = "block"
        errors = true
    } else if (email.value.length < 2){
        errorEmail.innerText = "El apellido debe ser más largo"
        errorEmail.style.display = "block"
        errors = true
    }
/*  
    if (password.value.length == 0){
        errorPw.innerText = "Por favor, complete su contraseña"
        errorPw.style.display = "block"
        errors = true
    } else if (password.value.length < 5){
        errorPw.innerText = "Su contraseña debe ser más larga"
        errorPw.style.display = "block"
        errors = true
    }
*/

    console.log ("errors", errors)
    if (errors == true){
        e.preventDefault()
    }
})
