// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.
function findLeapYear(array) {
    leapYearArray = [];
    for (i = 0; i < array.length; i++) {
        if ((array[i] % 4 == 0) && (array[i] % 100 != 0) || (array[i] % 400 == 0)) {
            leapYearArray.push(array[i]);
        }
    }
    return leapYearArray;
}
var listOfYears = [2023, 2024, 2025, 2028, 2030, 1900];
var result = findLeapYear(listOfYears);
console.log('Leap year is:', result);
