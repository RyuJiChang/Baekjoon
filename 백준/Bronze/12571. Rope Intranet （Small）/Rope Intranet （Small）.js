const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []
let count = 1
const cal = (arr) => {
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            const [x1,y1] = arr[i]
            const [x2,y2] = arr[j]
            if(x1 > x2 && y1 < y2){
                count++
            }
            else if(x1 < x2 && y1 > y2){
                count++
            }
        }
    }
    return count
}

for(let i = 1 ; i < input.length ; i++){
    const num = input[i][0]
    const list = input.slice(i+1, i+1+num)
    result.push(`Case #${count}: ${cal(list)}`)
    i += num
    count++
}

console.log(result.join('\n'))