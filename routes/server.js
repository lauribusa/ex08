const express = require('express');
const router = express.Router();
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinController = require(`${process.cwd()}/controllers/magasinController`)

router.get('/',pagesController.home);
router.get('/about', pagesController.about);
router.get('/magasins/add', magasinController.addMagasin);
router.post('/magasins/add', magasinController.upload, magasinController.resize, magasinController.createMagasin);
router.get('/magasins/:id/edit', magasinController.editMagasin);
router.post('/magasins/add/:id', magasinController.upload, magasinController.resize,magasinController.updateMagasin);
router.get('/magasins/:slug', magasinController.getMagasinBySlug);

module.exports = router;