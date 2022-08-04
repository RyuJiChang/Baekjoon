const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)
let a = input[0]
let n = input[1]
let output = []
let result = '';

function cal(length) {
    if(length === n){
        result += `${output.join(' ')}\n`;
        return;
   }
 for (let i = 1; i <= a; i++) {
     output.push(i);
     cal(output.length);
     output.pop();
   }
}
cal(0)
console.log(result)