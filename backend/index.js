const express = require("express");
const app = express();
const cors = require("cors");
const {connection} = require("./Config/db");
require("dotenv").config()

app.use(cors);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page");
})


app.listen(process.env.port, async () => {
    try{
        await connection;
        console.log("Connected to DB");
    }catch(err){
        console.log("Cannot connect to DB");
        console.log(err);
    }
    console.log(`Server is running at port ${process.env.port}`);
})