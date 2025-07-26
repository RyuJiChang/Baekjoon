const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(input[0])
const chapters = input[1].split(' ').map(Number)
const totalPages = []

for(let i = 0; i < chapters.length; i++){
    let pages = chapters[i]
    if(pages % 2 == 1){
        pages += 1
    }
    totalPages.push(pages)
}

const allPages = totalPages.reduce((a, b) => a + b, 0)
const requiredSheets = Math.ceil(allPages / 2)

console.log(requiredSheets)