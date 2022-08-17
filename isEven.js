function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder)
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumber = isEven(80);
const herNumber = isEven(450);
console.log(myNumber, herNumber); 