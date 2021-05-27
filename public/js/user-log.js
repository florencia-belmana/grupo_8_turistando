const form = document.querySelector("#login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");
const  errorMessages = document.querySelectorAll(".errorMessage");


// recorriendo todos los mensajes de error y los ocultamos
function resetFormErrors() {
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none"
    })
}

email.addEventListener("focus", resetFormErrors)
password.addEventListener("focus", resetFormErrors)

form.addEventListener("submit", function(e) {
    let errors = false

    // llamamos a la función que oculta los mensajes de error
    resetFormErrors()
    
    if (email.value.length == 0){
        errorEmail.innerText = "Por favor, complete su email"
        errorEmail.style.display = "block"
        errors = true 
    } else if (email.value.length < 5) {
        errorEmail.innerText = 'El mail es incorrecto'
        errorEmail.style.display = "block"
        errors = true
    } 

    
    if (password.value.length == 0){
        errorPassword.innerText = "Por favor, complete su contraseña"
        errorPassword.style.display = "block"
        errors = true
    } else if (password.value.length < 4) {
        errorPassword.innerText = 'La contraseña tiene que tener minimo 5 caracteres'
        errorPassword.style.display = "block"
        errors = true
    } 

    // con que haya un solo campo con error, ya no se va a enviar el formulario
    if (errors) {
        e.preventDefault()
    }

})