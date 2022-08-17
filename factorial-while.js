function factorial(number) {
    let i = 1;
    let result = 1;
    while (i <= number) {
        i++;
        result *= i;
    }
    return result;
}
const result = factorial(5)
console.log('Factorial', result);