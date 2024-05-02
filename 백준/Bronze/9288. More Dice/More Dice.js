const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(`Case ${i}:`)
    const resultMap = {}
    for(let j = 1 ; j < 7 && j < input[i] ; j++){
        for(let k = 1 ; k < 7 && j + k <= input[i] ; k++){
            if(j + k == input[i]){
                resultMap[Math.min(j, k)] = Math.max(j, k)
            }
        }
    }
    for(let key in resultMap){
        result.push(`(${key},${resultMap[key]})`)
    }
}

console.log(result.join('\n'))
