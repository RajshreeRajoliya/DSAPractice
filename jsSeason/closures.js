

function outer(){
  let c = 0
  function inner(){
  c++
  return c
  }
  return inner
}
let ans = outer()
console.log(ans())
console.log(ans())



function timer(){
  for(var i = 0 ; i < 5 ; i++){
  function save(j){
    setTimeout(()=>{
      console.log(j)
          },1000)
  }
  
   save(i)
  }
  
}
timer()