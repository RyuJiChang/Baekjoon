let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length; i+=2){
    let a = input[i].split(' ').map(Number)
    let sumA = a[0]*1+a[1]*2+a[2]*3+a[3]*3+a[4]*4+a[5]*10
    let b = input[i+1].split(' ').map(Number)
    let sumB = b[0]*1+b[1]*2+b[2]*2+b[3]*2+b[4]*3+b[5]*5+b[6]*10
    if(sumA>sumB){
        console.log(`Battle ${(i+1)/2}: Good triumphs over Evil`)
    }
    else if(sumB>sumA){
        console.log(`Battle ${(i+1)/2}: Evil eradicates all trace of Good`)
    }
    else{
        console.log(`Battle ${(i+1)/2}: No victor on this battle field`)
    }
}