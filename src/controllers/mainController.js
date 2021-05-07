const db = require ("../../database/models");


module.exports = {
    
    index: (req, res) => {
       // console.log("alvaro", req.session.userLogged.user_type_id)
        db.Products.findAll()
        .then(products => {
           return res.render('index', { products })
       })
           
           .catch((errors) => {
               console.log(errors);
               res.send("Ha ocurrido un error")
             });




    },

    indexAdmin: (req, res) => {
        res.render("index-admin");
    },

    contact: (req, res) => {
        res.render("contact");
        
    },

 
};