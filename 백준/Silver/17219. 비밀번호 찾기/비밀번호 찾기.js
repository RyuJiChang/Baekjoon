const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let num = input[0].split(" ").map(Number)
let memory = input.slice(1,num[0]+1)
let password = input.slice(num[0]+1)
let obj = {}
let result = []

memory.map(el =>{
  const [ a, b ] = el.split(' ');
  obj[a] = b;
})
    
for(let i = 0 ; i < num[1] ; i++){
    result.push(obj[password[i]])
}

console.log(result.join('\n'))





