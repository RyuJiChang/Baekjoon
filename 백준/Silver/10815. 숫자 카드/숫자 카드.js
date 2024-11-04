const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const plusList = []
const minusList = []
const result = []
const have = input[1].split(' ').map(Number)
const check = input[3].split(' ').map(Number)

for(let i = 0 ; i < have.length ; i++){
    if(have[i] < 0){
        minusList[-have[i]] = true
    }
    else{
        plusList[have[i]] = true
    }
}
for(let i = 0 ; i < check.length ; i++){
    if(check[i] < 0 && minusList[-check[i]]){
        result.push(1)
    }
    else if(check[i] >= 0 && plusList[check[i]]){
        result.push(1)
    }
    else{
        result.push(0)
    }
}

console.log(result.join(' '))