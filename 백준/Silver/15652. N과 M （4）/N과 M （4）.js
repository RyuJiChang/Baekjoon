const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)

let result = []

function recul(n,a,arr) {
    if(n === 0){
        result.push(arr.trim())
        return
    }    
    for(let i = a ; i <= input[0] ; i++){
        recul(n-1,i,`${arr} ${i}`)
    }
}
recul(input[1] , 1 , '')

console.log(result.join('\n'))