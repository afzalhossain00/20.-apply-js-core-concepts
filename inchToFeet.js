// const myInches = 65;
// const myFeet = myInches / 12;
// var height = myFeet.toFixed(2)
// console.log(height);

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

var myInches = 180;
var myFeet = inchToFeet(myInches)
console.log('My Height Is:', myFeet)