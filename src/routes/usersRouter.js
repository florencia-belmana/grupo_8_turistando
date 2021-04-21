const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;


const multer = require ('multer');

/*copy del codigo*/
/*const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/users/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });*/





const  controller  =  require ( '../controllers/usersController' )

router.get( '/login' , controller.login ) ;
router.get( '/register' , controller.register );
router.get( '/detail' , controller.detail );

module.exports = router