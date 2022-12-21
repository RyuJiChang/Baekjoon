let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let middle = input[i].length/2
    if(input[i][middle-1] === input[i][middle]){
        result.push("Do-it")
    }
    else{
        result.push("Do-it-Not")
    }
}

console.log(result.join('\n'))