const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    let [h, m] = input[i].split(' ').map(Number)
    if(m >= 45){
        result.push(`Case #${i}: ${h} ${m - 45}`)
    }
    else if(h == 0){
        result.push(`Case #${i}: ${23} ${m + 15}`)
    }
    else{
        result.push(`Case #${i}: ${h - 1} ${m + 15}`)
    }
}

console.log(result.join('\n'))