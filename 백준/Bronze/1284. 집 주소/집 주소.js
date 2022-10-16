let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length-1 ; i++){
    let sum = input[i].length+1
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] === '0'){
            sum += 4
        }
        else if(input[i][j] === '1'){
            sum += 2
        }
        else{
            sum += 3
        }
    }
    result.push(sum)
}

console.log(result.join('\n'))