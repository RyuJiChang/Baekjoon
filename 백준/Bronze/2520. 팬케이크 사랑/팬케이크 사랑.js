const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 2 ; i < input.length ; i+=3){
    const [c,y,su,sa, f] = input[i].split(' ').map(Number)
    const [b, st, ch, w] = input[i+1].split(' ').map(Number)
    const fancake = Math.floor(Math.min(c/8, y/8, su/4, sa, f/9) * 16)
    const toping = b + Math.floor(st/30) + Math.floor(ch/25) + Math.floor(w/10)
    console.log(Math.min(fancake, toping))
}