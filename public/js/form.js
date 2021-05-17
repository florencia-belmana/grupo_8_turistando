/* const e = require("express"); */
window.addEventListener("load", function(){

    let form = document.querySelector("#register-form");
    form.addEventListener("submit", function(e){
    /*     e.preventDefault(); */

        let errores = [];

        let campoNombre = document.querySelector("input.first_name");
        if(campoNombre.value == ""){
            errores.push("el campo debe estar completo")
        }

        let campoApellido = document.querySelector("input.last_name");
        if(campoApellido.value == ""){
            errores.push("el campo debe estar completo")
        }

        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>" 
            }
        }


    })
   
   
    });






