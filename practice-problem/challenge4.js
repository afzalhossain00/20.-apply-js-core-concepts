function hourToSecond(hour) {
    const second = hour * 60 * 60;
    return second;
}
const hourValue = 4;
let totalSecond = hourToSecond(hourValue);
console.log('Total is:', totalSecond, 'seconds')