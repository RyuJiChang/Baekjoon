const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const strList = []
    let count = 1
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] == input[i][j+1]){
            count++
        }
        else{
            strList.push(count)
            strList.push(input[i][j])
            count = 1
        }
    }
    result.push(strList.join(' '))
}

console.log(result.join('\n'))