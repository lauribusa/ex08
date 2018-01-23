const multer = require('multer')
const mongoose = require('mongoose')
const magasin = mongoose.model('magasin');
const jimp = require('jimp');
const uuid = require('uuid');

exports.addMagasin=(req,res)=>{
    res.render('magasin_edit', {magasin:{}})
}

exports.createMagasin=async (req,res)=>{
    const magg= await new magasin(req.body).save()
    console.log(req.body)
    res.redirect('/');
}

exports.editMagasin= async(req,res)=>{
    const mog = await magasin.findOne({_id: req.params.id})
    if (!mog) return next();
    res.render('magasin_edit', {"magasin": mog}); 
}

exports.getMagasinBySlug = async (req,res) =>{
    const mags = await magasin.findOne({slug: req.params.slug})
    res.render('magasin_details',{magasin:mags})

}

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req,file, next){
        const isPhoto = file.mimetype.startsWith('image/')
        if(isPhoto){
            next(null, true)
        } else{
            next({message: 'This filetype is not allowed'});
        }
    }
}

exports.upload = multer(multerOptions).single('photo');
exports.resize = async (req,res,next) => {
    if(!req.file){
        next();
        return;
    } else {
        const extension = req.file.mimetype.split('/')[1]
        req.body.photo = `${uuid.v4()}.${extension}`;
        const photo = await jimp.read(req.file.buffer);
        await photo.resize(800,jimp.AUTO);
        await photo.write(`${process.cwd()}/public/uploads/${req.body.photo}`)
        next();
    }
}

exports.updateMagasin = async(req,res) =>{
    const mag = await magasin.findByIdAndUpdate({_id: req.params.id},req.body,{new:true}).exec()
    res.redirect(`/magasins/${req.body.slug}`);
}