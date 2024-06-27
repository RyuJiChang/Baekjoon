const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 2 ; i < input.length ; i+=2){
    const arr = input[i].split(' ').map(Number)
    let min = 20000
    for(let j = 0 ; j < arr.length ; j++){
        const minIndex = Math.min(...arr)
        const maxIndex = Math.max(...arr)
        const sum = (Math.abs(minIndex - arr[j]) + Math.abs(maxIndex - arr[j])) * 2 
        min = Math.min(min, sum)
    }
    result.push(min)
}

console.log(result.join('\n'))