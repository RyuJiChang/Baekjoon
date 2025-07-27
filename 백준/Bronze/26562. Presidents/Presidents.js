const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const map = {
    "Franklin" : 100,
    "Grant" : 50,
    "Jackson" : 20,
    "Hamilton" : 10,
    "Lincoln" : 5,
    "Washington" : 1
}

let result = []

for(let i = 1 ; i < input.length ; i++){
    let sum = 0
    for(let j = 0 ; j < input[i].length ; j++){
        sum += map[input[i][j]]
    }
    result.push('$' + sum)
}

console.log(result.join('\n'))