let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let obj = {}
let arr = []

for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    if(obj[a]){
        obj[a].push(b)
    }
    else{
        obj[a] = [b]
    }
    if(obj[b]){
        obj[b].push(a)
    }
    else{
        obj[b] = [a]
    }
}

function recurtion(n) {
    if(obj[n].length === 1 && n !== 1){
        return 
    }
    for(let i = 0 ; i < obj[n].length ; i++){
        if(obj[n][i] !== arr[n]){
            arr[obj[n][i]] = n
            recurtion(obj[n][i])
        }
    }
}

recurtion(1)

console.log(arr.slice(2).join('\n'))