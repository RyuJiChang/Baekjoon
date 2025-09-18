const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    if(input[i] % 2){
        console.log(`${input[i]} is odd`)
    }
    else{
        console.log(`${input[i]} is even`)
    }
}
