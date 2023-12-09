const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
const monthMap = {1 : 31, 2 : 31, 4 : 31, 5 : 30, 6 : 31, 7 : 30, 8 : 31, 9 : 31, 10 : 30, 11 : 31, 12 : 30}
for(let i = 1 ; i < input.length ; i++){
    const [year, num] = input[i].split(' ').map(Number)
    if(num === 3){
        if(year % 4 == 0 && year != 2100){
            result.push(`${year} 2 ${29}`)
        }
        else{
            result.push(`${year} 2 ${28}`)
        }
    }
    else{
        result.push(`${num === 1 ? year - 1 : year} ${num === 1 ? 12 : num - 1} ${monthMap[num]}`)
    }
}

console.log(result.join('\n'))