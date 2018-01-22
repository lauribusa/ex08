const express = require('express');
const router = express.Router();
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinController = require(`${process.cwd()}/controllers/magasinController`)

router.get('/',pagesController.home);
router.get('/about', pagesController.about);
router.get('/magasins/add', magasinController.addMagasin);
router.post('/magasins/add', magasinController.createMagasin, magasinController.upload, magasinController.resize);
router.get('/magasins/:slug', magasinController.getMagasinBySlug);



module.exports = router;