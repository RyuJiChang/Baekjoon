function solution(board) {
    let answer = board[0].length ** 2
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[0].length ; j++){
            if(board[i][j]){
                answer--
            }
            else if(board[i-1] !== undefined && board[i-1][j] === 1){
                answer--
            }
            else if(board[i+1] !== undefined && board[i+1][j] === 1){
                answer--
            }
            else if(board[i][j-1] !== undefined && board[i][j-1] === 1){
                answer--
            }
            else if(board[i][j+1] !== undefined && board[i][j+1] === 1){
                answer--
            }
            else if(board[i-1] !== undefined && board[i-1][j-1] === 1){
                answer--
            }
            else if(board[i+1] !== undefined && board[i+1][j-1] === 1){
                answer--
            }
            else if(board[i-1] !== undefined && board[i-1][j+1] === 1){
                answer--
            }
            else if(board[i+1] !== undefined && board[i+1][j+1] === 1){
                answer--
            }
        }
    }
    return answer
}