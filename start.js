const [major,minor]=process.versions.node.split('.').map(parseFloat);
if(major <7 || major === 7 && minor <= 5){
    console.log('Node version of the server is too low.');
    throw('Node version of the server is too low for modern node apps.');
}
//Launch Mongo Connection
require('dotenv').config({path:'.variables.env'})
const mongoose = require('mongoose')

// Mongo utilise par défaut callback et promesses propre à elle. Ceci permet d'utiliser les promesses propres à Node.
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST,(err)=>{
    if(err) console.log('There is an issue with the connection to the database')
    console.log('Mongo is now connected and ready for requests.')
})
//Start our app if everything is okay and initialized.
require(`${process.cwd()}/models/magasin`)


const app = require(`${process.cwd()}/app`);

app.set('port',process.env.PORT || 8000);
const server = app.listen(app.get('port'),()=>{
    console.log(`express running - PORT ${server.address().port}`)
});