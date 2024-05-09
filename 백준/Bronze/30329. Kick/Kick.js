const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const arr = []
let count = 0
for(let i = 0 ; i < input.length ; i++){
    arr.push(input[i])
    if(arr.length == 4){
        if(arr.join('') == 'kick'){
            count++
            arr.shift()
            arr.shift()
            arr.shift()
        }
        else{
            arr.shift()
        }
    }
}

console.log(count)