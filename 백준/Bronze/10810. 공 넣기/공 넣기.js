const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = new Array(input[0][0]).fill(0)

for(let i = 1 ; i < input.length ; i++){
    const [start, end, num] = input[i]
    for(let j = start-1 ; j < end ; j++){
        result[j] = num
    }
}
console.log(result.join(' '))