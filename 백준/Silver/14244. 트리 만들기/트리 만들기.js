let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)



let result = ['0 1', '1 2']

for(let i = 2 ; i < a-1 ; i++){
    if(i < b){
        result.push(1 + ' ' + (i+1))
    }
    else{
        result.push(i + ' ' + (i+1))
    }
}

console.log(result.join('\n'))