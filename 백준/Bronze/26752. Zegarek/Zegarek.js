let [h,m,s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
s++

if(s == 60){
    m++
    s = '00'
}

if(m == 60){
    h++
    m = '00'
}

if(h == 24){
    h = '00'
}

console.log(String(h).padStart(2,'0') + ':' +String(m).padStart(2,'0') + ':' +String(s).padStart(2,'0'))