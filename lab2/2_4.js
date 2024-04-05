function calculate(number1, operation, number2) {
    var result;
    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
        default:
            throw new Error("Неверная операция");
    }
    return result.toFixed(2);
}

console.log(calculate(5, '+', 10));
console.log(calculate(25.5, '-', 3));