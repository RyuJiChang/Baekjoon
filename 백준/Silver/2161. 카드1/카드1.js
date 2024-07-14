const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const arr = []
const result = []
for(let i = 1 ; i <= input ; i++){
    arr.push(i)
}

while(arr.length > 1){
    result.push(arr.shift())
    arr.push(arr.shift())
}
console.log(...result, ...arr)