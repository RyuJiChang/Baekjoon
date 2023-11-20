const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
let count = 1
for(let i = 1 ; i < input.length ; i++){
    const row = Number(input[i])
    let maxX = -Infinity
    let minX = Infinity
    let maxY = -Infinity
    let minY = Infinity
    for(let j = i+1 ; j <= i+row ; j++){
        const [x,y] = input[j].split(' ').map(Number)
        maxX = Math.max(maxX, x)
        minX = Math.min(minX, x)
        maxY = Math.max(maxY, y)
        minY = Math.min(minY, y)
    }
    let xLength = maxX - minX
    let yLength = maxY - minY
    result.push(`Case ${count++}: Area ${xLength * yLength}, Perimeter ${(xLength + yLength) * 2}`)
    i += row
}

console.log(result.join('\n'))