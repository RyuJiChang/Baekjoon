const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(BigInt))
const result = []

for(let i = 1 ; i < input.length ; i+=3){
    const [red, white] = input[i]
    result.push(red <= white ? 'Yes' : 'No')
}

console.log(result.join('\n'))
