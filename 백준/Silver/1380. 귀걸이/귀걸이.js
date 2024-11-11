const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
let count = 1

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 0){
        break
    }
    const studentNum = Number(input[i])
    const studentArr = []
    const studentCheckList = []
    for(let j = i+1 ; j <= i + studentNum ; j++){
        studentArr.push(input[j])
    }

    for(let j = i + 1 + studentNum ; j < i + studentNum * 3 ; j++){
        let index = input[j].split(' ')[0]
        if(studentCheckList[index]){
            studentCheckList[index] = false
        }
        else{
            studentCheckList[index] = true
        }
    }

    result.push(`${count++} ${studentArr[studentCheckList.indexOf(true) - 1]}`)

    i += studentNum * 3 - 1
}

console.log(result.join('\n'))