function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i]%2){
            let str = numbers[i].toString(2).split('').reverse().join('')
            for(let j = 0 ; j <= str.length ; j++){
                if(str[j+1] === '0' || str[j+1] === undefined){
                    answer.push(numbers[i] + 2**j)
                    break
                }
            }
            
        }
        else{
            answer.push(numbers[i]+1)
        }
    }
    return answer;
}