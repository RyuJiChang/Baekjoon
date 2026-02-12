const input = require('fs')
  .readFileSync(0, 'utf8')
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number))

const t = input[0][0]
const result = []
let index = 1

for(let i = 1 ; i <= t ; i++){
    const [n, x, y] = input[index++]
    let sum = 0

    for(let j = 0 ; j < n ; j++){
        const [a,b,c,d] = input[index++]
        sum += Math.max(a * x + c * y, b * x + d * y)
    }

    result.push(`Data Set ${i}:
${sum}`)
}

console.log(result.join('\n\n'))