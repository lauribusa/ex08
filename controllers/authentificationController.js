const passport = require('passport');

exports.login = passport.authenticate('local',{
    failureRedirect: '/about',
    successRedirect:'/',
    failureFlash: true
});


exports.isLoggedIn = (req,res,next) => {
    if(req.isAuthenticated()){
        next();
        return
    }
    res.redirect('/login');
}

exports.logout = (req,res) =>{
    req.logout();
    res.redirect('/');
}