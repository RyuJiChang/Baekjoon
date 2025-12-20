const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))


for(let i = 1 ; i < input.length ; i++){
    console.log(input[i].slice(2).join(' '), input[i].slice(0,2).join(' '))
}