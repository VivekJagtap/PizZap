const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('API of Thinking out loud is working!!');
});


var requestMapping = '/server'; 
 
var serverData = require('./data.json');

router.get(`${requestMapping}`,(req,res)=>{
    res.send('User resource is working fine'+JSON.stringify(serverData));
});


router.get(`${requestMapping}/pizzas`,(req,res)=>{
    res.send(serverData.pizzas);
});

module.exports = router;

