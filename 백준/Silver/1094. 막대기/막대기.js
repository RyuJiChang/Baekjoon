let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0
for(let i = 6 ; i >= 0 ; i--){
    if(input >= Math.pow(2,i)){
    input = input%(Math.pow(2,i))
    count++
    }
    if(!input){
        break
    } 
}
console.log(count)