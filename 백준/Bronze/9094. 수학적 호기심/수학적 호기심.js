const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [n, m] = input[i].split(' ').map(Number)
    let count = 0
    for(let b = 2 ; b < n ; b++){
            for(let a = 1 ; a < b ; a++){
                if((a**2 + b**2 + m)%(a*b) === 0){
                    count++
                }
            }
    }
    result.push(count)
}

console.log(result.join('\n'))