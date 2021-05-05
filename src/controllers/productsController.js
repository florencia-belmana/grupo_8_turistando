const db = require ("../../database/models");
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

     /*   paquete1:(req, res) => {
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
           },*/
  


        //crear productos
        
       crear:(req, res) => {
           res.render ("products/crear")
            db.Products.findAll()
            .then(function(products){
                return res.render("products/lista", {products : products})
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
             return res.redirect("products/lista", {products})
              })

            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error")
              });
            

 
         },
         lista: function (req, res){
             db.Products.findAll()
             .then(products => {
                return res.render('products/lista', { products })
            })
                
                .catch((errors) => {
                    console.log(errors);
                    res.send("Ha ocurrido un error")
                  });
         },
   
     //detail nueno 
  
   
  detail: (req, res) => {
        // Implementar APIs, levantarlas con JS y borrar el resto, dejar solo esta
        // return res.render('productDetail')
        let id = req.params.id
        db.Products.findOne({ where: { id } })
            .then(product => {
                res.render('products/detail', { product })
            })
            .catch(err => console.log(err))
    },




         

    };


   
