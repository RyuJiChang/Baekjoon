const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [logAmount, logNeeded] = input[0].split(' ').map(Number)
const logArr = input[1].split(' ').map(Number)

const cutLogChecker = (height) => {
    let cuttedLogSum = 0
    for(let i = 0 ; i < logAmount ; i++){
        if(height < logArr[i]){
            cuttedLogSum += logArr[i] - height
        }
    }
    if(cuttedLogSum >= logNeeded) return true
    else return false
}

let left = 0
let right = Math.max(...logArr)-1

while (left <= right) {
    const middle = Math.floor((left+right)/2)
    const check1 = cutLogChecker(middle)
    const check2 = cutLogChecker(middle+1)
    if(check1 && !check2){
        console.log(middle)
        break
    }
    else if(check2){
        left = middle+1
    }
    else{
        right = middle-1
    }
}

//1.해당 높이에서 처리할 경우 나오는 결과 true/false boolean return function 만들기
//2.이분탐색 구현 후 전,후를 넣어 true/false 순으로 나오는 구간 적용하기
//3.해당 구간 높이 출력