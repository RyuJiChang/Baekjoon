const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const lists = []
let max = 0

for(let i = 2 ; i < input.length ; i++){
    const strList = (input[0] + input[i]).split('')
    const L = strList.filter(el => el == 'L').length
    const O = strList.filter(el => el == 'O').length
    const V = strList.filter(el => el == 'V').length
    const E = strList.filter(el => el == 'E').length
    const point = ((L+O) * (L+V) * (L+E) * (O+V) * (O+E) * (V+E)) % 100
    max = Math.max(max, point)
    lists.push([point, input[i]])
}

console.log(lists.filter(el => el[0] == max).map(el => el[1]).sort()[0])