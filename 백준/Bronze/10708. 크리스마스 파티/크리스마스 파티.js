const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const people = input[0][0]
const arr = input[2]
const result = new Array(people).fill(0)

for(let i = 3 ; i < input.length ; i++){
    const target = arr[i-3]
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] == target){
            result[j]++
        }
        else{
            result[target-1]++
        }
    }
}

console.log(result.join('\n'))