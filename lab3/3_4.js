var matrix1 = [ [4, 5, 6], [6, 5, 4], [5, 5, 5] ];
var matrix2 = [ [11, 32, 45], [21, 0, 1], [21, 1, 1] ];
var matrix3 = [ [1, 0, 0], [0, 0, 1], [0, 1, 0] ];

function checkMatrix(matrix) {
    var firstRowSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
        firstRowSum += matrix[0][j];
    }
    for (let i = 1; i < matrix.length; i++) {
        var currentRowSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            currentRowSum += matrix[i][j];
        }
        if (currentRowSum !== firstRowSum) {
            return false;
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        var column = 0;
        for (let j = 0; j < matrix.length; j++) {
            column += matrix[j][i];
        }
        if (column !== firstRowSum) {
            return false;
        }
    }
    return true;
}
console.log(checkMatrix(matrix1));
console.log(checkMatrix(matrix2));
console.log(checkMatrix(matrix3));