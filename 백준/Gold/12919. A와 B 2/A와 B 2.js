const [s, t] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = 0

const recurtion = (str) => {
    if(result == 1 || str.length == s.length){
        if(s == str){
            result = 1
        }
        return
    }

    if(str[0] == 'B'){
        recurtion(str.slice(1).split('').reverse().join(''))
    }
    if(str.slice(-1) == 'A'){
        recurtion(str.slice(0, str.length - 1))
    }
}

recurtion(t)
console.log(result)