const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [limit, n] = input[i].split(' ').map(Number)
    let count = 0
    for(let j = i + 1 ; j <= i + n ; j++){
        if(Number(input[j]) > limit){
            count++
        }
    }
    result.push(count)
    i += n
}

console.log(result.join('\n'))