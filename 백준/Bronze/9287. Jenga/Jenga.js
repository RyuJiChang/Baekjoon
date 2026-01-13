const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 1

for(let i = 1 ; i < input.length ; i++){
    const num = Number(input[i])
    let result = 'Standing'
    for(let j = i + 1 ; j <= i + num ; j++){
        if(input[j].indexOf('00') != -1){
            result = 'Fallen'
            break
        }
    }
    console.log(`Case ${count++}: ${result}`)
    i+= num
}