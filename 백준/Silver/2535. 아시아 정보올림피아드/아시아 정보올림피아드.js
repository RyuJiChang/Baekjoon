const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
input.shift()
input.sort((a, b) => b[2] - a[2])
input.forEach(el => el.pop())
const result = [input[0].join(' '), input[1].join(' ')]

for(let i = 2 ; i < input.length ; i++){
    if(input[0][0] != input[1][0] || input[0][0] != input[i][0]){
        result.push(input[i].join(' '))
        break
    }
}
console.log(result.join('\n'))