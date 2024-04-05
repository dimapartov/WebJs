function summation(number) {
    var sum = 0;
    var numbersArray = number.toString().split('')

    for (let num of numbersArray) {
        sum += parseInt(num);
    }
    return sum;
}

console.log(summation(245678))
console.log(summation(97561))
console.log(summation(543))