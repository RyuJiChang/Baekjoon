let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    if(i < 1){
        input[i] = Number(input[i])
    }
    else{
        input[i] = input[i].split(' ').map(Number)
    }
}

for(let i = 2 ; i <= input[0] ; i++){
    for(let j = 0 ; j < input[i].length ; j++){
        if(j === 0){
            input[i][j] += input[i-1][j]
        } 
        else if(j === input[i].length -1){
            input[i][j] += input[i-1][j-1]
        }
        else{
            input[i][j] += Math.max(input[i-1][j-1], input[i-1][j])
        }
    }
}

console.log(Math.max(...input[input[0]]))