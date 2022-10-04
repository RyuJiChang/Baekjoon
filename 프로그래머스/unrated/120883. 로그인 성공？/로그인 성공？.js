function solution(id_pw, db) {
    let result = "fail"
    for(let el of db){
        let [a,b] = el
        if(a === id_pw[0] && b === id_pw[1]){
            return "login"
        }
        else if(a === id_pw[0]){
            result = "wrong pw"
        }
    }
    return result
}