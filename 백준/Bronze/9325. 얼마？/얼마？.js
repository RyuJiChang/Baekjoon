let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let sum = Number(input[i])
    let range = Number(input[i+1])
    for(let j = i+2 ; j <= i+1+range; j++){
        let [amount, price] = input[j].split(' ').map(Number)
        sum += amount*price
    }
    result.push(sum)
    i += (range+1)
}

console.log(result.join('\n'))