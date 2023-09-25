const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const changer = {
    kg : [2.2046, 'lb'], 
    g : [3.7854, 'l'], 
    l : [0.2642, 'g'], 
    lb : [0.4536, 'kg']}
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [weight, measurement] = input[i].split(' ')
    result.push((changer[measurement][0] * weight).toFixed(4) + ' ' + changer[measurement][1])
}

console.log(result.join('\n'))