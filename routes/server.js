const express = require('express');
const router = express.Router();
const pagesController = require(`${process.cwd()}/controllers/pagesController`);
const magasinController = require(`${process.cwd()}/controllers/magasinController`);
const userController = require(`${process.cwd()}/controllers/userController`);
const authentificationController = require(`${process.cwd()}/controllers/authentificationController`);
// regular
router.get('/',pagesController.home);
router.get('/about', pagesController.about);
// magasins
router.get('/magasins/add', authentificationController.isLoggedIn, magasinController.addMagasin);
router.post('/magasins/add', magasinController.upload, magasinController.resize, magasinController.createMagasin);
router.get('/magasins/:id/edit', magasinController.editMagasin);
router.post('/magasins/add/:id', magasinController.upload, magasinController.resize,magasinController.updateMagasin);
router.get('/magasins/:slug', magasinController.getMagasinBySlug);
// login
router.get('/login', userController.login);
router.post('/login', authentificationController.login);
// logout
router.get('/logout', authentificationController.logout);
// register
router.get('/register', userController.newUser);
router.post('/register', userController.validateRegister, userController.register, userController.registerAfter);
module.exports = router;