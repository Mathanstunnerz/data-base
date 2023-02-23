const os =require("os");
console.log("free memory in gb",(os.freemem()/1024/1024/1024).toFixed(2))
// console.log("total memory in gb",(os.totalmem()/1024/1024/1024).toFixed(2))
// template litrel
console.log(`total memory in gb,${(os.totalmem()/1024/1024/1024).toFixed(2)}`)


