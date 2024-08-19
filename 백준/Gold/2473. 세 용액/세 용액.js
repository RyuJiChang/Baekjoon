const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number).sort((a, b) => a - b)
let min = Infinity
let result = []

outer : for (let i = 0; i < input.length - 2; i++) {
    let left = i + 1
    let right = input.length - 1

    while (left < right) {
        const sum = input[i] + input[left] + input[right]

        if (Math.abs(sum) < min) {
            min = Math.abs(sum)
            result = [input[i], input[left], input[right]]
        }

        if (sum < 0) {
            left++
        } else if (sum > 0) {
            right--
        } else {
            break outer
        }
    }
}

console.log(result.sort((a, b) => a - b).join(' '))