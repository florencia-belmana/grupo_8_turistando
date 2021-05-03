
const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsController' )

router.get( '/buenosaires' , controller.buenosaires ) ;
router.get( '/carrito' , controller.carrito )


router.get( '/paquetes' , controller.paquetes ) ;

router.get( '/paquete1' , controller.paquete1 ) ;
router.get( '/paquete2' , controller.paquete2 ) ;
router.get( '/paquete3' , controller.paquete3 ) ;

/// sequalize - crear productos 
router.get("/crear", controller.crear)
router.post("/crear", controller.guardar)



module.exports = router