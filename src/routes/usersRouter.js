const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const multer = require ('multer');
const path = require('path');

const  controller  =  require ( '../controllers/usersController' );



//ver si funcuina hasta upload
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/users/'));
    },
    filename: (req, file, callback) => {
        // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });




router.get('/listado', controller.userList);
router.get( '/login' , controller.login ) ;
router.get( '/register' , controller.register );
router.get( '/detail' , controller.detail );


//
//router.get('/:id', controller.show);
//router.post('/', upload.single('image'), controller.store); // Procesa el formulario de creación
//router.get('/:id/edit', controller.edit);
//router.put('/:id', upload.single('image'), controller.update);
//router.delete('/:id', controller.destroy);



module.exports = router