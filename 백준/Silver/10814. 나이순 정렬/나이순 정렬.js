const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let a = input.slice(1)
let result = []
for(let i = 0 ; i <a.length ; i++){
    a[i] = a[i].split(' ')
}
for(let i = 0 ; i <a.length ; i++){
    a[i][0] = Number(a[i][0])
}

a.sort(function(a, b)  {
  return a[0] - b[0];
});
for(let i = 0 ; i < a.length ; i++){
    console.log(`${a[i][0]} ${a[i][1]}`)
}