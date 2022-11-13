let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n,a,b] = input[0].split(' ').map(Number)
let result = []

for(let i = 1 ; i <= n ; i++){
    if(a**2 + b**2 >= Number(input[i])**2){
        result.push("DA")
    }
    else{
        result.push("NE")
    }
}

console.log(result.join('\n'))