const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const multer = require ('multer');
const path = require('path');path-multer
const controller  =  require ( '../controllers/usersController' );

///C
const validate = require('../middlewares/usersValidation')

//configuracion de almacenamiento


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/users/'));
    },
    filename: (req, file, callback) => {
         callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


//Login / Register

router.get( '/login' , controller.login ) ;
router.get( '/register' , controller.register );

//Vista de usuarios
router.get('/userList', controller.userList);
router.get('/userList/:id', controller.detail);

//Procesa el formulario de creación
router.get( '/register' , controller.register );
router.post('/', upload.single('image'), controller.store); 
router.get('/:id/edit', controller.edit);
router.put('/:id', upload.single('image'), controller.update);
router.delete('/:id', controller.destroy);

//// Proceso form de login
router.post('/login', validate.login, controller.authenticate);
router.get('/logout', controller.logout);


module.exports = router