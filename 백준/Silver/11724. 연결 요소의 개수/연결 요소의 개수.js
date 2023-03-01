const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [vertexNum, nodeNum] = input[0].split(' ').map(Number)
const nodes = {}
const routeCheck = new Array(vertexNum+1).fill(1)
let count = 0

const nodeClear = (num) => {
    if(nodes[num]){
        const stack = [...nodes[num]]
        while(stack.length){
            const indexNow = stack.pop()
            routeCheck[indexNow] = 0
            for(let i = 0 ; i < nodes[indexNow].length ; i++){
                const nowCheck = nodes[indexNow][i]
                if(routeCheck[nowCheck]){
                    routeCheck[nowCheck] = 0
                    stack.push(nowCheck)
                }
            }
        }
    }
}

for(let i = 1 ; i < input.length ; i++){
    const [start, end] = input[i].split(' ').map(Number)
    if(nodes[start]){
        nodes[start].push(end)
    }
    else{
        nodes[start] = [end]
    }
    if(nodes[end]){
        nodes[end].push(start)
    }
    else{
        nodes[end] = [start]
    }
}
for(let i = 1 ; i <= vertexNum ; i++){
    if(routeCheck[i]){
        routeCheck[i] = 0
        nodeClear(i)
        count++
    }
}

console.log(count)


// 1.노드 분배
// 2.루트 확인 여부 체크
// 3.1~정점 갯수까지의 정점 체크하며 0으로 변경
// 4.while문으로 자식노드 순회하는 stack 사용
// 5.edge case node가 없는 경우 확인