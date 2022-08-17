// function isLeapYera(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         // console.log('Your year is leap year:', year)
//         return true;
//     }
//     else {
//         // console.log('Your year is not leap year:', year)
//     } return false;
// }
// const isMyYear = isLeapYera(2027);
// console.log('My year:', isMyYear);
// const herMyYear = isLeapYera(2008);
// console.log('My year:', herMyYear);


function isLeapYera(year) {
    // const remainder = year % 4;
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        // console.log('Your year is leap year:', year)
        return true;
    }
    else {
        // console.log('Your year is not leap year:', year)
    } return false;
}
const isMyYear = isLeapYera(2100);
console.log('My year:', isMyYear);
const herMyYear = isLeapYera(2008);
console.log('My year:', herMyYear);

