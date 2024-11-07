const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const maxHeight = Math.max(...input)
let rain = 0

const getFirst = (height) => {
    for(let i = 0 ; i < input.length ; i ++){
        if(height <= input[i]){
            return i
        }
    }
}

const getLast = (height) => {
    for(let i = input.length - 1 ; i >= 0 ; i --){
        if(height <= input[i]){
            return i
        }
    }
}

for(let i = 1 ; i <= maxHeight ; i++){
    const firstIndex = getFirst(i)
    const lastIndex = getLast(i)

    for(let j = firstIndex + 1 ; j < lastIndex ; j++){
        if(input[j] < i){
            rain++
        }
    }
}

console.log(rain)