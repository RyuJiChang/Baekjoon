const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length ; i++){
    const [h1,m1,s1,h2,m2,s2] = input[i].split(' ').map(Number)
    const secSum = (h2 - h1) * 3600 + (m2 - m1) * 60 + (s2 - s1)
    result.push(`${Math.floor(secSum / 3600)} ${Math.floor((secSum%3600)/ 60)} ${secSum % 60}`)
}

console.log(result.join('\n'))