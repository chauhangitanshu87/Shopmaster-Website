const express = require('express')
const app =express();
const mongoose = require('mongoose')

const port = 3000

const connectDB= async ()=>{
    mongoose.connect('mongodb+srv://gitanshuchauhan:gitanshu@cluster0.q0pht.mongodb.net/e-comm?retryWrites=true&w=majority&appName=Cluster0/');
    const productSchema=new mongoose.Schema({});
    const product = mongoose.model('product',productSchema)
    const data =await product.find();
    console.warn(data);
}

connectDB();

app.listen(port, ()=>{
    console.log(`shopmaster backend listening at http:localhost:${port}`)
})