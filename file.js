
//create file
// const fs =require("fs")


// const [,,val] = process.argv

// for (let i = 1; i <=val; i++){
//     const quote = "no beauty shines brighter than that of a good heart"
//     fs.writeFile(`./backup/text${i}.html`,quote,(err)=>{
//         console.log("completed")
//     })

// }
//awasome.html



//read file
const fs =require("fs")
const [,,val] = process.argv
// 
getfile(val)

function getfile(val){
    if(val > 100){
        return ;
    }
    for (let i = 1; i <=val; i++){
        const quote = "no beauty shines brighter than that of a good heart"
        fs.writeFile(`./backup/text${i}.html`,quote,(err)=>{
            console.log("completed")
        })
    
    }
//     fs.readFile("./cool123.txt","utf-8",(err,data)=>{
// if(err){
//     console.log("read error",err)
// }
// else{
//     console.log(data)
// }
//     });

//update file
// const quopte3 = "Dream as well"
// fs.appendFile("./fun.txt","\n"+quopte3,(err)=>{
//     console.log("completed updating")
// }
// )
//delete file 

// fs.unlink("./delete.txt",(err)=>{
// console.log("delete completed")
// }
// )

}


