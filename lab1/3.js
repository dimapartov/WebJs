const myNumber = 7;
const numbers = [2, 3, 6, 7, 10];
var greatestDivisor = 0;
for (let number of numbers) {
    if (myNumber % number == 0) {
        greatestDivisor = number;
    }
}
console.log((greatestDivisor > 0) ? `Число делится на ${greatestDivisor}` : "Не делится");