const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    let [start, end] = input[i].split(' ').map(el => el.split(':')[0]*60 + el.split(':')[1]*1)
    start = start % 1440
    const day = Math.floor((start + end)/1440)
    const time = (start + end)% 1440
    const hour = String(Math.floor(time/60)).padStart(2,'0')
    const minute = String(time%60).padStart(2,'0')
    result.push(hour + ':' + minute + (day > 0 ? ' +' + day : ''))
}


console.log(result.join('\n'))