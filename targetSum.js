
function sumTarget(arr , target){
  
 for(let i = 0 ; i < arr.length ; i++){
    for(let j = i + 1 ; j < arr.length ; j++){
        if(arr[i] + arr[j] == target){
            return [i , j]
        } 
    }
 }
 return -1
}
// console.log(sumTarget(arr , target))

let target = 6
let arr = [4 , 7 , 11 , 2]
function sumT(target , arr){
   let obj = {}
   for(let i = 0 ; i< arr.length ; i++){
    let n = arr[i]
    if(obj[target - n] >= 0){
        return [obj[target - n],i]
    }
    obj[n] = i
   }
}
console.log(sumT(target, arr))