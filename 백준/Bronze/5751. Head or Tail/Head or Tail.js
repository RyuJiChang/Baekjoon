let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i+=2){
    let matchArr = input[i].split(' ').map(Number)
    let maryScore = 0
    let johnScore = 0
    for(let j = 0 ; j < matchArr.length ; j++){
        if(matchArr[j]){
            johnScore++
        }
        else{
            maryScore++
        }
    }
    result.push(`Mary won ${maryScore} times and John won ${johnScore} times`)
}
console.log(result.join('\n'))