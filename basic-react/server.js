// const express = require('express')
// const mongoose = require('mongoose')
// var cors = require('cors')

// const app = express();
// const port = 8090;

// app.use(cors())
// app.use(express.json)

// const uri = 'mongodb://127.0.0.1:27017/customers';
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('MongoDB connected Successfully');
// })

// const customerRouter = require('./routes/customer');
// app.use('/customers', customerRouter);

// app.listen(port, () => {
//     console.log(`Server is Running on Port: ${port}`);
// })


const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const uri = "mongodb://127.0.0.1:27017/customers";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection establised successfully");
});

const customerRouter = require("./routes/customer");
app.use("/customers", customerRouter);

app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});