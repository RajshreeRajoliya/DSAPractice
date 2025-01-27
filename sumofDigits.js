
    let num = 211
function sumOfdigit(num){
    let sum = 0
    while(num > 0 ){
        let r = num % 10
        sum += r
        num = Math.floor(num / 10)   
       
    }
   
   return sum 
}
console.log(sumOfdigit(num))
