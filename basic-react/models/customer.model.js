const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    lastName:{
        type:String
    },
    gender:{
        type:String
    },
    age:{
        type:Number
    },
},{
    versionKey:false
})

module.exports = mongoose.model('customers', customerSchema)