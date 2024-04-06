function subtract(number1, number2) {
    return number1[0] + number1[1] - number2;
}

var number1 = 23;
var number2 = 6;
var number3 = 10;
console.log(subtract([number1, number2], number3));

number1 = 1;
number2 = 17;
number3 = 30;
console.log(subtract([number1, number2], number3));

number1 = 42;
number2 = 58;
number3 = 100;
console.log(subtract([number1, number2], number3));