const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const arr = input[i].split(' ').sort((a,b) => a-b)
    result.push(arr[7])
}
console.log(result.join('\n'))