let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result = []
for(let i = 2 ; i < 40000 ; i++){
    if(isPrime(i)){
        result.push(i)
    }
}

function isPrime(num) {
  let sqrt = parseInt(Math.sqrt(num));

  if (num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
let dp = new Array(input+1).fill(0)
dp[0] = 1
for(let i = 0 ; result[i] <= input ; i++){
    for(let j = 1 ; j <= input ; j++){
        if(j >= result[i]){
            dp[j] = (dp[j] + dp[j-result[i]])%123456789
        }
    }
}
console.log(dp[input])