const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
let count = 1
for(let i = 2 ; i < input.length ; i+=3){
    const str1 = input[i]
    const str2 = input[i+1]
    let wrongCount = 0
    for(let j = 0 ; j < str1.length ; j++){
        if(str1[j] != str2[j]){
            wrongCount++
        }
    }
    result.push(`Case ${count++}: ${wrongCount}`)
}

console.log(result.join('\n'))