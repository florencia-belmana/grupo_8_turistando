const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsController' )

router.get( '/buenosaires' , controller.buenosaires ) ;
router.get( '/carrito' , controller.carrito )


router.get( '/bairesnoche' , controller.bairesnoche ) ;


module.exports = router