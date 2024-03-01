const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [start, end] = input[i].split(' ').map(Number)
    let count = 0
    for(let j = 1 ; j**3 <= end ; j++){
        if(j**3 >= start){
            count++   
        }
    }
    result.push(`Case #${i}: ${count}`)
}

console.log(result.join('\n'))