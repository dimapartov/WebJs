function progressBar(number) {
    if (number < 0 || number > 100) {
        throw new Error("Введите число от 0 до 100");
    }
    var bar = '[' + '%'.repeat(number / 10) + '.'.repeat(10 - Math.floor(number / 10)) + ']';
    if (number == 100) {
        var percent = "100% Complete!";
        console.log(percent + '\n' + bar);
        return;
    }
    percent = number + "%";
    console.log(percent + ' ' + bar + '\n' + "Still loading...");
}

progressBar(30);
progressBar(50);
progressBar(100);