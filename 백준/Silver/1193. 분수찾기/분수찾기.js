const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let sum = 0
let count = 1

while (sum + count < input) {
    sum += count
    count++
}

const topOrBottom = input - sum

if (count % 2) {
    console.log((count + 1 - topOrBottom) + '/' + topOrBottom)
} else {
    console.log(topOrBottom + '/' + (count + 1 - topOrBottom))
}
