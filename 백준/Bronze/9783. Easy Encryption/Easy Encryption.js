const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const strMap = {}
let result = ''

for(let i = 1 ; i <= 26 ; i++){
    strMap[String.fromCharCode(96 + i)] = String(i).padStart(2, '0')
    strMap[String.fromCharCode(64 + i)] = String(i+26).padStart(2, '0')
}

for(let i = 0 ; i < 10 ; i++){
    strMap[i] = '#' + i
}

for(let i = 0 ; i < input.length ; i++){
    if(strMap[input[i]] != null){
        result += strMap[input[i]]
    }
    else{
        result += input[i]
    }
}


console.log(result)