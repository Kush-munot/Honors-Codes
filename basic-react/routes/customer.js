const router = require('express').Router();
let Customer = require('../models/customer.model');

router.get('/', async(req,res)=>{
    try{
        const customers = await Customer.find().sort({firstName:1})
        res.json(customers)
    }catch(err){
        res.send(err)
    }
});
module.exports = router;