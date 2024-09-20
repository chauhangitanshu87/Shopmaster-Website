const express = require('express')
const app =express();

const port = 3000

app.get('/',(req,resp)=>{
    resp.send('route working perfectly')
})

app.listen(port, ()=>{
    console.log(`shopmaster backend listening at http:localhost:${port}`)
})