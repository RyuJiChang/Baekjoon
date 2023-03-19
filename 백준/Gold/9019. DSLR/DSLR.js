const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const bfs = (start, goal) => {
    const visited = new Array(10000).fill(1)
    visited[start] = 0
    let stackNum = [start]
    let stackStr = ['']
    while(stackNum.length){
        const newStackNum = []
        const newStackStr = []
        while(stackNum.length){
            const number = stackNum.pop()
            const str = stackStr.pop()
            const D = (number*2)%10000
            const S = (10000+number-1)%10000
            const L = (number*10)%10000 + Math.floor(number/1000)
            const R = (number%10)*1000 + Math.floor(number/10)
            if(D === goal){
                return(str + 'D')
            }
            else if(visited[D]){
                visited[D] = 0
                newStackNum.push(D)
                newStackStr.push(str+'D')
            }
            
            if(S === goal){
                return(str + 'S')
            }
            else if(visited[S]){
                visited[S] = 0
                newStackNum.push(S)
                newStackStr.push(str+'S')
            }
            
            if(L === goal){
                return(str + 'L')
            }
            else if(visited[L]){
                visited[L] = 0
                newStackNum.push(L)
                newStackStr.push(str+'L')
            }
            
            if(R === goal){
                return(str + 'R')
            }
            else if(visited[R]){
                visited[R] = 0
                newStackNum.push(R)
                newStackStr.push(str+'R')
            }
        }
        stackNum = newStackNum
        stackStr = newStackStr
    }
}

for(let i = 1 ; i < input.length ; i++){
    const [start, goal] = input[i].split(' ').map(Number)
    result.push(bfs(start, goal))
}

console.log(result.join('\n'))