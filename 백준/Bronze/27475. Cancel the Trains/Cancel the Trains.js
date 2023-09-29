const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 2 ; i < input.length ; i += 3){
    let count = 0
    const obj = {}
    for(let j = 0 ; j < input[i].length ; j++){
        obj[input[i][j]] = 1
    }
    for(let j = 0 ; j < input[i+1].length ; j++){
        if(obj[input[i+1][j]] === 1){
            count++
        }
    }
    result.push(count)
}

console.log(result.join('\n'))