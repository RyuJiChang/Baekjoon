let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let coinOrder = {TTT : 0, TTH : 1, THT : 2, THH: 3, HTT: 4, HTH:5, HHT:6, HHH:7}
    let coinResult = new Array(8).fill(0)
    for(let j = 2 ; j < input[i].length ; j++){
        coinResult[coinOrder[input[i].slice(j-2,j+1)]]++
    }
    result.push(coinResult.join(' '))
}

console.log(result.join('\n'))