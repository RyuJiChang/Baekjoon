const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const bfs = (start, goal) => {
    const visited = new Array(10000).fill(1)
    visited[start] = 0
    let stack = [[start, '']]
    while(stack.length){
        const newStack = []
        while(stack.length){
            const [number, str] = stack.pop()
            const D = (number*2)%10000
            const S = (10000+number-1)%10000
            const L = (number*10)%10000 + Math.floor(number/1000)
            const R = (number%10)*1000 + Math.floor(number/10)
            if(D === goal){
                return(str + 'D')
            }
            else if(visited[D]){
                visited[D] = 0
                newStack.push([D, str+'D'])
            }
            
            if(S === goal){
                return(str + 'S')
            }
            else if(visited[S]){
                visited[S] = 0
                newStack.push([S, str+'S'])
            }
            
            if(L === goal){
                return(str + 'L')
            }
            else if(visited[L]){
                visited[L] = 0
                newStack.push([L, str+'L'])
            }
            
            if(R === goal){
                return(str + 'R')
            }
            else if(visited[R]){
                visited[R] = 0
                newStack.push([R, str+'R'])
            }
        }
        stack = newStack
    }
}

for(let i = 1 ; i < input.length ; i++){
    const [start, goal] = input[i].split(' ').map(Number)
    result.push(bfs(start, goal))
}

console.log(result.join('\n'))