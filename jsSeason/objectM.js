let person1 = {
    firstName : "Ash",
    lastName : "Sharma"
}
let person2 = {
    firstName : "Sheena",
    lastName : "Bajaj"
}
let printName = function(city , country){
    console.log(this.firstName + " " + this.lastName + " " + city + "from " + country)
}

// printName.call(person1,["Pune" , "India"])
// printName.call(person2,["Bengaluru" , "India"])

printName.apply(person1,["Pune" , "India"])
printName.apply(person2,["Bengaluru" , "India"])