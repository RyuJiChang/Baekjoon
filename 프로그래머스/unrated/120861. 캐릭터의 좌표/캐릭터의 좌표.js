function solution(keyinput, board) {
    let x = 0
    let y = 0
    for(let i = 0 ; i < keyinput.length ; i++){
        if(keyinput[i] === "left"){
            x = Math.max(-Math.floor(board[0]/2),x-1)
        } 
        else if(keyinput[i] === "right"){
            x = Math.min(Math.floor(board[0]/2),x+1)
        } 
        else if(keyinput[i] === "down"){
            y = Math.max(-Math.floor(board[1]/2),y-1)
        } 
        else if(keyinput[i] === "up"){
            y = Math.min(Math.floor(board[1]/2),y+1)
        }  
    }
    return [x,y]
}