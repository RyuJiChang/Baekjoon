const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const [n, m] = input[0]
const graph = []
const depth = new Array(n + 1).fill(0);

for(let i = 0 ; i <= n ; i++){
    graph.push(new Array())
}

for(let i = 1; i < input.length ; i++) {
    const [a, b] = input[i]
    graph[a].push(b);
    depth[b]++;
}

const queue = [];
const result = [];

for(let i = 1; i <= n; i++) {
    if(depth[i] == 0){
        queue.push(i);
    }
}

while (queue.length > 0) {
    const now = queue.shift();
    result.push(now);

    for (let i = 0; i < graph[now].length; i++) {
        const next = graph[now][i];
        depth[next]--;
        if (depth[next] == 0) {
            queue.push(next);
        }
    }
}

console.log(result.join(' '));