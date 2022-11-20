function solution(number, limit, power) {
    let answer = 0;
    let arr = new Array(3162).fill(0)
    for(let i = 2 ; i < 3162 ; i++){
        arr[i] = i
    }
    for(let i = 2 ; i < 3162 ; i++){
        let n = 2
        while(i*n < 3162){
            arr[i*n] = 0
            n++
        }
    }
    arr = arr.filter(el => el !== 0)
    
    for(let i = 1 ; i <= number ; i++){
        let obj = {}
        let n = i
        let powerNow = 1
        while(n !== 1){
            let isChange = n
            for(let j = 0 ; j < arr.length ; j++){
                if(n%arr[j] === 0){
                    n /= arr[j]
                    if(obj[arr[j]]){
                        obj[arr[j]]++
                    }
                    else{
                        obj[arr[j]] = 1
                    }
                    break
                }
            }
            if(isChange === n){
                obj[n] = 1
                n /= n
            }
        }
        for(let key in obj){
            powerNow *= (obj[key]+1)
        }
        if(powerNow <= limit){
            answer += powerNow
        }
        else{
            answer += power
        }
    }
    
    return answer;
}