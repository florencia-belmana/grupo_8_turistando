//Variables
const carrito = document.querySelector("#carrito");
const listaProductos = document.querySelector("#product-list");
let productosCarrito =[];

 cargarEventListener(); 
function cargarEventListener(){
    //agregar producto 
    listaProductos.addEventListener("click", agregarProducto)

}

let closeButtom = document.querySelector(".agregar-carrito")
closeButtom.addEventListener("click", function(){
    alert ("Producto Agregado!")
})


//Funciones
function agregarProducto(e){
    e.preventDefault();


    if(e.target.classList.contains("agregar-carrito")){
        const productoSeleccionado= e.target.parentElement
        leerDatosProducto(productoSeleccionado)
    }
    

}

//leer contenido del html al que le dimos click y extrae la info
function leerDatosProducto(producto){
/*     console.log(producto)
 */
    //crear un objeto con los datos del producto
    const infoProducto= {
        nombre: producto.querySelector("h2").textContent,
        imagen: producto.querySelector("img").src,
        precio: producto.querySelector(".precio").textContent,
        descripcion: producto.querySelector(".descripcion").textContent,
        cantidad: producto.querySelector(".descripcion")
    }
    /* console.log(infoProducto) */

    //Agrega elementos al array de carritos
    productosCarrito = [...productosCarrito, infoProducto];

    console.log(productosCarrito);

    //guardo en localStorage para pasarlo al carrito
    sessionStorage.setItem("productos", JSON.stringify(productosCarrito));
}





