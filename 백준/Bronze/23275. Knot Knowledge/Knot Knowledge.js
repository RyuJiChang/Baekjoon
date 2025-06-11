const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const arr = []

for(let i = 0 ; i < input[2].length ; i++){
    arr[input[2][i]] = true
}
for(let i = 0 ; i < input[1].length ; i++){
    if(!arr[input[1][i]]){
        console.log(input[1][i])
        break
    }
}