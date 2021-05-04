let db = require ("../../database/models");
// const products = require("../../database/models/products");


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
            db.Products.findAll()
            .then(function(Products){
                return res.render("/crear", {Products})
            })
            .catch((error) => {
                console.log(error);
                res.send("Ha ocurrido un error");
              });

        },

        guardar: function (req, res) {
            db.Products.create({
                product_name: req.body.product_name,
                title: req.body.title ,
                price: req.body.price,
                image: req.body.image ,
                description: req.body.description,


            })
            .then(() => {
             //   res.redirect(`/productos/${id}`);
             res.redirect("products/listaProductos")
              })

            .catch((errors) => {
                console.log(errors);
              });
            

 
         },
         listado: function (req, res){
             db.Products.findAll()
                .then(function(products) {
                    res.render("products/listaProductos", {products})
                }   )
         },
   

    };


   

