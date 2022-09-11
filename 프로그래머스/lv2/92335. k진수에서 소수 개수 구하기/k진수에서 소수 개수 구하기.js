function solution(n, k) {
    var answer = n.toString(k).split('0').filter(el => el !== '').map(Number)
    let count = 0
    
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
    
    for(let i = 0 ; i < answer.length ; i++){
        if(isPrime(answer[i])){
            count++
        }
    }
    return count;
}