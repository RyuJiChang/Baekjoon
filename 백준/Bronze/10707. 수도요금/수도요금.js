const [priceX, basePriceY, limitY, exceedPriceY, usedWater] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const totalX = priceX * usedWater
const totalY = basePriceY + Math.max(0, usedWater - limitY) * exceedPriceY

console.log(Math.min(totalX, totalY))
