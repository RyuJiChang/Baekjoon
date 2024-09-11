const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    const [a, b] = input[i].split(' ').map(Number)
    let min = 1000000
    let index = 0
    for(let j = 1 ; j <= 1000000 ; j++){
        if(Math.abs(a - j ** b) < min){
            min = Math.abs(a - j ** b)
            index = j
        }
        if(j ** b > a){
            break
        }
    }
    result.push(index)
}

console.log(result.join('\n'))