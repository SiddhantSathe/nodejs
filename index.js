const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url}new request recieved\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        console.log(req.headers);
        res.end('Hello from the server');
    })
});
server.listen(8000,()=>console.log('listening on port 8000'));