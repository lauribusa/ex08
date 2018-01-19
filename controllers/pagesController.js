exports.home = (req,res)=>{
    res.render('index', {title: "My home page", test:'ceci est un fuckin test'});
}

exports.about = (req,res)=>{
    res.render('about', {title: "HPC", test:"Mon petit cette paix est ce pourquoi lutte tous les vrais guerriers", layout:'layouts/about.hbs'});
}

