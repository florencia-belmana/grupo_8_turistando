const db = require ("../../database/models");


module.export = {
    listar: (req, res) =>{
         db.Product.findAll()
            .then(products => {
                res.json({
                    data: products,
                    status: 'success'
                
             })

        })
    } 
} 
 