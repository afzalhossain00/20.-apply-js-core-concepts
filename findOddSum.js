// get sum all array's element
function getSomeOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i
        const element = numbers[index];
        sum += element;
        // console.log(index, element, sum);
    }
    return sum;
}
// const myNumbers = [12, 44, 23, 65, 45, 91];
// getSomeOfAnArray(myNumbers);


// Get Odd Numbers of an array and get odd Sum of an array
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 44, 23, 65, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers)
console.log(oddNumbers);
const oddNumbersSum = getSomeOfAnArray(oddNumbers);
console.log('Odd number sum', oddNumbersSum);
