const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == ':')[
        sum += 2
    ]
    else if(input[i] == '_'){
        sum += 6
    }
    else{
        sum += 1
    }
}

console.log(sum)