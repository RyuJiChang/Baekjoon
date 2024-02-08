const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const check = {}
for(let i = 0 ; i < input.length ; i++){
    if(check[input[i]]){
        check[input[i]]++
    }
    else{
        check[input[i]] = 1
    }
}

for(let key in check){
    if(check[key] == 1){
        console.log(key)
    }
}
