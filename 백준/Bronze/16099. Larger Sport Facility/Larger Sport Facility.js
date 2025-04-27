const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(el => el.split(' ').map(BigInt))
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a, b, x, y] = input[i]
    if(a*b > x*y){
        result.push('TelecomParisTech')
    }
    else if(a*b < x*y){
        result.push('Eurecom')
    }
    else{
        result.push('Tie')
    }
}
console.log(result.join('\n'))