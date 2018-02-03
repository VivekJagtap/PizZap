const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

/**
 * Initialize express app.
 */
const app = express();

/**
 * app should use the body-parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const api = require('./Server/api');

app.use('/api',api);
/**
* Dont really know why this is taken.
*/
app.use(express.static(path.join(__dirname,'dist')));

/**
* All the other requests which are not specified in the api.js will automatically get redirected to index page.
*/
app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'/index.html'));
});


app.get('/server/pizzas',(req,res)=>{
    res.send({pizza:"its yummy"});
})

/**
 * Create app server on port:properties.port 
 */
app.set('port','8080');
const server =http.createServer(app);

/**
 * Listen on properties.port.
 */
server.listen('8080',()=>{
    console.log('Server running on port : 8080..');
});