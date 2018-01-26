const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.newUser=(req,res,next)=>{
    res.render('register')
}

exports.login=(req,res,next)=>{
    res.render('login');
}

exports.validateRegister=(req,res,next)=>{
    req.sanitizeBody('name'); 
    req.checkBody('name', "vous devez entrer un nom").notEmpty();
    req.checkBody('email', "Il faut un email, sacripan").notEmpty();
    req.checkBody('pswd', "Le password est vide putain de couillon").notEmpty();
    req.checkBody('pswd-confirm', "La confirmation n'est pas correcte").notEmpty();
    req.checkBody('pswd-confirm', "Le password n'est pas identique").equals(req.body.pswd);
    console.log(req.body);
    const errors = req.validationErrors();
    if(errors){
        res.render('register',{'user':req.body,"errors":errors});
    } else {
      next();
    }
}

exports.register= async(req,res,next)=>{
    const user = await new User({email: req.body.email,name:req.body.name});
    const register = promisify(User.register,User);
    try{
        await register(user,req.body.pswd);
    } catch (e){
        console.log(e);
    }
    next();
}

exports.registerAfter = (req,res) =>{
    res.redirect('/');
}