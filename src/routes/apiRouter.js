const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const controller  =  require ( '../controllers/apiController' );


/* router.get( '/productsList' , controller.productsList );
router.get( '/productDetail/:id' , controller.productDetail );
router.post( '/productCreate' , controller.productCreate );
router.put( '/productUpdate/:id' , controller.productUpdate );
router.delete('/productDestroy', apiController.productDestroy);

 */
module.exports = router