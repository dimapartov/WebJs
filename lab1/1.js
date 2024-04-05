function getAgeCategory(age) {
    switch (true) {
        case (age < 0):
            throw new Error("Возраст не может быть отрицательным!");
        case (age >= 0 && age <= 2):
            return "Младенец";
        case (age >= 3 && age <= 13):
            return "Ребенок";
        case (age >= 14 && age <= 19):
            return "Подросток";
        case (age >= 20 && age <= 65):
            return "Взрослый";
        default:
            return "Пожилой";
    }
}
console.log(getAgeCategory(1));
console.log(getAgeCategory(3));
console.log(getAgeCategory(14));
console.log(getAgeCategory(20));
console.log(getAgeCategory(66));
console.log(getAgeCategory(-1));