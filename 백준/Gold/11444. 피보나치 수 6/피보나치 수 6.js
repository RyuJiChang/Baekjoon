const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())

function cal(a,b) {
    return[ [(a[0][0]*b[0][0] + a[0][1]*b[1][0])%1000000007n , (a[0][0]*b[0][1] + a[0][1]*b[1][1])%1000000007n] ,
            [(a[1][0]*b[0][0] + a[1][1]*b[1][0])%1000000007n , (a[1][0]*b[0][1] + a[1][1]*b[1][1])%1000000007n]]
          
}
let one = [[1n,1n],[1n,0n]]
// let now = input

function recultion(arr,n){
    if(n === 1n){
        return arr
    }

    if(n%2n){
        return cal(arr , recultion(cal(arr,arr),(n-1n)/2n))
    }
    else{
        return recultion(cal(arr,arr) , n/2n)
    }
}

console.log(String(recultion(one,input)[0][1]))