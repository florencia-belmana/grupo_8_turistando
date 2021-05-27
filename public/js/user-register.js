const form = document.querySelector("#register-form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const image = document.querySelector("#image");
const password = document.querySelector("#password");

const errorName = document.querySelector(".errorName");
const errorLastName = document.querySelector(".errorLastName");
const errorImage = document.querySelector(".errorImage");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");
const errorMessages = document.querySelectorAll(".errorMessage");


// recorriendo todos los mensajes de error y los ocultamos
function resetFormErrors() {
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none"
    })
}

email.addEventListener("focus", resetFormErrors)
password.addEventListener("focus", resetFormErrors)
firstName.addEventListener("focus", resetFormErrors)
lastName.addEventListener("focus", resetFormErrors)
image.addEventListener("focus", resetFormErrors)

form.addEventListener("submit", function(e) {
    let errors = false

    // llamamos a la función que oculta los mensajes de error
    resetFormErrors()

    /* Name */
    if (firstName.value.length == 0){
        errorName.innerText = "Por favor, complete su nombre"
        errorName.style.display = "block"
        errors = true 
    } else if (firstName.value.length < 1) {
        errorName.innerText = 'El nombre es incorrecto'
        errorName.style.display = "block"
        errors = true
    } /* LastName */
    if (lastName.value.length == 0){
        errorLastName.innerText = "Por favor, complete su apellido"
        errorLastName.style.display = "block"
        errors = true 
    } else if (lastName.value.length < 1) {
        errorLastName.innerText = 'El apellido es incorrecto'
        errorLastName.style.display = "block"
        errors = true
    } /* email */
    if (email.value.length == 0){
        errorEmail.innerText = "Por favor, complete su email"
        errorEmail.style.display = "block"
        errors = true 
    } else if (email.value.length < 5) {
        errorEmail.innerText = 'El mail es incorrecto'
        errorEmail.style.display = "block"
        errors = true
    } /*IMG 
    if (image.value.length == 0){
        errorImage.innerText = "Por favor, complete su email"
        errorImage.style.display = "block"
        errors = true 
    } else if (email.value.length < 5) {
        errorImage.innerText = 'El mail es incorrecto'
        errorImage.style.display = "block"
        errors = true
    } */
     /* PW */
    if (password.value.length == 0){
        errorPassword.innerText = "Por favor, complete su contraseña"
        errorPassword.style.display = "block"
        errors = true
    } else if (password.value.length < 4) {
        errorPassword.innerText = 'La contraseña tiene que tener minimo 5 caracteres'
        errorPassword.style.display = "block"
        errors = true
    } 

    if (errors) {
        e.preventDefault()
    }

})





