const [h, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let print = true

for(let t = 1 ; t <= m ; t++){
    const result = t * (t * (t * (t * (-6) + h) + 2) + 1)
    if(result <= 0){
        print = false
        console.log(`The balloon first touches ground at hour: ${t}`)
        break
    }
}
if(print){
    console.log('The balloon does not touch ground in the given time.')
}