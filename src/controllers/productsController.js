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
            db.Product.findAll()
            .then(function(productList){
                return res.render("products/lista", {products: productList})
            })
            .catch((error) => {
                console.log(error);
                res.send("Ha ocurrido un error");
              });

        },

        guardar: function (req, res) {
            db.Product.create({
                product_name: req.body.product_name,
                title: req.body.title ,
                price: req.body.price,
                image: req.body.image ,
                description: req.body.description,


            })
            .then(() => {
             //   res.redirect(`/productos/${id}`);
             return res.redirect("products/lista")
              })

            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error")
              });
            

 
         },
         lista: function (req, res){
             db.Product.findAll()
             .then(products => {
                return res.render('/lista', { products })
            })
                
                .catch((errors) => {
                    console.log(errors);
                    res.send("Ha ocurrido un error")
                  });
         },
   
     //detail nueno 
  
   
        detail(req, res) {
            let id = req.params.id
            db.products.findOne({ where: { id } })
            .then(products => {
                res.render('/lista', { products })
            })
            .catch(err => console.log(err))
                .catch(() => {
                    // la base de datos falló por algún motivo
                    res.render('error')
                })
                
        },



         

    };


   
