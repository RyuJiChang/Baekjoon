const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const index = [' ']

for(let i = 65 ; i < 91 ; i++){
    index.push(String.fromCharCode(i))
}

for(let i = 0 ; i < input.length - 1 ; i++){
    let sum = 0
    for(let j = 0 ; j < input[i].length ; j++){
        sum += (j + 1) * index.indexOf(input[i][j])
    }
    console.log(sum)
}