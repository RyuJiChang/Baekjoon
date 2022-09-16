function solution(board, moves) {
    var answer = 0;
    let arr = []
    let stack = []
    let now = 0
    for(let i = 0 ; i < board.length ; i++){
        arr.push(new Array())
    }
    for(let i = board.length-1 ; i >= 0 ; i--){
        for(let j = 0 ; j < board.length ; j++){
            if(board[i][j]){
                arr[j].push(board[i][j])
            }
        }
    }
    for(let i = 0 ; i < moves.length ; i++){
        if(arr[moves[i]-1].length){
            let a = arr[moves[i]-1].pop()
            if(stack.length){
                if( a === stack.slice(-1)[0]){
                    stack.pop()
                    answer += 2
                }
                else{
                    stack.push(a)
                }
            }
            else{
                stack.push(a)
            }
        }
    }
    return answer;
}