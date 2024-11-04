const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {}
const result = []
const have = input[1].split(' ')
const check = input[3].split(' ')

for(let i = 0 ; i < have.length ; i++){
    map[have[i]] = true
}
for(let i = 0 ; i < check.length ; i++){
    if(map[check[i]]){
        result.push(1)
    }
    else{
        result.push(0)
    }
}

console.log(result.join(' '))