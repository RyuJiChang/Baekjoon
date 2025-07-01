const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i]
  const arr2 = []
  let prev = null
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== prev) {
      arr2.push(arr[j])
    }
    prev = arr[j]
  }
  arr2.push('$')
  result.push(arr2.join(' '))
}

console.log(result.join('\n'))