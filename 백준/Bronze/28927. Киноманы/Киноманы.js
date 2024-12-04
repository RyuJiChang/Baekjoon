const [[a1,a2,a3],[b1,b2,b3]] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const maxPoint = a1*3 + a2*20 + a3 * 120
const melPoint = b1*3 + b2*20 + b3 * 120
let result = 'Draw'

if(maxPoint > melPoint){
    result = 'Max'
}
else if(maxPoint < melPoint){
    result = 'Mel'
}

console.log(result)