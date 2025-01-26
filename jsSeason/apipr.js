let pr1 = new Promise((res , rej)=>{
    setTimeout(()=>{
        res("Promise1 Resolved")
    },3000)
    
})
let pr2 = new Promise((res , rej)=>{
    setTimeout(()=>{
        rej("Promise2 Resolved")
    },1000)
    
})
let pr3 = new Promise((res , rej)=>{
    setTimeout(()=>{
        res("Promise3 Resolved")
    },2000)
 
})
// Promise.all([pr1 , pr2 , pr3])
// .then((res)=>{
// console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

// Promise.allSettled([pr1 , pr2 , pr3])
// .then((res)=>{
// console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

// Promise.race([pr1 , pr2 , pr3])
// .then((res)=>{
// console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

Promise.any([pr1 , pr2 , pr3])
.then((res)=>{
console.log(res)
})
.catch((err)=>{
    console.error(err)
})