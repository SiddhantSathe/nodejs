console.log("I'm fine, thanks");
//a way to export the module it can be exported as a function or as an object. it won't be overriden by the last one
exports.world = console.log('Hello World');
//a way to export the module it can be exported as a function or as an object. it will be overriden by the last one
module.exports=hello.js;