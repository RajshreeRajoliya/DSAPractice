
let cart = ["tshirt" , "shirt" , "paint" , "skirt"]

createOrder(cart)
.then((orderId)=>{
    console.log(orderId)
    return orderId
})
.then((orderId)=>{
return proceedToPayment(orderId)
})
.then((paymentMsg)=>{
console.log(paymentMsg)
})
.catch((err)=>{
console.log(err.message)
})


function createOrder(cart){
let promise = new Promise((resolve , reject)=>{
if(!validateCart(cart)){
    reject(err)
}
let orderId = "12345"
if(orderId){
    resolve(orderId)
}
    
})
return promise
}
function proceedToPayment(orderId){
let promise = new Promise((resolve , reject)=>{
    resolve("Successfull Payment !")
})
return promise
}
function validateCart(cart){
    return true
}