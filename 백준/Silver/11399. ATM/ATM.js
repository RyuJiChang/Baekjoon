const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let arr = input[1].split(' ').map(Number).sort(function(a, b) {
  return a - b;
});
let result = 0
for(let i = 0 ; i<arr.length ;i++){
    result += (arr[i]*(arr.length-i))
}
console.log(result)