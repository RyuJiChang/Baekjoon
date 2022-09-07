function solution(s) {
    if(s.length %2){
        return s.slice(Math.round(s.length/2)-1, Math.round(s.length/2))
    }
    else{
        return s.slice(s.length/2 -1, s.length/2 +1)
    }
}