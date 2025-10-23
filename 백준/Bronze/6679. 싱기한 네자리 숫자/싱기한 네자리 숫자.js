for(let i = 1000 ; i < 10000 ; i++){
  const digit10 = i.toString().split('').reduce((a,b) => a + b*1, 0)
  const digit12 = i.toString(12).split('').reduce((a,b) => a + parseInt(b, 12), 0)
  const digit16 = i.toString(16).split('').reduce((a,b) => a + parseInt(b, 16), 0)
  if(digit10 == digit12 && digit10 == digit16){
    console.log(i)
  }
}