const { check } = require('express-validator');

module.exports = {
    login: [
        check('email').isEmail().withMessage('Debes completar un email valido').bail(),
        check('password')
            .notEmpty().withMessage('Debes completar la contraseña').bail()
            .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
        // check("user-type").notEmpty()
    ],
    register: [
        check('first_name')
            .notEmpty().withMessage('Debes completar el nombre').bail()
            .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
        check('last_name')
            .notEmpty().withMessage('Debes completar el apellido'),
        check('email')
            .isEmail().withMessage('Debes completar un email valido'),
        check("password")
            .notEmpty().withMessage("debes completar la contraseña").bail()
            .isLength({min: 5}).withMessage("Debe tener minimo 5 caracteres"),
       
             // check("user-type").notEmpty()

    ],
    update: [
        check('first_name')
            .notEmpty().withMessage('Debes completar el nombre')
            .isLength({ max: 20 }).withMessage('El nombre debe tener menos de 20 caracteres'),
        check('last_name')
            .notEmpty().withMessage('Debes completar el apellido'),
        check('email')
            .isEmail().withMessage('Debes completar un email valido')
             // check("user-type").notEmpty()
           
    ]
};