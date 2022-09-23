function solution(dirs) {
    let answer = []
    let a = 0
    let b = 0
    let a2 = 0
    let b2 = 0
    for(let i = 0 ; i < dirs.length ; i++){
        if(dirs[i] === "U" && a < 5){
            a++
            answer.push(`${a2} ${b2} ${a} ${b}`)
            answer.push(`${a} ${b} ${a2} ${b2}`)
            a2++
        }
        else if(dirs[i] === "D" && a > -5){
            a--
            answer.push(`${a2} ${b2} ${a} ${b}`)
            answer.push(`${a} ${b} ${a2} ${b2}`)
            a2--
        }
        else if(dirs[i] === "L" && b > -5){
            b--
            answer.push(`${a2} ${b2} ${a} ${b}`)
            answer.push(`${a} ${b} ${a2} ${b2}`)
            b2--
        }
        else if(dirs[i] === "R" && b < 5){
            b++
            answer.push(`${a2} ${b2} ${a} ${b}`)
            answer.push(`${a} ${b} ${a2} ${b2}`)
            b2++
        }
    }
    let result = [...new Set(answer)]
    return result.length/2
}