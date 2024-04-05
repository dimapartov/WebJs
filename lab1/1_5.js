function checkLeapYear(year) {
    return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? 'yes' : 'no'
}

console.log(checkLeapYear(1984));
console.log(checkLeapYear(2003));
console.log(checkLeapYear(4));