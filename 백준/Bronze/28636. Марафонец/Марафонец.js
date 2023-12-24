const input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let [h, m, s] = [0, 0, 0]

for(let i = 1 ; i < input.length ; i++){
    const [m2, s2] = input[i].split(':').map(Number)
    m += m2
    s += s2
}

m += Math.floor(s / 60)
s = String(s % 60).padStart(2,'0')
h += Math.floor(m / 60)
m = String(m % 60).padStart(2,'0')
h = String(h).padStart(2,'0')

console.log(`${h}:${m}:${s}`)