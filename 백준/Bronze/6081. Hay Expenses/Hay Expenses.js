const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x,y] = input[0]
const cal = (arr) => {
    let result = 0
    for(let i = 0 ; i < arr.length ; i++){
        result += arr[i][0]
    }
    return result
} 
for(let i = 1 + x ; i < input.length ; i++){
    console.log(cal(input.slice(input[i][0], input[i][1] + 1)))
}