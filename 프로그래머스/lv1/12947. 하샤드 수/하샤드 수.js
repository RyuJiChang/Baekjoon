function solution(x) {
    var answer = true;
    let add = 0
    for(let i = 0 ; i < String(x).length ; i++){
        add += Number(String(x)[i])
    }
    if(x % add){
        answer = false
    }
    return answer
}