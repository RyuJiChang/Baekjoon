const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [nums, box] = input[i]
    const boxArr = []
    let sum = 0
    let count = 0
    for(let j = i + 1 ; j <= i + box ; j++){
        const [x, y] = input[j]
        boxArr.push(x * y)
    }
    boxArr.sort((a,b) => b - a)

    for(let j = 0 ; j < boxArr.length ; j++){
        if(sum < nums){
            sum += boxArr[j]
            count++
        }
        else{
            break
        }
    }
    result.push(count)
    i += box
}


console.log(result.join('\n'))