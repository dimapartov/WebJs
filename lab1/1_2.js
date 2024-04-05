function roundNumberWithAccuracy(number, accuracy) {
    if (typeof number !== 'number' || typeof accuracy !== 'number') {
        throw new Error("Введенные данные должны быть числами");
    }
    accuracy = (accuracy > 15) ? 15 : accuracy;
    const cutNumber = parseFloat(number.toFixed(accuracy));
    console.log(cutNumber);
}
roundNumberWithAccuracy(3.1415926535897932384626433832795, 2);
roundNumberWithAccuracy(3.1415926535897932384626433832795, 5);
roundNumberWithAccuracy(10.5000000, 3);
roundNumberWithAccuracy("text", 1);