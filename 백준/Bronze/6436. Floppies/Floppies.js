const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []
for(let i = 0 ; i < input.length -1 ; i++){
    const text = [`File #${i+1}`]
    const floppy = Math.ceil(input[i]/2*1.5/1860000)
    text.push(`John needs ${floppy} floppies.`)
    result.push(text.join('\n'))
}

console.log(result.join('\n\n'))