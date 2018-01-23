const mongoose = require('mongoose')
const magasin = mongoose.model('magasin');

exports.home = async (req,res)=>{
    const magasins = await magasin.find();
    console.log(magasins);
    
    res.render('index', {title: "My home page", magasins: magasins});
}

exports.about = (req,res)=>{
    res.render('about', {title: "HPC", test:"Mon petit cette paix est ce pourquoi lutte tous les vrais guerriers", layout:'layouts/about.hbs'});
}
