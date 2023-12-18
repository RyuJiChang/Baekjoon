let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
while (Math.floor(input / 2) != input / 2) {
    input = Math.ceil(input/2)
}

console.log(input)