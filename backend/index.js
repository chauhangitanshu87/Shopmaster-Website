const express = require('express')
const app =express();
const port = 5000
require("./db/config")
const User = require('./db/User');
const Product = require("./db/Product")

const cors = require('cors');



app.use(express.json())
app.use(cors());

app.post('/register', async (req,resp)=>{
    let user = new User(req.body)
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result);
})


app.post("/login", async (req,resp)=>{
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "No User found" })
        }
    } else {
        resp.send({ result: "No User found" })
    } 
})


app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
}) ;



// app.post("/add-product", async (req, resp) => {
//     const { userId, ...productData } = req.body; // Destructure userId from the request body

//     // Add the userId to the product object before saving
//     let product = new Product({
//         ...productData,
//         userId: userId  // Assign userId to the product
//     });

//     let result = await product.save();
//     resp.send(result);
// });


app.get("/products", async (req,resp)=>{
    const products = await Product.find();
    if (products.length>0){
        resp.send(products)
    }
    else{
        resp.send({"result":"No Product found"})
    }
});

app.delete("/product/:id", async (req,resp)=>{
    let result = await Product.deleteOne({_id:req.params.id});
    
     resp.send(result)
   

})

app.get("/product/:id",async (req, resp)=>{
    let result  = await Product.findOne({_id:req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})

app.put("/product/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
});

// Api for search Product 
app.get("/search/:key",async (req,resp) => {
    let result = await Product.find(
        {
            "$or":[
                {
                    name: {$regex: req.params.key}
                },
                {
                    category: {$regex: req.params.key}
                },
                {
                    company: {$regex: req.params.key}
                }

            ]
        }
    )
    resp.send(result)
}) 


app.listen(port, ()=>{
    console.log(`shopmaster backend listening at http:localhost:${port}`)
})