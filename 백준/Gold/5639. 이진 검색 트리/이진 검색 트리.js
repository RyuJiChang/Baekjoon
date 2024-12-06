const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []
let tree = null

const insertNode = (tree, num) => {
    if(tree == null){
        return { value : num, left : null, right : null}
    }
    
    if(num < tree.value){
        tree.left = insertNode(tree.left, num)
    }
    
    if(num > tree.value){
        tree.right = insertNode(tree.right, num)
    }
    
    return tree
}
const getLast = (tree) => {
    if(tree == null){
        return
    }
    getLast(tree.left)
    getLast(tree.right)
    result.push(tree.value)
}

for(let i = 0 ; i < input.length ; i++){
    tree = insertNode(tree, input[i])
}

getLast(tree)
console.log(result.join('\n'))