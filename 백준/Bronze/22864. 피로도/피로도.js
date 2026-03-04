const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let result = 0

if(a > d){
    console.log(result)
}
else{
    let hour = 0
    let stemina = 0
    while (hour < 24) {
        while ((stemina + a <= d) && hour < 24) {
            stemina += a
            result += b
            hour++
        }
        while ((stemina + a > d) && hour < 24) {
            stemina = Math.max(0, stemina - c)
            hour++
        }
    }
    console.log(result)
}