const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 0

const check = (num) => {
    for(let i = 0 ; i < input[1].length ; i++){
        if(num % input[1][i] == 0){
            return true
        }
    }
    return false
}

for(let i = 2 ; i <= input[0][0] ; i++){
    if(check(i)){
        result += i
    }
}

console.log(result)