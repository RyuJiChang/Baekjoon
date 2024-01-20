const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [line, goal] = input.shift().split(' ').map(Number)
let count = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i-1] - input[i] >= goal){
        count++
    }
}

console.log(count)