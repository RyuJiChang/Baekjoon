const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = [0,0]
let lastWin = 'D'

for(let i = 0 ; i < 10 ; i++){
    if(input[0][i] > input[1][i]){
        result[0] += 3
        lastWin = 'A'
    }
    else if(input[0][i] < input[1][i]){
        result[1] += 3
        lastWin = 'B'
    }
    else{
        result[0]++
        result[1]++
    }
}

console.log(result.join(' '))
if(result[0] > result[1]){
    console.log('A')
}
else if(result[0] > result[1]){
    console.log('B')
}
else{
    console.log(lastWin)
}