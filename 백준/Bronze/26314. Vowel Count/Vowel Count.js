const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const check = {a : 1, e : 1, i : 1, o : 1, u : 1}
const result = []

for(let i = 1 ; i < input.length ; i++){
    let vowelsCount = 0
    let consonantsCount = 0
    for(let j = 0 ; j < input[i].length ; j++){
        if(check[input[i][j]]){
            vowelsCount++
        }
        else{
            consonantsCount++
        }
    }
    result.push(input[i])
    result.push(vowelsCount > consonantsCount ? 1 : 0)
}

console.log(result.join('\n'))