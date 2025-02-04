
function sum(a){
 return function(b){
    return function(c){
        return function(d){
            return a + b + c + d
        }
    }
 }
}
console.log(sum(1)(2)(3)(4))


const a =x=> x + x
console.log(a(10))

function add(v){
    return function(o){
        return v + o
    }
}
console.log(add(1)(3))