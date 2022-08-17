/* function findOddSum(array) {
    oddNumberArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            const element = (array[i]);
            oddNumberArray.push(element)
        }
    }
    return oddNumberArray;
}
function sumOfOddNumbers(array) {
    sum = 0;
    for (var j = 0; j < array.length; j++) {
        sum = sum + array[j];
    }
    return sum;
}

var numbers = [5, 7, 8, 10, 45, 30];
var findOdd = findOddSum(numbers);
var result = sumOfOddNumbers(findOdd);
console.log(result); */


// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}


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

const myNumbers = [12, 44, 23, 65, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers)
// console.log(oddNumbers);
const oddNumbersSum = getSomeOfAnArray(oddNumbers);
console.log('Odd number sum is:', oddNumbersSum);
