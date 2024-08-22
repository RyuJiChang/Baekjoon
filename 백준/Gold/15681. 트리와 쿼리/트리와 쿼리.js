const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, r, q] = input[0].split(' ').map(Number)
const graph = []
const sizeList = new Array(n + 1).fill(0)
const visited = new Array(n + 1).fill(false)
const results = [];

for(let i = 0 ; i <= n ; i++){
    graph.push(new Array())
}

for (let i = 1; i < n; i++) {
    const [a, b] = input[i].split(' ')
    graph[a].push(b)
    graph[b].push(a)
}

const dfs = (node) => {
    visited[node] = true
    sizeList[node] = 1

    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            sizeList[node] += dfs(neighbor)
        }
    }
    return sizeList[node]
}

dfs(r)

for (let i = n; i < n + q; i++) {
    results.push(sizeList[input[i]])
}

console.log(results.join('\n'))