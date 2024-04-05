const array1 = [5, 15, 23, 56, 35];
const array2 = [-5, 11, 3, 0, 2];

function editArray(array) {
    var sum1 = 0;
    var sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        sum1 += array[i]
        if (array[i] % 2 == 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
        sum2 += array[i];
    }
    console.log(array);
    console.log(sum1);
    console.log(sum2);
}
editArray(array1);
editArray(array2);