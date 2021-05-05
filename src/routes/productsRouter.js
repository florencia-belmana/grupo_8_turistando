
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
        // Mejor usar algo como esto en lugar de Date.now()
        //VER SI FUNCIONARIA ALGO ASI:
        // const newFilename = 'imageusuario' + Date.now() + path.extname(file.originalname);
        //cb(null, newFile);     }
        
        callback(null, 'destino' + path.extname(file.originalname));
    }
});
const upload = multer({ storage });



router.get( '/buenosaires' , controller.buenosaires ) ;
router.get( '/carrito' , controller.carrito )


// router.get( '/paquetes' , controller.paquetes ) ;

/* router.get( '/paquete1' , controller.paquete1 ) ;
router.get( '/paquete2' , controller.paquete2 ) ;router.get( '/paquete3' , controller.paquete3 ) ; */

/// sequalize - crear productos 
router.get("/products", controller.crear)
router.get("/crear", controller.crear)
router.post("/crear", upload.single('image'), controller.guardar)

//lectura
router.get("/lista", controller.lista)
router.get("/lista/:id", controller.detail)

router.get("/edit/:id", controller.getproduct)
/*router.put("/edit/:id", controller.update) */


module.exports = router