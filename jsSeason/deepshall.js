
 let x = 10
let y = x
x = 90
console.log(y)
//DEEP COPY 
//After cpying value of x to y and updating value of y there is
//no connection btw y and x i.e x and y are not pointing to same memory allocation
//DEEP COPY can be made on primitive datatype : Number , String and Boolean
//Deep copy means all of the values values of new varible are copied and  disconnected from 
//original variable.

//Shallow Copy :
//Still a sub-value still connecteedd to original value.
//  let arr1 = [1 , 2 , 3 , 4 , 5]
//  let arr2 = arr1
//  arr2.push(6)
//  console.log(arr2)
//modifying arr1 or 2 at the end changing in same memory therefore what modify both modify

 //shallow copy = point to same(array and object)
 //deep copy = point to diff(primitive (int , str , bollean))

 let arr11 = [1 , 2 , 3 , 4 , 5]
 let arr12 = [...arr11]
 arr12.push(60)
 console.log(arr11)
 console.log(arr12)
 //We made deep copy of it by using spread operator creating new array