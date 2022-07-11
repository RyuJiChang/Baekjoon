const arr = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase().split('')
let obj = {}
for(let el of arr){
  if(obj[el] === undefined){
    obj[el] = 1
  }
  else{
    obj[el] += 1
  }
}

let max = Object.keys(obj)[0]
let result
for(let key in obj){
  if(obj[key] >= obj[max]){
        max = key      
  }
}
result = max
for(let key in obj){
  if(key !== max && obj[key] === obj[max]){
    result = '?'
  }
}
console.log(result)