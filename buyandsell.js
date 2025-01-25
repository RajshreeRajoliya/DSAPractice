let arr = [7 , 1 , 5 , 3 , 6  , 4]
function buySell(arr){
let globalPr = 0
for(let i = 0; i < arr.length ; i++){
    for(let j = i + 1 ; j < arr.length ; j++){
        let currentPr = arr[j] - arr[i]
        if(currentPr > globalPr){
            globalPr = currentPr
        }
    }
}
    return globalPr
}
console.log(buySell(arr))