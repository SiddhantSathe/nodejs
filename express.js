const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send(`home page ${req.query.name}`);
})

app.listen(8000,()=>console.log('listening on port 8000'));