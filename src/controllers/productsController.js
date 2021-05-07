const db = require ("../../database/models");
//const products = require("../../database/models/products");

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

//CREAR PRODUCTOS
        
       crear:(req, res) => {
           
           res.render ("products/crear");
            db.Products.findAll()
            .then((products)=> {
                return res.render("/lista", {products:products});
            })
            .catch((error) => {
                console.log(error);
                res.send(error);
              });

        },

        guardar: function (req, res) {
            let productImage = req.body;
            if (req.file) {
                productImage.image = req.file.filename;
            } 
            console.log(req.body)
            db.Products.create({
                product_name: req.body.product_name,
                title: req.body.title ,
                price: req.body.price,
                image: req.body.image ,
                description: req.body.description,
            })
          
            .then((products) => {
             //   res.redirect(`/productos/${id}`);
             return res.redirect("/lista")
              })

            .catch((errors) => {
                console.log(errors);
                res.send("Ha ocurrido un error")
              });

         },
         lista: function (req, res){
             db.Products.findAll()
             .then(products => {
                return res.render('admin/lista', { products })
            })
                
                .catch((errors) => {
                    console.log(errors);
                    res.send("Ha ocurrido un error")
                  });
         },

// getproduct metodo nuevo para que al editar productos me traiga solo el que tengo que editar

   getproduct: (req, res) => {
    db.Products.findByPk(req.params.id)
        .then(function (response) {
           let product = response.dataValues;
          /*  res.send(product) */
         res.render('admin/edit', { product }) 
        })
        .catch(err => console.log(err))
 
},


//DETALLE DE CADA PRODUCTO
  
  detail: (req, res) => {
        let id = req.params.id
        db.Products.findOne({ where: { id } })
            .then(product => {
                res.render('products/detail', { product })
            })
            .catch(err => console.log(err))
    },

//EDICION
    update: function (req, res) {
        db.Products.update({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image ,
            description: req.body.description,

        }, {
            where: {
                id: req.body.id
            }
        })
        .then((products) => {

         return res.redirect("/lista")
          })

        .catch((errors) => {
            console.log(errors);
            res.send("Ha ocurrido un error")
          });

    },

  //DELETE

  destroy: (req, res) => {

    const id = req.params.id
    db.Products.destroy( {
        where : {
            id
        }
    })
    .then ( () => { 
        
         res.redirect ("/")
     
    })
    .catch((errors) => {
        console.log(errors);
        res.send("Ha ocurrido un error")
      });

   },



}



