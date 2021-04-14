const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsControllers' )

router.get( '/buenosaires' , controller.buenosaires ) ;
