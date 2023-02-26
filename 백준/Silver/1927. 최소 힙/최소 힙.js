const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let arr = []
let result = []

const pushToHeap = (num) => {
    arr.push(num)
    let indexNow = arr.length-1
    while(indexNow > 0){
        const parentNode = Math.floor((indexNow-1)/2)
        if(arr[indexNow] < arr[parentNode]){
            const temp = arr[parentNode]
            arr[parentNode] = arr[indexNow]
            arr[indexNow] = temp
            indexNow = parentNode
        }
        else{
            break
        }
    }
}

const popFromHeap = () => {
    const popNumber = arr[0]
    const lastNum = arr.pop()
    if(arr.length === 0){
        return popNumber
    }
    arr[0] = lastNum
    
    let indexNow = 0
    while(arr[indexNow] > arr[indexNow*2+1] || arr[indexNow] > arr[indexNow*2+2]){
        const [child1, child2] = [indexNow*2+1, indexNow*2+2]
        if(arr[child1] > arr[child2]){
            const temp = arr[child2]
            arr[child2] = arr[indexNow]
            arr[indexNow] = temp
            indexNow = child2
        }
        else{
            const temp = arr[child1]
            arr[child1] = arr[indexNow]
            arr[indexNow] = temp
            indexNow = child1
        }
    }
    return popNumber
}

for(let i = 1 ; i < input.length ; i++){
    if(input[i] !== 0){
        pushToHeap(input[i])
    }
    else if(input[i] === 0 && arr.length === 0){
        result.push(0)
    }
    else{
        result.push(popFromHeap())
    }
}
console.log(result.join('\n'))

//@1.heap에 push, pop하는 함수 구현
//@2.순회하며 입력이 0이 아닌 경우 push, 0인 경우 pop, arr이 빈 경우 0 추가
//3.push 함수는 배열의 마지막에 push한 다음 부모노드와 비교해 거슬러 올라가다가
//  최종 목적지(index 0)에 도착하거나 부모보다 클 경우 중단
//4.pop 함수는 최상단 값을 return하는 것은 맞지만
//  그 값을 다시 채워야 하기 때문에 마지막 값을 index 0에 넣어준 다음
//  자식 노드들 중 더 작은 값이 있을 경우 교체를 반복한다.
//  (자식 노드들 중 본인보다 작은 값이 없을 경우 중단)
//  *길이가 1일 경우 무한 리필되는 경우 확인 후 early return 적용