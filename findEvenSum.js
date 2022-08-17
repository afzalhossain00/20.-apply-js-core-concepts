function getSomeOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getEvenNumbersOfAnArray(numbers) {
    const evenNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 == 0) {
            console.log(index, element);
            evenNumber.push(element);
        }
    }
    return evenNumber;

}

const myNumbers = [15, 10, 18, 31, 22, 20];
const evenNumber = getEvenNumbersOfAnArray(myNumbers);
console.log(evenNumber);
const evenNumberSum = getSomeOfAnArray(evenNumber);
console.log('Even number sum:', evenNumberSum);

