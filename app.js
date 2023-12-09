const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});
const app=express();
const mysql=require ('mysql');
const path=require('path');

const db=mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE 
});
db.connect(err=>{
    if(err)
    console.log("error connecting to db");
    else
    console.log("connected");
})
const publicDirectory= path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.set('view engine','hbs');

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(3000,()=>{
console.log("running on 300")
});