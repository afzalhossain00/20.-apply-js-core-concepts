function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

const yearValue = 2028;
const checkLeapYear = leapYear(yearValue);
console.log(checkLeapYear);