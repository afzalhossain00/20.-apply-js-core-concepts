// 1*2*3*4*5*6*7
// 5! = 5*4*3*2*1
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
        // console.log(i, result);
    }
    return result;
}
const result = factorial(5)
console.log(result);
