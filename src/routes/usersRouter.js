const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;

/*ACA DEBERIAMOS REQ MULTER?*/
/*const multer = require ('multer');*/

const  controller  =  require ( '../controllers/usersController' )

router.get( '/login' , controller.login ) ;
router.get( '/register' , controller.register )

module.exports = router