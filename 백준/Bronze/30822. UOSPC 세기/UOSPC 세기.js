const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const map = {u:0, o:0, s:0, p:0, c:0}

for(let i = 0 ; i < input.length ; i++){
    if(map[input[i]] != null){
        map[input[i]]++
    }
    else{
        map[input[i]] = 1 
    }
}

console.log(Math.min(map.u, map.o, map.s, map.p, map.c))