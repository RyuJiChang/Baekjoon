const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number).sort(function(a, b) {
  return a - b;
})
let a =input[0]
let b =input[1]
let counter1 = b % a
let counter2 = a
let counter3 = a
while(counter1){
    counter3 = counter2
    counter2 = counter1
    counter1 = counter3%counter2
}
console.log(counter2)
console.log(a*b/counter2)