const db = require("../../database/models");

module.exports = {

    productList(req, res){
        db.Products.findAll()
            .then(products => {
                res.
                    status(200)
                    .json({
                        data: products,
                        status:'success'
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status:'error',
                        error,
                    })
            })
        },


    productDetail(req, res){
            const { id } = req.params

            db.Products.findByPk(id)
                .then(product => {
                    if(!product){
                        return res.status(404)
                        .json({
                                status:'not_found'
                        })
                    }
                    res.status(200)
                        .json({
                            data:product,
                            status:'success'
                        })
                })

                .catch(error => {
                      res
                        .status(500)
                        .json({
                            status:'error',
                            error
                        })
                })
    },


    productCreate(req, resp){
        const body = req.body
        db.Product.create(body)
        .then(product => {
            res.status(200)
                .json({
                    data: product,
                    status:'success'
                })
        })
        .catch(error => {
            res
              .status(500)
              .json({
                  status:'error',
                  error
              })
      })
    },

    productUpdate(req, resp){
        const body = req.body
        db.Products.upload(body, {
            id: req.params.id
        })
        .then(() => {
            db.Products.findByPk(req.params.id)
            .then(product => {
                res.tatus(201)
                .json({
                    data: product,
                    status:'success'
                })
            })
        })
    },

    productDestroy(req, resp){
        const body = req.body
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.status(201)
                .json({
                    status:'success'
                })
            })
    },



} 