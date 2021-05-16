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