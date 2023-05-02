const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const[a,b,c,d,a2,b2,c2,d2] = input[i].split(' ').map(Number)
    let sum = 0
    sum += Math.max(1, (a+a2))*1
    sum += Math.max(1, (b+b2))*5
    sum += Math.max(0, (c+c2))*2
    sum += (d+d2)*2
    result.push(sum)
}
console.log(result.join('\n'))