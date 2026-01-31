const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = []
const result = []

for(let i = 1 ; i < input.length ; i++){
    if(input[i][0] == '1'){
        arr.push(input[i].split(' ')[1])
    }
    else if(input[i] == '2'){
        result.push(arr.length > 0 ? arr.pop() : -1)
    }
    else if(input[i] == '3'){
        result.push(arr.length)
    }
    else if(input[i] == '4'){
        result.push(arr.length > 0 ? 0 : 1)
    }
    else if(input[i] == '5'){
        result.push(arr.length > 0 ? arr[arr.length-1] : -1)
    }
}

console.log(result.join('\n'))