function solution(nums) {
    var answer = 0;
    let result = []
    for(let i = 0 ; i < nums.length-2 ; i++){
        for(let j = i+1 ; j < nums.length-1 ; j++){
            for(let k = j+1 ; k < nums.length ; k++){
                result.push(nums[i]+nums[j]+nums[k])
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
    for(let i = 0 ; i < result.length ; i++){
        if(isPrime(result[i])){
            answer++
        }
    }
    
    return answer;
}