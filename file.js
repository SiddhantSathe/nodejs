const fs = require('fs');
const os = require('os');
console.log(os.cpus().length)
//this is synchronous
// fs.writeFileSync('todo.txt','Python\nyoutube downloader\nFull Project\ntodo list');
// //this is asynchronous
// fs.writeFile('notes.txt','sync will return a value \n async will not return a value but will expect a callback',(err)=>{}); //callback function
// //this is synchronous read
// const res=fs.readFileSync('todo.txt','utf-8');
// console.log(res);
//this is asynchronous read
// console.log('this is asynchronous read');
// fs.readFile('notes.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log('Error');
//     }
//     else{
//         console.log(result);
//     }
// })
//append
// fs.appendFileSync('todo.txt','\nmodify portfolio wesite');
//fs.mkdirSync('newFolder');
//fs.cpSync('todo.txt','copy.txt');
// fs.unlinkSync('copy.txt');