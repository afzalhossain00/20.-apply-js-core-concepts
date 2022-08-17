function checkEvenOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

let givenNumbers = 65;
let checkResult = checkEvenOdd(givenNumbers);
console.log(checkResult);