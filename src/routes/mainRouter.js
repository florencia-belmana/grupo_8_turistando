const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController')
const db = require ("../../database/models");

router.get('/', controller.index);
router.get('/index-admin', controller.indexAdmin);
router.get('/contacto', controller.contact);



module.exports = router;