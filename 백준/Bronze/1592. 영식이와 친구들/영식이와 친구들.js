const [n,m,l] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const people = new Array(n+1).fill(0)
let max = 0
let now = 1
let count = 0
while(max < m){
    people[now]++
    max = Math.max(people[now], max)
    if(max == m){
        break
    }
    count++
    if(people[now] % 2){
        now = (now + l - 1) % n + 1
    }
    else{
        now = (now + n - l - 1) % n + 1
    }
}

console.log(count)