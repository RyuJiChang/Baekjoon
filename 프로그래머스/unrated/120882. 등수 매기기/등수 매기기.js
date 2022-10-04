function solution(score) {
    let arr = score.map(el => el[0]+el[1]).sort((a,b) => b-a)
    return score.map(el => arr.indexOf(el[0]+el[1])+1)
}