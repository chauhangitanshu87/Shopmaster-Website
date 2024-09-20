const express = require('express')
const app =express();
const port = 5000
require("./db/config")
const User = require('./db/User');

const cors = require('cors');



app.use(express.json())
app.use(cors());

app.post('/register', async (req,resp)=>{
    let user = new User(req.body)
    let result = await user.save();
    resp.send(result);
})



app.listen(port, ()=>{
    console.log(`shopmaster backend listening at http:localhost:${port}`)
})