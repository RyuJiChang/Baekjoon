const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let min, max

for(let i = 2 ; i < input ; i++){
    if(input % i){
        min = i
        break
    }
}

for(let i = input-1 ; i > 1 ; i--){
    if(input % i){
        max = i
        break
    }
}

console.log(min, max)