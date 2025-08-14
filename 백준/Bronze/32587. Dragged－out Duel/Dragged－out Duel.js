const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let a = 0
let b = 0

for(let i = 0 ; i < input[1].length ; i++){
    if(input[1][i] != input[2][i]){
        if(input[1][i] == 'R' && input[2][i] == 'S'){
            a++
        }
        else if(input[1][i] == 'R' && input[2][i] == 'P'){
            b++
        }
        else if(input[1][i] == 'S' && input[2][i] == 'P'){
            a++
        }
        else if(input[1][i] == 'S' && input[2][i] == 'R'){
            b++
        }
        else if(input[1][i] == 'P' && input[2][i] == 'R'){
            a++
        }
        else{
            b++
        }
    }
}

console.log(a > b ? 'victory' : 'defeat')