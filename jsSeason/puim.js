//Pure 
//Advantage
//1.Determinastic
//2.Memoization
function AreaofRectangle1(l , w){
return l * w
}
console.log(AreaofRectangle1(2 , 3))

//Impure  
function AreaofRectangle2(l , w){
    return l * w * Math.floor(Math.random() * 10)
    }
    console.log(AreaofRectangle2(2 , 3))