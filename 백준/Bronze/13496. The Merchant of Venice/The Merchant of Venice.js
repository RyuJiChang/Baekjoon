const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = []
let setCount = 1
for(let i = 1 ; i < input.length ; i++){
    const [n,s,d] = input[i]
    let sum = 0
    for(let j = 1 ; j <= n ; j++){
        const [days, value] = input[i + j]
        if(days <= s * d){
            sum += value
        }
    }
    result.push(`Data Set ${setCount}:
${sum}`)
    setCount++
    i+=n
}

console.log(result.join('\n\n'))