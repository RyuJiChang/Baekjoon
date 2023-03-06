function solution(cards1, cards2, goal) {
    let count = 0
    cards1 = cards1.reverse()
    cards2 = cards2.reverse()
    while(count < goal.length){
        const card1 = cards1.pop()
        const card2 = cards2.pop()
        if(goal[count] === card1){
           count++
           cards2.push(card2)
        }
        else if(goal[count] === card2){
            count++
            cards1.push(card1)
        }
        else{
            return "No"
        }
    }
    return "Yes"
}


// function solution(cards1, cards2, goal) {
//     const indexCheck = {}
//     for(let i = 0 ; i < goal.length ; i++){
//         indexCheck[goal[i]] = i
//     }
//     for(let i = 1 ; i < cards1.length ; i++){
//         if(indexCheck[cards1[i]] < indexCheck[cards1[i-1]] || indexCheck[cards1[i-1]] === undefined) return "No"
//     }
//     for(let i = 1 ; i < cards2.length ; i++){
//         if(indexCheck[cards2[i]] < indexCheck[cards2[i-1]] || indexCheck[cards2[i-1]] === undefined) return "No"
//     }
//     return "Yes"
// }