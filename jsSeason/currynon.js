function add(x){
    if(arguments.length > 1){
        let sum = 0
        for(let i = 0 ; i < arguments.length ; i++){
           sum += arguments[i]
        }
        return sum
    } else {
        return function(y){
            return x + y
        }
    }
}
console.log(add(90)(3))
console.log(add(1 , 8))