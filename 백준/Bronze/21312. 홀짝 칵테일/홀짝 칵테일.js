const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const oddList = []
let result = 1
if(a % 2){
    oddList.push(a)
}

if(b % 2){
    oddList.push(b)
}

if(c % 2){
    oddList.push(c)
}

if(oddList.length){
    for(let i = 0 ; i < oddList.length ; i++){
        result *= oddList[i]
    }
}
else{
    result *= a * b * c
}

console.log(result)