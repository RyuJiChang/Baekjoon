const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [studentNum, roomSize] = input[0]
const studentList = new Array(12).fill(0)
let result = 0

for(let i = 1 ; i < input.length ; i++){
    const [gender, grade] = input[i]
    studentList[(grade - 1) * 2 + gender]++
}

for(let i = 0 ; i < studentList.length ; i++){
    result += Math.ceil(studentList[i] / roomSize)
}

console.log(result)