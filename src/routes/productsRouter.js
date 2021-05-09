const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsController' )
const multer = require ('multer');
const path = require('path');path-multer


//VALIDACION - directamente acá
const { body } = require('express-validator')
const validateCreateProducts = [ 
        body('title').notEmpty().withMessage('El campo debe contener el titulo'),
        body('description').notEmpty().withMessage('El campo debe contener una decripcion del producto'),
        body('price').notEmpty().withMessage('El campo debe tener el precio'),
    
];



//multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/destinos/'));
    },
    filename: (req, file, callback) => {
        
        callback(null, 'destino-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


router.get( '/buenosaires' , controller.buenosaires ) ;
router.get( '/carrito' , controller.carrito )

//RUTAS VIEJAS ANTES DE DB
// router.get( '/paquetes' , controller.paquetes ) ;

/* router.get( '/paquete1' , controller.paquete1 ) ;
router.get( '/paquete2' , controller.paquete2 ) ;router.get( '/paquete3' , controller.paquete3 ) ; */

/// SEQUELIZE - CRUD -
//CREAR
router.get("/products", controller.crear)
router.get("/crear", controller.crear)
router.post("/crear", upload.single('image'), validateCreateProducts ,controller.guardar)

//LECTURA - READ
router.get("/lista", controller.lista)
router.get("/lista/:id", controller.detail)

//EDICION - UPDATE
router.get("/admin/edit/:id", controller.getproduct)
router.put("/admin/edit/:id", upload.single('image'),controller.update) 

//DELETE
router.delete('/admin/edit/:id', controller.destroy);



module.exports = router