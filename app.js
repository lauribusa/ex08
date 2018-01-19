const express = require(express);
const app = express();
const routes = require(`${process.cwd()}/routes`)
app.get('/', (req,res) =>{
    app.send('Hey there chump');
});

app.use('/',routes);

module.exports = app ;