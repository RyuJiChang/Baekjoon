const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
let a =input[0].split(' ').map(Number)
let b =input[1].split(' ').map(Number)
let result = ''
for(let i = 0 ; i < a[0] ; i++){
    if(b[i]<a[1]){
        if(result.length === 0){
        result += String(b[i])     
        }
        else{
        result += ' ' + String(b[i])
        }
        
    }
}
console.log(result)