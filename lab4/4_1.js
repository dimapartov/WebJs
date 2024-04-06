function minNumber(number1, number2) {
    return Math.min(number1[0], number1[1], number2);
}

var number1 = 2;
var number2 = 5;
var number3 = 3;
console.log(minNumber([number1, number2], number3));

number1 = 600;
number2 = 342;
number3 = 123;
console.log(minNumber([number1, number2], number3));

number1 = 25;
number2 = 21;
number3 = 4;
console.log(minNumber([number1, number2], number3));