function solution(s) {
    let arr = s.split('').map(Number).filter(el => !isNaN(el))
    if(s.length === 4 && arr.length === 4){
        return true
    }
    if(s.length === 6 && arr.length === 6){
        return true
    }
    
    return false
}