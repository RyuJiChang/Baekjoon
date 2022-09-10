function solution(clothes) {
    let obj = {}
    for(let i = 0 ; i < clothes.length ; i++){
        if(obj[clothes[i][1]]){
            obj[clothes[i][1]]++
        }
        else{
            obj[clothes[i][1]] = 1
        }
    }
    if(Object.keys(obj).length === 1){
        return obj[Object.keys(obj)[0]]
    }
    else{
        let result = 1
        for(let key in obj){
            result *= (obj[key]+1)
        }
        return result-1
    }
}