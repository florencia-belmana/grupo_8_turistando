
const  express  =  require ( 'express' ) ;
const  router = express.Router ( ) ;
const  controller  =  require ( '../controllers/productsController' )
const multer = require ('multer');
const path = require('path');path-multer


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images/destinos/'));
    },
    filename: (req, file, callback) => {
        
        callback(null, 'destino' + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


router.get( '/buenosaires' , controller.buenosaires ) ;
router.get( '/carrito' , controller.carrito )

//RUTAS VIEJAS ANTES DE DB
// router.get( '/paquetes' , controller.paquetes ) ;

/* router.get( '/paquete1' , controller.paquete1 ) ;
router.get( '/paquete2' , controller.paquete2 ) ;router.get( '/paquete3' , controller.paquete3 ) ; */

/// SEQUELIZE
//CREAR
router.get("/products", controller.crear)
router.get("/crear", controller.crear)
router.post("/crear", upload.single('image'), controller.guardar)

//LECTURA
router.get("/lista", controller.lista)
router.get("/lista/:id", controller.detail)

//EDICION
router.get("/admin/edit/:id", controller.getproduct)
router.put("/admin/edit/:id", controller.update) 

//DELETE

router.delete('/admin/delete/:id', controller.destroy);

module.exports = router