const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result = [0,1,3]
for(let i = 3 ; i <= n ; i++){
  result[i] = (result[i-1]+ result[i-2]*2)%10007
}
console.log(result[n])