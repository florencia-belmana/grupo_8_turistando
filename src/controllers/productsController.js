const db = require ("../../database/models");
//const products = require("../../database/models/products");

// validacion
const { validationResult } = require('express-validator');


module.exports = {
 
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
        //respecta a validation: si hay error me vuelve a crear,
        //sino, me llevea a la lista de todos los products.
        let errors = validationResult(req);
            if(errors.isEmpty()){
                let product = req.body;
         

        //hasta acá es validation
            if (req.file) {
            let productImage = req.body;
            
                console.log(req.file)
                productImage.image = req.file.filename;
            } 
            
            db.Products.create({
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
            

            }
            else {
                res.render("products/crear", { errors: errors.array(),
                old: req.body
                });
            }
            
    },

    lista: function (req, res){
        db.Products.findAll()
            .then(products => {
                products.forEach(producto => {
                    if (producto.image == "")
                        producto.image = 'default.png'
                });
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
       /*  if (req.file) {
            let productImage = req.body;
            
                console.log(req.file)
                productImage.image = req.file.filename;
            }  */
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
   
    carrito:(req, res) => {
         res.render ("products/carrito", {
        })
    },


   //No se usan mas
   buenosaires:(req, res)  =>  {
    res.render ('products/buenosaires')
    }
    
     /*  esto no sirve ahora, era uno general para que contenga todos los dem+
        paquetes:(req, res) => {
           res.render ("products/paquetes", {
    
        })
       },
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
        },*/


}



