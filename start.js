const [major,minor]=process.versions.node.split('.').map(parseFloat);
if(major <7 || major === 7 && minor <= 5){
    console.log('Node version of the server is too low.');
    throw('Node version of the server is too low for modern node apps.');
}

const app = require(`${process.cwd()}/app`);

app.set('port',process.env.PORT || 8000);
const server = app.listen(app.get('port'),()=>{
    console.log(`express running - PORT ${server.address().port}`)
});