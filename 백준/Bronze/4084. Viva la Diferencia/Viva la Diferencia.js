let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length-1 ; i++){
    let [a,b,c,d] = input[i].split(' ').map(Number)
    let count = 0
    while(a!==b||b!==c||c!==d){
        count++
        let [tempA,tempB,tempC,tempD] = [a,b,c,d]
        a = Math.abs(tempA-tempB)
        b = Math.abs(tempB-tempC)
        c = Math.abs(tempC-tempD)
        d = Math.abs(tempD-tempA)
    }
    result.push(count)
}
console.log(result.join('\n'))