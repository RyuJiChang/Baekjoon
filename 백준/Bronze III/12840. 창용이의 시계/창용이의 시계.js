const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let [h, m, s] = input.shift().split(' ').map(Number)
let time = h*3600 + m*60 + s
const result = []
const getTime = (t) => {
    const h = Math.floor(t / 3600)
    const m = Math.floor((t % 3600)/60)
    const s = t % 60
    return h + ' ' + m + ' ' + s
}

for(let i = 1 ; i < input.length ; i++){
    if(input[i][0] == '1'){
        time = (time + Number(input[i].slice(2))) % 86400
    }
    else if(input[i][0] == '2'){
        time = ((time - Number(input[i].slice(2))) % 86400 + 86400) % 86400
    }
    else if(input[i][0] == '3'){
        result.push(getTime(time))
    }
}
console.log(result.join('\n'))