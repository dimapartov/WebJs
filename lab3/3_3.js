var array1 = [51, 47, 32, 61, 21];
var array2 = [32, 21, 61, 1];
var array3 = [2, 4, 15, 31];

function rotateArray(array, count) {
    for (let i = 0; i < count; i++) {
        array.push(array.shift());
    }
    return array.join(' ');
}

console.log(rotateArray(array1, 2));
console.log(rotateArray(array2, 4));
console.log(rotateArray(array3, 5));