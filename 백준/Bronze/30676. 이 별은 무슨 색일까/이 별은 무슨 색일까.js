const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input >= 620 && input <= 780){
    console.log("Red")
}
else if(input >= 590 && input < 620){
    console.log("Orange")
}
else if(input >= 570 && input < 590){
    console.log("Yellow")
}
else if(input >= 495 && input < 570){
    console.log("Green")
}
else if(input >= 450 && input < 495){
    console.log("Blue")
}
else if(input >= 425 && input < 450){
    console.log("Indigo")
}
else if(input >= 380 && input < 425){
    console.log("Violet")
}
else {
    console.log("Invalid wavelength")
}