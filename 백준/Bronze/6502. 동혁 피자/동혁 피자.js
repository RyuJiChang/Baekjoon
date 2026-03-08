const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

for(let i = 0 ; i < input.length - 1 ; i++){
    const [r, x, y] = input[i]
    console.log(`Pizza ${i+1} ${(r **2 >= (x**2 + y**2) / 4) ? 'fits' : 'does not fit' } on the table.`)
}