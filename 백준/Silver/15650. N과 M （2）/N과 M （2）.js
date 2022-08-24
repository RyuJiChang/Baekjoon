const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)

let result = []

function recurtion(a,n,c,arr){
    if(n === 0 ){
        result.push(arr.join(' '))
        return
    }
    for(let i = c ; i <= a ; i++){
        if(arr.indexOf(i) === -1){
            recurtion(a,n-1,i+1,[...arr,i])
        }
        else{
        }
    }
}
recurtion(input[0],input[1],1,[])

console.log(result.join('\n'))