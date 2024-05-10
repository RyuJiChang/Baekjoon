const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
for(let i = 1 ; i < input.length ; i+=2){
    const arr = input[i].split(' ').map(Number)
    let win = 0
    let min = 10000
    console
    for(let j = 0 ; j < arr.length ; j++){
        const abs = Math.abs(2023 - arr[j])
        if(min > abs){
            min = abs
            win = j+1
        }
    }
    result.push(win)
}

console.log(result.join('\n'))