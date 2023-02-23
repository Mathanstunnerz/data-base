// celsius to feranhit
const dd = (n) =>{
   return (n*(9/5) +32).toFixed(2)

} 
const [,,celsius] =process.argv
console.log( dd(celsius))