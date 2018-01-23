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
    req.checkBody('pswd-confirm', "Le password n'est pas identique").equals(req.body.password);
    const errors = req.validationErrors();
    if(errors){
        res.render('register',{"errors":errors});
    }
    next();
}

exports.register=(req,res,next)=>{
    
    res.render('register');
}