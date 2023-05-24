const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))


const result = []
for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i]
    result.push(a + ' ' + b*(b+3)/2)
}
console.log(result.join('\n'))