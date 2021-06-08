//traigo la data de carrito
const productos = JSON.parse(sessionStorage.getItem("productos"));

const borrar = sessionStorage.removeItem("productos");

console.log(productos)



window.addEventListener('load', function(){
const contenedorCarrit = document.querySelector("#carrito tbody")

 
//mostrar el carrito de compras en el HTML

function carritoHTML(){

   /*  //limpiar el HTML
    limpiarHTML(); */

    productos.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML =  `
        <td class="carritodetailpic"><img class="fot" src="${producto.imagen}" alt="picture" ></td> 
        <td class="carritodetail"> ${producto.nombre} </td>
        <td class="carritodetail"> ${producto.precio} </td>
        <td class="carritodetail"> ${producto.descripcion} </td>
     
        `;
        
       console.log(row)
       //agrega el html del carrito en el tbody
       contenedorCarrit.appendChild(row)
       
    }); 

} 

    carritoHTML();

    const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")

 vaciarCarritoBtn.addEventListener('click', function() {
    
    // Elimina el nombre guardado del almacenamiento web
    sessionStorage.removeItem("productos");
        
  });
})

/* function limpiarHTML(){
    contenedorCarrit.innerHTML="";
} */
