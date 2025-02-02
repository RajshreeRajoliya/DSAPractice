let arr1 = [1 , 2 , 3]
let arr2 = arr1
arr2.push(90)
// console.log(arr1)
// console.log(arr2)
//Deep Copy
let obj1 = {
    firstName : "Prachi",
    lastName : "Singh"
}

let obj2 = {...obj1}
obj2.firstName = "Raju"
// console.log(obj1)
// console.log(obj2)

//Another Way
let obj11 = {
    firstName : "Prachi",
    lastName : "Singh",
    location : {
    city : "pune"
    }
}

let obj12 = JSON.parse(JSON.stringify(obj11))
obj12.location.city = "mysore"
console.log(obj11)
console.log(obj12)

// 3 Methods to create deep copy :
//1 Spread Operator
//2. Object.assign({},obj)
//3. JSON.parse(JSON.stringify(obj))--> In nested object

//Why arrays and objects are shallow copy and primitive datatype deep copy 
//As js doesn't have memory of its own, so copying an array or object consume lot
//of space making deep copy to avoid that js default behavior to make shallow copy of arr , obj