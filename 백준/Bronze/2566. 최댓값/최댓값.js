let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
let max = 0
for(let i = 0 ; i < input.length ; i++){
    max = Math.max(max, ...input[i].split(' ').map(Number))
}
result.push(max)
for(let i = 0 ; i < input.length ; i++){
    if(input[i].split(' ').map(Number).indexOf(max) !== -1){
        result.push(`${i+1} ${input[i].split(' ').map(Number).indexOf(max)+1}`)
    }
}
console.log(result.join('\n'))

