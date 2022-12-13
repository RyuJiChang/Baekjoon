function solution(cacheSize, cities) {
    let answer = 0;
    let lruArr = []
    for(let i = 0 ; i < cities.length ; i++){
        let str = cities[i].toUpperCase()
        let idx = lruArr.indexOf(str)
        if(idx !== -1){
            answer += 1
        }
        else{
            answer += 5
        }
        
        
        if(lruArr.length >= cacheSize){
            if(idx === -1){
                lruArr.shift()
            }
            else{
                lruArr.splice(idx,1)
            }
        }
        if(cacheSize){
            lruArr.push(str)
        }
        
    }
    return answer;
}