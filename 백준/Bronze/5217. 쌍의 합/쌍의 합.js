let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = []
for(let i = 1 ; i < input.length ; i++){
    let arr = []
    for(let j = 1 ; j < input[i]/2 ; j++){
        arr.push(` ${j} ${input[i]-j}`)
    }
        result.push('Pairs for '+ input[i] + ':' + arr.join(','))
}

console.log(result.join('\n'))