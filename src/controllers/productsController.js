let db = require ("../../database/models")


module.exports = {
    buenosaires:(req, res)  =>  {
        res.render ('products/buenosaires')
        },
        
    carrito:(req, res) => {
            res.render ("products/carrito", {
    
            })
        },
    
       //esto no sirve ahora, era uno general para que contenga todos los dem+
        //paquetes:(req, res) => {
           // res.render ("products/paquetes", {
    
          //  })
   //     },

        paquete1:(req, res) => {
            res.render ("products/paquete1", {
    
            })
        },

        paquete2:(req, res) => {
            res.render ("products/paquete2", {
    
            })
        },

        paquete3:(req, res) => {
            res.render ("products/paquete3", {
    
            })
        },

        //crear productos
        
       crear:(req, res) => {
           res.render ("products/crear")

        },

        guardar:(req, res) => {
            res.send (req.body)
 
         },

    };


   

