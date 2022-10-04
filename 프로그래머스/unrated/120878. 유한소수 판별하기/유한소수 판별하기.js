function solution(a, b) {
    var answer = 0;
    let num = Math.max(a,b)
    let before = Math.min(a,b)
    while(num%before !== 0){
        let aa = before
        before =  num%before
        num = aa
    }
    let bottom = b/before
    let arr = []
    while(bottom > 1){
        for(let i = 2 ; i <= bottom ; i++){
            if(bottom%i === 0){
                bottom /= i
                arr.push(i)
                break
            }
        }
    }
    return (arr.filter(el => el !== 2 && el !== 5).length ? 2 : 1)
}