function solution(n, lost, reserve) {
    let losta = [...new Set(lost.sort((a,b) => a-b))]
    let reservea = [...new Set(reserve.sort((a,b) => a-b))]
    let bad = []
    let losts = []
    let reserves = []
    var answer = n;
    for(let i = 0 ; i < reservea.length ; i++){
        if(losta.includes(reservea[i])){
            bad.push(reservea[i])
        }
        else{
            reserves.push(reservea[i])
        }
    }
    for(let i = 0 ; i < losta.length ; i++){
        if(!bad.includes(losta[i])){
            losts.push(losta[i])
        }
    }
    for(let i = reserves.length-1 ; i >= 0 ; i--){
        if(losts.length === 0){
            return answer - losts.length
        }
        if(reserves[i] > losts[losts.length-1]+1){
            continue
        }
        else if(reserves[i] <= losts[losts.length-1]+1 && reserves[i] >= losts[losts.length-1]-1){
            losts.pop()
        }
        else if(reserves[i] < losts[losts.length-1]-1){
            losts.pop()
            i = i+1
            answer--
        }
    }
    return answer - losts.length;
}