function subtract() {
    var number1 = document.getElementById("firstNumber").value;
    var number2 = document.getElementById("secondNumber").value;
    var result = parseFloat(number1) - parseFloat(number2);
    var element = document.getElementById("result");
    element.innerText = result;
}