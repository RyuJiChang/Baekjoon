function solution(numbers) {
    let answer = []
    let arr = numbers.split('').map(Number)
    
    function recurtion(n,did,num){
        if(n === 0){
            answer.push(num)
        }
        for(let i = 0 ; i < arr.length ; i++){
            if(did.indexOf(i) !== -1){
                continue
            }
            else{
                recurtion(n-1,[...did,i],num*10 + arr[i])
                recurtion(n-1,[...did,i],num)
            }
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
    recurtion(arr.length,[],0)
    return [...new Set(answer)].filter(isPrime).length;
}