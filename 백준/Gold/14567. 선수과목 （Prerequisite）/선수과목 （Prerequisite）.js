let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}

let obj = {}
let queue = []
let nums = new Array(input[0][0]+1).fill(0)
for(let i = 1 ; i < input.length; i++){
    let [a,b] = input[i]
    if(obj[b]){
        obj[b].push(a)
    }
    else{
        obj[b] = [a]
    }
}

for(let i = 1 ; i <= input[0][0] ; i++){
    if(obj[i]){
        queue.push(i)
    }
    else{
        nums[i] = 1
    }
}
while(queue.length){
    let last = queue.length-1
    let need = []
    for(let i = 0 ; i < obj[queue[last]].length ; i++){
        need.push(nums[obj[queue[last]][i]])
    }
    if(need.indexOf(0) === -1){
        nums[queue[last]] = Math.max(...need)+1
        queue.pop()   
    }
    else{
        queue.unshift(queue.pop())
    }
}
console.log(nums.slice(1).join(' '))