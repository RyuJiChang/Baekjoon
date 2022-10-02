function solution(begin, end) {
    var answer = [];
    for(let i = begin ; i <= end ; i++){
        if(i === 1 ){
            answer.push(0)
        }
        else if(i < 10000000 && isPrime(i)){
            answer.push(1)
        }
        else {
            answer.push(calculate(i))
        }
    }
    return answer;
}

function calculate(num){
    if(num % 2 === 0 && num/2 <= 10000000){
        return num/2
    }
    for(let i = 3 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0 && num/i <= 10000000){
            return num/i
        }
    }
    return 1
}

function isPrime(num) {
  let result = 0;

  for(n = 1; n < num; n++){
    if(num % n === 0){
      result = result + n
    }
  }
  
  return result === 1 && num !== 1
}

//1.천만 이하 소수는 1
//2.