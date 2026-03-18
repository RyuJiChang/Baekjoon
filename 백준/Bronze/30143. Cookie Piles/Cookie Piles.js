const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const [num, start, add] = input[i].split(' ').map(Number)
    let sum = 0
    for(let j = 0 ; j < num ; j++){
        sum += start + add * j
    }
    console.log(sum)
}