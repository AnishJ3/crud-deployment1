
const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute");
const cors = require("cors");
const bodyParser = require("body-parser");


//MongoDB Atlas Connection

mongoose.connect("mongodb+srv://test:12345@cluster0.ybqy7fj.mongodb.net/schooldb");

var db = mongoose.connection;
mongoose.set('strictQuery', true);

db.on("open" , ()=> console.log("Connected to DB"));

db.on("error", () => console.log("Error occurred"));

// Creating a app
const app = express();

// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/students",studentRoute);


// Listening to a port
app.listen(4000, ()=>{
    console.log("Server started at 4000");
})