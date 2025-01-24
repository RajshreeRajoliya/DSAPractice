
function fibonacci(num){
    let arr = [0 , 1]
    for(let i = 2 ; i < num ; i++){
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log(arr.join(""))
}
fibonacci(num)

function fibo(num){
    let first = 0
    let second = 1
    let val ;
    
      console.log(first)

    for(let i = 2 ; i < num ; i++){
      val = first + second
      console.log(val)
      first = second
      second = val
      
     
    }

}
fibo(num)
