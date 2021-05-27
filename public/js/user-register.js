const form = document.querySelector("#register-form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("last_name");
const email = document.querySelector("#email");
const image = document.querySelector("#image");
const password = document.querySelector("#password");

const errorName = document.querySelector(".errorName");
const errorlastName = document.querySelector(".errorLastName");
const errorImage = document.querySelector(".errorImage");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");
const errorMessages = document.querySelectorAll(".errorMessage");


// recorriendo todos los mensajes de error y los ocultamos
function resetFormErrors() {
    console.log('hola')
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none"
    })
}

email.addEventListener("focus", resetFormErrors)
password.addEventListener("focus", resetFormErrors)

form.addEventListener("submit", function(e) {
    let errors = false

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

    if (firstName.value.length == 0){
        errorName.innerText = "Por favor, complete su name"
        errorName.style.display = "block"
        errors = true 
    } else if (firstName.value.length < 5) {
        errorName.innerText = 'El mail es incorrecto'
        errorName.style.display = "block"
        errors = true
    } 


    if (lastName.value.length == 0){
        errorlastName.innerText = "Por favor, complete su email"
        errorlastName.style.display = "block"
        errors = true 
    } else if (lastName.value.length < 5) {
        errorlastName.innerText = 'El mail es incorrecto'
        errorlastName.style.display = "block"
        errors = true
    } 


    if (email.value.length == 0){
        errorEmail.innerText = "Por favor, complete su email"
        errorEmail.style.display = "block"
        errors = true 
    } else if (email.value.length < 5) {
        errorEmail.innerText = 'El mail es incorrecto'
        errorEmail.style.display = "block"
        errors = true
    } 

    // con que haya un solo campo con error, ya no se va a enviar el formulario
    if (errors) {
        e.preventDefault()
    }

})





