const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('listening on port 8000');
})

app.listen(8000,()=>console.log('listening on port 8000 successfully'));

app.get('/about',(req,res)=>{
    res.send('about page');
})
