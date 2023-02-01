const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const range = input[0]
const numberStack = []
const result = []
let targetIndex = 1

for(let i = 1 ; i <= range ; i++){
    numberStack.push(i)
    result.push('+')
    while(targetIndex <= range){
        const popedNumber = numberStack.pop()
        if(popedNumber === undefined){
            break
        }
        if(popedNumber === input[targetIndex]){
            targetIndex++
            result.push('-')
        }
        else{
            numberStack.push(popedNumber)
            break
        }
    }
}

if(numberStack.length){
    console.log("NO")
}
else{
    console.log(result.join('\n'))
}

//1. 값을 빼서 stack에 집어넣고 result에 +를 추가
//2. 현재 스택의 마지막 값을 pop으로 꺼내 비교 후 출력해야 하는 값이 아닐 경우 다시 push
//3. 위 처리 전 pop이 undefined가 아니어야 하며 targetIndex가 처리될 때 마다 1씩 증가시키고 while은 