const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsController' )

router.get( '/buenosaires' , controller.buenosaires ) ;

module.exports = router