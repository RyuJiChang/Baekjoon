const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const gradeMap = {
    'A+' : 4.5,
    'A0' : 4.0,
    'B+' : 3.5,
    'B0' : 3.0,
    'C+' : 2.5,
    'C0' : 2.0,
    'D+' : 1.5,
    'D0' : 1.0,
    'F' : 0
}

let creditSum = 0
let gradeSum = 0

for(let i = 0 ; i < input.length ; i++){
    const [subjects, credit, grade] = input[i].split(' ')
    
    if(grade != 'P'){
        creditSum += Number(credit)
        gradeSum += credit * gradeMap[grade]
    }
}

console.log(gradeSum / creditSum)