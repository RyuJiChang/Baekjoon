const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = -1

for(let i = 1 ; i < input.length ; i++){
    const [a,b,c] = input[i]
    const sum = a + b + c
    if(sum >= 512){
        if(result == -1){
            result = sum
        }
        else{
            result = Math.min(result, sum)
        }
    }
}

console.log(result)