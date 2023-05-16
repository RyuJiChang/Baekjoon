const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
for(let i = 1 ; i < input.length ; i++){
    let [name, nums] = input[i].split(' ')
    nums = Number(nums)
    let grade = 'F'

    if(nums > 96){
        grade = 'A+'
    }
    else if(nums > 89){
        grade = 'A'
    }
    else if(nums > 86){
        grade = 'B+'
    }
    else if(nums > 79){
        grade = 'B'
    }
    else if(nums > 76){
        grade = 'C+'
    }
    else if(nums > 69){
        grade = 'C'
    }
    else if(nums > 66){
        grade = 'D+'
    }
    else if(nums > 59){
        grade = 'D'
    }
    result.push(`${name} ${grade}`)
}

console.log(result.join('\n'))