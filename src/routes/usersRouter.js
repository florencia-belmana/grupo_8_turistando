const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const multer = require ('multer');
const path = require('path');path-multer
const controller  =  require ( '../controllers/usersController' );

///C
const validate = require('../middlewares/usersValidation')


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/users/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        //VER SI FUNCIONARIA ALGO ASI:
        // const newFilename = 'imageusuario' + Date.now() + path.extname(file.originalname);
        //cb(null, newFile);     }

        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });



router.get( '/login' , controller.login ) ;
router.get( '/register' , controller.register );
// router.get( '/detail' , controller.detail );

router.get('/userList', controller.userList);
router.get('/userList/:id', controller.show);

//vendria a ser el register
//router.get('/create', controller.create);

//Procesa el formulario de creación
router.post('/', upload.single('image'), controller.store); 
router.get('/:id/edit', controller.edit);
router.put('/:id', upload.single('image'), controller.update);
router.delete('/:id', controller.destroy);

//// Proceso form de login
router.post('/login', validate.login, controller.authenticate);
router.get('/logout', controller.logout);

/// sequalize - crear usuarios
//router.get("/crear")
router.get( '/register' , controller.register );

module.exports = router