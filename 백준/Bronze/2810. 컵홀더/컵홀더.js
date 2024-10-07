const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
let checkLL = false
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'S'){
        count++
    }
    else if(checkLL){
        count++
        i++
    }
    else{
        checkLL = true
        count += 2
        i++
    }
}

console.log(count)
