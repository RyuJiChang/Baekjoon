const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let countA = 0
let countB = 0

for(let i = 0 ; i < input[1].length ; i++){
    const a = input[1][i]
    const b = input[2][i]
    if(a == b){
        continue
    }
    else if(a == 'R' && b == 'P'){
        countB++
    }
    else if(a == 'R' && b == 'S'){
        countA++
    }
    else if(a == 'S' && b == 'P'){
        countA++
    }
    else if(a == 'S' && b == 'R'){
        countB++
    }
    else if(a == 'P' && b == 'R'){
        countA++
    }
    else if(a == 'P' && b == 'S'){
        countB++
    }
}

console.log(countA, countB)