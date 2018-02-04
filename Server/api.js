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


router.post(`${requestMapping}/order`,(req,res)=>{
    var order = req.body;
    order.arrivalInMin = 30;
    serverData.orders.push(order);
    console.log('orders'+JSON.stringify(serverData.orders));
    res.send(JSON.stringify(order));
});

module.exports = router;

