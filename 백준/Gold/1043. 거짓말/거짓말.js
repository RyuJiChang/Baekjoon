const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [n, m] = input[0]
const know = input[1].slice(1)
const parent = []
let count = 0

for(let i = 0 ; i <= n ; i++){
    parent[i] = i
}

const find = (n) => {
    if (parent[n] != n) {
        parent[n] = find(parent[n])
    }
    return parent[n]
}

const union =  (a, b) => {
    const rootA = find(a)
    const rootB = find(b)
    
    if(rootA != rootB){
        parent[rootB] = rootA
    }
}

for(let i = 0 ; i < know.length - 1 ; i++){
    union(know[i], know[i + 1])
}

for(let i = 2 ; i < input.length ; i++){
    for(let j = 1; j < input[i].length - 1; j++){
        union(input[i][j], input[i][j + 1])
    }
}

for(let i = 2 ; i < input.length ; i++){
    if(know.length == 0 || find(input[i][1]) != find(know[0])){
        count++
    }
}

console.log(count)