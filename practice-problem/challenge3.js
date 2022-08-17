function hourToSecond(hour) {
    const checkMinute = hour * 60 * 60;
    return checkMinute;
}
const hourValue = 4;
let totalMinute = hourToSecond(hourValue);
console.log('Total is:', totalMinute, 'minites')