function solution(want, number, discount) {
    let answer = 0
    let obj = {}
    for(let i = 0 ; i < discount.length ; i++){
        if(i > 9){
            obj[discount[i-10]]--
            if(obj[discount[i]]){
                obj[discount[i]]++
            }
            else{
                obj[discount[i]] = 1
            }
        }
        else{
            if(obj[discount[i]]){
                obj[discount[i]]++
            }
            else{
                obj[discount[i]] = 1
            }
        }
        let add = 1
        for(let j = 0 ; j < want.length ; j++){
            if(!(obj[want[j]] >= number[j])){
                add = 0
                break
            }
        }
        answer += add
    }
    return answer;
}