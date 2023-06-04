const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const answer = [0,1,2,2,3,3,3,2,2,1,1]
console.log(answer[input])
