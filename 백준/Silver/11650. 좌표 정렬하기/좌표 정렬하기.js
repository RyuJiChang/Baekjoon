const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].split(' ').map(Number)
}
arr.sort((a,b) => a[1] - b[1])
arr.sort((a,b) => a[0] - b[0])
for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].join(' ')
}
console.log(arr.join('\n'))