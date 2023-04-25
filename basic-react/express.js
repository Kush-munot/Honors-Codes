const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Hello World !!")
});
app.get('/users', function(req,res){
    res.send("Hello World Users!!")
});
app.get('/users/:id', function(req,res){
    const id = req.params.id;
    res.send("Hello World User "+ id +"!!")
});

app.listen(8090, (req,res) =>{
    console.log("Server Running !!");
})