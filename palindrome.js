
    let num = 121
    function checkPalindrome(num){
        let val = ""
        while(num > 0){
            let r = num % 10
            val += r
            num = Math.floor(num / 10)

        }
        return val

    }
//    let ans =  checkPalindrome(num)
//    if(Number(ans) === num){
//     console.log("Palindrome")
//    } else {
//     console.log("Not a Palindrome")
//    }


   function isPalindrome(num){
 return num === +num.toString().split("").reverse().join("")
   }
console.log(isPalindrome(num))