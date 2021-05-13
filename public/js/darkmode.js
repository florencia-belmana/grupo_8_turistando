
let opcion = confirm("Elejir un modo");
if (opcion == true) {
    document.querySelector('body').classList.remove(".light")
    document.querySelector('body').classList.add(".dark")

} else {
    document.querySelector('body').classList.remove(".dark")
    document.querySelector('body').classList.add(".light")
}

function myFunction() {
    document.querySelector('body').classList.toggle(".dark");
 }
