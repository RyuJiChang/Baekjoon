const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [amount, yesterday, max] = input[0].split(' ').map(Number)
const result = []

for(let i = 1 ; i < input.length ; i++){
    const today = Number(input[i])
    if(today < yesterday){
        result.push(`NTV: Dollar dropped by ${yesterday-today} Oshloobs`)
    }
    else if(max < today){
        result.push(`BBTV: Dollar reached ${today} Oshloobs, A record!`)
        max = today
    }
    
    yesterday = today
}

console.log(result.join('\n'))