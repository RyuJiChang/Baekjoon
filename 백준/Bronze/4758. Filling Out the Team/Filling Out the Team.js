const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    const [speed, weight, strength] = input[i].split(' ').map(Number)
    let message = ''
    if(speed <= 4.5 && weight >= 150 && strength >= 200){
        message += ' Wide Receiver'
    }
    if(speed <= 6 && weight >= 300 && strength >= 500){
        message += ' Lineman'
    }
    if(speed <= 5 && weight >= 200 && strength >= 300){
        message += ' Quarterback'
    }

    if(message == ''){
        message = 'No positions'
    }
    result.push(message.trim())
}

console.log(result.join('\n'))