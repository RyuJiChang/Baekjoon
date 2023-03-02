const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
const numberAdder = (target) => {
    let sum = 0
    let count = 0
    for(let i = 2 ; i < 10000 ; i++){
        sum += 1/i
        count++
        if(target <= sum){
            break
        }
    }
    return count
}

for(let i = 0 ; i < input.length-1 ; i++){
    result.push(`${numberAdder(input[i])} card(s)`)
}

console.log(result.join('\n'))