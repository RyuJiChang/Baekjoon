const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}

for(let i = 1 ; i < input.length ; i++){
    for(let j = 0 ; j < 3 ; j++){
        if(j === 0){
            input[i][j] = input[i][j] + Math.min(input[i-1][j+1] , input[i-1][j+2])
        }
        else if(j === 1){
            input[i][j] = input[i][j] + Math.min(input[i-1][j-1] , input[i-1][j+1])
        }
        else{
            input[i][j] = input[i][j] + Math.min(input[i-1][j-1] , input[i-1][j-2])
        }
    }
}

console.log(Math.min(...input[input.length-1]))