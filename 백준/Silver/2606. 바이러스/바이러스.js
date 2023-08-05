const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const map = []
const check = new Array(input[0][0] +1).fill(1)
let count = -1

for(let i = 0 ; i <= input[0][0] ; i++){
    map.push(new Array())
}

for(let i = 2 ; i < input.length ; i++){
    const [a, b] = input[i]
    map[a].push(b)
    map[b].push(a)
}

const stack = [1]
check[1] = 0

while(stack.length){
    const now = stack.pop()
    count++
    for(let i = 0 ; i < map[now].length ; i++){
        let node = map[now][i]
        if(check[node]){
            stack.push(node)
            check[node] = 0
        }
    }
}
console.log(count)