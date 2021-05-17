//box cerraste sesión

window.addEventListener("load", function() {
    let closeButtom = document.querySelector(".close-button")
    closeButtom.addEventListener("click", function(){
        alert ("Hey! Cerraste sesión")
    })
});

// cambio de color de texto al hacer click

window.addEventListener("load", function(){
    let vinculos = document.querySelectorAll(".vinculo")
    for (let i = 0; i < vinculos.length; i++){
        vinculos[i].addEventListener("click", function(){
            this.style.color = "purple"
        }) 
    }
})

// mostrar ocultar login register // carrito cerrar sesion
//let user = req.session.user
/*  window.addEventListener("load", function() {
    let guest = document.querySelector("#guest")
    if (user) { guest.style.display="none"}
});
window.addEventListener("load", function() {
    let user2 = document.querySelector("#user")
    if (user) { user2.style.display="block"}
}); */