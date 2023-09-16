const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const targetYear = 1989
const targetMonth = 2
const targetDay = 27

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [year, month, day] = input[i].split(' ').map(Number)
    if(year < targetYear || (year === targetYear && month < targetMonth) || (year === targetYear && month  === targetMonth && day <= targetDay)){
        result.push("Yes")
    }
    else{
        result.push('No')
    }
}

console.log(result.join('\n'))