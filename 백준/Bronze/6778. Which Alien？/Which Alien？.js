const [antenna, eye] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

if(antenna > 2 && eye < 5){
    console.log('TroyMartian')
}


if(antenna <7 && eye > 1){
    console.log('VladSaturnian')
}


if(antenna < 3 && eye < 4){
    console.log('GraemeMercurian')
}