const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const arr  = []

for(let i = 0 ; i < input[0][0] ; i++){
    arr.push(i+1)
}

for(let i = 1 ; i < input.length ; i++){
    const [a, b] = input[i]
    const temp = arr[a-1]
    arr[a-1] = arr[b-1]
    arr[b-1] = temp
}
console.log(arr.join(' '))