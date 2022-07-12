let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let arr = input.slice(1)
for(let i = 0 ; i < arr.length ; i++){
    arr[i] =arr[i].split(' ').map(Number)
}

console.log(arr.sort((a,b) => a[0] - b[0]).sort((a,b) => a[1] - b[1]).map(v=>v.join(' ')).join('\n'))