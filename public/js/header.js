//box cerraste sesión

window.addEventListener("load", function() {
    let closeButtom = document.querySelector(".close-button")
    closeButtom.addEventListener("click", function(){
        alert ("Cerraste sesión")
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