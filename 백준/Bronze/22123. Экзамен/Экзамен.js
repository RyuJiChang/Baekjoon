const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

const check = (str) => {
    const [t1, t2, m] = str.split(' ')
    const [h1, m1, s1] = t1.split(':').map(Number)
    const [h2, m2, s2] = t2.split(':').map(Number)
    const time1 = h1*3600 + m1 * 60 + s1
    const time2 = (h2*3600 + m2 * 60 + s2) > time1 ? h2*3600 + m2 * 60 + s2 : h2*3600 + m2 * 60 + s2 + 86400
    if(time1 + m*60 <= time2){
        return 'Perfect'
    }
    else if(time1 + m*60 <= time2 + 3600){
        return 'Test'
    }
    else{
        return 'Fail'
    }
}

for(let i = 1 ; i < input.length ; i++){
    result.push(check(input[i]))
}
console.log(result.join('\n'))