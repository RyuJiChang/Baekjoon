const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (let c of alphabet) {
    if (!input.includes(c)) {
        console.log(c)
        break
    }
}
