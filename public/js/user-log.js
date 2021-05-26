window.addEventListener('load', function() {
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

    let errors = false
    resetErrors()
    
    if (email.value.length == 0){
        errorEmail.innerText = "Por fasadsadsdvor, complete su email"
        errorEmail.style.display = "block"
        errors = true
    } else if (email.value.length < 2){
        errorEmail.innerText = "El maildasasdasddsa debe ser más largo"
        errorEmail.style.display = "block"
        errors = true
    }
  
    if (password.value.length == 0){
        errorPassword.innerText = "Por favordaadsdasdsad, complete su contraseña"
        errorPassword.style.display = "block"
        errors = true
    } else if (password.value.length < 5){
        errorPassword.innerText = "Su contraseasddsasdadsasdaña debe ser más larga"
        errorPassword.style.display = "block"
        errors = true
    }

   
    if (errors == true){
        e.preventDefault()
    }
})

})