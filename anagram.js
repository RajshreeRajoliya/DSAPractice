let str1 = "rat"
let str2 = "bat"
function anagram(str1 , str2){
    if(str1.length !== str2.length){
        return "Not an Anagram"
    }
if(str1.split("").sort().join("") === str2.split("").sort().join("")){
    return "Anagram"
}
return "Not an Anagram"
}
// console.log(anagram(str1 , str2))


function isAnagram(str1 , str2){
    if(str1.length !== str2.length) return false
    let obj1 = {}
    let obj2 = {}

    for(let i = 0 ; i < str1.length ; i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1
    }
for(const key in obj1){
    if(obj1[key] !== obj2[key]){
        return false
    }
    return true
}



}
console.log(isAnagram(str1 , str2))