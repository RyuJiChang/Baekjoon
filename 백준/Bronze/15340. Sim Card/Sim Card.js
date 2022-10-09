let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length-1 ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result.push(Math.min(a*30 + b*40 , a*35 + b*30 , a*40 + b*20))
}
console.log(result.join('\n'))