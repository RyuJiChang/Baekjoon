let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let power = 0

while (input % 2 === 0) {
    power++
    input /= 2
}

console.log(input, power)