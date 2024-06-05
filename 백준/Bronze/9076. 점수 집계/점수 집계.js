const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const arr = input[i].split(' ').map(Number).sort((a,b) => a-b)
    if(arr[3] - arr[1] >= 4){
        result.push('KIN')
    }
    else{
        result.push(arr[1] + arr[2] + arr[3])
    }
}

console.log(result.join('\n'))
