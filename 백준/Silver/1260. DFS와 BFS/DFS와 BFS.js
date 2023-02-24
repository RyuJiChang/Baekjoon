const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let obj = {}
const [vertex, nodes, startNum] = input[0].split(' ').map(Number)
for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    if(obj[a]){
        obj[a].push(b)
    }
    else{
        obj[a] = [b]
    }
    if(obj[b]){
        obj[b].push(a)
    }
    else{
        obj[b] = [a]
    }
}

for(let key in obj){
    obj[key] = obj[key].sort((a,b) => b-a)
}

const dfs = (start) => {
  const stack = [start];
  const visited = Array(vertex + 1).fill(false);
  const order = [];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      order.push(node);
      stack.push(...obj[node]);
    }
  }
  return order.join(' ');
};

const bfs = (start) => {
  const queue = [start];
  const visited = Array(vertex + 1).fill(false);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      order.push(node);
      queue.push(...obj[node]);
    }
  }
  return order.join(' ');
};
if(obj[startNum]){
  console.log(dfs(startNum))
  
  for(let key in obj){
      obj[key] = obj[key].sort((a,b) => a-b)
  }
  console.log(bfs(startNum))
}
else{
  console.log(startNum)
  console.log(startNum)
}